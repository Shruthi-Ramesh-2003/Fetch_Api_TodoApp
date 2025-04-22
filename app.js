// document.addEventListener("DOMContentLoaded", () => {
//     const todoList = document.getElementById("todoList");
//     const toggleBtn = document.getElementById("toggleBtn");
//     const errorDiv = document.getElementById("error");
//     const completedCount = document.getElementById("completedCount");
//     const incompleteCount = document.getElementById("incompleteCount");
  
//     let showCompleted = false;
//     let todos = [];
  
//     async function fetchTodos() {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
//         if (!res.ok) throw new Error("Failed to fetch todos");
//         todos = await res.json();
//         renderTodos();
//         updateCounts();
//       } catch (err) {
//         errorDiv.textContent = err.message;
//         const retryBtn = document.createElement("button");
//         retryBtn.textContent = "Retry";
//         retryBtn.onclick = () => {
//           errorDiv.innerHTML = "";
//           fetchTodos();
//         };
//         errorDiv.appendChild(retryBtn);
//       }
//     }
  
//     function renderTodos() {
//       todoList.innerHTML = ""; // Clear current list
//       let filteredTodos = showCompleted ? todos.filter(todo => todo.completed) : todos.filter(todo => !todo.completed);
  
//       filteredTodos.forEach(todo => {
//         const div = document.createElement("div");
//         div.className = "todo";
//         div.textContent = `User ${todo.userId}: ${todo.title}`;
//         todoList.appendChild(div);
//       });
//     }
  
//     function updateCounts() {
//       const completedTasks = todos.filter(todo => todo.completed).length;
//       const incompleteTasks = todos.filter(todo => !todo.completed).length;
  
//       completedCount.textContent = `Completed: ${completedTasks}`;
//       incompleteCount.textContent = `Incomplete: ${incompleteTasks}`;
//     }
  
//     toggleBtn.onclick = () => {
//       showCompleted = !showCompleted;
//       toggleBtn.textContent = showCompleted ? "Hide Completed" : "Show Completed";
//       renderTodos(); // Re-render to update the list based on the toggle state
//     };
  
//     fetchTodos();
//   });
  
function TodoList({ todos }) {
    const [items, setItems] = React.useState(todos);
  
    const deleteTodo = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    };
  
    return (
      <div>
        {items.map((todo, index) => (
          <div>
            <p>{todo.title}</p>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }