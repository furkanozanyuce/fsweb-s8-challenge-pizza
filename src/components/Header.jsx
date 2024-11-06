import '../style.css';


function Header() {

    return (
      <>
        <div>
          <div className='h1-main'>
            <img src='/Assets/Iteration-1-assets/logo.svg'></img>
          </div>
          <div className='h1-content'>
          <p className='p-secondary'>Ansayfa - Seçenekler - <strong>Sipariş Oluştur</strong></p>
          </div>
        </div>

        <div className='main'>
          <div className='secondary'>
            <h2>Position Absolute Acı Pizza</h2>
              <div className='p'>
                  <p className='money'>85.50TL</p>
                  <p className='second'>4.9 (200)</p>
              </div>
              <p className='p-long'>Frontend Dev olarak hala position:absolute
              kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, 
              peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha 
              sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta 
              pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan 
              oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
              </p>
          </div>
        </div>
      </>
    )
  }
  
  export default Header