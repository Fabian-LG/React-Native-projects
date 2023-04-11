import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styled } from 'nativewind';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';



const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == 'featured' && _id==$id]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type-> {
                        name  
                    }
                    },
                }[0]`, { id }
        ).then((data) => {
            setRestaurants(data?.restaurants);
        });
    }, [id]);

    console.log(restaurants);

    return (
        <StyledView>
            <StyledView className='px-4'>
            <StyledView className='mt-4 flex-row items-center justify-between'>
                <StyledText className='font-bold text-lg'>{title}</StyledText>
                <ArrowRightIcon color="#00CCBB" />
            </StyledView>
            <StyledText className='text-xs text-gray-500'>{description}</StyledText>
            </StyledView>


            <StyledScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4">

                {/*RestaurantCards... */}

              {restaurants?.map((restaurant) =>(
                  <RestaurantCard
                  key={restaurant._id}
                  id={restaurant._id}
                  imgUrl={restaurant.image}
                  title={restaurant.name}
                  rating={restaurant.rating}
                  genre={restaurant.type?.name}
                  address={restaurant.address}
                  short_description={restaurant.short_description}
                  dishes={restaurant.dishes}
                  long={restaurant.long}
                  lat={restaurant.lat}
              />
              ))}


            </StyledScrollView>

        </StyledView>
    )
}

export default FeaturedRow