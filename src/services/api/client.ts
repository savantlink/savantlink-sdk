import axios from 'axios'

// Create an instance of Axios with custom configuration
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Set your API base URL from environment variables
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add authorization token or other headers here
    const token = localStorage.getItem('authToken') // Example: Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data // Return only the data part of the response
  },
  (error) => {
    // TODO: cleanup handler
    // // Handle errors globally
    // if (error.response) {
    //   // The request was made and the server responded with a status code
    //   switch (error.response.status) {
    //     case 401:
    //       // Handle unauthorized access (e.g., redirect to login)
    //       //   console.error('Unauthorized access')
    //       break
    //     case 404:
    //       // Handle not found errors
    //       //   console.error('Resource not found')
    //       break
    //     case 500:
    //       // Handle server errors
    //       //   console.error('Server error')
    //       break
    //     default:
    //     //   console.error('An error occurred:', error.response.status)
    //   }
    // } else if (error.request) {
    //   // The request was made but no response was received
    //   //   console.error('No response received:', error.request)
    // } else {
    //   // Something happened in setting up the request
    //   //   console.error('Request setup error:', error.message)
    // }
    return Promise.reject(error)
  }
)

export default axiosClient
