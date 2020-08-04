#!/usr/bin/env node
const { exec } = require('child_process');

const cmd = `npx ts-node ${process.cwd()}/cdk.ts`;

exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    if (stdout) {
        console.log(`stderr: ${stderr}`);
        return;
    }
});
