import { Flex , Heading, Image} from "@chakra-ui/react"
import { useMemo } from "react"

export const NotFound = () =>{
 
const randommon = useMemo(() =>{
    return Math.floor(Math.random()* (890 - 1) + 1)
},[])

    return(
        <Flex flexDirection={"column"} w={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Heading as='h1' size='3xl'  >404 <br/>PAGE NOT FOUND</Heading>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${randommon}.png`}
            boxSize={300}/>
        </Flex>
    )
}