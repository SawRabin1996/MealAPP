import { FlatList, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealOverViewScreen({ route }) {

    const catId = route.params.categoryId;
    const displayMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    return (
        <View style={styles.container}>
            <FlatList renderItem={renderMealItem} keyExtractor={(item) => item.id} data={displayMeal} />
        </View>
    )

    function renderMealItem(itemData) {
        return <MealItem 
        title={itemData.item.title} 
        imageUrl={itemData.item.imageUrl} 
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default MealOverViewScreen
