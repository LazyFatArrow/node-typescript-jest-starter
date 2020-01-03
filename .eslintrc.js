/*
* Code from https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
*/

module.exports =  {
  parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
  extends:  [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
 parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  "module",  // Allows for the use of imports
    project: "./tsconfig.json"
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "none",
      },
    }]
  },
};