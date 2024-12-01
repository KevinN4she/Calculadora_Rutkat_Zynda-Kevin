import { Text, type TextProps, StyleSheet } from 'react-native';
import GlobalStyles from '../Themes/GlobalStyles';

interface Props extends TextProps {
  size?: 'large' | 'small'; 
  isResult?: boolean; 
  inputColor?: string; 
}

export const Pantalla = ({ children, size = 'large', isResult = false, inputColor = '#000', ...rest }: Props) => {
  return (
    <Text
      style={[
        GlobalStyles.pantallaGrande,
        size === 'large' && GlobalStyles.pantallaGrande,
        isResult && GlobalStyles.pantallaResultado,
        !isResult && { color: inputColor }, 
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

