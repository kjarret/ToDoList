import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex p="2rem" direction="column" alignItems="center">
        <Heading as="h1" size="4xl" noOfLines={1} className="tasklist-title">
          TaskList.io
        </Heading>
        <Text mt="1rem" className="tasklist-slogan">
          TaskList est un outil open-source qui vous simplifie la vie.
        </Text>
      </Flex>
    </>
  );
};

export default Header;