import Logo from '../components/Logo';
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: 'UI-Kit/Logo',
  component: Logo
};

const Template = (args) => (
    <Router><Logo {...args} /></Router>
);

export const Default = Template.bind({});
  Default.args = {
    text:"netflix",
    boldText:"roulette"
  };