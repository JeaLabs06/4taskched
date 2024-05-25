// screens/ItemsScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ItemsContext } from '../context/ItemsContext';

const ItemsScreen = () => {
  const { items } = useContext(ItemsContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={item.checked ? styles.checkedItemText : styles.itemText}>
        {item.text}
      </Text>
      {item.checked && (
        <Text style={styles.checkedAtText}>
          Checked at: {item.checkedAt}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
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
});

export default ItemsScreen;
