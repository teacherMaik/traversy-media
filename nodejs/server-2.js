import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
  {id: 1, name: 'Mike'},
  {id: 2, name: 'Ne'},
  {id: 3, name: 'Lucca'},
  {id: 4, name: 'Matteo'},
];

// Logger Middleware
const loggerMid = (req, res, next) => {

  console.log(`${req.method} and ${req.url}`);
  next();
}

const jsonMid = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json');
  next();
};

// Route Handler for GET /api/user
const getUsersHandler = (req, res) => {
  
  res.write(JSON.stringify(users));
  res.end();
};

// Route Handler for GET /api/users/id:
const getUserByIdHandler = (req, res) => {

  const id = req.url.split('/')[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user)
  {
    res.write(JSON.stringify(user));
  }
  else
  {
    res.write(JSON.stringify({message: "User not found"}));
  }
  res.end(); 
};

// Route Handlers for ERROR
const errorHandler = (req, res) => {

  res.write(JSON.stringify({message: "Route not Found"}));
  res.end();
};

const server = createServer((req, res) => {

  loggerMid(req, res, () => {
    
    jsonMid(req, res, () => {

      if (req.url === '/api/users' && req.method === 'GET')
      {
        getUsersHandler(req, res);
      }
      else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')
      {
        getUserByIdHandler(req, res);
      }
      else
      {
        errorHandler(req, res);
      }
    })
  });
});


server.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)
});