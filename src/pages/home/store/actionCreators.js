import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const changeWriters = (writerPage) => ({
    type: constants.CHANGE_WRITERS,
    writerPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        });

    }
};

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_TOP_SHOW,
    show
})
