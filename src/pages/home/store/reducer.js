import {fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    articleList:[],
    articlePage: 1,
    recommendList:[],
    writerList:[],
    writerPage: 1,
    writerTotalPage: 1,
    showTopButton: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
    })
};

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    })
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.CHANGE_WRITERS:
            return state.set('writerPage', action.page);
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showTopButton', action.show);
        default:
            return state;
    }
}