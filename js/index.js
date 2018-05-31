let searchTerm = "dog"
let fetchedVideos = fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA33f7TdGW7pXSjQCPpiX-f4PNn-IGq73g&q=${searchTerm}&type=video`)
  .then(resp => resp.json()).then(resp => {loadVideo(resp)})

function loadVideo(resp){
  vidResults.innerHTML += `<div class="well"><h3>${resp.etag}</h3> <button class="btn btn-success btn-sm"> + </button></div>`


}
let reset = getElementById('reset')

function resetVideo(){
  console.log("RESETTING");
  vidResults.innerHTML = ``

}

function searchVideo(resp){

}
