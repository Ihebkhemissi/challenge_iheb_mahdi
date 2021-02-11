import './App.css';
import AddItem from './Compo/addItem/AddItem';
import ListItem from './Compo/listItem/ListItem';
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ListItem: ["task1","task2"] 

    }
     }
    handlItem=(text)=>{
        this.setState({ListItem:this.state.ListItem.concat(text)})
    }
     handleDelete() {
        this.Delete(this.props.ListItem)}
 
  render() { 

    return (  
      <div>
        <AddItem handlItem={this.handlItem} />
        <ListItem listItem = {this.state.ListItem}/>
      </div>
    );
  }
}
 
export default App;
