import NoResults from '@/components/NoResults';
import PostListItem from '@/components/PostListItem';
import { posts } from '@/types';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, View } from 'react-native';

const HomeScreen = () => {
    const handleCardPress = (id: string) => router.push(`/detail/${id}`)
  return (
    <View>
      <FlatList
          data={posts}
          renderItem={({ item }) => ( <PostListItem item={item}  onPress={() => { handleCardPress(item.id)}} />)}
          keyExtractor={(item) => `posts-${item.id}`} 
          ListEmptyComponent={<NoResults />}
          contentContainerClassName="flex gap-5 mt-5"
      />
     
    </View>
  )
}

export default HomeScreen