var app=new Vue({
    el:".todobody",
    data:{
        list:[],
        inputValue:"",
    },
    methods:{
        add:function(){
            if (this.inputValue!=""){
                this.list.push(this.inputValue);
                this.inputValue="";
            }
        },
        remove:function(index){
            this.list.splice(index,1);
        },
        change:function(index){
            if (this.inputValue!=""){
                this.list.splice(index,1,this.inputValue);
                this.inputValue="";
            }
        },
        clear:function(){
            this.list=[];
        }
    },
})