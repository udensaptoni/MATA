import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from 'react-native';
import NewsCard from '../components/NewsCard';
import { fetchNews, Article } from '../utils/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Detail: { article: Article };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const loadNews = async () => {
        setLoading(true);
        const articles = await fetchNews();
        setNews(articles);
        setLoading(false);
    };

    useEffect(() => {
        loadNews();
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        loadNews().then(() => setRefreshing(false));
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <NewsCard article={item} onPress={() => navigation.navigate('Detail', { article: item })} />
                    )}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});

export default HomeScreen;
