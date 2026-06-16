export const validUsers = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        description: 'standard user',
    },
    {
        username: 'problem_user',
        password: 'secret_sauce',
        description: 'problem user',
    },
    {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        description: 'performance glitch user',
    },
];

export const invalidLoginUsers = [
    {
        username: 'invalid_user',
        password: 'wrong_password',
        expectedError: 'Username and password do not match',
    },
    {
        username: '',
        password: 'secret_sauce',
        expectedError: 'Username is required',
    },
    {
        username: 'standard_user',
        password: '',
        expectedError: 'Password is required',
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedError: 'Sorry, this user has been locked out',
    },
];