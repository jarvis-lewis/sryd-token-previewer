import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@sryd/icons';
import { Space } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const Demo = () => (
  <Space>
    <HomeOutlined /> <SettingFilled /> <SmileOutlined /> <SyncOutlined spin />
    <SmileOutlined rotate={180} /> <LoadingOutlined />
  </Space>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  key: 'default',
};

export default componentDemo;
