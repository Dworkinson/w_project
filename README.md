# Introduction
Automation tests for API using axios + mocha + chai

# Getting Started
1. For run single test use command: "mocha src/tests/<file_name> --require ts-node/register"
2. Use flag --ENV to set testing environment (staging / dev / rc / prod);
3. Use flag --MODE to set account mode (common / test / demo)

Example: "mocha src/tests/token.test.ts --ENV staging --MODE common --require ts-node/register"

# Notes
All sensitive data is storing in "src/data" and NOT in this repo