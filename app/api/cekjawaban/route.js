export async function GET(request) {
  const angka = request.nextUrl.searchParams.get("angka");

  if (angka === "3") {
    return new Response("Benar!");
  } else {
    return new Response("Salah!");
  }
}
