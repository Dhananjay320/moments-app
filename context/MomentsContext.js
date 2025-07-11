import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dummyMoments from '../data/dummyMoments';

const MomentsContext = createContext();

export const MomentsProvider = ({ children }) => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem('moments');
      if (stored) {
        setMoments(JSON.parse(stored));
      } else {
        setMoments(dummyMoments);
        await AsyncStorage.setItem('moments', JSON.stringify(dummyMoments));
      }
    })();
  }, []);

  const addMoment = async (newMoment) => {
    const updated = [newMoment, ...moments];
    setMoments(updated);
    await AsyncStorage.setItem('moments', JSON.stringify(updated));
  };

  return (
    <MomentsContext.Provider value={{ moments, addMoment }}>
      {children}
    </MomentsContext.Provider>
  );
};

export const useMoments = () => useContext(MomentsContext);
