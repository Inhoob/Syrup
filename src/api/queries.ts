import axios from 'axios';
import {MAIN_PAGE_INFO, ORDER_PAGE_INFO} from './urls';

export const getMainPageInfo = async () => {
  const res = await axios.get(MAIN_PAGE_INFO);
  return res.data;
};

export const getOrderPageInfo = async () => {
  const res = await axios.get(ORDER_PAGE_INFO);
  return res.data;
};
