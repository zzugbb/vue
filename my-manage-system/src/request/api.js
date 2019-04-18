import {post, get} from './request';

export function login(data) {
  return post('/api/login', data);
}

export function getBills() {
  return get('/api/bill/getBills');
}