import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CreditCardA11y } from './CreditCardA11y';

export default {
  title: 'CreditCardA11y',
  component: CreditCardA11y,
  parameters: {
    design: [],
  },
  argTypes: {},
} as ComponentMeta<typeof CreditCardA11y>;

const Template: ComponentStory<typeof CreditCardA11y> = (args) => {
  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <CreditCardA11y />
      </div>
    </div>
  );
};

export const Playgrounds = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playgrounds.args = {};
