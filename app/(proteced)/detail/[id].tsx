import PostListItem from '@/components/PostListItem';
import { posts } from '@/types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const detailPost = posts.find(item => item.id === id)
   if (!detailPost) {
     return <Text>Post not found !</Text>
   }
  return (
      <View className='px-4 mt-14'>
         <PostListItem isDetailedPost={true} item={detailPost} />   
      </View>
  )
}