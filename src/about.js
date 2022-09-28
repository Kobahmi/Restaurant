const renderAbout = () => {
  const content = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  aboutContainer.innerHTML = `        
    <div class="gallery">
    <h1>ABOUT</h1>
    <img class="restaurant" src="./images/restaurant.jpg" alt="food">
</div>
    <main class="main">
    <p>KOBAHMI RAMEN is an alien pub, an inviting place to enjoy exquisite food and drinks.
        It lets you unwind after a hard day's work for our spaghetti overlords.
    </p>
    <p>Guests will enjoy an array of traditional and modern specialties
        made for sharing and including our daily specials.
    </p>
    <p>At KOBAHMI RAVEN, our mission is to serve each and every one of our guests
        "happiness" with both our mouth-watering dishes and our highest quality
        service.
    </p>

</main>


<footer class="footer">Copyright @Kobahmi</footer>`;

  content.appendChild(aboutContainer);
};

export default renderAbout;
