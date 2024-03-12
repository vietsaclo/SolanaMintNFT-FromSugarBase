const MyInventory = () => {
  return (
    <div className="inventory-page">
      <div className="container">
        <div className="row mt-5 pb-5">
          <div key={0} className="col-12 col-md-3 mb-4">
            <div className="card">
              <img style={{ minHeight: '324px' }} src={''} className="card-img-top" alt={''} />
              <div className="card-body">
                <h5 className="card-title">Headgear</h5>
                <p className="card-text">
                  v.Headgear
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Background: v.Background</li>
                <li className="list-group-item">Equipment: v.Equipment</li>
                <li className="list-group-item">Eyes: v.Eyes</li>
              </ul>
              <div className="card-body">
                <button className="btn btn-outline-secondary">
                  Sent To...
                </button>
                <button className="btn btn-outline-success">
                  Listing on market
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
