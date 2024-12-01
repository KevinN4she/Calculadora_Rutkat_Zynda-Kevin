import { Pressable, Text, StyleSheet } from "react-native";
import * as Haptics from 'expo-haptics';
import GlobalStyles from '../Themes/GlobalStyles';

  

interface Props {
    label: string;
    width?: number;
    onPress?: () => void;
    backgroundColor?: string; 
    textColor?: string; 
};

export const BotonOperacion = ({ label, width = 80, onPress, backgroundColor = "#f0f0f0", textColor = "#000" }: Props) => {
    
    const presion = () => {
        if (onPress) {
            onPress(); 
            Haptics.selectionAsync();
            console.log('ahora vibro');

        }

    }
    
        return (
        <Pressable
            style={[GlobalStyles.boton, { width, backgroundColor }]}
            onPress={presion}
        >
            <Text style={[GlobalStyles.textoBoton, { color: textColor }]}>{label}</Text> {}
        </Pressable>
    );
};

