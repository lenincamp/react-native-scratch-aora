import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { useColorScheme } from 'nativewind';



const RootLayout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log('Current color scheme:', colorScheme);
  return (
      <View style={styles.container}>
        <Text className="text-black dark:text-white size-10">Hola mundo </Text>
        <StatusBar style="auto"/>
        <Link href="/profile" style={{ color: 'blue' }}>Go to profile </Link>
      </View>
  )
}
export default RootLayout
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
