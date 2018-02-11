<template>
 <!-- 轮播图部分 -->
 <div class="slider">
     <template>
         <div>
         <img :src="sliderList[nowIndex].imgSrc" :title="sliderList[nowIndex].title"/>
             <ul class="slideBottom">
                <a href="#">
                    <li v-for="(item,index) in sliderList" @click="goto(index)">
                        {{ index + 1 }}
                    </li>  
                </a>
             </ul>
             <div class="prev">
                <a href="#" @click="prev">
                    <img src="../assets/arrowLeft.png">
                </a>
             </div>
             <div class="next">
                <a href="#" @click="next">
                    <img src="../assets/arrowRight.png">
                </a>
             </div>
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
       }
   },
   data () {
     return {
         nowIndex : 0,
     }
   },
   methods: {
       goto(index){
           this.nowIndex = index;
       }
   },
 }
</script>

<style scoped>
.slider{
    position: relative;
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

.next{
    right: 0;
}
 
.prev:hover , .next:hover{
    opacity: 1;
} 

</style>
