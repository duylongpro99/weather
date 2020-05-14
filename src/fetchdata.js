import axios from "axios";

export const fetchData = async () => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=28723b92f60d2ad265df38631d9e153c`);
    return data;
}

