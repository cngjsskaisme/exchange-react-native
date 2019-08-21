/*
작성자 : 추헌남
최초작성일 : 2019/08/16
설명 : 컴포넌트에서 테스트할 엔트리 통합 정리
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    Prop 안받음
*/

export const BulletinBoardsEntries_Mock = [
    {
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


export const CommentEntries = [
    {
        id: 1,
        username: 'blackpanther',
        useravatar: 'IMAGELINK (To be implemented)',
        content: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        id: 2,
        username: 'loveyou',
        useravatar: 'IMAGELINK (To be implemented)',
        content: 'Love Simpsons!',
        pictures: 'IMAGELINK (To be implemented)'
    },
    {
        id: 441,
        username: 'good',
        useravatar: 'IMAGELINK (To be implemented)',
        content: 'yeah',
        pictures: 'IMAGELINK (To be implemented)'
    },
];

export const TimeTableEntries = [
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

export const CourseRatingEntries = [
    {
        id: 132,
        subject: 'Computer Science',
        professor: 'Won Young Jun',
        ratings: '3', // 12345
        comments: 'Not bad',
        doestest: '1', // 12345
        homeworks: '3', // 12345
        jokbo: 'Array' // Link Component
    },
    {
        id: 414,
        subject: 'Accountings',
        professor: 'Ahn...',
        ratings: '1',
        comments: 'Sucks as hell',
        doestest: '5',
        homeworks: '5',
        jokbo: 'Array'
    },
    {
        id: 777,
        subject: 'Politics',
        professor: 'Shin Du Cheol',
        ratings: '5',
        comments: 'Nice class',
        doestest: '2',
        homeworks: '1',
        jokbo: 'Array'
    },
];

export default {
    BulletinBoardsEntries_Mock, CommentEntries, 
    TimeTableEntries, CourseRatingEntries,
}