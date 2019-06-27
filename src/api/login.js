import request from '@/utils/request'

export function loginUsername(data) {
  return request({
    url: '/login/username',
    method: 'post',
    data
  })
}

export function getLoginUserInfo(token) {
  return request({
    url: '/login/user/info',
    method: 'get',
    headers: { Authorization: token }
  })
}
