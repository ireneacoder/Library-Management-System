

import './button.css'


export default function Button(props){
    return(
        <>  
            <button className='button' onClick={() => props.onClick(true)}> {props.buttonname} </button>
            
        </>
    )
}