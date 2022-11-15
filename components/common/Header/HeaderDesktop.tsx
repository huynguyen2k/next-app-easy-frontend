import * as React from 'react';
import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { routes } from '@/constants';
import { useRouter } from 'next/router';

export default function HeaderDesktop() {
  const { pathname } = useRouter();

  return (
    <Box sx={{ display: { xs: 'none', md: 'block' }, py: 2 }}>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          {Object.entries(routes).map(([key, value]) => (
            <MuiLink
              key={key}
              component={Link}
              href={value.url}
              className={pathname === value.url ? 'active' : ''}
              sx={{ fontSize: '1.25rem', fontWeight: 500 }}
            >
              {value.label}
            </MuiLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
