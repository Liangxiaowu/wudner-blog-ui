<template>
    <div class="list">

            <div class="blog-main-list" v-for="item in article.list" :key="item.id" @click="toDetail(item.id)">
                <i class="blog-main-list-icon">{{ item.category.name }}文章</i>
                <img :src="item.imageUrl" alt="" class="list-logo">
                <div class="blog-main-list-text">
                    <p class="blog-main-list-text-title">{{ item.title }}</p>
                    <p class="blog-main-list-text-bottom">
                        <i-col span="8">
                            <Icon type="ios-clock"></Icon>
                            {{ item.createdTime }}
                        </i-col>
                        <i-col span="8">
                            <Icon type="ios-eye"></Icon> 浏览({{ item.readNumber }})
                        </i-col>
                        <i-col span="8">
                            <span class="pl"><Icon type="ios-chatboxes"></Icon> 评论(0)</span>
                        </i-col>
                    </p>
                </div>
            </div>

            <div class="page">
                <Page
                        :total="article.page.total"
                        :current="article.page.index"
                        :page-size="article.page.size"
                        @on-change="pChange"
                ></Page>
            </div>
    </div>

</template>

<script>
    export default {
        name: "list",
        props:{
            article: Object,
            default () {
                return {}
            }
        },
        data(){
            return {
                page:{
                    index:1,
                    size:10,
                    total:50
                }
            }
        },
        mounted(){

        },
        methods: {
            pChange(i){
                console.log(i)
            },
            toDetail(id){
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>
<style>
    .blog-main-list{
        position: relative;
        width: 80%;
        height: 200px;
        background: #fff;
        margin-top: 20px;
        padding: 20px;
        margin-left: 10%;
        -moz-box-shadow: 0 1px 6px rgba(0,0,0,.2);
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        border-radius: 5px;
    }
    .blog-main-list-icon{
        position: absolute;
        top:10px;
        left:0px;
        padding: 5px 10px;
        background: #2d8cf0;
        color: #fff;
        font-style:normal;
        -moz-box-shadow: 2px 4px 6px rgba(0,0,0,.2);
        box-shadow: 2px 4px 6px rgba(0,0,0,.2);
        border-radius:  0 5px 5px 0;

    }
    .blog-main-list:hover{

        -moz-box-shadow: 4px 4px 6px rgba(0,0,0,.2);
        box-shadow: 4px 4px 6px rgba(0,0,0,.2);
    }
    .blog-main-list img{
        width: 25%;
        height: 150px;
        float: left;
        /*border: 1px solid #ccc;*/
    }
    .blog-main-list-text{
        width: 70%;
        float: left;

    }
    .blog-main-list-text .pl{
        color: #2d8cf0;

    }
    .blog-main-list-text-title{
        display: block;
        height: 100px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .blog-main-list-text-bottom{
        margin-top: 40px;
        color: #787878;
    }
    .page{
        margin: 50px 0;
    }

</style>
<style scoped>

</style>