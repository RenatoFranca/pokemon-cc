import {
  SkeletonCard,
  SkeletonPokedexNumber,
  SkeletonPokemonImage,
  SkeletonPokemonName,
} from "./PokemonCard.loading.styles";

const PokemonCardLoading = () => {
  return (
    <SkeletonCard>
      <SkeletonPokedexNumber />
      <SkeletonPokemonImage />
      <SkeletonPokemonName />
    </SkeletonCard>
  );
};

export default PokemonCardLoading;
