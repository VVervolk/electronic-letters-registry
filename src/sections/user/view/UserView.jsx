import { useState } from 'react';

import Container from '@mui/material/Container';

import { users } from 'src/_mock/user';

import CustomModal from 'src/components/CustomModal';
import HeaderOfTable from 'src/components/HeaderOfTable';
import CustomTable from 'src/components/Table/CustomTable';

export default function UserView() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <HeaderOfTable name="Користувачі" action="Додати користувача" onClick={handleOpen} />

      <CustomTable data={users} />

      <CustomModal open={open} onClose={handleClose} />
    </Container>
  );
}
