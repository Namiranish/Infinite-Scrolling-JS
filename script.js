const display = document.getElementById('display');
const accessKey = 'K8UXfWbYDjyvuamVEYwonWn4Hs1nW9FV2n7J8HwBO60';
const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`;

async function getImages() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        showImages(data);
    } catch (err) {
        console.log('Error fetching images');
    }
}

function showImages(data) {
    data.forEach((ele) => {
        let img = document.createElement('img');
        img.src = ele.urls.small;
        img.alt = ele.alt_description || 'Image';
        display.appendChild(img);
    });
}

getImages();


window.addEventListener('scroll',()=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200){
        getImages()
    }
})
