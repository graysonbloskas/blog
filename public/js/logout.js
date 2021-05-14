// logic for logout, replace location with main.handlebars


const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
//selects the logout button, logs out on click event 
  document.querySelector('#logout').addEventListener('click', logout);
  