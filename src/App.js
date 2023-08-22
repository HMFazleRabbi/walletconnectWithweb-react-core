// Import necessary libraries and components
import React, { useState } from "react";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { InjectedConnector } from "@web3-react/injected-connector";
import "./App.css";

// Initialize the WalletConnectConnector
const walletconnectConnector = new WalletConnectConnector({
  options: {
    projectId: "47ace990d320fd976c47f6169a894dbf",
    showQrModal: true,
  },
});

// Initialize the InjectedConnector
const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Supported Ethereum network chain IDs
});

// Function to get the Web3Provider
// Parameter: provider - Ethereum provider
// Return Value: Web3Provider instance
function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function Wallet() {
  // Get Ethereum-related information from the Web3React hook
  const {
    account,
    activate,
    active,
    chainId,
    deactivate,
  } = useWeb3React();

  // State to track the current connection
  const [connectorName, setConnectorName] = useState(null);
  const [wcAccount, setWcAccount] = useState(null);
  const [wcChainId, setWcChainId] = useState(null);

  // Function to connect using Wallet Connect
  // No parameters
  // Return Value: None
  const connectWalletConnectWallet = async () => {
    try {
      console.log("Wallet connect triggered");
      await walletconnectConnector.connect(chainId);
      const accountWC = await walletconnectConnector.getAccount();
      const chainIdWC = await walletconnectConnector.getChainId();
      setConnectorName("Wallet Connect");
      setWcAccount(accountWC);
      setWcChainId(chainIdWC);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to disconnect using Wallet Connect
  // No parameters
  // Return Value: None
  const disconnectWalletConnectWallet = async () => {
    try {
      console.log("Wallet disconnect triggered");
      await walletconnectConnector.disconnect();
      setConnectorName(null);
      setWcAccount(null);
      setWcChainId(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to connect using Metamask
  // No parameters
  // Return Value: None
  const connectWallet = () => {
    console.log("Metamask connect", active);
    activate(injectedConnector);
    setConnectorName("Metamask");
  };

  // Function to disconnect from the current wallet
  // No parameters
  // Return Value: None
  const disconnectWallet = async () => {
    deactivate();
    localStorage.removeItem("account");
    setConnectorName(null);
  };

  return (
    <div className="wallet-container">
      <div className="card">
        {/* Title */}
        <h2 className="wallet-title">
          {connectorName ? `Connection Status` : "Connect Using"}
        </h2>
        <div className="card-content">
          {/* Display content based on the current connection */}
          {connectorName === "Metamask" ? (
            // Connected using Metamask
            <div className="wallet-connected">
              <div className="chain-id">
                <span className="bold-text">Chain ID:</span> {chainId}
              </div>
              <div className="connected-account">
                <span className="bold-text">Connected Account:</span> {account}
              </div>
              {/* Disconnect button */}
              <div className="disconnect-button-container">
                <button
                  className="disconnect-button"
                  onClick={disconnectWallet}
                >
                  Back
                </button>
              </div>
              {/* Footer */}
              <div className="footer">
                {connectorName && <p>Connected using {connectorName}</p>}
              </div>
            </div>
          ) : connectorName === "Wallet Connect" ? (
            // Connected using Wallet Connect
            <div className="wallet-connected">
              <div className="chain-id">
                <span className="bold-text">Chain ID:</span> {wcChainId}
              </div>
              <div className="connected-account">
                <span className="bold-text">Connected Account:</span>
                <div> {wcAccount} </div>
              </div>
              {/* Disconnect button */}
              <div className="disconnect-button-container">
                <button
                  className="disconnect-button"
                  onClick={disconnectWalletConnectWallet}
                >
                  Disconnect
                </button>
              </div>
              {/* Footer */}
              <div className="footer">
                {connectorName && <p>Connected using {connectorName}</p>}
              </div>
            </div>
          ) : (
            // Not connected
            <div className="wallet-not-connected">
              {/* Metamask button */}
              <button
                className={`connect-button ${
                  !window.ethereum ? "disabled" : ""
                }`}
                onClick={connectWallet}
                disabled={!window.ethereum}
              >
                Metamask
              </button>
              {/* Wallet Connect button */}
              <button
                className="connect-wallet-button"
                onClick={connectWalletConnectWallet}
              >
                Wallet Connect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Wallet />
    </Web3ReactProvider>
  );
}

export default App;
