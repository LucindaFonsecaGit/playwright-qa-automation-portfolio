import { expect, APIResponse } from '@playwright/test';

export async function expectJsonResponse(
    response: APIResponse,
    expectedStatus: number
): Promise<void> {
    const status = response.status();
    const contentType = response.headers()['content-type'] ?? '';
    const body = await response.text();

    expect(
        status,
        `Expected status ${expectedStatus}, but received ${status}. Response body: ${body}`
    ).toBe(expectedStatus);

    expect(
        contentType,
        `Expected JSON response but received content-type: ${contentType}. Response body: ${body}`
    ).toContain('application/json');
}

export function expectResponseTimeBelow(durationMs: number, maxDurationMs: number): void {
    expect(
        durationMs,
        `Expected response time ${durationMs}ms to be below ${maxDurationMs}ms`
    ).toBeLessThan(maxDurationMs);
}

export function expectPostContract(post: unknown): void {
    expect(post).toEqual(
        expect.objectContaining({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
        })
    );
}

export function expectPostListContract(posts: unknown[]): void {
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);

    for (const post of posts) {
        expectPostContract(post);
    }
}

export function expectCommentContract(comment: unknown): void {
    expect(comment).toEqual(
        expect.objectContaining({
            postId: expect.any(Number),
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            body: expect.any(String),
        })
    );
}