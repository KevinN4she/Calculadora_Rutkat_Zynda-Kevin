import { StyleSheet } from "react-native";
import Colors from "./Colors";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fondo, 
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    paddingHorizontal: 10,
    width: "100%",
  },
  pantallaGrande: {
    fontSize: 60,
    textAlign: "right",
    fontWeight: "400",
    width: "90%",
    color: Colors.numeroIntroducido, 
  },
  pantallaResultado: {
    fontSize: 40,
    textAlign: "right",
    fontWeight: "400",
    width: "90%",
    color: Colors.resultado,
  },
  boton: {
    textAlign: "center",
    padding: 10,
    borderColor: Colors.texto,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBoton: {
    fontSize: 30,
    fontWeight: "300",
    color: Colors.texto, 
  },
});

export default GlobalStyles;
