import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const RVDJParaMi = () => {
  return (
    <View className="mt-3">
      <Text className="font-extrabold text-2xl">Felicidad (Vida Eterna)</Text>
      <Pressable onPress={() => router.push('/ClasesScreen')}>
        <Text className="font-bold">Vida Eterna</Text>
        <Text className="">Costo: $0</Text>
        <Text className="">Raite: 5</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/ClasesScreen')}>
        <Text className="font-bold">Exaltacion</Text>
        <Text className="">Costo: $10</Text>
        <Text className="">Raite: 5</Text>
      </Pressable>
    </View>
  );
};

export default RVDJParaMi;
