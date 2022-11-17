import { Work } from '@/models';
import React, { Fragment } from 'react';
import { Stack, Divider } from '@mui/material';
import { WorkCard } from './WorkCard';

export interface WorkListProps {
  data: Work[];
}

export function WorkList({ data }: WorkListProps) {
  return (
    <Stack>
      {data.map(x => (
        <Fragment key={x.id}>
          <WorkCard data={x} />
          <Divider sx={{ my: '20px' }} />
        </Fragment>
      ))}
    </Stack>
  );
}
