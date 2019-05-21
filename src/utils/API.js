import Axios from "axios";

export default {
    getGifs : function(q) {
        let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9"
        return Axios.get(queryURL, { params: { q }})
    }
}