import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable>
        <View>
          <Text style>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

