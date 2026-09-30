import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export const RVDJParaMi = () => {
  return (
    <View>
      <Text style={{ color: 'white' }}>Felicidad (Vida Eterna)</Text>
      <Link style={{ color: 'white' }} href="/">
        Regresar
      </Link>
    </View>
  );
};
