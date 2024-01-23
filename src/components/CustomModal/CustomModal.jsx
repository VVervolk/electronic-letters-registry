import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { LoadingButton } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import { usePathname } from 'src/routes/hooks';

export default function CustomModal({ open, onClose }) {
  const url = usePathname();

  const [selectedOption, setSelectedOption] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSend = () => {
    // Обработка отправки данных
    console.log('Selected Option:', selectedOption);
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    // Дополнительная логика отправки данных...
    onClose();
  };

  return (
    <Modal disableRestoreFocus open={open} onClose={() => onClose()}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography sx={{ mb: 2 }} align="center" variant="h4">
          Додати новий лист
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <TextField
            select
            label="Підрозділ"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            fullWidth
          >
            <MenuItem value="gunp">ГУНП</MenuItem>
            <MenuItem value="golosiivske">Голосіївське</MenuItem>
            <MenuItem value="darnitske">Дарницьке</MenuItem>
            <MenuItem value="desnianske">Деснянське</MenuItem>
            <MenuItem value="dniprovske">Дніпровське</MenuItem>
            <MenuItem value="obolonske">Оболонське</MenuItem>
            <MenuItem value="pecherske">Печерське</MenuItem>
            <MenuItem value="podilske">Подільське</MenuItem>
            <MenuItem value="svyatoshinske">Святошинське</MenuItem>
            <MenuItem value="solomyanske">Солом&apos;янське</MenuItem>
            <MenuItem value="shevchenkivske">Шевченківське</MenuItem>
            <MenuItem value="metro">УП в метрополітені</MenuItem>
            <MenuItem value="riverPort">ВП в річковому порту</MenuItem>
          </TextField>
          {url === '/user' ? (
            <>
              <TextField
                label="ПІБ працівника"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                fullWidth
              />
              <TextField
                label="Посада працівника"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                fullWidth
              />
            </>
          ) : (
            <>
              <TextField
                label="Вихідний номер"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                fullWidth
              />
              <TextField
                label="Дата"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                fullWidth
              />
              <TextField
                label="ПІБ отримувача"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                fullWidth
              />
              <TextField
                label="Адреса отримувача"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                fullWidth
              />
            </>
          )}

          <LoadingButton
            size="large"
            onClick={handleSend}
            color="primary"
            loading={false}
            variant="contained"
          >
            Зберегти
          </LoadingButton>
        </Box>
        <IconButton
          sx={{ color: 'black', position: 'absolute', top: 6, right: 6 }}
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Modal>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
