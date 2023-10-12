// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
let cmp = {
  template: '<p> 로컬</p>'
}
vue.component('todo-footer',{
 template: '<p>This is another child global component</p>'
});
var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  },
  components: { 'todo-list': cmp}
 
  // 실습 #2 - `todo-list` 컴포넌트 지역 등록
  // <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
});
