import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import * as React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  const onSignUpPress = async () => {
    if (!isLoaded) return
    try {
      await signUp.create({
        emailAddress,
        password,
      })
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
      setPendingVerification(true)
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        router.replace('/')
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  if (pendingVerification) {
    return (
      <View className='flex-1 justify-center px-8'>
        <Text className='font-bold text-2xl mb-4'>Verify your email</Text>
        <TextInput
          value={code}
          className='h-13 border-accent-400 border-2 rounded-xl w-full'
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity className='bg-black mt-8 justify-center items-center h-14 w-full rounded-full ' onPress={onVerifyPress}>
          <Text  className='text-primary-600 font-medium text-xl'>Verify</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (

    <View className='flex-1 justify-center px-8'>
      <View className='justify-center items-center'>
        <Text className='font-bold text-3xl'>Sign up</Text>
        <Text className='text-lg'>Create an account, It's free </Text>
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
      <TouchableOpacity className='bg-black mt-8 justify-center items-center h-14 w-full rounded-full ' onPress={onSignUpPress}>
        <Text className='text-primary-600 font-medium text-xl'> Sign up</Text>
      </TouchableOpacity>
      <View className='mt-6'>
        <Link href="/signIn">
          <Text className='text-lg font-semibold '>Already have an account ?<Text className=' text-danger '> Sign in</Text></Text>
        </Link>
      </View>
    </View>


  )
}