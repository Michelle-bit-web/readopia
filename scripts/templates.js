function renderBookTemplate(i,title,cover,author,description,likes,price,year,genre){
    return `
    <section class="section_book_page">
        <div class="upper_page_part">
            <h1>${title}</h1>
            <div class="div_book_info">
                <div id="${cover}" class="book_img"></div>
                <div class="book_informations">
                <div id="author">Author: ${author}</div>
                <div id="year">Published: ${year}</div>
                <div id="genre">Genre: ${genre}</div>
                <div id="price">Price: ${price}€</div>
            </div>
            </div>
            
        </div>
        <div class="div_like">
            <div>${likes}<img onclick="LikeOrDislike()" class="heart_icon" src="./assets/icon/heart_icon.png" alt="like button"></div>
            <p id="book_description">Description:<br>${description}</p>
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
        <div id="written_comments" class="written_comments">User comments:</div>
    </section>`
}