function FeedBack() {
  return (
    <div className="container mt-3">
      <div className="row">
        <h1 className="text-center text-white">Book your table</h1>
        <div className="d-flex justify-content-around align-content-lg-center">
          <div class="input-group p-1">
            <input type="text" class="form-control mb-3" placeholder="Username" aria-label="Username" />
            <input type="text" class="form-control mb-3" placeholder="Email*" aria-label="Server" />
            <select class="form-select form-control mb-3" id="inputGroupSelect01">
              <option selected>Select a Service</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="mb-1">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button type="button" class="btn btn-warning mt-2">
            Warning
          </button>
        </div>
      </div>
    </div>
  );
}
export default FeedBack;
