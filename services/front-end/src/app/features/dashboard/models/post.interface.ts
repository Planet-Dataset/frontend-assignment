export interface DialogPost {
    post: Post;
    id: string;
}

export interface Post {
    author: string;
    author_fullname?: string;
    category?: string;
    language: string;
    originalPostId: string;
    title: string;
}