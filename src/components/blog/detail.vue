<template>
    <div class="detail">
        <div class="detail-header">
            <h3 class="detail-header-title">{{ articleDetail.title }}</h3>
            <p class="detail-header-table">
                <i-col span="6" >
                    <span class="author" >
                        <Icon type="ios-person"></Icon>
                        wudner
                    </span>
                </i-col>
                <i-col span="6">
                    <Icon type="ios-clock"></Icon>
                    {{ articleDetail.createdTime }}
                </i-col>
                <i-col span="6">
                    <Icon type="ios-eye"></Icon> 浏览({{ articleDetail.readNumber }})
                </i-col>
                <i-col span="6">
                    <span class="pl"><Icon type="ios-chatboxes"></Icon> 评论(0)</span>
                </i-col>
            </p>
        </div>

        <div class="text-context len-context-detail">
            <ul>
                <!--内容-->
                <li>
                    <div id="quill-container" class="ql-snow">
                        <div class="ql-editor" v-html='articleDetail.content'>
                        </div>
                        <Spin size="large" fix v-if="loading"></Spin>
                    </div>
                </li>
            </ul>
        </div>
        <div class="detail-comment">

        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                articleDetail:[]
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init(){
                this.$Loading.start();
                let _that = this;
                let url = "/api/article/"+this.$route.params.id
                this.getRequest(url, {}).then(resp =>{
                    _that.articleDetail  = resp.data.data;
                    this.$Loading.finish();
                })
            }
        }

    }
</script>

<style >
    @import "../../static/css/quill.snow.css";
    @import "../../static/css/quill.core.css";
    @import "../../static/css/quill.bubble.css";
    @import "../../static/css/blog-detail.css";

    .author{
        color: #f04141
    }
    .pl{
        color: #2d8cf0;
    }
    .detail{
        width: 80%;
        margin-left: 10%;
        margin-top: 20px;
        background: #fff;
        padding-bottom: 30px;
        border-radius: 10px;
    }
    .detail .detail-header{
        padding: 10px 0;
        border-bottom: 1px solid #e7e7e7;
        overflow:auto

    }
    .detail .detail-header-title{
        padding-top: 20px;
        width: 95%;
        font-size: 24px;
        word-break: break-all;
        margin: 0 auto;
        text-align: left;

    }
</style>