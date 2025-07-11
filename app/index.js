import React,{useEffect,useLayoutEffect} from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import MomentCard from '../components/MomentCard';
import { useRouter,useLocalSearchParams,useNavigation} from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMoments } from '../context/MomentsContext';
import { useThemeMode } from '../context/ThemeContext';
import useThemeStyle from '../utils/useThemeStyle';
const HomeScreen = () => {
  
  const router = useRouter();
  const { moments } = useMoments();
  const { toggleTheme } = useThemeMode();
  const theme = useThemeStyle();
  const navigation = useNavigation();
useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Ionicons
        name="moon"
        size={24}
        color={theme.text}
        style={{ marginRight: 15 }}
        onPress={toggleTheme}
      />
    ),
    title: '📸 My Moments',
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTitleStyle: {
      color: theme.text,
    },
  });
}, [navigation, toggleTheme, theme]);

  return (
    <SafeAreaView style={[styles.container,{backgroundColor: theme.background,}]}>
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MomentCard moments={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
  onPress={() => router.push('/add')}
  style={styles.fab}
>
  <Ionicons name="add" size={28} color="#fff" />
</TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: '#222',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 10,
  },fab: {
  position: 'absolute',
  bottom: 24,
  right: 24,
  backgroundColor: '#007AFF',
  borderRadius: 50,
  width: 56,
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
}
});
