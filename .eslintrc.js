module.exports = {
    root: true, // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        }
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
        // "next/core-web-vitals"
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 0 // Use our .prettierrc file as source
    }
};

// {
//   "extends": "next/core-web-vitals"
// }
// {
//   "extends": [
//     "airbnb",
//     "airbnb/hooks",
//     "eslint:recommended",
//     "prettier",
//     "plugin:jsx-a11y/recommended",
//     "next/core-web-vitals"
//   ],
//   "parser": "babel-eslint",
//   "parserOptions": {
//     "ecmaVersion": 8
//   },
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true,
//     "jest": true
//   },
//   "rules": {
//     "react/react-in-jsx-scope": 0,
//     "react-hooks/rules-of-hooks": "error",
//     "no-console": 0,
//     "react/state-in-constructor": 0,
//     "indent": 0,
//     "linebreak-style": 0,
//     "react/prop-types": 0,
//     "jsx-a11y/click-events-have-key-events": 0,
//     "react/jsx-filename-extension": [
//       1,
//       {
//         "extensions": [".js", ".jsx"]
//       }
//     ],
//     "prettier/prettier": [
//       "error",
//       {
//         "trailingComma": "es5",
//         "singleQuote": true,
//         "printWidth": 100,
//         "tabWidth": 4,
//         "semi": true,
//         "endOfLine": "auto"
//       }
//     ]
//   },
//   "plugins": ["prettier", "react", "react-hooks"]
// }
