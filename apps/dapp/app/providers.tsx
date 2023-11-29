/* eslint-disable */

'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig, Chain, configureChains, createClient } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { polygon, polygonMumbai } from 'viem/chains';

/* const { provider, webSocketProvider} = configureChains(
  [polygon],
  [
    alchemyProvider({apiKey: "O7Lse9Y4B2UuNS8S-i1xheAe9BK4s8Xb"}),
    publicProvider()
  ]
); */
const stablecoin: Chain = {
  id: Number(process.env.NEXT_PUBLIC_CHAIN_ID),
  name: 'StablecoinNetwork',
  network: 'stablecoin',
  nativeCurrency: {
    decimals: 18,
    name: 'STB',
    symbol: 'STB',
  },
  rpcUrls: {
    public: {
      http: [process.env.NEXT_PUBLIC_RPC_URL || ''],
    },
    default: {
      http: [process.env.NEXT_PUBLIC_RPC_URL || ''],
    },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://blockscout.io' },
    etherscan: { name: 'Blockscout', url: 'https://blockscout.io' },
  },
  testnet: false,
};

const { chains, provider, webSocketProvider } = configureChains(
  [stablecoin as any],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.NEXT_PUBLIC_RPC_URL || '',
      }),
    }),
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: `https://polygon-mainnet-9102.gke-india.settlemint.com/bpaas-a19Cf4367b8AE440Fc31D7c23bEe797CEA348FC4`,
    //   }),
    // }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Settlemint Stablecoin',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function Providers({ children }: any) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
