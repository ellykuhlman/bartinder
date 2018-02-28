// GLOBAL CONSTANTS -----------------------------
const allCocktails = [["﻿Applejack Old Fashioned", ["apple brandy", "maple syrup", "baking spice aromatic bitters"], "['2 oz apple brandy', 'scant teaspoon maple syrup', '1-2 dashes baking spice aromatic bitters ', 'Stir and serve on the rocks. Garnish with an expressed orange peel and cinnamon stick (optional).']"], ["White Russian", ["vodka", "coffee liqueur", "heavy cream"], "['1å_ oz vodka', '1 oz coffee liqueur', '1 oz heavy cream', '   ', 'Combine in a rocks glass over ice and stir for 10 seconds, or so.']"], ["Brooklyn", [""], "[]"], ["Red Red Rose", ["gin", "simple syrup", "lemon juice", "Campari", "strawberry", "sparkling wine"], "['1 oz gin', 'å_ oz simple syrup', 'å_ lemon juice', 'å_ oz Campari or å_ oz Aperol', '1 strawberry', 'rosÌ© or brut sparkling wine ', 'Muddle strawberry, shake and serve over ice with sparkling wine. Grapefruit peel garnish.  ']"], ["Frozen Daiquiri", ["white rum", "lime juice", "simple syrup", "salt*", "ice"], "['2 oz white rum ', 'scant 1 oz lime juice ', '1å_ oz simple syrup', 'small pinch salt (optional)', '1å_ cups ice', '   ', 'Blend for 8-10 seconds and pour into glass. Garnish with a lime disc. ']"], ["Bourbon Smash", ["bourbon", "simple syrup", "mint leaves", "lemon"], "['2 oz bourbon', 'å_ oz simple syrup', '8-10 mint leaves', 'half a lemon, quartered', '   ', 'Muddle the lemon and mint in simple syrup. Shake and serve on the rocks glass. Garnish with mint sprigs.']"], ["Strawberry Margarita", ["blanco tequila", "lime juice", "simple syrup", "strawberry"], "['2 oz blanco tequila', 'å_ oz lime juice', 'å_ - 1 oz simple syrup', '1-2 strawberries', '   ', 'Muddle the strawberries in simple syrup.  Add remaining ingredients. Shake and strain into a rocks glass rimmed with salt (optional).']"], ["Silver Gin Fizz", ["gin", "lemon juice", "simple syrup", "egg white"], "['2 oz gin', 'å_ oz lemon juice', 'å_ oz simple syrup', 'about ‰ÉÒ of an egg white', 'Pour 2-3 oz chilled soda water into a highball glass over ice. Briefly shake remaining ingredients and strain into glass. Garnish with a lemon peel.']"], ["Daiquiri", ["white rum", "lime juice", "simple syrup", "lime"], "['2 oz white rum', 'å_ oz lime juice', 'å_ oz simple syrup', 'lime disc (optional)', 'Shake and serve straight up. Express the oils and juice from the disc.']"], ["Pineapple Daiquiri", ["white rum", "lime juice", "pineapple or pineapple juice", "simple syrup"], "['2 oz white rum', 'å_ oz lime juice', 'å_ oz fresh pineapple juice or  3-4 chunks pineapple', 'å_ oz simple syrup', 'Muddle the pineapple (if using). Shake and fine strain into a chilled coupe glass.']"], ["Negroni Sbagliato", ["sweet vermouth", "Campari", "prosecco"], "['1 oz sweet vermouth', '1 oz Campari', '2-3 oz prosecco ', 'In a rocks glass, combine the Campari and sweet vermouth.  Add ice and briefly stir.  Top with Prosecco and garnish with an orange peel. ']"], ["Pina Colada", ["white rum", "pineapple or pineapple juice", "Coco Lpez", "lime juice", "ice"], "['2 oz white rum', '1 oz pineapple juice', '1 oz Coco LÌ_pez', 'å_ oz lime juice', '1å_ cups ice', '   ', 'Combine in a blender, blend for 10 seconds. Pour into a glass of choice. Garnish as desired.']"], ["Philadelphia Fish-House Punch", ["Jamaican Rum", "cognac", "apple brandy", "peach liqueur", "lemon shrub", "water"], "['3 cups Jamaican Rum', '1å_ cups cognac', 'å_ cup peach brandy (or apple brandy)', 'å_ cup peach liqueur', '2 cups lemon shrub', '1 quart cold water', 'Chill and combine all ingredients in a punch bowl over one large cube. Ladle into cups. ']"], ["Bourbon Arnold Palmer", ["teainfused bourbon", "lemon juice", "simple syrup", "water"], "['1 750ml bottle tea-infused bourbon ', '1 cup lemon juice ', '1å_ cup simple syrup (or to taste)', '2 cups ice water', '  ', 'Combine in a pitcher, add about 2 cups of ice and stir.  Pour into glasses over ice. Garnish with a lemons. ']"], ["Hemingway Daiquiri", ["white rum", "lime juice", "grapefruit juice", "maraschino", "simple syrup"], "['2 oz white rum', 'å_ oz lime juice', 'å_ oz grapefruit juice', 'å_ oz maraschino', 'å_ oz rich simple syrup or 2 teaspoons simple syrup', 'Shake and strain into a chilled coupe glass.']"], ["Old Fashioned", ["whiskey", "demerara syrup", "Angostura bitters", "orange bitters *", "Jerry Thomas Decanter Bitters *"], "['2 oz whiskey - bourbon or rye', 'å_ tsp demerara syrup - or other sugar ', '2 dashes Angostura bitters', '2 dashes orange bitters (optional)', 'small dash Jerry Thomas Decanter Bitters (optional)', 'Stir and serve on the rocks.  Garnish with a lemon and orange peel. ']"], ["Manhattan", ["whiskey", "sweet vermouth", "Angostura bitters"], "['2 å_ oz whiskey - bourbon or rye', 'å_ oz sweet vermouth', '2 dashes Angostura bitters', 'Stir, and serve straight up.Garnish with a cherry.']"], ["Martini", ["gin", "dry vermouth", "orange bitters *"], "['2å_ oz gin', 'å_ oz dry vermouth', 'dash of orange bitters (optional)', 'Stir and serve straight up. Garnish with a lemon peel.Recipe page and variations coming soon...']"], ["Margarita", ["blanco tequila", "orange liqueur", "lime juice", "simple syrup"], "['2 oz blanco tequila', '1 oz Cointreau - or other orange liqueur', 'å_ oz lime juice', 'å_ oz simple syrup', 'Shake and serve on the rocks (or up), in a salt rimmed glass - optional. ']"], ["Negroni", ["dry gin", "sweet vermouth", "Campari"], "['1å_ oz dry gin ', '1 oz sweet vermouth', '1 oz Campari', 'Stir, and serve straight up.Garnish with a cherry.']"], ["Whiskey Sour", ["whiskey", "lemon juice", "simple syrup", "egg white  *"], "['2 oz bourbon or rye whiskey', 'å_ lemon juice', 'å_ oz simple syrup', 'å_ oz egg white - optional', 'Shake hard and serve on the rocks (or up if you prefer). Garnish with an orange half wheel and cherry.']"], ["Gimlet", ["gin", "lime juice", "simple syrup"], "['2 oz gin', 'å_ oz lime juice', 'å_ oz simple syrup', 'Shake and serve on the rocks or straight.']"], ["Mint Julep", ["bourbon", "mint leaves", "simple syrup"], "['2 å_  oz bourbon', '10-12 mint leaves (no stems)', 'å_ oz simple syrup', 'In a julep cup or rocks glass, muddle the mint and simple syrup.  Add bourbon. Fill with crushed ice, gently stir. Garnish with two mint sprigs. ']"], ["Tom Collins", ["gin", "lemon juice", "simple syrup", "soda water"], "['2 oz gin', 'å_ oz lemon juice', 'å_ oz simple syrup', 'chilled soda water', 'Pour 2-3 oz soda water into a collins glass over ice. Briefly shake remaining ingredients and strain into glass. ']"], ["French 75", ["gin", "lemon juice", "simple syrup"], "['1 oz gin', 'å_ oz lemon juice', 'å_ oz simple syrup', 'Shake and strain into a Champagne flute. Top with Champagne or other sparkling wine. Garnish with a lemon peel. ']"], ["Sazerac", ["whiskey", "simple syrup", "Peychauds bitters", "Angostura bitters"], "['2 oz rye whiskey', 'å_ oz simple syrup', '4-5 dashes Peychaud‰Ûªs bitters', '1 dash Angostura bitters', \"Stir and strain into a rocks glass that's been rinsed with absinthe, no ice. Express oils from lemon peel and discard. \"]"], ["Sidecar", ["cognac", "Cointreau", "lemon juice"], "['2 oz cognac', '1 oz Cointreau', 'å_ oz lemon juice', 'Shake and serve straight up in a half sugar-rimmed glass. Garnish with an orange peel.']"], ["Mojito", ["white rum", "lime juice", "simple syrup", "mint leaves"], "['2 oz white rum', 'å_ oz lime juice', '1 oz simple syrup', '10-12 mint leaves', 'Muddle mint in simple syrup.  Add rum, lime and shake and strain into a collins glass over cracked ice. Top with 1-2 oz soda. Garnish with mint sprigs.']"], ["Moscow Mule", ["vodka", "ginger beer", "lime"], "['2 oz vodka', '4-5 oz ginger beer', 'two lime wedges', 'In a rocks glass or copper mug, add vodka, ice, squeeze in the two lime wedges and top with ginger beer.']"], ["Caipirinha", ["cachaa", "simple syrup", "lime"], "['2 oz cachaÌ¤a', 'å_ oz simple syrup', 'half a lime cut into quarters', 'Muddle lime in simple syrup. Add cachaÌ¤a, fill with ice and stir.']"], ["Martinez", ["gin", "sweet vermouth", "maraschino", "Angostura bitters", "orange bitters"], "['2 oz old tom gin', '1 oz sweet vermouth', 'å_ teaspoon Maraschino', '1 dash Angostura bitters', '1 dash orange bitters', 'Stir and serve straight up. Garnish with a lemon peel.']"], ["Pimm's Cup", ["Pimms", "gin", "lemon juice", "simple syrup"], "[\"1å_ oz Pimm's\", 'å_ oz gin', 'å_ oz lemon juice', 'å_ oz simple syrup', 'Muddle 3 cucumber discs, combine ingredients, roll and strain into wine glass. Top with 1-2 oz ginger beer. Garnish with assorted fruit and herbs. ']"], ["Last Word", ["gin", "Green Chartreuse", "maraschino", "lime juice"], "['å_ oz gin', 'å_ oz Green Chartreuse', 'å_ oz maraschino', 'å_ oz lime juice', 'Shake and serve straight up. Garnish with a cherry (if desired).']"], ["Egg Nog", ["eggs", "cognac", "dark rum", "heavy cream", "cinnamon syrup", "grated nutmeg"], "['10 eggs', '1 å_ cups Cognac', '1 å_ cups dark rum', '1 cup heavy cream', '1 cup cinnamon syrup', 'grated nutmeg', 'Whisk together eggs, cream and syrup in a mixing bowl, then stir in spirits. .']"], ["Mulled Cider", ["apple cider", "cinnamon sticks", "cardamom pods", "whole allspice", "whole cloves", "whole nutmeg", "orange zest", "dark brown sugar"], "['1 gallon apple cider', '10 cinnamon sticks', '1tablespoon cardamom pods', '1 tablespoon whole allspice', '1 tablespoon whole cloves', '4 whole nutmeg', 'Zest of 2 oranges', '1/4 cup dark brown sugar', '.']"], ["Tom's Wassail Bowl", ["madeira or sherry", "calvados", "Amber ale", "dark brown sugar", "cinnamon sticks", "ginger", "teapsoon cloves"], "['2 bottles Rainwater Madeira or Medium Dry Sherry ', '2 cups calvados', '24 oz (2 bottles) Amber ale', '3/4 cup brown sugar', '6 cinnamon sticks', '6 slices of ginger', '1/2 teapsoon cloves', '1/2 teaspoon whole allspice']"], ["Mulled Wine", ["red wine", "cognac", "ruby port", "sugar", "cinnamon sticks", "whole cloves", "cardamom pods", "orange zest"], "['4 bottles of red wine', '1 cup cognac', '1 cup ruby port', '1 1/2 cups sugar', '10 cinnamon sticks', '30 (or so) whole cloves', '10 cardamom pods', 'zest of 2 oranges', '.']"], ["Tom and Jerry", ["bourbon", "", "hot milk"], "['2 oz spirit - either 1 oz each of brandy and dark rum or 2 oz bourbon', '1 å_ oz batter - see recipe page', '4-5 oz hot milk', 'In a mug, combine batter, spirit and stir.  Add the milk little by little, while stirring continuously. Top with foamed milk and grated nutmeg.']"], ["Port of Call", ["gin", "ruby port", "lemon juice", "cinnamon syrup", "cranberry preserves"], "['1 oz gin', '1 oz ruby port', 'å_ oz lemon juice', 'å_ oz cinnabark Syrup', 'tablespoon cranberry preserves', 'Shake and strain over crushed ice in a rocks glass.  Garnish with a blackberry, raspberry and mint sprig.  Recipe page coming soon...']"], ["Hot Buttered Rum", ["aged rum", "demerara syrup", "water", "butter"], "['2 oz aged rum', 'å_ oz demerara syrup ', '4 oz water ', 'å_ tablespoon butter', 'Combine and heat over stove or in microwave.  Add butter and stir.  Grate nutmeg.']"], ["Irish Coffee", ["whiskey", "demerara syrup", "hot coffee"], "['2 oz Irish whiskey', 'å_ oz demerara or brown sugar syrup', '4-5 oz hot coffee', 'Combine in a mug and float with lightly whipped cream. Garish with cinnamon.']"], ["Log Cabin", ["apple brandy", "hazelnut-infused bourbon", "maple syrup", "Angostura bitters"], "['1 oz apple brandy', '1 oz toasted hazelnut-infused bourbon', 'å_ teaspoon maple syrup', '2 dashes angostura bitters', '1 dash baking spice forward aromatic bitters - Fee‰Ûªs Old Fashioned or The Bitter Truth Jerry Thomas Decanter.  Stir and serve on the rocks.  Garnish with an orange peel. Recipe page coming soon‰Û_']"], ["Hot Toddy", ["whiskey", "cinnamon syrup", "lemon juice", "Angostura bitters", "water"], "['1å_ oz bourbon, rye or apple brandy', 'å_ oz cinnamon syrup or å_ oz honey', 'å_ oz lemon juice', 'dash angostura bitters', '4-5 oz Hot water', 'For best results, combine and heat on the stove (do not boil) or in the microwave. ']"]];
const cocktailObjectList = []
const barList = ["aged rum", "Amber ale", "Angostura bitters", "apple brandy", "apple cider", "baking spice aromatic bitters", "blanco tequila", "bourbon", "butter", "cachaa", "calvados", "Campari", "cardamom pods", "cinnamon sticks", "cinnamon syrup", "Coco Lpez", "coffee liqueur", "cognac", "Cointreau", "cranberry preserves", "dark brown sugar", "dark rum", "demerara syrup", "dry gin", "dry vermouth", "egg white", "eggs", "gin", "ginger", "ginger beer", "grapefruit juice", "grated nutmeg", "Green Chartreuse", "hazelnut-infused bourbon", "heavy cream", "hot coffee", "hot milk", "ice", "Jamaican Rum", "lemon", "lemon juice", "lemon shrub", "lime", "lime juice", "madeira or sherry", "maple syrup", "maraschino", "mint leaves", "orange bitters", "orange liqueur", "orange zest", "peach liqueur", "Peychauds bitters", "Pimms", "pineapple or pineapple juice", "prosecco", "red wine", "ruby port", "simple syrup", "soda water", "sparkling wine", "strawberry", "sugar", "sweet vermouth", "teainfused bourbon", "teapsoon cloves", "vodka", "water", "whiskey", "white rum", "whole allspice", "whole cloves", "whole nutmeg"]

const listLength = allCocktails.length;

const myMatchPercents = [];

const brandy = new TasteAttr('Brandy', 'i', ['Cognac', 'brandy'], ['bourbon', 'rye', 'whiskey']);
const gin = new TasteAttr('Gin', 'i', ['gin'], ['vodka']);
const rum = new TasteAttr('Rum', 'i', ['rum'], []);
const tequila = new TasteAttr('Tequila', 'i', ['tequila'], ['mezcal']);
const vodka = new TasteAttr('Vodka', 'i', ['vodka'], ['gin']);
const whiskey = new TasteAttr('Whiskey', 'i', ['bourbon', 'rye', 'whiskey'], ['Cognac', 'brandy']);
const autumnal = new TasteAttr('Autumnal', 'i', ['cranberry', 'cinnamon'], []);
const bitter = new TasteAttr('Bitter', 'i', ['Campari', 'bitters'], []);
const bubbly = new TasteAttr('Bubbly', 'i', ['sparkling', 'champagne', 'soda'], []);
const herbal = new TasteAttr('Herbal', 'i', ['dry vermouth', 'chartreuse'], ['bitters']);
const citrus = new TasteAttr('Citrus', 'i', ['lime', 'lemon', 'grapefruit'], ['pineapple', 'coco']);
const tropical = new TasteAttr('Tropical', 'i', ['pineapple', 'coco'], ['lime', 'lemon', 'grapefruit']);
const refreshing = new TasteAttr('Refreshing', 'p', ['shake'], ['blend']);
const boozy = new TasteAttr('Boozy', 'p', ['stir'], []);

const cocktailAttributes = [brandy, gin, rum, tequila, vodka, whiskey, autumnal, bitter, bubbly, herbal, citrus, tropical, refreshing, boozy];
const myAttributes = [];
var myBar;
var myMenu;

// GLOBAL DOM CONSTANTS -----------------------
const barSpot = document.getElementById('barForm');
const barCheckBoxSpot = document.getElementById('barBoxes');
const tasteSpot = document.getElementById('tastes');
const matchSpot = document.getElementById('matches');

// CLASSES -------------------------------
// Taste attribute Class
function TasteAttr(name, type, direct, similar) {
    this.name = name;
    this.type = type;
    this.direct = direct;
    this.similar = similar;
}

// Cocktail Class
function Cocktail(name, ingredients, recipe) {
    this.name = name;
    this.ingredients = ingredients;
    this.recipe = recipe;
    this.matchPro = 0;
    this.matchCon = 0;

    this.printName = function() {
        return this.name;
    }
}

// Bar Class
function Bar(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
}


// FUNCTIONS -----------------------------------


// HELPER FUNCTIONS --------------------------------

function setAttributes(element, object) { // Sets multiple attributes for an element
    for (key in object) {
        element.setAttribute(key, object[key]);
    }
}

function makeButton(value, functions){ // Makes a button element
    let button = document.createElement('input');
    button.type = 'button';
    button.value = value;
    button.addEventListener('click', functions);
    return button;
}

function clear(element) { // Clears all HTML elements
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function checkAll(list) {  // Function to check all checkboxes
    for (item in list) {
        document.getElementById(list[item]).checked = true;
    }
}

function isChecked(list) { // Checks if an item is checked off, then adds to the bar list
    const checkedItems = [];
    for (item in list) {
        if (document.getElementById(list[item]).checked) {
            checkedItems.push(list[item]);
        }
    }
    return checkedItems;
}

// BAR FUNCITONS ---------------------------------------------
function barInput() {
    for (item in barList) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'bar-checkbox-div');
        
        let newCheckItem = document.createElement('INPUT');
        setAttributes(newCheckItem, {'type': 'checkbox', 
            'class': 'bar-checkbox',
            'id': barList[item],
            'name': 'bar',
            'value': barList[item]})

        let newLabel = document.createElement('label');
        setAttributes(newLabel, {'for': barList[item], 'class': 'bar-checkbox-label'})
        newLabel.appendChild(document.createTextNode(barList[item]));
        
        let newSpan = document.createElement('span');
        newSpan.setAttribute('class', 'bar-checkmark');
        
        for (i in a = [newCheckItem, newSpan, newLabel]) {
            newDiv.appendChild(a[i]);
        }

        barCheckBoxSpot.appendChild(newDiv);
    }
}

function checkAllBar() {
    checkAll(barList);
}


function makeBar() {
    const checkedItems = isChecked(barList);
    myBar = new Bar('myBar', checkedItems);
    clear(barSpot);
    return myBar;
}

// TASTE INPUT FUNCTIONS  ---------------------------------------


function makeTasteSpot() {
    tasteSpot.setAttribute('style', 'height:300px')
    
    let tasteHeader = document.createElement('h3');
    tasteHeader.appendChild(document.createTextNode('Step 2: Make your matches'));
    tasteSpot.appendChild(tasteHeader);
    
    let buttonDiv = document.createElement('div')
    buttonDiv.setAttribute('class','centerButton');
    
    let tasteStartButton = makeButton('Start Swiping', function (event) {
        clear(tasteSpot),
        inputTastes(), 
        event.stopPropagation();
    });
    
    buttonDiv.appendChild(tasteStartButton);
    tasteSpot.appendChild(buttonDiv)
}


function inputTastes() {
    updateAttributes();
    const i = 0;
    const likes = [];
    const dislikes = [];
    tasteWriter(i, likes, dislikes);
}


function updateAttributes() {
    console.log(myBar.ingredients)
    for (item in cocktailAttributes) {
        if (cocktailAttributes[item].type === 'i') {
            let yes = false
            for (ingredient in cocktailAttributes[item].direct) {
                console.log(cocktailAttributes[item].direct[ingredient]);
                let re = new RegExp(cocktailAttributes[item].direct[ingredient], 'i');

                if (myBar.ingredients.filter(function(sundae) {
                    return eval(re).test(sundae)}).length > 0) {    
                    yes = true;
                    break;
                }
            }
            if (yes) {
                myAttributes.push(cocktailAttributes[item]);
            }
        } else {
            myAttributes.push(cocktailAttributes[item]);
        }
    }
    return myAttributes;
}


function tasteWriter(i, likes, dislikes) {
    if (i >= myAttributes.length) {
        makeMatches(likes, dislikes);
    } else {
        let newSpace = document.createElement('div');
        newSpace.setAttribute('style', 'height:300px');
        let mc = new Hammer(newSpace);
        // console.log(mc);
        let cocktailName = document.createElement('h3');
        cocktailName.setAttribute('class', 'tasteName')
        let nameText = document.createTextNode(myAttributes[i].name);
        cocktailName.appendChild(nameText);
        mc.on('swipeleft swiperight', function(event) {
            if (event.type === 'swipeleft') {
                dislikes = dislikes.concat(myAttributes[i].direct);
            } else if (event.type === 'swiperight') {
                likes = likes.concat(myAttributes[i].direct);
            }
            i++;
            clear(tasteSpot);
            tasteWriter(i, likes, dislikes);
        });

        newSpace.appendChild(cocktailName);
        tasteSpot.appendChild(newSpace);
    }
}




// MATCHING & PRINTING FUNCTIONS ------------------------------------

function makeMatches(likes, dislikes) {
    cocktailMatches(likes, dislikes);
    makeMatchSpot();
}

function cocktailMatches(likes, dislikes) {
    myMenu = makeMenu();

    for (item in myMenu) {
        let pro = 0,
            con = 0,
            appears = 0;

        for (ingredient in likes) {
            // sets RegExp with the ingredient
            let re = '/' + likes[ingredient] + '/';
            // Creates an array of items that contain the ingredient
            // Checks if that array contains anything
            if (myMenu[item].ingredients.filter(function(iceCream) {
                    return eval(re).test(iceCream)}).length > 0) {
                pro++;
                appears++;
            } 
        }
        for (ingredient in dislikes) {
            let re = '/' + dislikes[ingredient] + '/';
            if (myMenu[item].ingredients.filter(function(sundae) {
                    return eval(re).test(sundae)}).length > 0) {    
                con++;
                appears++;
            }
        }

        myMenu[item].matchPro = Math.round((pro/appears) * 100);
        myMenu[item].matchCon = Math.round((con/appears) * 100);

        if (!(myMatchPercents.includes(myMenu[item].matchPro)) && !isNaN(myMenu[item].matchPro)) {
            myMatchPercents.push(myMenu[item].matchPro);
        }

        console.log(myMatchPercents);
    }   
}


function makeMenu() {  // Makes the menu based on items in the bar
    const newMenu = []
    for(item in cocktailObjectList) {
        let have = true;
        for(ingredient in cocktailObjectList[item].ingredients) {
            // Checks if the ingredient has a * indicating optional
            if (/[*]+/.test(cocktailObjectList[item].ingredients[ingredient])) {
                continue;
            // Checks if the ingredient is in the bar
            } else if (myBar.ingredients.includes(cocktailObjectList[item].ingredients[ingredient])){
                continue;
            // Checks that the ingredient is not a blank string
            } else if (/\S/.test(cocktailObjectList[item].ingredients[ingredient])){
                have = false;
            }
        }

        if (have) {
            newMenu.push(cocktailObjectList[item]);
        }
    }

    return newMenu;
}


function makeMatchSpot() {
    tasteSpot.setAttribute('style', 'height:0px');
    matchSpot.setAttribute('style', 'min-height:300px');
    let buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'centerButton');
    let matchButton = makeButton('See your matches!', function (event) {
        clear(matchSpot),
        makeTopMatches(), 
        event.stopPropagation();
    });
    buttonDiv.appendChild(matchButton)
    matchSpot.appendChild(buttonDiv);
}


function makeTopMatches() {
    let topMenu = []
    console.log('1' + Math.max(...myMatchPercents));
    for (item in myMenu) {
        if (myMenu[item].matchPro === Math.max(...myMatchPercents)) {
            topMenu.push(myMenu[item]);
        }
    }

    while (topMenu.length < 3) {
        let maximum = Math.max(...myMatchPercents);
        console.log(maximum);
        let maxIndex = myMatchPercents.indexOf(maximum);
        myMatchPercents.splice(maxIndex, 1);
        for (item in myMenu) {
            if (myMenu[item].matchPro === Math.max(...myMatchPercents)) {
                topMenu.push(myMenu[item])
            }
        }
    }

    printTopMatches(topMenu);

}

function printTopMatches(menu) {
    let tableSpot = document.createElement('table');
    let tableBody = document.createElement('tbody');
    let headerRow = document.createElement('tr');
    let a = ['Cocktail', 'Your Match Percentage']
    for (let i in a) {
        let cell = document.createElement('th');
        let cellText = document.createTextNode(a[i]);
        cell.appendChild(cellText);
        headerRow.appendChild(cell);
    }

    tableBody.appendChild(headerRow);

    for (item in menu) {
        let nameText = document.createTextNode(menu[item].name);
        let proText = document.createTextNode(menu[item].matchPro);

        let b = [nameText, proText];

        let row = document.createElement('tr');
        for (let j in b) {
            let cell = document.createElement('td');
            cell.appendChild(b[j]);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);

    tableSpot.appendChild(tableBody);
    matchSpot.appendChild(tableSpot);
    }

}


// MAIN ------------------------------------------
// Makes all the cocktails
for (let i = 0; i < listLength; i++) {
    let cocktail = new Cocktail(allCocktails[i][0], allCocktails[i][1], allCocktails[i][2]);
    cocktailObjectList.push(cocktail);
}

barInput();





