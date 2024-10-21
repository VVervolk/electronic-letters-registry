import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { getUnits } from 'src/redux/selectors';
import { setUnits } from 'src/redux/slices/appSlice';
import { useGetUnitsQuery } from 'src/redux/slices/services';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  const units = useSelector(getUnits);
  const { data } = useGetUnitsQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!units.length) {
      dispatch(setUnits(data));
    }
  }, [units, data]);

  return (
    <>
      <Helmet>
        <title> Головна | ЕРЛ </title>
      </Helmet>

      <AppView />
    </>
  );
}
