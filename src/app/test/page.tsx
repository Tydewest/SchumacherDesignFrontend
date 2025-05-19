// app/page.tsx
import { headers } from 'next/headers';

export default async function Page() {
  const headersList = headers(); // not async
  const ip =
    (await headersList).get('x-forwarded-for')?.split(',')[0]?.trim() ||
    (await headersList).get('x-real-ip') ||
    '0.0.0.0';

  const res = await fetch(`http://ip-api.com/json/${ip}?fields=zip,country,regionName,city,query`, {
    cache: 'no-store',
  });

  const location = await res.json();

  return (
    <main className="p-4">
      <h1>IP Geolocation</h1>
      <p>{location.city}, {location.regionName}, {location.country}, {location.zip} </p>
    </main>
  );
}
