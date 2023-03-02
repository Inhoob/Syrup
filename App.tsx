import BottomTabNav from './src/navigators/BottomTabNav';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}

export default App;
