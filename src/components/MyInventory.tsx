import { useEffect, useState } from "react";
import UseContractMintNFTsCatHook from "../hooks/UseContractMintNFTsCatHook";
import { useWallet } from "@solana/wallet-adapter-react";

const MyInventory = () => {
  const { UseGetNFTs } = UseContractMintNFTsCatHook();
  const { connected, publicKey } = useWallet();
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!connected) return;
    loadNFTs();
  }, [connected]);

  const loadNFTs = async () => {
    if (!publicKey) return;
    setLoading(true);
    const nfts = await UseGetNFTs(publicKey.toBase58());
    setLoading(false);
    setNfts(nfts);
  }

  const renderCards = () => {
    if (loading) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img style={{
            width: '200px',
            height: 'auto',
          }} src="/assets/images/gif/loading-center.svg" alt="loading..." />
        </div>
      );
    }

    return nfts.map((v, k) => {
      const name = v.name.length > 18 ? `${v.name.substring(0, 18)}...` : v.name;
      const valueTest = v.name.length > 7 ? v.name.substring(0, 7) : v.name;

      return (
        <div key={k} className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="card inventory-card">
            <img style={{ minHeight: '324px' }} src={v.imageUrl} className="card-img-top" alt={`NFT_${name}`} />
            <div className="mt-3 mb-1 inventory-card__ttl d-flex align-items-center justify-content-between">
              {/* <p className="card-title mb-0">Name</p> */}
              <p className="card-text inventory-page__ttl">
                {name}
              </p>
            </div>
            <div className="accordion" id={`accordion${k}`}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading${k}`}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${k}`} aria-expanded="true" aria-controls={`collapse${k}`}>
                    <span className="fw-light">Background:</span> <span className="font-sec ms-auto">{valueTest}</span>
                  </button>
                </h2>
                <div id={`collapse${k}`} className="accordion-collapse collapse" aria-labelledby={`heading${k}`} data-bs-parent={`#accordion${k}`}>
                  <div className="accordion-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="fw-light">Equipment:</div>
                      <span className="font-sec"> {valueTest || `Equipment_${k}`}</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="fw-light">Eyes:</div>
                      <span className="font-sec">{valueTest}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 d-flex align-items-center justify-content-between">
              <button className="btn btn-send-nft">
                Sent to ...
              </button>
              <button className="btn btn-listing-nft">
                List on market
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="inventory-page">
      <div className="container">
        <h2 className="mt-5 inventory-page__ttl">My Inventory</h2>
        <div className="row mt-5 pb-5">
          {renderCards()}
        </div>
      </div>
    </div>
  );
}

export default MyInventory;
