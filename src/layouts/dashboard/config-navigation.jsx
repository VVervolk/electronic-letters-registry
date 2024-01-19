import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Аналітика',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Користувачі',
    path: '/user',
    icon: icon('ic_user'),
  },
];

export default navConfig;
