import { Text, View } from "react-native";
import { styles } from "../Style/Styles";
import TxtComponent from "../Components/TxtComponents";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerpink} >
        <TxtComponent  txt="Doce Encanto" styletxt={styles.titulo}/>
        <TxtComponent txt="Faça seu pedido" styletxt={styles.subtitulo}/>
      </View>
    </View>
  );
}
