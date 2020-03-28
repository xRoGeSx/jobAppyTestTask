export default function reducer(state={
   isExpanded: false
}, action) {
    switch(action.type) {
        case "IMAGE_EXPANDED": {
            return {
                    ...state,
                    isExpanded: true,
                };
            break;
        }
        case "IMAGE_COLLAPSED":{
            return {
                ...state,
                isExpanded: false,
            };
        break;
        }
        case "FETCH_IMAGE_ERROR": {
            return state;
        break;
        }
        default:  {
        return state;
        }
    }
}