import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundDark
  },
  myStatus: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 60,
    width: 60,
  },
  plusContainer: {
    backgroundColor: theme.colors.newChat,
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
    right: -10,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    paddingHorizontal: 15
  },
  myText: {
    color: theme.colors.nameDark,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTittle: {
    color: theme.colors.lastMessage
  },
  otherStatus: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  iconStatus: {
    position: 'absolute',
    bottom: 10,
    right: 1,
    alignItems: 'center',
    marginHorizontal: 10
  },
  iconEdit: {
    backgroundColor: theme.colors.headerDark,
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  iconCamera: {
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