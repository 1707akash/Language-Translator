
import React from 'react'

const SelectLang = ({label, langData, onChange}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <select name={label} id={label} onChange={(e)=>onChange(e.target.value)}>
            {
                Object.entries(langData).map(([languageName,languageCode])=>(
                    <option value={languageCode}>{languageName}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectLang