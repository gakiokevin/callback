import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/callback', async (req, res) => {
  console.log('MPesa Callback Received on Render:', req.body);

  // Forward the callback to your LOCAL app (replace with your local URL)
  try {
    await axios.post('http://localhost:5000/api/mpesa-callback', req.body); // Adjust port/route
    console.log('✅ Callback forwarded to local app!');
  } catch (error) {
    console.log('❌ Failed to forward to local app:', error.message);
  }

  res.status(200).send("OK"); // Always respond to M-Pesa
});



app.listen(()=>{
    console.log('server has started')
})