import { useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter();

  const manejarPresion = (id: number, newPath: string) => {
    // Navega a la pantalla 'detalle' y envía el ID en la URL
    router.push({
      pathname: newPath,
      params: { id: id },
    });
  };
  return (
    <SafeAreaView>
      <Pressable onPress={() => manejarPresion(1, '/00ARVDJ/RVDJParaMi')}>
        <Text>Div-EntContext</Text>
      </Pressable>
      <Pressable onPress={() => manejarPresion(2, '/00ARVDJ/RVDJParaMi')}>
        <Text>EntEscrituras</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
