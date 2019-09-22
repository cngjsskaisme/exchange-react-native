import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.single';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      //alignedText : 'center',
      
    },
    text: {
      //marginTop: Platform.OS === 'android' ? 4 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      //fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 20
    },
    today: {
      
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      fontWeight : 'bold',
      color: appStyle.todayTextColor
    },
    selectedText: {
      //color : '#ffffff',
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
