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
  const { data, isSuccess } = useGetUnitsQuery(undefined, {
    skip: !!units, // Пропускаем запрос, если units уже загружены
    refetchOnMountOrArgChange: false, // Запрос не выполняется заново при монтировании
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && !units) {
      dispatch(setUnits(data));
    }
  }, [isSuccess, units, data]);

  return (
    <>
      <Helmet>
        <title> Головна | ЕРЛ </title>
      </Helmet>

      <AppView />
    </>
  );
}
