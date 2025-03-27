import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ConnectionStatus } from '../types';

interface ConnectionStatusProps {
  status: ConnectionStatus;
}

export const ConnectionStatusComponent: React.FC<ConnectionStatusProps> = ({
  status,
}) => {
  return (
    <View
      style={[
        styles.container,
        status.connected ? styles.connectedContainer : styles.disconnectedContainer,
      ]}
    >
      <Icon
        name={status.connected ? 'wifi' : 'wifi-off'}
        size={16}
        color={status.connected ? '#065F46' : '#991B1B'}
      />
      <Text
        style={[
          styles.statusText,
          status.connected ? styles.connectedText : styles.disconnectedText,
        ]}
      >
        {status.connected ? 'Connected' : 'Disconnected'}
      </Text>
      {status.error && <Text style={styles.errorText}>{status.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  connectedContainer: {
    backgroundColor: '#D1FAE5',
  },
  disconnectedContainer: {
    backgroundColor: '#FEE2E2',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  connectedText: {
    color: '#065F46',
  },
  disconnectedText: {
    color: '#991B1B',
  },
  errorText: {
    fontSize: 12,
    color: '#DC2626',
    marginLeft: 8,
  },
});
