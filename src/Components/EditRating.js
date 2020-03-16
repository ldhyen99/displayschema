import React, { Component } from 'react';

class EditRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idRating: this.props.editRatingObject.idRating,
            bestRating: this.props.editRatingObject.bestRating,
            ratingCount: this.props.editRatingObject.ratingCount,
            ratingValue: this.props.editRatingObject.ratingValue,
            image: this.props.editRatingObject.image,
            name: this.props.editRatingObject.name,
            description: this.props.editRatingObject.description

        }
    }
    
    checkChange = (event) => {
        const names = event.target.name
        const values = event.target.value
        this.setState({
            [names]:values
        });
    }

    handleSaveButton = () => {
        var info = {}
        info.idRating = this.state.idRating
        info.bestRating = this.state.bestRating
        info.ratingCount = this.state.ratingCount
        info.ratingValue = this.state.ratingValue
        info.image = this.state.image
        info.name = this.state.name
        info.description = this.state.description
        this.props.changeEditRatingStatus()
        this.props.fetchRatingEditInfo(info) 
    }
    render() {
        return (
            <div className="row">
                  <div className="col">
                    <form method="post">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header text-center text-uppercase">Sửa</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.bestRating} 
                            name="bestRating" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Best Rating" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.ratingCount} 
                            name="ratingCount" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Rating Count" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.ratingValue} 
                            name="ratingValue" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Rating Value" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.image} 
                            name="image" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Image" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.name} 
                            name="name" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} 
                            defaultValue={this.props.editRatingObject.description}
                            name="description" type="text" className="form-control"  
                            aria-describedby="helpId" placeholder="Description" />
                        </div>
                        <div className="form-group">
                        <input type="button" className="btn btn-danger btn-block" value="Lưu" onClick={() => this.handleSaveButton()} />  
                        </div>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
        );
    }
}

export default EditRating;