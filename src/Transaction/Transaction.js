

import './Transaction.css'
import Transactioncard from '../transactioncard/transactioncard'
import axios from 'axios'
import { useEffect , useState} from 'react'


export default function Transaction(){
    const [data, setdata] = useState(false)
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/getTransaction')
        .then(
            (res)=>{
                setdata(res.data)
                console.log(res.data)
            }
        )
      
    }, [])
    
    return(
        <>
            <div className='transaction-container'>
                {data && 
                    data.map((item)=>{
                        return(
                            <>
                                <Transactioncard tname={item['name']} date ={item['dot']}  amount={item['amount']}/>
                                <div className='linee'></div>
                            </>
                            
                            
                        )
                    })
                }
                {/* <Transactioncard 
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
 */}

            </div>
        </>


    )
}