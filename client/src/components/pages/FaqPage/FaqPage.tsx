import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import './styleFAQ.css';

export default function FaqPage(): JSX.Element {
  return (
    <Box className="wrapper_center_FAQ">
      <Box className="faq_container">
        <Accordion allowMultiple w="750px">
          <Flex justify="center">
            <Image src="../../../../public/logo.svg" w="70px" mb="30px" />
          </Flex>
          <Text className="main_title_faq">Вопросы и ответы</Text>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  Какое снаряжение вы предоставляете?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Мы предоставляем все необходимое групповое снаряжение для конкретного путешествия,
              которое проверено в суровых походных условиях и зарекомендовало себя с лучшей стороны.
              Необходимая личная экипировка предоставляется в аренду по очень привлекательной цене.
              Получить полный список основного и дополнительного снаряжения можно у наших
              менеджеров.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  Нужен ли походный опыт?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Мы делаем туризм и активный отдых максимально доступным для всех вне зависимости от
              возраста и физической подготовки. Большинство путешествий подойдут вам, даже если вы
              никогда не были в походах и сплавах. Всему необходимому мы научим. Разумеется, хорошая
              физическая форма будет приятным бонусом и позволит более полно насладиться красотами
              вокруг. Особое внимание физической форме важно уделить для подготовки к путешествиям,
              где предполагаются восхождения и продолжительные автономные походы.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  А что по безопасности?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Безопасность — главный аспект в нашей работе. Мы не набираем большие группы, а каждая
              команда (численностью больше 6 человек) выходит на маршрут во главе с 2-мя опытными
              проводниками, которые каждый год проходят повышение квалификации. Все группы в
              обязательном порядке регистрируются в МЧС, участникам организуется медицинская
              страховка, а группы комплектуются аптечками, спутниковыми телефонами Thuraya и
              GPS-трекерами Iridium, с помощью которых можно в режиме реального времени отслеживать
              местонахождение, уточнять погоду, а также передать новости группы.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  Как покупаем билеты до точки старта путешествия?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Авиа и ж/д билеты каждый участник покупает самостоятельно, учитывая контрольные сроки
              программы. Вы можете прилететь в любое время, главное, не позднее даты и времени
              старта группы. Важно не забыть, что снаряжение выдаётся заранее и нужно учитывать
              габариты и вес багажа в купленном билете. Аналогичная ситуация с отбытием домой.
              Поэтому выбирайте время вылета/отъезда не раньше, чем указано в программе.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  Можно ли с собакой?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Можно и даже нужно! Но важно учесть несколько моментов: позволяет ли регион
              путешествия безопасно ходить с собакой (Камчатка и Сахалин, увы, отпадают), нет ли ни
              у кого-то из участников вашей группы аллергии или страха собак. Если в силу специфики
              маршрута ваш проводник не считает возможным присутствие собаки — никаких ограничений
              нет. Главное правильно подготовить себя и четвероногого друга к приключению!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  А что насчёт гигиены?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              Практически на всех маршрутах мы купаемся в водоёмах и делаем походные бани. На
              большинстве стоянок отсутствуют стационарные туалеты — &ldquo;по делам&ldquo; ходим на
              природе. Мы берём с собой специальный совок, если он в лагере — туалет свободен.
              Совочком выкапываем ямку, делаем дела и закрываем всё грунтом, чтобы не оставлять
              следов. В горах есть своя специфика, об этом мы дополнительно рассказываем на
              организационных встречах. Мы советуем брать с собой биоразлагаемую туалетную бумагу и
              забирать её с собой до завершения маршрута или сжигать в костре.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem w="100%">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" className="title_faq">
                  А если я заболею?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6} pr={10} className="description_faq">
              На каждом маршруте есть групповая аптечка, в которой есть необходимые препараты, при
              этом мы рекомендуем каждому участнику иметь собственную аптечку, в которой будут те
              медикаменты, которые подходят именно вам. Наши проводники проходят курсы оказания
              первой помощи и всегда готовы прийти на помощь – стоит только сообщить о
              необходимости. При этом не важно мозоль это, вывих, простуда, аллергия или общее
              недомогание. Если у вас есть хронические заболевания или недолеченная простуда —
              обязательно сообщите об этом перед стартом маршрута руководителю.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
