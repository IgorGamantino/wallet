module.exports = {
  preset: "react-native",
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!@react-native|react-native)",
    "/node_modules/(?!react-native-permissions)/mock",
  ],
  testMatch: ["**.spec.ts", "**.spec.tsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest-setup.js",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
};
