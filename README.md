# Serverless Express Example


### Serve Serverless Locally
```
serverless offline start
```


### Invoke function locally

[Docs](https://serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/)

```
serverless invoke local --function api
```

### Deployment

```
serverless deploy --stage dev --aws-profile your-aws-profile
```


## Articles & Resources

[Inspiration](https://medium.com/trisfera/deploying-an-express-application-to-aws-lambda-the-easy-way-fa5fbef190ba)

[Another Code Example](https://github.com/alexishevia/blogExamples/tree/serverless_express)

[Serverless Offline Plugin](https://github.com/dherault/serverless-offline)

[Express, Node, and Typescript](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/)