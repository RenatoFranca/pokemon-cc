"use client";

import { Main } from "./page.styles";
import { PageLayoutProps } from "./page.types";

const PageLayout = ({ children }: PageLayoutProps) => <Main>{children}</Main>;

export default PageLayout;
