import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

// always have to export the navigator that's passed into this function. 
export default createAppContainer(navigator);