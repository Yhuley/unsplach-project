import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const PhotoCard = styled(Card)`
    margin-bottom: 16px;
    padding: 16px;
`;

export const PhotoCardCover = styled(Card.Cover)`
    border-radius: 5px;
`;

export const PhotoDescription = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    font-weight: 400;
`;

export const PhotoAuthor = styled.Text`
    font-weight: 500;
    font-size: 15px;
`;