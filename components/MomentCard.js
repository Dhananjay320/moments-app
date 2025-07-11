import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import moment from 'moment';
import useThemeStyle from '../utils/useThemeStyle';

const MomentCard = ({ moments }) => {
  const router = useRouter();
  const theme = useThemeStyle();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.text }]}
      onPress={() => router.push(`/moment/${moments.id}`)}
    >
      <Image source={{ uri: moments.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>{moments.title}</Text>
        <Text style={[styles.date, { color: theme.subText }]}>
          {moment(moments.date).format('DD MMM, YYYY • h:mm A')}
        </Text>
        <Text style={[styles.description, { color: theme.text }]} numberOfLines={2}>
          {moment.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MomentCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
  },
});
