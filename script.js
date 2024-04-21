// Пример данных
const algorithms = [
    "Sorting Algorithms",
    "Search Algorithms",
    "Graph Algorithms"
];

const roadmap = [
    "Learn a Programming Language",
    "Understand Version Control",
    "Learn Basic Data Structures and Algorithms",
    "Understand Computer Networks",
    "Understand Databases",
    "Learn Web Development",
    "Learn Mobile Development",
    "Understand DevOps",
    "Understand Security"
];

const tasks = [
    "Implement Sorting Algorithms in Python",
    "Practice Coding Challenges on GeeksforGeeks",
    "Contribute to Open Source Projects",
    "Build a Personal Website",
    "Complete a Web Development Course"
];

// Функция для заполнения данных в секциях
function populateList(listId, data) {
    const list = document.getElementById(listId);
    list.innerHTML = '';
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// Заполнение данных при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    populateList('algorithms-list', algorithms);
    populateList('roadmap-list', roadmap);
    populateList('tasks-list', tasks);
});
