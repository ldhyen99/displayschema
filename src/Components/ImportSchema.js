import React, { Component } from 'react';
import DisplaySchema from './DisplaySchema';
import FirstSchema from './FirstSchema';
// import {NavLink,Link} from "react-router-dom";



class ImportSchema extends Component {
     
    handleEditButton = () => {
        this.props.handleEditFAQ()
        this.props.changeEditUserStatus()
    }

    displayData = () => this.props.dataFAQProps.map((value,index) => (
        <DisplaySchema 
        handleEditFAQ={(faq) => this.props.handleEditFAQ(value)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        handleDeleteButton={(idFAQ) => this.props.handleDeleteButton(idFAQ)}
            key = {index}
            fetchId = {value.faqId}
            fetchName = {value.name}
            fetchText = {value.text}
            
        />
      )) 
    displayFirstData = () => this.props.handleFirstSchema.map((value,index) => (
        <FirstSchema 
        handleEditFAQ={(faq) => this.props.handleEditFAQ(value)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        handleDeleteButton={(idFAQ) => this.props.handleDeleteButton(idFAQ)}
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
                    <h1>Schema Markup</h1>
                    </header>
                <div className="form-group inside border border-primary bg-dark" >
                <pre>
                    <span>&lt;script type="application/ld+json"&gt;</span> <br/>
                    <span>	&#123;</span> <br></br>
                    <span>    "@context": "https://schema.org",</span> <br/>
                    <span>    "@type": "FAQPage",</span> <br/>
                    <span>    "mainEntity":</span>
                    <span> &#91;</span> 
                {this.displayFirstData()}
                {this.displayData()}
                    <span>&#93;</span>
                    <span>&#125;</span><br/>
                    <span>&lt;/script&gt;</span><br/>
              </pre>
             
              </div>
        </div>
              
          
        );
    }
}

export default ImportSchema;
