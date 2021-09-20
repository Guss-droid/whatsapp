import React, { useState } from 'react';

import {
  FlatList,
  ImageBackground,
  Text,
  View
} from 'react-native';
import { Entypo, Feather as Icon } from '@expo/vector-icons';
import { Gustavo, Gi, Suco } from '../../components/Image';
import { StatusList } from '../../components/StatusList';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function Status() {

  const [status] = useState([
    {
      id: 1,
      name: 'Giovanni',
      time: 'Hoje 02:18',
      image: Gi
    },
    {
      id: 2,
      name: 'Natalia',
      time: 'Ontem 22:08',
      image: Suco
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.myStatus}>

        <ImageBackground style={styles.avatar} source={Gustavo} >
          <View style={styles.plusContainer}>
            <Icon name="plus" size={26} color={theme.colors.nameDark} />
          </View>
        </ImageBackground>

        <View style={styles.textContainer}>
          <Text style={styles.myText}>Meu status</Text>
          <Text style={styles.subTittle}>Toque para atualizar seus status</Text>
        </View>
      </View>

      <View style={styles.otherStatus}>
        <Text style={styles.subTittle}>Atualizações vistas</Text>
      </View>
      <FlatList
        data={status}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <StatusList
            name={item.name}
            hour={item.time}
            photo={item.image}
            source={item.image}
          />
        )}
      />

      <View style={styles.iconStatus}>
        <View style={styles.iconEdit}>
          <Entypo name="edit" size={26} color={theme.colors.nameDark} />
        </View>

        <View style={styles.iconCamera}>
          <Entypo name="camera" size={26} color={theme.colors.nameDark} />
        </View>
      </View>
    </View>
  );
}