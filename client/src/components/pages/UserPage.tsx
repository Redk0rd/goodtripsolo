import React from 'react';
import { Box } from '@chakra-ui/react';
import UserPageAboutUser from '../ui/userPage/userPageAboutUser/UserPageAboutUser';
import UserPageFeedback from '../ui/userPage/userPageFeedback/UserPageFeedback';
import UserPageTours from '../ui/userPage/userPageTours/UserPageTours';
import '../ui/userPage/userPage.css';

export default function UserPage(): JSX.Element {
  return (
    <Box mt={0} p={0}>
      <UserPageAboutUser />
      <UserPageTours />
      <UserPageFeedback />
    </Box>
  );
}
