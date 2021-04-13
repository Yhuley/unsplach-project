export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_PHOTOS = "SET_PHOTOS";

export const setIsLoadingActionCreator = bool => ({type: SET_IS_LOADING, payload: bool});

export const setPhotosActionCreator = photos => ({type: SET_PHOTOS, payload: photos});
