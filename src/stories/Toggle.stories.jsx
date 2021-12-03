import Toggle from '../components/Toggle';

export default {
  title: 'UI-Kit/Toggle',
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Select option',
  showCheckbox: true
};