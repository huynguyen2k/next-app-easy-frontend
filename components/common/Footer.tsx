import * as React from 'react';
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export function Footer() {
  const socialsList = [
    { id: 1, icon: Facebook, url: 'https://google.com.vn' },
    { id: 2, icon: Instagram, url: 'https://google.com.vn' },
    { id: 3, icon: Twitter, url: 'https://google.com.vn' },
    { id: 4, icon: LinkedIn, url: 'https://google.com.vn' },
  ];

  return (
    <Box component="footer" sx={{ py: '40px' }}>
      <Container maxWidth="md">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing="40px" sx={{ mb: '16px' }}>
          {socialsList.map(({ icon: Icon, ...social }) => (
            <MuiLink key={social.id} href={social.url} target="_blank" rel="noopener noreferer" component={Link}>
              <Icon sx={{ fontSize: '34px' }} />
            </MuiLink>
          ))}
        </Stack>

        <Typography component="p" align="center">
          Copyright ©2022 All rights reserved
        </Typography>
      </Container>
    </Box>
  );
}
