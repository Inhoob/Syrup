import axios from 'axios';
import {MAIN_PAGE_INFO, ORDER_PAGE_INFO} from './urls';

export const getMainPageInfo = async () => {
  try {
    const res = await axios.get(MAIN_PAGE_INFO);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderPageInfo = async () => {
  try {
    const res = await axios.get(ORDER_PAGE_INFO);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
