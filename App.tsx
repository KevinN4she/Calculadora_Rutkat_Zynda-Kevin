import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Pantalla } from "./src/components/Pantalla";
import { BotonOperacion } from "./src/components/BotonOperacion";
import { useCalculadora } from "./src/hooks/useCalculadora";
import GlobalStyles from "./src/Themes/GlobalStyles";
import Colors from "./src/Themes/Colors";
import { Operadores } from "./src/hooks/useCalculadora"; 

export default function App() {
  const {
    formula,
    numeroAnterior,
    construirNumero,
    clean,
    cambiarSigno,
    borrarDigito,
    realizarOperacion,
    resultado,
  } = useCalculadora();

  return (
    <View style={GlobalStyles.container}>
      {}
      <Pantalla numberOfLines={1} adjustsFontSizeToFit style={GlobalStyles.pantallaGrande}>
        {formula}
      </Pantalla>

      {}
      <Pantalla
        numberOfLines={1}
        adjustsFontSizeToFit
        style={GlobalStyles.pantallaResultado}
      >
        {numeroAnterior}
      </Pantalla>

      <StatusBar style="auto" />

      {}
      <View style={GlobalStyles.fila}>
        <BotonOperacion label="C" onPress={clean} backgroundColor={Colors.botonBorrarTodo} textColor={Colors.texto} />
        <BotonOperacion label="+/-" onPress={cambiarSigno} backgroundColor={Colors.botonCambioSigno} textColor={Colors.texto} />
        <BotonOperacion label="del" onPress={borrarDigito} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="/" onPress={() => realizarOperacion(Operadores.dividir)} backgroundColor={Colors.botonDeOperacion} textColor={Colors.texto} />
      </View>

      {}
      <View style={GlobalStyles.fila}>
        <BotonOperacion label="7" onPress={() => construirNumero("7")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="8" onPress={() => construirNumero("8")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="9" onPress={() => construirNumero("9")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="x" onPress={() => realizarOperacion(Operadores.multiplicar)} backgroundColor={Colors.botonDeOperacion} textColor={Colors.texto} />
      </View>

      {}
      <View style={GlobalStyles.fila}>
        <BotonOperacion label="4" onPress={() => construirNumero("4")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="5" onPress={() => construirNumero("5")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="6" onPress={() => construirNumero("6")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="-" onPress={() => realizarOperacion(Operadores.restar)} backgroundColor={Colors.botonDeOperacion} textColor={Colors.texto} />
      </View>

      {}
      <View style={GlobalStyles.fila}>
        <BotonOperacion label="1" onPress={() => construirNumero("1")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="2" onPress={() => construirNumero("2")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="3" onPress={() => construirNumero("3")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="+" onPress={() => realizarOperacion(Operadores.sumar)} backgroundColor={Colors.botonDeOperacion} textColor={Colors.texto} />
      </View>

      {}
      <View style={GlobalStyles.fila}>
        <BotonOperacion label="0" width={180} onPress={() => construirNumero("0")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="." onPress={() => construirNumero(".")} backgroundColor={Colors.botonNumDel} textColor={Colors.texto} />
        <BotonOperacion label="=" onPress={resultado} backgroundColor={Colors.botonCambioSigno} textColor={Colors.texto} />
      </View>
    </View>
  );
}
