var notify = document.querySelector('.notify');
var itemsTotal = document.querySelector('.items-total');
var albums = document.querySelectorAll('.album');
var saveButton = document.querySelector('.button');


var albumsSelected = [];
var i = 0;

while(i < albums.length){

    albums[i].onclick = function(e){
        var albumTitle = this.querySelector('.title').textContent;
        console.log(albumTitle);

        if(this.classList.contains('selected') !== true){
            this.classList.add('selected');
            albumsSelected.push(albumTitle);
        }else{

            this.classList.remove('selected');
            albumsSelected = albumsSelected.filter(function(item){

                return item !== albumTitle;
            })
        }
        console.log(albumsSelected);
    }
    console.log(i);
    i++;

}

saveButton.onclick = function(){

    itemsTotal.textContent = albumsSelected.length + "items saved";
    notify.classList.add('active');

 
    setTimeout(function(){
        notify.classList.remove('active')
    }, 2000)
}



