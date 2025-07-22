import { selectedGroupAtom } from '@/store/atoms'
import { AntDesign } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link, router } from 'expo-router'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [group, setGroup] = useAtom(selectedGroupAtom);


  const goBack = () => {
    setTitle('');
    setContent('');
    setGroup(null);
    router.back()
  }

  return (
    <SafeAreaView className='flex-1 bg-primary-600 px-4'>
      <View className='flex-row justify-between items-center'>
        <AntDesign name="close" size={24} onPress={() => goBack()} color="black" />
        <Pressable className="bg-primary-400 rounded-xl ml-auto h-6 w-11 items-center justify-center" onPress={() => console.log("Yeah we go !")}>
          <Text className=" text-sm font-bold text-primary-600 ">Post</Text>
        </Pressable>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} className='flex-1'>
        <ScrollView className='py-2' showsVerticalScrollIndicator={false}>
          <Link href="/groupSelector">
            {
              group ? (
                <View className='flex-row bg-accent-200 rounded-2xl h-10 mt-3 items-center self-start px-2'>
                  <Image source={{ uri: group.image }} className={`mr-1 w-8 h-8 rounded-full`} />
                  <Text className='text-base font-bold'> {group.name} </Text>
                  <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              ) :
                (

                  <View className='flex-row bg-accent-200 rounded-2xl h-10 mt-3 items-center self-start px-2'>
                    <Text className='text-base font-bold'>Select a community</Text>
                    <TouchableOpacity>
                      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </TouchableOpacity>
                  </View>

                )

            }

          </Link>
          <TextInput
            placeholder='Title'
            className='font-semibold text-lg py-4'
            value={title}
            onChangeText={setTitle}
            multiline
            scrollEnabled={false}
          />
          <TextInput
            placeholder='Body text (optionel)'
            value={content}
            onChangeText={setContent}
            multiline
            scrollEnabled={false}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Create