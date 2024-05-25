// screens/AddItemScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ItemsContext } from '../context/ItemsContext';

const AddItemScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const { addItem } = useContext(ItemsContext);

  const handleAddItem = () => {
    if (text) {
      addItem(text);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>New Item:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter item here"
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default AddItemScreen;
