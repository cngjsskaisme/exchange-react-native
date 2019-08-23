import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavGoto extends React.Component {
  render() {
    return <Button title="Go to Post" onPress={() => { this.props.navigation.navigate('Post') }} />;
  }
}

// withNavigation returns a component that wraps NavGoto and passes in the
// navigation prop
export default withNavigation(NavGoto);