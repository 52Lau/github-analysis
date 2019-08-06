<template>
  


 <div class="tablePage">
        <h1>表格+分页</h1>
        <!-- 表格-->
        <v-table 
            :columns="tableConfig.columns" 
            :table-data="tableConfig.tableData" 
            :paging-index="(pageIndex-1)*pageSize">
        </v-table>
        <!-- 分页-->
        <v-pagination 
            @page-change="pageChange" 
            @page-size-change="pageSizeChange" 
            :total="total" :page-size="pageSize" 
            :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
        </v-pagination>
    </div>
</template>
<script>
export default {
  
};
</script>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { stringify } from "querystring";
// import 'axios/dist/axios.js'
// import axios from 'axios';
// import '../assets/js/swiper.min.js';
export default {
  name: "pageComponent",
    props: {
      // 分页配置
      pageConfig: {
        type: Object, require: true, default() {
          return {
            pageSize: 10,     //一页的数据条数
            pageNo: 0,        //当前页的索引
            total: 0,         //总的数据条数
            pageTotal: 0      //总的页数
          }
        }
      }
    },
    data() {
      return {
        //默认显示
        showPageNo:8,
        currentPage:0
      }
    },
 methods: {
      prePage(){
        this.currentPage -= 1
        this.$emit('changeCurrentPage',this.currentPage)
      },
      nextPage(){
        this.currentPage += 1
        this.$emit('changeCurrentPage',this.currentPage)
      },
      changeCurrentPage(i){
        this.currentPage = i
        this.$emit('changeCurrentPage',this.currentPage)
      }
    },
    computed: {
      //计算总页数，如果传了pageTotal,直接取pageTotal的值，如果传了total，那么根据pageSize去计算
      pageTotal(){
        const config = this.pageConfig
        if(config.pageTotal){
          return config.pageTotal
        }else {
          if(config.pageSize && config.total){
            return Math.ceil(config.total/config.pageSize)
          }else {
            return 0
          }
        }
      }
    },
    created: function () {
      this.currentPage = this.pageConfig.pageNo || 0
    }
};
</script>

<style>
  .pageComponent button{
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline:none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;}
      .pageComponent button:disabled{
        color: #c0c4cc;
        cursor: not-allowed;
      }
      .pageComponent button.active{
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
</style>
