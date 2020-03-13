import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempFAQ:'',
            faqObj:{}
        }
    }
    fetchFAQEditInfo = (info) => {
        this.setState({
            faqObj:info
        })
        this.props.fetchFAQEditInfo(info)
        this.props.fetchFAQEditInfoSecond(info)
    }
    
    displayEditForm = () => {
        if( this.props.editUserStatus === true) {
           return (
               <EditUser changeEditUserStatus={() => this.props.changeEditUserStatus()}
               editFAQObject={this.props.editFAQObject}
               fetchFAQEditInfo={(info => this.fetchFAQEditInfo(info))}

               />
           )
        } 
      }
   
      
    render() {
        return (
            <div className="container"> 
                <div className="col-12">
                 {this.displayEditForm()}
                {/* <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.checkChange(event)}placeholder=" Input Name" />
                        <div className="btn btn-info" onClick={(data) => this.props.fetchTextSearch(this.state.tempValue)}>
                            Search 
                        </div>
                    </div> 
                    </div>
                    <div className="btn-group-add-news mb-3 float-right col-2 mr-3" >
                       
                </div> */}
                </div>
                </div>
          
        );
    }
}

export default Search;