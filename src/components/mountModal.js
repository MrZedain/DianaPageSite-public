export function mountModal() {

  console.log("mounting modal");

    const modal = document.querySelector('.modal')
    const modalContent = document.querySelector('.modalContent')
    const imgWraps = document.querySelectorAll('.imgWrap')
    const nextbtn = document.getElementById('nextbtn');
    const backbtn = document.getElementById('backbtn');


    imgWraps.forEach((imgWrap, index) => {
        imgWrap.onclick = () => {

          console.log(index);
          let imgWrapClone = imgWrap.cloneNode(true);
          modalContent.appendChild(imgWrapClone);
          imgWrapClone.classList.add('imgWrapClone');

          modal.style.display = "flex";
          modal.style.opacity = 1;

          backbtn.onclick = () => {
            if (index !== 0) {
              index--
              if (imgWrapClone) {
                modalContent.removeChild(imgWrapClone);
                imgWrapClone = imgWraps[index].cloneNode(true);
                modalContent.appendChild(imgWrapClone);
                imgWrapClone.classList.add('imgWrapClone');
              }
            }
          }

          nextbtn.onclick = () => {
            if (index < imgWraps.length - 1) {
              index++
              if (imgWrapClone) {
                modalContent.removeChild(imgWrapClone);
                imgWrapClone = imgWraps[index].cloneNode(true);
                modalContent.appendChild(imgWrapClone);
                imgWrapClone.classList.add('imgWrapClone');
              }
            }
          }

          
        //  modalArtwork.src = imgWrap.querySelector('.artwork').src;
         
        const closeModal = document.querySelector('.closeModal');
        closeModal.onclick = () => {
          modal.style.display = "none";
          modalContent.removeChild(imgWrapClone);
        };
   
        }
      }
    );







 }


 export function unmountModal() {
  console.log("unmounting modal");

  // Select elements
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modalContent');
  const imgWraps = document.querySelectorAll('.imgWrap');
  const nextbtn = document.getElementById('nextbtn');
  const backbtn = document.getElementById('backbtn');
  const closeModal = document.querySelector('.closeModal');

  // Remove event listeners from imgWrap elements
  imgWraps.forEach((imgWrap) => {
    imgWrap.onclick = null;
  });

  // Remove event listeners from buttons
  if (nextbtn) nextbtn.onclick = null;
  if (backbtn) backbtn.onclick = null;
  if (closeModal) closeModal.onclick = null;

  // Hide the modal and clear its content
  if (modal) {
    modal.style.display = "none";
  }
  if (modalContent) {
    while (modalContent.firstChild) {
      modalContent.removeChild(modalContent.firstChild);
    }
  }
}



 