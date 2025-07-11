import { useThemeMode } from '../context/ThemeContext';

export default function useThemeStyle() {
  const { theme } = useThemeMode();

  const colors = {
    light: {
      background: '#ffffff',
      card: '#f8f8f8',
      text: '#222',
      subText: '#666',
      primary: '#007AFF',
      border: '#e0e0e0',
    },
    dark: {
      background: '#121212',
      card: '#1E1E1E',
      text: '#f5f5f5',
      subText: '#AAAAAA',
      primary: '#0A84FF',
      border: '#2a2a2a',
    },
  };

  return colors[theme];
}
