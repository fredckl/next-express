const request = (url) => {
  return fetch(`${process.env.URL}:${process.env.PORT}${url}`);
}

export default request