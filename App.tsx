import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { MessageList } from './src/components/MessageList';
import { ConnectionStatusComponent } from './src/components/ConnectionStatus';
import { useMqtt } from './src/hooks/useMqtt';

export default function App() {
  const { messages, status } = useMqtt();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>MQTT Client</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  topicContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  topicLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 4,
  },
  topicValue: {
    backgroundColor: '#E5E7EB',
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
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  messagesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
});
