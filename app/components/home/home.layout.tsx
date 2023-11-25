import { Main } from "./Home.styles";
import { HomeLayoutProps } from "./Home.types";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Main>{children}</Main>;
};

export default HomeLayout;
