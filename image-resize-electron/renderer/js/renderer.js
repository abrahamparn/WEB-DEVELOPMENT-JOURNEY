
const form = document.querySelector('#img-form')
const img = document.querySelector('#img')
const outputPath = document.querySelector('#output-path')
const fileName = document.querySelector('#filename')
const heighInput = document.querySelector('#height')
const widthInput = document.querySelector('#width')




function loadImage(e){
    const file = e.target.files[0]
    if(!isFileImage(file)){
       alertError('Please select and image')


        
     return
    }

    // GET ORIGINAL DIMENSION
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = function(){
        widthInput.value = this.width;
        heighInput.value = this.height
    }
    form.style.display = 'block ';
    fileName.innerHTML = file.name;
    outputPath.innerText = path.join(os.homedir(), 'imageResizer')
}

// Check file is image
function isFileImage(file){
 const acceptedFileImageType = [
    'image/gif',
    'image/png',
    'image/jpeg'
 ]

 return  file && acceptedFileImageType.includes(file['type'])
}

function alertError(message){
    Toastify.toast({
        text:message,
        close:true,
        style:{
            background:"red",
            color: "white",
            textAlign: "center"

        }
    })
}

function alertSuccess(message){
    Toastify.toast({
        text:message,
        close:true,
        style:{
            background:"green",
            color: "white",
            textAlign: "center"

        }
    })
}
img.addEventListener('change', loadImage)

// sendImage data to main process
function sendImage(e){
    e.preventDefault()

    const width = widthInput.value
    const height = heighInput.value
    const imgPath = img.files[0].path;

    if(width === '' || height === ''){
        alertError('please fill in a height and width   ')
    }

    if(!img.files[0]){
        alertError('Please upload an image')
        return
    }

    // send to main using ipcRenderer
    ipcRenderer.send('image:resize', {
        imgPath,
        width,
        height
    })


}

// catch the image done event
ipcRenderer.on('image:done', () => {
    alertSuccess('Image resize success')
})
form.addEventListener('submit', sendImage)