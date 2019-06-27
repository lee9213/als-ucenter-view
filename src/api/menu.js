import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/sys/menu/list',
    method: 'post',
    params
  })
}
