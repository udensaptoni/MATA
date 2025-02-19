import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const teamMembers = [
  {
    id: '1',
    name: 'Muhamad Aziz Nuriman',
    nim: '17221019',
    image: require('../assets/images/aziz.jpg'), // Gunakan require() untuk gambar lokal
  },
  {
    id: '2',
    name: 'Muh Faiz Ilham Maulana',
    nim: '17223008',
    image: require('../assets/images/faiz.jpg'),
  },
  {
    id: '3',
    name: 'Uden Saptoni',
    nim: '17223026',
    image: require('../assets/images/uden.jpg'),
  },
];

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dibuat untuk menyajikan berita terbaru dengan tampilan modern dan navigasi yang mudah digunakan.
      </Text>

      <Text style={styles.teamTitle}>👥 Tim Pengembang</Text>

      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <Image source={item.image} style={styles.avatar} />
            <View>
              <Text style={styles.memberName}>{item.name}</Text>
              <Text style={styles.memberNIM}>NIM: {item.nim}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6a11cb',
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  memberNIM: {
    fontSize: 14,
    color: '#666',
  },
});

export default AboutScreen;
