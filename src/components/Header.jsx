import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  headerTextStyle: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});

export default function Header({ title, backgroundColor }) {
  const headerStyles = StyleSheet.flatten([
    styles.header,
    { backgroundColor },
  ]);

  return (
    <View style={headerStyles}>
      <Text style={styles.headerTextStyle}>{title}</Text>
    </View>
  );
}