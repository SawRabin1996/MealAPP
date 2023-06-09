import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';


function CategoryGridTile({ title, color ,onPressed}) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPressed}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;


const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#FFF",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8


  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "#FFF"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,

  }
})

