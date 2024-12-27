import { Badge, Space } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const Demo = () => (
  <Space size="small">
    <Badge dot status={'processing'} />
    Process
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorPrimary'],
  key: 'progress',
};

export default componentDemo;
