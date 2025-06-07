const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmw8p5u/",
            name: "ssmw8p5u",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmw8p5u/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "数学辅导微信小程序"
        } 
    }
}
export default base
