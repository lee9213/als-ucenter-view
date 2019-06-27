import request from '@/utils/request'

export function loginUsername(data) {
  return request({
    url: '/login/username',
    method: 'post',
    headers: { 'client_id': process.env.VUE_APP_CLIENT_ID, 'client_secret': process.env.VUE_APP_CLIENT_SECRET },
    data
  })
}

export function getLoginUserInfo() {
  return request({
    url: '/login/user/info',
    method: 'get'
  })
}
