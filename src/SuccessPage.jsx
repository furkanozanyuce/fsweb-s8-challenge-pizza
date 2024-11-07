import './style.css';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SuccessPage({orderData, extras, initalHamur}) {

  //malzemeleri mapler
  const getLabels = (Extras) => {
    return Extras
      .map((value) => {
        const extra = extras.find((extra) => extra.value === value);
        return extra ? extra.label : value;
      })
      .join(", ");
  };

  //hamur tipini seçer
  const getDough = (doughType) => {
    const dough = initalHamur.find((dough) => dough.name.toLowerCase() === doughType.toLowerCase());
    return dough ? dough.name : doughType;
  };

  //hamur boyutunun baş harfini büyütür ve kucuk se ü leri ve ç yi değiştirir
  const sizeHarf = (size) => {
    let buyukSize = size.charAt(0).toUpperCase() + size.slice(1);

    if (size === "kucuk") {
      buyukSize = buyukSize.replace(/u/g, "ü").replace(/c/g, "ç");
    }
    return buyukSize;
  }

  return (
      <>
        <div className='success-page'>
            <div className='h1-main2'>
                <img src='/Assets/Iteration-1-assets/logo.svg'></img>
            </div>
            <div className='success-page-h1'>
                <p className='p1'>lezzetin yolda</p>
                <h1>SİPARİŞ ALINDI</h1>
                <div className='success-p'>
                  <p>Position Absolute Acı Pizza</p>
                </div>
            </div>
            <div className='order-data'>
              {orderData ? (
                <div className="order-details">
                  <p className='pppp'>Sipariş ID: <strong>{orderData.id}</strong></p>
                  <p className='pppp'>Sipariş Zamanı: <strong>{orderData.createdAt}</strong></p>
                  <p className='pppp'>Boyut: <strong>{sizeHarf(orderData.size)}</strong></p>
                  <p className='pppp'>Hamur Tipi: <strong>{getDough(orderData.dough)}</strong></p>
                  <p className='pppp'>Adet: <strong>{orderData.quantity}</strong></p>
                  <p className='pppp'>Ek Malzemeler: <strong>{getLabels(orderData.malzemeler)}</strong></p>
                  <p className='pppp'>Not: <strong>{orderData.note}</strong></p>

                  <div className='success-main'>
                    <p className='ppp'>Sipariş Toplamı</p>
                    <div className='success-price'>
                    <p>Ek Malzemeler: <strong>{orderData.extraCost}₺</strong></p>
                    <p>Toplam: <strong>{orderData.totalPrice}₺</strong></p>
                    </div>
                  </div>

                </div>
              ) : (<p>Sipariş Yükleniyor, Lütfen Bekleyiniz...</p>)
              }
            </div>
        </div>
      </>
  )
}

export default SuccessPage
