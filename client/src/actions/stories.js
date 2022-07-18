import * as api from "../api";
import {
    FETCH_ALL_STORIES,
    CREATE_STORY,
    UPDATE_STORY,
    DELETE_STORY
} from "../constants/actionTypes";

export const getStories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({ type: FETCH_ALL_STORIES, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const createStory = (story) => async (dispatch) => {
    try {
        const { data } = await api.createStory(story);
        dispatch({ type: CREATE_STORY, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const updateStory = (id, story) => async (dispatch) => {
    try {
        const { data } = await api.updateStory(id, story);

        dispatch({ type: UPDATE_STORY, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const deleteStory = (id) => async (dispatch) => {
    try {
        await api.deleteStory(id);

        dispatch({ type: DELETE_STORY, payload: id });
    } catch (error) {
        console.log(error.message)
    }
};

export const likeStory = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeStory(id);

        dispatch({ type: UPDATE_STORY, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
