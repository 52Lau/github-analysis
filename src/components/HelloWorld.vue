<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="cl mt20">
      <div class="cl">&emsp;&emsp;</div>
      <div class="w1200 auto">
        <div class="cl">
          <div class="mt20 contentWrap">
            <!-- <swiper :options="swiperOption" v-if="infos2.length">
            <swiper-slide v-for="item in infos2" :key="item.id">
              <div class="listFill-left rel l">
                    <img href class="media-content media-content01" :src="item.thumbnail" alt />
                    <span class="overlay"></span>
                    <div class="list-content">
                      <a href="javascript:viod(0)" class="list-title" target="_blank">{{item.text}}</a>
                    </div>
                  </div>
                 
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>-->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in infos2" :key="item.id">
                  <div class="listFill-left rel l">
                    <img href class="media-content media-content01" :src="item.picurl" alt />
                    <span class="overlay"></span>
                    <div class="list-content">
                      <a href="javascript:viod(0)" class="list-title" target="_blank">{{item.description}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="cl contShadow mt20 pt15 pb15 f14 trans mb30 ovh">
          <div class="ml20 mr20 tl navi">
            <a class="item-list pl20 pr20 pt5 pb5 mr20 on l">热门趋势</a>
            <div class="r pt5">
              Language
              <details class="details-reset details-overlay select-menu select-menu-modal-right hx_rsm">
                  <summary class="btn-link select-menu-button" aria-haspopup="menu">Google Nexus 6</summary>
                  <details-menu class="select-menu-modal position-absolute right-0" style="z-index: 99;">
    <div class="select-menu-header">
      <span class="select-menu-title">Select a language</span>
      <button class="hx_rsm-close-button d-none ml-2 btn-link close-button" type="button" data-toggle-for="select-menu-language"><svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
    </div>

    <div class="js-select-menu-deferred-content">
      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="text-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter languages" aria-label="Type or choose a language" autofocus="" autocomplete="off">
        </div>
      </div>
    </div>

    <div class="select-menu-list" data-pjax="">

      <div data-filterable-for="text-filter-field" data-filterable-type="substring">
          <a class="select-menu-item " role="menuitemradio" href="/trending/c++?since=daily" aria-checked="false" data-pjax="">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
            <span class="select-menu-item-text" data-menu-button-text="">C++</span>
          </a>
          <a class="select-menu-item " role="menuitemradio" href="/trending/html?since=daily" aria-checked="false" data-pjax="">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
            <span class="select-menu-item-text" data-menu-button-text="">HTML</span>
          </a>
          <a class="select-menu-item " role="menuitemradio" href="/trending/java?since=daily" aria-checked="false" data-pjax="">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
            <span class="select-menu-item-text" data-menu-button-text="">Java</span>
          </a>
      </div>
    </div>

    <div class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"></path></svg>
    </div>
  <div class="sr-only" data-filterable-notice="" aria-live="polite">524 results found.</div></details-menu>
              </details>
              </div>
          </div>
        </div>
        <div class="bgwh mt20">
          <!-- <table border="0" class="restable mt20" >
            <thead>
              <tr class="tablegrey">
                <th class="n pt15 pb15">编号</th>
                <th class="n pt15 pb15">品牌名称</th>
                <th class="n pt15 pb15">创建时间</th>
                <th class="n pt15 pb15">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td class="n pt15 pb15">{{}}</td>
                <td class="n pt15 pb15">{{item.source}}</td>
                <td class="n pt15 pb15">{{item.ptime}}</td>
                <td class="n pt15 pb15">
                  <a href="javascript:void(0)" class="blue" @click="del(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>-->
          <div class="tablePage tc">
           
           
            <!-- 分页-->
            <!-- <v-pagination :total="600"></v-pagination> -->
            <v-pagination
              class="mt20"
              @page-change="pageChange"
              @page-size-change="pageSizeChange"
              :total="total"
              :page-size="pageSize"
              :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
  // name: "HelloWorld",
  // data() {
  //   return {};
  // }
};
</script>
<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { stringify } from "querystring";
import tableData from "../mock/tableData1.js";
// import pageComponent from '../components/pageComponent'
// import 'axios/dist/axios.js'
// import axios from 'axios';
// import '../assets/js/swiper.min.js';
import qs from  'qs'

export default {
  name: "HelloWorld",
  data() {
    return {
      //   positionsInd: 0,
      //   list: [
      //     { id: 1, name: "品牌1", ctime: new Date() },
      //     { id: 2, name: "品牌2", ctime: new Date() }
      //   ],
      infos2: [],
      obj: {
        // page: 1,
        // count: 2,
        // type: "video"
        limit:5
      },
      tabdata: [
        {
          title: "",
          content: ""
        }
      ],
      // showSwiper () {
      // 	return this.list.length
      // },
      list: [],
      pageIndex: 1,
      pageSize: 10,
      total: "",
      tableConfig: {
        tableData: [],
        columns: [
          {
            field: "id",
            title: "编号",
            width: 150,
            columnAlign: "center"
          },
          {
            field: "name",
            title: "姓名",
            width: 400,
            columnAlign: "center"
          },
          {
            field: "age",
            title: "年龄",
            width: 400,
            columnAlign: "center"
          },
          {
            field: "sex",
            title: "性别",
            width: 250,
            columnAlign: "center"
          }
        ]
      }
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    del: function(id) {
      if (!confirm("您真的要删除数据吗？")) {
        return;
      }
      var index = this.list.findIndex(function(obj) {
        return (obj.id = id);
      });
      this.list.splice(index, 1);
    },
    positionsTab: function(ind) {
      console.log(ind);
      this.positionsInd = ind;
    },
    _initswiper() {
      this.swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // breakpoints: {},
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper{ params: this.obj }
      });
    },
    _initlist() {
      var url = "http://lau52y.frpgz1.idcfengye.com/api/github/listTopCms";
      // var url = "/api/api/github/listTopCms";
      this.$axios.get(url,{ params: this.obj }).then(res => {
        this.infos2 = res.data.data;
        console.log(res.data.data)
      });
    },
    _initTable() {
      var url = "https://www.apiopen.top/journalismApi";
      this.$axios.get(url).then(respone => {
        this.list = respone.data.data.toutiao;
        var sss = respone;
        //console.log(sss);
      });
    },
    getTableData() {
      this.tableConfig.tableData = tableData.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      this.total = tableData.length;
    },
    pageChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.getTableData();
      console.log(pageIndex);
    },
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
      this.getTableData();
    }
  },
  mounted() {
    this.$nextTick(function() {
      this._initlist();
      this._initswiper();
      this._initTable();
    });
  }
};
</script>

<!-- $nextTick -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/index.css";
@import "swiper/dist/css/swiper.min.css";

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.selectType {
  border: 1px #d6d7dc solid;
  border-radius: 20px;
  padding: 3px 4px;
  outline: none;
  width: 150px;
  color: #6a6b6e;
}
</style>
