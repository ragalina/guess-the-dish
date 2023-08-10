let map;

var guess_country = "";
var country_var = "";
var dish_var = "";
var link_var = "";

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
    {country: "Canada", food: "Butter Tarts", link: "https://xyuandbeyond.com/wp-content/uploads/2019/07/Pecan_butter_tart_May_2011.jpg"},
    {country: "Canada", food: "Nanaimo Bars", link: "https://xyuandbeyond.com/wp-content/uploads/2019/07/Choc-Coconut-Nanaimo-Bars-3-16-8-1.jpg"},
    {country: "Canada", food: "Montreal-style Smoked Meat and Bagels", link: "https://xyuandbeyond.com/wp-content/uploads/2019/07/1024px-Schwartz_smoked_meat_montreal-e1578574568374.jpg"},
    {country: "Chile", food: "Pastel de Choclo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Pastel-de-Choclo-1024x682.jpg"},
    {country: "China", food: "Peking duck", link: "https://xyuandbeyond.com/wp-content/uploads/crispy-duck-in-the-window-1024x768.jpg"},
    {country: "Colombia", food: "Bandeja Paisa", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Bandeja-Paisa-1024x768.jpg"},
    {country: "Colombia & Venezuela", food: "Arepas", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/arepa-1024x768.jpg"},
    {country: "Côte d'Ivoire", food: "Aloco", link: "https://xyuandbeyond.com/wp-content/uploads/2017/12/plantains-960x685.jpg"},
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
    {country: "Greece", food: "Fasolada", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/white-bean-soup-Cyprus-or-Greece-1024x682.jpg"},
    {country: "Greece", food: "Moussaka", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/moussaka-1024x768.jpg"},
    {country: "Guyana", food: "Pepperpot", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/pepperpot-1024x609.jpg"},
    {country: "Haiti", food: "Fried Pork with Rice & Beans", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/fried-pork-with-rice-1024x498.jpg"},
    {country: "Honduras", food: "Plato Tipico de Honduras", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/plato.jpg"},
    {country: "Hong Kong", food: "Dim Sum", link: "https://xyuandbeyond.com/wp-content/uploads/chinese-dim-sum-in-Chinatown.jpg"},
    {country: "Hungary", food: "Goulash", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/hungarian-goulash.jpg"},
    {country: "Iceland", food: "Skyr", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/skyr-841x1024.jpg"},
    {country: "Iceland", food: "Hákarl", link: "https://live.staticflickr.com/2159/1814435667_c6a300d6bc_c.jpg"},
    {country: "Iceland", food: "Rye bread and butter", link: "https://xyuandbeyond.com/wp-content/uploads/2017/11/Icelandic_Rye_Bread_ofpenguinsandelephants-960x640.jpg"},
    {country: "India", food: "Biriyani", link: "https://xyuandbeyond.com/wp-content/uploads/2018/01/biriyani-chicken-cooked-1624487.jpg"},
    {country: "India", food: "Tandoori Chicken", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/tandoori-chicken-808x1024.jpg"},
    {country: "India", food: "Masala Dosa", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/indian-dosa2-1024x576.jpg"},
    {country: "Indonesia", food: "Nasi Goreng", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Nasi-Goreng-1024x682.jpg"},
    {country: "Iran", food: "Chelo Kebab", link: "https://xyuandbeyond.com/wp-content/uploads/2022/02/Kebab-1024x768.jpg"},
    {country: "Ireland", food: "Irish Stew", link: "https://xyuandbeyond.com/wp-content/uploads/2018/04/Irish-stew-2-e1577971733548.jpg"},
    {country: "Ireland", food: "Colcannon", link: "https://xyuandbeyond.com/wp-content/uploads/2018/10/colcannon-e1539959203368.jpg"},
    {country: "Ireland", food: "Boxty", link: "https://xyuandbeyond.com/wp-content/uploads/2022/11/boxty-with-bacon-1024x683.jpg"},
    {country: "Ireland", food: "Brown Soda Bread", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/Irish_brown_soda_breadBy-%C2%A9-ODea-at-Wikimedia-Commons-CC-BY-SA-4.0-CC-BY-SA-4.0-1024x768.jpg"},
    {country: "Italy", food: "Ragu alla Bolognese", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/spag-bol-1024x576.jpg"},
    {country: "Italy", food: "Napoletana Pizza", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/via-mercanti-pizza-double-1024x731.jpg"},
    {country: "Italy", food: "Fiorentina Steak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/Fiorentina-Steak-1024x768.jpg"},
    {country: "Italy", food: "Risotto", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/risotto-rice-1024x670.jpg"},
    {country: "Italy", food: "Prosciutto di Parma", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/serving-jamon-1024x682.jpg"},
    {country: "Jamaica", food: "Ackee and Saltfish", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/ackee-and-saltfish-1024x682.jpg"},
    {country: "Jamaica", food: "Rice and Peas", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/flying-fish-and-rice-1024x686.jpg"},
    {country: "Japan", food: "Curry", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/japanese-curry-1024x682.jpg"},
    {country: "Japan", food: "Katsudon", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/katsudon.jpg"},
    {country: "Japan", food: "Sushi & Sashimi", link: "https://xyuandbeyond.com/wp-content/uploads/2017/03/Western_Sushi-960x638.jpg"},
    {country: "Japan", food: "Ramen", link: "https://xyuandbeyond.com/wp-content/uploads/2020/08/Tonkotsu-ramen-scaled.jpg"},
    {country: "Jordan", food: "Mansaf", link: "https://xyuandbeyond.com/wp-content/uploads/2023/03/Mansaf-national-dish-of-Jordan-768x1024.jpg"},
    {country: "Kazakhstan", food: "Beshbarmak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/1024px-Beshbarmak_national_dish_3991850909.jpg"},
    {country: "Kenya", food: "Ugali", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/877px-Ugali_and_cabbage.jpg"},
    {country: "Korea", food: "Kimchi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Kimchi-1024x768.jpg"},
    {country: "Korea", food: "Beef Bulgogi", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/bul-gogi-1168325_1280-1024x682.jpg"},
    {country: "Laos", food: "Larb", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/larb.jpg"},
    {country: "Latvia", food: "Pelēkie zirņi ar speķi ", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Pelekie-zirni-ar-speki-un-ceptiem-sipoliem-1024x683.jpg"},
    {country: "Lebanon & Syria", food: "Kibbeh", link: "https://xyuandbeyond.com/wp-content/uploads/2016/08/mexican-kibbe-e1499518972896-643x800.jpg"},
    {country: "Liechtenstein", food: "Käsknöpfle", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/spatzle-with-fries--1024x682.jpg"},
    {country: "Luxembourg", food: "Judd mat Gaardebounen", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/1024px-JuddMatGaardebounen_Beer-681x1024.jpg"},
    {country: "Malaysia", food: "Nasi Lemak", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/nasi-lemak-1024x682.jpg"},
    {country: "Mexico", food: "Tacos", link: "https://xyuandbeyond.com/wp-content/uploads/2018/10/seafood-tacos-e1577972819276.jpg"},
    {country: "Mexico", food: "Mole Poblano", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Mole-ThreeColors.jpg"},
    {country: "Mexico", food: "Chiles en Nogada", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/chiles-nogala.jpg"},
    {country: "Mexico", food: "Tamales", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/mexican-women-making-tamales-1024x682.jpg"},
    {country: "Moldova", food: "Mămăligă", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/polenta-cornmeal-porridge-1024x684.jpg"},
    {country: "Morocco", food: "Tagine", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/fish-tajine-with-chermoula-hot-sauce-1024x827.jpg"},
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
    {country: "South Africa", food: "Braai", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/sausage-types-South-AFrican-Braai-753x1024.jpg"},
    {country: "South Africa", food: "Bobotie", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/bobotie.jpg"},
    {country: "Spain", food: "Paella", link: "https://xyuandbeyond.com/wp-content/uploads/2019/06/paella.jpg"},
    {country: "Spain", food: "Gazpacho", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/gazpacho.jpg"},
    {country: "Spain", food: "Tortilla Espanola", link: "https://xyuandbeyond.com/wp-content/uploads/2017/06/1024px-Tortilla_de_patata_y_cebolla-960x585.jpg"},
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
    {country: "USA", food: "Mac ‘n’ Cheese", link: "https://xyuandbeyond.com/wp-content/uploads/2017/03/mac-n-cheese-960x720.jpg"},
    {country: "Uzbekistan", food: "Plov", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Plov_Tashkent.jpg"},
    {country: "Venezuela", food: "Pabellón criollo", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Pabellon-criollo-1024x788.jpg"},
    {country: "Vietnam", food: "Pho", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/Pho-Vietnam.jpg"},
    {country: "Wales", food: "Cawl", link: "https://xyuandbeyond.com/wp-content/uploads/2022/05/Cawl.jpg"},
    {country: "Wales", food: "Laverbread", link: "https://xyuandbeyond.com/wp-content/uploads/2022/03/welsh-laver-cakes-1024x536.jpg"},
    {country: "Wales", food: "Welsh Cakes", link: "https://xyuandbeyond.com/wp-content/uploads/2022/04/welsh-cakes-1024x768.jpg"},
]

function setMarker(location, marker) {
    if (marker) {
        marker.setPosition(location);
    }
    else {
        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }
    return marker;
}

function checkGuess(guess) {
    if (guess = country_var) {

    }
}

function ReverseGeocodeLatLng(input, map) {
    guess_country = "";
	var geocoder = new google.maps.Geocoder();

    const latlngStr = input.toString().split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };

	if (input !== undefined) {
		geocoder
            .geocode({location:input})
            .then((response) => { 
                if (response.results[0]) {
                    const marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                    });
                    var components = response.results[0].address_components;
                    for (var component=0;component<(components.length);component++){
                        // window.alert(components[component].types[0]);
                        if (components[component].types[0] == "country") {
                            guess_country = components[component].long_name;
                            // window.alert(guess_country);
                            document.getElementById("country").innerHTML = guess_country;
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

  var marker;

  google.maps.event.addListener(map, 'click', function (event) {
    marker = setMarker(event.latLng, marker);
    ReverseGeocodeLatLng(event.latLng, map);
    })
}

function generateDish() {
    var number = Math.floor(Math.random() * 144);
    country_var = options[number].country;
    dish_var = options[number].food;
    link_var = options[number].link;
    document.getElementById("answer").innerHTML = country_var + ", " + dish_var;
}

document.getElementById("check_guess").addEventListener("click", checkGuess);

function checkGuess() {
    if (guess_country == country_var) {
        document.getElementById("result").innerHTML = "you guessed right!";
    }
}

initMap();
generateDish();
