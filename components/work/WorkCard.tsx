import { Work } from '@/models';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export interface WorkCardProps {
  data: Work;
}

export function WorkCard({ data }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: '246px' },
          height: 0,
          paddingTop: { xs: '73%', md: '180px' },
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <Image fill src={data.thumbnailUrl} alt={data.title} />
      </Box>

      <Box sx={{ flex: '1 0 0', pl: { sx: 0, md: '16px' }, mt: { xs: '16px', md: 0 } }}>
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: '30px', lineHeight: '44px' }}>
          {data.title}
        </Typography>

        <Box sx={{ my: '16px' }}>
          <Typography
            component="span"
            sx={{
              mr: '36px',
              borderRadius: '14px',
              px: '10px',
              bgcolor: 'grey.900',
              color: 'common.white',
              fontWeight: 900,
              fontSize: '18px',
              lineHeight: 1,
            }}
          >
            {data.createdAt}
          </Typography>

          <Typography
            component="span"
            sx={{ color: 'grey.800', fontWeight: 400, fontSize: '20px', lineHeight: '29px' }}
          >
            {data.tags.join(', ')}
          </Typography>
        </Box>

        <Typography component="p">{data.shortDesc}</Typography>
      </Box>
    </Stack>
  );
}
