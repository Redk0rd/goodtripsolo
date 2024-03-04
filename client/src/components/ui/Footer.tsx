import { Avatar, Box, Flex, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import './style/center.css';
import './style/footer.css';

export default function Footer(): JSX.Element {
  return (
    <Box className="wrappre_container_center" background="#908059db">
      <Box className="main_container_center">
        <Box className="footer_background">
          <Flex align='center'> 

            <Flex className="coloumn width">
              <Text>© 2024 GOODTRIP. Все права защищены.</Text>
              <Link href="mailto:your-email@example.com">
                your-email@example.com
              </Link>
            </Flex>

            <Flex className="coloumn width">
              <Image className="logo_footer" src="../../../public/logo.svg" />
            </Flex>

            <Flex className="coloumn width" align='flex-start'>

              <Text mb='10px'>Мы в соцсетях:</Text>
              
              <Flex>
              <Image className='logo' src='../../../public/tg_icon.svg' />
              <Link href="xvideos.com">Telegram</Link>
              </Flex>

              <Flex>
              <Image className='logo' src='../../../public/WA_logo.svg' />
              <Link href="xvideos.com">WatsApp</Link>
              </Flex>

              <Flex>
              <Image className='logo' src='../../../public/VK_logo.svg' />
              <Link href="xvideos.com">VK</Link>
              </Flex>

            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
