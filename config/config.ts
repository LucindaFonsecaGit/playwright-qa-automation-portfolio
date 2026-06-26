import { Environment } from '../enums/Environment';
import { ENVIRONMENTS } from './environments';

const currentEnvironment =
    (process.env.TEST_ENV as Environment) ?? Environment.QA;

export const Config = ENVIRONMENTS[currentEnvironment];