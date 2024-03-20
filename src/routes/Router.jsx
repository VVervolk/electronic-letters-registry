import { lazy, Suspense, useEffect } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToken, selectIsLoggedIn } from 'src/redux/selectors';
import { useGetCurrentUserQuery } from 'src/redux/slices/services';
import { refreshCredentials } from 'src/redux/slices/authSlice';

import DashboardLayout from 'src/layouts/DashboardLayout';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LetterPage = lazy(() => import('src/pages/letter'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { data, isFetching, isSuccess } = useGetCurrentUserQuery(
    {},
    { skip: Boolean(!token) || isLoggedIn }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(refreshCredentials(data));
    }
  }, [data, dispatch]);

  const routes = useRoutes([
    {
      element: (
        <PrivateRoute
          component={
            <DashboardLayout>
              <Suspense>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          }
          redirectTo="/login"
          isRefreshing={isFetching}
        />
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'letter', element: <LetterPage /> },
      ],
    },
    {
      path: 'login',
      element: <PublicRoute component={<LoginPage />} />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return isFetching ? <p>Loading</p> : routes;
}
