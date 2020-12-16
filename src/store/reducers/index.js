const initialState = {
    show: {},
    episodes: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_FETCHED':
            return {
                ...state,
                show: action.show
            }
        case 'EPISODES_FETCHED':
            return {
                ...state,
                episodes: action.episodes
            }
        default: 
            return state;
    }
}

export default reducer;
