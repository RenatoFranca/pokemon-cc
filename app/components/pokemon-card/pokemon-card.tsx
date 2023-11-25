import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PokemonCardProps } from "./pokemon-card.types";
import Image from "next/image";
import { CardImage } from "./pokemon-card.styles";

const getPokemonDetails = async (url: string): Promise<any> => {
  const response = await fetch(url);
  console.log("poke", response);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const PokemonCard = async ({ name, url }: PokemonCardProps) => {
  const pokemon = await getPokemonDetails(url);

  console.log("pokemon", pokemon.types);

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
          Word of the Day!
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
