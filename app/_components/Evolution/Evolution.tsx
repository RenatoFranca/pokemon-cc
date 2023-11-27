"use client";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Evolution = ({ url }) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  console.log("data", data?.chain);

  return <>{url}</>;
};

export default Evolution;
