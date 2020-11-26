const Client = require('aliyun-api-gateway').Client;
const client = new Client('YOUR_APP_KEY','YOUR_APP_SECRET');


async function getTemplateList() { // 获取库存
    var url = 'http://filpos.api.harmay.com/vip/coupon/tp/list'

    var result = await client.post(url, {
        data: {
            page_no: 1,
            page_size: 10,
        },
        headers: {
            accept: 'application/json'
        }
    });
    console.log(result)
}
getTemplateList()