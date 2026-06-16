import { APIRequestContext, APIResponse } from '@playwright/test';
import { PostPayload } from '../../test-data/api/posts';

export class JsonPlaceholderApiClient {
    constructor(private readonly request: APIRequestContext) {}

    async getAllPosts(): Promise<APIResponse> {
        return this.request.get('/posts');
    }

    async getPostById(postId: number): Promise<APIResponse> {
        return this.request.get(`/posts/${postId}`);
    }

    async getCommentsByPostId(postId: number): Promise<APIResponse> {
        return this.request.get(`/posts/${postId}/comments`);
    }

    async createPost(post: PostPayload): Promise<APIResponse> {
        return this.request.post('/posts', {
            data: post,
        });
    }

    async updatePost(postId: number, post: PostPayload): Promise<APIResponse> {
        return this.request.put(`/posts/${postId}`, {
            data: post,
        });
    }

    async deletePost(postId: number): Promise<APIResponse> {
        return this.request.delete(`/posts/${postId}`);
    }

    async getInvalidEndpoint(): Promise<APIResponse> {
        return this.request.get('/invalid-endpoint');
    }
}