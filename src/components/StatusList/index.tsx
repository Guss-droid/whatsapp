import React from 'react';

import {
  ImageProps,
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

type IStatusProps = ImageProps & {
  name: string,
  photo: ImageProps,
  hour: string
}

export function StatusList({ hour, name, photo }: IStatusProps) {
  return (
    <View style={styles.container}>
      <View style={styles.visualStatus}>
        <Image style={styles.image} source={photo} />

        <View style={styles.stringStatus}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.hour}>{hour}</Text>
        </View>
      </View>
    </View>
  );
}