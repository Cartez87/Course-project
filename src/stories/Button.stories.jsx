import Button from '../components/Button';

export default {
  title: 'UI-Kit/Button',
  component: Button,
};

const props = {
    text: 'Hello',
    color: 'PRIMARY',
    onClick: () => console.log('it clicked'),
    disabled: false
}

const Template = (args) => <Button {...args} />
export const Primary = Template.bind({});

Primary.args = {
   ...props,
   text: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...props,
  color: 'SECONDARY',
  text: 'Button',
};

export const Transparent = Template.bind({});

Transparent.args = {
  ...props,
  color: 'TRANSPARENT',
  text: 'Button',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  text: 'Button',
  disabled: true
};