$(document).ready(function () {

    var optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:40,max:40,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:60,max:60,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ],
    theme = 'satisfied';
    $('.statisfied').RangeReviewSmiley(optionRangeSmiley,theme);
    
    optionRangeSmiley = [
        {min:0,max:0,icon:'icon-sad'},
        {min:40,max:40,icon:'icon-frown'},
        {min:50,max:50,icon:'icon-meh'},
        {min:60,max:60,icon:'icon-smiley'},
        {min:100,max:100,icon:'icon-grinning'},
    ];
    var theme = 'satisfied';
    $('.example').RangeReviewSmiley(optionRangeSmiley,theme);

    let todos = [
        {
            id: 1,
            task: "Comment",
        }
    ]

    // berfungsi untuk generate todos dan dimasukkan ke dalam html (table)
    function getTodos() {
        // mengambil element tbody
        let boxTable = $('#t-body')
        // looping todos untuk meng generate list to dan di append ke dalam HTML
        for (let i = 0; i < todos.length; i++) {
            boxTable.append(`
                <tr>
                    <td>${todos[i].id}</td>
                    <td>${todos[i].task}</td>'
                </tr>
            `)
        }
    }
    // menambahkan todo ke dalam let todos dan html (table)
    // e artinya adalah "event"
    function addTodo(e) {
        e.preventDefault(); // untuk mencegah refresh
        // untuk mengambil value dari input
        let todoItem = $('#add-todo').val()
        let id;
        if (todos.length === 0) {
            id = 1
        } else {
            // untuk generate todo id secara auto
            id = todos[todos.length - 1].id + 1;
        }
        // memasukkan ke dalam array of object todos
        todos.push({
            id,
            task: todoItem,
            status: false
        })
        console.log(todos);

        // mengambil tbody
        let boxTable = $('#t-body')
        // append : menambahkan element HTML
        boxTable.append(`
            <tr>
                <td>${id}</td>
                <td>${todoItem}</td>
            </tr>
        `)

    }
    // untuk mengambil addButton dan memberikan addEventListener click
    let addBtn = $('#add-btn').click(e => addTodo(e))
    // invoke function agar langsung di jalankan / todo list nya terambil langsung
    getTodos()

    // console.log(todoItem)
});