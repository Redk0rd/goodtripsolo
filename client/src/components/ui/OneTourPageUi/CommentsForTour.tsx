/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { CommentTourType, TourType } from '../../../types/tourType';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import {
  addCommentThunk,
  deleteCommentThunk,
} from '../../../redux/slices/comments/commentThunkActions';
import type { UserType } from '../../../types/authType';

type CommentsProps = {
  comments: CommentTourType[];
};

export default function CommentsForTour({ comments }: CommentsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  const [title, setTitle] = useState('');

  const { id } = useParams();

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    userId: UserType['id'],
    tourId: TourType['id'],
  ): void => {
    e.preventDefault();
    void dispatch(addCommentThunk({ title, tourId: Number(tourId), userId: Number(userId) }));
    setTitle('');
  };

  const deleteHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    commentId: CommentTourType['id'],
  ): void => {
    e.preventDefault();
    void dispatch(deleteCommentThunk(commentId));
  };

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Comments</Heading> {/* Updated text */}
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {comments.map((comment) => (
              <Box key={comment.id}>
                {' '}
                {/* Added key prop */}
                <Flex align="center" gap="4">
                  {' '}
                  {/* Added alignment and gap */}
                  <Avatar src={comment.img} />
                  <Heading size="xs" textTransform="uppercase">
                    {comment.User.name}
                  </Heading>
                </Flex>
                <Text pt="2" fontSize="sm">
                  {comment.title}
                </Text>
                <Button onClick={(e) => deleteHandler(e, comment.id)}>Удалить</Button>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <form onSubmit={(e) => submitHandler(e, user.id, Number(id))}>
        <Box mt="10px">
          <Text>Оставьте комментарий:</Text>
          <Textarea
            name="title"
            placeholder="Here is a sample placeholder"
            value={title}
            background="white"
            onChange={(e) => setTitle(e.target.value)}
          />
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
