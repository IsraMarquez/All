import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import RVDJ from '@/assets/sprites/Abuelo.png';
// import VRVDJ from '@/assets/videos/Misional.mp4';

// import { Link } from 'expo-router';
// import { type SetStateAction } from 'react';
// import {
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
//   useWindowDimensions,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  // const { width } = useWindowDimensions();

  // // Definimos si se debe ver como web (pantallas mayores a 768px)
  // const esVistaWeb = width >= 200;
  // const manejarReproduccion = (nombreVideo: SetStateAction<string>) => {};

  return (
    <SafeAreaView>
      {/* <View className="px-10 mt-5">
        <Link href="/ProductsScreen" asChild>
          <CustomButton color="primary">Productos1</CustomButton>
        </Link> */}
      <Pressable onPress={() => router.push('/00ARVDJ/RVDJParaMi')}>
        <Text>Div-EntContext</Text>
      </Pressable>
      {/* <CustomButton
          color="primary"
          onPress={() => router.push('/ProductsScreen')}
        >
          Productos2
        </CustomButton> */}
      {/* <Link className="mb-5" href="/products">
          Products
        </Link> */}
      {/* </View> */}
    </SafeAreaView>

    //-------------------------------------------------------
    // <SafeAreaView>
    //   <Text style={styles.texto}>
    //     Horizontal - Mayor Tiempo Posible (Niños) 60%
    //   </Text>
    //   <View
    //     style={[styles.fila, { flexDirection: esVistaWeb ? 'row' : 'column' }]}
    //   >
    //     <Text style={[styles.celda, { width: '30%' }]}>
    //       Para Mi-Palabras de Vida 60%
    //     </Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>FamEH</Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>FamExtEH</Text>
    //     <Text style={[styles.celda, { width: '30%' }]}>Ellos-Medido N40%</Text>
    //   </View>
    //   <View
    //     style={{
    //       borderBottomWidth: 1,
    //       borderColor: '#CCCCCC',
    //       marginVertical: 15,
    //     }}
    //   />

    //   <Text style={styles.texto}>ARVDJ (Felicidad) 60%</Text>
    //   <View
    //     style={[styles.fila, { flexDirection: esVistaWeb ? 'row' : 'column' }]}
    //   >
    //     <Pressable
    //       onPress={() => manejarReproduccion(VRVDJ)}
    //       style={({ pressed }) => [
    //         styles.boton,
    //         // Efecto visual opcional: se aclara un poco al mantenerlo presionado en el celular
    //         pressed && { opacity: 0.8 },
    //       ]}
    //     >
    //       <Image
    //         source={RVDJ} // Conservas la misma variable de tu imagen importada
    //         style={styles.icono}
    //         accessibilityLabel="View-RVDiosJ Porque? Felicidad Video" // El equivalente a 'alt' para accesibilidad
    //       />
    //     </Pressable>
    //     <Text style={[styles.celda, { width: '25%' }]}>Motivar Cristo</Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>QQ</Text>
    //     <Text style={[styles.celda, { width: '30%' }]}>Ellos-Espiritu</Text>
    //   </View>
    //   <View
    //     style={[styles.fila, { flexDirection: esVistaWeb ? 'row' : 'column' }]}
    //   >
    //     <Link
    //       style={[styles.celda, { width: '30%' }]}
    //       href="/00ARVDJ/RVDJParaMi"
    //     >
    //       Div-PreEntContex
    //     </Link>
    //     <Link
    //       style={[styles.celda, { width: '25%' }]}
    //       href="/00ARVDJ/RVDJFamEH"
    //     >
    //       EntEscrituras
    //     </Link>
    //     <Link
    //       style={[styles.celda, { width: '25%' }]}
    //       href="/00ARVDJ/RVDJFamExtEH"
    //     >
    //       My Info
    //     </Link>
    //     <Link
    //       style={[styles.celda, { width: '30%' }]}
    //       href="/00ARVDJ/RVDJEllos"
    //     >
    //       Ellos-Info
    //     </Link>
    //   </View>
    //   <View
    //     style={[styles.fila, { flexDirection: esVistaWeb ? 'row' : 'column' }]}
    //   >
    //     <Link
    //       style={[styles.celda, { width: '30%' }]}
    //       href="/00ARVDJ/RVDJFamEH"
    //     >
    //       Sim-ProPruebaRapAde
    //     </Link>
    //     <Text style={[styles.celda, { width: '25%' }]}>Ayudar</Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>Practicar</Text>
    //     <Text style={[styles.celda, { width: '30%' }]}>Ellos-Lugares</Text>
    //   </View>
    //   <View
    //     style={[styles.fila, { flexDirection: esVistaWeb ? 'row' : 'column' }]}
    //   >
    //     <Text style={[styles.celda, { width: '30%' }]}>
    //       Sim-PostRutAutoHabitos
    //     </Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>AyudarRutAuto</Text>
    //     <Text style={[styles.celda, { width: '25%' }]}>RutAuto</Text>
    //     <Text style={[styles.celda, { width: '30%' }]}>Ellos-RutAuto</Text>
    //   </View>
    //   <View
    //     style={{
    //       borderBottomWidth: 1,
    //       borderColor: '#CCCCCC',
    //       marginVertical: 15,
    //     }}
    //   />
    //   <View
    //     style={{
    //       borderBottomWidth: 1,
    //       borderColor: '#CCCCCC',
    //       marginVertical: 15,
    //     }}
    //   />
    // </SafeAreaView>
    //);
    //-------------------------------------------------------
  );
};

export default Home;

// const styles = StyleSheet.create({
//   fila: {
//     //flexDirection: 'row', // Hace que los elementos se pongan uno al lado del otro
//     // borderTopWidth: 1,
//     // borderBottomWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#000000',
//     padding: 10,
//   },
//   celda: {
//     flex: 4, // Distribuye el espacio equitativamente
//     color: '#ffffff', // Texto negro explícito
//   },
//   texto: {
//     color: '#ffffff', // Texto negro explícito
//     fontSize: 16,
//   },
//   boton: {
//     flex: 4,
//     backgroundColor: 'black',
//     padding: 0, // Un padding pequeño simulando el 'btn-sm' de Bootstrap
//     borderRadius: 0, // Bordes ligeramente redondeados
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     alignSelf: 'flex-start', // Evita que el botón se estire a lo ancho de toda la pantalla
//   },
//   icono: {
//     width: 50, // En React Native no se usa 'px', van números directos
//     height: 50,
//     resizeMode: 'contain', // Asegura que la imagen no se deforme dentro de los 50x50
//   },
//   overlayVideo: {
//     // 💡 El equivalente a fixed + 100vw/vh es absoluto estirado a los 4 bordes
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,

//     backgroundColor: 'rgba(0, 0, 0, 0.95)', // Mantiene tu fondo oscuro elegante

//     // En React Native, flex ya es el display por defecto, solo alineas el centro:
//     justifyContent: 'center',
//     alignItems: 'center',

//     // El zIndex móvil no necesita ser un número gigante. Con poner un valor alto basta.
//     zIndex: 100,
//   },
// });
