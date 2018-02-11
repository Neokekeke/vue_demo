import Mock from 'mockjs';

// 前面是正则，加规则类似PHP，后面是返回数据
Mock.mock(/getCompany/,{
        productLists : [
            {
              title : '互联网大厂',
              lists : [
                {
                  name : '百度',
                  url : 'https://www.baidu.com/',
                },
                {
                  name : '腾讯',
                  url : 'http://www.qq.com/',
                  hot : true
                },
                {
                  name : '网易',
                  url : 'http://www.163.com/',
                  hot : true
                },
                {
                  name : '阿里',
                  url : 'https://www.taobao.com/',
                  hot : true
                },
                {
                  name : '京东',
                  url : 'https://www.jd.com/',
                }

              ],
              showHr : false
            },
            {
              title : '热门公司',
              lists : [
                {
                  name : '唯品会',
                  url : 'https://www.vip.com/',
                  hot : true
                },
                {
                  name : 'Bigo',
                  url : 'https://www.yy.com/'
                },
                {
                  name : '金山软件',
                  url : 'http://www.kingsoft.com/'
                }
              ],
              showHr : true
            }
        ]
})

Mock.mock(/getNews/,{
        newLists: [
            {
              title : '春招校招简历模板',
              url : 'http://mp.weixin.qq.com/s/ZknmJOb1N55RxyjaVZRQ5A'
            },
            {
              title : '校招职位列表',
              url : 'http://m.ciweishixi.com/jobsearch?s_c=2'
            },
            {
              title : '春招企业时间表',
              url : 'http://mp.weixin.qq.com/s/Qlccom-Ry-WoA_6XQjji6Q'
            },
            {
              title : '求职攻略啦',
              url : 'https://mp.weixin.qq.com/mp/homepage?__biz=MjM5Mjc4NzkyNw==&hid=11&sn=1e9e25493253bc886152d86fd1888b6d&scene=18&uin=&key=&devicetype=Windows+10&version=62060028&lang=zh_CN&ascene=7&winzoom=1.375'
            },
            {
              title : '校招内推攻略',
              url : 'https://mp.weixin.qq.com/mp/homepage?__biz=MzI4MDAzMzc4MA==&hid=4&sn=11119fe365dff0f1470bfaaeb09cabb6&scene=18&uin=&key=&devicetype=Windows+10&version=62060028&lang=zh_CN&ascene=7&winzoom=1.375'
            },
            {
              title : '备战春招准备',
              url : 'http://mp.weixin.qq.com/s/G7I_jnMqRHOalufoDlpSew'
            }
          ]
})

Mock.mock(/getBorders/,{
        borderLists : [
            {
              title : '个人Github',
              url : 'https://github.com/Neokekeke',
              img : 'github'
            },
            {
              title : '',
              url : 'http://my.csdn.net/Neokekeke',
              img : 'csdn'
            },
            {
              title : '',
              url : 'https://www.tmall.com/',
              img : 'tmall'
            },
            {
              title: '',
              url : 'https://www.jd.com/',
              img : 'jd'
            }
          ]
})

Mock.mock(/getSlider/,{
        sliderList : [
          {
            title : 'vue',
            imgSrc : require('../assets/sliders/vue.jpg'), //这里用require写法，webpack打包是才能识别
          },
          {
            title : 'angular',
            imgSrc : require('../assets/sliders/ng.png'), //这里用require写法，webpack打包是才能识别
          },
          {
            title : 'react',
            imgSrc : require('../assets/sliders/react.jpg'), //这里用require写法，webpack打包是才能识别
          },
          {
            title : 'js',
            imgSrc : require('../assets/sliders/js.jpg'), //这里用require写法，webpack打包是才能识别
          },
          {
            title : 'webpack',
            imgSrc : require('../assets/sliders/webpack.png'), //这里用require写法，webpack打包是才能识别
          },
          {
            title : '超级马里奥',
            imgSrc : require('../assets/sliders/mario.jpg')
          }
      ]
})




