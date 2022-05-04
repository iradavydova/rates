import React from 'react'
import './tariff.css'

class Tariff extends React.Component {
    render() {
    const {name, price, speed, isBigger, priceColor, nameColor} = this.props;
    
    return (
        <div className={'rate_card'+(isBigger?' rate_card_big':'')}>
        <div className='rate_name' style = {{backgroundColor: nameColor}}>{name}</div>
        <div className='rate_price' style = {{backgroundColor: priceColor}}><a className='small_font'>руб</a>{price}<a className='small_font'>/мес</a></div>
        <div className='rate_speed'>{speed}</div>
        <div className='rate_extra'>Объем включенного трафика не ограничен</div>
    </div>
    )
}}

export default Tariff
