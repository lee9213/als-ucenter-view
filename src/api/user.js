import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/username',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sys/user/1/detail',
    method: 'get',
    headers: { Authorization: token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
