import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const RestaurantCard = ({ id, imgUrl, title,
    rating, genre, address, short_description, dishes, long, lat, }) => {

    const navigation = useNavigation();

    return (
        <StyledTouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", {
                    id, 
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                    long,
                    lat,
                });
            }}

            className='bg-white mr-3 shadow'>
            <StyledImage
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="h-36 w-64 rounded-xs" />

            <StyledView className='px-3 pb-4'>
                <StyledText className='font-bold text-lg pt-2'>{title}</StyledText>
                <StyledView className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <StyledText className='text-gray-500'>
                        <StyledText className='text-green-800'>{rating}</StyledText> • {genre}
                    </StyledText>
                </StyledView>

                <StyledView className='flex-row items-center space-x-1'>
                    <MapPinIcon color='gray' opacity={0.4} size={22} />
                    <StyledText className='text-xs text-gray-500'>Nearby • {address}</StyledText>

                </StyledView>

            </StyledView>

        </StyledTouchableOpacity>
    )
}

export default RestaurantCard