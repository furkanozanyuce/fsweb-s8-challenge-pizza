import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function MainPage() {

    return (
        <>
        <div className='main-page'>
            <div className='h1-main'>
                <img src='/Assets/Iteration-1-assets/logo.svg'></img>
            </div>
            <div>
                <div className='main-page-h1'>
                    <h1>KOD ACIKTIRIR</h1>
                    <h1>PİZZA, DOYURUR</h1>
                </div>
                <div className='button-container'>
                    <Link to={"/orderpage"}>
                        <button className='primary-button'>ACIKTIM</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
  }
  
  export default MainPage