import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Walletentry } from './pages/wallet';
function App() {

  return (
    // <ConnectionProvider endpoint={endpoint}>
    // <WalletProvider wallets={wallets} autoConnect>
    //     <WalletModalProvider>
      <div>
        <Walletentry/>
      </div>
      // </WalletModalProvider>
      //       </WalletProvider>
      //   </ConnectionProvider>
    
  )
}

export default App
