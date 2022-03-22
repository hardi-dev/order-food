import React, { FC } from "react";
import { Navbar } from "./Navbar";
import { Box } from "@chakra-ui/react";

export const Layout: FC = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Box as="main">{children}</Box>
    </React.Fragment>
  );
};
