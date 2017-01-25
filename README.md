# JSON Resume

One click (sort of) deployment of your resume to AWS API Gateway and Lambda.
Current endpoint: https://l3q1y6ydwl.execute-api.us-west-2.amazonaws.com/prod/resume

## Installation

Clone this repo, and install the dependencies globally on your system (requires Node.js https://nodejs.org/en/ and Git https://git-scm.com)

```sh
$ git clone https://github.com/nford/json-resume.git
$ npm install -g serverless aws-sdk
```

Create your AWS account if you have not already, and go to IAM (Identity Access Management)
  1. Create a user with programmatic Access
  1. On the permissions step click "Attach existing policies directly"
  1. Find "AdministratorAccess" and attach this policy to your user
  1. Review, and create user
  1. on the "Complete" step, download your user's access keys in .csv format

Next configure your AWS credentials

```sh
$ aws configure
AWS Access Key ID [None]: your-access-key
AWS Secret Access Key [None]: your-secret-access-key
Default region name [None]: us-west-2 (must match region in serverless.yml)
Default output format [None]: ENTER
```

Deploy it

```sh
$ cd json-resume/
$ serverless deploy
```
If you have created your AWS account and followed the steps above, the Serverless framework will now provision the infrastructure to display your json resume on AWS API Gateway. When the deployment is complete you will be provided with a URL to view your resume.

## *Please Note*

The API URL will change every time you deploy the code, but you can add configuration for a static domain name if you wish.
