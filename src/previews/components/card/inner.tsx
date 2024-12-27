import { Card, Space } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const Demo = () => (
  <Space>
    <Card type="inner" title="Inner Card title">
      Inner Card content
    </Card>
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorFillAlter'],
  key: 'inner',
};

export default componentDemo;
