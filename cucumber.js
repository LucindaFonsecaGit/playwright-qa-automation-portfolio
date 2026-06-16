module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: [
            'tests/bdd/support/**/*.ts',
            'tests/bdd/steps/**/*.ts',
        ],
        paths: ['tests/bdd/features/**/*.feature'],
        format: ['progress', 'html:cucumber-report.html'],
        publishQuiet: true,
    },
};