import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {FlatList, TouchableOpacity} from "react-native";
import PhotoInfoCard from "../components/photoInfoCard.component";
import {SafeArea} from "../../../components/SafeArea.component";
import {getPhotos} from "../../../redux/actions/photos";
import Loading from "../../../components/Loading.component";

const PhotosListScreen = ({navigation}) => {
    const isLoading = useSelector(state => state.photos.isLoading);
    const photos = useSelector(state => state.photos.photos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    return (
        <SafeArea>
            {isLoading ?
                <Loading size="large"/>
                :
                <FlatList
                    data={photos}
                    key={item => item.item.id}
                    renderItem={(item => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("PhotoDetail", {photo: item.item})}>
                                <PhotoInfoCard photo={item.item}/>
                            </TouchableOpacity>
                        );
                    })}
                    contentContainerStyle={{padding: 16}}
                />
            }
        </SafeArea>
    );
};

export default PhotosListScreen;
