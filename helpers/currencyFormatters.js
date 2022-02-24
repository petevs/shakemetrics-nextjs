export const toBitcoin = (num) => {
    if(num === 0 ){ 
        return {
            text: '0.0000000',
            raw: 0
        }
    }

    return {
        text: Math.round(num * 100000000) / 100000000,
        raw: Math.round(num * 100000000) / 100000000
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
        raw: val
    }
}
