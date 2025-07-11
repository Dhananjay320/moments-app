import { Stack } from 'expo-router';
import { ThemeProvider } from '../context/ThemeContext';
import { MomentsProvider } from '../context/MomentsContext';

export default function Layout() {
  return (
    <ThemeProvider>
      <MomentsProvider>
        <Stack />
      </MomentsProvider>
    </ThemeProvider>
  );
}
