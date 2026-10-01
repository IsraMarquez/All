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
        name="00ARVDJ/RVDJParaMi"
        options={{
          title: 'RVDJ_ParaMi',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="ClasesScreen/index"
        options={{
          title: 'Clases',
          animation: 'fade',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
