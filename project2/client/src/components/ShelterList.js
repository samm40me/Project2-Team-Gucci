import React from 'react';

const ShelterList = (props) => {
    const textList = props.text.map((text) => {

         return (
             <li key = {text.id}>
                     date = { text.date }, capacity =
                         { text.capacity }, overnight = { text.overnight }
             </li>
         )
         ;
        
    })
    return (
        <div>
            {textList}
        </div>
    )
}

export default ShelterList;