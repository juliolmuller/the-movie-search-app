import dotenv from 'dotenv-flow'

const config = dotenv.config({ purge_dotenv: true })

if (config.error) {
  throw config.error
}

export default {
  expo: {
    name: 'The Movie Search',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/images/icon.png',
    splash: {
      backgroundColor: '#ffffff',
      image: './src/images/splash.png',
      resizeMode: 'cover',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    android: {
      adaptiveIcon: {
        foregroundImage: './src/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './src/images/favicon.png',
    },
    extra: { ...process.env },
  },
}
