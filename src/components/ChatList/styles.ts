import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
    width: -10
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  visualChat: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  stringChat: {
    paddingHorizontal: 15
  },
  name: {
    color: theme.colors.nameDark,
    fontWeight: 'bold',
    fontSize: 18
  },
  hour: {
    color: theme.colors.hourDark,
  },
  lastMessage: {
    color: theme.colors.lastMessage,
    marginLeft: 5
  },
});