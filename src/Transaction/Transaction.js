

import './Transaction.css'
import Transactioncard from '../transactioncard/transactioncard'

export default function Transaction(){
    return(
        <>
            <div className='transaction-container'>
                <Transactioncard 
                tname = 'Prerna Verma'
                date = 'August 11, 2023 at 5:45 PM'
                amount='Rs. 400'/>

                <div className='linee'></div>

                <Transactioncard 
                tname = 'Prerna Verma'
                date = 'August 11, 2023 at 5:45 PM'
                amount='Rs. 400'/>

                <div className='linee'></div>

                <Transactioncard 
                tname = 'Prerna Verma'
                date = 'August 11, 2023 at 5:45 PM'
                amount='Rs. 400'/>

                <div className='linee'></div>

                <Transactioncard 
                tname = 'Prerna Verma'
                date = 'August 11, 2023 at 5:45 PM'
                amount='Rs. 400'/>


            </div>
        </>


    )
}