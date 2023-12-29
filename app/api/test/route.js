export const dynamic = "force-dynamic"; // defaults to auto

export async function GET() {
  console.log("sup");
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/raichu", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

export async function POST() {
  console.log("hola");
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/raichu", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
