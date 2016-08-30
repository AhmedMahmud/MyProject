import React from 'react';

export default class ProductDetails extends React.Component {
	render() {
		return (
      <div className="modal fade ql-modal" id="product-info">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">Mercedes Benz</h4>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5">
                    <h4>Gallery</h4>
                    <hr />
                    <img src="http://dummyimage.com/500x340" className="img-responsive" alt="Cinque Terre" />
                  </div>
                  <div className="col-md-6">
                    <a><h4>Details</h4></a>
                    <hr />
                    <div className="price">
                      <p>
                        <span className="price-after">$500</span>
                      </p>
                    </div>
                    <a><i></i><h5>03319890331</h5></a>
                    <hr />
                    <h4>Description</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit est, ex nulla voluptates eaque aperiam repudiandae consectetur quae quod.</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}