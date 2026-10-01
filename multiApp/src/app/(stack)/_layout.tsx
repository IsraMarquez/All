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
          title: 'Cursos',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="00ARVDJ/RVDJFamEH"
        options={{
          title: 'Cursos',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="ClasesScreen"
        options={{
          title: 'Clases',
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name="DetalleClase"
        options={{
          title: 'Detalle de Clase',
          animation: 'fade',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
