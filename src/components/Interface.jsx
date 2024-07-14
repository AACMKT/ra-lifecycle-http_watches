import gmt from '../utils/timezones'
import { useState } from 'react'

export const Interface = ({ handleClock }) => {
    gmt.sort((a, b) => {if (a[0][0] < b[0][0]) {
        return -1;
    }
    if (a[0][0] > b[0][0]) {
        return 1;
    }
    return 0;});

    const [city, setCity] = useState({city:"", gmt: ""});
    const [offset, setOffset] = useState('');
  

    const getGMT = (city) => {
        let gmtOffset = (gmt.find(el => el[0] === city))[1]
        setOffset(gmtOffset)
        return gmtOffset
    }

    const checkInput = (e) => {
        let value = e.target.value;
        console.log('here', value, /GMT[+ -][0-9]{2}:[0-9]{2}/.test(value))
        if (/GMT[+ -][0-9]{2}[:][0-9]{2}.*/.test(value)){
            setCity({...city, gmt: value});
            setOffset(value)
        }
        else {
            setOffset(city.gmt)
        }

    }


    return(
        <>
        <div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Offset:</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={ offset } onChange={ (e) => setOffset(e.target.value) } onBlur={(e) => checkInput(e)}/>
        </div>
        </div>
        <div className="input-group">
            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" name="GMT-selector" defaultValue="choose" onChange={(e) => setCity({city: e.target.value, gmt: getGMT(e.target.value)})}>
                <option value="choose">Choose city...</option>
                {gmt.map((el, index) => {
                    return(
                        <option key={ index } value={ el[0] }>{ el[0] }</option>
                    )
                })}
            </select>
            <button className="btn btn-outline-secondary" type="button" onClick={() => {handleClock(city)}}>Add</button>
        </div>
        </>
    )
}