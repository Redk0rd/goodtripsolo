import React from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import UserPageAboutUser from '../ui/userPage/userPageAboutUser/UserPageAboutUser';
import UserPageFeedback from '../ui/userPage/userPageFeedback/UserPageFeedback';
import UserPageTours from '../ui/userPage/userPageTours/UserPageTours';
import '../ui/userPage/userPage.css';
import { useAppSelector } from '../../hooks/useReduxHook';

export default function UserPage(): JSX.Element {
  // const { id } = useParams();
  const user = useAppSelector((state) => state.auth.user);
  return (
    <Box mt={0} p={0}>
      <UserPageAboutUser user={user} />
      <UserPageTours
      //  id={Number(id)}
        />
      <UserPageFeedback />
    </Box>
  );
}
