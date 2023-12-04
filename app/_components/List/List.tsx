import axios from "axios";
import { ListPagination } from "./ListPagination";
import { Container, Grid } from "@mui/material";
import Card from "../Card";

const pokemonList = async (url: string) => {
  const { data } = await axios.get(url);

  return data?.pokemon_species;
};

const List = async ({ url, page }: any) => {
  const size = 20;
  const start = (page - 1) * size;
  const end = page * size;
  const list = await pokemonList(url);
  const totalPages = Math.ceil(list?.length / size);
  const sortedList = list
    ?.map((item: any) => {
      const id = item.url.split("/")[6];

      return {
        ...item,
        id,
      };
    })
    .sort((a: any, b: any) => a.id - b.id)
    .slice(start, end);

  return (
    <Container>
      <Grid container spacing={2} marginTop={0} marginBottom={2}>
        {sortedList?.map((item: any) => {
          return (
            <Grid lg={3} md={4} xs={6} item key={item.name}>
              <Card id={item.id} name={item.name} />
            </Grid>
          );
        })}
      </Grid>
      <ListPagination total={totalPages} page={page} />
    </Container>
  );
};

export default List;
