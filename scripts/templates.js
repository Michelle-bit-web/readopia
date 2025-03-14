function renderBookTemplate(i,title,cover,author,description,likes,price,year,genre,user,comment){
    return /*html*/`
    <section class="section_book_page">
        <div class="upper_page_part">
            <h1>${title}</h1>
            <div class="div_book_info">
                <div id="${cover}" class="book_img"></div>
                <div class="book_informations">
                <div id="author"><b>Author:</b> ${author}</div>
                <div id="year"><b>Published:</b> ${year}</div>
                <div id="genre"><b>Genre:</b> ${genre}</div>
                <div id="price"><b>Price:</b> ${price}€</div>
            </div>
            </div>
            
        </div>
        <div class="div_like_and_comments">
            <div class="div_like">
                <div id="like_number">${likes}</div>
                <img onclick="LikeOrDislike(1,${likes},${i},event)" id="not_liked${i}" class="heart_icon empty_heart" src="./assets/icon/heart_icon.png" alt="like button">
                <img onclick="LikeOrDislike(-1,${likes},${i},event)" id="liked${i}" class="heart_icon d_none" src="./assets/icon/heart-fill.PNG" alt="like button">
            </div>
            <div class="book_description">
                <p id="book_description"><b>Description:</b><br>${description}</p>
            </div>
        </div>
    </section>
    <section class="section_comments">
        <h2>Give your feedback</h2>
        <div class="div_comments">
            <span>user:<span id='username'> Readiculous237</span></span>
            <label for="comment_text">Your comment:</label>
            <div class="div_textarea">
                <textarea name="comment_text" id="comment_text" placeholder="Give your feedback..."></textarea>
                <img onclick="sendComment()" class="send_icon" src="./assets/icon/send_icon.png" alt="send button">
            </div>
        </div>
        <div id="written_comments" class="written_comments">
            User comments:
        </div>
        
    </section>`
}

function renderComments(user, comment){
    return `<p class="saved_comment"><b>${user}:</b> <br> ${comment}</p>`
}