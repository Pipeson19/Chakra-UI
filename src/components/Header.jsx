import { Image, Box, Button, ButtonGroup, Flex , Text, Stack } from '@chakra-ui/react';

function Header() {
  return (
    <>
        <Box
        maxHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
         <Image
        src='https://media.viajando.travel/p/4cc733fda9acce69782b0c667f989c51/adjuntos/236/imagenes/000/450/0000450756/1200x0/smart/cicloturismo.jpg'
        alt='atardecer'
        objectFit="cover"
        objectPosition={['center', 'center', ]}
        height="100vh"
        />
        </Box>
        <Box
        display="flex"
        width="100vw"
        h="40vh"
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top={["40vh", "20vh", "30vh"]}
        // top="35vh"
        flexWrap="wrap"
        >
            <Stack spacing={3}>
                <Text
                fontSize={['3xl', '4xl', '3xl']}
                color="white"
                mt={['2rem', '2rem', '2rem']}
                textAlign={['center', 'center', 'center']}
                >
                    DOMINA EL TERRENO</Text>
            </Stack>
        </Box>

        <Box
        display="flex"
        width="100vw"
        h="100vh"
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top={['25%', '1vh', '15vh']}
        flexWrap="wrap"
        >
            <Flex
            direction={['column', 'row']}
            gap="8">
                <Button
                colorScheme='blackAlpha'
                border="solid 2px"
                borderRadius="0"
                width={['18em', 'auto']}
                >
                    VER DETALLES
                </Button>
                <Button
                colorScheme='blackAlpha'
                border="solid 2px"
                borderRadius="0"
                width={['18em', 'auto']}
                >
                    VER VÍDEO
                </Button>
            </Flex>

        </Box>
    </>
  );
}
export default Header;

