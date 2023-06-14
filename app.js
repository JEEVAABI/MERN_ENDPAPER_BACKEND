
const express = require('express')
const app = express()

const PORT = 3500

app.get('/',(request,response)=>{
    response.send("It's working...")
})



// Define a route to fetch the currency types
app.get('/api/currencies', (request, response) => {

  const currencies = ['USD', 'EUR', 'GBP', 'JPY'];

  response.json(currencies);
});




app.use(express.json());

// Fetch currency options
// app.get('/api/currencies', (request, response) => {
//   axios.get('')
//     .then(response => {
//       response.json(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//       response.status(500).json({ error: 'Failed to fetch currency options' });
//     });
// });


app.post('/api/convert', (req, res) => {
 
    const { sourceCurrency, targetCurrency, amount } = req.body;
  

    let convertedAmount;
  
    if (sourceCurrency === 'USD') {
      // Conversion logic for USD to target currency
      if (targetCurrency === 'EUR') {
        convertedAmount = amount * 0.85; 
      } else if (targetCurrency === 'GBP') {
        convertedAmount = amount * 0.72; 
      } else if (targetCurrency === 'JPY') {
        convertedAmount = amount * 110.25;
      }
  
    } else if (sourceCurrency === 'EUR') {
      // Conversion logic for EUR to target currency
      if (targetCurrency === 'USD') {
        convertedAmount = amount / 0.85; 
      } else if (targetCurrency === 'GBP') {
        convertedAmount = amount * 0.85 / 0.72; 
      } else if (targetCurrency === 'JPY') {
        convertedAmount = amount * 0.85 * 110.25; 
      }
 
    }
    

    res.json({ convertedAmount });
  });
  





app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))