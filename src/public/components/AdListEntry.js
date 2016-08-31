import React from 'react';

export default class AdListEntry extends React.Component {
	render() {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src="http://hypercarz.com/img/McLaren%20P1%2001.jpg" className="img-fluid" alt="" />
            <a>
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-block text-xs-center">
            <h4 className="card-title"><strong><a data-toggle="modal" data-target="#product-info">{ this.props.ad.title }</a></strong></h4>
            <p className="card-text">{ this.props.ad.description }</p>
            <h5 className="card-text">Make: { this.props.ad.make }</h5>
            <h5 className="card-text">Model: { this.props.ad.model }</h5>
            <h5 className="card-text">Year: { this.props.ad.year }</h5>
            <h5 className="card-text">Color: { this.props.ad.color }</h5>
            <h5 className="card-text">Engine Size: { this.props.ad.engineSize }</h5>
            <h5 className="card-text">Mileage: { this.props.ad.mileage }</h5>
            <div className="card-footer">
              <span className="left">${ this.props.ad.price }</span>
              <span className="right"><a className="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i className="fa fa-heart"></i></a></span>
            </div>
          </div>
        </div>
      </div>
		)
	}
}