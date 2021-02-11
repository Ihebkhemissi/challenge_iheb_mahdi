import React from 'react';
 

const ListItem = ({listItem}) => {
    
    return (
        <div>
            {listItem.map(el=><p>{el} <button onClick={this.Delete(this, ListItem)}>delete</button></p>)
            
            }
            
        </div>
        
    )  
    
}

export default ListItem


