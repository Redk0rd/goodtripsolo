import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import type { CommentTourType, TourType } from '../../../types/tourType';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHook';
import { formatDate } from '../../../utils/dataFormater';
import AboutTour from '../../ui/OneTourPageUi/AboutTour';
import '../center.css';
import './oneTourStyle.css';
import { allCommentsThunk } from '../../../redux/slices/comments/commentThunkActions';
import CommentsForTour from '../../ui/OneTourPageUi/CommentsForTour';
import { getAllTourThunk } from '../../../redux/slices/categoryTour/tourThunkActions';

export default function OneTourPage(): JSX.Element {
  const { id } = useParams();
  const tours = useAppSelector((state) => state.tour.tours);
  const comments = useAppSelector((state): CommentTourType[] => state.comment.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(allCommentsThunk(Number(id)));
    void dispatch(getAllTourThunk(0));
  }, []);
  console.log(comments);

  // Преобразуем id в число для сравнения, если ваши ID представлены числами
  const tour = tours.find((el) => el.id === Number(id));
  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <Box className="one_tour_container">
      <Container className='aboutTourContainer'>
        <AboutTour tour={tour} />
        <CommentsForTour comments={comments} />
      </Container>
    </Box>
  );
}
