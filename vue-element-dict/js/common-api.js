//获取字典接口 
export function getDictCodeApi(options) {
  var promise = new Promise(function(resolve) {
    const dictCodeList = {
      "FRUITS": [
        {
          "value": "1",
          "label": "西瓜"
        },
        {
          "value": "2",
          "label": "草莓"
        },
        {
          "value": "3",
          "label": "莲雾"
        },
        {
          "value": "4",
          "label": "荔枝"
        },
        {
          "value": "5",
          "label": "青梅"
        },
        {
          "value": "6",
          "label": "芒果"
        },
        {
          "value": "7",
          "label": "火龙果"
        },
        {
          "value": "8",
          "label": "山竹"
        },
        {
          "value": "9",
          "label": "橙子"
        },
        {
          "value": "10",
          "label": "人参果"
        }
      ],
      "SPORTS": [
        {
          "value": "1",
          "label": "篮球"
        },
        {
          "value": "2",
          "label": "足球"
        },
        {
          "value": "3",
          "label": "乒乓球"
        },
        {
          "value": "4",
          "label": "羽毛球"
        },
        {
          "value": "5",
          "label": "网球"
        },
        {
          "value": "6",
          "label": "保龄球"
        },
        {
          "value": "7",
          "label": "水球"
        },
        {
          "value": "8",
          "label": "台球"
        },
        {
          "value": "9",
          "label": "跑步"
        },
        {
          "value": "10",
          "label": "游泳"
        }
      ],
      "AAC004": [{
        "value": "1",
        "label": "男"
      }, {
        "value": "2",
        "label": "女"
      }, {
        "value": "9",
        "label": "未说明性别"
      }],
      "STATUSHIERARCHY": [{
        "value": "5",
        "label": "Lv5认证"
      }, {
        "value": "4",
        "label": "Lv4认证"
      }, {
        "value": "3",
        "label": "Lv3认证"
      }],
      "AAC058": [{
        "value": "01",
        "label": "居民身份证(户口簿)"
      }, {
        "value": "02",
        "label": "中国人民解放军军官证"
      }, {
        "value": "03",
        "label": "中国人民武装警察警官证"
      }],
      "AAC005": [{
        "value": "01",
        "label": "汉族"
      }, {
        "value": "02",
        "label": "蒙古族"
      }, {
        "value": "20",
        "label": "傈傈族"
      }],
      "LEGAL_STATUS": [{
        "value": "000",
        "label": "锁定"
      }, {
        "value": "001",
        "label": "正常"
      }],
      "PERSON_TYPE": [{
        "value": "005",
        "label": "民营企业代表"
      },{
        "value": "004",
        "label": "个体工商户"
      }, {
        "value": "003",
        "label": "机关事业单位法人"
      }, {
        "value": "002",
        "label": "社团法人"
      }, {
        "value": "001",
        "label": "企业法人"
      }],
      "UNIT_TYPE": [{
        "value": "3",
        "label": "地税编号"
      }, {
        "value": "2",
        "label": "统一信用代码"
      }, {
        "value": "1",
        "label": "组织机构代码"
      }],
      "MCC_TYPE": [{
        "value": "1",
        "label": "农,林,牧,渔业"
      }, {
        "value": "10",
        "label": "金融业"
      }, {
        "value": "11",
        "label": "房地产业"
      }],
      "UNIT_STATUS": [{
        "value": "000",
        "label": "注销"
      }, {
        "value": "001",
        "label": "正常"
      }]
    }

    let codeData = {}

    if (options&&options.type) {
      const typeList = options.type.split(",")
      for (let i = 0; i < typeList.length; i++) {
        const type = typeList[i]
        codeData[type] = dictCodeList[type]
      }
    } else {
      codeData = dictCodeList
    }
    const data = {
      "code": 0,
      "data": {
        dictCodeList: codeData,
        verssion: "0.0.2"
      },
      message: "成功",
      timestamp: "1594565635",
      type: "info"
    }
    resolve(data)
  })
  return promise
}

//获取全局配置  包含版本号
export function getGlobalConfigApi() {
  return new Promise((resolve, reject) => {
    resolve({verssion: "0.0.2"})
  })
}