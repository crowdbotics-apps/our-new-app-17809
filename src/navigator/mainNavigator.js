import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile61021Navigator from '../features/UserProfile61021/navigator';
import Settings61020Navigator from '../features/Settings61020/navigator';
import Settings61018Navigator from '../features/Settings61018/navigator';
import SignIn261016Navigator from '../features/SignIn261016/navigator';
import ArticleList60983Navigator from '../features/ArticleList60983/navigator';
import ArticleList60982Navigator from '../features/ArticleList60982/navigator';
import ArticleList60981Navigator from '../features/ArticleList60981/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile61021: { screen: UserProfile61021Navigator },
Settings61020: { screen: Settings61020Navigator },
Settings61018: { screen: Settings61018Navigator },
SignIn261016: { screen: SignIn261016Navigator },
ArticleList60983: { screen: ArticleList60983Navigator },
ArticleList60982: { screen: ArticleList60982Navigator },
ArticleList60981: { screen: ArticleList60981Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
