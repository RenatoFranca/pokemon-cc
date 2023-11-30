import { Box, Typography } from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";

type PokemonDetailsWeight = {
  weight?: number;
};

export const PokemonDetailsWeight = ({ weight }: PokemonDetailsWeight) => {
  return (
    <>
      {weight && (
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX={2}
          flexDirection="column"
        >
          <Typography
            variant="h6"
            flex={1}
            display="flex"
            alignItems="center"
            gap={1}
            fontSize="0.8rem"
          >
            <ScaleIcon fontSize="small" /> {weight * 0.1} kg
          </Typography>
          <Typography
            color="text.secondary"
            variant="h6"
            fontSize="0.8rem"
            marginTop={1}
          >
            Weight
          </Typography>
        </Box>
      )}
    </>
  );
};
