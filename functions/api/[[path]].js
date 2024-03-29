export async function onRequestGet({ request, env }) {
  try{
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
    obj.writeHttpMetadata(responseHeaders);
    responseHeaders.set('etag', obj.httpEtag);
    responseHeaders.append('Cache-Control', 'public, max-age=604800, immutable');

    return new Response(obj.body, {
      headers: responseHeaders
    });
  }catch(e){
    return new Response("Error occured: " + e, {status: 500});
  } 
}