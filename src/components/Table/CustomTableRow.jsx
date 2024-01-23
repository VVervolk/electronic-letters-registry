import { useState } from 'react';
import PropTypes from 'prop-types';

import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import dateFormatter from 'src/helpers/dateFormatter';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CustomTableRow({ selected, handleClick, props }) {
  const { name, unit, address, number, role, status, date } = props;

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        {number ? (
          <>
            <TableCell padding="none">
              <Typography variant="subtitle2" noWrap>
                {unit}
              </Typography>
            </TableCell>

            <TableCell padding="none">{number}</TableCell>

            <TableCell padding="none">{dateFormatter(date)}</TableCell>
            <TableCell padding="none">{name}</TableCell>

            <TableCell padding="none">{address}</TableCell>
            <TableCell padding="none">{status}</TableCell>
          </>
        ) : (
          <>
            <TableCell>
              <Typography variant="subtitle2" noWrap>
                {unit}
              </Typography>
            </TableCell>

            <TableCell>{name}</TableCell>

            <TableCell>{role}</TableCell>
          </>
        )}

        <TableCell padding={number ? 'none' : 'normal'} align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon={MoreVertIcon} />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon={EditIcon} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon={DeleteIcon} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

CustomTableRow.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.any,
  props: PropTypes.object,
  name: PropTypes.any,
  number: PropTypes.number,
  unit: PropTypes.string,
  address: PropTypes.string,
  status: PropTypes.string,
  role: PropTypes.any,
  date: PropTypes.object,
};
