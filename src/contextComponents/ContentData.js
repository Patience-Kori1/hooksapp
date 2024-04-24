import React, {useContext} from 'react';
import { ColorContext, UserContext } from './MyContext'

function ContentData() {

    const user = useContext(UserContext);  // get the data from UserContext
    const color = useContext(ColorContext)    // get the data from ColorContext

    return (
        <div style={{color:color}}>
            <ul>
                <li> Nom :  {user.name} </li>
                <li> Age :  {user.age} </li>
            </ul>
        </div>
    )

}

export default ContentData
