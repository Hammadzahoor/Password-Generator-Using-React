# Password Generator

This is a simple Password Generator application built with React and Vite. The app allows users to generate secure passwords with customizable options such as length, inclusion of numbers, and special characters.

## Features

- Generate random passwords.
- Customize password length (8 to 50 characters).
- Option to include numbers in the password.
- Option to include special characters in the password.
- Copy the generated password to the clipboard with a single click.
- Responsive and user-friendly interface styled with Tailwind CSS.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd 05-Password-Generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Usage

1. Adjust the password length using the slider.
2. Check the boxes to include numbers and/or special characters in the password.
3. Copy the generated password to the clipboard by clicking the "Copy" button.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Tailwind CSS**: For styling the application.
- **ESLint**: For linting and maintaining code quality.

## Project Structure

- `src/`: Contains the source code for the application.
  - `App.jsx`: Main component for the Password Generator.
  - `main.jsx`: Entry point for the React application.
  - `index.css`: Tailwind CSS imports and global styles.
- `public/`: Contains static assets.
- `vite.config.js`: Configuration for Vite.
- `tailwind.config.js`: Configuration for Tailwind CSS.

## License

This project is open-source and available under the [MIT License](LICENSE).
