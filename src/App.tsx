import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Definisi tipe navigasi
export type RootStackParamList = {
  Home: undefined;
  Detail: { article: { title: string; description?: string; urlToImage?: string; url: string } };
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Custom Header dengan Gradasi
const GradientHeader = ({ title }: { title: string }) => (
  <LinearGradient 
    colors={['#6a11cb', '#2575fc']} // Gradasi ungu ke biru
    style={styles.header}
  >
    <Text style={styles.headerTitle}>{title}</Text>
  </LinearGradient>
);

// Footer Navigation di dalam App.tsx
const Footer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // ✅ Tipe eksplisit

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.footerText}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('About')}>
        <Text style={styles.footerText}>ℹ️ About</Text>
      </TouchableOpacity>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6a11cb" />
      
      <View style={styles.container}>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: ({ options }) => <GradientHeader title={options.title || 'MATA'} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MATA' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Berita' }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Tentang Aplikasi' }} />
        </Stack.Navigator>

        {/* Tambahkan Footer di dalam container */}
        <Footer />
      </View>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6a11cb', // Warna yang sama dengan header
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
