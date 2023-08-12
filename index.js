let map;
var marker;
const {encoding} = await google.maps.importLibrary("geometry")

var guess_country = "";
var country_var = "";
var dish_var = "";
var link_var = "";
var guess_lat;
var guess_long;
var lat_var;
var long_var;
var distance;
var sim_score;

var options = [
    {country: "Afghanistan", food: "Kabuli Pulao", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/rice-pilaf.jpg"},
    {country: "Antigua & Barbuda", food: "Fungee & Pepperpot", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/fungee-and-pepperpot-1024x678.jpg"},
    {country: "Australia", food: "Meat Pie", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/australian-meat-pies-with-ketchup-1024x613.jpg"},
    {country: "Australia", food: "Roasted Lamb", link: "https://xyuandbeyond.com/wp-content/uploads/2022/01/leg-of-lamb-1024x647.jpg"},
    {country: "Australia", food: "Lamingtons", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/1024px-Lamingtons_on_a_plate.jpg"},
    {country: "Australia", food: "BBQ Snags", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/aussie-snags-bbq-1024x768.jpg"},
    {country: "Austria", food: "Wiener Schnitzel", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/schnitzel-1024x664.jpg"},
    {country: "Azerbaijan", food: "Plov", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Plov-cc-Shashi-Bellamkonda-1024x1024.jpg"},
    {country: "Bangladesh", food: "Fish and Rice", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/fish-and-rice-on-banana-leaf-1024x682.jpg"},
    {country: "Barbados", food: "Cou-Cou and Flying Fish", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/cou-cou-flying-fish-1024x576.jpg"},
    {country: "Belgium", food: "Moules-frites", link: "https://xyuandbeyond.com/wp-content/uploads/2019/10/fresh-mussels.jpg"},
    {country: "Benin", food: "Kuli Kuli", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/1024px-Kuli_kuli_a_local_snack.jpg"},
    {country: "Bhutan", food: "Ema Datshi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/1024px-Bhutanese_hemadatsi.jpg"},
    {country: "Bosnia & Herzegovina", food: "Ćevapi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/cevapi-1024x684.jpg"},
    {country: "Brazil", food: "Feijoada", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/feijoada-1024x682.jpg"},
    {country: "Cambodia", food: "Amok Trey", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/amok-trey.jpg"},
    {country: "Canada", food: "Poutine", link: "https://xyuandbeyond.com/wp-content/uploads/poutine-1024x689.jpg"},
    {country: "Canada", food: "Butter Tarts", link: "https://images-gmi-pmc.edge-generalmills.com/980e0cfd-d17f-4e56-acbf-b61fce74413c.jpg"},
    {country: "Canada", food: "Nanaimo Bars", link: "https://static01.nyt.com/images/2019/03/27/dining/22nanaimorex/merlin_150934053_2e941dba-a5b4-4183-a991-8d2eb3428fb8-threeByTwoMediumAt2X.jpg"},
    {country: "Canada", food: "Montreal-style Smoked Meat and Bagels", link: "https://xyuandbeyond.com/wp-content/uploads/2019/07/1024px-Schwartz_smoked_meat_montreal-e1578574568374.jpg"},
    {country: "Chile", food: "Pastel de Choclo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Pastel-de-Choclo-1024x682.jpg"},
    {country: "China", food: "Peking duck", link: "https://xyuandbeyond.com/wp-content/uploads/crispy-duck-in-the-window-1024x768.jpg"},
    {country: "Colombia", food: "Bandeja Paisa", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Bandeja-Paisa-1024x768.jpg"},
    {country: "Colombia", food: "Arepas", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/arepa-1024x768.jpg"},
    {country: "Côte d'Ivoire", food: "Aloco", link: "https://theivoryplates.files.wordpress.com/2017/03/un_plat_dalloco_fried_plantains.jpg?w=720"},
    {country: "Cuba", food: "Ropa Vieja", link: "https://xyuandbeyond.com/wp-content/uploads/2017/12/ropa-vieja-960x720.jpg"},
    {country: "Cyprus", food: "Fasolada", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/white-bean-soup-greek-682x1024.jpg"},
    {country: "Czech Republic", food: "Vepřo knedlo zelo", link: "https://xyuandbeyond.com/wp-content/uploads/2023/06/roast-pork-and-dumplings.jpg"},
    {country: "Denmark", food: "Frikadeller", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Frikadeller.jpg"},
    {country: "Dominica", food: "Callaloo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/callaloo-1024x600.jpg"},
    {country: "Ecuador", food: "Ceviche", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Peruvian-Ceviche.jpg"},
    {country: "Egypt", food: "Ful Mademes", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/1024px-Ful_medames.jpg"},
    {country: "Egypt", food: "Kushari", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Koshari-kushary-1024x683.jpg"},
    {country: "El Salvador", food: "Pupusas", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/pupasa-1024x768.jpg"},
    {country: "England", food: "Roast Dinner", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/roast-beef-dinner-Sunday-lunch-1024x768.jpg"},
    {country: "England", food: "Fish and Chips", link: "https://xyuandbeyond.com/wp-content/uploads/2019/06/fish-and-chips-e1577980391386.jpg"},
    {country: "Estonia", food: "Verivorst", link: "https://xyuandbeyond.com/wp-content/uploads/2022/06/blood-pudding-1024x682.jpg"},
    {country: "Ethiopia", food: "Wat with injera", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/doro-wat-on-injera.jpg"},
    {country: "France", food: "Crêpe & galettes", link: "https://xyuandbeyond.com/wp-content/uploads/2021/02/buckwheat-galetter.jpg"},
    {country: "France", food: "Pot-au-Feu", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/stew-french-1024x682.jpg"},
    {country: "France", food: "Cheese", link: "https://xyuandbeyond.com/wp-content/uploads/2021/02/french-cheese-travelling-in-France.jpg"},
    {country: "France", food: "Croque Madame and Croque Monsieur", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/croque-monsieur-1024x682.jpg"},
    {country: "France", food: "Cassoulet", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/cassoulet-1024x682.jpg"},
    {country: "France", food: "French Onion Soup", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/french-onion-soup-1024x682.jpg"},
    {country: "France", food: "Escargot", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/french-escargot-snails-1024x685.jpg"},
    {country: "France", food: "Jambon et Beurre", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/jambon-beurre-768x1024.jpg"},
    {country: "Georgia", food: "Khachapuri", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/khachapuri--682x1024.jpg"},
    {country: "Germany", food: "Sauerbraten", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/sauerbraten-1024x682.jpg"},
    {country: "Germany", food: "Currywurst", link: "https://xyuandbeyond.com/wp-content/uploads/2021/06/currywurst-1024x682.jpg"},
    {country: "Ghana", food: "Fufu", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/fufuandgoatpeppersoup-1024x576.jpg"},
    {country: "Greece", food: "Fasolada", link: "https://www.mygreekdish.com/wp-content/uploads/2014/01/Traditional-Greek-bean-soup-recipe-Fasolada.jpeg"},
    {country: "Greece", food: "Moussaka", link: "https://www.mygreekdish.com/wp-content/uploads/2013/05/Moussaka-recipe-Traditional-Greek-Moussaka-with-Eggplants.jpg"},
    {country: "Guyana", food: "Pepperpot", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/pepperpot-1024x609.jpg"},
    {country: "Haiti", food: "Fried Pork with Rice & Beans", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/fried-pork-with-rice-1024x498.jpg"},
    {country: "Honduras", food: "Plato Tipico de Honduras", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/plato.jpg"},
    {country: "Hong Kong", food: "Dim Sum", link: "https://xyuandbeyond.com/wp-content/uploads/chinese-dim-sum-in-Chinatown.jpg"},
    {country: "Hungary", food: "Goulash", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/hungarian-goulash.jpg"},
    {country: "Iceland", food: "Skyr", link: "https://www.luvele.com/cdn/shop/articles/skyr_06b_1024x.png?v=1630383002"},
    {country: "Iceland", food: "Hákarl", link: "https://live.staticflickr.com/2159/1814435667_c6a300d6bc_c.jpg"},
    {country: "Iceland", food: "Rye bread and butter", link: "https://xyuandbeyond.com/wp-content/uploads/2017/11/Icelandic_Rye_Bread_ofpenguinsandelephants-960x640.jpg"},
    {country: "India", food: "Biriyani", link: "https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg"},
    {country: "India", food: "Tandoori Chicken", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg"},
    {country: "India", food: "Masala Dosa", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/indian-dosa2-1024x576.jpg"},
    {country: "Indonesia", food: "Nasi Goreng", link: "https://images.getrecipekit.com/20230527000540-andy-20cooks-20-20nasi-20goreng.jpg?aspect_ratio=16:9&quality=90&"},
    {country: "Iran", food: "Chelo Kebab", link: "https://xyuandbeyond.com/wp-content/uploads/2022/02/Kebab-1024x768.jpg"},
    {country: "Ireland", food: "Irish Stew", link: "https://xyuandbeyond.com/wp-content/uploads/2018/04/Irish-stew-2-e1577971733548.jpg"},
    {country: "Ireland", food: "Colcannon", link: "https://xyuandbeyond.com/wp-content/uploads/2018/10/colcannon-e1539959203368.jpg"},
    {country: "Ireland", food: "Boxty", link: "https://xyuandbeyond.com/wp-content/uploads/2022/11/boxty-with-bacon-1024x683.jpg"},
    {country: "Ireland", food: "Brown Soda Bread", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/Irish_brown_soda_breadBy-%C2%A9-ODea-at-Wikimedia-Commons-CC-BY-SA-4.0-CC-BY-SA-4.0-1024x768.jpg"},
    {country: "Italy", food: "Ragu alla Bolognese", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/spag-bol-1024x576.jpg"},
    {country: "Italy", food: "Napoletana Pizza", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/via-mercanti-pizza-double-1024x731.jpg"},
    {country: "Italy", food: "Fiorentina Steak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/Fiorentina-Steak-1024x768.jpg"},
    {country: "Italy", food: "Risotto", link: "https://viaverdimiami.com/wp-content/uploads/2017/04/2017-04-14-ViaVerdi.jpg"},
    {country: "Italy", food: "Prosciutto di Parma", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/serving-jamon-1024x682.jpg"},
    {country: "Jamaica", food: "Ackee and Saltfish", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/ackee-and-saltfish-1024x682.jpg"},
    {country: "Jamaica", food: "Rice and Peas", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/flying-fish-and-rice-1024x686.jpg"},
    {country: "Japan", food: "Curry", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/japanese-curry-1024x682.jpg"},
    {country: "Japan", food: "Katsudon", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/katsudon.jpg"},
    {country: "Japan", food: "Sushi & Sashimi", link: "https://xyuandbeyond.com/wp-content/uploads/2017/03/Western_Sushi-960x638.jpg"},
    {country: "Japan", food: "Ramen", link: "https://www.justonecookbook.com/wp-content/uploads/2023/04/Spicy-Shoyu-Ramen-8055-I.jpg"},
    {country: "Jordan", food: "Mansaf", link: "https://xyuandbeyond.com/wp-content/uploads/2023/03/Mansaf-national-dish-of-Jordan-768x1024.jpg"},
    {country: "Kazakhstan", food: "Beshbarmak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/1024px-Beshbarmak_national_dish_3991850909.jpg"},
    {country: "Kenya", food: "Ugali", link: "https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg"},
    {country: "South Korea", food: "Kimchi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Kimchi-1024x768.jpg"},
    {country: "South Korea", food: "Beef Bulgogi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/bul-gogi-1168325_1280-1024x682.jpg"},
    {country: "Laos", food: "Larb", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/larb.jpg"},
    {country: "Latvia", food: "Pelēkie zirņi ar speķi ", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Pelekie-zirni-ar-speki-un-ceptiem-sipoliem-1024x683.jpg"},
    {country: "Lebanon", food: "Kibbeh", link: "https://falasteenifoodie.com/wp-content/uploads/2022/11/Fried-Lebanese-Kibbeh-Recipe.jpeg"},
    {country: "Liechtenstein", food: "Käsknöpfle", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/spatzle-with-fries--1024x682.jpg"},
    {country: "Luxembourg", food: "Judd mat Gaardebounen", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/1024px-JuddMatGaardebounen_Beer-681x1024.jpg"},
    {country: "Malaysia", food: "Nasi Lemak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/nasi-lemak-1024x682.jpg"},
    {country: "Mexico", food: "Tacos", link: "https://xyuandbeyond.com/wp-content/uploads/2018/10/seafood-tacos-e1577972819276.jpg"},
    {country: "Mexico", food: "Mole Poblano", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Mole-ThreeColors.jpg"},
    {country: "Mexico", food: "Chiles en Nogada", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/chiles-nogala.jpg"},
    {country: "Mexico", food: "Tamales", link: "https://patijinich.com/wp-content/uploads/2021/09/Jalisco-Style-Chicken-Tamales-scaled.jpg"},
    {country: "Moldova", food: "Mămăligă", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/polenta-cornmeal-porridge-1024x684.jpg"},
    {country: "Morocco", food: "Tagine", link: "https://ourbigescape.com/wp-content/uploads/2023/03/18.-One-Pot-Moroccan-Vegetable-Tagine.png"},
    {country: "Morocco", food: "Couscous", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Bowl-of-Couscous-to-Cook-1024x683.jpg"},
    {country: "Nepal", food: "Dal Bhaath", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/dal-bhat-1024x683.jpg"},
    {country: "New Zealand", food: "Pavlova", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/pavlova-1024x683.jpg"},
    {country: "New Zealand", food: "Hangi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/hangi.jpg"},
    {country: "New Zealand", food: "Kiwi Pie", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/meat-pie-ground-beef-national-dishes-1024x682.jpg"},
    {country: "Nicaragua", food: "Gallo Pinto", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/gallo-pinto-Mariordo-Mario-Roberto-Duran-Ortiz-CC-BY-SA-4.0.jpg"},
    {country: "Nigeria", food: "Jollof Rice", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/jollof-rice-1024x683.jpg"},
    {country: "Norway", food: "Farikal", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/norwegian-dishes-farikal-1024x601.jpg"},
    {country: "Pakistan", food: "Nihari", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/nihari-lambs-leg-stew-1024x684.jpg"},
    {country: "Poland", food: "Bigos", link: "https://xyuandbeyond.com/wp-content/uploads/2020/03/bigos-at-wawel-castle-cafe-e1584183875336.jpg"},
    {country: "Portugal", food: "Bacalhau", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Bacalhau-salted-codfish-the-national-dish-of-Portugal-1024x655.jpg"},
    {country: "Portugal", food: "Pasteis de Nata", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/pasteis-de-Nata-1024x683.jpg"},
    {country: "Russia", food: "Pelmeni", link: "https://xyuandbeyond.com/wp-content/uploads/2020/03/pierogi-e1584183832909.jpg"},
    {country: "Scotland", food: "Haggis", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/haggis-1024x768.jpg"},
    {country: "Scotland", food: "Cullen Skink", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/cullen-skink-1024x683.jpg"},
    {country: "Scotland", food: "Tablet", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/fudge-1024x670.jpg"},
    {country: "Singapore", food: "Hainanese Chicken Rice", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/Hainanese-Chicken-Rice-1024x683.jpg"},
    {country: "Slovakia", food: "Bryndzové halušky", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/halusky-1024x576.jpg"},
    {country: "South Africa", food: "Braai", link: "https://i.pinimg.com/originals/65/2e/e9/652ee9a72c5392d14f9edab223d1093e.jpg"},
    {country: "South Africa", food: "Bobotie", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/bobotie.jpg"},
    {country: "Spain", food: "Paella", link: "https://xyuandbeyond.com/wp-content/uploads/2019/06/paella.jpg"},
    {country: "Spain", food: "Gazpacho", link: "https://www.foodnetwork.com/content/dam/images/food/fullset/2011/6/10/0/EA1111H_gazpacho_s4x3.jpg"},
    {country: "Spain", food: "Tortilla Espanola", link: "https://www.goya.com/media/3816/tortilla-espan-ola-potato-omelet.jpg?quality=80"},
    {country: "Spain", food: "Iberico Jamon", link: "https://xyuandbeyond.com/wp-content/uploads/2019/11/jamon-iberico.jpg"},
    {country: "Sri Lanka", food: "Rice and Curry", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/chicken-coconut-curry.jpg"},
    {country: "Sweden", food: "Swedish Meatballs", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/ikea-swedish-meatballs.jpg"},
    {country: "Switzerland", food: "Rösti", link: "https://xyuandbeyond.com/wp-content/uploads/2020/12/latkes-1024x576.jpg"},
    {country: "Taiwan", food: "Beef Noodle Soup", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Taiwanese-beef-noodle-1024x682.jpg"},
    {country: "Thailand", food: "Pad Thai", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Pad-Thai-1024x682.jpg"},
    {country: "the Bahamas", food: "Cracked Conch", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/conch-fritter-1024x683.jpg"},
    {country: "the Dominican Republic", food: "La Bandera", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/BanderaDominicana01.jpg"},
    {country: "the Netherlands", food: "Stamppot", link: "https://xyuandbeyond.com/wp-content/uploads/2021/11/stamppot.jpg"},
    {country: "the Netherlands", food: "Herring", link: "https://xyuandbeyond.com/wp-content/uploads/2021/11/Herring-1024x1024.jpg"},
    {country: "the Netherlands", food: "Stroopwaffels", link: "https://xyuandbeyond.com/wp-content/uploads/2021/11/stroopwafel-1024x1024.jpg"},
    {country: "the Philippines", food: "Chicken Adobo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/chicken-adobo-1024x769.jpg"},
    {country: "Turkey", food: "Döner Kebab", link: "https://xyuandbeyond.com/wp-content/uploads/2020/12/Durum-kebab.jpg"},
    {country: "Turkey", food: "Manti", link: "https://xyuandbeyond.com/wp-content/uploads/2019/01/Manti-by-Lachlan-Hardy-e1578576410227.jpg"},
    {country: "Ukraine", food: "Borscht", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/borscht-1024x682.jpg"},
    {country: "USA", food: "Hamburgers", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/hamburger-1024x683.jpg"},
    {country: "USA", food: "Hot Dogs", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/hot-dogs-970x1024.jpg"},
    {country: "USA", food: "Mac ‘n’ Cheese", link: "https://hips.hearstapps.com/hmg-prod/images/delish-210608-millie-peartree-mac-and-cheese-351-vertical-2x1-1677086449.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"},
    {country: "Uzbekistan", food: "Plov", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Plov_Tashkent.jpg"},
    {country: "Venezuela", food: "Pabellón criollo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Pabellon-criollo-1024x788.jpg"},
    {country: "Vietnam", food: "Pho", link: "https://hips.hearstapps.com/hmg-prod/images/instant-pot-pho-1-1649171262.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"},
    {country: "Wales", food: "Cawl", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Cawl.jpg"},
    {country: "Wales", food: "Laverbread", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/welsh-laver-cakes-1024x536.jpg"},
    {country: "Wales", food: "Welsh Cakes", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/welsh-cakes-1024x768.jpg"},
]

var capital_latlng = [
    {country: "Afghanistan", cap_lat: 34.5166666666666, cap_long: 69.183333,},
    {country: "Antigua & Barbuda", cap_lat: 17.1166666666666, cap_long: -61.85,},
    {country: "Australia", cap_lat: -35.2666666666666, cap_long: 149.133333,},
    {country: "Austria", cap_lat: 48.2, cap_long: 16.366667,},
    {country: "Azerbaijan", cap_lat: 40.3833333333333, cap_long: 49.866667,},
    {country: "Bangladesh", cap_lat: 23.7166666666666, cap_long: 90.4,},
    {country: "Barbados", cap_lat: 13.1, cap_long: -59.616667,},
    {country: "Belgium", cap_lat: 50.8333333333333, cap_long: 4.333333,},
    {country: "Benin", cap_lat: 6.48333333333333, cap_long: 2.616667,},
    {country: "Bhutan", cap_lat: 27.4666666666666, cap_long: 89.633333,},
    {country: "Bosnia & Herzegovina", cap_lat: 43.8666666666666, cap_long: 18.416667,},
    {country: "Botswana", cap_lat: -24.6333333333333, cap_long: 25.9,},
    {country: "Brazil", cap_lat: -15.7833333333333, cap_long: -47.916667,},
    {country: "Cambodia", cap_lat: 11.55, cap_long: 104.916667,},
    {country: "Canada", cap_lat: 45.4166666666666, cap_long: -75.7,},
    {country: "Chile", cap_lat: -33.45, cap_long: -70.666667,},
    {country: "China", cap_lat: 39.9166666666666, cap_long: 116.383333,},
    {country: "Colombia", cap_lat: 4.6, cap_long: -74.083333,},
    {country: "Cote d'Ivoire", cap_lat: 6.81666666666666, cap_long: -5.266667,},
    {country: "Cuba", cap_lat: 23.1166666666666, cap_long: -82.35,},
    {country: "Cyprus", cap_lat: 35.1666666666666, cap_long: 33.366667,},
    {country: "Czech Republic", cap_lat: 50.0833333333333, cap_long: 14.466667,},
    {country: "Democratic Republic of the Congo", cap_lat: -4.31666666666666, cap_long: 15.3,},
    {country: "Denmark", cap_lat: 55.6666666666666, cap_long: 12.583333,},
    {country: "Djibouti", cap_lat: 11.5833333333333, cap_long: 43.15,},
    {country: "Dominica", cap_lat: 15.3, cap_long: -61.4,},
    {country: "Ecuador", cap_lat: -0.216666666666666, cap_long: -78.5,},
    {country: "Egypt", cap_lat: 30.05, cap_long: 31.25,},
    {country: "El Salvador", cap_lat: 13.7, cap_long: -89.2,},
    {country: "England", cap_lat: 51.5, cap_long: -0.083333,},
    {country: "Estonia", cap_lat: 59.4333333333333, cap_long: 24.716667,},
    {country: "Ethiopia", cap_lat: 9.03333333333333, cap_long: 38.7,},
    {country: "France", cap_lat: 48.8666666666666, cap_long: 2.333333,},
    {country: "Georgia", cap_lat: 41.6833333333333, cap_long: 44.833333,},
    {country: "Germany", cap_lat: 52.5166666666666, cap_long: 13.4,},
    {country: "Greece", cap_lat: 37.9833333333333, cap_long: 23.733333,},
    {country: "Guyana", cap_lat: 6.8, cap_long: -58.15,},
    {country: "Haiti", cap_lat: 18.5333333333333, cap_long: -72.333333,},
    {country: "Honduras", cap_lat: 14.1, cap_long: -87.216667,},
    {country: "Hong Kong", cap_lat: 22.302711, cap_long: 114.177216,},
    {country: "Hungary", cap_lat: 47.5, cap_long: 19.083333,},
    {country: "Iceland", cap_lat: 64.15, cap_long: -21.95,},
    {country: "India", cap_lat: 28.6, cap_long: 77.2,},
    {country: "Indonesia", cap_lat: -6.16666666666666, cap_long: 106.816667,},
    {country: "Iran", cap_lat: 35.7, cap_long: 51.416667,},
    {country: "Ireland", cap_lat: 53.3166666666666, cap_long: -6.233333,},
    {country: "Italy", cap_lat: 41.9, cap_long: 12.483333,},
    {country: "Jamaica", cap_lat: 18, cap_long: -76.8,},
    {country: "Japan", cap_lat: 35.6833333333333, cap_long: 139.75,},
    {country: "Jordan", cap_lat: 31.95, cap_long: 35.933333,},
    {country: "Kazakhstan", cap_lat: 51.1666666666666, cap_long: 71.416667,},
    {country: "Kenya", cap_lat: -1.28333333333333, cap_long: 36.816667,},
    {country: "Korea", cap_lat: 37.55, cap_long: 126.983333,},
    {country: "Laos", cap_lat: 17.9666666666666, cap_long: 102.6,},
    {country: "Latvia", cap_lat: 56.95, cap_long: 24.1,},
    {country: "Lebanon", cap_lat: 33.8666666666666, cap_long: 35.5,},
    {country: "Liechtenstein", cap_lat: 47.1333333333333, cap_long: 9.516667,},
    {country: "Luxembourg", cap_lat: 49.6, cap_long: 6.116667,},
    {country: "Malaysia", cap_lat: 3.16666666666666, cap_long: 101.7,},
    {country: "Mexico", cap_lat: 19.4333333333333, cap_long: -99.133333,},
    {country: "Moldova", cap_lat: 47, cap_long: 28.85,},
    {country: "Morocco", cap_lat: 34.0166666666666, cap_long: -6.816667,},
    {country: "Nepal", cap_lat: 27.7166666666666, cap_long: 85.316667,},
    {country: "New Zealand", cap_lat: -41.3, cap_long: 174.783333,},
    {country: "Nicaragua", cap_lat: 12.1333333333333, cap_long: -86.25,},
    {country: "Nigeria", cap_lat: 9.08333333333333, cap_long: 7.533333,},
    {country: "Norway", cap_lat: 59.9166666666666, cap_long: 10.75,},
    {country: "Pakistan", cap_lat: 33.6833333333333, cap_long: 73.05,},
    {country: "Poland", cap_lat: 52.25, cap_long: 21,},
    {country: "Portugal", cap_lat: 38.7166666666666, cap_long: -9.133333,},
    {country: "Russia", cap_lat: 55.75, cap_long: 37.6,},
    {country: "Scotland", cap_lat: 55.953251, cap_long: -3.188267,},
    {country: "Singapore", cap_lat: 1.28333333333333, cap_long: 103.85,},
    {country: "Slovakia", cap_lat: 48.15, cap_long: 17.116667,},
    {country: "South Africa", cap_lat: -25.7, cap_long: 28.216667,},
    {country: "Spain", cap_lat: 40.4, cap_long: -3.683333,},
    {country: "Sri Lanka", cap_lat: 6.91666666666666, cap_long: 79.833333,},
    {country: "Sweden", cap_lat: 59.3333333333333, cap_long: 18.05,},
    {country: "Switzerland", cap_lat: 46.9166666666666, cap_long: 7.466667,},
    {country: "Taiwan", cap_lat: 25.0333333333333, cap_long: 121.516667,},
    {country: "Tajikistan", cap_lat: 38.55, cap_long: 68.766667,},
    {country: "Thailand", cap_lat: 13.75, cap_long: 100.516667,},
    {country: "the Bahamas", cap_lat: 25.0833333333333, cap_long: -77.35,},
    {country: "the Dominican Republic", cap_lat: 18.4666666666666, cap_long: -69.9,},
    {country: "the Netherlands", cap_lat: 52.35, cap_long: 4.916667,},
    {country: "the Philippines", cap_lat: 14.6, cap_long: 120.966667,},
    {country: "Turkey", cap_lat: 39.9333333333333, cap_long: 32.866667,},
    {country: "Ukraine", cap_lat: 50.4333333333333, cap_long: 30.516667,},
    {country: "USA", cap_lat: -77.009056, cap_long: 38.883333,},
    {country: "Uzbekistan", cap_lat: 41.3166666666666, cap_long: 69.25,},
    {country: "Venezuela", cap_lat: 10.4833333333333, cap_long: -66.866667,},
    {country: "Vietnam", cap_lat: 21.0333333333333, cap_long: 105.85,},
    {country: "Wales", cap_lat: 51.481583, cap_long: -3.17909,}
]

function setMarker(location) {
    if (marker) {
        marker.setPosition(location);
    }
    else {
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }
}

function ReverseGeocodeLatLng(input, map) {
    guess_country = "";
	var geocoder = new google.maps.Geocoder();

    var latlngStr = input.toString();
    latlngStr = latlngStr.substring(1,latlngStr.indexOf(')'));
    latlngStr = latlngStr.split(',', 2);
    // window.alert(latlngStr[0] + " " + latlngStr[1]);
    var latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
    // window.alert(latlng.lat);
    guess_lat = latlng.lat;
    guess_long = latlng.lng;

	if (input !== undefined) {
		geocoder
            .geocode({location:input})
            .then((response) => { 
                if (response.results[0]) {
                    var components = response.results[0].address_components;
                    for (var component=0;component<(components.length);component++){
                        // window.alert(components[component].types[0]);
                        if (components[component].types[0] == "country") {
                            guess_country = components[component].long_name;
                            // window.alert(guess_country);
                            document.getElementById("country").innerHTML = "Country guessed: " + guess_country;
                        }
                    }                    
                }
                // window.alert(guess_country);
                // guess_country = "";	
            })
            .catch((e) => window.alert("Geocoder failed due to: " + e));	
	}	
}

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 1.5,
        center: { lat: 30, lng: 0 },
        mapId: "DEMO_MAP_ID",
    });

    google.maps.event.addListener(map, 'click', function (event) {
        setMarker(event.latLng);
        ReverseGeocodeLatLng(event.latLng, map);
    })
}

document.getElementById("check-guess").addEventListener("click", checkGuess);

function checkGuess() {
    // window.alert(guess_country + country_var);
    if (guess_country == country_var) {
        document.getElementById("result").innerHTML = "you guessed right!";
    }
    else {
        // window.alert("guess coords: " + guess_lat + ", " + guess_long + 
        // " actual coords: " + lat_var + ", " + long_var);
        distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(guess_lat, guess_long), new google.maps.LatLng(lat_var, long_var), 6371);  
        sim_score = distance/20010;
        // window.alert(distance);
        document.getElementById("result").innerHTML = "you are " + distance + " km away. Your similarity score is " + sim_score + ".";
    }
}

document.getElementById("play").addEventListener("click", generateDish);

function generateDish() {
    var number = Math.floor(Math.random() * 144);
    country_var = options[number].country;
    dish_var = options[number].food;
    link_var = options[number].link;
    // document.getElementById("answer").innerHTML = country_var + ", " + dish_var;
    document.getElementById("food-pic").innerHTML = '<img src="'+link_var+'" height="300"/>';  
    for (var i = 0; i < capital_latlng.length; i++) {
        if (capital_latlng[i].country == country_var) {
            lat_var = capital_latlng[i].cap_lat;
            long_var = capital_latlng[i].cap_long;
        }
    }
}

document.getElementById("instructions").addEventListener("click", showInstructions);

function showInstructions() {
    window.alert("Click the map below to make a guess of where this dish originates from! " + 
        " Click 'Check Guess' below to see how far you are from the actual country of origin.");
}

document.getElementById("give-up").addEventListener("click", giveUp);

function giveUp() {
    document.getElementById("result").innerHTML = "This dish is " + dish_var + " from " + country_var + "!";
}


initMap();