const renderMenu = () => {
    const content = document.querySelector("#content")

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuContainer.innerHTML = `        
    <div class="gallery">
    <h1>MENU</h1>
    <img class="restaurant" src="./images/restaurant.jpg" alt="food">
</div>

<main class="main">
<div class="menu-grid">
<div class="menu-card">
    <h2>Soups + Salads</h2>

    <div class="food-container">
    <div class="food">
    <h3>Miso Soup</h3>
    <p>tofu + wakame + green onions</p>
    <p>$4</p>
    </div>

    <div class="food">
    <h3>Seaweed + Tofu Salad</h3>
    <p>tofu + seaweed + greens</p>
    <p>$14</p>
    </div>

    <div class="food">
    <h3>GARDEN SALAD</h3>
    <p>fresh greens + crispy lotus root + taro chips + okra + sweet + onion dressing</p>
    <p>$14</p>
    </div>

    <div class="food">
    <h3>SPACE SALAD</h3>
    <p>fresh greens + crispy lotus root + rocks</p>
    <p>$14</p>
    </div>

    <div class="food">
    <h3>GARDEN SALAD</h3>
    <p>fresh greens + crispy lotus root</p>
    <p>$14</p>
    </div>


    <div class="food">
    <h3>CRISPY BURDOCK & DUCK SALAD</h3>
    <p>sous vide duck breast + soft-boiled egg + parmesan + wasabi mayo dressing</p>
    <p>$16</p>
    </div>
    </div>
</div>


<div class="menu-card">
    <h2>Noodles</h2>

    <div class="food-container">
    <div class="food">
    <h3>Mentai Kimchi Udon</h3>
    <p>spicy cod roe + kimchi + green onions</p>
    <p>$15</p>
    </div>

    <div class="food">
    <h3>STIR-FRIED BEEF UDON</h3>
    <p>mushrooms + green onions</p>
    <p>$17</p>
    </div>

    <div class="food">
    <h3>DUCK & SPINACH UDON</h3>
    <p>sous vide duck breast + wakame + tempura bits + dashi broth</p>
    <p>$16</p>
    </div>

    <div class="food">
    <h3>The "OG" Beef Udon</h3>
    <p>onions + dashi broth</p>
    <p>$17</p>
    </div>

    <div class="food">
    <h3>TRUFFLE CARBONARA UDON</h3>
    <p>mushrooms + onions + soft-boiled egg + truffle oil</p>
    <p>$17</p>
    </div>

    <div class="food">
    <h3>SIZZLING OKONOMIYAKI RAMEN</h3>
    <p>okonomiyaki pancake + tonkatsu sauce + spicy mayo + bonito flakes</p>
    <p>$15</p>
    </div>
    </div>
</div>


<div class="menu-card">
    <h2>Bento</h2>

    <div class="food-container">
    <div class="food">
    <h3>The OG Beef</h3>
    <p>$16</p>
    </div>

    <div class="food">
    <h3>JFC AKA Karaage</h3>
    <p>$16</p>
    </div>

    <div class="food">
    <h3>Grilled Salmon</h3>
    <p>$16</p>
    </div>

    <div class="food">
    <h3>Grilled Pyke</h3>
    <p>$16</p>
    </div>

    <div class="food">
    <h3>Grilled Shark</h3>
    <p>$40</p>
    </div>

    <div class="food">
    <h3>Grilled Swordfish</h3>
    <p>$50</p>
    </div>

    <div class="food">
    <h3>Grilled Whale</h3>
    <p>$60</p>
    </div>


    <div class="food">
    <h3>Grilled Mackerel</h3>
    <p>$16</p>
    </div>
    </div>
</div>


<div class="menu-card">
    <h2>Sweets</h2>

    <div class="food-container">
    <div class="food">
    <h3>MATCHA TIRAMISU</h3>
    <p>green tea + lady fingers + cream cheese</p>
    <p>$8</p>
    </div>

    <div class="food">
    <h3>Matcha Cheesecake</h3>
    <p>green tea cheesecake + whipped cream</p>
    <p>$6</p>
    </div>

    <div class="food">
    <h3>Hojicha Brulee</h3>
    <p>roasted green tea + custard + caramelized sugar</p>
    <p>$8</p>
    </div>


    <div class="food">
    <h3>Matcha Ice Cream</h3>
    <p>green tea powder + fresh mint + crispy rice paper</p>
    <p>$7</p>
    </div>
    
    <div class="food">
    <h3>KUROGOMA ICE CREAM</h3>
    <p>roasted kinako powder + fresh mint + crispy rice paper</p>
    <p>$7</p>
    </div>
    </div>
</div>









</div>

</main>


<footer class="footer">Copyright @Kobahmi</footer>`;

    content.appendChild(menuContainer)
}

export default renderMenu