import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const RVDJParaMi = () => {
  return (
    <View className="mt-10">
      <Text className="text-2x1 font-extrabold">Felicidad (Vida Eterna)</Text>
      <Pressable onPress={() => router.push('/ClasesScreen')}>
        <Text>Vida Eterna</Text>
      </Pressable>
    </View>
  );
};

export default RVDJParaMi;
