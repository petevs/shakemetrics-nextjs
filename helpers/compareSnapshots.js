export const compareSnapshots = ( startEntry, endEntry, parentKey, childKey, ) => {

    const change = {}

    if(childKey){
        for (const key in endEntry[parentKey][childKey]){

            const last = endEntry[parentKey][childKey][key]
            const start = startEntry[parentKey][childKey][key]
            const diff = last - start
            const percent = `(${(diff / last * 100).toFixed(2)}%)`

            change[key] = {
                change: diff,
                percent: percent,
            }
        }
        return change
    }

    for (const key in endEntry[parentKey]){

        const last = endEntry[parentKey][key]
        const start = startEntry[parentKey][key]
        const diff = last - start
        const percent = `(${(diff / last * 100).toFixed(2)}%)`

        change[key] = {
            change: diff,
            percent: percent,
        }
    }

    return change

}