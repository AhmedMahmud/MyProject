import React from 'react';
import FileInput from 'react-file-input';

export default class SignupFrom extends React.Component {
	render() {
		return (
      <div className="modal fade modal-ext" id="modal-createPost" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h3>Create Post</h3>
            </div>
            <div className="modal-body">
              <div className="md-form">
                <i className="fa fa-header prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.title = input} />
                <label for="form2">Title</label>
              </div>
              <div className="md-form">
                <i className="fa fa-pencil prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.description = input} />
                <label for="form3">Description</label>
              </div>
              <div className="md-form">
                <i className="fa fa-usd prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.price = input} />
                <label for="form3">Price</label>
              </div>
              <div className="md-form">
                <i className="fa fa-car prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.model = input} />
                <label for="form3">Model</label>
              </div>
              <div className="md-form">
                <i className="fa fa-wrench prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.engineSize = input} />
                <label for="form3">Engine Size</label>
              </div>
              <div className="md-form">
                <i className="fa fa-paint-brush prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.color = input} />
                <label for="form3">Color</label>
              </div>
              <div className="md-form">
                <i className="fa fa-calendar prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.year = input} />
                <label for="form3">Year</label>
              </div>
              <div className="md-form">
                <i className="fa fa-history prefix"></i>
                <input type="text" className="form-control" ref={(input) => this.mileage = input} />
                <label for="form3">Mileage</label>
              </div>
              <div className="md-form">
                <i className="fa fa-image prefix"></i>
                <input type="file" />
              </div>
              <div className="text-xs-center">
                <button className="btn btn-primary btn-lg" onClick={function() {this.props.handler(this.title.value, this.description.value, this.price.value, this.model.value, this.engineSize.value, this.color.value, this.year.value, this.mileage.value)}.bind(this)}>Create Advertisment</button>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
  handleChange(event) {
    console.log('Selected file:', event.target.files[0]);
    fs.writeFileSync(__dirname + event.target.files[0].name, event.target.files[0])
  }

}


/*this.props.handler(document.getElementById('form1'), document.getElementById('form2'), document.getElementById('form3'))*/