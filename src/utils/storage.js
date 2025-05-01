const storage = "taskanaTasks";



export function getAllTasks() {
    const tasks = localStorage.getItem(storage) 
        ? JSON.parse(localStorage.getItem(storage)) 
        : [];
    return tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}



export function createTask(task) {
    const tasks = getAllTasks();
    const newTask = {
        ...task,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    localStorage.setItem(storage, JSON.stringify(tasks));
    return newTask;
}



export function updateTask(id, updates) {
    const tasks = getAllTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        throw new Error(`Задача c id:${id} не найдена`);
    }
    const updatedTask = {
        ...tasks[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
    };
    tasks[taskIndex] = updatedTask;
    localStorage.setItem(storage, JSON.stringify(tasks));
    return updatedTask;
}



export function deleteTask(id) {
    const tasks = getAllTasks();
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (tasks.length === filteredTasks.length) {
        throw new Error(`Задача c id:${id} не найдена`);
    }

    localStorage.setItem(storage, JSON.stringify(filteredTasks));
    return true;
}



export function clearTasks() {
    localStorage.removeItem(storage);
    return true;
}
