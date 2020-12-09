import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { navigate } = useNavigation();
  const links = [
    { key: 1, label: 'Lista de Tarefas', view: 'ToDo' },
  ];

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 32 }}>
      <View style={styles.wrapper}>
        {links.map(({ key, label, view }) => (
          <RectButton key={key} style={styles.navigation} onPress={() => navigate(view)}>
            <Text style={styles.navigationText}>{label}</Text>
          </RectButton>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
    marginBottom: 16,
    borderRadius: 8,
  },
  navigationText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Home;
