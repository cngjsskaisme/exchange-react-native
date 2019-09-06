import React from 'react';
import { View, Text, Image, ActivityIndicator} from 'react-native';


const FIVE_SECONDS = 1000;

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      this.props.navigation.navigate('EvaluationScreen');
    }, FIVE_SECONDS);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator animating color="#c62828" size = 'large'/>
        <Text>Loading! Please wait!</Text>
        <Text>Come on! There's no need to rush!</Text>
      </View>
    );
  }
}
