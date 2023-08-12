
import { Navigate, useNavigate } from 'react-router-dom';
import './App.css';

export default function App() {
  const navigate = useNavigate()
  return (
    <>
      
      <div className='background'> 
        <div className='colored'>
          
          <img className='logo' src='./logo.png' height={250}></img>
          <p className='header'>Books Are A Uniquely Portable Magic</p>
          <div className="button">
            <button className='library' onClick={()=> navigate("/dashboard")} >Enter Library</button>
            <a href='https://www.figma.com/file/xEyokoO4VlzDyvjntlrOjL/Library-Management-System?type=design&node-id=7%3A10&mode=design&t=7qnUEAADmSKgXk7t-1' target='_blank' className='figma' >Figma Link</a>
          </div>
          
      
        </div>

      </div>
      
      


    </>
  )
}

