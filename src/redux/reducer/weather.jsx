const InitialStore = {
    error: '',
    searchList: [],
    data: []
}

export default function user(store = InitialStore, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...store,
                userList: [...store.userList, action.payload]
            }
        case 'NO_DATA_FOUND':
            return {
                ...store,
                error: action.payload
            }
        case 'ADD_FETCH_WEATHER':
            let searchLists = store.searchList;
            if (!store.searchList.includes(action.payload.search)) {
                searchLists = [action.payload.search, ...store.searchList];
                if (searchLists.length > 10) {
                    searchLists.pop();
                }
            }

            return {
                ...store,
                searchList: searchLists,
                data: action.payload.value,
            }
        case 'DELETE_WEATHER':
            let newsearchLists = [...store.searchList];
            if (newsearchLists.indexOf(action.search) !== -1) {
                newsearchLists = newsearchLists.splice(newsearchLists.indexOf(action.search), 1);
            }
            return {
                ...store,
                searchList: newsearchLists,
                error: "false"
            }
        case 'CLEAR_WEATHER':

            return {
                ...store,
                searchList: []
            }
        default:
            return store;
    }
}