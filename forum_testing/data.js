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
                content: "Hey there"
            },
            {
                author: "Aaron",
                date: Date.now(),
                content: "Hey there too"
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
                content: "Hey there"
            },
            {
                author: "Aaron",
                date: Date.now(),
                content: "Hey there too"
            }
        ]
    }
]

var threads;
if (localStorage && localStorage.getItem('threads')){
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}