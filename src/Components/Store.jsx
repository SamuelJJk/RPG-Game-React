import React from 'react'
import TextBox from './TextBox'
import '../store.css'
import Items from './Items'
import Preview from './Preview'
import InfoBox from './InfoBox'


function Store() {
  return (
    <div className='storeWindow'>
            <Items className="storeItems"/>
            <Preview className="storePreview"/>
    </div>
  )
}

export default Store
