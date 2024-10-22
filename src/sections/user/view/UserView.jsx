import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import CustomModal from 'src/components/CustomModal';
import HeaderOfTable from 'src/components/HeaderOfTable';
import CustomTable from 'src/components/Table/CustomTable';
import { useAddUserMutation, useGetUsersQuery } from 'src/redux/slices/services';
import { useSelector } from 'react-redux';
import { getUnits } from 'src/redux/selectors';

export default function UserView() {
  const { data, isFetching, isSuccess } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const units = useSelector(getUnits);

  useEffect(() => {
    if (isSuccess) {
      setUsers(data);
    }
  }, [isSuccess, data]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(data) {
    const userName = data?.input1.split(' ');
    const userSchema = {
      unitId: data?.selectedOption,
      firstName: userName[1],
      lastName: userName[0],
      email: data?.input3,
      position: data?.input2,
    };
    const newUser = await addUser(userSchema);
    return newUser;
  }

  const headLabel = [
    { id: 'unit', label: 'Підрозділ' },
    { id: 'name', label: "Ім'я" },
    { id: 'role', label: 'Посада' },
    { id: 'email', label: 'Пошта' },
    { id: '' },
  ];
  return (
    <Container>
      <HeaderOfTable name="Користувачі" action="Додати користувача" onClick={handleOpen} />

      {isSuccess ? (
        <CustomTable
          headLabel={headLabel}
          firstRowsPerPage={5}
          rowsPerPageOptions={[5, 10, 25]}
          data={users}
        />
      ) : (
        <h2>fetch</h2>
      )}

      <CustomModal open={open} onClose={handleClose} units={units} onSubmit={handleSubmit} />
    </Container>
  );
}
