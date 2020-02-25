const initialState = [
    'Nirvana',
    'Lorn'
];


export default function tracks(state = initialState, action) {
    switch(action.type) {
        case 'ADD_PLAYLIST':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE_PLAYLIST':
            return [
                ...state
            ];
        default:
            return state;
    }

}