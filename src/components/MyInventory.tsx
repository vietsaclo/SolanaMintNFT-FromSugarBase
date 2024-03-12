const MyInventory = () => {
  return (
    <div className="inventory-page">
      <div className="container">
        <h2 className="mt-5 inventory-page__ttl">My Inventory</h2>
        <div className="row mt-5 pb-5">
          <div key={0} className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card inventory-card">
              <img style={{ minHeight: '324px' }} src='' className="card-img-top" alt="" />
              <div className="mt-3 mb-1 inventory-card__ttl d-flex align-items-center justify-content-between">
                <p className="card-title mb-0">Headgear</p>
                <p className="card-text inventory-page__ttl">
                  Headgear
                </p>
              </div>
              <div className="accordion" id={`accordion${0}`}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id={`heading${0}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${0}`} aria-expanded="true" aria-controls={`collapse${0}`}>
                      <span className="fw-light">Background:</span> <span className="font-sec ms-auto">Background</span>
                    </button>
                  </h2>
                  <div id={`collapse${0}`} className="accordion-collapse collapse" aria-labelledby={`heading${0}`} data-bs-parent={`#accordion${0}`}>
                    <div className="accordion-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="fw-light">Equipment:</div>
                        <span className="font-sec">Equipment</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="fw-light">Eyes:</div>
                        <span className="font-sec">Eyes</span>
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
        </div>
      </div>
    </div>
  );
}

export default MyInventory;
