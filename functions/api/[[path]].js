export async function onRequestGet({ request, env }) {
  const requestUrl = new URL(request.url);
  const objKey = requestUrl.pathname.slice(1);

  // Try to fetch the object from R2
  const obj = await env.R2_API_STORAGE.get(objKey);

  if (obj === null) {
    return new Response('Not found', { status: 404 });
  }

  // If we land here, the object exists in R2. Now make sure that it's cached
  // aggressively by the browser as the file won't change in the future.
  const responseHeaders = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set('etag', obj.httpEtag);
  headers.append('Cache-Control', 'public, max-age=604800, immutable');

  return new Response(obj.body, {
    headers: responseHeaders
  });
}