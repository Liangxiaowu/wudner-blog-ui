<template>
    <div class="hotspot" style="margin-top: 20px">
        <Card style="width:350px">
            <p slot="title" class="title">
                <Icon type="ios-book"></Icon>热点文章
            </p>
            <ul>
                <li v-for="item in movieList" :key=item.id>
                    <a @click="showDetail(item.id)" target="_blank">{{ item.title }}</a>
                    <span>
                        <Icon type="ios-eye"></Icon>
                    {{ item.readNumber }}
                </span>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "hotspot",
        data(){
            return {
                movieList:[
                ]
            }
        },
        mounted() {
            this.getHotpot();
        },
        methods:{
            getHotpot(){
                let _that = this;
                this.getRequest("/api/article/top").then(resp=>{
                    _that.movieList = resp.data.data;
                })
            },
            showDetail(id) {
                this.$router.push({path: `/detail/${id}`});
            }
        }
    }
</script>

<style>
    .hotspot {
        text-align: left;
    }
    .hotspot .title{
        /*color: #2d8cf0;*/
    }
    .hotspot span{
        float: right;
    }
    .hotspot li{
        overflow:auto;
        padding: 3px 0;
    }
    .hotspot a{
        float: left;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .hotspot span{
        width: 40px;
        text-align: left;
    }
</style>
<style scoped>

</style>