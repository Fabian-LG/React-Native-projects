import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { styled } from 'nativewind';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);

const PreparingOrderScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  },[]);

  return (
    <StyledSafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/deliver.gif")}
        animation="slideInUp"
        iterationCount={1}
        className='h-96 w-96' />

        <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
        >
          Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size ={60} indeterminate={true} color="white" />

    </StyledSafeAreaView>
  );
};

export default PreparingOrderScreen