import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import SettingsScreen from "./Components/Settings"
import MainScreen from "./Components/Main"
import TimeTables from "./Components/TimeTables"
import BulletinBoards from "./Components/BulletinBoards/BulletinBoards"

const MainStack = createStackNavigator({
  Main: MainScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const BulletinBoardsStack = createStackNavigator({
  BulletinBoards: BulletinBoards,
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
    return <AppContainer />;
  }
}





/* 연습용 코드였음
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);
*/