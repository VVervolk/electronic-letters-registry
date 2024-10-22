import { useState } from 'react';
// import PropTypes from 'prop-types';

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
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

export default function CustomTableRow({ selected, handleClick, needCheckbox, props }) {
  const { firstName, lastName, unit, position, email } = props;

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
        <TableCell
          sx={{
            display: needCheckbox,
          }}
          padding="checkbox"
        >
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>
        <TableCell
          align="center"
          sx={{
            padding: '16px 24px',
          }}
        >
          {unit}
        </TableCell>

        <TableCell
          align="center"
          sx={{
            padding: '16px 24px',
          }}
        >{`${firstName} ${lastName}`}</TableCell>

        <TableCell
          align="center"
          sx={{
            padding: '16px 24px',
          }}
        >
          {position}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            padding: '16px 24px',
          }}
        >
          {email}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            padding: '16px 24px',
          }}
        >
          <Button
            sx={{
              ':hover': {
                backgroundColor: 'red',
              },
            }}
          >
            <MoreVertIcon
              sx={{
                color: '#212B36',
              }}
            />
          </Button>
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

// CustomTableRow.propTypes = {
//   handleClick: PropTypes.func,
//   selected: PropTypes.any,
//   props: PropTypes.object,
//   name: PropTypes.any,
//   number: PropTypes.number,
//   unit: PropTypes.string,
//   address: PropTypes.string,
//   status: PropTypes.string,
//   role: PropTypes.any,
//   date: PropTypes.object,
// };
