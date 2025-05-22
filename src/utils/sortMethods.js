export const sortMethods = [
  {
    icon: "fromunimportant",
    desc: "Приоритету",
    sortFn: ((tasks) => [...tasks].sort((a, b) => a.priority - b.priority)),
  },
  {
    icon: "ofimportance",
    desc: "Приоритету",
    sortFn: ((tasks) => [...tasks].sort((a, b) => b.priority - a.priority)),
  },
  {
    icon: "az",
    desc: "Алфавиту",
    sortFn: ((tasks) => [...tasks].sort((a, b) => a.title.localeCompare(b.title))),
  },
  {
    icon: "za",
    desc: "Алфавиту",
    sortFn: ((tasks) => [...tasks].sort((a, b) => b.title.localeCompare(a.title))),
  },
  {
    icon: "ascending",
    desc: "Дате создания",
    sortFn: ((tasks) => [...tasks].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))),
  },
  {
    icon: "descending",
    desc: "Дате создания",
    sortFn: ((tasks) => [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))),
  },
  {
    icon: "oldnew",
    desc: "Дате обновления",
    sortFn: ((tasks) => [...tasks].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))),
  },
  {
    icon: "newold",
    desc: "Дате обновления",
    sortFn: ((tasks) => [...tasks].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))),
  },
];