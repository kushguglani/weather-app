import {
    getWeather,
} from '../../helper/httpService';


export function deleteWeather(search, searchList) {
    if (searchList.indexOf(search) !== -1) {
        searchList.splice(searchList.indexOf(search), 1);
    }
    return {
        type: "DELETE_WEATHER",
        payload: search
    }
}

export function clearWeather() {
    return {
        type: "CLEAR_WEATHER",
    }
}
export function searchWeather(search) {
    function success(search, value) {
        return {
            type: "ADD_FETCH_WEATHER",
            payload: { value, search }
        }
    }
    function failure(value) {
        alert(value + " : " + search);
    }
    return function (dispatch) {
        // dispatch(noAccountLinked(value));
        return getWeather(search).then(res => {
            // fetch products 
            dispatch(success(search, res.data));

        })
            .catch(err => {
                failure(err.response.data.message);
            })
    }
}