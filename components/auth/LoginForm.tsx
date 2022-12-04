import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField, PasswordField } from '../common/FormFields';
import { LoginPayload } from '@/models';

const schema = yup
  .object()
  .shape({
    username: yup.string().required('You must enter your username!'),
    password: yup.string().required('You must enter your password!'),
  })
  .required();

export interface LoginFormProps {
  defaultValues?: LoginPayload;
  onSubmit?: (data: LoginPayload) => void;
}

export function LoginForm(props: LoginFormProps) {
  const { defaultValues = { username: '', password: '' }, onSubmit } = props;

  const form = useForm<LoginPayload>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data: LoginPayload) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(handleSubmit)}
      sx={{ borderRadius: '8px', p: '32px', width: '500px', bgcolor: 'common.white' }}
    >
      <Typography component="h3" variant="h5" align="center" sx={{ mb: '16px' }}>
        Login with your account
      </Typography>

      <InputField control={form.control} name="username" label="Username" placeholder="Enter your username" />

      <PasswordField control={form.control} name="password" label="Password" placeholder="Enter your password" />

      <Box sx={{ mt: '16px' }}>
        <Button fullWidth type="submit" variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
}
