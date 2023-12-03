"use client";

import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const ListPagination = ({ total, page }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log("---> page", page);

  const onChange = (_event: any, page: number) => {
    router.push(pathname + "?" + createQueryString("page", page.toString()));
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      PAGE: {page}
      <Pagination
        count={total}
        page={+page}
        shape="rounded"
        onChange={onChange}
        color="primary"
      />
    </>
  );
};
