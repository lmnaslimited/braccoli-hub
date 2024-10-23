### Stunning Braccoli 2.0 - TurboRepo Setup

Welcome to the **TurboRepo setup!** This repository contains a sample Next.js application along with shared packages for UI components, Tailwind configuration, TypeScript configuration, ESLint configuration, and utility functions. Additionally, it allows you to clone two more repositories into the `apps` folder with a custom command.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js Logo" width="50" height="50"/> [Node.js](https://nodejs.org/) (v14 or later)
- <img src="https://banner2.cleanpng.com/20180618/opl/aa6n9ogrp.webp" alt="npm Logo" width="50" height="50"/> [npm](https://www.npmjs.com/) (comes with Node.js)
- <img src="https://banner2.cleanpng.com/20180425/bxe/ave8vhl4c.webp" alt="Git Logo" width="50" height="50"/> [Git](https://git-scm.com/)

---

### Getting Started

### 1. Clone the Repository

To get started, clone the TurboRepo repository to your local machine:

```bash
git clone <repository-url>
cd turborepo
```

### 2. Install Dependencies

Navigate to the root directory of the cloned repository and install the necessary dependencies:

```bash
npm install
```

### 3. Get the Sample Next.js App or Clone Additional Repositories

You can either fetch a sample Next.js app into the `apps` directory or clone additional repositories hosted in your GitHub.

#### Fetch the Sample Next.js App

Run the following command, replacing `appname` with your desired application name:

```bash
npm run get-app appname
```

This command will copy the sample Next.js app into the `apps` directory.

#### Clone Additional Repositories

You can also clone other repositories into the `apps` directory. Replace `<repository-url>` with the GitHub URL of your desired repo:

```bash
npm run get-app <repository-url>
```

For example:
```bash
npm run get-app https://github.com/yourusername/another-repo
```

### 4. Run the App Locally

To start the application locally, navigate to the newly created app's directory:

```bash
cd apps/appname  # Replace appname with the actual app directory name
```

Then, execute the following command to run the app:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Shared Packages

The TurboRepo setup includes several shared packages located in the `packages` directory:

- **`shared-ui`**: Contains reusable UI components.
- **`tailwind-config`**: Shared Tailwind CSS configuration.
- **`typescript-config`**: Predefined TypeScript configuration.
- **`eslint-config`**: Predefined ESLint configuration for linting.
- **`utils`**: Utility functions shared across applications.

You can import these shared packages into your Next.js app as needed.

---

## DevContainer Setup

This repository includes a **DevContainer** configuration to streamline your development environment. Make sure you have [Visual Studio Code](https://code.visualstudio.com/) and the [DevContainers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) installed to take advantage of this feature.

---

## Contributing

If you would like to contribute to this TurboRepo setup, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

---