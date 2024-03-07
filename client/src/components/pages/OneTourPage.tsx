// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Container } from '@chakra-ui/react';
// import type { CommentTourType, TourType } from '../../types/tourType';
// import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
// import { formatDate } from '../../utils/dataFormater';
// import AboutTour from '../ui/OneTourPageUi/AboutTour';
// import './center.css';
// import { allCommentsThunk } from '../../redux/slices/comments/commentThunkActions';
// import CommentsForTour from '../ui/OneTourPageUi/CommentsForTour';
// import { getOneTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';
// // import { getAllTourThunk } from '../../redux/slices/categoryTour/tourThunkActions';

// export default function OneTourPage(): JSX.Element {
//   const { id } = useParams();
//   const tour = useAppSelector((state) => state.tour.oneTour);
//   const comments = useAppSelector((state): CommentTourType[] => state.comment.comments);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     void dispatch(allCommentsThunk(Number(id)));
//   }, []);

// нахуя там два тур пейджа?

//   useEffect(() => {

//     void dispatch(getOneTourThunk(Number(id)));
//   }, []);

//   if (!tour) {
//     return <div>Tour not found</div>;
//   }

//   return (
//     <Box className="center_100">
//       <Box className="center">
//         <Container minH="80vh">
//           <AboutTour tour={tour} />
//           <CommentsForTour comments={comments} />
//         </Container>
//       </Box>
//     </Box>
//   );
// }
