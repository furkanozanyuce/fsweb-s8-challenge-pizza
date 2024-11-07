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
                <p>lezzetin yolda</p>
                <h1>SİPARİŞ ALINDI</h1>
            </div>
            <div>
              {orderData ? (
                <div className="order-details">
                  <p><strong>ID:</strong> {orderData.id}</p>
                  <p><strong>Sipariş Zamanı:</strong> {new Date(orderData.createdAt).toLocaleString()}</p>
                  <p><strong>Boyut:</strong> {sizeHarf(orderData.size)}</p>
                  <p><strong>Hamur Tipi:</strong> {getDough(orderData.dough)}</p>
                  <p><strong>Adet:</strong> {orderData.quantity}</p>
                  <p><strong>Ek Malzemeler:</strong> {getLabels(orderData.malzemeler)}</p>
                  <p><strong>Not:</strong> {orderData.note}</p>
                  <p><strong>Ek Malzeme Fiyat:</strong> {orderData.extraCost}₺</p>
                  <p><strong>Toplam Fiyat:</strong> {orderData.totalPrice}₺</p>
                </div>
              ) : (<p>Sipariş Yükleniyor, Lütfen Bekleyiniz...</p>)
              }
            </div>
        </div>
      </>
  )
}

export default SuccessPage
