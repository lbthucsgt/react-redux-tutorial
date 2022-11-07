import {YES_OR_NO} from "./type";

export const yesOrNo = (data) => async (dispatch) => {
    try {
        const response = await fetch('https://yesno.wtf/api');
        const answer = (await response.json()).answer
        dispatch({
            type: YES_OR_NO,
            payload: answer,
        })
        return Promise.resolve(answer)
    } catch (error) {
        return Promise.reject(error)
    }
}
