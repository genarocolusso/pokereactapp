import { Link } from "react-router-dom";
import { Link as LinkChakra } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface SidebarLinkProps {
  children: string;
  path: string;
}

export const SidebarLink = ({ children, path }: SidebarLinkProps) => {
  const router = useLocation();

  const activeLocation = router.pathname == path;
  const color = activeLocation ? "red.400" : "white";
  return (
    <LinkChakra fontSize={20} color={color}>
      <Link to={path}>{children}</Link>
    </LinkChakra>
  );
};
