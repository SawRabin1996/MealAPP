import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoryScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler(){

            navigation.navigate("MealOverView",{
                categoryId : itemData.item.id
            })
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPressed={pressHandler}/>
    }
    
    return <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem} 
    numColumns= {2}/>
}

export default CategoryScreen