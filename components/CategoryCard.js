import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <StyledTouchableOpacity className="relative space-x-2 mx-1">
            <StyledImage
                source={{
                    uri: imgUrl,
                }}
                className='h-20 w-20 bg-gray-300 p-4 rounded-full' />
                 

            <StyledText className='absolute bottom-1 left-1 text-white font-bold'>
                {title}
            </StyledText>
        </StyledTouchableOpacity>
    )
}

export default CategoryCard