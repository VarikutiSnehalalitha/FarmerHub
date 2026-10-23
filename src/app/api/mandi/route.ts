import { NextResponse } from 'next/server';
import { MANDI_SAMPLE_DATA, calculateNetMandiReturn } from '@/lib/mandiData';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const commodity = searchParams.get('commodity');
  const state = searchParams.get('state');

  // Try querying Supabase if available
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('mandi_prices').select('*');
      if (commodity) query = query.ilike('commodity', `%${commodity}%`);
      if (state && state !== 'All') query = query.eq('state', state);

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return NextResponse.json({ success: true, source: 'supabase', data });
      }
    } catch (e) {
      console.warn('Supabase query error, fallback to local dataset:', e);
    }
  }

  // Fallback to local high quality AGMARKNET cache
  let results = MANDI_SAMPLE_DATA;
  if (commodity) {
    results = results.filter((m) =>
      m.commodity.toLowerCase().includes(commodity.toLowerCase())
    );
  }
  if (state && state !== 'All') {
    results = results.filter((m) => m.state === state);
  }

  return NextResponse.json({
    success: true,
    source: 'agmarknet_cache',
    count: results.length,
    data: results
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const calculation = calculateNetMandiReturn(body);
    return NextResponse.json({ success: true, calculation });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
