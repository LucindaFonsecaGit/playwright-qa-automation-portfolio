import { Environment } from '../enums/Environment';

export const ENVIRONMENTS = {
    [Environment.DEV]: {
        baseUrl: 'https://www.saucedemo.com',
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },

    [Environment.QA]: {
        baseUrl: 'https://www.saucedemo.com',
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },

    [Environment.STAGING]: {
        baseUrl: 'https://www.saucedemo.com',
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },

    [Environment.PRODUCTION]: {
        baseUrl: 'https://www.saucedemo.com',
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    },
} as const;