import { Filter } from "@/app/_components/Filter";
import List from "@/app/_components/List";
import { getGenerations } from "@/app/_services/GamesService";
import { Suspense } from "react";

type PageProps = {
  searchParams: {
    generation: string;
    page: string;
  };
};

const getUrl = (
  generations: { name: string; url: string }[],
  generation: string
) => {
  if (generation) {
    return generations?.find((item) => item.name === generation)?.url;
  }

  return generations?.[0]?.url;
};

const Page = async ({ searchParams }: PageProps) => {
  const generations = await getGenerations();
  const { generation, page } = searchParams || {};
  const url = getUrl(generations, generation);
  const currentPage = page || "1";

  // Remove generation ix
  generations?.splice(8, 1);

  if (
    generations.some(({ name }) => name === generation) === false &&
    generation
  ) {
    throw Error("Invalid generation");
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Filter.Root>
          <Filter.Generations options={generations} />
        </Filter.Root>
      </Suspense>
      <Suspense fallback={<div>Loading List...</div>}>
        {url && <List url={url} page={currentPage} />}
      </Suspense>
    </>
  );
};

export default Page;
