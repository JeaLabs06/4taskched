// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ItemsContext } from '../context/ItemsContext';

const HomeScreen = ({ navigation }) => {
  
  const { items, toggleItem } = useContext(ItemsContext);

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={item.checked ? styles.checkedItemText : styles.itemText}>
        {item.text}
      </Text>
      {item.checked && (
        <Text style={styles.checkedAtText}>
          Checked at: {item.checkedAt}
        </Text>
      )}
      <Button
        title={item.checked ? "Uncheck" : "Check"}
        onPress={() => toggleItem(index)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItem')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
  },
  itemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  checkedAtText: {
    fontSize: 12,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default HomeScreen;
