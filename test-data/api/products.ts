export type ProductPayload = {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
};

export const productTestData = {
    existingProductId: 1,
    existingCategory: 'electronics',
    maxResponseTimeMs: 3000,

    newProduct: {
        title: 'QA Automation Portfolio Product',
        price: 29.99,
        description: 'Product created during Playwright API automation testing.',
        image: 'https://example.com/product.png',
        category: 'electronics',
    },

    updatedProduct: {
        title: 'Updated QA Portfolio Product',
        price: 39.99,
        description: 'Updated product through Playwright API test.',
        image: 'https://example.com/updated-product.png',
        category: 'electronics',
    },
};