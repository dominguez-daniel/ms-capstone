module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "files": [
                "**/*.spec.js",
            ],
            "env": {
                "jest": true
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
