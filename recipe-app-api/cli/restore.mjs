/* eslint-disable no-console */
import path from 'path';
import { exec } from 'child_process';

import dotenv from 'dotenv';

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = dotenv.config({
    path: path.resolve(`./env/.${process.env.APP_ENV}.env`)
}).parsed;

const cliArguments = new Map(process.argv
    .filter((item) => item.startsWith('--'))
    .map((item) => item.slice(2))
    .map((item) => item.split('=')));

const requiredArguments = ['dumpDBName', 'dumpFile'];

const passedArguments = requiredArguments.filter((item) => cliArguments.get(item));

const missedArguments = requiredArguments.filter((item) => !passedArguments.includes(item));

missedArguments.forEach((item) => {
    throw new Error(`Provide --${item} argument`);
});

await new Promise((resolve, reject) => {
    exec(
        `APP_ENV=${process.env.APP_ENV} node ./cli/dump.mjs`,
        (error, stdOut) => {
            if (error) {
                reject(error);
            } else {
                console.info(stdOut);
                resolve(stdOut);
            }
        });
});

exec(
    'mongorestore' +
    ` --username ${DB_USER}` +
    ` --password ${DB_PASSWORD}` +
    ` --uri mongodb+srv://${DB_HOST}` +
    ` --nsFrom "${cliArguments.get('dumpDBName')}.*" --nsTo "${DB_NAME}.*"` +
    ' --drop' +
    ` --gzip --archive=${path.resolve(cliArguments.get('dumpFile'))}`,
    (error, stdOut) => {
        if (error) {
            throw new Error(error);
        } else {
            console.info(stdOut);
        }
    });
