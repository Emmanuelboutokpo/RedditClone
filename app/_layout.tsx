import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
   const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY; // else it's optinal 
  if (!publishableKey) {
    throw new Error('Missing publishable Key ! Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env');
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{headerShown : false}} />
    </ClerkProvider>
  )
}
