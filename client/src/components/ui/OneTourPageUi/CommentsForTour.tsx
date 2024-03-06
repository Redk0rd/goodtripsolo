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
    <Box className="centerCommentsForTour">
      <Card className="containerCommentsForTour">
        {/* <CardHeader className='styleCardHeader'>
          <Heading size="md" textAlign='center'>Комментарии</Heading> 
        </CardHeader> */}
{comments.length > 0 && (
        <CardBody className="cardForCommet">
          <Stack divider={<StackDivider />} spacing="4">
            {comments.map((comment) => (
              <Box className="bodyCommet" key={comment.id}>
                {' '}
                {/* Added key prop */}
                <Flex align="center" gap="4">
                  {' '}
                  {/* Added alignment and gap */}
                  <Avatar src={comment.img} />
                  <Heading color="white" size="xs" textTransform="uppercase">
                    {comment.User.name}
                  </Heading>
                </Flex>
                <Text className="commentTextTour">{comment.title}</Text>
                <Flex justify='flex-end' position='relative'>
                  <Button size='xs' className='btnSize' onClick={(e) => deleteHandler(e, comment.id)}>Удалить</Button>
                </Flex>
              </Box>
            ))}
          </Stack>
        </CardBody>
        )}
      </Card>
      <form className="formForCommetTour" onSubmit={(e) => submitHandler(e, user.id, Number(id))}>
        <Box mt="10px">
          <Text color="white" textAlign="center" fontSize="20px" mb="10px">
            Оставьте комментарий:
          </Text>
          <Textarea
            className="commentInputForTour"
            name="title"
            placeholder="Ваше мнение?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Flex justify="center">
            <Button className="btnCommetnsForTout" type="submit" mt={4}>
              Написать
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
}
