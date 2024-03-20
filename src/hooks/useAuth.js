import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn } from '../redux/selectors';

export default function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
  };
}
