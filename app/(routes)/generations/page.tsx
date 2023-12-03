import { Filter } from "@/app/_components/Filter";
import List from "@/app/_components/List";
import axios from "axios";
import { Suspense } from "react";

const getGenerations = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/generation");

  return data?.results;
};

const getUrl = (generations, generation) => {
  if (generation) {
    return generations?.find((item: any) => item.name === generation)?.url;
  }

  return generations?.[0]?.url;
};

const Page = async ({ searchParams }: any) => {
  const generations = await getGenerations();
  const { generation, page } = searchParams || {};
  const url = getUrl(generations, generation);
  const currentPage = page || 1;

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
