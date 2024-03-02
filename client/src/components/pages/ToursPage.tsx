import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHook';
import { getAllCategoryTourThunk } from '../../redux/thunkActions/categoryTourThunkActions';
import { getAllTourThunk } from '../../redux/thunkActions/tourThunkActions';

export default function ToursPage(): JSX.Element {
  // const catTour = useAppSelector((state) => state.)
  const dispatch = useAppDispatch();

  const tours = useAppSelector((store) => store.tour.tours);
  useEffect(() => {
    void dispatch(getAllTourThunk(0));
  }, []);

  return <div>{tours && tours.map((el) => <div>{el.name}</div>)}</div>;
}
