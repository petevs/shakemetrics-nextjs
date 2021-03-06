export const makeDummy = (snapshotObj) => {

    const snapshotList = []

    for (const date in snapshotObj) {
        snapshotList.push({
            ...snapshotObj[date],
            date: date
        })
    }

    return {
        snapshotObj: { ...snapshotObj },
        snapshotList: [ ...snapshotList ],
    }
}