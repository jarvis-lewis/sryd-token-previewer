import { Spin } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const Demo = () => <Spin />;

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorPrimary', 'colorBgContainer'],
  key: 'default',
};

export default componentDemo;
