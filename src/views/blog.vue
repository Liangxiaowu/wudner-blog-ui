<template>

    <div class="blog">
        <Row>
            <i-col span="24">
                <div class="blog-header">
                    <Row>
                        <i-col :xs="2" :sm="4" :md="6" :lg="8">
                            <div @click="toIndex()" class="logo"></div>
                        </i-col>
                        <i-col :xs="20" :sm="16" :md="12" :lg="8">
                            <div class="blog-header-menu">
                                <Menu mode="horizontal" active-key="1" :name="search">
                                    <div class="layout-assistant">
                                        <Menu-item v-for="me in menuList"  :key=me.id :name=me.name @click.native="toList(me.name)">
                                            {{ me.name }}
                                        </Menu-item>
                                    </div>
                                </Menu>
                            </div>
                        </i-col>
                        <i-col :xs="2" :sm="4" :md="6" :lg="8">
                            <i-input size="large"  icon="ios-search" v-model="search" placeholder="请输入..."  class="blog-header-search" @keyup.enter.native="toSearch()" ></i-input>
                        </i-col>
                    </Row>
                </div>

            </i-col>
        </Row>
        <Row style="background: rgba(246,248,250,1)">
            <div class="blog-main" >
                <i-col span="16">
                    <router-view  :article="article"   v-if="this.$router.currentRoute.path != '/detail'"></router-view>
                    <router-view v-else></router-view>
                </i-col>

                <i-col span="8">
                    <div class="blog-main-right">
                        <view-about />
                        <view-hotspot />
                    </div>
                </i-col>
            </div>
        </Row>
    </div>
</template>

<script>
    import About from "../components/blog/about"
    import Hotspot from "../components/blog/hotspot"
    export default {
        name: "blog",
        components:{
            "view-about":About,
            "view-hotspot": Hotspot,
        },
        data(){
            return {
                search: '',
                menuList: [

                ],
                article:{
                    page:{
                        index:1,
                        size:10,
                        total:50
                    },
                    list:[]
                },
            }
        },
        mounted() {
            this.getArticle(1,10)
            this.getMenu();
        },
        methods: {
            toIndex() {
                this.$router.push('/');
            },
            toList(name){
                this.getArticle(0, this.article.page.size, "", name);
            },
            toSearch(){
                let keyword = this.search.replace(/^\s+|\s+$/g,"");
                if(keyword){
                    this.getArticle(0, this.article.page.size, keyword);
                }
            },
            pChange(i){
                console.log(i)
            },
            getArticle(pageNo, pageSize, keyword="", tag=""){

                let url = "/api/article/"

                let data = {
                    pageNo:pageNo,
                    pageSize:pageSize
                }
                if(keyword){
                    data.keyword = keyword;
                }
                if(tag){
                    data.tag = tag;
                }
                let _that = this;

                this.getRequest(url, data).then(resp => {
                    let respone = resp.data.data;
                    let list = respone.list;
                    list.forEach(function (item, i) {
                        let str = "";
                        switch(item.category.name){
                            case "PHP":
                                str = _that.$store.state.listImg.php
                                break;
                            case "Java":
                                str = _that.$store.state.listImg.java
                                break;
                            case "Linux":
                                str = _that.$store.state.listImg.linux
                                break;
                            default:
                                str = _that.$store.state.listImg.default
                                break;
                        }
                        list[i].imageUrl = str
                    })

                    _that.article = {
                        page:{
                            index:respone.pageNum,
                            size:respone.pageSize,
                            total:respone.total
                        },
                        list:respone.list
                    }
                });
            },
            getMenu(){
                let url = "/api/article/menu"
                let _that = this;
                this.getRequest(url, {}).then(resp => {
                    _that.menuList = resp.data.data;
                });
            }
        }
    }
</script>

<style>
    .blog-header{
        width: 80%;
        margin-left: 10%;
        height: 60px;
    }
    .blog-header .logo{
        background: url("../assets/logo1.png") no-repeat;
        background-size: auto 100%;
        width: 160px;
        height: 55px;
        margin-left: 10%;
    }

    .blog-header-search{
        margin-top: 10px;
        width: 60% !important;
    }

    .blog-header-search:focus-within{
        width: 100% !important;
    }
    .blog-main{
        width: 80%;
        margin-left: 10%;
        height: auto;
        margin-top: 20px;
        overflow:hidden;
    }

    .blog-main-right{
        margin-top: 20px;
    }
</style>
<style scoped>
    .ivu-menu-horizontal.ivu-menu-light:after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: white;
        position: absolute;
        bottom: 0;
        left: 0;
    }

</style>
