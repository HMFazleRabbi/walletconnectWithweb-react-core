import React, { useState } from "react";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { InjectedConnector } from "@web3-react/injected-connector";
import "./App.css";

const walletconnectConnector = new WalletConnectConnector({
  options: { projectId: "47ace990d320fd976c47f6169a894dbf", showQrModal: true },
});

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Supported Ethereum network chain IDs
});

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function Wallet() {
  const {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    error,
    provider,
    setError,
  } = useWeb3React();

  const connectWalletConnectWallet = async () => {
    try {
      console.log("Wallet connect triggered");
      await walletconnectConnector.connect(chainId);
      let accountWC = await walletconnectConnector.getAccount();
      let chainIdWC = await walletconnectConnector.getChainId();
      setconnectorName("Wallet Connect");
      SetwcAccount(accountWC);
      setWcChainId(chainIdWC);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWalletConnectWallet = async () => {
    try {
      console.log("Wallet disconnectWalletConnectWallet triggered");
      await walletconnectConnector.disconnect();
      setconnectorName(null);
      SetwcAccount(null);
      setWcChainId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = () => {
    console.log("Meta connect", active);
    activate(injectedConnector);
    setconnectorName("Metamask");
  };

  const disconnectWallet = async () => {
    deactivate();
    localstorage.removeitem("account");
    setconnectorName(null);
  };

  const [connectorName, setconnectorName] = useState(null);
  const [wcAccount, SetwcAccount] = useState(null);
  const [wcChainId, setWcChainId] = useState(null);

  return (
    <div className="wallet-container">
      <div className="card">
        <h2 className="wallet-title">
          {connectorName ? `Connection Status` : "Connect Using"}
        </h2>
        <div className="card-content">
          {connectorName === "Metamask" ? (
            <div className="wallet-connected">
              <div className="chain-id">
                <span className="bold-text">Chain ID:</span> {chainId}
              </div>
              <div className="connected-account">
                <span className="bold-text">Connected Account:</span> {account}
              </div>
              <div className="disconnect-button-container">
                <button
                  className="disconnect-button"
                  onClick={disconnectWallet}
                >
                  Disconnect
                </button>
              </div>
              <div className="footer">
                {connectorName && <p>Connected using {connectorName}</p>}
              </div>
            </div>
          ) : connectorName === "Wallet Connect" ? (
            <div className="wallet-connected">
              <div className="chain-id">
                <span className="bold-text">Chain ID:</span> {wcChainId}
              </div>
              <div className="connected-account">
                <span className="bold-text">Connected Account:</span>
                <div> {wcAccount} </div>
              </div>
              <div className="disconnect-button-container">
                <button
                  className="disconnect-button"
                  onClick={disconnectWalletConnectWallet}
                >
                  Disconnect
                </button>
              </div>
              <div className="footer">
                {connectorName && <p>Connected using {connectorName}</p>}
              </div>
            </div>
          ) : (
            <div className="wallet-not-connected">
              <button
                className={`connect-button ${
                  !window.ethereum ? "disabled" : ""
                }`}
                onClick={connectWallet}
                disabled={!window.ethereum}
              >
                Metamask
              </button>
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
