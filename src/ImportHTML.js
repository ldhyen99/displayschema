import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo'
import DisplayFirstHTML from './DisplayFirstHtml';

class ImportHTML extends Component {
    displayFirstDataHTML = () => this.props.handleFirstSchema.map((value,index) => (
        <DisplayFirstHTML 
       
            key = {index}
            fetchId = {value.faqId}
            fetchName = {value.name}
            fetchText = {value.text}
            
        />
      )) 
      displayDataHtml = () => this.props.dataFAQProps.map((value,index) => (
        <DisplayInfo 
       
            key = {index}
            fetchId = {value.faqId}
            fetchName = {value.name}
            fetchText = {value.text}
            
        />
      )) 
    render() {
        return (
            <div className="col-9 ">
                    <header className="header-markup">
                    <h1>HTML</h1>
                    </header>
                    <div className="form-group inside border border-primary bg-dark" >
                        {this.displayFirstDataHTML()}
                        {this.displayDataHtml()}
                    </div>
                    </div>
        );
    }
}

export default ImportHTML;