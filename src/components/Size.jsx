import React, { useState } from 'react';

import '../style.css';

const initalHamur = [
    {name: "İnce"},
    {name: "Normal"},
    {name: "Kalın"}
]

function Size() {
    const [hamur, setHamur] = useState(initalHamur);

    return (
      <>
        <div className='size-main'>
            <div className='size-boyut'>
                <label className='title-hamur'> Boyut Seç <span className='span-hamur'>*</span></label>
                <div className='size-boyut2'>
                <label>
                  <input type="radio" name="size"value="kucuk" />
                  Küçük
                </label>
                <label>
                  <input type="radio" name="size" value="orta" />
                  Orta
                </label>
                <label>
                  <input type="radio" name="size" value="buyuk" />
                  Büyük
                </label>
                </div>
            </div>
            <div className='size-hamur'>
            <label htmlFor="dough" className='title-hamur'>Hamur Seç <span className='span-hamur'>*</span></label>
                <select id="dough" name="dough" defaultValue={"-1"} value={hamur.dough} >
                  <option value="-1" disabled={true}>Hamur Kalınlığı</option>
                  {initalHamur.map((dough) => <option key={dough.name} value={dough.name}>{dough.name}</option>)}
                </select>
            </div>
        </div>
      </>
    )
  }
  
  export default Size