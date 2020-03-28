export function fetchImages(URL) {
 let API_KEY = "o-as_obkHaDs7bpweoT92AT5inAWbpaAgw0aF4iSdw4";
   let URI    = "https://api.unsplash.com/search/photos?query=Ukraine&client_id=" + this.API_KEY; 
    return function(dispatch) {
        dispatch({type: "FETCH_IMAGE_STARTED",
                  payload: null})
        fetch(URL)
        .then(data => data.json())
        .then(dataJSON =>{
            dispatch({type: "FETCH_IMAGE_FULFILLED",
                      payload: dataJSON})
        })
        .catch((err) => {
            console.log(err);
            dispatch({type: "FETCH_IMAGE_ERROR",
                      payload: err})
        })
    }
}