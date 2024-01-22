// import { useState } from 'react';

// import Card from '@mui/material/Card';
// import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

import { letters } from 'src/_mock/letters';

// import Scrollbar from 'src/components/scrollbar';
import HeaderOfTable from 'src/components/HeaderOfTable';
// import CustomTableRow from 'src/components/Table/CustomTableRow';

// import UserTableToolbar from '../user/user-table-toolbar';
// import TableNoData from '../../components/Table/TableNoData';
// import TableEmptyRows from '../../components/Table/TableEmptyRows';
// import CustomTableHead from '../../components/Table/CustomTableHead';
// import { emptyRows, applyFilter, getComparator } from '../user/utils';
import CustomTable from 'src/components/Table/CustomTable';

export default function LetterView(params) {
  // const [page, setPage] = useState(0);

  // const [order, setOrder] = useState('asc');

  // const [selected, setSelected] = useState([]);

  // const [orderBy, setOrderBy] = useState('name');

  // const [filterName, setFilterName] = useState('');

  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleSort = (event, id) => {
  //   const isAsc = orderBy === id && order === 'asc';
  //   if (id !== '') {
  //     setOrder(isAsc ? 'desc' : 'asc');
  //     setOrderBy(id);
  //   }
  // };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = data.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setPage(0);
  //   setRowsPerPage(parseInt(event.target.value, 10));
  // };

  // const handleFilterByName = (event) => {
  //   setPage(0);
  //   setFilterName(event.target.value);
  // };

  // const dataFiltered = applyFilter({
  //   inputData: data,
  //   comparator: getComparator(order, orderBy),
  //   filterName,
  // });

  // const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <HeaderOfTable name="Листи" action="Додати лист" />

      {/* <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <CustomTableHead
                order={order}
                orderBy={orderBy}
                rowCount={data.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'unit', label: 'Підрозділ' },
                  { id: 'number', label: 'Вих.номер' },
                  { id: 'name', label: "Ім'я" },
                  { id: 'address', label: 'Адреса' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <CustomTableRow
                      key={row.id}
                      unit={row.unit}
                      number={row.number}
                      name={row.name}
                      address={row.address}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, data.length)}
                />

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
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card> */}

      <CustomTable data={letters} />
    </Container>
  );
}
