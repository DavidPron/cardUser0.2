'use strict';

const apiUrl = 'https://dummyjson.com/users';

// Function for retrieving data from the backend
async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);

    // Check if the request has completed successfully
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Receive data in JSON format
    const data = await response.json();

    console.log('Retrieved data:', data);

    if (data.users && Array.isArray(data.users)) {
      displayData(data.users);
    } else {
      throw new Error ('Unexpected data structure: "users" is missing or not an array');
    };

    // displayData(users);
  } catch (error) {
    console.error('Error while retrieving data:', error);
  }
}

// +mon
function displayData(users) {
    const container = document.getElementById('data-container');

    if (!users || !Array.isArray(users)) {
      console.error('Invalid data passed to displayData:', users);
      return;
    }

    container.innerHTML = '';

    users.forEach(user => {
       const div = document.createElement('div');
       div.classList.add('user-card');

       div.innerHTML = 
      `
      <h2>${user.firstName} ${user.lastName}</h2>
      <h4>Username: ${user.username}</h3>
      <p>Email: ${user.email}</p>
      <p>Age: ${user.age}, (${user.birthDate})</p>
      `;
        container.appendChild(div);
    });
}

// function call
fetchUsers();