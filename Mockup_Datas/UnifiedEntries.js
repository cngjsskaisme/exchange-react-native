/*
작성자 : 추헌남
최초작성일 : 2019/08/16
설명 : 컴포넌트에서 테스트할 엔트리 통합 정리
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    Prop 안받음
*/

//BulletinBoards List
//boardid : 게시판 id 번호
//boardname : ""
export const BulletinBoardsLists_Mock = [
    {
        boardid: 0,
        boardname: 'BulletinBoard 0',
        contents: 'This board is \'Omega and Alpha\'.'
    },
    {
        boardid: 1,
        boardname: "Notice Board",
        contents: 'This board is for the notice.'
    },
    {
        boardid: 2,
        boardname: "Free Board",
        contents: 'Boards for you.'
    },
];



//BulletinBoards Mock
//userid :  해당 유저의 id
//username : 해당 유저의 이름
//profile : 해당 유저의 프로필 사진
//likes : 좋아요 갯수
//date : 작성 날짜
//ismine : 본인 글인지 여부
//title : 게시글 제목
//contents : 게시글 내용
//pictures : 삽입된 사진 링크

export const BulletinBoardsEntries_Mock = [
    {
        boardid: 0,
        entryid: 112,
        userid: 1,
        username: 'blackpanther',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: true,
        title: 'Why you little!!',
        contents: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 321,
        userid: 2,
        username: 'loveyou',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: 'yes',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 10,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'as hell',
        contents: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 32,
        userid: 1,
        username: 'dodo',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: false,
        title: 'aaasdf',
        contents: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 51,
        userid: 2,
        username: 'asdf123',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: '!!!@#',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 1023,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'as hell',
        contents: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 11422,
        userid: 1,
        username: 'blackpanther',
        profile: 'IMAGELINK (To be implemented)',
        likes: 200,
        date: '2019-08-20',
        ismine: true,
        title: 'Why you little!!',
        contents: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 325211,
        userid: 2,
        username: 'loveyou',
        profile: 'IMAGELINK (To be implemented)',
        likes: 1,
        date: '2019-07-21',
        ismine: false,
        title: 'yes',
        contents: 'I am yesman',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        boardid: 0,
        entryid: 103321,
        userid: 441,
        username: 'good',
        profile: 'IMAGELINK (To be implemented)',
        likes: 23,
        date: '2019-02-21',
        ismine: false,
        title: 'as hell',
        contents: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
];

//Comment Mock
//boardid: 부모 게시글의 id
//entryid : 부모 댓글의 id 
//replyid: 해당 댓글의 id 
//parentreplyid: 해당 댓글의 부모 id 
//rootreplyid: 최상위 댓글의 id
//userid :  해당 유저의 id
//username : 해당 유저의 이름
//profile : 해당 유저의 프로필 사진
//likes : 좋아요 갯수
//date : 작성 날짜
//ismine : 본인 글인지 여부
//contents : 댓글 내용
//pictures : 삽입된 사진 링크
  

export const CommentEntries_Mock = [
    {
        boardid: 0, 
        entryid: 321,
        replyid: 132, 
        parentreplyid: 51,
        rootreplyid: 5,
        userid: 1,
        username: 'guide',
        profile: 'IMAGELINK (To be implemented)',
        likes: 21,
        date: '2019-01-02',
        ismine: false,
        contents: 'Gooooood',
        pictures: 'IMAGELINK (To be implemented)'
    },

    {
        boardid: 0,
        entryid: 321,
        replyid: 22,
        parentreplyid: 41,
        rootreplyid: 4,
        userid: 342,
        username: 'Div',
        profile: 'IMAGELINK (To be implemented)',
        likes: 33,
        date: '2019-03-12',
        ismine: true,
        contents: 'This is your comment',
        pictures: 'IMAGELINK (To be implemented)'
    },

    {
        boardid: 0,
        entryid: 112,
        replyid: 342,
        parentreplyid: 31,
        rootreplyid: 3,
        userid: 422,
        username: 'Probius',
        profile: 'IMAGELINK (To be implemented)',
        likes: 10,
        date: '2019-05-16',
        ismine: false,
        contents: '!@#%%!@#!@#',
        pictures: 'IMAGELINK (To be implemented)'
    },
];

export const TimeTableEntries_Mock = [
    {
        id: 1,
        subject: 'Computer Science',
        professor: 'Won Young Jun',
        timestart: '1000',
        timeend: '1800',
        place: 'ITBT 103'
    },
    {
        id: 412,
        subject: 'Advanced Math',
        professor: 'Superman',
        timestart: '1200',
        timeend: '1300',
        place: 'je2gong'
    },
    {
        id: 777,
        subject: 'Java Programming',
        professor: 'Ktuzer',
        timestart: '1500',
        timeend: '1800',
        place: 'Paiknam Library'
    },
];

export const CourseRatingEntries_Mock = [
    {
        courseID : 1,
        professorID : 1,
        subject: 'Computer Science',
        professor: 'Won Young Jun',
        overallRating : 4,
        exam : 'More than 4',
        assignment : '2',
        difficulty : 'Hard',
        grade : 'B+'
    },
    {
        courseID : 2,
        professorID : 2,
        subject: 'Techno Business',
        professor: 'Anh Gwangil',
        overallRating : 3,
        exam : '2',
        assignment : '3',
        difficulty : 'Average',
        grade : 'A+'
    },
    {
        courseID : 3,
        professorID : 3,
        subject: 'Introduction to Acting',
        professor: 'Shelly L. Collins',
        overallRating : 5,
        exam : '0',
        assignment : '2',
        difficulty : 'Easy',
        grade : 'A+'
    },
    {
        courseID : 4,
        professorID : 4,
        subject: 'IT Project Management',
        professor: 'Park Mina',
        overallRating : 5,
        exam : '2',
        assignment : '2',
        difficulty : 'Very Easy',
        grade : 'A+'
    },
    {
        courseID : 5,
        professorID : 5,
        subject: 'Social Venture',
        professor: 'Zahin Haissan',
        overallRating : 5,
        exam : '0',
        assignment : 'More than 4',
        difficulty : 'Hard',
        grade : 'P'
    },
    {
        courseID : 6,
        professorID : 6,
        subject: 'React Native',
        professor: 'Punreach Rany',
        overallRating : 1,
        exam : '0',
        assignment : 'More than 4',
        difficulty : 'Hard',
        grade : 'A0'
    },
    {
        courseID : 7,
        professorID : 7,
        subject: 'Hanyang 7 Heart',
        professor: 'Daniel Android',
        overallRating : 1,
        exam : '0',
        assignment : '3',
        difficulty : 'Very Hard',
        grade : 'C0'
    },
    {
        courseID : 8,
        professorID : 8,
        subject: 'Sleeping Therapy',
        professor: 'Won Young Jun',
        overallRating : 4,
        exam : '0',
        assignment : '0',
        difficulty : 'Very Easy',
        grade : 'P'
    },
    {
        courseID : 9,
        professorID : 1,
        subject: 'Artificial Intelligence',
        professor: 'Won Young Jun',
        overallRating : 2,
        exam : '0',
        assignment : '2',
        difficulty : 'Hard',
        grade : 'B+'
    },
    {
        courseID : 10,
        professorID : 1,
        subject: 'Software Engineering',
        professor: 'Won Young Jun',
        overallRating : 3,
        exam : '3',
        assignment : '2',
        difficulty : 'Very Hard',
        grade : 'C+'
    },
    

];

export default {
    BulletinBoardsEntries_Mock, CommentEntries_Mock, BulletinBoardsLists_Mock,
    TimeTableEntries_Mock, CourseRatingEntries_Mock,
}