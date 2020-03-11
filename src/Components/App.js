import React,{ Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Components/App';
import Header from './Header';
import Search from './Search';
import ImportSchema from './ImportSchema';
import AddNew from './AddNew';
import DataFAQ from './dataFAQ.json'


class App extends Component {
  constructor(props) {    
    super(props);
    this.state = {
        fetchData: [],
       
    }
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
  console.log()
}

handleDeleteButton = (idFAQ) => {
  var deleteTemp = this.state.fetchData
  deleteTemp = deleteTemp.filter(item => item.faqId !== idFAQ)
  this.setState({
    fetchData:deleteTemp
  })
  console.log('Connect')

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
  console.log('Connect')
  localStorage.setItem('faqData',JSON.stringify(saveItemToData))

}

  render() {
    // localStorage.setItem('faqData',JSON.stringify(DataFAQ))
  return (
    <div>
      <Header/>
      <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search/>
              <div className="col-12"> <hr/></div>
              <ImportSchema dataFAQProps={this.state.fetchData}
              handleDeleteButton={(idFAQ) => this.handleDeleteButton(idFAQ)}/>
            
              <AddNew downloadNewDataUser={(faqQues,faqAns) => this.downloadNewDataUser(faqQues,faqAns)}/>
              </div>
              </div>
            </div>
    </div>
  );
  }
}

export default App;
