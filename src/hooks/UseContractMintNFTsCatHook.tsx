import { Apis } from "../utils/Const";
import axios from 'axios';

const UseContractMintNFTsCatHook = () => {
  const UseGetNFTs = async (userWallet: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      "id": 67,
      "jsonrpc": "2.0",
      "method": "qn_fetchNFTs",
      "params": {
        "wallet": `${userWallet}`,
        "omitFields": [],
        "page": 1,
        "perPage": 10
      }
    };
    const nfts = await axios.post(Apis.RPC_END_POIN, data, config);
    return nfts;
  }

  return {
    UseGetNFTs,
  }
}

export default UseContractMintNFTsCatHook;
