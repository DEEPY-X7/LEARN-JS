//use  a free API form the internet & fetch your data
let url = "https://jsonplaceholder.typicode.com/posts";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((context) => {
    console.log(context[item]);
    innerHTML += `
    <div class="card " style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
  });

cardcontainer.innerHTML = "allcards";
