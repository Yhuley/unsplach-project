import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoadingContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    align-items: center;
    justify-content: center;
`;

const Loading = ({size}) => {
    return (
        <LoadingContainer>
            <ActivityIndicator {...{size}}/>
        </LoadingContainer>
    );
};

export default Loading;
