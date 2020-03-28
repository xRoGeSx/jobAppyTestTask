export default function reducer(state={
    images: [],
    fetching: false,
    fetcher: false,
    error: null,
}, action) {
    switch(action.type) {
        case "FETCH_IMAGE_STARTED": {
            console.log("Image fetch started by action")
            return {
                ...state,
                fetching: true
            }
            break;
        }
        case "FETCH_IMAGE_FULFILLED":{
        //    console.log("Image fetch finished by action", action.payload)
            return {
                ...state,
                fetching: false,
                fetched: true,
                images: action.payload,
            }
        break;
        }
        case "FETCH_IMAGE_ERROR": {
            console.log("Fetching error", action.payload)
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        break;
        }
        default:   {
        return state;
        }
    }
}