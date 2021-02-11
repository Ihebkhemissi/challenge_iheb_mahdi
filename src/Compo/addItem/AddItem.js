import React from "react"

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item : "" }
    }
    handChange=(e)=>{
        this.setState({item: e.target.value})
    }
    handlAdd=()=>{
this.props.handlItem(this.state.item) 
this.setState({item : ""})
    }
    render() { 
        return (  
            <div>
                <input  value={this.state.item}onChange={this.handChange} />
                <button onClick={this.handlAdd}>Add</button>
            </div>
         );
    }
}
 
export default AddItem ;