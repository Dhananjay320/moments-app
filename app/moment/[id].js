import React,{useLayoutEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRouter,useLocalSearchParams,useNavigation} from 'expo-router';
import dummyMoments from '../../data/dummyMoments';
import moment from 'moment';
import useThemeStyle from '../../utils/useThemeStyle';

const MomentDetail = () => {
  const { id } = useLocalSearchParams();
  const selectedMoment = dummyMoments.find((m) => m.id === id);
  const theme = useThemeStyle();
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
    title: '📸 Moment Detail ',
    headerStyle: {
      backgroundColor: theme.background,
    },
    headerTitleStyle: {
      color: theme.text,
    },
  });
}, []);
  if (!selectedMoment) {
    return (
      <View style={[styles.center, { backgroundColor: theme.background }]}>
        <Text style={[styles.error, { color: theme.text }]}>Moment not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: selectedMoment.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>{selectedMoment.title}</Text>
        <Text style={[styles.date, { color: theme.subText }]}>
          {moment(selectedMoment.date).format('DD MMMM, YYYY [at] h:mm A')}
        </Text>
        <Text style={[styles.description, { color: theme.text }]}>
          {selectedMoment.description}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MomentDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 240,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
  },
});
