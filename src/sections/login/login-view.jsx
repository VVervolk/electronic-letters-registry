import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';

import { useLogInMutation } from 'src/redux/slices/services';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { setCredentials } from 'src/redux/slices/authSlice';

// ----------------------------------------------------------------------

export default function LoginView() {
  const router = useRouter();
  const [logIn] = useLogInMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [showPassword, setShowPassword] = useState(false);

  async function handleClick(credentials) {
    const req = await logIn(credentials);

    if ('data' in req) {
      reset();
      router.push('/');
      dispatch(setCredentials(req.data));
    }
  }

  return (
    <Box
      sx={{
        ...bgGradient({
          direction: '329deg',
          startColor: 'rgba(255,255,255,1) 0%',
          endColor: 'rgba(40,53,147,1) 100%',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
          width: 60,
          height: 60,
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography marginBottom="24px" textAlign="center" variant="h4">
            Увійти в ЕРЛ
          </Typography>

          <form onSubmit={handleSubmit(handleClick)}>
            <Stack spacing={3}>
              <TextField
                error={errors.email && true}
                helperText={errors.email && errors.email.message}
                label="Поштовий адрес"
                {...register('email', {
                  required: "Поштова скринька є обов'язковою",
                  pattern: {
                    value:
                      /^((([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6}\b))|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])))$/,
                    message: 'Введіть корректну поштову скриньку',
                  },
                })}
              />

              <TextField
                error={errors.password && true}
                helperText={errors.password && errors.password.message}
                label="Пароль"
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: "Пароль є обов'язковим",
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? VisibilityIcon : VisibilityOffIcon} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
              <Link variant="subtitle2" underline="hover">
                Забули пароль?
              </Link>
            </Stack>

            <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit">
              Увійти
            </LoadingButton>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
