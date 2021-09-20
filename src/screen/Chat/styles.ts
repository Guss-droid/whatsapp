import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundDark
  },
  newChat: {
    borderWidth: 1,
    borderColor: '#0001',
    width: 70,
    position: 'absolute',
    height: 70,
    right: 10,
    bottom: 10,
    backgroundColor: theme.colors.newChat,
    borderRadius: 100
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
});