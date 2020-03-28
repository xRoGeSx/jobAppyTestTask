import {combineReducers} from "redux"

import images from "./imageReducer"
import navigation from "./navigationReducer"
// export default combineReducers({
//     image: images,
//     navigation: navigation
// })

 export default combineReducers({
     image: images,
     nav: navigation,
 })