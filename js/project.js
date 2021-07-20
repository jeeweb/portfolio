(() => {
	const projectImage = document.querySelectorAll('.project__image');
	const projectDesc = document.querySelectorAll('.project__desc');

	let currentImage;
	let ioIndex;

	const io = new IntersectionObserver((entries, observer) => {
		ioIndex = entries[0].target.dataset.index * 1;
	})

	for(let i = 0; i < projectDesc.length; i++) {
		io.observe(projectDesc[i]);
		projectImage[i].dataset.index = i;
		projectDesc[i].dataset.index = i;
	}

	function activate() {
		currentImage.classList.add('visible');
	}

	function inactivate() {
		currentImage.classList.remove('visible');
	}

	window.addEventListener('scroll', () => {
		let project;
		let boundingRect;
		let winHeight = window.innerHeight;

		for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
			project = projectDesc[i];

			if (!project) continue;
			
			boundingRect = project.getBoundingClientRect();

			if ((boundingRect.top > winHeight * 0.1) && boundingRect.top < winHeight * 0.8) {
				if (currentImage) {
					inactivate();
				}
				currentImage = projectImage[project.dataset.index];
				activate();
			}
		}
	})
})();