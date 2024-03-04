import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import type { CommentTourType } from '../../../types/tourType';

type CommentsProps = {
  comments: CommentTourType[];
};

export default function CommentsForTour({ comments }: CommentsProps): JSX.Element {
  //   const comms = [
  //     {
  //       title: 'Отличный тур!',
  //       userId: 'JORA',
  //       img: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg',
  //       tourId: 1,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     },
  //     {
  //       title: 'Спасибо за отличное путешествие!',
  //       userId: 'VOVA',
  //       img: 'https://cdn.sortiraparis.com/images/80/66131/994455-avatar-frontiers-of-pandora-le-jeu-d-ubisoft-est-passe-gold.jpg',
  //       tourId: 2,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     },
  //     {
  //       title: 'Прекрасный отдых, рекомендую!',
  //       userId: 'MAMA',
  //       img: 'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_kiri_16x9_1098_04_39d940d1.jpeg?region=0%2C60%2C1920%2C960',
  //       tourId: 3,
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     },
  //   ];
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Comments</Heading> {/* Updated text */}
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {comments.map((comm) => (
              <Box key={comm.id}>
                {' '}
                {/* Added key prop */}
                <Flex align="center" gap="4">
                  {' '}
                  {/* Added alignment and gap */}
                  <Avatar src={comm.img} />
                  <Heading size="xs" textTransform="uppercase">
                    {comm.User.name}
                  </Heading>
                </Flex>
                <Text pt="2" fontSize="sm">
                  {comm.title}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Box mt="10px">
        <Text>Оставьте комментарий:</Text>
        <Textarea placeholder="Here is a sample placeholder" background='white'/>
        <Flex justify="flex-end">
          <Button mb="10px" mt="10px" colorScheme="blue">
            Написать
          </Button>
        </Flex>
      </Box>
    </>
  );
}
