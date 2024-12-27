import { notification } from 'sryd';
import React from 'react';
import type { ComponentDemo } from '../../../interface';

const { _InternalPanelDoNotUseOrYouWillBeFired } = notification;

const Demo = () => (
  <_InternalPanelDoNotUseOrYouWillBeFired
    message={'Notification Title'}
    type={'warning'}
    description={
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    }
  />
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorWarning'],
  key: 'warning',
};

export default componentDemo;
