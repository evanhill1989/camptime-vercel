export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
    console.log('hi')
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }