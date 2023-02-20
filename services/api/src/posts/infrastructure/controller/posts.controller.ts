import { Request, Response } from "express";
import { DomainError } from "@app/utils";
import { GetPosts } from "@app/posts/application";

export class PostsController {
  private getPosts = new GetPosts({});

  async findAllPosts(req: Request, res: Response) {
    try {
      const posts = await this.getPosts.execute();
      res.status(200).json({ data: posts });
    } catch (err) {
      let status = 500;
      if (err instanceof DomainError) {
        status = 400;
      }
      res.status(status).json({ data: err.message });
    }
  }
}
