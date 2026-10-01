import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const RVDJFamEH = () => {
  return (
    <View className="mt-3">
      <Pressable onPress={() => router.push('/ClasesScreen')}>
        <Text className="font-bold">Profetas Modernos</Text>
        <Text className="">Costo: $0</Text>
        <Text className="">Raite: 5</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/ClasesScreen')}>
        <Text className="font-bold">Doctrina y Convenios</Text>
        <Text className="">Costo: $10</Text>
        <Text className="">Raite: 5</Text>
      </Pressable>
    </View>
  );
};

export default RVDJFamEH;
