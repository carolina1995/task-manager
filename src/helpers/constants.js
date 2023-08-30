const Urgencies = {
     Lowest : {value: "Lowest",  id: 1, color: 'lightblue' },
     Low : {value: "Low",  id: 2, color: 'lightgreen' },
     Medium : {value: "Medium",  id: 3, color: 'yellow' },
     High : {value: "High",  id: 4, color: 'orange' },
     Critical : {value: "Critical",  id: 5, color: 'red' },
};

const Statuses = {
      NotStarted: { value: "Not Started", color: 'lightpink', id: 0 },
      InProgress: { value: "In Progress", color: 'lightblue', id: 1 },
      Done: { value: "Done", color: 'lightgreen', id: 2 },
      OnHold: { value: "On Hold", color: 'lightgoldenrodyellow', id: 3 }
};


export { Urgencies, Statuses }