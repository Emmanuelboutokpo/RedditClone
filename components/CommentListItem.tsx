import { Comment } from '@/types';
import { Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { formatDistanceToNowStrict } from 'date-fns';
import React, { memo, useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

type CommentListItemProps = {
  item: Comment;
  depth: number;
  onPress : (id: string) => void;
  isDetailedPost?: boolean;
}

const CommentListItem = ({item, depth, onPress}: CommentListItemProps) => {
    const [showReplies, setShowReplies] = useState(false);
   return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 10,
        borderLeftColor: "#E5E7EB",
      }}
    >
      {/* User Info */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
        <Image
          source={{
            uri: item.user.image || "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg",
          }}
          style={{ width: 28, height: 28, borderRadius: 15, marginRight: 4 }}
        />
        <Text style={{ fontWeight: "600", color: "#737373", fontSize: 13 }}>{item.user.name}</Text>
        <Text style={{ color: "#737373", fontSize: 13 }}>&#x2022;</Text>
        <Text style={{ color: "#737373", fontSize: 13 }}>
          {formatDistanceToNowStrict(new Date(item.created_at))}
        </Text>
      </View>

      {/* Comment Content */}
      <Text>{item.comment}</Text>

      {/* Comment Actions */}
      <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 14 }}>
        <Entypo name="dots-three-horizontal" size={15} color="#737373" />
        <Octicons name="reply" size={16} color="#737373" onPress={() => onPress(item?.id)} />
        <MaterialCommunityIcons name="trophy-outline" size={16} color="#737373" />
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <MaterialCommunityIcons name="arrow-up-bold-outline" size={18} color="#737373" />
          <Text style={{ fontWeight: "500", color: "#737373" }}>{item.upvotes}</Text>
          <MaterialCommunityIcons name="arrow-down-bold-outline" size={18} color="#737373" />
        </View>
      </View>

      {/* Show Replies Button */}
      {(item.replies.length > 0 && depth < 5  &&  !showReplies) && (
        <Pressable  onPress={() => setShowReplies(true)} style={{ backgroundColor: '#EDEDED', borderRadius: 3, paddingVertical: 3, alignItems: 'center'}}>
          <Text style={{ fontSize: 12, letterSpacing: 0.5, fontWeight: '500', color: '#545454'}}>Show Replies</Text>
        </Pressable>
      )}

    {/* Nested Replies */}
      {showReplies && (
        <FlatList
          data={item.replies}
          keyExtractor={(reply) => reply.id}
          renderItem={({ item }) => <CommentListItem item={item} depth={depth + 1} onPress={onPress}/>}
        />
      )}
    </View>

  )
}

export default memo(CommentListItem)