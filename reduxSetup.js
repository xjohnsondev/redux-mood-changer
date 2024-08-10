const INITIAL_STATE = { mood: null, color: null };

const moodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MOOD_CHANGE':
            return { ...state, mood: action.payload.mood, color: action.payload.color };
        default:
            return state;
    }
};

const store = Redux.createStore(moodReducer);