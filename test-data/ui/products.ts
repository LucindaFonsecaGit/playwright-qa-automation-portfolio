import { SortOption } from '../../enums/SortOption';

export const sortableProductOptions = [
    {
        option: SortOption.A_TO_Z,
        expectedFirstProduct: 'Sauce Labs Backpack',
        description: 'A to Z',
    },
    {
        option: SortOption.Z_TO_A,
        expectedFirstProduct: 'Test.allTheThings() T-Shirt (Red)',
        description: 'Z to A',
    },
    {
        option: SortOption.PRICE_LOW_TO_HIGH,
        expectedFirstProduct: 'Sauce Labs Onesie',
        description: 'low to high price',
    },
    {
        option: SortOption.PRICE_HIGH_TO_LOW,
        expectedFirstProduct: 'Sauce Labs Fleece Jacket',
        description: 'high to low price',
    },
];

export const cartProducts = [
    {
        testId: 'sauce-labs-backpack',
        name: 'Sauce Labs Backpack',
    },
    {
        testId: 'sauce-labs-bike-light',
        name: 'Sauce Labs Bike Light',
    },
];