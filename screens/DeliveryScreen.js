import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';


const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledMapView = styled(MapView);

const DeliveryScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <StyledView className='bg-[#00CCBB] flex-1'>
      <StyledSafeAreaView className='z-50'>
        <StyledView className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>

          <StyledText className='font-light text-white text-lg'>Order Help</StyledText>
        </StyledView>

        <StyledView className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <StyledView className='flex-row justify-between'>
            <StyledView>
              <StyledText className='text-lg text-gray-400'>Estimated Arrival</StyledText>
              <StyledText className='text-4xl font-bold'>45-55 Minutes</StyledText>
            </StyledView>

            <StyledImage
              source={{
                uri: 'https://links.papareact.com/fls',
              }}
              className='h-20 w-20'
            />
          </StyledView>

          <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
          <StyledText className='mt-3 text-gray-500'>
            Your order at {restaurant.title} is being prepared
          </StyledText>


        </StyledView> 
      </StyledSafeAreaView>

      <StyledMapView 
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant. long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 mt-10 z-0'
        mapType='mutedStandard'>
          <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origen'
          pinColor='#00CCBB'
          />
        </StyledMapView>

        <StyledSafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
          <StyledImage 
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
          />

          <StyledView className='flex-1'>
            <StyledText className='flex-1'>
              Fab L G
            </StyledText>
            <StyledText className='text-gray-400'>Your Rider</StyledText>
          </StyledView>

          <StyledText className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</StyledText>
          
        </StyledSafeAreaView>
      

    </StyledView>
  )
}

export default DeliveryScreen