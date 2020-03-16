import React, { Component } from 'react';

class AddNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            faqID:"",
            faqName:"",
            faqText:""
        }
    }
    
   
    setTextInput = (event) => {
        const names = event.target.name
        const values = event.target.value
      
        this.setState({
            [names]:values
        });
    }  
    render() {
        return (
           
            <div className="col-3">
            <form method="post">
            <div className="card border-primary mt-5">
                <div className="card-header text-center text-uppercase">Thêm mới</div>
                <div className="card-body text-primary">
                <div className="form-group">
                    <input name="faqName" onChange={(event) => this.setTextInput(event)} type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập câu hỏi" />
                </div>
                <div className="form-group">
                    <input name="faqText" onChange={(event) => this.setTextInput(event)} type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập câu trả lời" />
                </div>
                <div className="form-group">
                <input type="reset" className="btn btn-primary btn-block" onClick={(faqName,faqText) => this.props.downloadNewDataUser(this.state.faqName,this.state.faqText)} value="Lưu" />  
                </div>
                </div>
            </div>
            </form>
            </div>
           

        );
    }
}

export default AddNew;