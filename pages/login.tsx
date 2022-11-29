import { LoginForm } from '@/components/auth';
import { Box } from '@mui/material';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  return (
    <Box>
      <LoginForm />
    </Box>
  );
}
