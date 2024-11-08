import '../style.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback,
  } from 'reactstrap';


function FormBottom() {

    return (
    <>
      <div className='buttons'>
        <Button color='white' className='primary-button food-button'>
            <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/1.svg"/>
            <p className='button-p'>YENİ! Kore</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/2.svg"/>
            <p className='button-p'>Pizza </p> 
            </div>           
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/3.svg"/>
            <p className='button-p'>Burger</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/4.svg"/>
            <p className='button-p'>Kızatmalar</p> 
            </div>      
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/5.svg"/>
            <p className='button-p'>Fast Food</p> 
            </div>          
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc'>
            <img src="Assets/Iteration-2-aseets/icons/6.svg"/>
            <p className='button-p'>Gazlı İçecek</p>  
            </div>         
        </Button>
      </div>
      
      <div className='cards'>
        <div className='card1'>
            <div>
                <img src="Assets/Iteration-2-aseets/cta/kart-1.png"/>
            </div>
            <div className='card1-contains'>
                <h2>Özel</h2>
                <h2>Lezzetus</h2>
                <p>Position: Absolute Acı Burger</p>
                <div className='defg'>
                <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                </div>
            </div>
        </div>
        <div className='card2-container'>
            <div className='card2'>
                <div>
                    <img src="Assets/Iteration-2-aseets/cta/kart-2.png"/>
                </div>
                <div className='card2-contains'>
                    <h2>Hackathlon</h2>
                    <h2>Burger Menü</h2>
                    <div className='defg'>
                    <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                    </div>
                </div>
            </div>
            <div className='card3'>
                <div>
                    <img src="Assets/Iteration-2-aseets/cta/kart-3.png"/>
                </div>
                <div className='card3-contains'>
                    <h2>Çoooook hızlı</h2>
                    <h2>npm gibi kurye</h2>
                    <div className='defg'>
                    <Button color='white' className='primary-button card-button'><p>SİPARİŞ VER</p></Button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className='bottom-section'>
        <p className='italic-p'>en çok paketlenen menüler</p>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className='buttons2'>
        <Button color='white' className='primary-button food-button'>
            <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/1.svg"/>
            <p className='button-p'>Ramen</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/2.svg"/>
            <p className='button-p'>Pizza </p> 
            </div>           
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/3.svg"/>
            <p className='button-p'>Burger</p> 
            </div>         
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/4.svg"/>
            <p className='button-p'>French Fries</p> 
            </div>      
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/5.svg"/>
            <p className='button-p'>Fast Food</p> 
            </div>          
        </Button>
        <Button color='white' className='primary-button food-button'>
        <div className='abc def'>
            <img src="Assets/Iteration-2-aseets/icons/6.svg"/>
            <p className='button-p'>Soft Drinks</p>  
            </div>         
        </Button>
        </div>
      </div>
      <div className='bottom-section2'>
        <div className='foods'>
            <div className='food'>
                <img src="Assets/Iteration-2-aseets/pictures/food-1.png"/>
                <div>
                    <p><strong>Terminal Pizza</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='food'>
                <img src="Assets/Iteration-2-aseets/pictures/food-2.png"/>
                <div>
                    <p><strong>Position Absolute Acı Pizza</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='food'>
                <img src="Assets/Iteration-2-aseets/pictures/food-3.png"/>
                <div>
                    <p><strong>useEffect Tavuklu Burger</strong></p>
                    <div>
                        <p className='p-text'>4.9</p>
                        <div className='text'>
                            <p><strong>60₺</strong></p>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <footer>
        <div className='footer-content'>
            <div className='left-side'>
                <img className='wer' src="Assets/Iteration-2-aseets/footer/logo-footer.svg"/>
                <div className='ul-list'>
                    <ul>
                        <li>
                            <img src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"/>
                            341 Londonderry Road, Istanbul Türkiye
                        </li>
                        <li>
                            <img src="Assets/Iteration-2-aseets/footer/icons/icon-2.png"/>
                            aciktim@teknolojikyemekler.com
                        </li>
                        <li>
                            <img src="Assets/Iteration-2-aseets/footer/icons/icon-3.png"/>
                            +90 216 123 45 67
                        </li>
                    </ul>
                </div>
            </div>
            <div className='middle-side'>
                <p className='footer-titles'>Hot Menu</p>
                <div className='p-list'>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
            </div>
            <div className='right-side'>
                <p className='footer-titles'>Instagram</p>
                <div className='images'>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-0.png"/>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-1.png"/>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-2.png"/>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-3.png"/>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-4.png"/>
                    <img src="Assets/Iteration-2-aseets/footer/insta/li-5.png"/>
                </div>
            </div>
        </div>
        <div className='end'>
            <p>© 2023 Teknolojik Yemekler.</p>
            <img src="Assets/Iteration-2-aseets/footer/twitter.svg"/>
        </div>
      </footer>
    </>
    )
  }
  
  export default FormBottom