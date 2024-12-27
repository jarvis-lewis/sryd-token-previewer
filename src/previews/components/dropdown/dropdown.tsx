import { DownOutlined } from '@sryd/icons';
import { Dropdown } from 'sryd';
import React from 'react';

import menu from './menu';

import type { ComponentDemo } from '../../../interface';

const Demo = () => (
  <div>
    <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
      Hover me <DownOutlined />
    </a>
    <Dropdown._InternalPanelDoNotUseOrYouWillBeFired overlay={menu} />
  </div>
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorPrimary', 'colorError', 'colorErrorHover', 'colorBgElevated'],
  key: 'default',
};

export default componentDemo;
