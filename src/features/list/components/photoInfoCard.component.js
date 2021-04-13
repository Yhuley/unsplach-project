import React from "react";
import { PhotoCard, PhotoCardCover, PhotoDescription, PhotoAuthor } from "./photoInfoCard.style";

const PhotoInfoCard = ({photo = {}}) => {
     const {
        id = Date.now(),
        urls = {},
        alt_description = "loremIpsum",
        user = {}
    } = photo;

    return (
        <PhotoCard>
            <PhotoCardCover
                key={id}
                source={{uri: urls.full}}
            />
            <PhotoDescription>
                {alt_description}
            </PhotoDescription>
            <PhotoAuthor>
                author: {user.name}
            </PhotoAuthor>
        </PhotoCard>
    );
};

export default PhotoInfoCard;