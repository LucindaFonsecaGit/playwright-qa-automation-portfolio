export type PostPayload = {
    title: string;
    body: string;
    userId: number;
};

export const postTestData = {
    existingPostId: 1,
    existingUserId: 1,
    maxResponseTimeMs: 3000,

    newPost: {
        title: 'QA Automation Portfolio Post',
        body: 'Post created during Playwright API automation testing.',
        userId: 1,
    },

    updatedPost: {
        title: 'Updated QA Portfolio Post',
        body: 'Updated post through Playwright API test.',
        userId: 1,
    },
};