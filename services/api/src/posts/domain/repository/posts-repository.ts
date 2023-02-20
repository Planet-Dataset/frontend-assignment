export interface IPostsRepository {
    findAllPosts(): Promise<object[]>;
}