import { Text, View } from "react-native";
import { styles } from "../Style/Styles";

export default function TxtComponent({ styletxt, txt }) {
  return <Text style={styletxt}>{txt}</Text>;
}
