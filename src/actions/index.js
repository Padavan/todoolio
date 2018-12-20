import axios from 'axios';

let currentId = 0;

export const fetchEnd = todos => ({
  type: 'TODO_FETCH',
  todos
});

export const fetchTodoAction = () => (dispatch) => {
  fetch('/api/getData')
    .then(data => data.json())
    .then((res) => {
      dispatch(fetchEnd(res.data));
      let maxId = 0;
      res.data.map((data) => {
        if (data.id > maxId) {
          maxId = data.id;
        }
        return data;
      });
      currentId = maxId;
    });
};

export const addTodoAction = (name) => {
  currentId += 1;
  axios.post('/api/putData', {
    id: currentId,
    name,
    status: 0
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  return ({
    type: 'TODO_ADD',
    id: currentId,
    name
  });
};

export const removeTodoAction = (id) => {
  axios.delete('/api/deleteData', { data: { id } })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  return ({
    type: 'TODO_DELETE',
    id
  });
};

export const editTodoAction = (id, name, status) => {
  axios.post('/api/updateData', {
    id,
    update: { name, status }
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  return ({
    type: 'TODO_EDIT',
    id,
    name,
    status
  });
};

export const orderTodoAction = (from, to) => ({
  type: 'TODO_REORDER',
  from,
  to
});
