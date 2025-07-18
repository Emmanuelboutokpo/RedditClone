import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()

    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onSignInPress = async () => {
        if (!isLoaded) return
        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            })
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/')
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }

    return (
        <View className='flex-1 justify-center px-8'>
            <View className='justify-center items-center'>
                <Text className='font-bold text-3xl'>Sign in</Text>
                <Text className='text-lg'>Login to your account</Text>
            </View>
            <View className='mt-4'>
                <Text className='text-lg font-semibold'>Email adress</Text>
                <TextInput
                    className='h-12 border-accent-400 border-2 rounded-xl w-full'
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Enter email"
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                />
            </View>
              <View className='mt-4'>
                <Text className='text-lg font-semibold'>Password</Text>
                <TextInput
                  className='h-12 border-accent-400 border-2 rounded-xl w-full'
                value={password}
                placeholder="Enter password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
                
            </View>
            <TouchableOpacity className='bg-black mt-8 justify-center items-center h-14 w-full rounded-full ' onPress={onSignInPress}>
                <Text className='text-primary-600 font-medium text-xl'>Login</Text>
            </TouchableOpacity>
            <View className='mt-6'>
                <Link href="/signUp">
                    <Text className='text-lg font-semibold '>Don't have an account ? <Text className=' text-danger '> Sign up</Text></Text>
                </Link>
            </View>
        </View>
    )
}