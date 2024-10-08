import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import type { CommentTourType, TourType } from '../../types/tourType';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { formatDate } from '../../utils/dataFormater';
import AboutTour from '../ui/OneTourPageUi/AboutTour';
import { allCommentsThunk } from '../../redux/slices/comments/commentThunkActions';
import CommentsForTour from '../ui/OneTourPageUi/CommentsForTour';
import { getOneTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';

export default function OneTourPage(): JSX.Element {
  const { id } = useParams();
  const tour = useAppSelector((state) => state.tour.oneTour);
  const comments = useAppSelector((state) => state.comment.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(allCommentsThunk(Number(id)));
  }, []);

  useEffect(() => {
    void dispatch(getOneTourThunk(Number(id)));
  }, []);

  if (!tour) {
    return <h1>Tour not found</h1>;
  }

  return (
    <Box className="one_tour_container">
      <Container className="aboutTourContainer">
        <AboutTour tour={tour} />
        <CommentsForTour comments={comments} />
      </Container>
    </Box>
  );
}
