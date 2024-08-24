## clone this repo into your Machine
## npm install all dependencies


# Task: Deep Dive into Context API and State Management in React Native

### Objective:
To deepen your understanding of React Native's Context API and state management by building a more complex application. This task will challenge you to manage multiple contexts and states across different components, handling updates and rendering efficiently.

### Task Overview:
You will create a multi-screen app that manages user profiles and settings using the Context API. The app will consist of a Profile screen and a Settings screen. Each screen will consume and update the context in different ways, simulating real-world app functionality.

### Challenges:

1. **📱 Part 1: Setting Up the Profile and Settings Screens**
   - **Objective:** Create two separate screens, `ProfileScreen` and `SettingsScreen`, within your app. Use the Context API to share the user data (e.g., name, age, email) across both screens.
   - **Requirements:**
     - Create a `ProfileScreen` that displays the user's name, age, and email.
     - Create a `SettingsScreen` that allows the user to update their name and email.
     - Ensure both screens access the same `UserContext` for user data.

2. **🔄 Part 2: Managing and Updating State Across Screens**
   - **Objective:** Implement state management so that when the user updates their name or email on the `SettingsScreen`, the changes reflect on the `ProfileScreen`.
   - **Requirements:**
     - Add input fields on the `SettingsScreen` to allow the user to update their name and email.
     - When the user submits the form, update the context so that the changes are visible on the `ProfileScreen`.

3. **🌗 Part 3: Implementing Multiple Contexts**
   - **Objective:** Introduce a second context, `ThemeContext`, to manage theme-related settings (e.g., light mode and dark mode). Apply the theme across the app.
   - **Requirements:**
     - Create a `ThemeContext` to manage light and dark modes.
     - Allow users to toggle between light and dark modes on the `SettingsScreen`.
     - Apply the selected theme to both the `ProfileScreen` and `SettingsScreen`.

4. **💾 Part 4: Persisting Data with AsyncStorage**
   - **Objective:** Ensure that user data and theme settings persist even after the app is closed and reopened by integrating AsyncStorage.
   - **Requirements:**
     - Use `AsyncStorage` to save the user’s name, email, and theme preference.
     - Load the saved data when the app starts and update the contexts accordingly.

5. **🚨 Part 5: Error Handling and Validation**
   - **Objective:** Implement error handling and input validation on the `SettingsScreen`.
   - **Requirements:**
     - Validate that the user’s name and email are not empty before allowing updates.
     - Show appropriate error messages if the validation fails.
     - Handle any errors that might occur when saving or loading data from AsyncStorage.

### Hints and Tips:
- You can start with the existing code we worked on earlier for the `UserContext` and `RawanComponent`.

- **Break It Down:** Tackle each challenge step by step, making sure each part of the app works correctly before moving on to the next.

Good luck, and remember that the goal is to explore and deepen your understanding, so take your time to experiment and learn!