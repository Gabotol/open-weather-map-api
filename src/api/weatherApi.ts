import axios from 'axios';
import { API_BASE_URL, password, username } from '../constants/apiUrl';
import getOauthToken from './oauth';

interface GetMarketDataParams {
  filterStateBase: string[];
  selectedGraphs: string[];
  selectedDateFrom: string;
}

interface MarketDataResponse {
  // Define the structure of the response data here
  // This is a placeholder, adjust it according to the actual response structure
  [key: string]: any;
}

export const getMarketData = async ({
  filterStateBase,
  selectedGraphs,
  selectedDateFrom
}: GetMarketDataParams): Promise<MarketDataResponse> => {
  // const token = await getOauthToken();
  const selectedDateTo = new Date(selectedDateFrom);
  selectedDateTo.setDate(selectedDateTo.getDate() + 1);
  const formattedDate = selectedDateTo.toISOString().split('T')[0];
  selectedDateTo.setDate(selectedDateTo.getDate() + 1);

  const response = await axios.get<MarketDataResponse>(`https://' + ${username} + ':' + ${password} + '@api.meteomatics.com/${selectedDateFrom}T00:00:00Z--${formattedDate}T00:00:00Z/${selectedGraphs.join(',')}/${filterStateBase.join('+')}/json?model=mix`, {
    headers: {
       Authorization: `Basic ${btoa(username + ":" + password)}`
    }
  });

  return response.data;
};
