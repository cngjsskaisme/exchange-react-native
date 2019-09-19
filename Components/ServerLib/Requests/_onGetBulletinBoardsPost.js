import { Alert } from 'react-native';
import { BulletinBoardsEntries_Mock } from '../../../Mockup_Datas/UnifiedEntries'
import axios from 'axios'; 
import {server} from '../config';

export default _onGetBulletinBoardsPost = async (state,_onSetState, isRefresh) => {   
    var url = server.serverURL + '/process/ShowBulletinBoard';
    // 새로고침인 경우 isLoading 활성화 후 모든 목록 다시 받기
    if(isRefresh){
        postStartIndex= 0;
        postEndIndex= 19;
        _onSetState({
            isLoading: true,
            isError: false,
        }) 
    }
    // 새로고침이 아닌 경우 isLoadingMore 활성화 후 일부 목록만 추가로 이어 받기
    else{
        postStartIndex= state.entrieslist.length - 1;
        postEndIndex= postStartIndex + 20;
        _onSetState({
            isLoadingMore: true,
            isError: false,
        }) 
    }
    await axios.post(url, {userid: state.userid, boardid: state.boardid, 
        postStartIndex: postStartIndex, postEndIndex: postEndIndex, search: " "})
        .then((response) => {
            // 새로고침시 목록 다 지우고 게시글 목록 새로 받기
            if(isRefresh){
                state.entrieslist.splice(0, state.entrieslist.length)    
                state.entrieslist.push(...response.data.postslist)
            }
            // 새로고침이 아닌 경우
            else{
                state.entrieslist.splice(state.entrieslist.findIndex((element) => {return element.entryid == 'lastlastlast'}), 1)
                state.entrieslist.push(...response.data.postslist)
            }
            {state.entrieslist.length % 20 == 0  && response.data.length != 0 && state.entrieslist.length != 0? // % 20으로 나눈 이유는 왜 인지 알 거 같지?
                // 게시글 개수가 20개가 꽉 찼을 떄 Load More 버튼 표시 (이후 반환받는 Entry가 비어있을 때에는 다음 처리)
                state.entrieslist.push({lastElement:true, okToShow: true, entryid: 'lastlastlast'}) :
                // 게시글 개수가 20개가 안될 떄
                state.entrieslist.push({lastElement:true, okToShow: false, entryid: 'lastlastlast'})
            }
            _onSetState({ 
                entrieslist: state.entrieslist,
                isLoading: false,
            }) ;
    }) 
    .catch(( err ) => {
        Alert.alert(
            'Cannot connect to the server.',
            'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
            [{text: 'OK'}]
          );
        _onSetState({
            postslist: BulletinBoardsEntries_Mock,
            isError: true,
        })
    });    
}


/* 
27번 줄 search: search 에서 search에 string 값을 입력하면 
해당 문자열과 일치하거나 해당 문자열을 포함하는 게시글 제목/내용/사용자 명 검색. 대소문자 무관. 아무런 값도 없을 시 전체 목록 전달

*/