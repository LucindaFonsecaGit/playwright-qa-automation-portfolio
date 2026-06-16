import { test, expect } from '@playwright/test';
import { FakeStoreApiClient } from '../../utils/api/fakeStoreApiClient';
import {
    expectJsonResponse,
    expectProductContract,
    expectProductListContract,
    expectResponseTimeBelow,
} from '../../utils/api/apiAssertions';
import { productTestData } from '../../test-data/api/products';

test.describe('Products API tests', () => {
    let apiClient: FakeStoreApiClient;

    test.beforeEach(async ({ request }) => {
        apiClient = new FakeStoreApiClient(request);
    });

    test('@api @smoke should get all products successfully', async () => {
        let responseTimeMs = 0;

        await test.step('Send GET request for all products', async () => {
            const startTime = Date.now();
            const response = await apiClient.getAllProducts();
            responseTimeMs = Date.now() - startTime;

            await expectJsonResponse(response, 200);
            expectResponseTimeBelow(responseTimeMs, productTestData.maxResponseTimeMs);

            const products = await response.json();
            expectProductListContract(products);
        });
    });

    test('@api @smoke should get a single product successfully', async () => {
        const response = await apiClient.getProductById(productTestData.existingProductId);

        await expectJsonResponse(response, 200);

        const product = await response.json();

        expectProductContract(product);
        expect(product.id).toBe(productTestData.existingProductId);
        expect(product.price).toBeGreaterThan(0);
    });

    test('@api @regression should get all product categories successfully', async () => {
        const response = await apiClient.getAllCategories();

        await expectJsonResponse(response, 200);

        const categories = await response.json();

        expect(Array.isArray(categories)).toBeTruthy();
        expect(categories.length).toBeGreaterThan(0);
        expect(categories).toContain(productTestData.existingCategory);
    });

    test('@api @regression should get products by category successfully', async () => {
        const response = await apiClient.getProductsByCategory(productTestData.existingCategory);

        await expectJsonResponse(response, 200);

        const products = await response.json();

        expectProductListContract(products);

        for (const product of products) {
            expect(product.category).toBe(productTestData.existingCategory);
        }
    });

    test('@api @regression should create a product successfully', async () => {
        const response = await apiClient.createProduct(productTestData.newProduct);

        await expectJsonResponse(response, 201);

        const product = await response.json();

        expect(product).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                title: productTestData.newProduct.title,
                price: productTestData.newProduct.price,
                category: productTestData.newProduct.category,
            })
        );
    });

    test('@api @regression should update a product successfully', async () => {
        const response = await apiClient.updateProduct(
            productTestData.existingProductId,
            productTestData.updatedProduct
        );

        await expectJsonResponse(response, 200);

        const product = await response.json();

        expect(product).toEqual(
            expect.objectContaining({
                id: productTestData.existingProductId,
                title: productTestData.updatedProduct.title,
                price: productTestData.updatedProduct.price,
                category: productTestData.updatedProduct.category,
            })
        );
    });

    test('@api @regression should delete a product successfully', async () => {
        const response = await apiClient.deleteProduct(productTestData.existingProductId);

        await expectJsonResponse(response, 200);

        const deletedProduct = await response.json();

        expectProductContract(deletedProduct);
        expect(deletedProduct.id).toBe(productTestData.existingProductId);
    });

    test('@api @negative should return 404 for invalid endpoint', async () => {
        const response = await apiClient.getInvalidEndpoint();

        expect(response.status()).toBe(404);
    });
});