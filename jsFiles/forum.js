var threads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        data: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey There!"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too!"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        data: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey There!"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too!"
            }
        ]
    }
]

console.log(threads);
var container = document.querySelector('ol');
for (let thread of threads){
    var html = `
    <li class="row">
        <a href="/thread.html${thread.id}"></a>
            <h4 class="title">
                ${thread.title}
            </h4>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p class="comment-count">
                    ${thread.comments.length} comments
                </p>
            </div>
        </a>
    </li>
    `

    container.insertAdjacentHTML('beforeend', html);
}

var id = window.location.search.slice(1);
var thread = threads.find(t => t.id == id);
var header = document.querySelector('.header');
var headerHtml = `
    <h4 class="title">
        ${thread.title}
    </h4>
    <div class="bottom">
        <p class="timestamp">
            ${new Date(thread.date).toLocaleString()}
        </p>
        <p class="comment-count">
            ${thread.comments.length} comments
        </p>
    </div>
`
header.insertAdjacentHTML('beforeend', headerHtml)