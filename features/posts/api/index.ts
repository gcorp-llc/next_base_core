import { api } from "@/lib/api-client";

export interface Post {
  id: string;
  user_id: string;
  content: string;
  image_url?: string;
  created_at: Date;
}

export const postsApi = {
  getPosts: (userId?: string) => {
    const query = userId ? `?userId=${userId}` : "";
    return api.get<Post[]>(`/api/posts${query}`);
  },
  createPost: (data: { content: string; image_url?: string }) =>
    api.post<{ id: string; success: boolean }>("/api/posts", data),
};
