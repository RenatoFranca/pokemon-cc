import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PokemonCardProps } from "./pokemon-card.types";

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
      <CardMedia
        sx={{ height: 140 }}
        image={pokemon.sprites.front_default}
        title="green iguana"
      />
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
