import { Box, Typography } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";

type PokemonDetailsHeightProps = {
  height?: number;
};

export const PokemonDetailsHeight = ({ height }: PokemonDetailsHeightProps) => {
  return (
    <>
      {height && (
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderLeft="solid 1px #dbd9d9"
          borderRight="solid 1px #dbd9d9"
          paddingX={2}
          flexDirection="column"
        >
          <Typography
            variant="h6"
            flex={1}
            display="flex"
            alignItems="center"
            fontSize="0.8rem"
          >
            <HeightIcon fontSize="small" /> {(height * 0.1).toFixed(1)} m
          </Typography>
          <Typography
            color="text.secondary"
            variant="h6"
            fontSize="0.8rem"
            marginTop={1}
          >
            Height
          </Typography>
        </Box>
      )}
    </>
  );
};
