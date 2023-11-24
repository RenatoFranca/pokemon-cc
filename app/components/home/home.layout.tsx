"use client";

import { Main } from "./home.styles";
import { HomeLayoutProps } from "./home.types";

const HomeLayout = ({ children }: HomeLayoutProps) => <Main>{children}</Main>;

export default HomeLayout;
