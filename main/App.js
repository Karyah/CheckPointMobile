import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './pages/MainNavigator';
import { store } from './pages/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
   
  );
}

