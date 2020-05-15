import axios from "axios";

export const fetchData = async () => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=28723b92f60d2ad265df38631d9e153c`);
    const {city, list, cnt} = data
    const modifieddata = {city, list, cnt} 
    return modifieddata
}

export const getDateAPI = async () => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=28723b92f60d2ad265df38631d9e153c`);
    const dateAndTime = []
    data.list.map(element =>{
        dateAndTime.push(element.dt_txt);
    });
    return dateAndTime
}
