"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig, configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { polygon, polygonMumbai } from 'viem/chains';

const {chains, provider, webSocketProvider} = configureChains(
  [polygon],
  [
    alchemyProvider({apiKey: "O7Lse9Y4B2UuNS8S-i1xheAe9BK4s8Xb"}),
    publicProvider()
  ]
);
const {connectors} = getDefaultWallets({
  appName: 'Settlemint Stablecoin',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

export default function Providers({children}: any) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
