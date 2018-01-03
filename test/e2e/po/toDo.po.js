// Object Page
let toDoElements = function() {
   this.inputField = element(by.model('todoList.todoText'));
    this.add = function(){
      return element.all(by.css('[ng-submit="todoList.addTodo()"]')).all(by.css('.btn-primary'));
    };
    this.check = function(item){
        element.all(by.repeater('todo in todoList.todos')).then(function(oneItem){
          console.log('item length:' + oneItem.length);
            for(let i=0;i<oneItem.length;i++){
                oneItem[i].getText().then(function(textFromRepeat){
                   if(textFromRepeat === item){
                       expect(textFromRepeat).toBe(item);
                   }
                });
            }
        });
    };
};
module.exports = new toDoElements();
