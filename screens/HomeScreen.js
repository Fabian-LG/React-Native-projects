import React, { useEffect, useLayoutEffect, useState } from 'react'
import { withExpoSnack } from 'nativewind';

import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import { styled } from 'nativewind';

import { useNavigation } from '@react-navigation/native'

import * as Icons from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);
const StyledScrollView = styled(ScrollView);
//const StyledIcon = styled(Icons.ArrowDownIcon);


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    useEffect (()=> {
        sanityClient.fetch(
           /* `*[_type == 'featured']{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type->{
                        name
                    }
                },
            }`*/
            `*[_type == 'featured']{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    }
            }`
        ).then((data) =>{
            setFeaturedCategories(data)
        })
    }, [])

    //console.log(featuredCategories);
    return (
        <SafeAreaView className='bg-white pt-5'>
            
                {/*Header*/}
                <StyledView className='flex-row pb-3 items-center mx-4 space-x-2'>
                    <StyledImage
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

                    <StyledView className='flex-1'>
                        <StyledText className='font bold text-gray-400 text-xs'>Deliver Now!</StyledText>
                        <StyledText className='font-bold text-xl'>Current Location
                            <Icons.ChevronDownIcon size={20} color="#00CCBB" />
                        </StyledText>

                    </StyledView>

                <Icons.UserIcon size={35} color="#00CCBB" />
                </StyledView>
                    
                    {/*Search*/}
                <StyledView className='flex-row items-center space-x-2 pb-2 mx-4'>
                <StyledView className='flex-1 flex-row space-x-2 bg-gray-200 p-3'>
                        <Icons.MagnifyingGlassIcon color="#gray" size={20}/>
                        <StyledTextInput placeholder='Restaurants and cuisines' keyboardType='default'></StyledTextInput>
                        </StyledView>
                        <Icons.AdjustmentsVerticalIcon/>

                    

                    
                </StyledView>
            {/*Body*/}

            <StyledScrollView 
            className='bg-gray-300'
            contentContainerStyle={{
                paddingBottom: 100,
            }}>
                
                {/*Categories */}
                <Categories />

                {/*Featured Rows */}

                {/* Featured */}

                {featuredCategories?.map(category => (
                    <FeaturedRow
                    key={category._id}
                    id={category._id}
                    title={category.name}
                    description={category.short_description}
                    />
                ))}
   
            </StyledScrollView>

        </SafeAreaView>
    );
}

export default withExpoSnack(HomeScreen);