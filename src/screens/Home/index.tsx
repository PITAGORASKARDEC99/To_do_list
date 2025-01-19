import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
   

function handleParticipantsAdd() {
    console.log("Adicionar");    
}


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de Tarefas</Text>

      <Text style={styles.eventDate}>Segunda, 20 janeiro 2025.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da tarefa"
        placeholderTextColor={"#fff"}
      />
      <TouchableOpacity style={styles.button} onPress={ handleParticipantsAdd}>
        <Text style={styles.buttonText}>
            +
            </Text>           
      </TouchableOpacity>


    </View>
  );
}
