import { NextResponse } from 'next/server';
import { GOVERNMENT_SCHEMES, checkSchemeEligibility } from '@/lib/schemeData';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  // Try querying Supabase
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('government_schemes').select('*');
      if (category && category !== 'All') query = query.eq('category', category);
      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, source: 'supabase', data });
      }
    } catch (e) {
      console.warn('Supabase query error:', e);
    }
  }

  // Fallback to local schemes catalog
  let results = GOVERNMENT_SCHEMES;
  if (category && category !== 'All') {
    results = results.filter((s) => s.category === category);
  }

  return NextResponse.json({
    success: true,
    source: 'local_database',
    count: results.length,
    data: results
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const matches = checkSchemeEligibility(body);
    return NextResponse.json({ success: true, matches });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
