import React,{ Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Components/App';
import Header from './Header';
import ImportSchema from './ImportSchema';
import AddNew from './AddNew';
import DataFAQ from './dataFAQ.json'
import Search from './Search';
import temp from './temp';


class App extends Component {
  constructor(props) {    
    super(props);
    this.state = {
        fetchData: [],
        fetchFirstData:temp,
        handleComma:true,
        editUserStatus:false,
        editFAQObject: {}
    }
}

fetchFAQEditInfo = (info) => {
  console.log('Thong tin da sua: ' + info.name)
  this.state.fetchFirstData.forEach((value,key) => {
    if(value.faqId === info.id) {
      value.name=info.name
      value.text=info.text

    }
   })
  localStorage.setItem('faqData',JSON.stringify(this.state.fetchFirstData))  
}

fetchFAQEditInfoSecond = (info) => {
  this.state.fetchData.forEach((value,key) => {
    if(value.faqId === info.id) {
      value.name=info.name
      value.text=info.text
    }
   })
   localStorage.setItem('faqData',JSON.stringify(this.state.fetchData))

}

changeEditUserStatus = () => {
  this.setState({
    editUserStatus:!(this.state.editUserStatus)
  })
}

handleEditFAQ = (faq) => {
  console.log('Connect');
  console.log(faq);
  this.setState({
    editFAQObject:faq
  })
}



UNSAFE_componentWillMount() {
  //check localStorage

  if(localStorage.getItem('faqData') === null) {
    localStorage.setItem('faqData',JSON.stringify(DataFAQ)) //Ban dau cho nguoi ta du lieu truoc
  }
  else {  
    // localStorage.setItem('faqData',JSON.stringify(DataFAQ)) 
    var templocal = JSON.parse(localStorage.getItem('faqData'));
    this.setState({
      fetchData:templocal
    })
  }
}

handleDeleteButton = (idFAQ) => {
  var deleteTemp = this.state.fetchData
  deleteTemp = deleteTemp.filter(item => item.faqId !== idFAQ)
  this.setState({
    fetchData:deleteTemp
  })

  localStorage.setItem('faqData',JSON.stringify(deleteTemp))
}
downloadNewDataUser = (faqQues,faqAns) => {
  var item ={}
  item.faqId = uuidv4();
  item.name = faqQues
  item.text = faqAns
  var saveItemToData = this.state.fetchData
  
  saveItemToData.push(item)
  this.setState({
    fetchData:saveItemToData
  })
   localStorage.setItem('faqData',JSON.stringify(saveItemToData))

}


  render() {
    console.log("fetch "+ this.state.fetchData.length)
  return (
    <div>
      <Header/>
      <div className="searchForm">
          <div className="container">
            <div className="row">
            <Search 
            fetchFAQEditInfo={(info) => this.fetchFAQEditInfo(info)}
            fetchFAQEditInfoSecond={(info)=>this.fetchFAQEditInfoSecond(info)}
            editUserStatus={this.state.editUserStatus}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            editFAQObject={this.state.editFAQObject}
            />

            <div className="col-12"> <hr/></div>

            <ImportSchema dataFAQProps={this.state.fetchData}
            handleDeleteButton={(idFAQ) => this.handleDeleteButton(idFAQ)}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            handleEditFAQ = {(faq)=>this.handleEditFAQ(faq)}
            handleFirstSchema={this.state.fetchFirstData}
            />
              <AddNew 
              downloadNewDataUser={(faqQues,faqAns) => this.downloadNewDataUser(faqQues,faqAns)}/>
              </div>
              </div>
            </div>
    </div>
  );
  }
}

export default App;
