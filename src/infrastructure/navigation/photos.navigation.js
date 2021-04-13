import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import PhotosListScreen from "../../features/list/screens/photosList.screen";
import PhotoDetailScreen from "../../features/list/screens/photoDetail.screen";

const Stack = createStackNavigator();

const PhotosNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
                <Stack.Screen name="PhotosList" component={PhotosListScreen} />
                <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default PhotosNavigation;
