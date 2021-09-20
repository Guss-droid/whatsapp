import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.lastMessage,
    fontSize: 16
  },
  iconCall: {
    position: 'absolute',
    bottom: 10,
    right: 1,
    alignItems: 'center',
    marginHorizontal: 10
  },
  iconVideo: {
    backgroundColor: theme.colors.headerDark,
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  iconAddCall: {
    backgroundColor: theme.colors.newChat,
    width: 55,
    height: 55,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginVertical: 10
  }
});