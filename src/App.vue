<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="w1200 auto">
      <header class="header">
        <div class="l">
          <img src="./assets/images/logo.jpg" class="reslogo" />
          <span class="vm f20">分享时刻</span>
        </div>
        <div class="l pct50 mt20">
          <div class="pct50 rel tc auto">
               <form action="">
                    <div class="linebd lh28 form-group">
                        <input v-model="wd" @keyup="keyup($event)" @keydown="keydown($event)" type="text" placeholder="请输入关键词" class="inputText tc l form-control" />
                        <i class="dib vm iconsearch l"></i>
                       
                    </div>
                     <ul class="list-group" v-if="showList">
                        <li class="list-group-item list-group-item-text" v-for="(item,index) in arr" :key="item.id" :class="{'list-group-item-info':index==listIndex}" @click="click($event)">{{item}}</li>
                        </ul>
                </form>
          </div>
        </div>
        <div class="r mt20">
          <a href class="resbtn on">首页</a>
          <a href class="resbtn">热门趋势</a>
          <a href class="resbtn">月刊</a>
        </div>
      </header>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
      return{
          wd:'',//搜索的关键词
          arr:[],//用于储存关键词的搜索词条
          listIndex:-1,//设置初始索引，数组从0开始，因此初始成-1,
          showList:false
      }
  },
  methods:{
    //这个函数我们在input 标签输入关键词的时候不断的给百度服务器发送请求获取搜索词条，并且不断的复制给data中的数组arr
    keyup(event){
      //如果我按的是上下键，那么就不发送请求了
      //console.log(event);
      this.showList=true;
      if(event.keyCode==38||event.keyCode==40||event.keyCode==13) return ;
      var url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
      this.$http.jsonp(url,{
        params:{
          wd:this.wd
        },
        jsonp:'cb'
      }).then(res=>{
        //console.log(res);
        this.arr=res.data.s;//把百度服务器返回的数据传给arr数组
      })
    },
    //监听鼠标的点击事件
    //如果鼠标点击每一行的文字，则点击事件中的event.explicitoriginalTarget.data代表关键词
    //如果点击每一行的空白处，则点击事件中的event.explicitoriginTarget.innerText代表关键词
    click(event){
          this.showList=false;
          window.open("https://www.baidu.com/s?wd="+this.wd);
          // if(event.explicitOriginalTarget.data!=undefined){
          //   this.wd=event.explicitOriginalTarget.data;
          //   window.open("https://www.baidu.com/s?wd="+this.wd);
          // }else if(event.explicitOriginalTarget.innerText!=undefined){
          //   this.wd=event.explicitOriginalTarget.innerText;
          //   window.open("https://www.baidu.com/s?wd="+this.wd);
          // }
        },
        //监听键盘的事件
        //如果按down，则增加当前listIndex+1，因此arr[this.listIndex]就能代表当前的词条
        //我们通过对listIndex的修改来得到当前词条在arr中的索引，然后就可以得到词条的具体信息，然后发送请求了
        keydown(event){
          //console.log(event);
          //下键：40 上键：38
          if(event.keyCode==38){
            //按的上键
            this.listIndex--;
            if(this.listIndex<0){
              this.listIndex=this.arr.length-1;
            }
            this.wd=this.arr[this.listIndex];
          }
          else if(event.keyCode==40){
            //说明你按的是下键
            this.listIndex++;
            if(this.listIndex>this.arr.length-1){
              this.listIndex=0;
            }
            this.wd=this.arr[this.listIndex];
          }else if(event.keyCode==13){
            //如果你按的是enter，那么就跳转到百度搜索结果
            window.open("https://www.baidu.com/s?wd="+this.wd);
          }
 
        }
  
  }
};

</script>

<style scoped>
@import "./assets/css/index.css";
</style>
