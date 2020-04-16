import React,{ Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Components/App';
import ImportSchema from './ImportSchema';
import AddNew from './AddNew';
import DataFAQ from './dataFAQ.json'
import DataRating from './rating.json'
import Search from './Search';
import temp from './temp';
import Header from './Header';
import HeaderRating from './HeaderRating';
import ImportRating from './ImportRating';
import FormEditRating from './FormEditRating';
import ImportHTML from './ImportHTML';




class App extends Component {
  constructor(props) {    
    super(props);
    this.state = {
        fetchData: [],
        fetchFirstData:temp,
        editUserStatus:false,
        editFAQObject: {},
        fetchRating:DataRating,
        editRatingStatus:false,
        editRatingObject: {}
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
// Rating
changeEditRatingStatus = () => {
  this.setState({
    editRatingStatus:!(this.state.editRatingStatus)
  })
}

handleEditRating = (rat) => {
  console.log('Connect');
  console.log(rat);
  this.setState({
    editRatingObject:rat
  })
}
fetchRatingEditInfo = (info) => {
  console.log('Thong tin da sua: ' + info.name)
  this.state.fetchRating.forEach((value,key) => {
    if(value.idRating === info.idRating) {
      value.bestRating=info.bestRating
      value.ratingCount=info.ratingCount
      value.ratingValue=info.ratingValue
      value.image=info.image
      value.name=info.name
      value.description=info.description
    }
   })
}
  render() {
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
            <ImportSchema dataFAQProps={this.state.fetchData}
            handleDeleteButton={(idFAQ) => this.handleDeleteButton(idFAQ)}
            changeEditUserStatus={() => this.changeEditUserStatus()}
            handleEditFAQ = {(faq)=>this.handleEditFAQ(faq)}
            handleFirstSchema={this.state.fetchFirstData}
            />
              <AddNew 
              downloadNewDataUser={(faqQues,faqAns) => this.downloadNewDataUser(faqQues,faqAns)}/>
                 <ImportHTML fetchFirstData = {(info) => this.fetchFAQEditInfo(info)}
               handleFirstSchema={this.state.fetchFirstData}
               dataFAQProps={this.state.fetchData}
              />
              </div>
              </div>
            </div>
            <HeaderRating/>
            <div className="searchForm">
          <div className="container">
            <div className="row">
              <FormEditRating changeEditRatingStatus={() => this.changeEditRatingStatus()}
              editRatingStatus = {this.state.editRatingStatus}
              editRatingObject={this.state.editRatingObject}
              fetchRatingEditInfo={(info)=>this.fetchRatingEditInfo(info)}
              />
              <ImportRating dataRating={this.state.fetchRating}
              changeEditRatingStatus={() => this.changeEditRatingStatus()}
              handleEditRating={(rat) => this.handleEditRating(rat)}
              />
             
              </div>
              </div>
              </div>
    </div>
  );
  }
}

export default App;
