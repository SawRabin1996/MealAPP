import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function MealItem({ title, imageUrl, affordability, complexity, duration }) {
    return <View style={styles.mealItem}>
        <Pressable >
            <View>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style ={styles.detail}>
            <Text style={styles.detailItem}>{duration} M </Text>
                <Text style={styles.detailItem}>{affordability}</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                
            </View>
        </Pressable>
    </View>
}
export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
        margin: 8


    },
    mealItem: {
        elevation : 8,
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: "#FFF"
    },

    detail: {
        flexDirection: 'row',
        justifyContent : "center"
    },
    detailItem:{
        marginHorizontal : 4,
        marginVertical : 10
    }

})