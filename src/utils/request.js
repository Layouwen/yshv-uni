import { host } from '../config/host'

const post = ({
    url,
    data = {},
    header = {}
}) => {
    console.log(url, data, header)
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

const get = () => {

}

const request = {
    post,
    get,
}

export default request