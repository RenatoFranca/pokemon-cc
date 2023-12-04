"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type QueryString = {
  name: string;
  value: string;
};

type FilterGenerationsProps = {
  options: any;
};

export const FilterGenerations = ({ options }: FilterGenerationsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [generation, setGeneration] = useState("generation-i");

  const createQueryString = useCallback(
    (query: QueryString[]) => {
      const params = new URLSearchParams(searchParams);
      query.forEach(({ value, name }) => {
        params.set(name, value);
      });

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const generation = params.get("generation");

    if (generation) {
      setGeneration(generation);
    }
  }, [searchParams]);

  if (!options) return null;

  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;

    setGeneration(value);

    router.push(
      pathname +
        "?" +
        createQueryString([
          {
            name: "generation",
            value,
          },
          {
            name: "page",
            value: "1",
          },
        ])
    );
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="generation">Generation</InputLabel>
      <Select
        labelId="generation"
        displayEmpty
        value={generation}
        label="Generation"
        onChange={handleChange}
      >
        {options.map((option: { name: string }) => {
          return (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
