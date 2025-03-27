import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { MessageList } from '../components/MessageList';
import { ConnectionStatusComponent } from '../components/ConnectionStatus';
import { useMqtt } from '../hooks/useMqtt';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { messages, status } = useMqtt();

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    
    <SafeAreaView style={styles.container} edges={['top']}>

      <Header title="MQTT Client" onSettingsPress={navigateToSettings} />
      
      <View style={styles.content}>
        <View style={styles.statusContainer}>
          <ConnectionStatusComponent status={status} />
        </View>
        
        <View style={styles.topicContainer}>
          <Text style={styles.topicLabel}>Subscribed Topic</Text>
          <View style={styles.topicValue}>
            <Text style={styles.topicText}>my_topic</Text>
          </View>
        </View>

        <View style={styles.messagesContainer}>
          <Text style={styles.messagesTitle}>Messages</Text>
          <MessageList messages={messages} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statusContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  topicContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  topicLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 4,
  },
  topicValue: {
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  topicText: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
});
