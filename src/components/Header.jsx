import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const Header = () => {
    const videoLink = "https://youtu.be/dQw4w9WgXcQ";
  return (
    <Box
      bgImage="url('https://drive.google.com/uc?export=view&id=1L9oZISKFy0lTdUBGdatATU9sMgbhSOH_')"
      bgSize="cover"
      bgPosition="top"
      bgRepeat="no-repeat"
      minHeight="50vh"
      width="300%"
      borderRightWidth="cover"
    >
      <Flex
        align="flex'start"
        justify="center"
        px={4}
        py={8}
        direction="column"
        textAlign="center"
      >
        <Box>
          <Heading as="h1" size="xl" color="white" mb={4}>
            Programación con chakra
          </Heading>
          <Button colorScheme="teal" size="md" mb={2}>
            Ver detalles
          </Button>
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            <Button colorScheme="teal" size="md">
              Ver video
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;