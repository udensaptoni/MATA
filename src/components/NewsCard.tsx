import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Tambahkan ini untuk gradasi
import { Article } from '../utils/api';

interface NewsCardProps {
    article: Article;
    onPress: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            {/* Gambar berita */}
            <Image
                source={{ uri: article.urlToImage || 'https://via.placeholder.com/400x200.png?text=No+Image' }}
                style={styles.image}
            />
            
            {/* Background dengan gradasi untuk judul */}
            <LinearGradient colors={['#FF7E5F', '#FD3A69']} style={styles.gradient}>
                <Text style={styles.title} numberOfLines={2}>{article.title}</Text>
            </LinearGradient>

            <View style={styles.textContainer}>
                <Text style={styles.description} numberOfLines={3}>{article.description || 'Tidak ada deskripsi.'}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 12, // Jarak antar card
        backgroundColor: '#f5f5f5', // Warna lebih soft, serasi dengan header
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1, // Efek shadow lebih soft
        shadowRadius: 6,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 12, // Sudut lebih smooth
        borderTopRightRadius: 12,
    },
    gradient: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', // Warna putih agar kontras dengan gradasi
        textAlign: 'center',
    },
    textContainer: {
        padding: 12,
    },
    description: {
        fontSize: 14,
        color: '#444', // Warna yang lebih soft untuk deskripsi
        marginTop: 6,
    },
});

export default NewsCard;
