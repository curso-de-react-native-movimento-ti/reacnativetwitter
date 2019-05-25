import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    height: 44 + getStatusBarHeight(),
    borderBottomWidth: 2,
    borderBottomColor: "#F5F5F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121"
  }
});

export default styles;
