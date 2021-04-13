import React, { useState } from "react";
import { Image, ScrollView } from "react-native";
import {SafeArea} from "../../../components/SafeArea.component";
import Loading from "../../../components/Loading.component";

const PhotoDetailScreen = ({route}) => {
    const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

    const  { photo } = route.params;

    const {
        urls = {},
        width,
        height,
    } = photo;

    return (
        <SafeArea>
            {!isPhotoLoaded && <Loading/>}
                <ScrollView>
                    <ScrollView horizontal={true}>
                        <Image
                            onLoadEnd={() => setIsPhotoLoaded(true)}
                            source={{uri: urls.full}}
                            style={{width: width, height: height}}
                        />
                    </ScrollView>
                </ScrollView>
        </SafeArea>
    );
};

export default PhotoDetailScreen;
