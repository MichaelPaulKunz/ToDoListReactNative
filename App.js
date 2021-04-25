import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header.js';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';

const App = () => {
  const [items, setItems] = useState([]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('no');
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem add={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} remove={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
