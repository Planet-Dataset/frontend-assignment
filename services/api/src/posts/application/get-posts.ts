import { IPostsRepository } from "@app/posts/domain";
import { FilePostsRepository } from "@app/posts/infrastructure";


export class GetPosts {
  private postsRepository: IPostsRepository;
  constructor({ postsRepository = new FilePostsRepository() }) {
    this.postsRepository = postsRepository;
  }

  async execute() {
    return await this.postsRepository.findAllPosts();
  }
}
