import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import SettingsScreen from "./Components/Settings"
import MainScreen from "./Components/Main"
import TimeTables from "./Components/TimeTables"
import BulletinBoards from "./Components/BulletinBoards/BulletinBoards"
import BulletinBoardsContent from "./Components/BulletinBoards/BulletinBoardsContent"
import BulletinBoardsEditEntry from "./Components/BulletinBoards/BulletinBoardsEditEntry";

const MainStack = createStackNavigator({
  Main: MainScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const BulletinBoardsStack = createStackNavigator({
  BulletinBoards: BulletinBoards,
  Post: BulletinBoardsContent,
  EntryEdit: BulletinBoardsEditEntry
});

const TimeTablesStack = createStackNavigator({
  TimeTables: TimeTables,
});

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainStack,
    BulletinBoards: BulletinBoardsStack,
    TimeTables : TimeTablesStack,
    Settings: SettingsStack,
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
