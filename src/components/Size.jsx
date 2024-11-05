import React, { useState } from 'react';

import '../style.css';


function Size({onChange, value}) {

    return (
      <>
        <div className='size-main'>
            <div className='size-boyut'>
                <label className='title-hamur'> Boyut Seç <span className='span-hamur'>*</span></label>
                <div className='size-boyut2'>
                <label>
                  <input type="radio" name="size" value="kucuk" onChange={onChange} />
                  Küçük
                </label>
                <label>
                  <input type="radio" name="size" value="orta" onChange={onChange} />
                  Orta
                </label>
                <label>
                  <input type="radio" name="size" value="buyuk" onChange={onChange} />
                  Büyük
                </label>
                </div>
            </div>
            <div className='size-hamur'>
            <label htmlFor="dough" className='title-hamur'>Hamur Seç <span className='span-hamur'>*</span></label>
                <select id="dough" name="dough" defaultValue={"-1"} value={value} onChange={onChange} >
                  <option value="-1" disabled={true}>Hamur Kalınlığı</option>
                  <option value="ince">İnce</option>
                  <option value="normal">Normal</option>
                  <option value="kalin">Kalın</option>
                </select>
            </div>
        </div>
      </>
    )
  }
  
  export default Size