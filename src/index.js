 // Functions 
    function getWeather(zip, apiKey, successCallback, units = 'imperial') {
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
        
        const resPromise = fetch(path)
        const jsonPromise = resPromise.then(res => res.json())
        return jsonPromise
      }

      export {
          getWeather
      }