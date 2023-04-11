import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState} from 'react'
import { styled } from 'nativewind';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';

const StyledScrollView = styled(ScrollView);
const StyledView = styled(View);
const StyledText = styled(Text);


const Categories = () => {

    const[categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == 'category']
            `
        ).then((data) => {
            setCategories(data);
        });        
    },[]);


    return(
        <StyledScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
                
                {categories.map((category) => (
                    <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()}
                    title={category.name}
                    />
                ))}
            {/*Categories*/}
           

        </StyledScrollView>
    );
}

export default Categories