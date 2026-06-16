import { APIRequestContext, APIResponse } from '@playwright/test';
import { ProductPayload } from '../../test-data/api/products';

export class FakeStoreApiClient {
    constructor(private readonly request: APIRequestContext) {}

    async getAllProducts(): Promise<APIResponse> {
        return this.request.get('/products');
    }

    async getProductById(productId: number): Promise<APIResponse> {
        return this.request.get(`/products/${productId}`);
    }

    async getAllCategories(): Promise<APIResponse> {
        return this.request.get('/products/categories');
    }

    async getProductsByCategory(category: string): Promise<APIResponse> {
        return this.request.get(`/products/category/${category}`);
    }

    async createProduct(product: ProductPayload): Promise<APIResponse> {
        return this.request.post('/products', {
            data: product,
        });
    }

    async updateProduct(productId: number, product: ProductPayload): Promise<APIResponse> {
        return this.request.put(`/products/${productId}`, {
            data: product,
        });
    }

    async deleteProduct(productId: number): Promise<APIResponse> {
        return this.request.delete(`/products/${productId}`);
    }

    async getInvalidEndpoint(): Promise<APIResponse> {
        return this.request.get('/invalid-endpoint');
    }
}