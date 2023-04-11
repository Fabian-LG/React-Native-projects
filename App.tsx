import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Restaurant from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import store from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createStackNavigator();
  
  const App = () => {
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"
    return (
      <Provider store={store}>
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant}/>
          <Stack.Screen name='Basket' component={BasketScreen} 
          options={{presentation: 'modal', headerShown: false }} />
          <Stack.Screen 
          name='PreparingOrder' 
          component={PreparingOrderScreen}
          options={{ presentation: 'card', headerShown: false}}  />
          <Stack.Screen 
          name='Delivery' 
          component={DeliveryScreen}
          options={{ presentation: 'card', headerShown: false}}  />
        </Stack.Navigator>
        
      </NavigationContainer>
      </Provider>
      
    );
  };
  
  export default App;