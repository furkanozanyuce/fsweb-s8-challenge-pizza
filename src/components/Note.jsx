import React, { useState } from 'react';

import '../style.css';




function Note({ quantity, totalPrice, onIncrement, onDecrement }) {

    return (
      <>
        <label className='note'>
          <h2>Sipariş Notu</h2>
          <textarea name="note" id='note' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
        </label>

        <div className="order-container">
        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button className="decrement" onClick={onDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="increment" onClick={onIncrement}>+</button>
        </div>

        {/* Order Summary */}
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
          <button className="order-button">SİPARİŞ VER</button>
        </div>
      </div>
      </>
    )
  }
  
  export default Note