This project uses the [PokéAPI](https://pokeapi.co) to create a Pokédex.

## Getting Started

### Install the dependencies

```bash
yarn install
```

### Run the project

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Pokédex.

## Technologies

**[Next.js](https://nextjs.org)**

This project uses one of the most used `React Framework` to take advantage of built-in features like:

- Routing
- Server and client components
- Error handling
- Composition patterns

**[MUI](https://mui.com)**

MUI was chosen as the `React UI framework` for this project. It is a popular choice for React developers and has a large community. It has a lot of `ready-to-use` components inside a React project and a good feature is the Themes, that is used in this project to define the colors for the Pokémon types `Chips`.

**[SWR](https://swr.vercel.app)**

It is a `React Hook` for data fetching. Simple to use.

**[react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)**

A lib that uses the `Intersection Observer API` that is used in this project to create an infinity scroll.

## Next steps

This is a new project, there was not much time available and as expected it needs a lot of improvements:

- Unit tests
- ~~Favorite option~~
- Display more data in the Pokémon detail page
- Show the evolution chain
- Improve the layout
- Some components need improvements:
  - `PokemonDetails.tsx`
  - `PokemonList.tsx`
  - `app/template.tsx`
- ~~Add a better pre-loader in the Pokémon list page~~
- Add a pre-loader in the Pokémon details page
