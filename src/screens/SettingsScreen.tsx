import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SettingsScreenProps {
  navigation: any;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const [brokerUrl, setBrokerUrl] = useState('wss://mqtt.eclipseprojects.io:443/mqtt');
  const [topic, setTopic] = useState('my_topic');
  const [clientId, setClientId] = useState(`mqtt-client-${Math.random().toString(16).substr(2, 8)}`);
  const [autoReconnect, setAutoReconnect] = useState(true);
  const [cleanSession, setCleanSession] = useState(true);
  const [keepAlive, setKeepAlive] = useState('60');

  const saveSettings = () => {
    // Here you would save settings to storage or context
    // For now, we'll just navigate back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Settings" />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connection Settings</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Broker URL</Text>
            <TextInput
              style={styles.input}
              value={brokerUrl}
              onChangeText={setBrokerUrl}
              placeholder="wss://broker.example.com:port/mqtt"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Topic</Text>
            <TextInput
              style={styles.input}
              value={topic}
              onChangeText={setTopic}
              placeholder="my_topic"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Client ID</Text>
            <TextInput
              style={styles.input}
              value={clientId}
              onChangeText={setClientId}
              placeholder="client-id"
            />
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Advanced Settings</Text>
          
          <View style={styles.switchGroup}>
            <Text style={styles.label}>Auto Reconnect</Text>
            <Switch
              value={autoReconnect}
              onValueChange={setAutoReconnect}
              trackColor={{ false: '#D1D5DB', true: '#10B981' }}
              thumbColor="#FFFFFF"
            />
          </View>
          
          <View style={styles.switchGroup}>
            <Text style={styles.label}>Clean Session</Text>
            <Switch
              value={cleanSession}
              onValueChange={setCleanSession}
              trackColor={{ false: '#D1D5DB', true: '#10B981' }}
              thumbColor="#FFFFFF"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Keep Alive (seconds)</Text>
            <TextInput
              style={styles.input}
              value={keepAlive}
              onChangeText={setKeepAlive}
              keyboardType="numeric"
              placeholder="60"
            />
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={saveSettings}
        >
          <Text style={styles.saveButtonText}>Save Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  switchGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  saveButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
