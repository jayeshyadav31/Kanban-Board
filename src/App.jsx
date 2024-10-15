// import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from './componets/Navbar/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || "Status");
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || "Title");
  const statuses = ['Backlog', "Todo", 'In progress', 'Done', 'Canceled'];
  const priorities = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  const priorityScores = [0, 1, 2, 3, 4];
  useEffect(() => {
    const savedOrdering = localStorage.getItem('ordering') || "Title";
    const savedGrouping = localStorage.getItem('grouping') || "Status";

    setOrdering(savedOrdering);
    localStorage.setItem("ordering", savedOrdering);

    setGrouping(savedGrouping);
    localStorage.setItem("grouping", savedGrouping);
  }, []);

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
