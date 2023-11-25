import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { PokemonCardProps } from "./PokemonCard.types";
import Image from "next/image";
import { CardImage } from "./PokemonCard.styles";

const getPokemonDetails = async (url: string): Promise<any> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const PokemonCard = async ({ name, url }: PokemonCardProps) => {
  const pokemon = await getPokemonDetails(url);

  const types = pokemon.types.map((type: any) => type.type.name).join(", ");

  return (
    <Card variant="outlined">
      <CardImage>
        <Image
          src={pokemon.sprites.front_default}
          alt={name}
          height={200}
          width={200}
          style={{ objectFit: "contain", width: "100%" }}
        />
      </CardImage>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {types}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See details</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard;
