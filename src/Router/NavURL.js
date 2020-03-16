import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ImportRating from '../Components/ImportRating';
import ImportSchema from '../Components/ImportSchema';

class NavURL extends Component {
    render() {
        return (
            <Router>
            <div>
                <Router path="/" render={() => (<ImportSchema handleFirstSchema={this.props.handleFirstSchema} dataFAQProps={this.state.fetchData}
            handleDeleteButton={(idFAQ) => this.handleDeleteButton(idFAQ)}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            handleEditFAQ = {(faq)=>this.handleEditFAQ(faq)}
            />)}/>
                <Router path="/markup" render={() => (<ImportSchema handleFirstSchema={this.props.handleFirstSchema} dataFAQProps={this.state.fetchData}
            handleDeleteButton={(idFAQ) => this.handleDeleteButton(idFAQ)}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            handleEditFAQ = {(faq)=>this.handleEditFAQ(faq)}
            />)}/>
                {/* <Route  path="/rating" component={ImportRating}/> */}
            </div>
            </Router>
        );
    }
}

export default NavURL;