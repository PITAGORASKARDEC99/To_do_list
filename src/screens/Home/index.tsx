import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from "./styles";

export function Home() {
  
const MinhasTasks= ['lavar carro', 'limpar casa', 'comprar comida', 'limpar computador',
                    'limpar armario', 'comprar ovos', 'limpar cama', 'limpar banheiro',
                    'limpar janela', 'academia', 'jogar futebol', 'treinar jiujitsu',
];


  function handleParticipantsAdd() {
    console.log("Adicionar");
  }

  function handleTaskRemove(name: string) {
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

<ScrollView>
    {
      MinhasTasks.map(task => (
        
        <Participant  
        key={task}
        name={task}
        onRemove={() => handleTaskRemove("Listar atividades")}/>
      ))
    }
     
    </ScrollView>>


    </View>
  );
}
