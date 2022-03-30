import React from 'react';
import MasonryBrick from '../../atoms/masonryBrick/MasonryBrick';
import { Grid } from './styles';

function MasonryGrid() {
  return (
    <Grid>
      <MasonryBrick ratio={16 / 9} />
      <MasonryBrick ratio={4 / 3} />
      <MasonryBrick ratio={3 / 4} />
    </Grid>
  );
}

export default MasonryGrid;
