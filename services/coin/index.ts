import dayjs from "dayjs";
import clientApi from "../client-api";

export const getRanks = async (params: any = undefined) => {
  const response = await clientApi.req('https://www.binance.com/dapi/v1/ticker/24hr', "GET", "req", params);
  const records = await response.json()
  return records.map((record: any) => ({
    key: '1',
    logo: 'https://static.vieon.vn/vieon-images/fb-epl-logo/everton.svg',
    name: 'ARS',
    price: 10,
    change: 11,
  }));
};