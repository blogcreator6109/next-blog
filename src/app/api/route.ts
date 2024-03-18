import notion from "@/utils/notion";

export async function GET() {
  const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");
  return Response.json(recordMap);
}
