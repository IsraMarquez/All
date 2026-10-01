import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text } from 'react-native';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  console.log({ id });
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <ScrollView className="px-5 mt-3">
      <Text className="font-bold text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
    </ScrollView>
  );
};

export default ProductScreen;
