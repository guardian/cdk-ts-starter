// This is an example file to test cdk-ts-starter locally.

import * as core from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import * as fs from 'fs';

export class HelloCdkStack extends core.Stack {
    constructor(scope: core.App, id: string, props?: core.StackProps) {
        super(scope, id, props);

        new s3.Bucket(this, 'MyFirstBucket', {
            versioned: true,
        });
    }
}

const app = new cdk.App();
// tslint:disable-next-line: no-unused-expression
new HelloCdkStack(app, 'Example');
const tpl = app.synth().getStackByName('Example').template;

fs.writeFileSync(`${process.cwd()}/cfn.yaml`, JSON.stringify(tpl, undefined, 2));
