/*
작성자 : 추헌남
최초작성일 : 2019/09/14
설명 : 게시판 Context를 정의합니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/

import React from 'react';

export const context = {
    main: {
        currentuserid: 0,
        isDev: false,
        isReplyEditMode: false,

        _toggleDevMode: () => {},
        _toggleReplyEditMode: () => {}
    }
}

export const BulletinBoardsContext = React.createContext(
    context.main // 기본값
  );