import type { NextPage } from "next";
import * as React from "react";
import {
  Container,
  Box,
  Image,
  Flex,
  Grid,
  IconButton,
  Icon,
  IconProps,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import Link from "next/link";

import foods from "@/data/foods.json";

const ArrowIcon = (props: IconProps) => (
  <Icon viewBox="0 0 14 14" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0C7.55228 0 8 0.447715 8 1V10.5858L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858V1C6 0.447715 6.44772 0 7 0Z"
      fill="currentColor"
    />
  </Icon>
);

const Home: NextPage = () => {
  const ROTATION = 36;
  const [active, setActive] = React.useState(0);

  const handleNext = () => {
    if (active < foods.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(foods.length - 1);
    }
  };

  React.useEffect(() => {
    console.log("rotation", ROTATION * active);
  }, [active]);

  return (
    <Layout>
      <Box h="100vh" w="100vw">
        <Container maxW="container.xl">
          <Grid
            justifyItems="center"
            alignItems="flex-end"
            gridTemplateColumns="1fr"
            gridTemplateRows="1fr"
            width="full"
            h="100vh"
          >
            <Flex
              position="absolute"
              w="161vw"
              h="100%"
              bg="orange.100"
              clipPath="circle(60% at 50% -80%)"
              justifyContent="center"
              alignItems="center"
            >
              <Box w={585} h={560} mt={150}>
                <Flex
                  w={560}
                  h={560}
                  border="2px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={280}
                  borderColor="orange.500"
                  borderStyle="dashed"
                  position="relative"
                  transform={`rotate(-${ROTATION * active}deg)`}
                >
                  <Box w="1px" h="1px" position="relative">
                    {foods.map((item, idx) => (
                      <Box
                        h={330}
                        w="100px"
                        position="absolute"
                        key={idx}
                        left="-50px"
                        bottom="0"
                        transform={`rotate(${idx * 36}deg)`}
                        transformOrigin="center bottom"
                      >
                        <Image
                          w={100}
                          h={100}
                          borderRadius={50}
                          src={item.img}
                          alt={item.name}
                        />
                      </Box>
                    ))}
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <Flex
              position="absolute"
              w="100vw"
              h="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Box w={585} h={560} mt={150}>
                <Flex
                  w={560}
                  h={560}
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                >
                  <Flex
                    position="absolute"
                    left="0"
                    top="0"
                    right="0"
                    bottom="0"
                    justify="center"
                    alignItems="center"
                  >
                    <Image
                      w={280}
                      h={280}
                      src={foods[active].img}
                      alt={foods[active].name}
                      filter="drop-shadow(0px 0px 20px rgba(0, 0, 0, .2))"
                    />
                  </Flex>
                  <Flex
                    position="absolute"
                    left="-20px"
                    top="50%"
                    right="-20px"
                    h="40px"
                    justifyContent="space-between"
                  >
                    <IconButton
                      aria-label="prev"
                      icon={<ArrowIcon color="white" />}
                      rounded="full"
                      colorScheme="orange"
                      onClick={handlePrev}
                    />
                    <IconButton
                      aria-label="next"
                      icon={<ArrowIcon color="white" />}
                      rounded="full"
                      colorScheme="orange"
                      onClick={handleNext}
                    />
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Grid
              w="full"
              gridTemplateColumns="3fr 2fr 3fr"
              pb="14"
              alignItems="flex-end"
              columnGap="8"
            >
              <Flex flexDir="column">
                <Heading color="orange.500">{`$${foods[active].price.raw}`}</Heading>
                <Heading as="h1" size="2xl" lineHeight={1.2}>
                  {foods[active].name}
                </Heading>
              </Flex>
              <Flex justifyContent="center">
                <Link href={`/thanks/${foods[active].slug}`} passHref>
                  <Button colorScheme="orange" rounded="full" size="lg" as="a">
                    ORDER NOW
                  </Button>
                </Link>
              </Flex>
              <Flex justifyContent="flex-end">
                <Text ml="16" textAlign="right">
                  {foods[active].description}
                </Text>
              </Flex>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
