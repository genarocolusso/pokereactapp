import { Stack, Text, Link  } from "@chakra-ui/react"
import React, { ReactNode } from "react"
import { useLocation } from "react-router-dom"

interface SidebarLinkProps{
children: string,
path: string,
}

export const SidebarLink = ({children, path} : SidebarLinkProps) =>{

    const router = useLocation()

    const activeLocation = router.pathname == path ;
    const color = activeLocation ? "red.400" : "white";
    return (
        <Text fontSize={20} color={color}>{children}</Text>
    )
}