import { Flex, Image, Text, Button, HStack, Box} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";

const images = [
  "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=",
  "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
];

function CarouselDemo() {
  return (
    <Carousel>
      <CarouselItems>
        {images.map((image, index) => {
          return (
            <CarouselItem index={index} key={image}>
              <Card index={index} image={image} />
            </CarouselItem>
          );
        })}
      </CarouselItems>
      <Toolbar />
    </Carousel>
  );
}

function Toolbar() {
  const { onNext, onPrevious } = useCarousel();
  return (
    <Flex w="full" justify="center">
      <HStack>
        <Button w="115px" onClick={onPrevious}>
          Previous
        </Button>
        <Button w="115px" onClick={onNext}>
          Next
        </Button>
      </HStack>
    </Flex>
  );
}

function Card({ image, index }) {
  const { numberOfSlides, onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      boxSize={isCenter ? "400px" : "300px"}
      pos="relative"
      boxShadow="lg"
      as="button"
      onClick={onClickHandler}
    >
      <Flex
        borderRadius="full"
        bg="whiteAlpha.400"
        p={2}
        left={2}
        top={2}
        position="absolute"
      >
        <Text>{}</Text>
      </Flex>

      <Image
        src={image}
        boxSize={isCenter ? "400px" : "300px"}
        objectFit="cover"
        objectPosition="center center"
        borderRadius={10}
        _hover={{
          scale: 1.1
        }}
      />
    </Flex>
  );
}

export default function App() {
  return (
    <Flex
      height="100vh"
      width="100vww"
      minHeight="1vh"
      justify="flex-start"
      align="flex-start"
      flexDir="column"
      p={10}
      bg="rgb(26,31,42)"
    >
      <Flex bg="rgb(26,31,42)" w="fit-content" gap="10" flexDir="column">
        <CarouselDemo />
      </Flex>
        <Box bg='tomato' w='100vw' p={4} color='white'>
  This is the Box
</Box>
    </Flex>
  );
}
