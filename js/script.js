const btnModalOpen = document.querySelector('.btn__skills');
const modalBox = document.querySelector('.modal-wrap');
const btnModalClose = modalBox.querySelector('.btn__close');

function showModal() {
	modalBox.classList.add('show');
}
function closeModal() {
	modalBox.classList.remove('show');
}

btnModalOpen.addEventListener('click', showModal)
btnModalClose.addEventListener('click', closeModal);
