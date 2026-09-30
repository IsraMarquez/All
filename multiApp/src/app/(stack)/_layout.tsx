import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        //headerShown: false, //quitar header
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Home/index"
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="ProductsScreen/index"
        options={{
          title: 'Productos',
          animation: 'fade',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
