var defaultThreads = [
  {
    id: 1,
    title: "Dog Forums",
    author: "Aaron",
    data: Date.now(),
    content: "Discuss everything related to dogs!",
    comments: [
      {
        author: "Jack",
        date: Date.now(),
        content: "My dog's name is Harper, and he loves to play fetch.",
      },
      {
        author: "Aaron",
        date: Date.now(),
        content: "I love my dog; he is the best!",
      },
    ],
  },
  {
    id: 2,
    title: "Cat Forums",
    author: "Aaron",
    data: Date.now(),
    content: "Share your stories about your cats!",
    comments: [
      {
        author: "Bob",
        date: Date.now(),
        content: "My cat is the best; he loves to eat tuna.",
      },
      {
        author: "Sayed",
        date: Date.now(),
        content: "My cat Marcus is the best cat in the entire world.",
      },
    ],
  },
  {
    id: 3,
    title: "Fish Forums",
    author: "Aaron",
    data: Date.now(),
    content: "Join the discussion about fish and aquariums!",
    comments: [
      {
        author: "FishLover",
        date: Date.now(),
        content: "I have a beautiful aquarium with colorful fish.",
      },
      {
        author: "AquariumMaster",
        date: Date.now(),
        content: "Looking for advice on maintaining a healthy fish tank.",
      },
    ],
  },
];

var threads;

if (localStorage && localStorage.getItem("threads")) {
  threads = JSON.parse(localStorage.getItem("threads"));
} else {
  threads = defaultThreads;
  localStorage.setItem("threads", JSON.stringify(defaultThreads));
}
