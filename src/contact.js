const renderContact = () => {
  const content = document.querySelector("#content");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contactContainer.innerHTML = `        
    <main class="main">

    <h1>CONTACT US</h1>
    <p>Send us a message and we'll get back to you when we feel like it.</p>
    <form action="#" method="post" id="userform">
        <input class="input" type="text" id="name" name="name" placeholder="Name" required>

        <input class="input" type="email" id="email" name="email" placeholder="Email" required>

        <input class="input" type="tel" id="phone" name="phone" placeholder="Phone Number" required>

        <textarea class="input" id="textarea" maxlength="120" name="comment" form="userform" placeholder="Your Message"></textarea>

        <button class="send-btn" type="submit">SEND</button>



    </form>


</main>


`;

  content.appendChild(contactContainer);
};

export default renderContact;
