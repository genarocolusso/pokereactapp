import { DrawerCloseButton, DrawerOverlay } from '@chakra-ui/react'
import { Tooltip , DrawerContent, DrawerBody } from '@chakra-ui/react'
import { Box, Drawer, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { SidebarNav } from './SidebarNav'

export function SideMenu() {
   const { isOpen, onClose } = useSidebarDrawer()

   const isDrawerSidebar  = useBreakpointValue({
      base: true,
      lg: false
   })
   
   if (isDrawerSidebar) {
      return (
         <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
            <Tooltip  hasArrow label='!Under_development!'  placement='top-start'>
               <DrawerContent bg="#1D1C1C" p={4}>
                  <DrawerCloseButton mt="6" /> 
                  <DrawerBody>
                     <SidebarNav />
                  </DrawerBody>
               </DrawerContent>
               </Tooltip>
            </DrawerOverlay>
         </Drawer>
      )
   }

   return (
      <Tooltip  hasArrow label='!Under_development!'  placement='top-start'>
      <Box as="aside" w="64" mr="8">
         <SidebarNav />
      </Box>
      </Tooltip>
   )
}
