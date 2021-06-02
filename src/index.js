const usersList = document.querySelector('#users-list');
const restaurantsList = document.querySelector('#restaurants-list');
const reservationsList = document.querySelector('#reservations-list');

// restaurantsList.addEventListener('click', async(ev) => {
//     if(ev.target.tagName === 'LI') {
//         const restaurantId = ev.target.getAttribute('data-id');
//         const 
//     }
// })

let users;

const renderUsers = () => {
    const userId = window.location.hash.slice(1);
    const html = users.map(user => {
        return `
          <li class = '${userId === user.id ? 'selected': ''}'>
            <a href = '#${ user.id }'>
            ${user.name}
            </a>
          </li>
        `;
    }).join('');
    usersList.innerHTML = html;
};

const loadUsers = async() => {
    const response = await fetch('/api/users');
    users = await response.json();
    renderUsers();
};



window.addEventListener('hashchange', ()=> {
    renderUsers();
    
  });