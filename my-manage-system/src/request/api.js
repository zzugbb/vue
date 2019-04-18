import {post, get} from './request';

export function login(data) {
  return post('/api/login', data);
}

export function saveBill(data) {
  return post('/api/bill/savebill', data);
}

export function getBills() {
  return get('/api/bill/getbills');
}