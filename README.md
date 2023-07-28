
## Dependencies Installation

To run this project locally, you'll need to have the following dependencies installed on your system:

1. **Node.js and npm (Node Package Manager):** You can download and install Node.js from the official website [here](https://nodejs.org/). npm is included with Node.js, so once Node.js is installed, npm will be available too.

2. **React and React DOM:** This project is built using React, and React DOM is required for rendering the components in the browser. To install both packages, run the following command:

   ```bash
   npm install react react-dom
   ```

3. **@web3-react/core:** The core package for `web3-react` that provides the main functionality for connecting to various Web3 providers. Install it with:

   ```bash
   npm install @web3-react/core@6.1.9
   ```

4. **@web3-react/injected-connector:** A connector for connecting to an injected Web3 provider, such as MetaMask or other browser extensions. Install it with:

   ```bash
   npm install @web3-react/injected-connector@6.0.7
   ```

5. **ethers:** The ethers.js library, which provides a powerful and easy-to-use API for interacting with the Ethereum blockchain and smart contracts. Install it with:

   ```bash
   npm install ethers@5.5.4
   ```

Once you have all the dependencies installed, you can start the development server and run the project locally with the following command:

```bash
npm start
```

The project should now be accessible at `http://localhost:3000` in your web browser.

If you encounter any issues during the installation or running of the project, please check the official documentation for each package or seek help in the project's repository.

Feel free to customize this section to include other dependencies if your project requires additional packages or tools.