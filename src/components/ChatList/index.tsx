import React from 'react';

import {
  Image,
  ImageProps,
  Text,
  View
} from 'react-native';

import { styles } from './styles';

type IChatProps = ImageProps & {
  name: string,
  lastMessage: string,
  hourSend: string,
  photoUser: ImageProps
}

export function ChatList({ hourSend, lastMessage, name, photoUser }: IChatProps) {
  return (
    <View style={styles.container}>
      <View style={styles.visualChat}>
        <Image style={styles.image} source={photoUser} />

        <View style={styles.stringChat}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.hour}>{hourSend}</Text>
      </View>
    </View>
  );
}