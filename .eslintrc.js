module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/vue3-essential", // 校验vue3 逻辑代码
        "plugin:vue/vue3-strongly-recommended", // 校验vue3末班
        "eslint:recommended"  // 引入eslint核心功能
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
