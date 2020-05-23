const express = require('express'),
      cors = require("cors"),
      port = 7654,
      app = express();

app.use(cors())
app.use(express.json());

app.listen(port, () => console.log(`Server running on port: ${port}`))