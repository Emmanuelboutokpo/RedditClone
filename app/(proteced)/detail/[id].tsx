import CommentListItem from '@/components/CommentListItem';
import PostListItem from '@/components/PostListItem';
import { comments, posts } from '@/types';
import { useLocalSearchParams } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PostDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const insets = useSafeAreaInsets();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const inputRef = useRef<TextInput>(null);
  
  const detailPost = posts.find(item => item.id === id)
  const postComments = comments.filter(
    (comment) => comment.post_id === detailPost?.id
  );

   const handleFocus = useCallback((commentId: string) => {
    console.log(commentId)
    inputRef.current?.focus();
  }, []);

  if (!detailPost) {
    return <Text>Post not found !</Text>
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'padding'} className='flex-1 mt-4' keyboardVerticalOffset={insets.top + 10}>
      <FlatList
        ListHeaderComponent={
          <PostListItem isDetailedPost={true} item={detailPost} />
        }
        data={postComments}
        renderItem={({ item }) => <CommentListItem item={item}  depth={0} onPress={handleFocus}/>}
      />
      <View style={{
        paddingBottom: insets.bottom, borderBottomWidth: 1, borderBottomColor: 'lightgrey', padding: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,

        elevation: 4,
      }}>
        <TextInput
          ref={inputRef}
          placeholder="Join the conversation"
          value={comment}
          onChangeText={(text) => setComment(text)}
          style={{ backgroundColor: '#E4E4E4', padding: 5, borderRadius: 5 }}
          multiline
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused &&
          <Pressable disabled={!comment} onPress={() => console.error('Pressed')} style={{ backgroundColor: !comment ? "lightgrey" : '#0d469b', borderRadius: 15, marginLeft: 'auto', marginTop: 15 }}>
            <Text style={{ color: 'white', paddingVertical: 5, paddingHorizontal: 10, fontWeight: 'bold', fontSize: 13 }}>Reply</Text>
          </Pressable>
        }
      </View>
    </KeyboardAvoidingView>
  )
}