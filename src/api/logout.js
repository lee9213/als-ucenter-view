import request from '@/utils/request'

export function logout(token) {
  return request({
    url: '/logout',
    method: 'post',
    headers: { Authorization: token }
  })
}
