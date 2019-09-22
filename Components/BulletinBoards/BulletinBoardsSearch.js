/*
작성자 : 추헌남
최초작성일 : 2019/09/20
설명 : 게시판 검색 기능입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Searchbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoadingPage from '../Tools/LoadingPage';
import { TitleBold, ContentMedium, MetaLight } from '../Theming/Theme';

class BulletinBoardsSearch extends Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: navigation.state.params ? navigation.state.params.headerTitle : null
      });
    
    static defaultProps = {
        isLoading: true,
        isSearched: false,
        query: '',
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            isSearched: false,
            query: '',
        }
    }

    componentDidMount() {
    // Set route params
        this.props.navigation.setParams({
            headerTitle: (
                <View style={{width: '100%'}}>
                    <Searchbar
                        style={{width: '97%'}}
                        placeholder="Title, Contents, Nickname..."
                        onChangeText={query => { this.setState({ query: query }); }}
                        on
                        autoFocus={true}
                    />
                    {/*<TextInput
                        label='Search this thread'
                        placeholder= 'Title, Contents, Nickname...'
                        onChangeText={query => this.setState({ query })}
                        autoFocus = {true}
                    />*/}
                </View>
            )
        })
    }

    render(){
        setTimeout(() => this.setState({isLoading: false}), 150)
        return(
            <View>
                {this.state.isLoading? 
                // 검색 페이지가 로딩 중일 때
                    <LoadingPage What='Search Page'/> : 
                // 검색 페이지 출력
                    <View style={styles.SearchView}>
                        <View style={styles.Header}>
                            <Icon name="search" size={130} color="#c9c9c9" />
                        </View>
                        <View style={styles.Body}>
                            <MetaLight style={{fontSize:18}}>Search Everything in this thread.</MetaLight>
                        </View>
                    </View>}
            </View>
        );
    }
}

BulletinBoardsSearch.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    SearchView: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Header: {
        flex: 0.5,
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    Body: {
        flex: 0.5,
    }
})

export default withNavigation(BulletinBoardsSearch);