import React from 'react';

export default class AdListEntry extends React.Component {
	render() {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src="http://mdbootstrap.com/images/ecommerce/reg/reg%20%283%29.jpg" className="img-fluid" alt="" />
            <a>
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-block text-xs-center">
            <h5>Category</h5>
            <h4 className="card-title"><strong><a data-toggle="modal" data-target="#product-info">{ this.props.ad.title }</a></strong></h4>
            <p className="card-text">{ this.props.ad.description }</p>
            <div className="card-footer">
              <span className="left">{ this.props.ad.price }</span>
              <span className="right"><a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i className="fa fa-heart"></i></a></span>
            </div>
          </div>
        </div>
      </div>
		)
	}
}