"use client";

import { Box, Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const ListPagination = ({ total, page }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <Box display="flex" justifyContent="center" marginBottom={2}>
      <Pagination
        count={total}
        page={+page}
        shape="rounded"
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
};
