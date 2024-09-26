import {readFileSync} from 'fs';

try {
    readFileSync('non-existent-file.txt');
} catch (e) {
    console.log('gracefully handled error', e);
}

console.log('done');