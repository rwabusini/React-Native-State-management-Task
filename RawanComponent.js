import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';


const RawanComponent = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}> 
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text> 
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default RawanComponent;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});