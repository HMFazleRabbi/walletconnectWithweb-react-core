import React from 'react';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { connect, getAccount  } from '@wagmi/core'


const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Supported Ethereum network chain IDs
});

const wcConnector = new WalletConnectConnector({
  options: { projectId: "47ace990d320fd976c47f6169a894dbf", showQrModal: true },
})

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function Wallet() {
  const { chainId, account, activate, active } = useWeb3React();

  const connectWallet = async () => {
    // activate(injectedConnector);
    console.log(wcConnector.ready)
    try {
      await activate(wcConnector)
    console.log(wcConnector.connect(chainId))
    // const account = getAccount()
    // console.log(account)
      
      
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <h2>Web3ReactProvider Test</h2>
      <div>Chain ID: {chainId}</div>
      {active ? (
        <div>
          <p>Connected Account: {account}</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
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
