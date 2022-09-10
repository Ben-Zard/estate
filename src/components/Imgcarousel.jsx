import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion";


export default function Imgcarousel() {
  return (

    <motion.div
    initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 1 }}
    transition={{
      ease: "easeInOut",
      duration: 1,
      delay: 0.6,
    }}
    className='g'>
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  
>          
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
</motion.div>
  )
}
