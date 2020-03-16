import React, { Component } from 'react';
import EditRating from './EditRating'

class FormEditRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempRat:'',
            ratObj:{}
        }
    }
    fetchFAQEditInfo = (info) => {
        this.setState({
            ratObj:info
        })
        this.props.fetchRatingEditInfo(info)
    
    }

    displayEditForm = () => {
        if( this.props.editRatingStatus === true) {
           return (
               <EditRating changeEditRatingStatus={() => this.props.changeEditRatingStatus()}
               editRatingObject={this.props.editRatingObject}
               fetchRatingEditInfo={(info)=> this.props.fetchRatingEditInfo(info)}
               />
           )
        } 
      }
    render() {
        return (
           
                <div className="container"> 
                <div className="col-12">
                    {this.displayEditForm()}
                    </div>
                </div>
        );
    }
}

export default FormEditRating;