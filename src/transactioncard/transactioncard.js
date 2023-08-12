
import './transactioncard.css'

export default function Transactioncard(props){
    return(
        <>

            <div className='card'>
                <div className='transaction-profile'>T</div>
                <div className='name-time'>
                    <p className='tname'> {props.tname}</p>
                    <p className='date-time'>{props.date}</p>

                </div>
                <div className='space'></div>
                <p className='amount'>{props.amount}</p>

            </div>
        
        </>
    )
}