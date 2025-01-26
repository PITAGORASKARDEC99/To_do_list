import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from "./styles";

export function Home() {

const [MinhasTasks,setMinhasTasks] = useState(['estudar a noite']);






  function handleParticipantsAdd() {
    
    if(MinhasTasks.includes('lavar carro')) {
      return alert('tarefa já existe');
    }
   setMinhasTasks(prevState => [...prevState,'ir academia']);
  }
  
  function handleTaskRemove(name: string) {
    Alert.alert ("Remover", `removar a tarefa ${name}?`,[
      {
        text: 'Sim',
        onPress: () => Alert.alert("deletada")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
          console.log(`Remover  ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de Tarefas</Text>

      <Text style={styles.eventDate}>Segunda, 20 janeiro 2025.</Text>

      <View  style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome da tarefa"
          placeholderTextColor={"#fff"}
        />


        <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
          <Text style={styles.buttonText}>
            +
            </Text>
        </TouchableOpacity>
      </View>


<FlatList
        data={MinhasTasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant  
          key={item}
          name={item}
          onRemove={() => handleTaskRemove(item)}
          />
        )}
        />

    </View>
  )
}
