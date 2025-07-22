import { Group } from '@/types';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';


type GroupListItemProps = {
  item: Group;
  onPress? : ()=>void;
  isDetailedPost?: boolean;
}

const GroupItem = ({item, onPress, isDetailedPost} : GroupListItemProps) => {
  return (
     <Pressable className={`items-center flex-row`} onPress={onPress} >
           <Image source={{ uri: item.image }} className={`mr-1 w-8 h-8 rounded-full`} />
           <View className='flex-col justify-center item-center'>
               <Text className='text-base font-bold'>{item.name}</Text>
               <Text > {item?.name} </Text>
           </View>
         </Pressable>
  )
}

export default GroupItem