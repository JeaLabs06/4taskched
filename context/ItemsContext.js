// context/ItemsContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const storedItems = await AsyncStorage.getItem('items');
      if (storedItems) setItems(JSON.parse(storedItems));
    };

    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      await AsyncStorage.setItem('items', JSON.stringify(items));
    };

    saveItems();
  }, [items]);

  const addItem = (text) => {
    setItems([...items, { text, checked: false, checkedAt: null }]);
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    if (newItems[index].checked) {
      newItems[index].checkedAt = new Date().toLocaleString();
    } else {
      newItems[index].checkedAt = null;
    }
    setItems(newItems);
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, toggleItem }}>
      {children}
    </ItemsContext.Provider>
  );
};
