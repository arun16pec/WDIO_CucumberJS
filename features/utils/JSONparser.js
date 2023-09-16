import fs from 'fs'
export const JSONParser=(datapath)=>{
    let testDataJSON=fs.readFileSync(datapath,'utf-8')
    return JSON.parse(testDataJSON)
}