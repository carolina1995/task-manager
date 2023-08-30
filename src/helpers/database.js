import moment from "moment";

export function setTaskListDB(taskList) {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

export function getTaskListDB(){
   let tasks = localStorage.getItem("tasks");
   return tasks !== undefined ? JSON.parse(tasks) :  []
}

export function setRelatedListDB(related) {
  console.log(related)
  localStorage.setItem('related', JSON.stringify(related));
}

export function getRelatedListDB(){
   let related = localStorage.getItem("related");
   console.log(related)
   return related !== null? JSON.parse(related) :  ["General"]
}


export const DummyTasks =
    [{
        "date": moment().format("YYYY-MM-DD"),
        "related": "Idan",
        "name": "Mop the floor",
        "description": "mop the floor",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066458819,
        "num": 1,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Emilia",
        "name": "Toys",
        "description": "Pick up the toys",
        "urgency": {
            "value": "Low",
            "id": 2,
            "color": "lightgreen"
        },
        "selected": false,
        "id": 1689066491019,
        "num": 3,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "General",
        "name": "Clean the car",
        "description": "none",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066505959,
        "num": 6,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "General",
        "name": "Fill the gas tank",
        "description": "95",
        "urgency": {
            "value": "Lowest",
            "id": 1,
            "color": "lightblue"
        },
        "selected": false,
        "id": 1689066528719,
        "num": 4,
        "status": {
            "value": "In Progress",
            "color": "lightblue",
            "id": 1
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Karolina",
        "name": "Fold the clothes",
        "description": "in the basket",
        "urgency": {
            "value": "Lowest",
            "id": 1,
            "color": "lightblue"
        },
        "selected": false,
        "id": 1689066540629,
        "num": 5,
        "status": {
            "value": "On Hold",
            "color": "lightgoldenrodyellow",
            "id": 3
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "onyx",
        "description": "meow at birds",
        "name": "meow",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066630569,
        "num": 6,
        "status": {
            "value": "On Hold",
            "color": "lightgoldenrodyellow",
            "id": 3
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Karolina",
        "description": "Do the laundry",
        "name": "in the machine",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066646759,
        "num": 7,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Emilia",
        "name": "Orgenize",
        "description": "Orgenize the dolls",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066778219,
        "num": 8,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-13",
        "related": "Idan",
        "name": "Jym",
        "description": "Go the the jym",
        "urgency": {
            "value": "Low",
            "id": 2,
            "color": "lightgreen"
        },
        "selected": false,
        "id": 1689259750639,
        "num": 8,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-22",
        "related": "Idan",
        "name": "Wash Dishes",
        "urgency": {
            "value": "High",
            "id": 4,
            "color": "orange"
        },
        "description": "Fast",
        "selected": false,
        "id": 1690034850659,
        "num": 9,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-23",
        "related": "Karolina",
        "name": "Clean The Baby Chair ",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "description": "none",
        "selected": false,
        "id": 1690034889799,
        "num": 10,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Idan",
        "name": "Mop the floor",
        "description": "mop the floor",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066458817,
        "num": 1,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Emilia",
        "name": "Toys",
        "description": "Pick up the toys",
        "urgency": {
            "value": "Low",
            "id": 2,
            "color": "lightgreen"
        },
        "selected": false,
        "id": 1689066491018,
        "num": 3,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "General",
        "name": "Clean the car",
        "description": "none",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066505954,
        "num": 6,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "General",
        "name": "Fill the gas tank",
        "description": "95",
        "urgency": {
            "value": "Lowest",
            "id": 1,
            "color": "lightblue"
        },
        "selected": false,
        "id": 1689066528714,
        "num": 4,
        "status": {
            "value": "In Progress",
            "color": "lightblue",
            "id": 1
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Karolina",
        "name": "Fold the clothes",
        "description": "in the basket",
        "urgency": {
            "value": "Lowest",
            "id": 1,
            "color": "lightblue"
        },
        "selected": false,
        "id": 1689066540626,
        "num": 5,
        "status": {
            "value": "On Hold",
            "color": "lightgoldenrodyellow",
            "id": 3
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "onyx",
        "description": "meow at birds",
        "name": "meow",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066630562,
        "num": 6,
        "status": {
            "value": "On Hold",
            "color": "lightgoldenrodyellow",
            "id": 3
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Karolina",
        "description": "Do the laundry",
        "name": "in the machine",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066646753,
        "num": 7,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": moment().format("YYYY-MM-DD"),
        "related": "Emilia",
        "name": "Orgenize",
        "description": "Orgenize the dolls",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "selected": false,
        "id": 1689066778218,
        "num": 8,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-13",
        "related": "Idan",
        "name": "Jym",
        "description": "Go the the jym",
        "urgency": {
            "value": "Low",
            "id": 2,
            "color": "lightgreen"
        },
        "selected": false,
        "id": 1689259750633,
        "num": 8,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-22",
        "related": "Idan",
        "name": "Wash Dishes",
        "urgency": {
            "value": "High",
            "id": 4,
            "color": "orange"
        },
        "description": "Fast",
        "selected": false,
        "id": 1690034850653,
        "num": 9,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    },
    {
        "date": "2023-07-23",
        "related": "Karolina",
        "name": "Clean The Baby Chair ",
        "urgency": {
            "value": "Medium",
            "id": 3,
            "color": "yellow"
        },
        "description": "none",
        "selected": false,
        "id": 1690034889794,
        "num": 10,
        "status": {
            "value": "Not Started",
            "color": "lightpink",
            "id": 0
        }
    }
    ]

