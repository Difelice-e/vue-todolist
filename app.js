let app = new Vue(
    {
        el: '#container-vue',
        data: {
            toDoList: [
                {
                    text: 'Fare la Spesa',
                    done: false
                },
                {
                    text: 'Completare la todolist',
                    done: false
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
        methods: {}
    }
)