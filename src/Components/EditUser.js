import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idFaq: this.props.editFAQObject.faqId,
            name: this.props.editFAQObject.name,
            text: this.props.editFAQObject.text
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
        info.id = this.state.idFaq
        info.name = this.state.name
        info.text = this.state.text
        this.props.changeEditUserStatus()
        this.props.fetchFAQEditInfo(info)
    }
    render() {
        return (
            <div className="row">
                  <div className="col">
                    <form method="post">
                    <div className="card text-white bg-warning mb-3">
                        <div className="card-header text-center text-uppercase">Thêm mới</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} defaultValue={this.props.editFAQObject.name} name="name" type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập câu hỏi" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.checkChange(event)} defaultValue={this.props.editFAQObject.text} name="text" type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập câu trả lời" />
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

export default EditUser;