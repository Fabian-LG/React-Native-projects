import CartProductItem from '../../components/CartProductItem';
//import products from '../../data/cart' 
import products from '../../data/products';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
//import { DataStore } from 'aws-amplify';
//import { Product } from '../../models';
//import { DataStore } from '@aws-amplify/datastore';
import { DataStore } from 'aws-amplify';
import { Todo } from '../../models';
import Button from '../../components/Button';


const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  //const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('new');
  const [description, setDescription] = useState('newly');
  const [image, setImage] = useState('some');
  const [images, setImages] = useState(['get', 'some', 'more']);
  const [price, setPrice] = useState(350);

  async function addTodo() {
    //to be filled in a later step
    await DataStore.save(new Todo({ description, isComplete: false }));

  }
  /*
  useEffect(() => {
    const fetchProducts = async () =>{
      const results = await DataStore.query(Product);
      console.log(results);
    };
  }, []);*/
  /*
    const todoCreate = ()=>{
      async () => {
  
        await DataStore.save(
          new ToDo({
            "name": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet",
            "isCompleted": true
          })
        );
        console.log('SALIÓ');
      }
    }*/
  /*
  const models = () => {
    const fetchToDo = async () =>{
      const results = await DataStore.save(
        new ToDo({
          "name": "Lorem ipsum dolor sit amet",
          "description": "Lorem ipsum dolor sit amet",
          "isCompleted": true
        })
      );
      console.log(results);
    }
    fetchToDo();
    console.log('Se presionó')
  }
  console.log(models)
  //console.log(searchValue)

  const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
  },{
    id: 2,
    title: 'Spider Man',
    year: 2017
  },{
    id: 3,
    title: 'EndGame',
    year: 2019
  }]
  const getDatos = () =>{
    return new Promise ((resolve, reject)=>{
      if(datos.length === 0){
        reject(new Error('No existen datos'));
      }
      setTimeout(() =>{
        resolve(datos);
      }, 1500);
    });
  }

  async function fetchginData () {
    try{
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err){
      console.log(err)
    }
  }
  fetchginData();*/
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      {/* 
       <FlatList
       data={products}
       renderItem={({item}) => <CartProductItem cartItem={item}/>}
       showsVerticalScrollIndicator= {false}
       />
*/}

      <Button text='add' onPress={addTodo} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
})

export default HomeScreen