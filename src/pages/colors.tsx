import React from 'react';

import { NextPage } from 'next';

import ColorsContainer from 'src/containers/colors';

export type Props = {
  className?: string;
};

const Colors: NextPage<Props> = () => {
  return <ColorsContainer />;
};

export default Colors;
