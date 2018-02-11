<template>
 <div>

     <div class="app-head">
       <div class="head-inner">
         <div class="head-logo">
          <img src="../../src/assets/logo.png">
         </div>
         <div class="head-nav">
           <ul class="head-list">
             <li>登录</li>
             <li>|</li>
             <li>注册</li>
             <li>|</li>
             <li>关于</li>
           </ul>
         </div>
       </div>
       
     </div>

     <div class="app-content">

       <div class="container-left">
          <div class="index-left">       
             <!-- 左边的顶部 -->
             <!-- 可以用template套着循环数据 -->
            <div class="left-top">
              <div class="banner">
                <span>校招大厂列表</span>
              </div>

              <template v-for="listItem in productLists">
                <div class="products">
                  <h3 class="title">{{ listItem.title }}</h3>
                  <ul v-for="items in listItem.lists">
                    <li>
                      <a :href="items.url">{{ items.name }}</a> 
                      <span class="hotTitle" v-if="items.hot">Hot</span>
                    </li>     
                  </ul>
                </div>
                <span class="hr" v-if="!listItem.showHr"></span>    
              </template>       

            </div>

            <!-- 左边的底部 -->
            <div class="left-bottom">
                <div class="banner">
                  <span>最新校招信息</span>
                </div>
                <template v-for="newsItem in newLists">
                  <div class="news">
                    <ul>
                      <li>
                        <a :href="newsItem.url">{{newsItem.title}}</a>
                      </li>
                    </ul>
                  </div>
                </template>
            </div>           
        </div> <!-- index-left -->
       </div> <!-- container-left -->



        <!-- 右边 -->
        <div class="container-right">
          <div class="index-right">

            <!-- 幻灯片 -->
            <div class="right-top">
               <Slider :sliderList="sliderList"
                       :intervalTime="intervalTime"
               ></Slider>
            </div>

            <!-- 右下边的内容 -->
            <div class="right-bottom">
              
              <template v-for="(lists,index) in borderLists" >
                <a :href="lists.url">
                <div class="border-list" :class="[{'itemRight': index % 2 !== 0},lists.img]">
                  <div class="border-items" >
                      <div class="items-top">
                         {{ lists.title }}               
                      </div>                    
                  </div>
                </div>
                </a>      
              </template>
            
            </div>

          </div>
        </div>

     </div>

     <div class="app-foot">CopyRight &nbsp; © &nbsp; Neokekeke</div>

 </div>
</template>

<script>
 import axios from 'axios'
 import Slider from '../components/slider.vue'

 export default {
  components:{
    Slider,  //自己写的录播组件
  },
   data () {
     return {
        productLists : '',
        newLists : '',
        borderLists : '',
        sliderList : [], //轮播图
        intervalTime : 2500, //图片切换时间
     }
   },
   methods: {

   },
   //  生命周期钩子，页面渲染完成时
   mounted : function(){
        //获取春招大厂mock数据  
        axios.get('/getCompany').then((res)=>{
          console.log(res);
          this.productLists = res.data.productLists;
        }).catch((err)=>{
          console.log(err);
        }),

        //获取春招信息mock数据
        axios.get('/getNews').then((res)=>{
          console.log(res);
          this.newLists = res.data.newLists;
        }).catch((err)=>{
          console.log(err);
        }),

        //获取borderList的数据
        axios.get('/getBorders').then((res)=>{
          console.log(res);
          this.borderLists = res.data.borderLists;
        }).catch((err)=>{
          console.log(err);
        }),

        //获取轮播图图片
        axios.get('/getSlider').then(
          (res)=>{
            console.log(res);
            this.sliderList = res.data.sliderList;
          }
        ).catch(
          (err)=>{
            console.log(err);
          }
        )
   }
 }
</script>



<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: rgb(240, 242, 245);
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}

/* borderlists里面几个图片的样式 */
.github,.csdn,.tmall,.jd{
  width: 345px;
  height: 100%;
  opacity: 0.6;
}
.github{
   background: url("../assets/1.jpg") center center no-repeat;
}

.csdn{
  background: url("../assets/2.jpg") center center no-repeat;
}

.tmall{
  background: url("../assets/3.jpg") center center no-repeat;
}

.jd{
  background: url("../assets/4.jpg") center center no-repeat;
}

.github:hover , .csdn:hover , .tmall:hover , .jd:hover{
  opacity: 1;
  color: #fff;
      transform: scale(1.030);
}
/* *********************** */

/* 这里开始layout样式的设置 */
.app-head{
  background: rgba(54, 54, 54, 1);
  width: 100%;
  height: 90px;
}

.head-inner{
  width: 1000px;
  height: 90px;
  margin: 0 auto;
  position: relative;
}

/* 顶部logo的样式 */
.head-inner .head-logo{
  width: 50px;
  height: 50px;
  display: inline-block;
  position: absolute;
  top: 20px;
}

.head-logo img{
  width: 100%;
  height: 100%;
}

/* 顶部注册登录的样式 */
.head-nav{
  height: 30px;
  position: absolute;
  right: 0px;
  top: 30px;
}

.head-list {
  display: inline-block;
  margin-top: 5px;
}

.head-list li{
  color: rgb(178, 178, 178);
  float: left;
  padding: 5px;
  cursor: pointer;
}

/* **************** */
/* 中间content的样式 */
.app-content{
  width: 1000px;
  margin: 25px auto; 
  height: 750px;
}

.container-left{
  width: 270px;
  margin: 0 15px 15px 15px;
  float: left;
}

/* 左边导航样式 */
.container-left .index-left .left-top ,.index-left .left-bottom{
  width: 270px;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
  padding-bottom: 10px; 
}

.hr{
  display: block;
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin: 15px 0 5px 0;
}

.index-left .left-top .banner{
  width: 100%;
  height: 35px;
  background-color: rgb(79, 192, 141);
}

.left-top .banner span,.left-bottom .banner span{
  line-height: 35px;
  color: #fff;
  font-size: 15px;
  margin-left: 15px;
}

/* 左边底部的样式 */
.container-left .index-left .left-bottom{
  margin-top: 15px;
  height: 300px;
}

.left-bottom .banner{
  width: 100%;
  height: 35px;
  background-color: rgb(79, 192, 141);
}

.products{
  margin-top: 15px;
}

.products h3{
  font-size: 14px;
  margin-left: 15px;
  font-weight: bolder
}

.products ul{
  display: block;
  margin: 10px 0 10px 30px;
}

.hotTitle{
  display: inline-block;
  width: 25px;
  text-align: center;
  font-size: 12px;
  background-color: orangered;
  color: #fff;
}

.news{
  margin-top: 15px;
}

.news ul{
  margin: 0 30px;
}

/* 右边内容部分 */
.app-content .container-right{
  width: 700px;
  height : 750px;
  float: left;
  margin: 0px 0 10px 0;
}

.index-right{
  width: 100%;
  height: 320px;
}

.index-right .right-top{
  width: 100%;
  height: 100%;
}

.index-right .right-bottom{
  width: 100%;
  height: 308px;
  margin-top: 13px;
}

.border-list{
  /* overflow: hidden; */
  width: 345px;
  height: 145px;
  float: left;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0 0 5px #ddd;
  text-align: center;
  line-height: 145px;
  transition: 0.9s;
}

.border-list .border-items{
  width: 100%;
  height: 100%;
}

.itemRight{
  margin-right: 0;
  color: #000;
}

.itemBottom{
  margin-bottom: 0;
}

.items-left{

}

.items-right{

}


/* 底部 */
.app-foot{
  width: 100%;
  height: 90px;
  background-color: rgb(227, 228, 232);
  text-align: center;
  line-height: 90px;
}


</style>
