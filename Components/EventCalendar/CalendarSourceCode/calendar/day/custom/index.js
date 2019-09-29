import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import XDate from 'xdate';
import { EventEntries } from '../../../../CalendarEventEntries';
import { shouldUpdate } from '../../../component-updater';
import styleConstructor from './style';


class Day extends Component {
  static displayName = 'IGNORE';
  
  static propTypes = {
    // TODO: disabled props should be removed
    month: PropTypes.instanceOf(XDate),
    state: PropTypes.oneOf(['selected', 'disabled', 'today', '']),

    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    date: PropTypes.object
  };

  constructor(props) {
    super(props);
    
    this.style = styleConstructor(props.theme);
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }
  onDayLongPress() {
    this.props.onLongPress(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    return shouldUpdate(this.props, nextProps, ['state', 'marking', 'onPress', 'onLongPress']);
  }

  render() {
    let containerStyle = [this.style.base];
    let textStyle = [this.style.text];

    let marking = this.props.marking || {};
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true
      };
    }
    const isDisabled = typeof marking.disabled !== 'undefined' ? marking.disabled : this.props.state === 'disabled';

    if (marking.selected) {
      containerStyle.push(this.style.selected);
    } else if (isDisabled) {
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }

    if (marking.customStyles && typeof marking.customStyles === 'object') {
      const styles = marking.customStyles;
      if (styles.container) {
        if (styles.container.borderRadius === undefined) {
          styles.container.borderRadius = 16;
        }
        containerStyle.push(styles.container);
      }
      if (styles.text) {
        textStyle.push(styles.text);
      }
    }

    let number = [];
    if(String(this.props.marking) != null )
    {
    number.push(<Text key={0} style={{color:'green', width: 60,

    alignItems: 'center', paddingLeft: 10,
      paddingRight: 10, fontWeight:'100'}}>{EventEntries[0].Events.length}</Text>);
      }

    return (
      <View>

      
      <TouchableOpacity
        testID={this.props.testID}
        style={[containerStyle,]}
        onPress={this.onDayPress}
        onLongPress={this.onDayLongPress}
        activeOpacity={marking.activeOpacity}
        disabled={marking.disableTouchEvent}
      >
        <Text allowFontScaling={false} style={[textStyle,]}>{String(this.props.children)} {String(this.props.marking)} </Text>
        
      </TouchableOpacity>
      {number}
      </View>
    );
  }
}

export default Day;
