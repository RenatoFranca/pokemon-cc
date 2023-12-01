import { PokemonDetailsAbilitiesProps } from "./PokemonDetails.types";
import { AbilityBox, AbilityName, AbilityTitle } from "./PokemonDetails.styles";
import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <AbilityBox>
      <Skeleton variant="rounded" width="100%" height={60} />
    </AbilityBox>
  );
};

export const PokemonDetailsAbilities = ({
  abilities,
  isLoading,
}: PokemonDetailsAbilitiesProps) => {
  if (isLoading) return <Loading />;

  if (!abilities) return null;

  return (
    <AbilityBox>
      {abilities.map(({ ability, slot }) => (
        <AbilityName key={slot}>{ability.name}</AbilityName>
      ))}

      <AbilityTitle>Abilities</AbilityTitle>
    </AbilityBox>
  );
};
