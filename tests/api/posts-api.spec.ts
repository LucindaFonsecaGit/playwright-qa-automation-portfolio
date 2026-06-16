import { test, expect } from '@playwright/test';
import { JsonPlaceholderApiClient } from '../../utils/api/jsonPlaceholderApiClient';
import {
    expectCommentContract,
    expectJsonResponse,
    expectPostContract,
    expectPostListContract,
    expectResponseTimeBelow,
} from '../../utils/api/apiAssertions';
import { postTestData } from '../../test-data/api/posts';

test.describe('Posts API tests', () => {
    let apiClient: JsonPlaceholderApiClient;

    test.beforeEach(async ({ request }) => {
        apiClient = new JsonPlaceholderApiClient(request);
    });

    test('@api @smoke should get all posts successfully', async () => {
        let responseTimeMs = 0;

        await test.step('Send GET request for all posts', async () => {
            const startTime = Date.now();
            const response = await apiClient.getAllPosts();
            responseTimeMs = Date.now() - startTime;

            await expectJsonResponse(response, 200);
            expectResponseTimeBelow(responseTimeMs, postTestData.maxResponseTimeMs);

            const posts = await response.json();
            expectPostListContract(posts);
        });
    });

    test('@api @smoke should get a single post successfully', async () => {
        const response = await apiClient.getPostById(postTestData.existingPostId);

        await expectJsonResponse(response, 200);

        const post = await response.json();

        expectPostContract(post);
        expect(post.id).toBe(postTestData.existingPostId);
        expect(post.userId).toBe(postTestData.existingUserId);
    });

    test('@api @regression should get comments for a post successfully', async () => {
        const response = await apiClient.getCommentsByPostId(postTestData.existingPostId);

        await expectJsonResponse(response, 200);

        const comments = await response.json();

        expect(Array.isArray(comments)).toBeTruthy();
        expect(comments.length).toBeGreaterThan(0);

        for (const comment of comments) {
            expectCommentContract(comment);
            expect(comment.postId).toBe(postTestData.existingPostId);
        }
    });

    test('@api @regression should create a post successfully', async () => {
        const response = await apiClient.createPost(postTestData.newPost);

        await expectJsonResponse(response, 201);

        const post = await response.json();

        expect(post).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: postTestData.newPost.title,
                body: postTestData.newPost.body,
                userId: postTestData.newPost.userId,
            })
        );
    });

    test('@api @regression should update a post successfully', async () => {
        const response = await apiClient.updatePost(
            postTestData.existingPostId,
            postTestData.updatedPost
        );

        await expectJsonResponse(response, 200);

        const post = await response.json();

        expect(post).toEqual(
            expect.objectContaining({
                id: postTestData.existingPostId,
                title: postTestData.updatedPost.title,
                body: postTestData.updatedPost.body,
                userId: postTestData.updatedPost.userId,
            })
        );
    });

    test('@api @regression should delete a post successfully', async () => {
        const response = await apiClient.deletePost(postTestData.existingPostId);

        expect(response.status()).toBe(200);
    });

    test('@api @negative should return 404 for invalid endpoint', async () => {
        const response = await apiClient.getInvalidEndpoint();

        expect(response.status()).toBe(404);
    });
});