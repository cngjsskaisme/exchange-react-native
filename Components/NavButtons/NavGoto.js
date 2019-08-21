/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 모든 컴포넌트에서 사용 가능한 네비게이션 버튼입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    title = Button에 달릴 제목입니다.
    target = 목적지 위치입니다. (목적지 위치 이름은 App.js 참조 바람)
    props = 해당 페이지에 Prop으로 전달할 내용들입니다.

사용 예 :
    const YourButton = NavGoto()
    <YourButton  title = "Example"
              target = "Setting"
              props = { id: 1
                darkmode: True}>
    해당 버튼은 Example이 적힌 버튼으로 표시되며 
    Setting 페이지로 이동과 동시에 {} 속에 들어있는 Props를 전달합니다.
*/

import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavGoto extends React.Component {
  static defaultProps = {
    title: "Button",
    target: null,
    props: null
  }

  render() {
    return <Button title={this.props.title} onPress={() => { 
      this.props.navigation.navigate(this.props.target, this.props.props) }} />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(NavGoto);