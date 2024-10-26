const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare monthly report",
          "description": "Compile the monthly financial report.",
          "date": "2024-10-15",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Team meeting preparation",
          "description": "Prepare slides for team meeting.",
          "date": "2024-10-10",
          "category": "Management"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update project documentation",
          "description": "Update the project documentation to reflect the latest changes.",
          "date": "2024-10-18",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Client presentation",
          "description": "Prepare a presentation for the client on the new product.",
          "date": "2024-10-20",
          "category": "Sales"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Website update",
          "description": "Update the homepage banner for the promotion.",
          "date": "2024-10-12",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Database backup",
          "description": "Perform a backup of the customer database.",
          "date": "2024-10-16",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Code review",
          "description": "Review code for the new feature before deployment.",
          "date": "2024-10-18",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Meeting notes",
          "description": "Summarize and distribute meeting notes.",
          "date": "2024-10-14",
          "category": "Admin"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Research competitors",
          "description": "Gather data on competitors' new product features.",
          "date": "2024-10-13",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Optimize ad campaigns",
          "description": "Analyze and optimize social media ad campaigns.",
          "date": "2024-10-20",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Schedule interview",
          "description": "Coordinate an interview with the candidate.",
          "date": "2024-10-22",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create job posting",
          "description": "Post the new job opening on the company website.",
          "date": "2024-10-11",
          "category": "HR"
        }
      ]
    }
  ];

  const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

  export function setLocalStorage(){
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}

  export  function getLocalStorage(){
    const employees =  JSON.parse(localStorage.getItem('employees'));
    const admin =  JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}
} 