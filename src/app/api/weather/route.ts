import { NextResponse } from 'next/server';
import { getWeatherForLocation, LOCATION_WEATHER_CACHE } from '@/lib/weatherService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location') || 'Sehore, Madhya Pradesh';

  const data = getWeatherForLocation(location);

  return NextResponse.json({
    success: true,
    data,
    availableLocations: Object.keys(LOCATION_WEATHER_CACHE)
  });
}
