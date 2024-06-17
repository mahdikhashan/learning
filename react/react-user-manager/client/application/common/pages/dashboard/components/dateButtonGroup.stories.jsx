import * as React from 'react';

import { DateButtonGroup } from './dateButtonGroup.tsx';

const title = 'App';

export default {
  title,
  component: DateButtonGroup,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <DateButtonGroup {...args} />;

export const ButtonGroup = Template.bind({});
