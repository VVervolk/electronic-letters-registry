import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

export default function HeaderOfTable({ name, action, onClick }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4">{name}</Typography>

      <Button
        onClick={onClick}
        variant="contained"
        color="inherit"
        startIcon={<Iconify icon={AddIcon} />}
      >
        {action}
      </Button>
    </Stack>
  );
}

HeaderOfTable.propTypes = {
  name: PropTypes.string,
  action: PropTypes.string,
  onClick: PropTypes.func,
};
