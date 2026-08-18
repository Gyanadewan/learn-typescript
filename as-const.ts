const config = {
  env: "production",
  version: 1
} as const;

console.log(config);
console.log(config.env);
console.log(config.version);