const massageData = (data)=>{
    const keys = data ?(data[0].split(',')):[];
    const rawData = data? (data.slice(1)):[];
    const massagedData = rawData.map((row)=>{
        const rowData = row.split(',');
        const newRow = {};
        keys.forEach((key,index)=>{
            newRow[key] = rowData[index];
        })
        return newRow;
    })
    return massagedData;
}
export default massageData;