import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
const ClasesScreen = () => {
  return (
    <FlatList
      className="flex flex-1 px-4"
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="mt-3">
          <Link href={`/ClasesScreen/${item.id}`} className="text-primary">
            <Text className="text-2x1 font-extrabold">{item.title}</Text>
          </Link>
          {/* <Text className="">{item.description}</Text> */}

          {/* <View className="flex flex-row justify-between mt-2"> */}
          {/* <Text className="font-extrabold">{item.price}</Text> */}
          {/* <Text className="font-extrabold">{item.raite}</Text> */}
          {/* </View> */}
        </View>
      )}
    />
  );
};

export default ClasesScreen;
