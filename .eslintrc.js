module.exports = {
    "extends": [
      "next",
    "plugin:@next/next/recommended",
    "eslint:recommended"
    ],
    "settings": {
        "next": {
          "rootDir": "./app/layout.tsx"
        }
      },
    "rules": {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@next/next/no-img-element": "off",
      "jsx-ally/alt/text" : "off"
    }
}
