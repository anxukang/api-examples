const Client = require('aliyun-api-gateway').Client;
const client = new Client('YOUR_APP_KEY','YOUR_APP_SECRET');

/*
    api  库存 https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_query.php
    平台货品 https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_api_goods_query.php

*/

async function getSkuStock() { // 获取库存
  var url = 'http://erp.api.harmay.com/erp/v1/stock_query.php';

  var result = await client.post(url, {
    data: {
        spec_no: 'AHCZ00030019'  // spec_no, barcode
    },
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
  });
  console.log(result)
}

async function getPlatformGoods(){ // 获取平台货品
    var url = 'http://erp.api.harmay.com/erp/v1/vip_api_goods_query.php';

  var result = await client.post(url, {
    data: {
        start_time: '2020-10-04 00:00:00',
        end_time: '2020-10-05 00:00:00',
        page_size: 100,
        page_no: 1,
        shop_no: 'FLIPOS_XIAOCHENGXU'
    },
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
  });
  console.log(result)
}

// getSkuStock()
getPlatformGoods()

