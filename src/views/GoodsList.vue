<template>
  <div>
    <nav-header></nav-header>
    <!-- 面包屑(插槽) -->
    <nav-bread>
      <span>goodlist</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" @click="sortGoods">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterBy-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" @click="sumPrice()" v-bind:class="{'cur':priceChecked=='all'}">All</a></dd>             
              <dd v-for="(price,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.startPrice}}-{{price.endPrice}}</a>
              </dd>
            </dl>
          </div> 
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>              
                <li v-for="item in goodsList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'../../static/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">￥{{item.salePrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:void(0);" class="btn btn--m">加入购物车</a>
                    </div> 
                  </div>
                </li>
              </ul>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click='closePop'></div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import '../assets/css/base.css'
import '../assets/css/checkout.css'
import '../assets/css/product.css'

import NavHeader from './../components/NavHeader'//nav-header标签
import NavFooter from './../components/NavFooter'
import NavBread from './../components/NavBread'
// import Modal from './../components/Modal'
import axios from 'axios'
export default{
  data(){
    return {
      goodsList:[],
      busy:true,
      sortFlag:true,//升序
      pageSize:8,
      page:1,
      
      priceFilter:[
        {startPrice:'0.00',
          endPrice:'500.00'
        },
        {startPrice:'500.00',
          endPrice:'1000.00'
        },
        {startPrice:'1000.00',
          endPrice:'2000.00'
        }
      ], 
      priceChecked:'all',
      filterBy:false ,
      overLayFlag:false      
    }          
  },        
  components:{
    NavHeader,
    NavFooter,
    NavBread,
  },
  mounted:function(){
    this.getGoodsList();//初始化加载商品列表
  },
  methods:{
    getGoodsList(flag){
      let param={
        page:this.page,
        pageSize:this.pageSize,
        sort:this.sortFlag?1:-1
      }      
      // "/goods"设置的代理，对应的后台网址'http://localhost:3000'
      axios.get("/goods",{params:param}).then((response)=>{
        var res=response.data;
        if(res.status==="0"){
          if(flag){
            this.goodsList=this.goodsList.concat(res.result.list)
            if(res.result.count==0){
              this.busy=true;
            }else{
              this.busy=false;
            }
          }else{ 
            this.goodsList=res.result.list;
            this.busy=false
          }
        }else{
          this.goodsList=[];
        }
      })
    }, 
    sortGoods(){
      this.sortFlag=!this.sortFlag;
      this.page=1;
      this.getGoodsList(true);
    },   
    showFilterPop(){
      this.filterBy=true;
      this.overLayFlag= true
    },
    setPriceFilter(index){
      this.priceChecked=index;
      this.closePop();
    },
    closePop(){
      this.showFilterPop=false;
      this.overLayFlag= false 
    },
    loadMore(){
      this.busy=true;     
      setTimeout(()=>{
        this.page++;
        this.getGoodsList(true);
      },500)
    }
  }
}
</script>
