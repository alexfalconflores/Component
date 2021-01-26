document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        const image = (e.dataTransfer.files[0]);
        const type = image.type;
        console.log(type);

        if (type=="image/jpg" || type=="image/jpge" || type=="image/png") {
            // inputElement.files = e.dataTransfer.files;
            inputElement.file = e.dataTransfer.files[0];
            // inputElement.files = image;
            // console.log(inputElement.files);
            console.log(inputElement.file);
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
            // console.log(inputElement.file=e.dataTransfer.files);
        }
        else{
            console.log('errror');
            alert("Formato no soportado");
            dropZoneElement.classList.remove("drop-zone--over");
        }

        // if (e.dataTransfer.files.length) {
        //     // inputElement.files = e.dataTransfer.files;
        //     inputElement.file = e.dataTransfer.files[0];
        //     // inputElement.files = image;
        //     // console.log(inputElement.files);
        //     console.log(inputElement.file);
        //     updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        //     // console.log(inputElement.file=e.dataTransfer.files);
        // }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

// const upload = (image) =>{};

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    // console.log(dropZoneElement); 
    // console.log(file);
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}