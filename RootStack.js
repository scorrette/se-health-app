//establishing rootstack for screen navigation

import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import Login from './Login';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import Guide1 from './Guide1';
import Guide2 from './Guide2';
import Guide3 from './Guide3';
import Guide4 from './Guide4';
import Guide5 from './Guide5';
import EmotionWheel from './EmotionWheel';
import CapsSurvey from './CapsSurvey';

const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    LoginScreen: {screen: Login},
    CreateAccountScreen: {screen: CreateAccount},
    ForgotPasswordScreen: {screen: ForgotPassword},
    Guide1Screen: {screen: Guide1},
    Guide2Screen: {screen: Guide2},
    Guide3Screen: {screen: Guide3},
    Guide4Screen: {screen: Guide4},
    Guide5Screen: {screen: Guide5},
    EmotionWheelScreen: {screen: EmotionWheel},
    CapsSurveyScreen: {screen: CapsSurvey},
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

export default RootStack;
