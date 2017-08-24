# Kalo API documentation

The documentation is built by github pages and available here:
https://kalohq.github.io/publicapi-docs/

## Contributing

Circleci will sync the docs from `/docs` to S3.

Use the `develop` branch to get your changes synced to the staging AWS bucket, and `master` to sync to the production AWS bucket.
Every other branch will simply be ignored by Circleci.
