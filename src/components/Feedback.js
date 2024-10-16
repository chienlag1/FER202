function FeedBack() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h1 className="text-center text-white">Book your table</h1>
        <div className="d-flex justify-content-around align-content-lg-center">
          <div className="input-group p-1">
            <input type="text" className="form-control mb-3" placeholder="Username" aria-label="Username" />
            <input type="text" className="form-control mb-3" placeholder="Email*" aria-label="Server" />
            <select className="form-select form-control mb-3" id="inputGroupSelect01">
              <option selected>Select a Service</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="mb-1">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" className="btn btn-warning mt-2">
            Warning
          </button>
        </div>
      </div>
    </div>
  );
}
export default FeedBack;
