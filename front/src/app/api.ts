const URL = 'http://localhost:3000/customer'

export const findAll = setter =>
  fetch(URL)
    .then(response => response.json())
    .then(setter)
    .catch(err => console.log(err))

export const update = (id, data) =>
  fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).catch(err => console.log(err))
