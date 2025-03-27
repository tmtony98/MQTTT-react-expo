import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderProps {
  title: string;
  onSettingsPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onSettingsPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {onSettingsPress && (
        <TouchableOpacity onPress={onSettingsPress} style={styles.settingsButton}>
          <Icon name="settings" size={24} color="#1F2937" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  settingsButton: {
    padding: 8,
  },
});
