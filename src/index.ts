#!/usr/bin/env node
const [,,yourName = ''] = process.argv;
console.log(`Hello ${yourName}!`);