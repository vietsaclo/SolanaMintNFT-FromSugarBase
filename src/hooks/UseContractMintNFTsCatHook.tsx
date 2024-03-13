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
        "omitFields": [
          "provenance",
          "traits"
        ],
        "page": 1,
        "perPage": 100,
      }
    };
    const raws = await axios.post(Apis.RPC_END_POIN, data, config);
    if (raws.status !== 200) return [];

    const rawsNFTs = raws.data.result.assets;
    const nfts: any[] = [];
    for (let i = 0; i < rawsNFTs.length; i++) {
      if (rawsNFTs[i].collectionAddress === Apis.COLLECTION_ID) {
        nfts.push(rawsNFTs[i]);
      }
    }

    return nfts;
  }

  return {
    UseGetNFTs,
  }
}

export default UseContractMintNFTsCatHook;
