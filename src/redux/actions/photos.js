import axios from "axios";
import {setIsLoadingActionCreator, setPhotosActionCreator} from "../reducers/actions";

export const getPhotos = () => async (dispatch) => {
    dispatch(setIsLoadingActionCreator(true));

    const response =
        await axios.get("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0");

    dispatch(setPhotosActionCreator(response.data));
}
