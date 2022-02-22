export const compareSnapshots = ( firstEntry, lastEntry, familyKey, parentKey, childKey, ) => {

    if(childKey){
        const first = firstEntry[familyKey][parentKey][childKey]
        const last = lastEntry[familyKey][parentKey][childKey]

        const diff = last - first
        const percent = `${(diff / last * 100).toFixed(2)}%`

        return {
            change: diff,
            percent: percent
        }
    }

        const first = firstEntry[familyKey][parentKey]
        const last = lastEntry[familyKey][parentKey]

        const diff = last - first
        const percent = `${(diff / last * 100).toFixed(2)}%`

        return {
            change: diff,
            percent: percent
        }
    }


    // const change = {}

    // if(childKey){
    //     for (const key in lastEntry[familyKey][parentKey]){

    //         const last = lastEntry[parentKey][childKey][key]
    //         const start = firstEntry[parentKey][childKey][key]
    //         const diff = last - start
    //         const percent = `(${(diff / last * 100).toFixed(2)})%`

    //         change[key] = {
    //             change: diff,
    //             percent: percent,
    //         }
    //     }
    //     return change
    // }

    // for (const key in lastEntry[familyKey][parentKey]){

    //     const last = lastEntry[parentKey][key]
    //     const start = firstEntry[parentKey][key]
    //     const diff = last - start
    //     const percent = `(${(diff / last * 100).toFixed(2)})%`

    //     change[key] = {
    //         change: diff,
    //         percent: percent,
    //     }
    // }

    // return change