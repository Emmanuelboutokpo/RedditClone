import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>  {id}</Text>
    </View>
  )
}