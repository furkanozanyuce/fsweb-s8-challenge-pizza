import React, { useState } from 'react';

import '../style.css';




function Note({ quantity, totalPrice, onIncrement, onDecrement }) {

    return (
      <>
        <label className='note'>
          <h2>Sipariş Notu</h2>
          <textarea name="note" id='note' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
        </label>

        <div className='bottom-side'>
          <div className="quantity-selector">
            <button className="decrement btn" onClick={onDecrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="increment btn" onClick={onIncrement}>+</button>
          </div>
          
          <div className='bottom-most'>
          <div className="order-summary">
            <h3>Sipariş Toplamı</h3>
            <div className="summary-item">
              <span>Seçimler</span>
              <span>{(totalPrice - (quantity * 85.50)).toFixed(2)}₺</span>
            </div>
            <div className="summary-item total">
              <span>Toplam</span>
              <span>{totalPrice.toFixed(2)}₺</span>
            </div>
          </div>
          <button className="order-button btn">SİPARİŞ VER</button>
          </div>
        </div>
      </>
    )
  }
  
  export default Note