import { StyleSheet, Text } from 'react-native';
import React from 'react';

const AppText = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.default, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#333',
  },
});
