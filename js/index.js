  document.getElementById('myForm').addEventListener('submit',fetchVideos)

  console.log("LOADINGG");
  let searchTerm = "cat"
  let fetching = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA33f7TdGW7pXSjQCPpiX-f4PNn-IGq73g&q=${searchTerm}&type=video`)
    .then(resp => resp.json())

  function fetchVideos(e){
    e.preventDefault()
    console.log("FETCHING VIDS OF", searchTerm);

    fetching.then(resp => {searchVideo(resp)})
  }

  function resetNow(){
    vidResults.innerHTML = ``
  }

  function searchVideo(resp){
    console.log('res',resp);
    resp.items.map(v => vidResults.innerHTML += `<div class="col-sm-4"> <div class="card" style="width: 18rem;"><img class="card-img-top" src="${v.snippet.thumbnails.default.url}">  <div class="card-body">
        <h5 class="card-title">${v.snippet.title}</h5>
        <p class="card-text">${v.snippet.title}</p>
        <a href="#" class="btn btn-primary">Save</a>
      </div></div></div>`)




  }

  function resetVideo(){
    console.log("RESETTING");
    vidResults.innerHTML = ``

  }

  function loadVideo(res){
    savedVideos.innerHTML += `<div><h3>${res.etag}</h3> <button class="btn btn-success "> + </button></div>`

  }
