import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserContext } from './UserContext';
import { useState } from 'react';
import RawanComponent from './RawanComponent';


export default function App() {

  const [user, setUser] = useState({
    name: 'Rawan Abuseini',
    age: 37,
    email: 'rwabusini@gmail.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <View style={styles.container}>
        <Button 
          onPress={() => setUser({ ...user, name: 'Ahmad' })}
          title="Change Name"
          color="#841584"
          accessibilityLabel="Change the user's name"
        />
        <RawanComponent />
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
