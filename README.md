
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

## Contributions

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out to [f.rabbiarcs@gmail.com](f.rabbiarcs@gmail.com) if you have any questions or feedback. Happy coding!

