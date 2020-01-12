export const fetchToken = () => {
  return fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=fAK8vsY71R3Dkd8q7fAs76vYIpNB6Mpp4EY0huwEcQetNLY5FT&client_secret=1nvqj0muwVXgVvxrLcGrMapaRCMfIAR7BaMsYulQ',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw Error('Failed fetching token')
      } 
      return res.json()})
}