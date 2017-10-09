/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
const HOST = 'http://localhost:3000';
export const get = (url) => {
  return fetch(HOST+url, {
    "method": "get",
    credentials: 'include',//可以跨域携带cookie
    headers: {
      "Accept": "application/json"
    }
  }).then(res => res.json())
}

export const post = (url, data) => {
  return fetch(HOST+url, {
    "method": "post",
    credentials: 'include',//可以跨域携带cookie
    headers: {
      'Content-Type': "json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}