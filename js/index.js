  document.getElementById('myForm').addEventListener('submit',fetchVideos)

  console.log("LOADINGG");


  function fetchVideos(e){
    let searchTerm = document.getElementById('searchterm').value
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA33f7TdGW7pXSjQCPpiX-f4PNn-IGq73g&q=${searchTerm}&type=video`)
      .then(resp => resp.json()).then(resp => {searchVideo(resp)})

    e.preventDefault()
    console.log("FETCHING VIDS OF", searchTerm);

  }


  function searchVideo(resp,e){
    vidResults.innerHTML = ``

    console.log('res',resp);
    resp.items.map((v,index) => vidResults.innerHTML += `<div id=${index} class="col-sm-5  vidResult"> <div class="card" style="width: 18rem;"> <iframe src="https://www.youtube.com/embed/${v.id.videoId}" width="320" height="180"></iframe>
   <div class="card-body">

        <h5 class="card-title">${v.snippet.title}</h5>
        <h6 class="card-text">${v.snippet.description}</h6>
        <button type="button" href="#" class="btn btn-sm btn-success " onClick="saveVid(event)">Save</button>
      </div></div></div>`)
  }

  function saveVid(e){

    console.log(e,'inside save vid');

    savedVideos.innerHTML = e.target.offsetParent.innerHTML

    // let siteName = document.getElementById('sitename').value
    // let siteUrl = document.getElementById('siteurl').value
    //
    // let video = {
    //   name: siteName,
    //   url: siteUrl
    // }
    //
    // if(localStorage.getItem('bookmarks') === null){
    //   let bookmarks = []
    //   bookmarks.push(bookmark)
    //   //set to localStorage
    //
    //   localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    // }
    // else{
    //   //get bookmarks from localStorage
    //   let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    //   //add bookmark to array
    //   bookmarks.push(bookmark)
    //   localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    //
    // }
    //
    // //Re-fetch Bookmarks
    // fetchBookmarks()
    //
    // //prevent form from submitting
  }


  function resetVideo(){
    console.log("RESETTING");
    vidResults.innerHTML = ``

  }

  function loadVideo(res){
    savedVideos.innerHTML += `<div><h3>${res.etag}</h3> <button class="btn btn-success "> + </button></div>`

  }
