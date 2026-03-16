function addLike(buttonElement) {
  let post = buttonElement.closest(".post");

  let likeSpan = post.querySelector(".like-count");

  let likes = parseInt(likeSpan.innerText);

  likes++;

  likeSpan.innerText = likes;
}
