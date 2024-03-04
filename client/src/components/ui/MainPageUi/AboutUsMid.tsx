import { Text, Flex, Image, Box } from '@chakra-ui/react';
import React from 'react';

export default function AboutUs(): JSX.Element {
  return (
    <Box className="wrappre_container" bg="#908059db">
      <Flex className="container">
        <Text className="main_title">Что может предложить GoodTrip?</Text>
        <Flex className="wrapper_img_and_text" direction="row-reverse">
          <Box position="relative" className="img_wrapper">
            <Image
              className="img_top"
              src="https://turizm.pibig.info/uploads/posts/2023-10/1697110938_turizm-pibig-info-p-neobkhodimii-nabor-v-pokhod-instagram-64.jpg"
              alt="Dan Abramov"
            />
          </Box>
          <Flex className="text_wrapper_flex">
              <Text className="title">Что GoodTrip предлагает?</Text>
              <Text className="description">
                Мы организуем походы и экспедиции в уникальные и труднодоступные места нашей
                планеты, выбираем самые красивые и интересные локации и не делим мир на государства.
                Наши путешествиям могут проходить, где угодно: за полярным кругом, в сердце Африки,
                на одном из островов в Океании. Для нас нет границ!
              </Text>
              <Text className="title">Что GoodTrip предоставляет?</Text>
              <Text className="description">
                Мы предоставляем все необходимое групповое снаряжение для конкретного путешествия,
                которое проверено в суровых походных условиях и зарекомендовало себя с лучшей
                стороны. Необходимая личная экипировка предоставляется в аренду по очень
                привлекательной цене.
              </Text>
            {/* <UnorderedList>
            <Flex direction="column">
              <ListItem as="kbd" fontSize="1xl" color="white">
                Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem as="kbd" fontSize="1xl" color="white">
                Consectetur adipiscing elit
              </ListItem>
              <ListItem as="kbd" fontSize="1xl" color="white">
                Integer molestie lorem at massa
              </ListItem>
              <ListItem as="kbd" fontSize="1xl" color="white">
                Facilisis in pretium nisl aliquet
              </ListItem>
            </Flex>
          </UnorderedList> */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
