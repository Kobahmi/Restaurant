(()=>{"use strict";const n=()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("about-container"),e.innerHTML='        \n    <div class="gallery">\n    <h1>ABOUT</h1>\n    <img class="restaurant" src="./images/restaurant.jpg" alt="food">\n</div>\n    <main class="main">\n    <p>KOBAHMI RAMEN is an alien pub, an inviting place to enjoy exquisite food and drinks.\n        It lets you unwind after a hard day\'s work for our spaghetti overlords.\n    </p>\n    <p>Guests will enjoy an array of traditional and modern specialties\n        made for sharing and including our daily specials.\n    </p>\n    <p>At KOBAHMI RAVEN, our mission is to serve each and every one of our guests\n        "happiness" with both our mouth-watering dishes and our highest quality\n        service.\n    </p>\n\n</main>\n\n\n<footer class="footer">Copyright @Kobahmi</footer>',n.appendChild(e)};(()=>{const e=document.querySelector("#content"),a=document.createElement("header");a.classList.add("header");const s=document.createElement("div");s.classList.add("brand");const t=document.createElement("h1");t.textContent="KOBAHMI";const o=document.createElement("h3");o.textContent="RAMEN";const i=document.createElement("div");i.classList.add("nav-container");const d=document.createElement("button");d.classList.add("nav"),d.setAttribute("id","about-btn"),d.textContent="ABOUT",d.addEventListener("click",(a=>{a.target.classList.contains("active")||(e.removeChild(e.lastChild),l(d),n())}));const c=document.createElement("button");c.classList.add("nav"),c.setAttribute("id","menu-btn"),c.textContent="MENU",c.addEventListener("click",(n=>{n.target.classList.contains("active")||(e.removeChild(e.lastChild),l(c),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("menu-container"),e.innerHTML='        \n    <div class="gallery">\n    <h1>MENU</h1>\n    <img class="restaurant" src="./images/food.jpg" alt="food">\n</div>\n\n<main class="main">\n<div class="menu-grid">\n<div class="menu-card">\n    <h2>Soups + Salads</h2>\n\n    <div class="food-container">\n    <div class="food">\n    <h3>Miso Soup</h3>\n    <p>tofu + wakame + green onions</p>\n    <p>$4</p>\n    </div>\n\n    <div class="food">\n    <h3>Seaweed + Tofu Salad</h3>\n    <p>tofu + seaweed + greens</p>\n    <p>$14</p>\n    </div>\n\n    <div class="food">\n    <h3>GARDEN SALAD</h3>\n    <p>fresh greens + crispy lotus root + taro chips + okra + sweet + onion dressing</p>\n    <p>$14</p>\n    </div>\n\n    <div class="food">\n    <h3>SPACE SALAD</h3>\n    <p>fresh greens + crispy lotus root + rocks</p>\n    <p>$14</p>\n    </div>\n\n    <div class="food">\n    <h3>GARDEN SALAD</h3>\n    <p>fresh greens + crispy lotus root</p>\n    <p>$14</p>\n    </div>\n\n\n    <div class="food">\n    <h3>CRISPY BURDOCK & DUCK SALAD</h3>\n    <p>sous vide duck breast + soft-boiled egg + parmesan + wasabi mayo dressing</p>\n    <p>$16</p>\n    </div>\n    </div>\n</div>\n\n\n<div class="menu-card">\n    <h2>Noodles</h2>\n\n    <div class="food-container">\n    <div class="food">\n    <h3>Mentai Kimchi Udon</h3>\n    <p>spicy cod roe + kimchi + green onions</p>\n    <p>$15</p>\n    </div>\n\n    <div class="food">\n    <h3>STIR-FRIED BEEF UDON</h3>\n    <p>mushrooms + green onions</p>\n    <p>$17</p>\n    </div>\n\n    <div class="food">\n    <h3>DUCK & SPINACH UDON</h3>\n    <p>sous vide duck breast + wakame + tempura bits + dashi broth</p>\n    <p>$16</p>\n    </div>\n\n    <div class="food">\n    <h3>The "OG" Beef Udon</h3>\n    <p>onions + dashi broth</p>\n    <p>$17</p>\n    </div>\n\n    <div class="food">\n    <h3>TRUFFLE CARBONARA UDON</h3>\n    <p>mushrooms + onions + soft-boiled egg + truffle oil</p>\n    <p>$17</p>\n    </div>\n\n    <div class="food">\n    <h3>SIZZLING OKONOMIYAKI RAMEN</h3>\n    <p>okonomiyaki pancake + tonkatsu sauce + spicy mayo + bonito flakes</p>\n    <p>$15</p>\n    </div>\n    </div>\n</div>\n\n\n<div class="menu-card">\n    <h2>Bento</h2>\n\n    <div class="food-container">\n    <div class="food">\n    <h3>The OG Beef</h3>\n    <p>$16</p>\n    </div>\n\n    <div class="food">\n    <h3>JFC AKA Karaage</h3>\n    <p>$16</p>\n    </div>\n\n    <div class="food">\n    <h3>Grilled Salmon</h3>\n    <p>$16</p>\n    </div>\n\n    <div class="food">\n    <h3>Grilled Pyke</h3>\n    <p>$16</p>\n    </div>\n\n    <div class="food">\n    <h3>Grilled Shark</h3>\n    <p>$40</p>\n    </div>\n\n    <div class="food">\n    <h3>Grilled Swordfish</h3>\n    <p>$50</p>\n    </div>\n\n    <div class="food">\n    <h3>Grilled Whale</h3>\n    <p>$60</p>\n    </div>\n\n\n    <div class="food">\n    <h3>Grilled Mackerel</h3>\n    <p>$16</p>\n    </div>\n    </div>\n</div>\n\n\n<div class="menu-card">\n    <h2>Sweets</h2>\n\n    <div class="food-container">\n    <div class="food">\n    <h3>MATCHA TIRAMISU</h3>\n    <p>green tea + lady fingers + cream cheese</p>\n    <p>$8</p>\n    </div>\n\n    <div class="food">\n    <h3>Matcha Cheesecake</h3>\n    <p>green tea cheesecake + whipped cream</p>\n    <p>$6</p>\n    </div>\n\n    <div class="food">\n    <h3>Hojicha Brulee</h3>\n    <p>roasted green tea + custard + caramelized sugar</p>\n    <p>$8</p>\n    </div>\n\n\n    <div class="food">\n    <h3>Matcha Ice Cream</h3>\n    <p>green tea powder + fresh mint + crispy rice paper</p>\n    <p>$7</p>\n    </div>\n    \n    <div class="food">\n    <h3>KUROGOMA ICE CREAM</h3>\n    <p>roasted kinako powder + fresh mint + crispy rice paper</p>\n    <p>$7</p>\n    </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n</div>\n\n</main>\n\n\n<footer class="footer">Copyright @Kobahmi</footer>',n.appendChild(e)})())}));const r=document.createElement("button");r.classList.add("nav"),r.setAttribute("id","contact-btn"),r.textContent="CONTACT",r.addEventListener("click",(n=>{n.target.classList.contains("active")||(e.removeChild(e.lastChild),l(r),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("contact-container"),e.innerHTML='        \n    <main class="main">\n\n    <h1>CONTACT US</h1>\n    <p>Send us a message and we\'ll get back to you when we feel like it.</p>\n    <form action="#" method="post" id="userform">\n        <input class="input" type="text" id="name" name="name" placeholder="Name" required>\n\n        <input class="input" type="email" id="email" name="email" placeholder="Email" required>\n\n        <input class="input" type="tel" id="phone" name="phone" placeholder="Phone Number" required>\n\n        <textarea class="input" id="textarea" maxlength="120" name="comment" form="userform" placeholder="Your Message"></textarea>\n\n        <button class="send-btn" type="submit">SEND</button>\n\n\n\n    </form>\n\n\n</main>\n\n\n<footer class="footer">Copyright @Kobahmi</footer>',n.appendChild(e)})())})),s.appendChild(t),s.appendChild(o),i.appendChild(d),i.appendChild(c),i.appendChild(r),a.appendChild(s),a.appendChild(i),e.appendChild(a);const l=n=>{document.querySelectorAll(".nav").forEach((n=>{n.classList.remove("active")})),n.classList.add("active")};l(d),n()})()})();