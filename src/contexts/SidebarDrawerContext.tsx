import { createContext, useContext, ReactNode, useEffect } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useLocation } from "react-router-dom";

type SidebarDrawerProviderProps = {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useLocation()

    useEffect(() => {
        // Toda vez que mudar o caminho da rota, fecha a sidebar
        disclosure.onClose()
    }, [router.pathname]) 
    
 
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
