
# Web3 Wallet Connector

A simple React application that demonstrates how to connect to Ethereum wallets using the Web3 React library, Metamask, and Wallet Connect.

## Features

- Connect to Ethereum wallets using Metamask and Wallet Connect
- Display connection status, chain ID, and connected account
- Disconnect from the current wallet
- User-friendly interface with clear instructions

## Technologies Used

- React.js
- Web3 React library
- Metamask
- Wallet Connect
- Ethereum

## Dependencies
```
    "@wagmi/core": "^1.3.9",
    "@web3-react/core": "^6.1.9",
    "@web3-react/injected-connector": "^6.0.7",
    "ethers": "^5.5.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
```
## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/web3-wallet-connector.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-walletconnector
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

1. On the landing page, you'll see options to connect using Metamask or Wallet Connect.

2. Click the "Metamask" button to connect using Metamask. If you don't have Metamask installed, the button will be disabled.

3. Click the "Wallet Connect" button to connect using Wallet Connect. A QR code modal will appear, allowing you to scan it using a mobile wallet.

4. Once connected, the application will display the chain ID and connected account. If using Wallet Connect, the connection type will be indicated.

5. To disconnect, click the "Disconnect" button at the bottom of the card.

## Troubleshooting

If you encounter issues while using the Web3 Wallet Connector application, here are some common problems and their potential solutions:

### 1. Wallet Connection Issues

- **Problem:** Unable to connect to a wallet using Metamask or Wallet Connect.
  - **Solution:** Ensure that you have the necessary browser extensions (Metamask) or mobile wallet apps (Wallet Connect) installed. Make sure you follow the connection instructions provided in the application.

- **Problem:** Connection fails or is not established.
  - **Solution:** Check your internet connection and ensure that your wallet extension or app is up-to-date. If the issue persists, you can try restarting your browser or mobile device.

### 2. Account and Chain ID Issues

- **Problem:** Connected account and chain ID are not displayed correctly.
  - **Solution:** Make sure you are connected to the correct Ethereum network. Some networks require specific settings in your wallet extension or app. Check that you are connected to the same account and network as expected.

### 3. Disconnection Issues

- **Problem:** Unable to disconnect from a wallet.
  - **Solution:** Try refreshing the page or restarting your browser. If the issue persists, you can manually disconnect from your wallet extension or app.

### 4. Clearing Session Data

- **Problem:** Metamask retains user account information after the session ends.
  - **Solution:** Metamask browser plugin retains user account information. Remember to clear browser history and log out from Metamask at the end of your session to ensure your privacy and security.

### 5. Browser Compatibility

- **Problem:** The application behaves unexpectedly or displays errors in certain browsers.
  - **Solution:** Ensure that you are using a modern and up-to-date browser. Some older browsers might not fully support the required features of the application.

If you encounter any issues that are not covered here, feel free to reach out for help. You can open an issue in the repository or seek assistance from the project's maintainers. Remember that troubleshooting can involve a bit of trial and error, so don't hesitate to explore different solutions to find what works for you.

### Watch the Tutorial Video
For a demo of the Web3 Wallet Connector, watch our tutorial video on [YouTube: Wallet Connect Using web3 react core](https://youtu.be/2G53l4lm1iI)

## Contributions

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out to [f.rabbiarcs@gmail.com](f.rabbiarcs@gmail.com) if you have any questions or feedback. Happy coding!

