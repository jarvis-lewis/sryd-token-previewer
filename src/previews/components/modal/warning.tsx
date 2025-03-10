import { Modal } from 'sryd';
import React from 'react';

import type { ComponentDemo } from '../../../interface';

const Demo = () => {
  return (
    <Modal._InternalPanelDoNotUseOrYouWillBeFired
      type={'confirm'}
      title={'Confirm This?'}
      // @ts-ignore
      autoFocusButton={null}
    >
      Some descriptions.
    </Modal._InternalPanelDoNotUseOrYouWillBeFired>
  );
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorWarning'],
  key: 'warning',
};
export default componentDemo;
