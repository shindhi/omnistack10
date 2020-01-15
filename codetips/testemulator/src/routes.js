import { createAppContainer } from 'react-navigation';
import { createStacknavigator } from 'react-navigation-stack'; 

import Dashboard from './pages/Dashboard';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStacknavigator({
    Dashboard,
    Feed,
    Profile
  }),
);

export default Routes;