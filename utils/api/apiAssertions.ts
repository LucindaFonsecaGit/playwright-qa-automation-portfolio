import { expect, APIResponse } from '@playwright/test';

export async function expectJsonResponse(response: APIResponse, expectedStatus: number): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
    expect(response.headers()['content-type']).toContain('application/json');
}

export function expectResponseTimeBelow(durationMs: number, maxDurationMs: number): void {
    expect(durationMs, `Expected response time ${durationMs}ms to be below ${maxDurationMs}ms`).toBeLessThan(maxDurationMs);
}

export function expectProductContract(product: unknown): void {
    expect(product).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            price: expect.any(Number),
            description: expect.any(String),
            category: expect.any(String),
            image: expect.any(String),
        })
    );
}

export function expectProductListContract(products: unknown[]): void {
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);

    for (const product of products) {
        expectProductContract(product);
    }
}