import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Scrollbar from 'src/components/scrollbar';
import TableNoData from 'src/components/Table/TableNoData';
import TableEmptyRows from 'src/components/Table/TableEmptyRows';
import CustomTableRow from 'src/components/Table/CustomTableRow';
import CustomTableHead from 'src/components/Table/CustomTableHead';

import UserTableToolbar from 'src/sections/user/user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from 'src/sections/user/utils';

export default function CustomTable({ data, headLabel, firstRowsPerPage, rowsPerPageOptions }) {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('unit');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(firstRowsPerPage);
  // const [rowsPerPage, setRowsPerPage] = useState(url === '/user' ? 5 : 25);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    setSelected((prevSelected) => {
      const isSelected = prevSelected.includes(row);

      if (isSelected) {
        return prevSelected.filter((item) => item !== row);
      } else {
        return [...prevSelected, row];
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: data,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Card>
      <UserTableToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />

      <Scrollbar>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{ minWidth: 800 }}>
            <CustomTableHead
              needCheckbox={'none'}
              order={order}
              orderBy={orderBy}
              rowCount={data.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={headLabel}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <CustomTableRow
                    key={row.id}
                    needCheckbox={'none'}
                    props={row}
                    selected={selected.indexOf(row) !== -1}
                    handleClick={(event) => handleClick(event, row)}
                  />
                ))}

              <TableEmptyRows height={77} emptyRows={emptyRows(page, rowsPerPage, data.length)} />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        page={page}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={rowsPerPageOptions}
        // rowsPerPageOptions={url === '/user' ? [5, 10, 25] : [25, 50, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

CustomTable.propTypes = {
  data: PropTypes.array,
};
