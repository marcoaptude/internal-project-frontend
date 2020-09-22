//Each Reducer has their own state
const initialState = {
    users: [],
    error: null,
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
};