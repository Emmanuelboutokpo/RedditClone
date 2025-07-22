import { useAuth } from '@clerk/clerk-expo';
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
export default function ProtectedLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/signIn');
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

 return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown : false}} />
      <Stack.Screen name='groupSelector' options={{headerShown : false}} />
      <Stack.Screen 
         name='detail/[id]' 
         options={{ 
          headerTitle: '',
          headerStyle: {backgroundColor : "#FF5700"},
          animation: 'slide_from_bottom',
          headerBackButtonDisplayMode : 'generic',
          headerLeft : () => <AntDesign name="close" size={24} onPress={() => router.back()} color="white" />,
          headerRight: () => 
              <View className='flex-row gap-4 '>
                <AntDesign name="search1" size={24} color="white" />
                <MaterialCommunityIcons name="sort" size={19} color="white" />
                <Entypo name='dots-three-horizontal' size={24} color="white" />
             </View>
        

          }} />
    </Stack>
  )
}
