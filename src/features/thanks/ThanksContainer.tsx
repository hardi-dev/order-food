import * as React from "react";
import { Layout } from "@/components/Layout";
import {
  Container,
  Box,
  Image,
  Flex,
  Grid,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import foods from "@/data/foods.json";
import { useRouter } from "next/router";
import Link from "next/link";

const Thanks = () => {
  const { query } = useRouter();
  const slug = query["slug"] as string;
  const food = foods.find((item) => item.slug === slug);

  return (
    <Layout>
      <Box h="100vh" w="100vw" bg="orange.100">
        <Container maxW="container.xl" h="full">
          {!!food && (
            <Flex
              h="full"
              w={560}
              pt={150}
              direction="column"
              align="center"
              mx="auto"
              textAlign="center"
            >
              <Text>Thanks for ordering</Text>
              <Heading color="orange" maxW={280} my="8">
                {food.name}
              </Heading>
              <Image
                w={280}
                h={280}
                src={`/${food.img}`}
                alt={food.name}
                filter="drop-shadow(0px 0px 20px rgba(0, 0, 0, .2))"
              />
              <Link href="/" passHref>
                <Button
                  colorScheme="orange"
                  rounded="full"
                  size="lg"
                  as="a"
                  mt="8"
                >
                  BACK TO HOME
                </Button>
              </Link>
            </Flex>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default Thanks;
