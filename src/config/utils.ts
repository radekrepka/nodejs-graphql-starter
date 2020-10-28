const DEFAULT_PORT = 3000;

const normalizePort = (val?: string) => {
  if (val != null) {
    const port = parseInt(val, 10);

    if (!isNaN(port) && port >= 0) {
      return port;
    }
  }

  return DEFAULT_PORT;
};

export { normalizePort };
