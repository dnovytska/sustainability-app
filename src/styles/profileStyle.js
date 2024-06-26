import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const profileStyle = StyleSheet.create({
  headerProfile: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: statusBarHeight,
  },
  headerProfileTitle: {
    padding: 5,
    fontSize: 50,
    color: '#16A34A',
    textAlign: 'center',
  },
  profileDataText: {
    width: '100%', 
    paddingLeft: 50, 
    paddingRight: 50, 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  profileStyleLine: {
    borderColor: '#16A34A', 
    borderWidth: 1, 
    borderStartWidth: 350
  },
  achievementsGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default profileStyle;