import { LoginForm } from '@/components/auth';
import { LoginPayload } from '@/models';
import { Box } from '@mui/material';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const handleLoginFormSubmit = async (data: LoginPayload) => {
    console.log('data: ', data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to bottom right, #ffafbd, #ffc3a0)',
      }}
    >
      <LoginForm onSubmit={handleLoginFormSubmit} />
    </Box>
  );
}
