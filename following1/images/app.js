if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('service worker registered', reg))
      .catch(err => console.log('service worker not registered', err));
  }


  //declaring html elements

  const imgDiv = document.querySelector('.profile-pic-div')
  const img = document.querySelector('#photo')
  const file = document.querySelector('#file')
  const uploadBtn = document.querySelector('#uploadBtn')

  // add pic functionality

  file.addEventListener('change', function(){
    // this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {
      const reader = new FileReader();

      reader.addEventListener('load', function(){
        img.setAttribute('src', reader.result)
      })

      reader.readAsDataURL(choosedFile);
    }
  })