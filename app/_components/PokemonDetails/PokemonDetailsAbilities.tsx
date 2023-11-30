import { Box, Typography } from "@mui/material";
import { PokemonDetailsAbilitiesProps } from "./PokemonDetails.types";

export const PokemonDetailsAbilities = ({
  abilities,
}: PokemonDetailsAbilitiesProps) => {
  return (
    <>
      {abilities && (
        <Box flex={1} display="flex" flexDirection="column" paddingX={2}>
          <Box flex={1} textTransform="capitalize">
            {abilities.map(({ ability, slot }) => (
              <Typography key={slot} variant="h6" fontSize="0.8rem">
                {ability.name}
              </Typography>
            ))}
          </Box>

          <Typography
            variant="h6"
            fontSize="0.8rem"
            textAlign="center"
            marginTop={1}
            color="text.secondary"
          >
            Abilities
          </Typography>
        </Box>
      )}
    </>
  );
};
