import { host } from '../config/host'

const post = ({
    url,
    data = {},
    header = {}
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: 'POST',
            url: 'https://' + host + '/api/' + url,
            data,
            header,
            success: res => resolve(res),
            fail: err => reject(err)
        });
    })
}

const get = ({
    url,
    data = {},
    header,
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: 'GET',
            url: 'https://' + host + '/api/' + url,
            data,
            header,
            success: res => resolve(res),
            fail: err => reject(err)
        });
    })
}

const request = {
    post,
    get,
}

export default request