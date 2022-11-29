import { Box, Button } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField } from '../common/FormFields';

const schema = yup
  .object()
  .shape({
    username: yup.string().required('You must enter your username!'),
    password: yup.string().required('You must enter your password!'),
  })
  .required();

export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data: any) => {
    console.log('data: ', data);
  };

  return (
    <Box component="form" onSubmit={form.handleSubmit(handleSubmit)} sx={{ width: '500px', p: '32px' }}>
      <InputField control={form.control} name="username" label="Username" placeholder="Enter your username" />

      <InputField
        control={form.control}
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
      />

      <Box sx={{ mt: '16px' }}>
        <Button fullWidth type="submit" variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
}
