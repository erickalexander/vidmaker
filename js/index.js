  document.getElementById('myForm').addEventListener('submit',fetchVideos)

  console.log("LOADINGG");


  function fetchVideos(e){
    let searchTerm = document.getElementById('searchterm').value
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA33f7TdGW7pXSjQCPpiX-f4PNn-IGq73g&q=${searchTerm}&type=video`)
      .then(resp => resp.json()).then(resp => {searchVideo(resp)})

    e.preventDefault()
    console.log("FETCHING VIDS OF", searchTerm);

  }


  function searchVideo(resp){
    vidResults.innerHTML = ``

    console.log('res',resp);
    resp.items.map(v => vidResults.innerHTML += `<div class="col-sm-4"> <div class="card" style="width: 18rem;"><img class="card-img-top" src="${v.snippet.thumbnails.default.url}">  <div class="card-body">
        <h5 class="card-title">${v.snippet.title}</h5>
        <h6 class="card-text">${v.snippet.description}</h6>
        <button href="#" class="btn btn-primary btn-sm" onClick=saveVid()>Save</button>
      </div></div></div>`)
  }

  function saveVid(){
    vidResults.innerHTML = ``
  }


  function resetVideo(){
    console.log("RESETTING");
    vidResults.innerHTML = ``

  }

  function loadVideo(res){
    savedVideos.innerHTML += `<div><h3>${res.etag}</h3> <button class="btn btn-success "> + </button></div>`

  }
