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

exec(
    'mongodump' +
    ` --username ${DB_USER}` +
    ` --password ${DB_PASSWORD}` +
    ` --uri mongodb+srv://${DB_HOST}` +
    ` --db ${DB_NAME}` +
    ` --gzip --archive="./dump_${DB_NAME}_${new Date().toISOString()}.gz"`,
    (error, stdOut) => {
        if (error) {
            throw new Error(error);
        } else {
            console.info(stdOut);
        }
    });
