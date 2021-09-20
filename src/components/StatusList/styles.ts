import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  visualStatus: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 15
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60
  },
  stringStatus: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    color: theme.colors.nameDark,
    fontWeight: 'bold',
    fontSize: 17,
    marginHorizontal: 10
  },
  hour: {
    color: theme.colors.lastMessage,
    marginHorizontal: 10,
    marginLeft: 12
  }
});