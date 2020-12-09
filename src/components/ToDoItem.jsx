import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ToDoItem = ({ task, done }) => (
  <TouchableOpacity
    style={[styles.todo, task.completed ? styles.completed : styles.pending]}
    onPress={() => done(task.id)}
  >
    <Text style={[styles.label, task.completed ? styles.completed : styles.pending]}>
      {task.label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 20,
  },
  completed: {
    backgroundColor: '#666',
    color: '#fff',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  pending: {
    backgroundColor: '#ffde03',
    color: '#000',
  },
});

export default ToDoItem;
