import React, { useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Header from './src/Header';
import List from './src/List';


export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Kevin Dias',
      descricao: 'Mais um dia de muitos bugs',
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yArE6HpPPXB6nRNcoSQABmRen8CjXDSc4Q&usqp=CAU',
      imgpublicacao: 'https://miro.medium.com/max/3087/1*EFbRMLOp-q2FhCVtu1wx0Q.png',
      likeada: true,
      likers: 1
    },
    {
      id: '2', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
      likeada: true, 
      likers: 1
     },
    {
      id: '3', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '4', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '5', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '6', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ]);

  return(
    <View style={styles.container}>
      <Header />
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id}
        data={feed}
        renderItem={({ item }) => <List data={item} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})