import { Email, AccountBox, Assessment } from '@mui/icons-material';

const navConfig = [
  {
    title: 'Аналітика',
    path: '/',
    icon: <Assessment />,
  },
  {
    title: 'Користувачі',
    path: '/user',
    icon: <AccountBox />,
  },
  {
    title: 'Листи',
    path: '/letter',
    icon: <Email />,
  },
];

export default navConfig;
