function runMiddlewares(req, res, ...middlewares) {
  let index = 0;

  const next = () => {
    if (index < middlewares.length) {
      const middleware = middlewares[index];
      index += 1;
      middleware(req, res, next);
    }
  };

  next();
}
const middleware1 = (req, res, next) => {
  console.log("Middleware 1: request received");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Middleware 2: request received");
  next();
};

const middleware3 = (req, res, next) => {
  console.log("Middleware 3: request received");
  next();
};

const middleware4 = (req, res, next) => {
  console.log("Middleware 4: request received");
  next();
};

const req = {};
const res = {};

// Express llama a la utilidad encargada de correr los middlewares
runMiddlewares(req, res, middleware1, middleware2, middleware3, middleware4);
