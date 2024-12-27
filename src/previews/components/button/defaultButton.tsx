import { Button } from 'sryd';
import React from 'react';

import type { ComponentDemo } from '../../../interface';

const Demo = () => <Button>default</Button>;

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorBgContainer'],
  key: 'defaultButton',
};

export default componentDemo;
