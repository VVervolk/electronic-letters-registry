import { useState } from 'react';

import Container from '@mui/material/Container';

import { letters } from 'src/_mock/letters';

import CustomModal from 'src/components/CustomModal';
import HeaderOfTable from 'src/components/HeaderOfTable';
import CustomTable from 'src/components/Table/CustomTable';

export default function LetterView(params) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <HeaderOfTable name="Листи" action="Додати лист" onClick={handleOpen} />

      <CustomTable data={letters} />

      <CustomModal open={open} onClose={handleClose} />
    </Container>
  );
}
