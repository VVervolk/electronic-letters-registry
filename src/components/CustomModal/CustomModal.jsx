import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { LoadingButton } from '@mui/lab';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import { usePathname } from 'src/routes/hooks';
import { Controller, useForm } from 'react-hook-form';

export default function CustomModal({ open, onClose, units, onSubmit }) {
  const url = usePathname();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    },
  });

  async function handleSend(data) {
    const req = await onSubmit(data);
    if ('error' in req) {
      return;
    }
    reset();
    onClose();
  }

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
          Додати нового користувача
        </Typography>
        <form onSubmit={handleSubmit(handleSend)}>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Controller
              name="selectedOption"
              control={control}
              rules={{ required: 'Виберіть підрозділ' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  label="Підрозділ"
                  error={!!errors.selectedOption}
                  helperText={errors.selectedOption?.message}
                  fullWidth
                >
                  {units.map((unit) => (
                    <MenuItem key={unit.id} value={unit.id}>
                      {unit.unitName}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />

            {url === '/user' ? (
              <>
                <Controller
                  name="input1"
                  control={control}
                  rules={{
                    required: "ПІБ працівника обов'язковий",
                    pattern: {
                      value: /^(?:[А-Яа-яІіЇїЄєҐґ'-]+\s+){1}[А-Яа-яІіЇїЄєҐґ'-]+$/,
                      message: "Введіть призвище та ім'я працівника українською",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="ПІБ працівника"
                      error={!!errors.input1}
                      helperText={errors.input1?.message}
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="input2"
                  control={control}
                  rules={{ required: "Посада працівника обов'язкова" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Посада працівника"
                      error={!!errors.input2}
                      helperText={errors.input2?.message}
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="input3"
                  control={control}
                  rules={{
                    required: "Поштова скринька обов'язкова",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Введіть правильну поштову скриньку',
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Поштова скринька"
                      error={!!errors.input3}
                      helperText={errors.input3?.message}
                      fullWidth
                    />
                  )}
                />
              </>
            ) : (
              <>
                <Controller
                  name="input1"
                  control={control}
                  rules={{ required: "Вихідний номер обов'язковий" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Вихідний номер"
                      error={!!errors.input1}
                      helperText={errors.input1?.message}
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="input2"
                  control={control}
                  rules={{ required: "Дата обов'язкова" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Дата"
                      error={!!errors.input2}
                      helperText={errors.input2?.message}
                      fullWidth
                    />
                  )}
                />
              </>
            )}

            <LoadingButton
              type="submit"
              size="large"
              color="primary"
              loading={false}
              variant="contained"
            >
              Зберегти
            </LoadingButton>
          </Box>
        </form>
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
