import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice'


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const DishRow = ({ id, name, description, price, imgUrl }) => {

    const [isPressed, setIsPressed] = useState(false);

    const items = useSelector((state) => selectBasketItemsWithId(state, id));

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, imgUrl }));
    };

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;

        dispatch(removeFromBasket({ id }));
    }

    return (
        <>
        <StyledTouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
         className={`bg-white border p-4 border-gray-500 ${isPressed && 'border-b-0'}`}>
            <StyledView className='flex-row'>
                <StyledView className='flex-1 or-2'>
                <StyledText className='text-lg mb-1'>{name}</StyledText>
                <StyledText className='text-gray-400'>{description}</StyledText>
                <StyledText className='text-gray-400 mt-2'>
                    <Currency quantity={price} currency='GBP' />
                </StyledText>

                </StyledView>
            
            <StyledView>

                <StyledImage
                    style={{
                        borderWidth: 1,
                        borderColor: '#F3F3F4',
                    }}
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    className="h-20 w-20 bg-gray-300 p-4" />

            </StyledView>

            </StyledView>

        </StyledTouchableOpacity>

        {isPressed && (
            <StyledView className='bg-white px-4'>
                <StyledView className='flex-row items-center space-x-2'>
                    <StyledTouchableOpacity
                    disabled={!items.length}
                     onPress={removeItemFromBasket}>
                        <MinusCircleIcon color={items.length > 0 ? '#00CCBB' : 'gray'}
                        size={40}/>
                    </StyledTouchableOpacity>

                    <StyledText>{items.length}</StyledText>

                    <StyledTouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon color='#00CCBB' size={40}/>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
        )}
        </>
    );
};

export default DishRow