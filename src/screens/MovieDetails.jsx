import React, { useState } from 'react'
import {
  ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native'
import MovieCard from '../components/MovieCard'

const MovieDetails = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const sortedTasks = [
    ...tasks.filter((task) => !task.completed),
    ...tasks.filter((task) => task.completed),
  ]

  const handleCreateTask = () => {
    if (newTask) {
      setNewTask('')
      setTasks([...tasks, {
        id: Math.floor(Math.random() * 1000000),
        label: newTask,
        completed: false,
      }])
    }
  }

  const handleTaskToggle = (id) => {
    setTasks((currTasks) => (
      currTasks.map((task) => (task.id === id
        ? ({ ...task, completed: !task.completed })
        : task))
    ))
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleCreateTask}
        />
        <TouchableOpacity style={styles.plusBtn} onPress={handleCreateTask}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {sortedTasks.map((task) => <MovieCard key={task.id} task={task} done={handleTaskToggle} />)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 24,
  },
  input: {
    flexGrow: 1,
    height: 40,
    borderColor: '#6200ee',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 50,
    fontSize: 20,
    letterSpacing: 1.5,
  },
  plusBtn: {
    position: 'absolute',
    right: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200ee',
    borderRadius: 8,
  },
  plusText: {
    color: '#fff',
    fontSize: 20,
  },
})

export default MovieDetails
