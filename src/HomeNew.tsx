import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import Header from "./components/Header";
import * as anchor from "@project-serum/anchor";
import MintNFTsOriginal from "./components/MintNFTsOriginal";

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
  network: WalletAdapterNetwork;
  error?: string;
}

const HomeNew = (props: HomeProps) => {
  return (
    <main>
      <div className='header'>
        <Header />
      </div>

      <MintNFTsOriginal
        candyMachineId={props.candyMachineId}
        connection={props.connection}
        txTimeout={props.txTimeout}
        rpcHost={props.rpcHost}
        network={props.network}
        error={props.error}
      />
    </main>
  );
};

export default HomeNew;
