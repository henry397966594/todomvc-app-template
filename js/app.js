(function (window) {
	'use strict';
	var todos = [{
			text: '吃饭',
			completed: true
		},
		{
			text: '睡觉',
			completed: false
		},
		{
			text: '吃饭',
			completed: true
		},

	]
	new Vue({
		el: '#app',
		data: {
			title: '美香时钟',
			todos: todos,
			text: ''

		},
		methods: {
			add() {
				if (this.text.trim().length === 0) {
					return
				}
				this.todos.push({
					text: this.text,
					completed: false
				})
				this.text = ''
			},
			destory:function(text){
				let todoIndex
				this.todos.find((todo,index)=>{
					if(todo.text===text){
						todoIndex=index
						
					}
				})
				this.todos.splice(todoIndex,1)
			},
		
		}
	})

})(window);
