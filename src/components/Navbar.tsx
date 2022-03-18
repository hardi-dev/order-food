import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";

export const Navbar = () => (
  <Box as="header" pos="fixed" top="47px" left={0} right={0} zIndex={1}>
    <Container maxW="container.xl">
      <Grid gridTemplateColumns="1fr 2fr 1fr" alignItems="center">
        <GridItem>
          <Image src="/logo.svg" w="100px" h="auto" alt="Spin Food" />
        </GridItem>
        <GridItem>
          {/* <Flex as="nav">
            <Link
              mr="12"
              fontWeight="semibold"
              _hover={{ textDecoration: "none", color: "orange.500" }}
            >
              Breakfast
            </Link>
            <Link
              mr="12"
              fontWeight="semibold"
              _hover={{ textDecoration: "none", color: "orange.500" }}
            >
              Lunch
            </Link>
            <Link
              mr="12"
              fontWeight="semibold"
              _hover={{ textDecoration: "none", color: "orange.500" }}
            >
              Dinner
            </Link>
          </Flex> */}
        </GridItem>
        <GridItem>
          <Flex w="full" justify="flex-end">
            Cart
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);
