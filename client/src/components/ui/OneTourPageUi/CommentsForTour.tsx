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
import { useParams } from 'react-router-dom';
import type { CommentTourType, TourType } from '../../../types/tourType';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { addCommentThunk } from '../../../redux/slices/comments/commentThunkActions';
import type { UserType } from '../../../types/authType';

type CommentsProps = {
  comments: CommentTourType[];
};

export default function CommentsForTour({ comments }: CommentsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);

  const { id } = useParams();
  console.log(id);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    userId: UserType['id'],
    tourId: TourType['id'],
  ): void => {
    console.log(e);

    e.preventDefault();
    const newComm = Object.fromEntries(new FormData(e.currentTarget)) as { title: string };
    void dispatch(
      addCommentThunk({ title: newComm.title, tourId: Number(tourId), userId: Number(userId) }),
    );
  };
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
      <form onSubmit={(e) => submitHandler(e, user.id, id)}>
        <Box mt="10px">
          <Text>Оставьте комментарий:</Text>
          <Textarea name="title" placeholder="Here is a sample placeholder" background="white" />
          <Flex justify="flex-end">
            <Button type="submit" mb="10px" mt="10px" colorScheme="blue">
              Написать
            </Button>
          </Flex>
        </Box>
      </form>
    </>
  );
}
