let app = new Vue(
    {
        el: '#container-vue',
        data: {
            newToDo: '',         
            toDoList: [
                {
                    text: 'Fare la Spesa',
                    done: false
                },
                {
                    text: 'Completare la todolist',
                    done: true
                },
                {
                    text: 'Dare da mangiare al cane',
                    done: false
                },
                {
                    text: 'Rifare il letto',
                    done: false
                },
            ],
        }, 
        methods: {
            addToDo: function{
                if(this.newToDo !== ''){
                  const item = {
                    text: this.newToDo,
                    done: false,
                  };
                  this.toDoList.push(item);
                  this.newToDo = '';
                }
              },
        }
    }
)