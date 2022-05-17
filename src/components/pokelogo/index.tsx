import { Box, Flex, Icon, useBreakpointValue } from "@chakra-ui/react" 
import { MdMenu, MdClose } from "react-icons/md"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
export const PokeLogo = () => {
 
  const { onOpen } = useSidebarDrawer();
  const isDrawerSidebar  = useBreakpointValue({
    base: true,
    lg: false
 })
 

 
    return (
        <Flex mb={6} justifyContent={"space-between"}> 
        <Box color={"white"} fontSize={"3xl"} fontWeight={"bold"}>
            poke<Box as="span" color={"red.400"}>TeamBuilder</Box>
        </Box>

{ isDrawerSidebar &&  <Flex alignItems={"center"}> 
            <Icon as={MdMenu} onClick={onOpen} />
        </Flex> }
        
        </Flex>
    )

}