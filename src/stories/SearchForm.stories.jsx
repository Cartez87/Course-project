import SearchForm from '../components/SearchForm';
import { Provider } from 'react-redux';
import store from '../store/store';

export default {
  title: 'UI-Kit/SearchForm',
  component: SearchForm
};

const Template = (args) => (
  <Provider store={store}>
   <SearchForm {...args} />
  </Provider>
);

export const Default = Template.bind({});
  Default.args = {
  };