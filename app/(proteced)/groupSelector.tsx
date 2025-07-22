import GroupItem from '@/components/GroupItem'
import NoResults from '@/components/NoResults'
import { selectedGroupAtom } from '@/store/atoms'
import { Group, groups } from '@/types'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const GroupSelector = () => {
    const [, setGroup] = useAtom(selectedGroupAtom);
    const [title, setTitle] = useState<string>('');

    const goBack = () => {
        setTitle('');
        router.back()
    }

    const onGroupSelected = (group: Group) => {
      setGroup(group);
      router.back()
  }

    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(title.toLowerCase())
    );

    return (
        <SafeAreaView className='flex-1 mt-3 bg-primary-600 px-4'>
            <View className='flex-row items-center'>
                <AntDesign name="close" size={24} onPress={() => goBack()} color="black" />
                <Text className=" text-lg font-bold text-center flex-1">Post to</Text>
            </View>
            <View className='flex-row bg-accent-200 rounded-lg h-14 mt-3 items-center px-2'>
                <AntDesign name="search1" size={20} color="gray" />
                <TextInput
                    placeholder='Search for a community'
                    className='font-semibold text-lg py-4 flex-1'
                    placeholderTextColor='gray'
                    value={title}
                    onChangeText={setTitle}
                    multiline
                    scrollEnabled={false}
                />
                {title && <AntDesign name="closecircle" size={20} color="gray"  onPress={()=>setTitle('')}/>}
            </View>

            <View className=''>
                <FlatList
                    data={filteredGroups}
                    renderItem={({ item }) => (<GroupItem item={item} onPress={() => { onGroupSelected(item) }} />)}
                    keyExtractor={(item) => `group-${item.id}`}
                    ListEmptyComponent={<NoResults />}
                    contentContainerClassName="flex gap-5 mt-5 pb-10"
                />

            </View>
        </SafeAreaView>
    )
}

export default GroupSelector