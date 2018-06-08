var mykey = config.MY_KEY;

  document.getElementById('myForm').addEventListener('submit',fetchVideosAPI)

  console.log("LOADINGG");


  function fetchVideosAPI(e){
    console.log('innn');
    let searchTerm = document.getElementById('searchterm').value
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${mykey}=${searchTerm}&type=video`)
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
        <button type="button" href="#" class="btn btn-sm btn-success " onclick="saveVid(event)">Save</button>
      </div></div></div>`)
  }

  function saveVid(e){

    console.log(e,'inside save vid');

    let vid = e.target.offsetParent.innerHTML
    console.log(vid,'fff');


    // savedVideos.innerHTML += `<div class="col-sm-5  vidResult"> ${e.target.offsetParent.innerHTML} <a onclick=deleteVid() class="btn btn-danger" href="#">Delete</a></div>`

    let video = {
      vidHTML: vid
    }

    if(localStorage.getItem('videos') === null){
      let videos = []
      videos.push(video)
      //set to localStorage

      localStorage.setItem('videos',JSON.stringify(videos))
    }
    else{
      //get bookmarks from localStorage
      let videos = JSON.parse(localStorage.getItem('videos'))
      //add bookmark to array
      videos.push(video)
      localStorage.setItem('videos',JSON.stringify(videos))

    }

    //Re-fetch Videos
    fetchVideos()

    //prevent form from submitting
    e.preventDefault()

  }


  function resetVideo(){
    console.log("RESETTING");
    vidResults.innerHTML = ``

  }

  function deleteVid(){
    savedVideos.innerHTML = ''
  }


  function fetchVideos(){
    console.log("fetching Videos");
    let videos = JSON.parse(localStorage.getItem('videos'))

    let savedVideos = document.getElementById('savedVideos')
    savedVideos.innerHTML = ''
    videos.map(v => {
      savedVideos.innerHTML += `<div class="col-sm-5  vidResult">${v.vidHTML} <a onclick=deleteVid() class="btn btn-danger" href="#">Delete</a></div>`
    })


  }
