import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from '../../sections/user/utils';

// ----------------------------------------------------------------------

export default function CustomTableHead({
  order,
  orderBy,
  rowCount,
  url,
  numSelected,
  onRequestSort,
  onSelectAllClick,
}) {
  const onSort = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headLabel =
    url === '/user'
      ? [
          { id: 'unit', label: 'Підрозділ' },
          { id: 'name', label: "Ім'я" },
          { id: 'role', label: 'Посада' },
          { id: '' },
        ]
      : [
          { id: 'unit', label: 'Підрозділ' },
          { id: 'number', label: 'Вих.номер' },
          { id: 'date', label: 'Дата' },
          { id: 'name', label: "Ім'я" },
          { id: 'address', label: 'Адреса' },
          { id: 'status', label: 'Статус' },
          { id: '' },
        ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {headLabel.map((headCell) => (
          <TableCell
            padding={url === '/user' ? 'normal' : 'none'}
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
  url: PropTypes.string,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func,
  onSelectAllClick: PropTypes.func,
};
