import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';



const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const BasketIcon = () => {

    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if(items.length === 0) return null;

    return (
        <StyledView className='absolute bottom-10 w-full z-50'>
            <StyledTouchableOpacity 
            onPress={() => {navigation.navigate('Basket')}}
            className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
                <StyledText className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 '>{items.length} </StyledText>
                <StyledText className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</StyledText>
                <StyledText className='text-lg text-white font-extrabold'>
                    <Currency quantity={basketTotal} currency='GBP' />
                </StyledText>

            </StyledTouchableOpacity>

        </StyledView>
    )
}

export default BasketIcon;