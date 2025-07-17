import { Post } from '@/types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { formatDistanceToNowStrict } from "date-fns";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';


type PostListItemProps = {
  item: Post;
  onPress : ()=>void;
  isDetailedPost?: boolean;
}

export default function PostListItem({ item,onPress } : PostListItemProps) {
  return (
     <TouchableOpacity onPress={onPress} className='px-4'>
      <View className='flex-row items-center'>
        <Image source={{ uri: item.group.image }} className=' mr-1 w-8 h-8 rounded-full ' />
        <Text className='text-base font-bold mr-4'>{item.group.name}</Text>
        <Text className='text-base  text-gray-400 '>{formatDistanceToNowStrict(item.created_at)}</Text>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-blue-600 rounded-xl ml-auto h-6 w-11 items-center justify-center"
        >
          <Text className=" text-sm font-bold text-white ">Join</Text>
        </TouchableOpacity>
      </View>
      <View className="pt-2">
        <Text className=" font-bold text-lg"> {item.title} </Text>
        {item.image && <Image source={{ uri: item.image }} className=' w-full mt-3 h-60 rounded-lg ' resizeMode='cover' />}
      </View>
      <View>
        {item.description && <Text numberOfLines={4}> {item.description} </Text>}
      </View>

      <View className='flex-row items-center  mt-4'>
        <View className='bg-accent-100 rounded-3xl mr-4 flex-row items-center justify-center'>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-accent-100 rounded-full size-10 items-center justify-center"
        >
          <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} color="black" />
        </TouchableOpacity>
          <Text className='font-bold'>{item.upvotes}</Text>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-accent-100 rounded-full size-10 items-center justify-center"
        >
          <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} color="black" />
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-accent-100 rounded-3xl h-10 mr-4 w-16 flex-row items-center justify-center"
        >
           <MaterialCommunityIcons name="comment-outline" size={19} color="black" />
           <Text className='font-bold text-sm ml-1'>{item.nr_of_comments}</Text>
        </TouchableOpacity>
        <View className='flex-row ml-auto items-center justify-center'>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-accent-100 rounded-2xl size-10 mr-4 flex-row items-center justify-center"
        >
          <MaterialCommunityIcons name="trophy-outline" size={19} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => router.back()}
          className="bg-accent-100 rounded-2xl size-10 flex-row items-center justify-center"
        >
          <MaterialCommunityIcons name="share-outline" size={19} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}