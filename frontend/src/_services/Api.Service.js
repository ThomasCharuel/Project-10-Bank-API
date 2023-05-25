const API_BASE_URL = 'http://localhost:3001/api/v1';

const signIn = async (email, password) => {
  try {
    // Send the sign-in request
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Sign-in failed
      throw new Error('Sign-in failed');
    }
  } catch (error) {
    // Handle any error that occurred during the sign-in process
    console.error('Error during sign-in:', error.message);
    throw error;
  }
};

const getUserProfile = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('API request get user profile failed');
    }
  } catch (error) {
    console.error('Error occured whilst querying user profile:', error.message);
    throw error;
  }
};

const setUserProfile = async (data, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('API request set user profile failed');
    }
  } catch (error) {
    console.error('Error occured whilst updating user profile:', error.message);
    throw error;
  }
};

export { signIn, getUserProfile, setUserProfile };
