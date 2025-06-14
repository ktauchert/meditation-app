# Just Meditate - A Simple Meditation App 🧘

This is a meditation app built with [Expo](https://expo.dev) that provides a simple way to start your day with guided meditation, affirmation messages, and calming sounds.

## About the App

Just Meditate is designed to be a simple, intuitive meditation application that offers:

- Nature-based meditation experiences
- Calming background sounds
- Daily affirmation messages
- Clean, peaceful user interface with gradient backgrounds
- Simple navigation to quickly start your meditation practice

The app uses a beautiful, soothing UI with beach imagery and a calming color palette to create a peaceful experience from the moment you open it.

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with [React Native](https://reactnative.dev/)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Architecture**: Component-based design with custom UI elements
- **Media**: Local sound files and images for offline use

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project Structure

- **app/**: Main application screens using file-based routing
  - **index.tsx**: Home screen with welcome message and begin button
  - **nature-meditation/**: Nature meditation experience screens
  - **tabs/**: Tab-based navigation screens
- **components/**: Reusable UI components like CustomButton and AppGradient
- **assets/**: Images, sounds, and other media files

## Learn More

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the Community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.