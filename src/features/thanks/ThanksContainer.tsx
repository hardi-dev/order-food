import * as React from "react";
import { Layout } from "@/components/Layout";
import {
  Container,
  Box,
  Image,
  Flex,
  Button,
  Heading,
  Text,
  FlexProps,
  ImageProps,
  TextProps,
  HeadingProps,
  ButtonProps,
} from "@chakra-ui/react";
import foods from "@/data/foods.json";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const MotionFlex = motion<FlexProps>(Flex);
const MotionImage = motion<ImageProps>(Image);
const MotionText = motion<TextProps>(Text);
const MotionHeading = motion<HeadingProps>(Heading);
const MotionButton = motion<ButtonProps>(Button);

const ButtonScaleVariants: Variants = {
  hover: {
    scale: 1.2,
  },
  tap: {
    scale: 0.75,
  },
};

const FadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Thanks = () => {
  const { query } = useRouter();
  const slug = query["slug"] as string;
  const food = foods.find((item) => item.slug === slug);

  return (
    <Layout>
      <Box h="100vh" w="100vw" bg="orange.100">
        <Container maxW="container.xl" h="full">
          {!!food && (
            <MotionFlex
              h="full"
              w={560}
              pt={150}
              direction="column"
              align="center"
              mx="auto"
              textAlign="center"
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionText variants={FadeUpVariants}>
                Thanks for ordering
              </MotionText>
              <MotionHeading
                variants={FadeUpVariants}
                color="orange"
                maxW={280}
                my="8"
              >
                {food.name}
              </MotionHeading>
              <MotionImage
                variants={FadeUpVariants}
                w={280}
                h={280}
                src={`/${food.img}`}
                alt={food.name}
                filter="drop-shadow(0px 0px 20px rgba(0, 0, 0, .2))"
              />
              <Link href="/" passHref>
                <MotionButton
                  variants={{ ...FadeUpVariants }}
                  colorScheme="orange"
                  rounded="full"
                  size="lg"
                  as="a"
                  mt="8"
                >
                  BACK TO HOME
                </MotionButton>
              </Link>
            </MotionFlex>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default Thanks;
