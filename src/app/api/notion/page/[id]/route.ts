import notion from "@/utils/notion";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const recordMap = await notion.getPage(params.id);
  return Response.json(recordMap);
}
