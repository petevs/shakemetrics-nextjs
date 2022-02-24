export const toBitcoin = (num, price) => {

    console.log(price)

    if(num === 0 ){ 
        return {
            text: '0.0000000',
            raw: 0,
            type: 'BTC',
            // inCAD: num * price.BTC,
            // inBTC: num,
            // inETH: num / price.ETH

        }
    }

    return {
        text: Math.round(num * 100000000) / 100000000,
        raw: Math.round(num * 100000000) / 100000000,
        type: 'BTC',
        // inCAD: num * price.BTC,
        // inBTC: num,
        // inETH: num / price.ETH
    }
  }

export const numberWithCommas = (x) => {
    
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const toCurrency = (x) => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const toDollars = (num) => {
    if(num === 0 ){ return 0.00}
    const val = Math.round(num * 100) / 100
    return {
        text: toCurrency(val),
        raw: val,
        type: 'CAD'
    }
}


export const toSats = (val) => {
    const sats = Math.round(val * 100000000)
    return `${numberWithCommas(sats)} SATS`
} 