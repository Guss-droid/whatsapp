import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function Call() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Para fazer chamadas com seus contatos </Text>
      <Text style={styles.text}>
        que usam o WhastApp, toque em
        <MaterialIcons name="add-call" size={16} /> no
      </Text>
      <Text style={styles.text}>final da tela </Text>

      <View style={styles.iconCall}>
        <View style={styles.iconVideo}>
          <MaterialIcons name="video-call" size={26} color={theme.colors.nameDark} />
        </View>

        <View style={styles.iconAddCall}>
        <MaterialIcons name="add-call" size={26} color={theme.colors.nameDark} />
        </View>
      </View>
    </View>
  );
}