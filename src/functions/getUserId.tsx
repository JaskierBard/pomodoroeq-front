export const getUserId = () => {
    
  const data = (localStorage.getItem('user'))
  
  if (data) {
    const parsedData = (JSON.parse(data));
    const userId = (parsedData['userId'])
      
    return userId
  }
}