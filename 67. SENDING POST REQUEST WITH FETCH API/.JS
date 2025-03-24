let createTodo = async() => {
    
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Deepu',
      body: 'bhai',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

    const mainfunc = async () => {
      let todo = {
        title: 'Deepu',
        body: 'bhai',
        iserID: '11'
      }
      let todor = await createTodo(todo)
      console.log(todor)
    }

    const gettodo = 
    mainfunc();