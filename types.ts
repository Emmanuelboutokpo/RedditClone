export type Post = {
  id: string;
  title: string;
  created_at: string;
  upvotes: number;
  nr_of_comments: number;
  image: string | null;
  description: string | null;
  group: Group;
  user: User;
}

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  parent_id: string | null;
  comment: string;
  created_at: string;
  upvotes: number;
  user: User;
  replies: Comment[];
}

export type Group = {
  id: string;
  name: string;
  image: string;
}

export type User = {
  id: string;
  name: string;
  image: string | null;
}

 export const posts: Post[] =  [
  {
    "id": "post-1",
    "title": "Why React Native is the best?",
    "created_at": "2025-02-12T08:30:00Z",
    "upvotes": 120,
    "nr_of_comments": 15,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg",
    "group": {
      "id": "group-1",
      "name": "r/FrontendDevelopers",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/11.png"
    },
    "user": {
      "id": "user-1",
      "name": "u/User1",
      "image": null
    }
  },
  {
    "id": "post-2",
    "title": "Exploring Next.js Features in Depth",
    "created_at": "2025-02-11T14:22:00Z",
    "upvotes": 200,
    "nr_of_comments": 30,
    "image": null,
    "description": "Next.js brings powerful features for React developers, such as server-side rendering, static generation, and more. In this post, I’ll dive deep into each of these. Feel free to share your opinion, it's always interesting to keep the discussion going!",
    "group": {
      "id": "group-2",
      "name": "r/ReactEnthusiasts",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png"
    },
    "user": {
      "id": "user-",
      "name": "u/User2",
      "image": null
    }
  },
  {
    "id": "post-3",
    "title": "How to Build a Portfolio Website with HTML and CSS",
    "created_at": "2025-02-10T09:10:00Z",
    "upvotes": 85,
    "nr_of_comments": 10,
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg",
    "description": null,
    "group": {
      "id": "group-3",
      "name": "r/WebDevelopers",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png"
    },
    "user": {
      "id": "user-3",
      "name": "u/User3",
      "image": null
    }
  },
  {
    "id": "post-4",
    "title": "Top JavaScript Frameworks to Learn in 2025",
    "created_at": "2025-02-09T18:45:00Z",
    "upvotes": 50,
    "nr_of_comments": 5,
    "image": null,
    "description": "In 2025, JavaScript frameworks continue to evolve. Let’s explore the top frameworks that will shape the development world this year.",
    "group": {
      "id": "group-4",
      "name": "r/JSDevelopers",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png"
    },
    "user": {
      "id": "user-4",
      "name": "u/User4",
      "image": null
    }
  },
  {
    "id": "post-5",
    "title": "Understanding the Basics of Machine Learning",
    "created_at": "2025-02-08T15:00:00Z",
    "upvotes": 175,
    "nr_of_comments": 20,
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg",
    "description": null,
    "group": {
      "id": "group-5",
      "name": "r/AIInnovators",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png"
    },
    "user": {
      "id": "user-5",
      "name": "u/User5",
      "image": null
    }
  },
  {
    "id": "post-6",
    "title": "How to Get Started with TypeScript in 2025",
    "created_at": "2025-02-07T16:10:00Z",
    "upvotes": 95,
    "nr_of_comments": 12,
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    "description": null,
    "group": {
      "id": "group-6",
      "name": "r/TypeScriptCommunity",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png"
    },
    "user": {
      "id": "user-6",
      "name": "u/User6",
      "image": null
    }
  },
  {
    "id": "post-7",
    "title": "A Deep Dive into React Hooks",
    "created_at": "2025-02-06T11:00:00Z",
    "upvotes": 150,
    "nr_of_comments": 25,
    "image": null,
    "description": "React Hooks allow you to use state and other features without writing a class. In this post, I will walk you through various hooks in detail.",
    "group": {
      "id": "group-7",
      "name": "r/ReactJS",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg"
    },
    "user": {
      "id": "user-7",
      "name": "u/User7",
      "image": null
    }
  },
  {
    "id": "post-8",
    "title": "Exploring the World of Serverless Architecture",
    "created_at": "2025-02-05T17:30:00Z",
    "upvotes": 220,
    "nr_of_comments": 40,
    "image": null,
    "description": "Serverless architecture is revolutionizing cloud computing. Learn about the benefits, challenges, and how to get started.",
    "group": {
      "id": "group-8",
      "name": "r/ServerlessTech",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg"
    },
    "user": {
      "id": "user-8",
      "name": "u/User8",
      "image": null
    }
  },
  {
    "id": "post-9",
    "title": "Best Practices for Web Accessibility",
    "created_at": "2025-02-04T14:40:00Z",
    "upvotes": 90,
    "nr_of_comments": 10,
    "image": null,
    "description": "Web accessibility is crucial for making websites usable for everyone. Let’s explore the best practices for creating accessible websites.",
    "group": {
      "id": "group-9",
      "name": "r/WebAccessibility",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg"
    },
    "user": {
      "id": "user-9",
      "name": "u/User9",
      "image": null
    }
  },
  {
    "id": "post-10",
    "title": "The Future of Progressive Web Apps",
    "created_at": "2025-02-03T19:20:00Z",
    "upvotes": 170,
    "nr_of_comments": 22,
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/5.jpeg",
    "description": null,
    "group": {
      "id": "group-10",
      "name": "r/PWADevs",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg"
    },
    "user": {
      "id": "user-10",
      "name": "u/User10",
      "image": null
    }
  }
]

export const comments : Comment[] = [
  {
    "id": "comment-1",
    "post_id": "post-1",
    "user_id": "user-xyz",
    "parent_id": null,
    "comment": "Very nice explanation. Detailed, straight to the point and with valid comparisons!",
    "created_at": "2025-02-19T12:00:00Z",
    "upvotes": 12,
    "user": {
      "id": "user-1",
      "name": "u/User1",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/11.png"
    },
    "replies": [
      {
        "id": "comment-2",
        "post_id": "post-1",
        "user_id": "user-abc",
        "parent_id": "comment-1",
        "comment": "Totally agree!",
        "created_at": "2025-02-19T12:05:00Z",
        "upvotes": 18,
        "user": {
          "id": "user-2",
          "name": "u/User2",
          "image": null
        },
        "replies": []
      }
    ]
  },
  {
    "id": "comment-3",
    "post_id": "post-1",
    "user_id": "user-def",
    "parent_id": null,
    "comment": "Nicely written, keep up the good work!",
    "created_at": "2025-02-19T12:02:00Z",
    "upvotes": 4,
    "user": {
      "id": "user-9",
      "name": "u/User9",
      "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png"
    },
    "replies": [
      {
        "id": "comment-4",
        "post_id": "post-1",
        "user_id": "user-ghi",
        "parent_id": "comment-3",
        "comment": "Yep, wanted to say exactly the same",
        "created_at": "2025-02-20T10:06:00Z",
        "upvotes": 2,
        "user": {
          "id": "user-7",
          "name": "u/User7",
          "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png"
        },
        "replies": [
          {
            "id": "comment-5",
            "post_id": "post-1",
            "user_id": "user-jkl",
            "parent_id": "comment-4",
            "comment": "Totally!",
            "created_at": "2025-02-20T12:08:00Z",
            "upvotes": 1,
            "user": {
              "id": "user-9",
              "name": "u/User9",
              "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png"
            },
            "replies": []
          }
        ]
      }
    ]
  }
]

export const groups : Group[] =[
  {
    "id": "group-1",
    "name": "r/FrontendDevelopers",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/11.png"
  },
  {
    "id": "group-2",
    "name": "r/ReactEnthusiasts",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/10.png"
  },
  {
    "id": "group-3",
    "name": "r/WebDevelopers",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.png"
  },
  {
    "id": "group-4",
    "name": "r/JSDevelopers",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png"
  },
  {
    "id": "group-5",
    "name": "r/AIInnovators",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png"
  },
  {
    "id": "group-6",
    "name": "r/TypeScriptCommunity",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png"
  },
  {
    "id": "group-7",
    "name": "r/ReactJS",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg"
  },
  {
    "id": "group-8",
    "name": "r/ServerlessTech",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg"
  },
  {
    "id": "group-9",
    "name": "r/WebAccessibility",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg"
  },
  {
    "id": "group-10",
    "name": "r/PWADevs",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg"
  }
]

