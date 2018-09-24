import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

// https://www.learnstorybook.com/react/en
// npm run storybook
// Storyshots addon: npm add --dev @storybook/addon-storyshots react-test-renderer

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// Actions help you verify interactions when building UI components in isolation. 
// Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in. 

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// storiesOf() to register the component, add display name
// action() creates a callback that appears in actions panel

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions} />)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
