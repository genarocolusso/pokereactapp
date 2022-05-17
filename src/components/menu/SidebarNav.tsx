import { Stack, Text } from "@chakra-ui/react"
import { SidebarLink } from "./SidebarLink"

export const SidebarNav = () =>{


    return ( 
    <Stack>
        <Text fontSize={16} color={"#999999"}>Menu</Text>
        <SidebarLink path="/home">Team Builder</SidebarLink>
        <SidebarLink path="/teams">Teams</SidebarLink>
        <SidebarLink path="/favorites">Favorites</SidebarLink>
        <SidebarLink path="/dashboard">Dashboard</SidebarLink>
    </Stack>
    )
}