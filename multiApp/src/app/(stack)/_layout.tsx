import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        //headerShown: false, //quitar header
        headerShadowVisible: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'black',
          height: 30, // Ajusta una altura más compacta (por defecto suele ser 80-100px)
        },
        headerTitleStyle: {
          fontSize: 16, // Reduce ligeramente el tamaño del título
          color: 'white',
        },
        contentStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          title: 'Inicio',
        }}
      />
      <Stack.Screen
        name="CursosScreen"
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
