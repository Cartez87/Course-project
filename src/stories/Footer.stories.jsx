import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../components/Footer';

export default {
  title: 'UI-Kit/Footer',
  component: Footer,
};

const Template = (args) => (
    <Router><Footer {...args} /></Router>
);

export const Default = Template.bind({});
  Default.args = {
  };