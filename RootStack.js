import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import Login from './Login';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';

const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    LoginScreen: {screen: Login},
    CreateAccountScreen: {screen: CreateAccount},
    ForgotPasswordScreen: {screen: ForgotPassword},
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

export default RootStack;
