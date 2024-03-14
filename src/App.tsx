import "./App.css";
import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import { DEFAULT_TIMEOUT } from "./connection";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { createTheme, ThemeProvider } from "@mui/material";
import { SlopeWalletAdapter } from "@solana/wallet-adapter-slope";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import HomeNew from "./HomeNew";
import InventoryPage from "./InventoryPage";
import { useRoutes } from "react-router";

// import the styles
require('@solana/wallet-adapter-react-ui/styles.css');

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    return new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID!);
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

let error: string | undefined = undefined;

if (process.env.REACT_APP_SOLANA_NETWORK === undefined) {
  error =
    "Your REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (process.env.REACT_APP_SOLANA_RPC_HOST === undefined) {
  error =
    "Your REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const candyMachineId = getCandyMachineId();
const network = (process.env.REACT_APP_SOLANA_NETWORK ??
  "devnet") as WalletAdapterNetwork;
const rpcHost =
  process.env.REACT_APP_SOLANA_RPC_HOST ?? anchor.web3.clusterApiUrl("devnet");
const connection = new anchor.web3.Connection(rpcHost);

interface PageRoute {
  path: string,
  element: JSX.Element,
  children: any[],
}

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter({ network }),
      new SlopeWalletAdapter(),
    ],
    []
  );

  const listRoute: PageRoute[] = [
    {
      path: '/',
      element: <HomeNew
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={DEFAULT_TIMEOUT}
        rpcHost={rpcHost}
        network={network}
        error={error}
      />,
      children: [],
    },
    {
      path: '/home',
      element: <HomeNew
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={DEFAULT_TIMEOUT}
        rpcHost={rpcHost}
        network={network}
        error={error}
      />,
      children: [],
    },
    {
      path: '/inventory',
      element: <InventoryPage />,
      children: [],
    },
  ];

  const routing = useRoutes(listRoute);

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            {routing}
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

export default App;
