import React, { useState,useLayoutEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter,useLocalSearchParams,useNavigation } from 'expo-router';
import { useMoments } from '../context/MomentsContext';
import useThemeStyle from '../utils/useThemeStyle';
import { useThemeMode } from '../context/ThemeContext';



const AddMoment = () => {
  const router = useRouter();
  const theme = useThemeStyle();
  const { toggleTheme } = useThemeMode();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const { addMoment } = useMoments();
  const handleSubmit = () => {
    if (!title || !desc || !imageUrl || !date) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
 const newMoment = {
  id: Date.now().toString(),
  title,
  description: desc,
  imageUrl,
  date,
};

addMoment(newMoment);
Alert.alert('Success', 'Moment added!');
router.push('/');
  };
      const navigation = useNavigation();
      useLayoutEffect(() => {
      navigation.setOptions({
        title: '📸 Add ',
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.text,
        },
      });
    }, [navigation, toggleTheme, theme]);
   
  return (
    <ScrollView contentContainerStyle={[styles.container,{backgroundColor: theme.background,}]}>
      <Text style={styles.header}>Add a New Moment</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={[styles.input,{color: theme.text}]}
      />

      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        style={[styles.input,{color: theme.text}]}
        multiline
      />

      <TextInput
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={[styles.input,{color: theme.text}]}
      />

      <TextInput
        placeholder="Date (YYYY-MM-DDTHH:mm:ss)"
        value={date}
        onChangeText={setDate}
        style={[styles.input,{color: theme.text}]}
      />

    <Pressable
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Add Moment
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default AddMoment;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },button: {
  paddingVertical: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
},
buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
},
});
