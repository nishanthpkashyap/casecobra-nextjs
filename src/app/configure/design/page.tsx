import { db } from "@/db";

type Page = {
  searchParams: any;
};

export default async function Page({ searchParams }: Page) {
  const { id } = searchParams;

  const configuration = await db.configuration.create({
    data: {
      height: 500,
      width: 500,
      imageUrl: "http://localhost",
    },
  });
  return <>{id}</>;
}
