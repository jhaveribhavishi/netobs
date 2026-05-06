// NetObs Cloudflare Worker — CORS proxy for Anthropic API
// Deploy at: cloudflare.com → Compute → Workers → Create Worker

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (request.method !== 'POST') {
    return new Response('OK', { headers: corsHeaders })
  }

  const apiKey = request.headers.get('x-api-key')
  const body = await request.text()

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: body,
  })

  const text = await resp.text()

  return new Response(text, {
    status: resp.status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json',
    },
  })
}
