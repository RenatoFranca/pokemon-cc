import {
  CardActionArea,
  CardContent,
  Card as MuiCard,
  Typography,
} from "@mui/material";
import Image from "next/image";
import * as css from "./Card.css";
import Link from "next/link";

type CardProps = {
  id: number;
  name: string;
};

const Card = ({ id, name }: CardProps) => {
  const pokedexId = id.toString().padStart(3, "0");

  return (
    <Link className={css.link} href={`/pokemon/${name}`}>
      <MuiCard>
        <CardActionArea>
          <Typography
            className={css.pokedexNumber}
          >{`#${pokedexId}`}</Typography>
          <Image
            height={200}
            width={200}
            className={css.image}
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokedexId}.png`}
            alt={name}
          />
          <CardContent>
            <Typography className={css.name} component="div" variant="h5">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Link>
  );
};

export default Card;
