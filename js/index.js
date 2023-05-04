function uploadFile(event) {
    event.preventDefault();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'zip', 'pdf', 'docx', 'xlsx', 'mp4', 'mp3'];
    const fileInput = document.getElementById('inputFile');

    const file = fileInput.files[0];
    if (file == null) {
        alert('Por favor ingrese un archivo');
        return;
    }
    console.log(fileInput.files[0]);

    // validando tamaño archivo

    if (file.size > 5242880) {
        alert("El tamaño del archivo no debe superar los 5MB.");
        return;
    }

    // validando extensión archivo
    const fileName = fileInput.files[0].name;
    const extension = fileName.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
       alert(`Archivo no valido, solo se permiten las siguientes extensiones ${allowedExtensions.join(', ')}`);
       return;
    }
    
    document.getElementById('fileName').value = fileName;
    document.getElementById('fileType').value = extension;
    document.getElementById('fileLastModified').value = getFormattedLastModifiedDate(file.lastModifiedDate);
    document.getElementById('fileSize').value = getFileSizeFormatted(file.size);

}


function getFileSizeFormatted(size) {
    const sizeUnits = ['bytes', 'KB', 'MB'];
    let sizeIndex = 0;
    let s = size;
    while (size >= 1024 && sizeIndex < sizeUnits.length -1) {
        s /= 1024;
        sizeIndex++;
    }
    
    return sizeString = `${s.toFixed(2)} ${sizeUnits[sizeIndex]}`;
}

function getFormattedLastModifiedDate(dateNum) {
    const lastModifiedDate = new Date(dateNum);

    const day = lastModifiedDate.getDate().toString().padStart(2, '0');
    const month = (lastModifiedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = lastModifiedDate.getFullYear().toString();
    const lastModifiedDateString = `${day}/${month}/${year}`;

    return lastModifiedDateString;
}