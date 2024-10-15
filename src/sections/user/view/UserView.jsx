import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import CustomModal from 'src/components/CustomModal';
import HeaderOfTable from 'src/components/HeaderOfTable';
import CustomTable from 'src/components/Table/CustomTable';
import { useGetUsersQuery } from 'src/redux/slices/services';

export default function UserView() {
  const { data, isFetching, isSuccess } = useGetUsersQuery();
  const [users, setUsers] = useState([]);

  const [open, setOpen] = useState(false);

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

  return (
    <Container>
      <HeaderOfTable name="Користувачі" action="Додати користувача" onClick={handleOpen} />

      {isSuccess ? <CustomTable data={users} /> : <h2>fetch</h2>}

      <CustomModal open={open} onClose={handleClose} />
    </Container>
  );
}
