const homePage = document.querySelector('.home');
const blogCard = document.querySelectorAll('.blog__card');

function rotationBlog() { 
    blogCard.forEach(blogCard => {
        blogCard.classList.add('rotated-blog-card')
    })
}

function rotationHome() {
    homePage.classList.add('rotated-home');
}


window.onload = function rotation() {
    this.rotationBlog();
    this.rotationHome();
}
