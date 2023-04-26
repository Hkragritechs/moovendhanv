function contentLoaded() {
  const main = document.getElementById("main");
  const loader = document.querySelector("#loader");

  var timeOut = setTimeout(()=>{
    main.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    main.classList.add("show");
    toastMessage();
  },7000); //If the content is not loaded this will executed after 7sec

  window.addEventListener("load", function() {
    main.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    main.classList.add("show");

    // var toastEl = document.querySelector('.toast')
    // var toast = new bootstrap.Toast(toastEl)
    // toast.show()

    clearTimeout(timeOut);
  });
}
contentLoaded()

function toastMessage(){
  const toastMessage = document.querySelector(".toastMessage");
  const paragraph = document.createElement('p');
  paragraph.textContent = "Some content may load later";
  toastMessage.appendChild(paragraph);
  setTimeout(()=>{
    toastMessage.classList.add("fade-effect", "visually-hidden");
  },3000)
}


//Creating div element for slider

// const insertSlide = document.getElementById('insertSlide');

// const caroselItems =document.createElement('div');
// caroselItems.classList.add("carousel-item", "active");
// const colMd3 =document.createElement('div');
// colMd3.classList.add("col-md-3");
// const cardBody =document.createElement('div');
// cardBody.classList.add("card", "card-body");
// const slideImg =  document.createElement("img");
// slideImg.setAttribute("src", "https://via.placeholder.com/640x360?text=8");

// cardBody.append(slideImg);
// colMd3.append(cardBody);
// caroselItems.append(colMd3);

// insertSlide.appendChild(caroselItems);
// console.log("completed");
//    <div class="carousel-item active">
//    <div class="col-md-3">
//      <div class="card card-body">
//        <img
//          class="img-fluid"
//          src="https://via.placeholder.com/640x360?text=1"
//        />
//      </div>
//    </div>
//  </div>

// Creating div content for slider youtube videos

// const caroselItem = $("<div>").addClass("carousel-item active");
// const colMd3 = $("<div>").addClass("col-md-3");
// const cardBody = $("<div>").addClass("card card-body");
// const img = $("img").addClass("img-fluid").attr("src", "#");

// cardBody.append(Image);
// colMd3.append(cardBody);
// caroselItem.append(colMd3);

// caroselItem.appendTO("#insert");
