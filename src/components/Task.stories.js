import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export const task = {
  id: '1',
  title: 'Text Box',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0,1,9,0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={task} {...actions} />)
  .add('archived', () => <Task task={task} {...actions} />)
