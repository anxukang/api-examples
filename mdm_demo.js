require('dotenv').config({});

const Client = require('aliyun-api-gateway').Client;
const client = new Client(process.env.APP_KEY, process.env.APP_SECRET);


var qs = require('qs');
const base_url =  'http://mm.api.harmay.com/mm/v1'



async function getPlatformGoods() { // 获取平台货品
    var url = `${base_url}/skus`;
    let query =   {
        _start: 0,
        _limit: 2,
        'spu.class_name_contains': '正装',
        process_status: 5,
        publish_type: 1,
        is_deleted: false,
        is_photoed: false
    };
    
    query = qs.stringify(query);

    client.get(`${url}?${query}`, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    }).then(v => {
        console.log( v)
    }).catch(e => {
        console.log(Object.keys(e),e.data)
    })

}


async function getSpusCount() {

    var url = `${base_url}/spus/count`;
    let query =   {
        
        process_status: 5,
        publish_type: 1,
        goods_type: 1,
        is_deleted: false,
        
        _or: [
            { 'skus.sku_spec.texture_containss': '纸质' },
            { 'skus.sku_spec.texture': '液体' }
        ]
    };
    
    query = qs.stringify(query);

    client.get(`${url}?${query}`, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    }).then(v => {
        console.log(v)
    }).catch(e => { 
        console.log(e.message)
    })
}

async function getCategory() {
    
    var url = `${base_url}/categories`;

    client.get(`${url}`, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        }
    }).then(v => {
        console.log(v)
    }).catch(e => {
        console.log(e)
    })

}


getPlatformGoods()
// getSpusCount()
// getCategory()



/* spu
[
  {
    id: 1,
    brand: {
      id: 1,
      name: 'A.H.C',
      alias: '爱和纯',
    },
    category: {
      id: 59,
      name: 'SHEET MASKS 面贴面膜', // 类目
      category_parent: 57,
    },
    class_name: '正装',
    goods_no: 'AHCZ00030',
    is_deleted: false,
    process_status: 5,
    publish_type: 1,
    spu_desc: { 
      id: 1,
      name: 'AHC臻致玻尿酸面膜（黄金款）', //名称
      name_short: null,
      name_alias: null,
      
    },
    spu_assets: {
      id: 1,
      image_main: [Object], //主图
      images_detail: [Array], //详情图
      link: null, //link
    },
    spu_purchase: {
      id: 2,
      source_supply: null,
      is_crossborder: true, // 是否跨境
      cycle_purchase: null,
      
    },
    goods_type: 1, //商品类型
    skus: [ [Object], [Object] ],
    tags: []
  },
  {
    id: 2,
    brand: {
      id: 3,
      name: 'ANNA SUI',
      alias: null,
      code: null,
    },
    published_at: '2020-11-17T13:28:24.318Z',
    created_at: '2020-11-17T13:27:46.739Z',
    updated_at: '2020-11-17T13:37:21.313Z',
    entry_draft: null,
    entry_published: null,
    category: {
      id: 73,
      name: 'PERSONAL FRAGRANCE 香水香氛',
      category_parent: 71,
    },
    class_name: '中小样',
    goods_no: 'ANNX00200',
    is_deleted: false,
    process_status: 5,
    publish_type: 1,
    spu_desc: {
      id: 2,
      name: '筑梦天马淡香水',  
      name_short: null,
      name_alias: null,
      
    },
    spu_assets: null,
    spu_purchase: {
      id: 1,
      source_supply: 'us',
      is_crossborder: null,
      cycle_purchase: null,
      
    },
    goods_type: 1,
    skus: [ [Object] ],
    tags: []
  }
]
*/


/*  sku
    {
  id: 1,
  is_photoed: false,
  is_checkname: false,
  is_measured: false,
  status_goods: 1,
  is_deleted: false, //是否停用
  process_status: 5,
  publish_type: 1,
  spec_no: 'AHCZ00030019',
  published_at: '2020-11-17T12:35:11.561Z',
  created_at: '2020-11-17T12:35:07.300Z',
  updated_at: '2020-11-18T03:04:19.082Z',
  entry_published: null,
  entry_draft: null,
  spu: {
    id: 1,
    brand: 1,
    published_at: '2020-11-17T12:15:49.510Z',
    created_at: '2020-11-17T12:13:00.674Z',
    updated_at: '2020-11-18T02:52:38.946Z',
    entry_draft: null,
    entry_published: null,
    category: 145,
    class_name: '正装',
    goods_no: 'AHCZ00030',
    is_deleted: false,
    process_status: 5,
    publish_type: 1,
    spu_desc: 1,
    spu_assets: 1,
    spu_purchase: 2,
    goods_type: 1
  },
  entry_fullsize: null,
  entries_discounted_priced: null,
  sku_appearance: {
    id: 1,
    weight_shelf: null,
    width_package: 25,
    height_package: 240,
    shape_package: '长方体', 
    images: null,
    published_at: '2020-11-17T12:50:55.631Z',
    created_at: '2020-11-17T12:50:53.232Z',
    updated_at: '2020-11-17T13:53:49.754Z',
    sku: 1,
    length_package: 120
  },
  sku_assets: {
    id: 1,
    image_main: {
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605629622874&di=df7e3e82b760a9361cf73215f8d3164d&imgtype=0&src=http%3A%2F%2Fstatic-news.17house.com%2Fweb%2Ftoutiao%2F201705%2F14%2F1494728282840236038.png',
      type: '',
      url_thumbnail: ''
    }, // 图片
    images_detail: [ [Object], [Object] ], 
    published_at: '2020-11-17T13:15:02.557Z',
    created_at: '2020-11-17T13:09:35.057Z',
    updated_at: '2020-11-18T03:04:19.122Z',
    sku: 1
  },
  sku_desc: {
    id: 1,
    spec_name: null,
    name_label: null,
    published_at: '2020-11-17T12:53:34.294Z',
    created_at: '2020-11-17T12:53:31.894Z',
    updated_at: '2020-11-17T13:53:49.825Z', 
    name_spec: '规格:25ml*5', //规格名称
    name_package_label: '臻致玻尿酸面膜', //中文标签
    
  },
  sku_price: {
    id: 1,
    retail: 159, //零售价
    market: 239, 
    cost: null,
    retail_hk: null,
    cost_hk: null,
    cost_reference: null,
    published_at: '2020-11-17T13:21:53.291Z',
    created_at: '2020-11-17T12:54:44.894Z',
    updated_at: '2020-11-17T13:53:49.860Z',
    sku: 1
  },
  sku_taxation: null,
  sku_spec: {
    id: 1,
    expire_days: null,
    color: null,
    scent: null,
    effect: null,
    texture: '纸质',
    version: null,
    ohters: null,
    sunscreen_spf: null,
    sunscreen_pa: null,
    colorname: null,
    subversion: '黄金款',
    volume_num: 25,
    volume_unit: 'g',
    amount_num: 5,
    amount_unit: '片',
    published_at: '2020-11-17T13:03:43.882Z',
    created_at: '2020-11-17T13:01:09.225Z',
    updated_at: '2020-11-17T13:53:49.895Z',
    others: null,
    season_promoted: '四季', //季节
    sku: 1,
    volume_complex: []
  },
  barcodes: [
    {
      id: 1,
      code: '8809509188163', //条码
      is_master: 1, //是否主条码
      version: null,
      process_status: null,
      publish_type: null,
      entry_published: null,
      entry_draft: null,
      published_at: '2020-11-17T12:27:02.257Z',
      created_at: '2020-11-17T12:26:59.807Z',
      updated_at: '2020-11-17T13:53:49.649Z',
      sku: 1
    },
    {
      id: 3,
      code: '880950918816311',
      is_master: 0,
      version: null,
      process_status: 5,
      publish_type: 1,
      entry_published: null,
      entry_draft: null,
      published_at: '2020-11-18T01:17:47.920Z',
      created_at: '2020-11-18T01:17:44.978Z',
      updated_at: '2020-11-18T01:17:48.116Z',
      sku: 1
    }
  ],
  tags: [],
  entries_sample: [],
  entry_regular_priced: [],
  ingredients: []
}

*/
