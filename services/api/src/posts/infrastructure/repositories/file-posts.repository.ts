import { IPostsRepository } from "@app/posts/domain";
import { readFile } from "fs";


export class FilePostsRepository implements IPostsRepository {
    findAllPosts(): Promise<object[]> {
        return new Promise((resolve) => {
            readFile("/data/linux.json", null, (err, d) => resolve(JSON.parse(d.toString())))
        })
    }
}