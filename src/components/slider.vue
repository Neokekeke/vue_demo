<template>
 <!-- 轮播图部分 -->
 <div class="slider" @mouseover="clearInterVal" @mouseout="slideShow">
     <template>
         

        <!-- 重点：这里是在页面上有两张照片，通过isShow来控制显示 -->
        <transition name="slide-trans">
            <img v-if="isShow" :src="sliderList[nowIndex].imgSrc" 
                               :title="sliderList[nowIndex].title"
                               :class="action == true ? prevAct : nextAct">
        </transition>
        

             <ul class="slideBottom">
                <a href="#">
                    <li v-for="(item,index) in sliderList" @click="goto(index)"
                        :class="{indexShow1 : nowIndex === index}">
                        {{ index + 1 }}
                    </li>  
                </a>
             </ul>
             <div class="prev">
                <a href="#" @click="goto(prevIndex)">
                    <img src="../assets/arrowLeft.png">
                </a>
             </div>
             <div class="next">
                <a href="#" @click="goto(nextIndex)">
                    <img src="../assets/arrowRight.png">
                </a>
             </div>

     </template>
 </div>
</template>

<script>
 export default {
   props:{
       sliderList : {
           type : Array,
           required : true,
           default : []
       },
       intervalTime : { //轮播的时间
           type : Number,
           default : 2500,
           required : true
       }
   },
   data () {
     return {
         nowIndex : 0,
         intervalId : '', //计时器标识
         isShow : true, //控制图片显示与否
         action : null
     }
   },
   computed: {
       //向前一张图片
       prevIndex(){
           if(this.nowIndex == 0){
             return this.sliderList.length-1; 
           }
           else{
             return this.nowIndex - 1;
           }
       },

       //向后一张图片 
       nextIndex(){
           if(this.nowIndex == this.sliderList.length-1){
             return 0;
           }
           else{
             return this.nowIndex + 1;  
           }
       },
   },
   methods: {
       //右下角的图片游标
       goto(index){
           this.isShow = false;
           setTimeout(()=>{
             this.isShow = true;
             this.nowIndex = index;
           },10)
          
       },

       //轮播
       slideShow(){
           this.intervalId = setInterval(
               ()=>{
                 this.goto(this.nextIndex);
               },this.intervalTime);
       },

       //清除轮播计时器
       clearInterVal(){
           clearInterval(this.intervalId);
       }
   },
   mounted () {
        this.slideShow();
   }
 }
</script>

<style scoped>
.slide-trans-enter-active{
    transition: all 0.5s;
}
.slide-trans-enter{
    transform: translateX(700px);
}
.slide-trans-old-leave-active{
    transition: all 0.5s;
    transform: translateX(-700px);
}
.slider{
    position: relative;
    overflow: hidden;
}
.slideBottom{
    position: absolute;
    right: 0;
    top: 295px;
    color: white;
}
.slideBottom li{
    float: left;
    margin: 0 5px 0 5px;
    box-sizing: border-box;
    padding: 2px 5px;
    text-align: center;
    opacity: 0.8;
}
.slideBottom li:hover{
    opacity: 1;
}

.prev,.next{
    width: 75px;
    height: 75px;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    opacity: 0.8;
}

.prev{
    left: 0;
}

.prevAct{
    transition: all 0.5s;
    transform: translateX(700px);
}

.nextAct{
    transition: all 0.5s;
    transform: translateX(-700px);
}

.next{
    right: 0;
}

.prev:hover , .next:hover{
    opacity: 1;
} 

.indexShow1{
    text-decoration: underline;
    border: 1px solid white;
}

</style>
