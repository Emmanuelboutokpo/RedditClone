import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const NoResults = () => {
  const handleReturn = () => router.push(`/`)
  return (
    <View className='flex items-center justify-center my-5'>
      <Text className='text-2xl font-rubik-bold text-black-300 mt-5'>Aucune données!</Text>
      <Text className='text-base text-black-100 my-3'>
        Il y a aucune donnée disponibles
      </Text>
      <Pressable
        className=" bg-primary-400  py-5 px-5 rounded-lg "
        onPress={ handleReturn}>
        <Text className="font-rubik-medium text-white">Rechercher une chambre</Text>
      </Pressable>
    </View>
  )
}

export default NoResults