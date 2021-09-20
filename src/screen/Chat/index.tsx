import React, { useState } from 'react';

import {
  FlatList,
  View
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { ChatList } from '../../components/ChatList';

import { Gi, Gustavo } from '../../components/Image';

import { styles } from './styles';
import { theme } from '../../global/theme';

export function Chat() {

  const [chats] = useState([
    {
      id: 1,
      name: 'Gustavo',
      image: Gustavo,
      lastMessage: 'Oi, tudo bem?',
      hourSend: '10:00'
    },
    {
      id: 2,
      name: 'Giovanni',
      image: Gi,
      lastMessage: 'Legal',
      hourSend: '10:30'
    },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatList
            name={item.name}
            photoUser={item.image}
            hourSend={item.hourSend}
            lastMessage={item.lastMessage}
            source={item.image}
          />
        )}
      />
      <View>
        <View style={styles.newChat}>
          <View style={styles.icon}>
            <Icon  name="message-square" size={30} color={theme.colors.nameDark} />
          </View>
        </View>
      </View>
    </View>
  );
}