import { Badge, Space } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const Demo = () => (
  <Space size="small">
    <Badge dot status={'success'} />
    Success
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorSuccess'],
  key: 'success',
};

export default componentDemo;
