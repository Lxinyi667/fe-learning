const { createApp ,  ref , reactive } = Vue;
createApp({
    setup() {
    const currentIdx = ref(0);
    const tab = reactive([
        {
            name: "资源",
            count: 3,
        },
        {
            name: "成员",
            count: 31,
        },
        {
            name: "活动",
            count: 13,
        },
        {
            name: "分组",
            count: 5,
        },
     ]);
    const contents = reactive([
        {
             list: ["1ntro-to-Vue3.pdf","计数器练习.pdf", "选项卡练习.pdf"],
        },
        {
             list: ["ll", "xx", "yiyi", "chuchu", "CC"],
        },
        {
             list: ["uni-app 练习", "计数器练习", "选项卡练习"],
        },
        {
    list: [
        "Vue 3 起步",
        "Composition API",
        "Vue 路由",
        "Pinia 状态管理",
        "综合案例",
          ],
        },
     ]);
    // 改变 currentIdx 的值为当前点击项的索引
    const changeTab = (index) => {
        currentIdx.value = index;
     };
    return {
        currentIdx,
        tab,
        contents,
        changeTab,
     };
     },
    }).mount("#app");
