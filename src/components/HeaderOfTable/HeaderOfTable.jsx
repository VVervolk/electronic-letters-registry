import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

export default function HeaderOfTable({ name, action }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4">{name}</Typography>

      <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
        {action}
      </Button>
    </Stack>
  );
}

HeaderOfTable.propTypes = {
  name: PropTypes.string,
  action: PropTypes.string,
};
