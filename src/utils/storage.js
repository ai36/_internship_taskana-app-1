const storage = "taskanaTasks";

export function getAllTasks() {
  const tasks = localStorage.getItem(storage) ? JSON.parse(localStorage.getItem(storage)) : [];
  return tasks;
}

export function setAllTasks(tasks) {
  localStorage.setItem(storage, JSON.stringify(tasks));
  return true;
}
