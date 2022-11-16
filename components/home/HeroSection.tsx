import * as React from 'react';
import { Box, Stack, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import avatar from '@/assets/images/avatar.png';

export function HeroSection() {
  return (
    <Box component="section" sx={{ pt: { xs: '32px', md: '140px' }, pb: { xs: '60px', md: '70px' } }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={{ xs: '40px', md: '106px' }}
        >
          <Box sx={{ flex: '1 0 0' }}>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                fontWeight: '700',
                fontSize: { xs: '32px', md: '44px' },
                lineHeight: { xs: '40px', md: '60px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Hi, I am John, <br /> Creative Technologist
            </Typography>

            <Typography
              component="h3"
              variant="body1"
              sx={{
                mt: { xs: '20px', md: '40px' },
                textAlign: { xs: 'center', md: 'left' },
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>

            <Button
              size="large"
              variant="contained"
              sx={{
                mt: { xs: '26px', md: '38px' },
                position: { xs: 'relative' },
                left: { xs: '50%', md: 0 },
                transform: { xs: 'translate(-50%, 0)', md: 'translate(0, 0)' },
              }}
            >
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              position: 'relative',
              display: 'block',
              width: { xs: '170px', md: '243px' },
              height: { xs: '170px', md: '243px' },
              color: 'secondary.light',
              boxShadow: '-5px 13px',
              borderRadius: '50%',
            }}
          >
            <Image fill src={avatar} alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
