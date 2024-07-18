export const item_db = `
//== Healing Items =========================================
{
	Id: 501
	AegisName: "Red_Potion"
	Name: "Red Potion"
	Type: "IT_HEALING"
	Buy: 50
	Weight: 70
	Script: <" itemheal rand(45,65),0; ">
},
{
	Id: 502
	AegisName: "Orange_Potion"
	Name: "Orange Potion"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 100
	Script: <" itemheal rand(105,145),0; ">
},
{
	Id: 503
	AegisName: "Yellow_Potion"
	Name: "Yellow Potion"
	Type: "IT_HEALING"
	Buy: 550
	Weight: 130
	Script: <" itemheal rand(175,235),0; ">
},
{
	Id: 504
	AegisName: "White_Potion"
	Name: "White Potion"
	Type: "IT_HEALING"
	Buy: 1200
	Weight: 150
	Script: <" itemheal rand(325,405),0; ">
},
{
	Id: 505
	AegisName: "Blue_Potion"
	Name: "Blue Potion"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 150
	Script: <" itemheal 0,rand(40,60); ">
},
{
	Id: 506
	AegisName: "Green_Potion"
	Name: "Green Potion"
	Type: "IT_HEALING"
	Buy: 40
	Weight: 70
	BuyingStore: true
	Script: <"
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
	">
},
{
	Id: 507
	AegisName: "Red_Herb"
	Name: "Red Herb"
	Type: "IT_HEALING"
	Buy: 18
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(18,28),0; ">
},
{
	Id: 508
	AegisName: "Yellow_Herb"
	Name: "Yellow Herb"
	Type: "IT_HEALING"
	Buy: 40
	Weight: 50
	BuyingStore: true
	Script: <" itemheal rand(38,58),0; ">
},
{
	Id: 509
	AegisName: "White_Herb"
	Name: "White Herb"
	Type: "IT_HEALING"
	Buy: 120
	Weight: 70
	BuyingStore: true
	Script: <" itemheal rand(75,115),0; ">
},
{
	Id: 510
	AegisName: "Blue_Herb"
	Name: "Blue Herb"
	Type: "IT_HEALING"
	Buy: 60
	Weight: 70
	BuyingStore: true
	Script: <" itemheal 0,rand(15,30); ">
},
{
	Id: 511
	AegisName: "Green_Herb"
	Name: "Green Herb"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 30
	BuyingStore: true
	Script: <" sc_end SC_POISON; ">
},
{
	Id: 512
	AegisName: "Apple"
	Name: "Apple"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(16,22),0; ">
},
{
	Id: 513
	AegisName: "Banana"
	Name: "Banana"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(17,21),0; ">
},
{
	Id: 514
	AegisName: "Grape"
	Name: "Grape"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 20
	BuyingStore: true
	Script: <" itemheal 0,rand(10,15); ">
},
{
	Id: 515
	AegisName: "Carrot"
	Name: "Carrot"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(18,20),0; ">
},
{
	Id: 516
	AegisName: "Sweet_Potato"
	Name: "Potato"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(15,23),0; ">
},
{
	Id: 517
	AegisName: "Meat"
	Name: "Meat"
	Type: "IT_HEALING"
	Buy: 50
	Weight: 150
	BuyingStore: true
	Script: <" itemheal rand(70,100),0; ">
},
{
	Id: 518
	AegisName: "Honey"
	Name: "Honey"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 100
	BuyingStore: true
	Script: <" itemheal rand(70,100),rand(20,40); ">
},
{
	Id: 519
	AegisName: "Milk"
	Name: "Milk"
	Type: "IT_HEALING"
	Buy: 25
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(27,37),0; ">
},
{
	Id: 520
	AegisName: "Leaflet_Of_Hinal"
	Name: "Hinalle Leaflet"
	Type: "IT_HEALING"
	Buy: 150
	Weight: 10
	BuyingStore: true
	Script: <" itemheal rand(175,235),0; ">
},
{
	Id: 521
	AegisName: "Leaflet_Of_Aloe"
	Name: "Aloe Leaflet"
	Type: "IT_HEALING"
	Buy: 360
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(325,405),0; ">
},
{
	Id: 522
	AegisName: "Fruit_Of_Mastela"
	Name: "Mastela Fruit"
	Type: "IT_HEALING"
	Buy: 8500
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(400,600),0; ">
},
{
	Id: 523
	AegisName: "Holy_Water"
	Name: "Holy Water"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 30
	BuyingStore: true
	Script: <" sc_end SC_CURSE; ">
},
{
	Id: 525
	AegisName: "Panacea"
	Name: "Panacea"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 526
	AegisName: "Royal_Jelly"
	Name: "Royal Jelly"
	Type: "IT_HEALING"
	Buy: 7000
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 528
	AegisName: "Monsters_Feed"
	Name: "Monster's Feed"
	Type: "IT_HEALING"
	Buy: 60
	Weight: 150
	BuyingStore: true
	Script: <" itemheal rand(72,108),0; ">
},
{
	Id: 529
	AegisName: "Candy"
	Name: "Candy"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(45,65),0; ">
},
{
	Id: 530
	AegisName: "Candy_Striper"
	Name: "Candy Cane"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(105,145),0; ">
},
{
	Id: 531
	AegisName: "Apple_Juice"
	Name: "Apple Juice"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(25,35),0; ">
},
{
	Id: 532
	AegisName: "Banana_Juice"
	Name: "Banana Juice"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(26,34),0; ">
},
{
	Id: 533
	AegisName: "Grape_Juice"
	Name: "Grape Juice"
	Type: "IT_HEALING"
	Buy: 250
	Weight: 40
	BuyingStore: true
	Script: <" itemheal 0,rand(15,25); ">
},
{
	Id: 534
	AegisName: "Carrot_Juice"
	Name: "Carrot Juice"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(27,33),0; ">
},
{
	Id: 535
	AegisName: "Pumpkin"
	Name: "Pumpkin"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal 19,0; ">
},
{
	Id: 536
	AegisName: "Ice_Cream"
	Name: "Ice Cream"
	Type: "IT_HEALING"
	Buy: 150
	Weight: 80
	BuyingStore: true
	Script: <"
		itemheal rand(105,145),0;
		sc_start SC_FREEZE,10000,0,2500,SCFLAG_NONE;
	">
},
{
	Id: 537
	AegisName: "Pet_Food"
	Name: "Pet Food"
	Type: "IT_HEALING"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Script: <" itemheal rand(50,90),0; ">
},
{
	Id: 538
	AegisName: "Well_Baked_Cookie"
	Name: "Well-baked Cookie"
	Type: "IT_HEALING"
	Buy: 1000
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(160,200),0; ">
},
{
	Id: 539
	AegisName: "Piece_Of_Cake"
	Name: "Piece of Cake"
	Type: "IT_HEALING"
	Buy: 3000
	Weight: 100
	BuyingStore: true
	Script: <" itemheal rand(270,330),0; ">
},
{
	Id: 540
	AegisName: "Falcons_Feed"
	Name: "Falcon Food"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 50
	Script: <" itemheal rand(185,225),0; ">
},
{
	Id: 541
	AegisName: "Pecopecos_Feed"
	Name: "PecoPeco Food"
	Type: "IT_HEALING"
	Buy: 3000
	Weight: 50
	Script: <" itemheal rand(325,405),0; ">
},
/*
{
	Id: 542
	AegisName: "Festive_Cookie"
	Name: "Festival Cookie"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 10
	Script: <" itemheal rand(325,405),0; ">
},
*/
/*
{
	Id: 543
	AegisName: "Festive_Rainbow_Cake"
	Name: "Festival Rainbow Cake"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 10
	Script: <" itemheal rand(325,405),0; ">
},
*/
{
	Id: 544
	AegisName: "Fish_Slice"
	Name: "Raw Fish"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(25,60),0; ">
},
{
	Id: 545
	AegisName: "Red_Slim_Potion"
	Name: "Condensed Red Potion"
	Type: "IT_HEALING"
	Buy: 150
	Weight: 20
	Script: <" itemheal rand(45,65),0; ">
},
{
	Id: 546
	AegisName: "Yellow_Slim_Potion"
	Name: "Condensed Yellow Potion"
	Type: "IT_HEALING"
	Buy: 600
	Weight: 30
	Script: <" itemheal rand(175,235),0; ">
},
{
	Id: 547
	AegisName: "White_Slim_Potion"
	Name: "Condensed White Potion"
	Type: "IT_HEALING"
	Buy: 1650
	Weight: 50
	Script: <" itemheal rand(325,405),0; ">
},
{
	Id: 548
	AegisName: "Cheese"
	Name: "Cheese"
	Type: "IT_HEALING"
	Buy: 2800
	Weight: 50
	BuyingStore: true
	Script: <" itemheal 0,rand(10,15); ">
},
{
	Id: 549
	AegisName: "Nice_Sweet_Potato"
	Name: "Yam"
	Type: "IT_HEALING"
	Buy: 180
	Weight: 80
	BuyingStore: true
	Script: <"
		itemheal rand(50,100),0;
		sc_start SC_STUN,3000,0,1500,SCFLAG_NONE;
	">
},
{
	Id: 550
	AegisName: "Popped_Rice"
	Name: "Rice Cake"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 10
	BuyingStore: true
	Script: <" itemheal rand(10,15),0; ">
},
{
	Id: 551
	AegisName: "Shusi"
	Name: "Sushi"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 50
	BuyingStore: true
	Script: <" itemheal rand(50,60),0; ">
},
{
	Id: 552
	AegisName: "KETUPAT"
	Name: "Ketupat"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 10
	Script: <" itemheal rand(70,90),rand(20,30); ">
},
{
	Id: 553
	AegisName: "Bun"
	Name: "Bao"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 50
	BuyingStore: true
	Script: <" itemheal rand(35,70),0; ">
},
{
	Id: 554
	AegisName: "Mojji"
	Name: "Mochi"
	Type: "IT_HEALING"
	Buy: 400
	Weight: 80
	Script: <"
		itemheal rand(105,145),0;
		sc_start SC_STUN,3000,0;
		sc_start SC_BLIND,2000,0,1500,SCFLAG_NONE;
	">
},
{
	Id: 555
	AegisName: "Rice_Cake"
	Name: "Traditional Rice Cake"
	Type: "IT_HEALING"
	Buy: 100
	Weight: 20
	Script: <" itemheal rand(105,145),0; ">
},
{
	Id: 556
	AegisName: "Long_Rice_Cake"
	Name: "Rice Cake Stick"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 10
	Script: <" itemheal rand(20,25),0; ">
},
{
	Id: 557
	AegisName: "Hash_Rice_Cake"
	Name: "Neatly Sliced Rice Cake"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 10
	Script: <" itemheal rand(25,30),0; ">
},
{
	Id: 558
	AegisName: "Chocolate"
	Name: "Chocolate"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 20
	Script: <" itemheal 1,1; ">
},
{
	Id: 559
	AegisName: "HandMade_Chocolate"
	Name: "Hand-made Chocolate"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 80
	Script: <" itemheal 50,50; ">
},
{
	Id: 560
	AegisName: "HandMade_Chocolate_"
	Name: "Handmade White Chocolate"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 80
	Script: <" itemheal 50,50; ">
},
{
	Id: 561
	AegisName: "White_Chocolate"
	Name: "White Chocolate"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 80
	Script: <" itemheal 50,50; ">
},
{
	Id: 562
	AegisName: "Pizza"
	Name: "Doublecrust Swiss Fondue"
	Type: "IT_HEALING"
	Buy: 100
	Weight: 150
	Script: <" itemheal rand(70,100),0; ">
},
{
	Id: 563
	AegisName: "Pizza_01"
	Name: "Doublecrust Swiss Fondue"
	Type: "IT_HEALING"
	Buy: 1200
	Weight: 150
	Script: <" itemheal rand(375,445),0; ">
},
{
	Id: 564
	AegisName: "Rice_Ball"
	Name: "Rice Ball"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 30
	BuyingStore: true
	Script: <" itemheal 200,0; ">
},
{
	Id: 565
	AegisName: "Vita500_Bottle"
	Name: "Vita500"
	Type: "IT_HEALING"
	Buy: 580
	Weight: 100
	Script: <" itemheal rand(142,274),0; ">
},
{
	Id: 566
	AegisName: "Tomyumkung"
	Name: "Tom Yum Goong"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(244,350),rand(10,30);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 567
	AegisName: "Prawn"
	Name: "Shrimp"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(117,192),0; ">
},
{
	Id: 568
	AegisName: "Lemon"
	Name: "Lemon"
	Type: "IT_HEALING"
	Buy: 60
	Weight: 40
	BuyingStore: true
	Script: <" itemheal 0,rand(10,20); ">
},
{
	Id: 569
	AegisName: "Novice_Potion"
	Name: "Novice Potion"
	Type: "IT_HEALING"
	Weight: 10
	BuyingStore: true
	Script: <" itemheal rand(22,33),0; ">
},
{
	Id: 570
	AegisName: "Lucky_Candy"
	Name: "Lucky Candy"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(45,65),0; ">
},
{
	Id: 571
	AegisName: "Lucky_Candy_Cane"
	Name: "Lucky Candy Cane"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(105,145),0; ">
},
{
	Id: 572
	AegisName: "Lucky_Cookie"
	Name: "Lucky Cookie"
	Type: "IT_HEALING"
	Buy: 1000
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(160,200),0; ">
},
{
	Id: 573
	AegisName: "Chocolate_Drink"
	Name: "Chocolate Drink"
	Type: "IT_HEALING"
	Buy: 7000
	Weight: 150
	Script: <"
		itemheal rand(330,410),rand(45,65);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 574
	AegisName: "Egg"
	Name: "Egg"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 30
	BuyingStore: true
	Script: <" itemheal rand(33,42),0; ">
},
{
	Id: 575
	AegisName: "Piece_Of_Cake_"
	Name: "2nd Anniversary Cake"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 100
	Script: <" itemheal rand(270,330),0; ">
},
{
	Id: 576
	AegisName: "Prickly_Fruit"
	Name: "Prickly Fruit"
	Type: "IT_HEALING"
	Buy: 540
	Weight: 60
	BuyingStore: true
	Script: <" itemheal rand(150,300),rand(20,30); ">
},
{
	Id: 577
	AegisName: "Grain"
	Name: "Bag of Grain"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(60,70),0; ">
},
{
	Id: 578
	AegisName: "Strawberry"
	Name: "Strawberry"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 20
	BuyingStore: true
	Script: <" itemheal 0,rand(16,28); ">
},
{
	Id: 579
	AegisName: "Delicious_Fish"
	Name: "Fresh Fish"
	Type: "IT_HEALING"
	Buy: 250
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(100,150),0; ">
},
{
	Id: 580
	AegisName: "Bread"
	Name: "Bread"
	Type: "IT_HEALING"
	Buy: 150
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(50,90),0; ">
},
{
	Id: 581
	AegisName: "Mushroom"
	Name: "Edible Mushroom"
	Type: "IT_HEALING"
	Buy: 40
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(20,30),0; ">
},
{
	Id: 582
	AegisName: "Orange"
	Name: "Orange"
	Type: "IT_HEALING"
	Buy: 300
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(10,20),rand(10,20); ">
},
{
	Id: 583
	AegisName: "KETUPAT_"
	Name: "Ketupat Sayur"
	Type: "IT_HEALING"
	Buy: 7000
	Weight: 150
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 584
	AegisName: "Fish_Ball_Soup"
	Name: "Fish Cake Soup"
	Type: "IT_HEALING"
	Buy: 100
	Weight: 60
	BuyingStore: true
	Script: <" itemheal rand(40,70),0; ">
},
{
	Id: 585
	AegisName: "Wurst"
	Name: "Wurst"
	Type: "IT_HEALING"
	Buy: 2
	Weight: 40
	Script: <" itemheal rand(15,20),0; ">
},
{
	Id: 586
	AegisName: "Mothers_Cake"
	Name: "Mother's Cake"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	Script: <" itemheal rand(325,405),0; ">
},
{
	Id: 587
	AegisName: "Prickly_Fruit_"
	Name: "Red Prickly Fruit"
	Type: "IT_HEALING"
	Buy: 880
	Weight: 60
	BuyingStore: true
	Script: <" itemheal rand(270,330),rand(20,30); ">
},
{
	Id: 588
	AegisName: "Spaghetti"
	Name: "Spaghetti"
	Type: "IT_HEALING"
	Buy: 100
	Weight: 100
	Script: <" itemheal rand(40,70),0; ">
},
{
	Id: 589
	AegisName: "Pizza_02"
	Name: "Pizza"
	Type: "IT_HEALING"
	Buy: 1200
	Weight: 150
	Script: <" itemheal rand(375,445),0; ">
},
{
	Id: 590
	AegisName: "Brezel_"
	Name: "Pretzel"
	Type: "IT_HEALING"
	Buy: 2
	Weight: 20
	Script: <" itemheal rand(50,90),0; ">
},
{
	Id: 591
	AegisName: "Caviar_Pancake"
	Name: "Caviar Pancake"
	Type: "IT_HEALING"
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 592
	AegisName: "Jam_Pancake"
	Name: "Jam Pancake"
	Type: "IT_HEALING"
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 593
	AegisName: "Honey_Pancake"
	Name: "Honey Pancake"
	Type: "IT_HEALING"
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 594
	AegisName: "Sour_Cream_Pancake"
	Name: "Sour-Cream Pancake"
	Type: "IT_HEALING"
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 595
	AegisName: "Mushroom_Pancake"
	Name: "Mushroom Pancake"
	Type: "IT_HEALING"
	Weight: 150
	BuyingStore: true
	Script: <"
		itemheal rand(325,405),rand(40,60);
		sc_end SC_POISON;
		sc_end SC_SILENCE;
		sc_end SC_BLIND;
		sc_end SC_CONFUSION;
		sc_end SC_CURSE;
		sc_end SC_ILLUSION;
	">
},
{
	Id: 596
	AegisName: "Cute_Strawberry_Choco"
	Name: "Cute Strawberry-Choco"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	Script: <" itemheal 0,rand(1,100); ">
},
{
	Id: 597
	AegisName: "Lovely_Choco_Tart"
	Name: "Lovely Choco-Tart"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	Script: <" itemheal rand(10,400),0; ">
},
{
	Id: 598
	AegisName: "Light_Red_Pot"
	Name: "Light Red Potion"
	Type: "IT_HEALING"
	Buy: 50
	Weight: 10
	Script: <" itemheal rand(45,65),0; ">
},
{
	Id: 599
	AegisName: "Light_Orange_Pot"
	Name: "Light Orange Potion"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 10
	Script: <" itemheal rand(105,145),0; ">
},

//== Usable Items ==========================================
{
	Id: 601
	AegisName: "Wing_Of_Fly"
	Name: "Fly Wing"
	Type: "IT_USABLE"
	Buy: 60
	Weight: 50
	BuyingStore: true
	Script: <" itemskill AL_TELEPORT,1; ">
},
{
	Id: 602
	AegisName: "Wing_Of_Butterfly"
	Name: "Butterfly Wing"
	Type: "IT_USABLE"
	Buy: 300
	Weight: 50
	BuyingStore: true
	Script: <" itemskill AL_TELEPORT,3; ">
},
{
	Id: 603
	AegisName: "Old_Blue_Box"
	Name: "Old Blue Box"
	Type: "IT_USABLE"
	Buy: 10000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 603,1; ">
},
{
	Id: 604
	AegisName: "Branch_Of_Dead_Tree"
	Name: "Dead Branch"
	Type: "IT_USABLE"
	Buy: 50
	Weight: 50
	BuyingStore: true
	Script: <" monster "this",-1,-1,"--ja--",-1,1,""; ">
},
{
	Id: 605
	AegisName: "Anodyne"
	Name: "Anodyne"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill SM_ENDURE,1; ">
},
{
	Id: 606
	AegisName: "Aloebera"
	Name: "Aloevera"
	Type: "IT_USABLE"
	Buy: 1500
	Weight: 100
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill SM_SELFPROVOKE,1; ">
},
{
	Id: 607
	AegisName: "Yggdrasilberry"
	Name: "Yggdrasil Berry"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 300
	BuyingStore: true
	Script: <" percentheal 100,100; ">
},
{
	Id: 608
	AegisName: "Seed_Of_Yggdrasil"
	Name: "Yggdrasil Seed"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 300
	BuyingStore: true
	Script: <" percentheal 50,50; ">
},
{
	Id: 609
	AegisName: "Amulet"
	Name: "Amulet"
	Type: "IT_USABLE"
	Buy: 100
	Weight: 100
	BuyingStore: true
},
{
	Id: 610
	AegisName: "Leaf_Of_Yggdrasil"
	Name: "Yggdrasil Leaf"
	Type: "IT_USABLE"
	Buy: 4000
	Weight: 100
	BuyingStore: true
	Script: <" itemskill ALL_RESURRECTION,1; ">
},
{
	Id: 611
	AegisName: "Spectacles"
	Name: "Magnifier"
	Type: "IT_USABLE"
	Buy: 40
	Weight: 50
	BuyingStore: true
	Script: <" itemskill MC_IDENTIFY,1; ">
},
{
	Id: 612
	AegisName: "Portable_Furnace"
	Name: "Mini Furnace"
	Type: "IT_USABLE"
	Buy: 150
	Weight: 200
	BuyingStore: true
	Script: <" produce 21; ">
},
{
	Id: 613
	AegisName: "Iron_Hammer"
	Name: "Iron Hammer"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" produce 1; ">
},
{
	Id: 614
	AegisName: "Golden_Hammer"
	Name: "Golden Hammer"
	Type: "IT_USABLE"
	Buy: 3000
	Weight: 300
	BuyingStore: true
	Script: <" produce 2; ">
},
{
	Id: 615
	AegisName: "Oridecon_Hammer"
	Name: "Oridecon Hammer"
	Type: "IT_USABLE"
	Buy: 5000
	Weight: 400
	BuyingStore: true
	Script: <" produce 3; ">
},
{
	Id: 616
	AegisName: "Old_Card_Album"
	Name: "Old Card Album"
	Type: "IT_USABLE"
	Buy: 10000
	Weight: 50
	BuyingStore: true
	Script: <" getrandgroupitem 616,1; ">
},
{
	Id: 617
	AegisName: "Old_Violet_Box"
	Name: "Old Purple Box"
	Type: "IT_USABLE"
	Buy: 10000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 617,1; ">
},
{
	Id: 618
	AegisName: "Worn_Out_Scroll"
	Name: "Worn Out Scroll"
	Type: "IT_USABLE"
	Buy: 50
	Weight: 20
	BuyingStore: true
},
{
	Id: 619
	AegisName: "Unripe_Apple"
	Name: "Unripe Apple"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet PORING; ">
},
{
	Id: 620
	AegisName: "Orange_Juice"
	Name: "Orange Juice"
	Type: "IT_USABLE"
	Buy: 1500
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet DROPS; ">
},
{
	Id: 621
	AegisName: "Bitter_Herb"
	Name: "Bitter Herb"
	Type: "IT_USABLE"
	Buy: 20
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet POPORING; ">
},
{
	Id: 622
	AegisName: "Rainbow_Carrot"
	Name: "Rainbow Carrot"
	Type: "IT_USABLE"
	Buy: 2500
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet LUNATIC; ">
},
{
	Id: 623
	AegisName: "Earthworm_The_Dude"
	Name: "Earthworm the Dude"
	Type: "IT_USABLE"
	Buy: 4000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet PICKY; ">
},
{
	Id: 624
	AegisName: "Rotten_Fish"
	Name: "Rotten Fish"
	Type: "IT_USABLE"
	Buy: 2500
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet CHONCHON; ">
},
{
	Id: 625
	AegisName: "Lusty_Iron"
	Name: "Rusty Iron"
	Type: "IT_USABLE"
	Buy: 100
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet STEEL_CHONCHON; ">
},
{
	Id: 626
	AegisName: "Monster_Juice"
	Name: "Monster Juice"
	Type: "IT_USABLE"
	Buy: 1500
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet HUNTER_FLY; ">
},
{
	Id: 627
	AegisName: "Sweet_Milk"
	Name: "Sweet Milk"
	Type: "IT_USABLE"
	Buy: 7000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet SAVAGE_BABE; ">
},
{
	Id: 628
	AegisName: "Well_Dried_Bone"
	Name: "Well-Dried Bone"
	Type: "IT_USABLE"
	Buy: 10000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet DESERT_WOLF_B; ">
},
{
	Id: 629
	AegisName: "Singing_Flower"
	Name: "Singing Flower"
	Type: "IT_USABLE"
	Buy: 300
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet ROCKER; ">
},
{
	Id: 630
	AegisName: "Dew_Laden_Moss"
	Name: "Dew Laden Moss"
	Type: "IT_USABLE"
	Buy: 10
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet SPORE; ">
},
{
	Id: 631
	AegisName: "Deadly_Noxious_Herb"
	Name: "Deadly Noxious Herb"
	Type: "IT_USABLE"
	Buy: 20
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet POISON_SPORE; ">
},
{
	Id: 632
	AegisName: "Fatty_Chubby_Earthworm"
	Name: "Fatty Chubby Earthworm"
	Type: "IT_USABLE"
	Buy: 5000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet PECOPECO; ">
},
{
	Id: 633
	AegisName: "Baked_Yam"
	Name: "Sweet Potato"
	Type: "IT_USABLE"
	Buy: 20
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet SMOKIE; ">
},
{
	Id: 634
	AegisName: "Tropical_Banana"
	Name: "Tropical Banana"
	Type: "IT_USABLE"
	Buy: 20
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet YOYO; ">
},
{
	Id: 635
	AegisName: "Horror_Of_Tribe"
	Name: "Orc Trophy"
	Type: "IT_USABLE"
	Buy: 300
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet ORK_WARRIOR; ">
},
{
	Id: 636
	AegisName: "No_Recipient"
	Name: "No Recipient"
	Type: "IT_USABLE"
	Buy: 100
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet MUNAK; ">
},
{
	Id: 637
	AegisName: "Old_Broom"
	Name: "Old Broom"
	Type: "IT_USABLE"
	Buy: 350
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet DOKEBI; ">
},
{
	Id: 638
	AegisName: "Silver_Knife_Of_Chaste"
	Name: "Silver Knife of Chastity"
	Type: "IT_USABLE"
	Buy: 12000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet SOHEE; ">
},
{
	Id: 639
	AegisName: "Armlet_Of_Obedience"
	Name: "Armlet of Obedience"
	Type: "IT_USABLE"
	Buy: 18000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet ISIS; ">
},
{
	Id: 640
	AegisName: "Shining_Stone"
	Name: "Shining Stone"
	Type: "IT_USABLE"
	Buy: 3000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet PETIT; ">
},
{
	Id: 641
	AegisName: "Contracts_In_Shadow"
	Name: "Contract in Shadow"
	Type: "IT_USABLE"
	Buy: 100
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet DEVIRUCHI; ">
},
{
	Id: 642
	AegisName: "Book_Of_Devil"
	Name: "Book of the Devil"
	Type: "IT_USABLE"
	Buy: 1800
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet BAPHOMET_; ">
},
{
	Id: 643
	AegisName: "Pet_Incubator"
	Name: "Pet Incubator"
	Type: "IT_USABLE"
	Buy: 3000
	Weight: 30
	BuyingStore: true
	Script: <" bpet; ">
},
{
	Id: 644
	AegisName: "Gift_Box"
	Name: "Gift Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 644,1; ">
},
{
	Id: 645
	AegisName: "Center_Potion"
	Name: "Concentration Potion"
	Type: "IT_USABLE"
	Buy: 800
	Weight: 100
	BuyingStore: true
	Script: <" sc_start SC_ATTHASTE_POTION1, 1800000, 0; ">
},
{
	Id: 656
	AegisName: "Awakening_Potion"
	Name: "Awakening Potion"
	Type: "IT_USABLE"
	Buy: 1500
	Weight: 150
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
		Soul_Linker: true
		Gunslinger: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
		Summoner: true
	}
	EquipLv: 40
	BuyingStore: true
	Script: <" sc_start SC_ATTHASTE_POTION2, 1800000, 0; ">
},
{
	Id: 657
	AegisName: "Berserk_Potion"
	Name: "Berserk Potion"
	Type: "IT_USABLE"
	Buy: 3000
	Weight: 200
	Job: {
		Swordsman: true
		Magician: true
		Merchant: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
		Soul_Linker: true
		Gunslinger: true
	}
	EquipLv: 85
	BuyingStore: true
	Script: <" sc_start SC_ATTHASTE_POTION3, 1800000, 0; ">
},
{
	Id: 658
	AegisName: "Union_Of_Tribe"
	Name: "Union of Tribe"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 500
	BuyingStore: true
	Script: <" guildgetexp rand(600000,1200000); ">
},
{
	Id: 659
	AegisName: "Heart_Of_Her"
	Name: "Her Heart"
	Type: "IT_USABLE"
	Buy: 500
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet BON_GUN; ">
},
{
	Id: 660
	AegisName: "Prohibition_Red_Candle"
	Name: "Forbidden Red Candle"
	Type: "IT_USABLE"
	Buy: 20000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet ZHERLTHSH; ">
},
{
	Id: 661
	AegisName: "Sway_Apron"
	Name: "Soft Apron"
	Type: "IT_USABLE"
	Buy: 20000
	Weight: 50
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" pet ALICE; ">
},
{
	Id: 662
	AegisName: "Inspector_Certificate"
	Name: "Authoritative Badge"
	Type: "IT_USABLE"
	Buy: 1450
	Weight: 30
	BuyingStore: true
	Script: <" sc_start SC_MOVHASTE_HORSE, 180000, 25; ">
},
{
	Id: 663
	AegisName: "Korea_Rice_Cake"
	Name: "Korean Rice Cake"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 10
	BuyingStore: true
	Script: <" percentheal 10,0; ">
},
{
	Id: 664
	AegisName: "Gift_Box_1"
	Name: "Gift Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 664,1; ">
},
{
	Id: 665
	AegisName: "Gift_Box_2"
	Name: "Gift Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 665,1; ">
},
{
	Id: 666
	AegisName: "Gift_Box_3"
	Name: "Gift Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 666,1; ">
},
{
	Id: 667
	AegisName: "Gift_Box_4"
	Name: "Gift Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Script: <" getrandgroupitem 667,1; ">
},
{
	Id: 668
	AegisName: "Handsei"
	Name: "Red Envelope"
	Type: "IT_USABLE"
	Weight: 20
	BuyingStore: true
	Script: <" Zeny += rand(1000,10000); ">
},
{
	Id: 669
	AegisName: "Rice_Cake_Soup"
	Name: "Tempting Rice-Cake Soup"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 100
	BuyingStore: true
	Script: <" percentheal -100,-100; ">
},
{
	Id: 670
	AegisName: "Gold_Coin_Moneybag"
	Name: "Bag of Gold Coins"
	Buy: 100000
	Weight: 400
},
{
	Id: 671
	AegisName: "Gold_Coin"
	Name: "Gold Roulette Coin"
	Type: "IT_USABLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" TmpRouletteGold += 1; ">
},
{
	Id: 672
	AegisName: "Copper_Coin_Moneybag"
	Name: "Bag of Bronze Coins"
	Buy: 1000
	Weight: 400
},
{
	Id: 673
	AegisName: "Copper_Coin"
	Name: "Bronze Coin"
	Buy: 100
	Weight: 40
},
{
	Id: 674
	AegisName: "Mithril_Coin"
	Name: "Mithril Coin"
	Buy: 5000
	Weight: 40
},
{
	Id: 675
	AegisName: "Silver_Coin"
	Name: "Silver Roulette Coin"
	Type: "IT_USABLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" TmpRouletteSilver += 1; ">
},
{
	Id: 676
	AegisName: "Silver_Coin_Moneybag"
	Name: "Bag of Silver Coins"
	Buy: 50000
	Weight: 400
},
{
	Id: 677
	AegisName: "White_Gold_Coin"
	Name: "Platinum Coin"
	Buy: 2000
	Weight: 40
},
{
	Id: 678
	AegisName: "Poison_Bottle"
	Name: "Poison Bottle"
	Type: "IT_USABLE"
	Buy: 5000
	Weight: 100
	BuyingStore: true
	Script: <"
		if (Class == Job_Assassin_Cross || Class == Job_Guillotine_Cross || Class == Job_Guillotine_Cross_T) {
			sc_start SC_DPOISON, 60000, 0;
			sc_start SC_ATTHASTE_INFINITY, 60000, 0;
		} else {
			percentheal -100, -100;
		}
	">
},
{
	Id: 679
	AegisName: "Gold_Pill"
	Name: "Pilule"
	Type: "IT_USABLE"
	Buy: 5000
	Weight: 300
	BuyingStore: true
	Script: <" percentheal 50, 50; ">
},
{
	Id: 680
	AegisName: "Magical_Carnation"
	Name: "Magic Carnation"
	Type: "IT_HEALING"
	Weight: 1000
	Script: <" percentheal 0,20; ">
},
{
	Id: 681
	AegisName: "Memory_Of_Wedding"
	Name: "Sweet Memory of Marriage"
	Type: "IT_USABLE"
	Buy: 50000
	Weight: 10
	BuyingStore: true
	Script: <" if(getpartnerid()) sc_start SC_WEDDING,600000,0; ">
},
{
	Id: 682
	AegisName: "Realgar_Wine"
	Name: "Distilled Fighting Spirit"
	Type: "IT_USABLE"
	Weight: 100
	BuyingStore: true
	Script: <" sc_start SC_PLUSATTACKPOWER, 60000, 30; ">
},
{
	Id: 683
	AegisName: "Exorcize_Herb"
	Name: "Herb of Incantation"
	Type: "IT_USABLE"
	Weight: 50
	BuyingStore: true
	Script: <" sc_start SC_PLUSMAGICPOWER, 60000, 30; ">
},
{
	Id: 684
	AegisName: "Durian"
	Name: "Durian"
	Type: "IT_USABLE"
	Buy: 15000
	Weight: 300
	BuyingStore: true
	Script: <"
		sc_start SC_PLUSATTACKPOWER, 60000, 10;
		sc_start SC_PLUSMAGICPOWER, 60000, 10;
	">
},
{
	Id: 685
	AegisName: "RAMADAN"
	Name: "Ramadan"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 300
	Script: <" percentheal 100,50; ">
},
{
	Id: 686
	AegisName: "Earth_Scroll_1_3"
	Name: "Level 3 Earth Spike"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill WZ_EARTHSPIKE,3; ">
},
{
	Id: 687
	AegisName: "Earth_Scroll_1_5"
	Name: "Level 5 Earth Spike"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill WZ_EARTHSPIKE,5; ">
},
{
	Id: 688
	AegisName: "Cold_Scroll_1_3"
	Name: "Level 3 Cold Bolt"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_COLDBOLT,3; ">
},
{
	Id: 689
	AegisName: "Cold_Scroll_1_5"
	Name: "Level 5 Cold Bolt"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_COLDBOLT,5; ">
},
{
	Id: 690
	AegisName: "Fire_Scroll_1_3"
	Name: "Level 3 Fire Bolt"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREBOLT,3; ">
},
{
	Id: 691
	AegisName: "Fire_Scroll_1_5"
	Name: "Level 5 Fire Bolt"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREBOLT,5; ">
},
{
	Id: 692
	AegisName: "Wind_Scroll_1_3"
	Name: "Level 3 Lightening Bolt"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_LIGHTNINGBOLT,3; ">
},
{
	Id: 693
	AegisName: "Wind_Scroll_1_5"
	Name: "Level 5 Lightening Bolt"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_LIGHTNINGBOLT,5; ">
},
{
	Id: 694
	AegisName: "Ghost_Scroll_1_3"
	Name: "Level 3 Soul Strike"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_SOULSTRIKE,3; ">
},
{
	Id: 695
	AegisName: "Ghost_Scroll_1_5"
	Name: "Level 5 Soul Strike"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_SOULSTRIKE,5; ">
},
{
	Id: 696
	AegisName: "Fire_Scroll_2_1"
	Name: "Level 1 Fire Ball"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREBALL,1; ">
},
{
	Id: 697
	AegisName: "Fire_Scroll_2_5"
	Name: "Level 5 Fire Ball"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREBALL,5; ">
},
{
	Id: 698
	AegisName: "Fire_Scroll_3_1"
	Name: "Level 1 Fire Wall"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREWALL,1; ">
},
{
	Id: 699
	AegisName: "Fire_Scroll_3_5"
	Name: "Level 5 Fire Wall"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FIREWALL,5; ">
},
{
	Id: 700
	AegisName: "Cold_Scroll_2_1"
	Name: "Level 1 Frost Diver"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FROSTDIVER,1; ">
},

//== Etc Items =============================================
{
	Id: 701
	AegisName: "Ora_Ora"
	Name: "Ora Ora"
	Buy: 55000
	Weight: 200
	BuyingStore: true
},
{
	Id: 702
	AegisName: "Animal_Blood"
	Name: "Animal Gore"
	Buy: 450
	Weight: 100
	BuyingStore: true
},
{
	Id: 703
	AegisName: "Hinalle"
	Name: "Hinalle"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 704
	AegisName: "Aloe"
	Name: "Aloe"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 705
	AegisName: "Clover"
	Name: "Clover"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 706
	AegisName: "Four_Leaf_Clover"
	Name: "Four Leaf Clover"
	Buy: 80000
	Weight: 10
	BuyingStore: true
},
{
	Id: 707
	AegisName: "Singing_Plant"
	Name: "Singing Plant"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 708
	AegisName: "Ment"
	Name: "Ment"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 709
	AegisName: "Izidor"
	Name: "Izidor"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 710
	AegisName: "Illusion_Flower"
	Name: "Illusion Flower"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 711
	AegisName: "Shoot"
	Name: "Shoot"
	Buy: 16
	Weight: 10
	BuyingStore: true
},
{
	Id: 712
	AegisName: "Flower"
	Name: "Flower"
	Buy: 2
	Weight: 10
	BuyingStore: true
},
{
	Id: 713
	AegisName: "Empty_Bottle"
	Name: "Empty Bottle"
	Buy: 6
	Weight: 20
	BuyingStore: true
},
{
	Id: 714
	AegisName: "Emperium"
	Name: "Emperium"
	Buy: 2
	Weight: 1000
	BuyingStore: true
},
{
	Id: 715
	AegisName: "Yellow_Gemstone"
	Name: "Yellow Gemstone"
	Buy: 600
	Weight: 30
	BuyingStore: true
},
{
	Id: 716
	AegisName: "Red_Gemstone"
	Name: "Red Gemstone"
	Buy: 600
	Weight: 30
	BuyingStore: true
},
{
	Id: 717
	AegisName: "Blue_Gemstone"
	Name: "Blue Gemstone"
	Buy: 600
	Weight: 30
	BuyingStore: true
},
{
	Id: 718
	AegisName: "Dark_Red_Jewel"
	Name: "Garnet"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 719
	AegisName: "Violet_Jewel"
	Name: "Amethyst"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 720
	AegisName: "Skyblue_Jewel"
	Name: "Aquamarine"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 721
	AegisName: "Azure_Jewel"
	Name: "Emerald"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 722
	AegisName: "Scarlet_Jewel"
	Name: "Pearl"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 723
	AegisName: "Cardinal_Jewel"
	Name: "Ruby"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 724
	AegisName: "Cardinal_Jewel_"
	Name: "Cursed Ruby"
	Buy: 600
	Weight: 100
	BuyingStore: true
},
{
	Id: 725
	AegisName: "Red_Jewel"
	Name: "Sardonyx"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 726
	AegisName: "Blue_Jewel"
	Name: "Sapphire"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 727
	AegisName: "White_Jewel"
	Name: "Opal"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 728
	AegisName: "Golden_Jewel"
	Name: "Topaz"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 729
	AegisName: "Bluish_Green_Jewel"
	Name: "Zircon"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 730
	AegisName: "Crystal_Jewel"
	Name: "1carat Diamond"
	Buy: 10000
	Weight: 100
	BuyingStore: true
},
{
	Id: 731
	AegisName: "Crystal_Jewel_"
	Name: "2carat Diamond"
	Buy: 25000
	Weight: 100
	BuyingStore: true
},
{
	Id: 732
	AegisName: "Crystal_Jewel__"
	Name: "3carat Diamond"
	Buy: 55000
	Weight: 100
	BuyingStore: true
},
{
	Id: 733
	AegisName: "Crystal_Jewel___"
	Name: "Cracked Diamond"
	Buy: 10
	Weight: 100
	BuyingStore: true
},
{
	Id: 734
	AegisName: "Red_Frame"
	Name: "Red Frame"
	Buy: 3000
	Weight: 200
	BuyingStore: true
},
{
	Id: 735
	AegisName: "Blue_Porcelain"
	Name: "Chung Jah"
	Buy: 5000
	Weight: 500
	BuyingStore: true
},
{
	Id: 736
	AegisName: "White_Platter"
	Name: "China"
	Buy: 1000
	Weight: 300
	BuyingStore: true
},
{
	Id: 737
	AegisName: "Black_Ladle"
	Name: "Black Ladle"
	Buy: 400
	Weight: 50
	BuyingStore: true
},
{
	Id: 738
	AegisName: "Pencil_Case"
	Name: "Pencil Case"
	Buy: 400
	Weight: 100
	BuyingStore: true
},
{
	Id: 739
	AegisName: "Rouge"
	Name: "Rouge"
	Buy: 10000
	Weight: 10
	BuyingStore: true
},
{
	Id: 740
	AegisName: "Stuffed_Doll"
	Name: "Puppet"
	Buy: 1000
	Weight: 100
	BuyingStore: true
},
{
	Id: 741
	AegisName: "Poring_Doll"
	Name: "Poring Doll"
	Buy: 1800
	Weight: 100
	BuyingStore: true
},
{
	Id: 742
	AegisName: "Chonchon_Doll"
	Name: "Chonchon Doll"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 743
	AegisName: "Spore_Doll"
	Name: "Spore Doll"
	Buy: 5500
	Weight: 100
	BuyingStore: true
},
{
	Id: 744
	AegisName: "Bunch_Of_Flowers"
	Name: "Bouquet"
	Buy: 2000
	Weight: 50
	BuyingStore: true
},
{
	Id: 745
	AegisName: "Wedding_Bouquet"
	Name: "Wedding Bouquet"
	Buy: 12000
	Weight: 50
	BuyingStore: true
},
{
	Id: 746
	AegisName: "Glass_Bead"
	Name: "Glass Bead"
	Buy: 1400
	Weight: 50
	BuyingStore: true
},
{
	Id: 747
	AegisName: "Crystal_Mirror"
	Name: "Crystal Mirror"
	Buy: 15000
	Weight: 50
	BuyingStore: true
},
{
	Id: 748
	AegisName: "Witherless_Rose"
	Name: "Witherless Rose"
	Buy: 55000
	Weight: 10
	BuyingStore: true
},
{
	Id: 749
	AegisName: "Frozen_Rose"
	Name: "Frozen Rose"
	Buy: 35000
	Weight: 10
	BuyingStore: true
},
{
	Id: 750
	AegisName: "Baphomet_Doll"
	Name: "Baphomet Doll"
	Buy: 18000
	Weight: 100
	BuyingStore: true
},
{
	Id: 751
	AegisName: "Osiris_Doll"
	Name: "Osiris Doll"
	Buy: 14000
	Weight: 100
	BuyingStore: true
},
{
	Id: 752
	AegisName: "Grasshopper_Doll"
	Name: "Rocker Doll"
	Buy: 4000
	Weight: 100
	BuyingStore: true
},
{
	Id: 753
	AegisName: "Monkey_Doll"
	Name: "Yoyo Doll"
	Buy: 6000
	Weight: 100
	BuyingStore: true
},
{
	Id: 754
	AegisName: "Raccoondog_Doll"
	Name: "Raccoon Doll"
	Buy: 5000
	Weight: 100
	BuyingStore: true
},
{
	Id: 756
	AegisName: "Oridecon_Stone"
	Name: "Rough Oridecon"
	Buy: 550
	Weight: 200
	BuyingStore: true
},
{
	Id: 757
	AegisName: "Elunium_Stone"
	Name: "Rough Elunium"
	Buy: 650
	Weight: 200
	BuyingStore: true
},
{
	Id: 901
	AegisName: "Danggie"
	Name: "Daenggie"
	Buy: 260
	Weight: 10
	BuyingStore: true
},
{
	Id: 902
	AegisName: "Tree_Root"
	Name: "Tree Root"
	Buy: 12
	Weight: 10
	BuyingStore: true
},
{
	Id: 903
	AegisName: "Reptile_Tongue"
	Name: "Reptile Tongue"
	Buy: 140
	Weight: 10
	BuyingStore: true
},
{
	Id: 904
	AegisName: "Scorpions_Tail"
	Name: "Scorpion Tail"
	Buy: 124
	Weight: 10
	BuyingStore: true
},
{
	Id: 905
	AegisName: "Stem"
	Name: "Stem"
	Buy: 46
	Weight: 10
	BuyingStore: true
},
{
	Id: 906
	AegisName: "Pointed_Scale"
	Name: "Pointed Scale"
	Buy: 68
	Weight: 10
	BuyingStore: true
},
{
	Id: 907
	AegisName: "Resin"
	Name: "Resin"
	Buy: 120
	Weight: 10
	BuyingStore: true
},
{
	Id: 908
	AegisName: "Spawn"
	Name: "Spawn"
	Buy: 140
	Weight: 10
	BuyingStore: true
},
{
	Id: 909
	AegisName: "Jellopy"
	Name: "Jellopy"
	Buy: 6
	Weight: 10
	BuyingStore: true
},
{
	Id: 910
	AegisName: "Garlet"
	Name: "Garlet"
	Buy: 40
	Weight: 10
	BuyingStore: true
},
{
	Id: 911
	AegisName: "Scell"
	Name: "Scell"
	Buy: 160
	Weight: 10
	BuyingStore: true
},
{
	Id: 912
	AegisName: "Zargon"
	Name: "Zargon"
	Buy: 480
	Weight: 10
	BuyingStore: true
},
{
	Id: 913
	AegisName: "Tooth_Of_Bat"
	Name: "Tooth of Bat"
	Buy: 34
	Weight: 10
	BuyingStore: true
},
{
	Id: 914
	AegisName: "Fluff"
	Name: "Fluff"
	Buy: 8
	Weight: 10
	BuyingStore: true
},
{
	Id: 915
	AegisName: "Chrysalis"
	Name: "Chrysalis"
	Buy: 8
	Weight: 10
	BuyingStore: true
},
{
	Id: 916
	AegisName: "Feather_Of_Birds"
	Name: "Feather of Birds"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 917
	AegisName: "Talon"
	Name: "Talon"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 918
	AegisName: "Sticky_Webfoot"
	Name: "Sticky Webfoot"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 919
	AegisName: "Animals_Skin"
	Name: "Animal Skin"
	Buy: 36
	Weight: 10
	BuyingStore: true
},
{
	Id: 920
	AegisName: "Claw_Of_Wolves"
	Name: "Wolf Claw"
	Buy: 58
	Weight: 10
	BuyingStore: true
},
{
	Id: 921
	AegisName: "Mushroom_Spore"
	Name: "Mushroom Spore"
	Buy: 36
	Weight: 10
	BuyingStore: true
},
{
	Id: 922
	AegisName: "Orcish_Cuspid"
	Name: "Orc's Fang"
	Buy: 220
	Weight: 10
	BuyingStore: true
},
{
	Id: 923
	AegisName: "Evil_Horn"
	Name: "Evil Horn"
	Buy: 1200
	Weight: 10
	BuyingStore: true
},
{
	Id: 924
	AegisName: "Powder_Of_Butterfly"
	Name: "Powder of Butterfly"
	Buy: 90
	Weight: 10
	BuyingStore: true
},
{
	Id: 925
	AegisName: "Bill_Of_Birds"
	Name: "Bill of Birds"
	Buy: 64
	Weight: 10
	BuyingStore: true
},
{
	Id: 926
	AegisName: "Scale_Of_Snakes"
	Name: "Snake Scale"
	Buy: 82
	Weight: 10
	BuyingStore: true
},
{
	Id: 928
	AegisName: "Insect_Feeler"
	Name: "Insect Feeler"
	Buy: 114
	Weight: 10
	BuyingStore: true
},
{
	Id: 929
	AegisName: "Immortal_Heart"
	Name: "Immortal Heart"
	Buy: 374
	Weight: 10
	BuyingStore: true
},
{
	Id: 930
	AegisName: "Rotten_Bandage"
	Name: "Rotten Bandage"
	Buy: 350
	Weight: 10
	BuyingStore: true
},
{
	Id: 931
	AegisName: "Orcish_Voucher"
	Name: "Orcish Voucher"
	Buy: 142
	Weight: 10
	BuyingStore: true
},
{
	Id: 932
	AegisName: "Skel_Bone"
	Name: "Skel-Bone"
	Buy: 232
	Weight: 10
	BuyingStore: true
},
{
	Id: 934
	AegisName: "Mementos"
	Name: "Memento"
	Buy: 600
	Weight: 10
	BuyingStore: true
},
{
	Id: 935
	AegisName: "Shell"
	Name: "Shell"
	Buy: 14
	Weight: 10
	BuyingStore: true
},
{
	Id: 936
	AegisName: "Scales_Shell"
	Name: "Scale Shell"
	Buy: 466
	Weight: 10
	BuyingStore: true
},
{
	Id: 937
	AegisName: "Posionous_Canine"
	Name: "Venom Canine"
	Buy: 148
	Weight: 10
	BuyingStore: true
},
{
	Id: 938
	AegisName: "Sticky_Mucus"
	Name: "Sticky Mucus"
	Buy: 70
	Weight: 10
	BuyingStore: true
},
{
	Id: 939
	AegisName: "Bee_Sting"
	Name: "Bee Sting"
	Buy: 32
	Weight: 10
	BuyingStore: true
},
{
	Id: 940
	AegisName: "Grasshoppers_Leg"
	Name: "Grasshopper's Leg"
	Buy: 36
	Weight: 10
	BuyingStore: true
},
{
	Id: 941
	AegisName: "Nose_Ring"
	Name: "Nose Ring"
	Buy: 568
	Weight: 10
	BuyingStore: true
},
{
	Id: 942
	AegisName: "Yoyo_Tail"
	Name: "Yoyo Tail"
	Buy: 114
	Weight: 10
	BuyingStore: true
},
{
	Id: 943
	AegisName: "Solid_Shell"
	Name: "Solid Shell"
	Buy: 448
	Weight: 10
	BuyingStore: true
},
{
	Id: 944
	AegisName: "Horseshoe"
	Name: "Horseshoe"
	Buy: 588
	Weight: 10
	BuyingStore: true
},
{
	Id: 945
	AegisName: "Raccoon_Leaf"
	Name: "Raccoon Leaf"
	Buy: 106
	Weight: 10
	BuyingStore: true
},
{
	Id: 946
	AegisName: "Snails_Shell"
	Name: "Snail's Shell"
	Buy: 64
	Weight: 10
	BuyingStore: true
},
{
	Id: 947
	AegisName: "Horn"
	Name: "Horn"
	Buy: 116
	Weight: 10
	BuyingStore: true
},
{
	Id: 948
	AegisName: "Bears_Foot"
	Name: "Bear's Footskin"
	Buy: 174
	Weight: 10
	BuyingStore: true
},
{
	Id: 949
	AegisName: "Feather"
	Name: "Feather"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 950
	AegisName: "Heart_Of_Mermaid"
	Name: "Heart of Mermaid"
	Buy: 264
	Weight: 10
	BuyingStore: true
},
{
	Id: 951
	AegisName: "Fin"
	Name: "Fin"
	Buy: 412
	Weight: 10
	BuyingStore: true
},
{
	Id: 952
	AegisName: "Cactus_Needle"
	Name: "Cactus Needle"
	Buy: 82
	Weight: 10
	BuyingStore: true
},
{
	Id: 953
	AegisName: "Stone_Heart"
	Name: "Stone Heart"
	Buy: 184
	Weight: 10
	BuyingStore: true
},
{
	Id: 954
	AegisName: "Shining_Scales"
	Name: "Shining Scale"
	Buy: 466
	Weight: 10
	BuyingStore: true
},
{
	Id: 955
	AegisName: "Worm_Peelings"
	Name: "Worm Peeling"
	Buy: 52
	Weight: 10
	BuyingStore: true
},
{
	Id: 956
	AegisName: "Gill"
	Name: "Gill"
	Buy: 342
	Weight: 10
	BuyingStore: true
},
{
	Id: 957
	AegisName: "Decayed_Nail"
	Name: "Decayed Nail"
	Buy: 82
	Weight: 10
	BuyingStore: true
},
{
	Id: 958
	AegisName: "Horrendous_Mouth"
	Name: "Horrendous Mouth"
	Buy: 390
	Weight: 10
	BuyingStore: true
},
{
	Id: 959
	AegisName: "Rotten_Scale"
	Name: "Stinky Scale"
	Buy: 168
	Weight: 10
	BuyingStore: true
},
{
	Id: 960
	AegisName: "Nipper"
	Name: "Nipper"
	Buy: 114
	Weight: 10
	BuyingStore: true
},
{
	Id: 961
	AegisName: "Conch"
	Name: "Conch"
	Buy: 158
	Weight: 10
	BuyingStore: true
},
{
	Id: 962
	AegisName: "Tentacle"
	Name: "Tentacle"
	Buy: 70
	Weight: 10
	BuyingStore: true
},
{
	Id: 963
	AegisName: "Sharp_Scale"
	Name: "Sharp Scale"
	Buy: 250
	Weight: 10
	BuyingStore: true
},
{
	Id: 964
	AegisName: "Crap_Shell"
	Name: "Crab Shell"
	Buy: 90
	Weight: 10
	BuyingStore: true
},
{
	Id: 965
	AegisName: "Clam_Shell"
	Name: "Clam Shell"
	Buy: 56
	Weight: 10
	BuyingStore: true
},
{
	Id: 966
	AegisName: "Flesh_Of_Clam"
	Name: "Clam Flesh"
	Buy: 158
	Weight: 10
	BuyingStore: true
},
{
	Id: 967
	AegisName: "Turtle_Shell"
	Name: "Turtle Shell"
	Buy: 680
	Weight: 10
	BuyingStore: true
},
{
	Id: 968
	AegisName: "Voucher_Of_Orcish_Hero"
	Name: "Heroic Emblem"
	Buy: 3000
	Weight: 10
	BuyingStore: true
},
{
	Id: 969
	AegisName: "Gold"
	Name: "Gold"
	Buy: 200000
	Weight: 200
	BuyingStore: true
},
{
	Id: 970
	AegisName: "Alchol"
	Name: "Alcohol"
	Buy: 400
	Weight: 30
},
{
	Id: 971
	AegisName: "Detrimindexta"
	Name: "Detrimindexta"
	Buy: 400
	Weight: 30
	BuyingStore: true
},
{
	Id: 972
	AegisName: "Karvodailnirol"
	Name: "Karvodailnirol"
	Buy: 400
	Weight: 30
	BuyingStore: true
},
{
	Id: 973
	AegisName: "Counteragent"
	Name: "Counteragent"
	Buy: 800
	Weight: 70
	BuyingStore: true
},
{
	Id: 974
	AegisName: "Mixture"
	Name: "Mixture"
	Buy: 800
	Weight: 70
	BuyingStore: true
},
{
	Id: 975
	AegisName: "Scarlet_Dyestuffs"
	Name: "Scarlet Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 976
	AegisName: "Lemon_Dyestuffs"
	Name: "Lemon Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 978
	AegisName: "Cobaltblue_Dyestuffs"
	Name: "Cobaltblue Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 979
	AegisName: "Darkgreen_Dyestuffs"
	Name: "Darkgreen Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 980
	AegisName: "Orange_Dyestuffs"
	Name: "Orange Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 981
	AegisName: "Violet_Dyestuffs"
	Name: "Violet Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 982
	AegisName: "White_Dyestuffs"
	Name: "White Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 983
	AegisName: "Black_Dyestuffs"
	Name: "Black Dyestuffs"
	Buy: 8000
	Weight: 150
	BuyingStore: true
},
{
	Id: 984
	AegisName: "Oridecon"
	Name: "Oridecon"
	Buy: 1100
	Weight: 200
	BuyingStore: true
},
{
	Id: 985
	AegisName: "Elunium"
	Name: "Elunium"
	Buy: 1100
	Weight: 200
	BuyingStore: true
},
{
	Id: 986
	AegisName: "Anvil"
	Name: "Anvil"
	Buy: 30000
	Weight: 500
	BuyingStore: true
},
{
	Id: 987
	AegisName: "Oridecon_Anvil"
	Name: "Oridecon Anvil"
	Buy: 120000
	Weight: 700
	BuyingStore: true
},
{
	Id: 988
	AegisName: "Golden_Anvil"
	Name: "Golden Anvil"
	Buy: 300000
	Weight: 900
	BuyingStore: true
},
{
	Id: 989
	AegisName: "Emperium_Anvil"
	Name: "Emperium Anvil"
	Buy: 600000
	Weight: 1000
	BuyingStore: true
},
{
	Id: 990
	AegisName: "Boody_Red"
	Name: "Red Blood"
	Buy: 1000
	Weight: 50
	BuyingStore: true
},
{
	Id: 991
	AegisName: "Crystal_Blue"
	Name: "Crystal Blue"
	Buy: 1000
	Weight: 50
	BuyingStore: true
},
{
	Id: 992
	AegisName: "Wind_Of_Verdure"
	Name: "Wind of Verdure"
	Buy: 1000
	Weight: 50
	BuyingStore: true
},
{
	Id: 993
	AegisName: "Yellow_Live"
	Name: "Green Live"
	Buy: 1000
	Weight: 50
	BuyingStore: true
},
{
	Id: 994
	AegisName: "Flame_Heart"
	Name: "Flame Heart"
	Buy: 3000
	Weight: 300
	BuyingStore: true
},
{
	Id: 995
	AegisName: "Mistic_Frozen"
	Name: "Mystic Frozen"
	Buy: 3000
	Weight: 300
	BuyingStore: true
},
{
	Id: 996
	AegisName: "Rough_Wind"
	Name: "Rough Wind"
	Buy: 3000
	Weight: 300
	BuyingStore: true
},
{
	Id: 997
	AegisName: "Great_Nature"
	Name: "Great Nature"
	Buy: 3000
	Weight: 300
	BuyingStore: true
},
{
	Id: 998
	AegisName: "Iron"
	Name: "Iron"
	Buy: 100
	Weight: 50
	BuyingStore: true
},
{
	Id: 999
	AegisName: "Steel"
	Name: "Steel"
	Buy: 1000
	Weight: 100
	BuyingStore: true
},
{
	Id: 1000
	AegisName: "Star_Crumb"
	Name: "Star Crumb"
	Buy: 4500
	Weight: 100
	BuyingStore: true
},
{
	Id: 1001
	AegisName: "Sparkling_Dust"
	Name: "Star Dust"
	Buy: 1500
	Weight: 10
	BuyingStore: true
},
{
	Id: 1002
	AegisName: "Iron_Ore"
	Name: "Iron Ore"
	Buy: 50
	Weight: 150
	BuyingStore: true
},
{
	Id: 1003
	AegisName: "Coal"
	Name: "Coal"
	Buy: 500
	Weight: 50
	BuyingStore: true
},
{
	Id: 1004
	AegisName: "Patriotism_Marks"
	Name: "Chivalry Emblem"
	Buy: 2
	Weight: 100
	BuyingStore: true
},
{
	Id: 1005
	AegisName: "Hammer_Of_Blacksmith"
	Name: "Hammer of Blacksmith"
	Buy: 2
	Weight: 800
	BuyingStore: true
},
{
	Id: 1006
	AegisName: "Old_Magic_Book"
	Name: "Old Magicbook"
	Buy: 2
	Weight: 30
	BuyingStore: true
},
{
	Id: 1007
	AegisName: "Penetration"
	Name: "Necklace of Wisdom"
	Buy: 2
	Weight: 40
	BuyingStore: true
},
{
	Id: 1008
	AegisName: "Frozen_Heart"
	Name: "Necklace of Oblivion"
	Buy: 2
	Weight: 100
	BuyingStore: true
},
{
	Id: 1009
	AegisName: "Sacred_Marks"
	Name: "Hand of God"
	Buy: 2
	Weight: 20
	BuyingStore: true
},
{
	Id: 1010
	AegisName: "Phracon"
	Name: "Phracon"
	Buy: 200
	Weight: 200
	BuyingStore: true
},
{
	Id: 1011
	AegisName: "Emveretarcon"
	Name: "Emveretarcon"
	Buy: 1000
	Weight: 200
	BuyingStore: true
},
{
	Id: 1012
	AegisName: "Lizard_Scruff"
	Name: "Frill"
	Buy: 250
	Weight: 10
	BuyingStore: true
},
{
	Id: 1013
	AegisName: "Colorful_Shell"
	Name: "Rainbow Shell"
	Buy: 90
	Weight: 10
	BuyingStore: true
},
{
	Id: 1014
	AegisName: "Jaws_Of_Ant"
	Name: "Ant Jaw"
	Buy: 232
	Weight: 10
	BuyingStore: true
},
{
	Id: 1015
	AegisName: "Thin_N_Long_Tongue"
	Name: "Tongue"
	Buy: 528
	Weight: 10
	BuyingStore: true
},
{
	Id: 1016
	AegisName: "Rat_Tail"
	Name: "Rat Tail"
	Buy: 52
	Weight: 10
	BuyingStore: true
},
{
	Id: 1017
	AegisName: "Moustache_Of_Mole"
	Name: "Mole Whiskers"
	Buy: 106
	Weight: 10
	BuyingStore: true
},
{
	Id: 1018
	AegisName: "Nail_Of_Mole"
	Name: "Mole Claw"
	Buy: 210
	Weight: 10
	BuyingStore: true
},
{
	Id: 1019
	AegisName: "Wooden_Block"
	Name: "Trunk"
	Buy: 60
	Weight: 10
	BuyingStore: true
},
{
	Id: 1020
	AegisName: "Long_Hair"
	Name: "Black Hair"
	Buy: 292
	Weight: 10
	BuyingStore: true
},
{
	Id: 1021
	AegisName: "Dokkaebi_Horn"
	Name: "Dokebi Horn"
	Buy: 292
	Weight: 10
	BuyingStore: true
},
{
	Id: 1022
	AegisName: "Fox_Tail"
	Name: "Nine Tails"
	Buy: 650
	Weight: 10
	BuyingStore: true
},
{
	Id: 1023
	AegisName: "Fish_Tail"
	Name: "Fish Tail"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 1024
	AegisName: "Chinese_Ink"
	Name: "Squid Ink"
	Buy: 264
	Weight: 10
	BuyingStore: true
},
{
	Id: 1025
	AegisName: "Spiderweb"
	Name: "Cobweb"
	Buy: 184
	Weight: 10
	BuyingStore: true
},
{
	Id: 1026
	AegisName: "Acorn"
	Name: "Acorn"
	Buy: 98
	Weight: 10
	BuyingStore: true
},
{
	Id: 1027
	AegisName: "Porcupine_Spike"
	Name: "Porcupine Quill"
	Buy: 158
	Weight: 10
	BuyingStore: true
},
{
	Id: 1028
	AegisName: "Wild_Boars_Mane"
	Name: "Mane"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 1029
	AegisName: "Tigers_Skin"
	Name: "Tiger Skin"
	Buy: 548
	Weight: 10
	BuyingStore: true
},
{
	Id: 1030
	AegisName: "Tiger_Footskin"
	Name: "Tiger's Footskin"
	Buy: 1500
	Weight: 10
	BuyingStore: true
},
{
	Id: 1031
	AegisName: "Limb_Of_Mantis"
	Name: "Mantis Scythe"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 1032
	AegisName: "Blossom_Of_Maneater"
	Name: "Maneater Blossom"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 1033
	AegisName: "Root_Of_Maneater"
	Name: "Maneater Root"
	Buy: 208
	Weight: 10
	BuyingStore: true
},
{
	Id: 1034
	AegisName: "Cobold_Hair"
	Name: "Blue Hair"
	Buy: 342
	Weight: 10
	BuyingStore: true
},
{
	Id: 1035
	AegisName: "Dragon_Canine"
	Name: "Dragon Canine"
	Buy: 484
	Weight: 10
	BuyingStore: true
},
{
	Id: 1036
	AegisName: "Dragon_Scale"
	Name: "Dragon Scale"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 1037
	AegisName: "Dragon_Train"
	Name: "Dragon Tail"
	Buy: 1200
	Weight: 10
	BuyingStore: true
},
{
	Id: 1038
	AegisName: "Petite_DiablOfs_Horn"
	Name: "Little Evil Horn"
	Buy: 528
	Weight: 10
	BuyingStore: true
},
{
	Id: 1039
	AegisName: "Petite_DiablOfs_Wing"
	Name: "Little Evil Wing"
	Buy: 2000
	Weight: 10
	BuyingStore: true
},
{
	Id: 1040
	AegisName: "Elder_Pixies_Beard"
	Name: "Elder Pixie's Moustache"
	Buy: 232
	Weight: 10
	BuyingStore: true
},
{
	Id: 1041
	AegisName: "Lantern"
	Name: "Lantern"
	Buy: 250
	Weight: 10
	BuyingStore: true
},
{
	Id: 1042
	AegisName: "Short_Leg"
	Name: "Bug Leg"
	Buy: 430
	Weight: 10
	BuyingStore: true
},
{
	Id: 1043
	AegisName: "Nail_Of_Orc"
	Name: "Orc Claw"
	Buy: 168
	Weight: 10
	BuyingStore: true
},
{
	Id: 1044
	AegisName: "Tooth_Of_"
	Name: "Zenorc's Fang"
	Buy: 264
	Weight: 10
	BuyingStore: true
},
{
	Id: 1045
	AegisName: "Sacred_Masque"
	Name: "Cultish Masque"
	Buy: 412
	Weight: 10
	BuyingStore: true
},
{
	Id: 1046
	AegisName: "Tweezer"
	Name: "Scorpion Nipper"
	Buy: 614
	Weight: 10
	BuyingStore: true
},
{
	Id: 1047
	AegisName: "Head_Of_Medusa"
	Name: "Dead Medusa"
	Buy: 548
	Weight: 10
	BuyingStore: true
},
{
	Id: 1048
	AegisName: "Slender_Snake"
	Name: "Horrendous Hair"
	Buy: 800
	Weight: 10
	BuyingStore: true
},
{
	Id: 1049
	AegisName: "Skirt_Of_Virgin"
	Name: "Skirt of Virgin"
	Buy: 1700
	Weight: 10
	BuyingStore: true
},
{
	Id: 1050
	AegisName: "Tendon"
	Name: "Tendon"
	Buy: 220
	Weight: 10
	BuyingStore: true
},
{
	Id: 1051
	AegisName: "Detonator"
	Name: "Detonator"
	Buy: 450
	Weight: 10
	BuyingStore: true
},
{
	Id: 1052
	AegisName: "Single_Cell"
	Name: "Single Cell"
	Buy: 46
	Weight: 10
	BuyingStore: true
},
{
	Id: 1053
	AegisName: "Tooth_Of_Ancient_Fish"
	Name: "Ancient Tooth"
	Buy: 548
	Weight: 10
	BuyingStore: true
},
{
	Id: 1054
	AegisName: "Lip_Of_Ancient_Fish"
	Name: "Ancient Lips"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 1055
	AegisName: "Earthworm_Peeling"
	Name: "Earthworm Peeling"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 1056
	AegisName: "Grit"
	Name: "Grit"
	Buy: 306
	Weight: 10
	BuyingStore: true
},
{
	Id: 1057
	AegisName: "Moth_Dust"
	Name: "Moth Dust"
	Buy: 138
	Weight: 10
	BuyingStore: true
},
{
	Id: 1058
	AegisName: "Wing_Of_Moth"
	Name: "Moth Wings"
	Buy: 200
	Weight: 10
	BuyingStore: true
},
{
	Id: 1059
	AegisName: "Transparent_Cloth"
	Name: "Fabric"
	Buy: 306
	Weight: 10
	BuyingStore: true
},
{
	Id: 1060
	AegisName: "Golden_Hair"
	Name: "Golden Hair"
	Buy: 430
	Weight: 10
	BuyingStore: true
},
{
	Id: 1061
	AegisName: "Starsand_Of_Witch"
	Name: "Witched Starsand"
	Buy: 484
	Weight: 10
	BuyingStore: true
},
{
	Id: 1062
	AegisName: "Pumpkin_Head"
	Name: "Jack o' Pumpkin"
	Buy: 374
	Weight: 10
	BuyingStore: true
},
{
	Id: 1063
	AegisName: "Sharpened_Cuspid"
	Name: "Fang"
	Buy: 680
	Weight: 10
	BuyingStore: true
},
{
	Id: 1064
	AegisName: "Reins"
	Name: "Reins"
	Buy: 802
	Weight: 10
	BuyingStore: true
},
{
	Id: 1065
	AegisName: "Booby_Trap"
	Name: "Trap"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 1066
	AegisName: "Tree_Of_Archer_1"
	Name: "Fine-grained Trunk"
	Buy: 2
	Weight: 10
	BuyingStore: true
},
{
	Id: 1067
	AegisName: "Tree_Of_Archer_2"
	Name: "Solid Trunk"
	Buy: 2
	Weight: 10
	BuyingStore: true
},
{
	Id: 1068
	AegisName: "Tree_Of_Archer_3"
	Name: "Barren Trunk"
	Buy: 2
	Weight: 10
	BuyingStore: true
},
{
	Id: 1069
	AegisName: "Mushroom_Of_Thief_1"
	Name: "Orange Net Mushroom"
	Buy: 2
	Weight: 10
},
{
	Id: 1070
	AegisName: "Mushroom_Of_Thief_2"
	Name: "Orange Gooey Mushroom"
	Buy: 2
	Weight: 10
},
{
	Id: 1071
	AegisName: "Mage_Test_1"
	Name: "Unknown Test Tube"
	Weight: 10
},
{
	Id: 1072
	AegisName: "Delivery_Message"
	Name: "Delivery Message"
	Weight: 10
},
{
	Id: 1073
	AegisName: "Merchant_Voucher_1"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1074
	AegisName: "Merchant_Voucher_2"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1075
	AegisName: "Merchant_Voucher_3"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1076
	AegisName: "Merchant_Voucher_4"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1077
	AegisName: "Merchant_Voucher_5"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1078
	AegisName: "Merchant_Voucher_6"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1079
	AegisName: "Merchant_Voucher_7"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1080
	AegisName: "Merchant_Voucher_8"
	Name: "Voucher"
	Weight: 10
},
{
	Id: 1081
	AegisName: "Merchant_Box_1"
	Name: "Delivery Box"
	Weight: 10
},
{
	Id: 1082
	AegisName: "Merchant_Box_2"
	Name: "Delivery Box"
	Weight: 10
},
{
	Id: 1083
	AegisName: "Merchant_Box_3"
	Name: "Delivery Box"
	Weight: 10
},
{
	Id: 1084
	AegisName: "Kapras_Pass"
	Name: "Kafra Pass"
	Weight: 10
},
{
	Id: 1085
	AegisName: "Mage_Test_2"
	Name: "Unknown Test Tube"
	Weight: 10
},
{
	Id: 1086
	AegisName: "Mage_Test_3"
	Name: "Unknown Test Tube"
	Weight: 10
},
{
	Id: 1087
	AegisName: "Mage_Test_4"
	Name: "Unknown Test Tube"
	Weight: 10
},
{
	Id: 1088
	AegisName: "Morocc_Potion"
	Name: "Morroc Solution"
	Weight: 10
	BuyingStore: true
},
{
	Id: 1089
	AegisName: "Payon_Potion"
	Name: "Payon Solution"
	Weight: 10
	BuyingStore: true
},
{
	Id: 1090
	AegisName: "Mage_Test_Etc"
	Name: "Unknown Test Tube"
	Weight: 10
},
{
	Id: 1091
	AegisName: "Merchant_Box_Etc"
	Name: "Delivery Box"
	Weight: 10
},
{
	Id: 1092
	AegisName: "Empty_Cylinder"
	Name: "Empty Test Tube"
	Buy: 3
	Weight: 10
	BuyingStore: true
},
{
	Id: 1093
	AegisName: "Empty_Potion"
	Name: "Empty Potion Bottle"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 1094
	AegisName: "Short_Daenggie"
	Name: "Short Daenggie"
	Buy: 278
	Weight: 10
	BuyingStore: true
},
{
	Id: 1095
	AegisName: "Needle_Of_Alarm"
	Name: "Needle of Alarm"
	Buy: 546
	Weight: 10
	BuyingStore: true
},
{
	Id: 1096
	AegisName: "Round_Shell"
	Name: "Round Shell"
	Buy: 780
	Weight: 10
	BuyingStore: true
},
{
	Id: 1097
	AegisName: "Worn_Out_Page"
	Name: "Worn Out Page"
	Buy: 948
	Weight: 10
	BuyingStore: true
},
{
	Id: 1098
	AegisName: "Manacles"
	Name: "Manacles"
	Buy: 658
	Weight: 10
	BuyingStore: true
},
{
	Id: 1099
	AegisName: "Worn_Out_Prison_Uniform"
	Name: "Worn-out Prison Uniform"
	Buy: 680
	Weight: 10
	BuyingStore: true
},

//== One-Handed Swords =====================================
{
	Id: 1101
	AegisName: "Sword"
	Name: "Sword"
	Type: "IT_WEAPON"
	Buy: 100
	Weight: 500
	Atk: 25
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1102
	AegisName: "Sword_"
	Name: "Sword"
	Type: "IT_WEAPON"
	Buy: 100
	Weight: 500
	Atk: 25
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1103
	AegisName: "Sword__"
	Name: "Sword"
	Type: "IT_WEAPON"
	Buy: 100
	Weight: 500
	Atk: 25
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1104
	AegisName: "Falchion"
	Name: "Falchion"
	Type: "IT_WEAPON"
	Buy: 1500
	Weight: 600
	Atk: 39
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1105
	AegisName: "Falchion_"
	Name: "Falchion"
	Type: "IT_WEAPON"
	Buy: 1500
	Weight: 600
	Atk: 39
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1106
	AegisName: "Falchion__"
	Name: "Falchion"
	Type: "IT_WEAPON"
	Buy: 1500
	Weight: 600
	Atk: 39
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1107
	AegisName: "Blade"
	Name: "Blade"
	Type: "IT_WEAPON"
	Buy: 2900
	Weight: 700
	Atk: 53
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1108
	AegisName: "Blade_"
	Name: "Blade"
	Type: "IT_WEAPON"
	Buy: 2900
	Weight: 700
	Atk: 53
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1109
	AegisName: "Blade__"
	Name: "Blade"
	Type: "IT_WEAPON"
	Buy: 2900
	Weight: 700
	Atk: 53
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_1HSWORD"
},
{
	Id: 1110
	AegisName: "Lapier"
	Name: "Rapier"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 500
	Atk: 70
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1111
	AegisName: "Lapier_"
	Name: "Rapier"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 500
	Atk: 70
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1112
	AegisName: "Lapier__"
	Name: "Rapier"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 500
	Atk: 70
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1113
	AegisName: "Scimiter"
	Name: "Scimitar"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 700
	Atk: 85
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1114
	AegisName: "Scimiter_"
	Name: "Scimitar"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 700
	Atk: 85
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1115
	AegisName: "Scimiter__"
	Name: "Scimitar"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 700
	Atk: 85
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1116
	AegisName: "Katana"
	Name: "Katana"
	Type: "IT_WEAPON"
	Buy: 2000
	Weight: 1000
	Atk: 60
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_2HSWORD"
},
{
	Id: 1117
	AegisName: "Katana_"
	Name: "Katana"
	Type: "IT_WEAPON"
	Buy: 2000
	Weight: 1000
	Atk: 60
	Range: 1
	Slots: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_2HSWORD"
},
{
	Id: 1118
	AegisName: "Katana__"
	Name: "Katana"
	Type: "IT_WEAPON"
	Buy: 2000
	Weight: 1000
	Atk: 60
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_2HSWORD"
},
{
	Id: 1119
	AegisName: "Tsurugi"
	Name: "Tsurugi"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1120
	AegisName: "Tsurugi_"
	Name: "Tsurugi"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 130
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1121
	AegisName: "Tsurugi__"
	Name: "Tsurugi"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 130
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1122
	AegisName: "Ring_Pommel_Saber"
	Name: "Ring Pommel Saber"
	Type: "IT_WEAPON"
	Buy: 24000
	Weight: 900
	Atk: 100
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1123
	AegisName: "Haedonggum"
	Name: "Haedonggum"
	Type: "IT_WEAPON"
	Buy: 50000
	Weight: 900
	Atk: 120
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
	Script: <" bonus bInt,3; ">
},
{
	Id: 1124
	AegisName: "Orcish_Sword"
	Name: "Orcish Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 90
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 5
	Subtype: "W_1HSWORD"
	Script: <" bonus bUnbreakableWeapon,0; ">
},
{
	Id: 1125
	AegisName: "Ring_Pommel_Saber_"
	Name: "Ring Pommel Saber"
	Type: "IT_WEAPON"
	Buy: 24000
	Weight: 900
	Atk: 100
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HSWORD"
},
{
	Id: 1126
	AegisName: "Saber"
	Name: "Saber"
	Type: "IT_WEAPON"
	Buy: 49000
	Weight: 1000
	Atk: 115
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1127
	AegisName: "Saber_"
	Name: "Saber"
	Type: "IT_WEAPON"
	Buy: 49000
	Weight: 1000
	Atk: 115
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1128
	AegisName: "Hae_Dong_Gum_"
	Name: "Haedonggum"
	Type: "IT_WEAPON"
	Buy: 50000
	Weight: 900
	Atk: 120
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
	Script: <" bonus bInt,3; ">
},
{
	Id: 1129
	AegisName: "Flamberge"
	Name: "Flamberge"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 1500
	Atk: 150
	Range: 1
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},
{
	Id: 1130
	AegisName: "Nagan"
	Name: "Nagan"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		skill TF_DOUBLE,5;
		bonus bDoubleRate,25;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 1131
	AegisName: "Ice_Falchon"
	Name: "Ice Falchion"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 600
	Atk: 100
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Water;
		bonus2 bAddEff,Eff_Freeze,500;
		bonus2 bAddEff2,Eff_Freeze,10;
		skill MG_COLDBOLT,3;
		bonus3 bAutoSpell,MG_COLDBOLT,3,100;
	">
},
{
	Id: 1132
	AegisName: "Edge"
	Name: "Edge"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 115
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus2 bAddEff,Eff_Curse,30;
		bonus2 bWeaponComaRace,RC_NonBoss,10;
	">
},
{
	Id: 1133
	AegisName: "Fire_Brand"
	Name: "Fireblend"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 100
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		skill MG_FIREBOLT,3;
		bonus3 bAutoSpell,MG_FIREBOLT,3,100;
	">
},
{
	Id: 1134
	AegisName: "Scissores_Sword"
	Name: "Caesar's Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 140
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus2 bAddRace,RC_Plant,25;
		bonus bIgnoreDefRace,RC_Plant;
	">
},
{
	Id: 1135
	AegisName: "Cutlas"
	Name: "Cutlus"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 150
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		skill SM_BASH,5;
		bonus bStr,2;
		bonus bDef,1;
	">
},
{
	Id: 1136
	AegisName: "Solar_Sword"
	Name: "Solar Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 85
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		bonus2 bHPDrainRate,1000,1;
		bonus2 bSPLossRate,15,10000;
	">
},
{
	Id: 1137
	AegisName: "Excalibur"
	Name: "Excalibur"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 150
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bInt,5;
		bonus bLuk,10;
		bonus bDex,-1;
		bonus bAtkEle,Ele_Holy;
	">
},
{
	Id: 1138
	AegisName: "Mysteltainn_"
	Name: "Mysteltainn"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 170
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bAddEle,Ele_Ghost,15;
		bonus3 bAutoSpell,MG_STONECURSE,3,100;
		bonus2 bAddEff,Eff_Stone,10;
		bonus bDex,3;
	">
},
{
	Id: 1139
	AegisName: "Tale_Fing_"
	Name: "Tirfing"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bHPLossRate,35,10000;
	">
},
{
	Id: 1140
	AegisName: "Byeorrun_Gum"
	Name: "Byeollungum"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 150
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus2 bSubRace,RC_NonBoss,-10;
		bonus2 bAddRace,RC_Boss,50;
		bonus bAllStats,2;
	">
},
{
	Id: 1141
	AegisName: "Immaterial_Sword"
	Name: "Immaterial Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 140
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle, Ele_Ghost;
		bonus2 bSPVanishRate, 30, 30;
		bonus bSPDrainValue, -1;
		bonus bUnbreakableWeapon, 1;
	">
},
{
	Id: 1142
	AegisName: "Jewel_Sword"
	Name: "Jeweled Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 104
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 68
	Subtype: "W_1HSWORD"
	Script: <" bonus bAddMonsterDropChainItem,ITMCHAIN_GEM; ">
},
{
	Id: 1143
	AegisName: "Gaia_Sword"
	Name: "Gaia Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 140
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 74
	Subtype: "W_1HSWORD"
	Script: <" bonus bAddMonsterDropChainItem,ITMCHAIN_ORE; ">
},
{
	Id: 1144
	AegisName: "Sasimi"
	Name: "Sashimi"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 75
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 48
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus3 bAddMonsterDropItem,544,RC_Fish,4000;
	">
},
{
	Id: 1145
	AegisName: "Holy_Avenger"
	Name: "Holy Avenger"
	Type: "IT_WEAPON"
	Buy: 450000
	Weight: 1350
	Atk: 125
	Range: 1
	Job: {
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 75
	Subtype: "W_1HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bVit,2;
	">
},
{
	Id: 1146
	AegisName: "Town_Sword"
	Name: "Town Sword"
	Type: "IT_WEAPON"
	Buy: 42000
	Weight: 800
	Atk: 100
	Range: 1
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_1HSWORD"
},
{
	Id: 1147
	AegisName: "Town_Sword_"
	Name: "Town Sword"
	Type: "IT_WEAPON"
	Buy: 42000
	Weight: 800
	Atk: 100
	Range: 1
	Slots: 2
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_1HSWORD"
},
{
	Id: 1148
	AegisName: "Star_Dust_Blade"
	Name: "Star Dust Blade"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 45
	Subtype: "W_1HSWORD"
	Script: <"
		bonus2 bAddEff,Eff_Stun,500;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1149
	AegisName: "Flamberge_"
	Name: "Flamberge"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 1500
	Atk: 150
	Range: 1
	Slots: 2
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_1HSWORD"
},

//== Two-Handed Swords =====================================
{
	Id: 1151
	AegisName: "Slayer"
	Name: "Slayer"
	Type: "IT_WEAPON"
	Buy: 15000
	Weight: 1300
	Atk: 90
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1152
	AegisName: "Slayer_"
	Name: "Slayer"
	Type: "IT_WEAPON"
	Buy: 15000
	Weight: 1300
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1153
	AegisName: "Slayer__"
	Name: "Slayer"
	Type: "IT_WEAPON"
	Buy: 15000
	Weight: 1300
	Atk: 90
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1154
	AegisName: "Bastard_Sword"
	Name: "Bastard Sword"
	Type: "IT_WEAPON"
	Buy: 22500
	Weight: 1600
	Atk: 115
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1155
	AegisName: "Bastard_Sword_"
	Name: "Bastard Sword"
	Type: "IT_WEAPON"
	Buy: 22500
	Weight: 1600
	Atk: 115
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1156
	AegisName: "Bastard_Sword__"
	Name: "Bastard Sword"
	Type: "IT_WEAPON"
	Buy: 22500
	Weight: 1600
	Atk: 115
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSWORD"
},
{
	Id: 1157
	AegisName: "Two_Hand_Sword"
	Name: "Two-Handed Sword"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2200
	Atk: 160
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
},
{
	Id: 1158
	AegisName: "Two_Hand_Sword_"
	Name: "Two-Handed Sword"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2200
	Atk: 160
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
},
{
	Id: 1159
	AegisName: "Two_Hand_Sword__"
	Name: "Two-Handed Sword"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2200
	Atk: 160
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
},
{
	Id: 1160
	AegisName: "Broad_Sword"
	Name: "Broad Sword"
	Type: "IT_WEAPON"
	Buy: 65000
	Weight: 2000
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bDef,5;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1161
	AegisName: "Balmung"
	Name: "Balmung"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 250
	Range: 1
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bUnbreakableWeapon,0;
		bonus bAtkEle,Ele_Holy;
	">
},
{
	Id: 1162
	AegisName: "Broad_Sword_"
	Name: "Broad Sword"
	Type: "IT_WEAPON"
	Buy: 65000
	Weight: 2000
	Atk: 140
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bDef,5;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1163
	AegisName: "Claymore"
	Name: "Claymore"
	Type: "IT_WEAPON"
	Buy: 74000
	Weight: 2500
	Atk: 180
	Range: 1
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
},
{
	Id: 1164
	AegisName: "Muramasa"
	Name: "Muramasa"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 155
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bCritical,30;
		bonus bAspdRate,8;
		bonus2 bAddEff2,Eff_Curse,10;
	">
},
{
	Id: 1165
	AegisName: "Masamune"
	Name: "Masamune"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bFlee,30;
		bonus bStr,-5;
		bonus bAspd,2;
		bonus bDefRate,-67;
		bonus bDef2Rate,-67;
	">
},
{
	Id: 1166
	AegisName: "Dragon_Slayer"
	Name: "Dragon Slayer"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1300
	Atk: 150
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bIgnoreDefRace,RC_Dragon;
		bonus2 bAddRace,RC_Dragon,15;
	">
},
{
	Id: 1167
	AegisName: "Schweizersabel"
	Name: "Schweizersabel"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1600
	Atk: 160
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bDef,1;
		bonus3 bAutoSpell,MG_LIGHTNINGBOLT,3,100;
	">
},
{
	Id: 1168
	AegisName: "Zweihander"
	Name: "Zweihander"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <" bonus bUnbreakableWeapon,0; ">
},
{
	Id: 1169
	AegisName: "Executioner_"
	Name: "Executioner"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 155
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus2 bAddRace,RC_DemiPlayer,20;
		bonus2 bSubRace,RC_DemiPlayer,-10;
		bonus bAtkEle,Ele_Dark;
	">
},
{
	Id: 1170
	AegisName: "Katzbalger"
	Name: "Katzbalger"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 175
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bVit,5;
		bonus bDef,10;
	">
},
{
	Id: 1171
	AegisName: "Zweihander_"
	Name: "Zweihander"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 200
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <" bonus bUnbreakableWeapon,0; ">
},
{
	Id: 1172
	AegisName: "Claymore_"
	Name: "Claymore"
	Type: "IT_WEAPON"
	Buy: 74000
	Weight: 2500
	Atk: 180
	Range: 1
	Slots: 2
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSWORD"
},
{
	Id: 1173
	AegisName: "Muramasa_C"
	Name: "Muramasa"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 204
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bCritical,30;
		bonus bAspdRate,8;
	">
},
{
	Id: 1174
	AegisName: "Executioner_C"
	Name: "Executioner"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 190
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus2 bAddRace,RC_DemiPlayer,20;
		bonus2 bSubRace,RC_DemiPlayer,-10;
		bonus bAtkEle,Ele_Dark;
	">
},
{
	Id: 1175
	AegisName: "Altas_Weapon"
	Name: "Atlas Weapon"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3500
	Atk: 200
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bCritical,10;
		if(readparam(bStr)>=80) bonus bBreakArmorRate,500;
	">
},
{
	Id: 1176
	AegisName: "Muscle_Cutter"
	Name: "Muscle Cutter"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 160
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_2HSWORD"
	Script: <"
		bonus2 bAddEff,Eff_Bleeding,800;
		bonus3 bAutoSpell,AL_DECAGI,1,30;
	">
},
{
	Id: 1177
	AegisName: "Muramash"
	Name: "Muramash"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	Refine: false
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1178
	AegisName: "Schweizersabel_"
	Name: "Schweizersabel"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1600
	Atk: 160
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bDef,1;
		bonus3 bAutoSpell,MG_LIGHTNINGBOLT,3,100;
	">
},
{
	Id: 1179
	AegisName: "Executioner__"
	Name: "Executioner"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 155
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus2 bAddRace,RC_DemiPlayer,20;
		bonus2 bSubRace,RC_DemiPlayer,-10;
		bonus bAtkEle,Ele_Dark;
	">
},
{
	Id: 1180
	AegisName: "Dragon_Slayer_"
	Name: "Dragon Slayer"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1300
	Atk: 150
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bIgnoreDefRace,RC_Dragon;
		bonus2 bAddRace,RC_Dragon,15;
	">
},
{
	Id: 1181
	AegisName: "Tae_Goo_Lyeon"
	Name: "Tae Goo Lyeon"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 250
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 90
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bFlee2,10;
		if(JobLevel>=70) autobonus "{ bonus bBaseAtk,50; }",10,10000,BF_WEAPON,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
		if(getrefine()>8) {
			bonus bCastrate,-20;
			bonus bDelayrate,-20;
		}

	">
},
{
	Id: 1182
	AegisName: "Bloody_Eater"
	Name: "Bloody Eater"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 200
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 50
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bAtkEle,Ele_Ghost;
		autobonus "{ bonus bCritical,100; bonus bBaseAtk,50; }",1,5000,0,"{ specialeffect(EF_FIRESPLASHHIT, AREA, playerattached()); }";
		bonus bHPGainValue,100;
	">
},
{
	Id: 1183
	AegisName: "BF_Two_Handed_Sword1"
	Name: "Brave Assaulter's Katzbalger"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1184
	AegisName: "BF_Two_Handed_Sword2"
	Name: "Valorous Assaulter's Katzbalger"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bCritical,20;
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus bCritAtkRate,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1185
	AegisName: "Violet_Fear"
	Name: "Violet Fear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2200
	Atk: 275
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSWORD"
	Script: <"
		bonus3 bAutoSpell,WZ_METEOR,3,30;
		bonus3 bAutoSpell,WZ_FROSTNOVA,5,50;
		autobonus "{ bonus bIgnoreDefRace,RC_NonBoss; }",50,5000;
	">
},
{
	Id: 1186
	AegisName: "Death_Guidance"
	Name: "Death Guidance"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 200
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_2HSWORD"
	Script: <"
		bonus bStr,5;
		bonus bAgi,2;
		bonus bFlee2,20;
		bonus3 bAutoSpell,NPC_HELLPOWER,1,10;
		bonus4 bAutoSpell,NPC_HELLPOWER,1,10,0;
		if( getrefine()>8 ) bonus3 bAutoSpell,NPC_VAMPIRE_GIFT,2,20;
		else bonus3 bAutoSpell,NPC_VAMPIRE_GIFT,1,20;
	">
},
{
	Id: 1187
	AegisName: "Krieger_Twohand_Sword1"
	Name: "Glorious Claymore"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 220
	Range: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-3)*(getrefine()-3);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) {
			bonus3 bAutoSpell,LK_CONCENTRATION,max(getskilllv(LK_CONCENTRATION),1),30;
			bonus3 bAutoSpell,LK_AURABLADE,max(getskilllv(LK_AURABLADE),1),30;
		}

	">
},
{
	Id: 1188
	AegisName: "Veteran_Sword"
	Name: "Veteran Sword"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 2000
	Atk: 180
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSWORD"
	Script: <"
		if(getskilllv(SM_BASH)==10) {
			bonus2 bSkillAtk,SM_BASH,50;
		}
		if(getskilllv(KN_BOWLINGBASH)==10) {
			bonus2 bSkillAtk,KN_BOWLINGBASH,50;
		}
		bonus bStr,1;
		bonus bDex,1;
	">
},
{
	Id: 1189
	AegisName: "Krasnaya"
	Name: "Krasnaya"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3800
	Atk: 200
	Range: 2
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 50
	Subtype: "W_2HSWORD"
	Script: <"
		if(readparam(bStr)>=95) {
			bonus bBaseAtk,20;
		}

	">
},
{
	Id: 1190
	AegisName: "Claymore_C"
	Name: "Claymore"
	Type: "IT_WEAPON"
	Atk: 220
	Range: 1
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_2HSWORD"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},

//== Daggers ===============================================
{
	Id: 1201
	AegisName: "Knife"
	Name: "Knife"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 17
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1202
	AegisName: "Knife_"
	Name: "Knife"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 17
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1203
	AegisName: "Knife__"
	Name: "Knife"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 17
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1204
	AegisName: "Cutter"
	Name: "Cutter"
	Type: "IT_WEAPON"
	Buy: 1250
	Weight: 500
	Atk: 30
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1205
	AegisName: "Cutter_"
	Name: "Cutter"
	Type: "IT_WEAPON"
	Buy: 1250
	Weight: 500
	Atk: 30
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1206
	AegisName: "Cutter__"
	Name: "Cutter"
	Type: "IT_WEAPON"
	Buy: 1250
	Weight: 500
	Atk: 30
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1207
	AegisName: "Main_Gauche"
	Name: "Main Gauche"
	Type: "IT_WEAPON"
	Buy: 2400
	Weight: 600
	Atk: 43
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1208
	AegisName: "Main_Gauche_"
	Name: "Main Gauche"
	Type: "IT_WEAPON"
	Buy: 2400
	Weight: 600
	Atk: 43
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1209
	AegisName: "Main_Gauche__"
	Name: "Main Gauche"
	Type: "IT_WEAPON"
	Buy: 2400
	Weight: 600
	Atk: 43
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
},
{
	Id: 1210
	AegisName: "Dirk"
	Name: "Dirk"
	Type: "IT_WEAPON"
	Buy: 8500
	Weight: 500
	Atk: 59
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1211
	AegisName: "Dirk_"
	Name: "Dirk"
	Type: "IT_WEAPON"
	Buy: 8500
	Weight: 500
	Atk: 59
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1212
	AegisName: "Dirk__"
	Name: "Dirk"
	Type: "IT_WEAPON"
	Buy: 8500
	Weight: 500
	Atk: 59
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1213
	AegisName: "Dagger"
	Name: "Dagger"
	Type: "IT_WEAPON"
	Buy: 14000
	Weight: 600
	Atk: 73
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1214
	AegisName: "Dagger_"
	Name: "Dagger"
	Type: "IT_WEAPON"
	Buy: 14000
	Weight: 600
	Atk: 73
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1215
	AegisName: "Dagger__"
	Name: "Dagger"
	Type: "IT_WEAPON"
	Buy: 14000
	Weight: 600
	Atk: 73
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1216
	AegisName: "Stiletto"
	Name: "Stiletto"
	Type: "IT_WEAPON"
	Buy: 19500
	Weight: 700
	Atk: 87
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1217
	AegisName: "Stiletto_"
	Name: "Stiletto"
	Type: "IT_WEAPON"
	Buy: 19500
	Weight: 700
	Atk: 87
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1218
	AegisName: "Stiletto__"
	Name: "Stiletto"
	Type: "IT_WEAPON"
	Buy: 19500
	Weight: 700
	Atk: 87
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_DAGGER"
},
{
	Id: 1219
	AegisName: "Gladius"
	Name: "Gladius"
	Type: "IT_WEAPON"
	Buy: 43000
	Weight: 700
	Atk: 105
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_DAGGER"
},
{
	Id: 1220
	AegisName: "Gladius_"
	Name: "Gladius"
	Type: "IT_WEAPON"
	Buy: 43000
	Weight: 700
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_DAGGER"
},
{
	Id: 1221
	AegisName: "Gladius__"
	Name: "Gladius"
	Type: "IT_WEAPON"
	Buy: 43000
	Weight: 700
	Atk: 105
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_DAGGER"
},
{
	Id: 1222
	AegisName: "Damascus"
	Name: "Damascus"
	Type: "IT_WEAPON"
	Buy: 49000
	Weight: 800
	Atk: 118
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_DAGGER"
	Script: <" bonus bUnbreakableWeapon,0; ">
},
{
	Id: 1223
	AegisName: "Forturn_Sword"
	Name: "Fortune Sword"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 90
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 24
	Subtype: "W_DAGGER"
	Script: <"
		bonus bLuk,5;
		bonus bFlee2,20;
	">
},
{
	Id: 1224
	AegisName: "Sword_Breaker"
	Name: "Swordbreaker"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 70
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <" bonus bBreakWeaponRate,500; ">
},
{
	Id: 1225
	AegisName: "Mail_Breaker"
	Name: "Mailbreaker"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 70
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <" bonus bBreakArmorRate,500; ">
},
{
	Id: 1226
	AegisName: "Damascus_"
	Name: "Damascus"
	Type: "IT_WEAPON"
	Buy: 49000
	Weight: 800
	Atk: 118
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_DAGGER"
	Script: <" bonus bUnbreakableWeapon,0; ">
},
{
	Id: 1227
	AegisName: "Weeder_Knife"
	Name: "Weeder Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 80
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bIgnoreDefRace,RC_Plant;
		bonus2 bAddRace,RC_Plant,15;
		bonus2 bSubRace,RC_Plant,15;
	">
},
{
	Id: 1228
	AegisName: "Combat_Knife"
	Name: "Combat Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 80
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus2 bSubRace,RC_DemiPlayer,10;
		bonus2 bSubRace,RC_Demon,-10;
	">
},
{
	Id: 1229
	AegisName: "Mamas_Knife"
	Name: "Kitchen Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 75
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bCritical,30;
		bonus3 bAddMonsterDropItem,517,RC_Brute,5000;
	">
},
{
	Id: 1230
	AegisName: "House_Auger"
	Name: "Ice Pick"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 600
	Atk: 80
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <" bonus bDefRatioAtkRace, RC_All; ">
},
{
	Id: 1231
	AegisName: "Bazerald"
	Name: "Bazerald"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 70
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		bonus bInt,5;
		bonus bMatkRate,10;
	">
},
{
	Id: 1232
	AegisName: "Assasin_Dagger"
	Name: "Assassin Dagger"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 600
	Atk: 140
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bMaxHPrate,20;
		bonus bMaxSPrate,15;
		bonus bAspdRate,2;
		bonus bAtkEle,Ele_Dark;
	">
},
{
	Id: 1233
	AegisName: "Exercise"
	Name: "Exorciser"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 90
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bIgnoreDefRace,RC_Demon;
		bonus2 bSubRace,RC_Demon,5;
		bonus2 bSubRace,RC_DemiPlayer,-10;
	">
},
{
	Id: 1234
	AegisName: "Moonlight_Sword"
	Name: "Moonlight Dagger"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 50
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bMaxSPrate,10;
		bonus bSPDrainValue,3;
	">
},
{
	Id: 1235
	AegisName: "Azoth"
	Name: "Azoth"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 1
	Job: {
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <" bonus bClassChange,300; ">
},
{
	Id: 1236
	AegisName: "Sucsamad"
	Name: "Sucsamad"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 140
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus2 bAddEle,Ele_Earth,10;
		bonus2 bAddEle,Ele_Wind,10;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1237
	AegisName: "Grimtooth_"
	Name: "Grimtooth"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 180
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_DAGGER"
	Script: <"
		bonus bFlee,10;
		bonus bFlee2,5;
		bonus bDefRate,-50;
		bonus bDef2Rate,-50;
	">
},
{
	Id: 1238
	AegisName: "Zeny_Knife"
	Name: "Zeny Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 64
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_DAGGER"
	Script: <" bonus2 bGetZenyNum,100,40; ">
},
{
	Id: 1239
	AegisName: "Poison_Knife"
	Name: "Poison Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 64
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 65
	Subtype: "W_DAGGER"
	Script: <"
		bonus bAtkEle,Ele_Poison;
		bonus2 bAddEff,Eff_Poison,3000;
	">
},
{
	Id: 1240
	AegisName: "Princess_Knife"
	Name: "Princess Knife"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 84
	Range: 1
	Job: {
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 1
	Subtype: "W_DAGGER"
	Script: <" bonus bAllStats,1; ">
},
{
	Id: 1241
	AegisName: "Cursed_Dagger"
	Name: "Cursed Dagger"
	Type: "IT_WEAPON"
	Buy: 80000
	Weight: 400
	Atk: 55
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 85
	Subtype: "W_DAGGER"
	Script: <" bonus2 bAddEff,Eff_Curse,5000; ">
},
{
	Id: 1242
	AegisName: "Counter_Dagger"
	Name: "Dagger of Counter"
	Type: "IT_WEAPON"
	Buy: 120000
	Weight: 550
	Atk: 140
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_DAGGER"
	Script: <" bonus bCritical,90; ">
},
{
	Id: 1243
	AegisName: "Novice_Knife"
	Name: "Novice Main-Gauche"
	Type: "IT_WEAPON"
	Buy: 1
	Weight: 1
	Atk: 45
	Range: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Refine: false
	Subtype: "W_DAGGER"
},
{
	Id: 1244
	AegisName: "Holy_Dagger"
	Name: "Holy Dagger"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 100
	Range: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_DAGGER"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bDex,1;
	">
},
{
	Id: 1245
	AegisName: "Cinquedea"
	Name: "Cinquedea"
	Type: "IT_WEAPON"
	Buy: 40000
	Weight: 700
	Atk: 110
	Range: 1
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_DAGGER"
},
{
	Id: 1246
	AegisName: "Cinquedea_"
	Name: "Cinquedea"
	Type: "IT_WEAPON"
	Buy: 40000
	Weight: 700
	Atk: 110
	Range: 1
	Slots: 2
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_DAGGER"
},
{
	Id: 1247
	AegisName: "Kindling_Dagger"
	Name: "Kindle Dagger"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 600
	Atk: 39
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1248
	AegisName: "Obsidian_Dagger"
	Name: "Obsidian Dagger"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 600
	Atk: 39
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1249
	AegisName: "Fishermans_Dagger"
	Name: "Fisherman's Dagger"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 600
	Atk: 39
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Magician: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Soul_Linker: true
		Ninja: true
		Gangsi: true
		Death_Knight: true
		Dark_Collector: true
		Kagerou: true
		Rebellion: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_DAGGER"
	Script: <" bonus bAtkEle,Ele_Water; ">
},

//== Katars ================================================
{
	Id: 1250
	AegisName: "Jur"
	Name: "Jur"
	Type: "IT_WEAPON"
	Buy: 19500
	Weight: 800
	Atk: 125
	Range: 1
	Slots: 2
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_KATAR"
},
{
	Id: 1251
	AegisName: "Jur_"
	Name: "Jur"
	Type: "IT_WEAPON"
	Buy: 19500
	Weight: 800
	Atk: 125
	Range: 1
	Slots: 3
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_KATAR"
},
{
	Id: 1252
	AegisName: "Katar"
	Name: "Katar"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 1200
	Atk: 148
	Range: 1
	Slots: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_KATAR"
	Script: <" bonus bDex,1; ">
},
{
	Id: 1253
	AegisName: "Katar_"
	Name: "Katar"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 1200
	Atk: 148
	Range: 1
	Slots: 2
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_KATAR"
	Script: <" bonus bDex,1; ">
},
{
	Id: 1254
	AegisName: "Jamadhar"
	Name: "Jamadhar"
	Type: "IT_WEAPON"
	Buy: 37200
	Weight: 1500
	Atk: 165
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_KATAR"
},
{
	Id: 1255
	AegisName: "Jamadhar_"
	Name: "Jamadhar"
	Type: "IT_WEAPON"
	Buy: 37200
	Weight: 1500
	Atk: 165
	Range: 1
	Slots: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_KATAR"
},
{
	Id: 1256
	AegisName: "Katar_Of_Cold_Icicle"
	Name: "Katar of Frozen Icicle"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Water;
		bonus2 bAddEff,Eff_Freeze,500;
	">
},
{
	Id: 1257
	AegisName: "Katar_Of_Thornbush"
	Name: "Katar of Quaking"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Earth;
		bonus2 bAddEff,Eff_Blind,500;
	">
},
{
	Id: 1258
	AegisName: "Katar_Of_Raging_Blaze"
	Name: "Katar of Raging Blaze"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		bonus2 bAddEff,Eff_Silence,500;
	">
},
{
	Id: 1259
	AegisName: "Katar_Of_Piercing_Wind"
	Name: "Katar of Piercing Wind"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddEff,Eff_Sleep,500;
	">
},
{
	Id: 1260
	AegisName: "Ghoul_Leg"
	Name: "Sharpened Legbone of Ghoul"
	Type: "IT_WEAPON"
	Buy: 52500
	Weight: 1700
	Atk: 150
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 65
	Subtype: "W_KATAR"
	Script: <" bonus bAtkEle,Ele_Undead; ">
},
{
	Id: 1261
	AegisName: "Infiltrator"
	Name: "Infiltrator"
	Type: "IT_WEAPON"
	Buy: 57000
	Weight: 1500
	Atk: 140
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_KATAR"
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,50;
		bonus bDef,3;
		bonus bFlee,5;
		bonus bFlee2,2;
	">
},
{
	Id: 1262
	AegisName: "Nail_Of_Loki"
	Name: "Loki's Nail"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 115
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <" bonus2 bAddEff,Eff_Bleeding,300; ">
},
{
	Id: 1263
	AegisName: "Unholy_Touch"
	Name: "Unholy Touch"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1250
	Atk: 151
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bAddEff,Eff_Curse,200;
		bonus bCritical,-1;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1264
	AegisName: "Various_Jur"
	Name: "Specialty Jur"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 90
	Range: 1
	Slots: 4
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_KATAR"
	Script: <" bonus2 bAddEff2,Eff_Bleeding,10; ">
},
{
	Id: 1265
	AegisName: "Bloody_Roar"
	Name: "Bloody Roar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 120
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_KATAR"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus bFlee,-160;
		bonus bFlee2,-160;
		bonus bHPrecovRate,-100;
		bonus bSPrecovRate,-100;
	">
},
{
	Id: 1266
	AegisName: "Infiltrator_"
	Name: "Infiltrator"
	Type: "IT_WEAPON"
	Buy: 57000
	Weight: 1500
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_KATAR"
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,50;
		bonus bDef,3;
		bonus bFlee,5;
		bonus bFlee2,2;
	">
},
{
	Id: 1267
	AegisName: "Infiltrator_C"
	Name: "Infiltrator"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 189
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus bDef,3;
		bonus bFlee,5;
		bonus bFlee2,2;
		bonus bAspdRate,5;
	">
},
{
	Id: 1268
	AegisName: "Wild_Beast_Claw"
	Name: "Wild Beast Claw"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1450
	Atk: 160
	Range: 1
	Slots: 1
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		if(getrefine()>=9) {
			bonus3 bAutoSpell,NPC_CRITICALWOUND,2,100;
		}
		else bonus3 bAutoSpell,NPC_CRITICALWOUND,1,100;
	">
},
{
	Id: 1269
	AegisName: "Inverse_Scale"
	Name: "Inverse Scale"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 140
	Range: 1
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus3 bAutoSpell,NPC_DRAGONFEAR,1,30;
	">
},
{
	Id: 1270
	AegisName: "Drill_Katar"
	Name: "Drill Katar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 110
	Range: 1
	Slots: 1
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bHit,30;
		bonus3 bAutoSpell,ST_FULLSTRIP,1,150;
	">
},
{
	Id: 1271
	AegisName: "Blood_Tears"
	Name: "Blood Tears"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1700
	Atk: 120
	Range: 1
	Slots: 2
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		if(getrefine()>=9) {
			bonus3 bAutoSpell,NPC_WIDEBLEEDING,2,30;
		}
		else bonus3 bAutoSpell,NPC_WIDEBLEEDING,1,30;
	">
},
{
	Id: 1272
	AegisName: "Scratcher"
	Name: "Scratcher"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	Refine: false
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1273
	AegisName: "Bloody_Roar_C"
	Name: "Refined Bloody Roar"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 148
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_KATAR"
	Script: <"
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus bFlee,-160;
		bonus bFlee2,-160;
	">
},
{
	Id: 1274
	AegisName: "Unholy_Touch_C"
	Name: "Refined Unholy Touch"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 179
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bAddEff,Eff_Curse,5000;
		bonus bCritical,-1;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1275
	AegisName: "Katar_Of_Cold_Icicle_"
	Name: "Katar of Frozen Icicle"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Water;
		bonus2 bAddEff,Eff_Freeze,500;
	">
},
{
	Id: 1276
	AegisName: "Katar_Of_Thornbush_"
	Name: "Katar of Quaking"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Earth;
		bonus2 bAddEff,Eff_Blind,500;
	">
},
{
	Id: 1277
	AegisName: "Katar_Of_Raging_Blaze_"
	Name: "Katar of Raging Blaze"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		bonus2 bAddEff,Eff_Silence,500;
	">
},
{
	Id: 1278
	AegisName: "Katar_Of_Piercing_Wind_"
	Name: "Katar of Piercing Wind"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 1200
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_KATAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddEff,Eff_Sleep,500;
	">
},
{
	Id: 1279
	AegisName: "BF_Katar1"
	Name: "Brave Carnage Katar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 130
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bLuk,1;
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1280
	AegisName: "BF_Katar2"
	Name: "Valorous Carnage Katar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 130
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bLuk,1;
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus bCritAtkRate,20;
		bonus bAspdRate,5;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1281
	AegisName: "Krieger_Katar1"
	Name: "Glorious Bloody Roar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 140
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) autobonus "{ bonus bAspdRate,100; }",70,3000,BF_WEAPON,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
	">
},
{
	Id: 1282
	AegisName: "Krieger_Katar2"
	Name: "Glorious Jamadhar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 140
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bCriticalAddRace,RC_DemiPlayer,5;
		}
		if(getrefine()>8) autobonus "{ bonus bAspdRate,100; }",70,3000,BF_WEAPON,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
	">
},
{
	Id: 1283
	AegisName: "Katar_Of_Speed"
	Name: "Katar Of Speed"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 175
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSkillAtk,AS_SONICBLOW,25;
		bonus bAspdRate,3;
	">
},
{
	Id: 1284
	AegisName: "Krishna"
	Name: "Krishna"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 120
	Range: 1
	Slots: 2
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_KATAR"
	Script: <"
		bonus2 bSkillAtk,AS_GRIMTOOTH,10;
		if(getskilllv(AS_SONICBLOW)) {
			bonus3 bAutoSpell,AS_SONICBLOW,getskilllv(AS_SONICBLOW),5;
		}
		else {
			bonus3 bAutoSpell,AS_SONICBLOW,1,5;
		}

	">
},
{
	Id: 1285
	AegisName: "Cakram"
	Name: "Chakram"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 130
	Range: 1
	Slots: 2
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_KATAR"
	Script: <"
		if(getskilllv(AS_KATAR)==10) {
			bonus bHit,10;
		}
		bonus2 bSkillAtk,ASC_METEORASSAULT,20;
	">
},
{
	Id: 1286
	AegisName: "Jamadhar_C"
	Name: "Jamadhar"
	Type: "IT_WEAPON"
	Atk: 200
	Range: 1
	Job: {
		Assassin: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_KATAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bUnbreakableWeapon,0;
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},

//== One-Handed Axes =======================================
{
	Id: 1301
	AegisName: "Axe"
	Name: "Axe"
	Type: "IT_WEAPON"
	Buy: 500
	Weight: 800
	Atk: 38
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_1HAXE"
},
{
	Id: 1302
	AegisName: "Axe_"
	Name: "Axe"
	Type: "IT_WEAPON"
	Buy: 500
	Weight: 800
	Atk: 38
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_1HAXE"
},
{
	Id: 1303
	AegisName: "Axe__"
	Name: "Axe"
	Type: "IT_WEAPON"
	Buy: 500
	Weight: 800
	Atk: 38
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_1HAXE"
},
{
	Id: 1304
	AegisName: "Orcish_Axe"
	Name: "Orcish Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 75
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 3
	Subtype: "W_1HAXE"
},
{
	Id: 1305
	AegisName: "Cleaver"
	Name: "Cleaver"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 140
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_1HAXE"
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus3 bAddMonsterDropItem,517,RC_Brute,3000;
	">
},
{
	Id: 1306
	AegisName: "War_Axe"
	Name: "War Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 4200
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 76
	Subtype: "W_1HAXE"
	Script: <"
		bonus bDex,2;
		bonus bLuk,2;
	">
},
{
	Id: 1307
	AegisName: "Windhawk"
	Name: "Windhawk"
	Type: "IT_WEAPON"
	Buy: 18000
	Weight: 1500
	Atk: 115
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_1HAXE"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bAspdRate,5;
	">
},
{
	Id: 1308
	AegisName: "Golden_Axe"
	Name: "Golden Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3000
	Atk: 170
	Range: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 45
	Subtype: "W_1HAXE"
},
{
	Id: 1309
	AegisName: "Orcish_Axe_"
	Name: "Orcish Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 75
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 3
	Subtype: "W_1HAXE"
},
{
	Id: 1310
	AegisName: "Krieger_Onehand_Axe1"
	Name: "Glorious Cleaver"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 130
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_1HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,75;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
			bonus bAspdRate,5;
		}
		if(getrefine()>8) {
			bonus bAspdRate,5;
			bonus3 bAutoSpell,NPC_CRITICALWOUND,1,50;
			bonus4 bAutoSpellOnSkill,MC_MAMMONITE,NPC_CRITICALWOUND,2,200;
		}

	">
},
{
	Id: 1311
	AegisName: "Vecer_Axe"
	Name: "Vecer Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 140
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_1HAXE"
	Script: <"
		if(readparam(bLuk)>=90) {
			bonus bBaseAtk,20;
		}
		if(readparam(bDex)>=90) {
			bonus bCritical,5;
		}
		if(readparam(bDex)>=90||readparam(bLuk)>=90) {
			bonus2 bSkillAtk,MC_MAMMONITE,15;
		}

	">
},
{
	Id: 1312
	AegisName: "Orcish_Axe_C"
	Name: "Orcish Axe"
	Type: "IT_WEAPON"
	Atk: 110
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_1HAXE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,70;
		bonus2 bAddSize,Size_Medium,70;
		bonus2 bAddSize,Size_Large,70;
	">
},
{
	Id: 1313
	AegisName: "Tourist_Axe"
	Name: "Tourist Axe"
	Type: "IT_WEAPON"
	Weight: 500
	Atk: 77
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Refine: false
	Subtype: "W_1HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bStr,2; ">
},
{
	Id: 1314
	AegisName: "F_Tomahawk_C"
	Name: "Tomahawk"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1315
	AegisName: "F_Right_Epsilon_C"
	Name: "Light Epsilon"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 229
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bStr,10;
	">
},
{
	Id: 1326
	AegisName: "War_Axe_IL"
	Name: "War_Axe_IL"
},

//== Two-Handed Axes =======================================
{
	Id: 1351
	AegisName: "Battle_Axe"
	Name: "Battle Axe"
	Type: "IT_WEAPON"
	Buy: 5400
	Weight: 1500
	Atk: 80
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_2HAXE"
},
{
	Id: 1352
	AegisName: "Battle_Axe_"
	Name: "Battle Axe"
	Type: "IT_WEAPON"
	Buy: 5400
	Weight: 1500
	Atk: 80
	Range: 1
	Slots: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_2HAXE"
},
{
	Id: 1353
	AegisName: "Battle_Axe__"
	Name: "Battle Axe"
	Type: "IT_WEAPON"
	Buy: 5400
	Weight: 1500
	Atk: 80
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_2HAXE"
},
{
	Id: 1354
	AegisName: "Hammer"
	Name: "Hammer"
	Type: "IT_WEAPON"
	Buy: 15500
	Weight: 2000
	Atk: 120
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_2HAXE"
},
{
	Id: 1355
	AegisName: "Hammer_"
	Name: "Hammer"
	Type: "IT_WEAPON"
	Buy: 15500
	Weight: 2000
	Atk: 120
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_2HAXE"
},
{
	Id: 1356
	AegisName: "Hammer__"
	Name: "Hammer"
	Type: "IT_WEAPON"
	Buy: 15500
	Weight: 2000
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_2HAXE"
},
{
	Id: 1357
	AegisName: "Buster"
	Name: "Buster"
	Type: "IT_WEAPON"
	Buy: 34000
	Weight: 2200
	Atk: 155
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1358
	AegisName: "Buster_"
	Name: "Buster"
	Type: "IT_WEAPON"
	Buy: 34000
	Weight: 2200
	Atk: 155
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1359
	AegisName: "Buster__"
	Name: "Buster"
	Type: "IT_WEAPON"
	Buy: 34000
	Weight: 2200
	Atk: 155
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1360
	AegisName: "Two_Handed_Axe"
	Name: "Two-Handed Axe"
	Type: "IT_WEAPON"
	Buy: 55000
	Weight: 2500
	Atk: 185
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1361
	AegisName: "Two_Handed_Axe_"
	Name: "Two-Handed Axe"
	Type: "IT_WEAPON"
	Buy: 55000
	Weight: 2500
	Atk: 185
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1362
	AegisName: "Two_Handed_Axe__"
	Name: "Two-Handed Axe"
	Type: "IT_WEAPON"
	Buy: 55000
	Weight: 2500
	Atk: 185
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_2HAXE"
},
{
	Id: 1363
	AegisName: "Brood_Axe"
	Name: "Bloody Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 4000
	Atk: 170
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus bStr,10;
		bonus bSpeedRate,25;
	">
},
{
	Id: 1364
	AegisName: "Great_Axe"
	Name: "Great Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1800
	Atk: 187
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus2 bAddSkillBlow,MC_MAMMONITE,5;
		bonus2 bAddEff,Eff_Stun,1500;
	">
},
{
	Id: 1365
	AegisName: "Sabbath"
	Name: "Sabbath"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2300
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bWeaponComaRace,RC_Demon,50;
		bonus2 bCriticalAddRace,RC_Undead,50;
	">
},
{
	Id: 1366
	AegisName: "Right_Epsilon"
	Name: "Light Epsilon"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2300
	Atk: 180
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		skill AL_HEAL,3;
		bonus2 bAddRace,RC_Demon,3;
	">
},
{
	Id: 1367
	AegisName: "Slaughter"
	Name: "Slaughter"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Earth;
		bonus bIgnoreDefRace,RC_Brute;
		bonus2 bWeaponComaRace,RC_Brute,40;
	">
},
{
	Id: 1368
	AegisName: "Tomahawk"
	Name: "Tomahawk"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 165
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		skill ITM_TOMAHAWK,1;
	">
},
{
	Id: 1369
	AegisName: "Guillotine"
	Name: "Guillotine"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3000
	Atk: 215
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_2HAXE"
	Script: <"
		bonus2 bWeaponComaRace,RC_DemiPlayer,30;
		bonus2 bSPGainRaceAttack,RC_DemiPlayer,2;
		bonus2 bSPGainRace,RC_DemiPlayer,20;
	">
},
{
	Id: 1370
	AegisName: "Doom_Slayer"
	Name: "Doom Slayer"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 6000
	Atk: 10
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAspdRate,-40;
		bonus bUseSPrate,100;
		if(readparam(bStr)>=95) {
			bonus bBaseAtk,340;
			bonus2 bAddEff,Eff_Stun,3000;
			bonus bBreakArmorRate,500;
		}

	">
},
{
	Id: 1371
	AegisName: "Doom_Slayer_"
	Name: "Doom Slayer"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 6000
	Atk: 10
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAspdRate,-40;
		bonus bUseSPrate,100;
		if(readparam(bStr)>=95) {
			bonus bBaseAtk,340;
			bonus2 bAddEff,Eff_Stun,3000;
			bonus bBreakArmorRate,500;
		}

	">
},
{
	Id: 1372
	AegisName: "Right_Epsilon_C"
	Name: "Light Epsilon"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 229
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAtkEle,Ele_Holy;
		skill AL_HEAL,3;
		bonus2 bAddRace,RC_Demon,3;
		bonus bStr,10;
		bonus bSpeedRate,25;
	">
},
{
	Id: 1373
	AegisName: "Brood_Axe_C"
	Name: "Refined Bloody Axe"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 205
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Script: <"
		bonus bStr,20;
		bonus bSpeedRate,25;
		bonus bAspdRate,5;
	">
},
{
	Id: 1374
	AegisName: "Tomahawk_C"
	Name: "Tomahawk"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		skill ITM_TOMAHAWK,1;
	">
},
{
	Id: 1375
	AegisName: "Berdysz"
	Name: "Berdysz"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 200
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_2HAXE"
	Script: <"
		bonus2 bSubSize,Size_Medium,13;
		bonus2 bSubSize,Size_Large,15;
	">
},
{
	Id: 1376
	AegisName: "Heart_Breaker"
	Name: "Heart Breaker"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 175
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_2HAXE"
	Script: <"
		bonus bCritical,20+getrefine();
		bonus bAspdRate,5;
		if((Class==Job_Whitesmith)||(Class==Job_Creator)) bonus3 bAutoSpell,BS_HAMMERFALL,3,30;
	">
},
{
	Id: 1377
	AegisName: "Hurricane_Fury"
	Name: "Hurricane's Fury"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3500
	Atk: 332
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HAXE"
	Script: <"
		bonus2 bSubSize,Size_Medium,10+getrefine();
		bonus bAspdRate,getrefine();
		bonus3 bAutoSpell,NPC_PULSESTRIKE,5,20;
	">
},
{
	Id: 1378
	AegisName: "Great_Axe_C"
	Name: "Refined Great Axe"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 215
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Script: <"
		bonus bStr,5;
		bonus bHit,20;
		bonus2 bAddSkillBlow,MC_MAMMONITE,5;
		bonus2 bAddEff,Eff_Stun,2000;
	">
},
{
	Id: 1379
	AegisName: "BF_Two_Handed_Axe1"
	Name: "Valorous Insane Battle Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,3;
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1380
	AegisName: "BF_Two_Handed_Axe2"
	Name: "Brave Insane Battle Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,3;
		bonus2 bAddRace,RC_DemiPlayer,55;
		autobonus "{ bonus bBreakArmorRate,10000; }",20,3000,BF_WEAPON,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1381
	AegisName: "N_Battle_Axe"
	Name: "Novice Battle Axe"
	Type: "IT_WEAPON"
	Atk: 100
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 3
	Refine: false
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 1382
	AegisName: "Krieger_Twohand_Axe1"
	Name: "Glorious Two-Handed Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 220
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-3)*(getrefine()-3);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
			bonus3 bAutoSpell,NPC_CRITICALWOUND,1,50;
		}
		if(getrefine()>8) {
			bonus3 bAutoSpell,NPC_CRITICALWOUND,1,100;
			bonus4 bAutoSpellOnSkill,MC_MAMMONITE,NPC_CRITICALWOUND,2,200;
			bonus4 bAutoSpellOnSkill,WS_CARTTERMINATION,NPC_CRITICALWOUND,2,200;
		}

	">
},
{
	Id: 1383
	AegisName: "Holy_Celestial_Axe"
	Name: "Celestial Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bVit,10;
		bonus2 bAddRace,RC_Undead,10;
		bonus3 bAutoSpell,AL_BLESSING,5,50;
	">
},
{
	Id: 1384
	AegisName: "Veteran_Axe"
	Name: "Veteran Axe"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 3000
	Atk: 250
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HAXE"
	Script: <"
		if(getskilllv(BS_DAGGER)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_SWORD)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_TWOHANDSWORD)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_KNUCKLE)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_SPEAR)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_AXE)==3) {
			bonus bBaseAtk,10;
		}
		if(getskilllv(BS_MACE)==3) {
			bonus bBaseAtk,10;
		}
		bonus bVit,2;
	">
},
{
	Id: 1385
	AegisName: "Bradium_Stonehammer"
	Name: "Bradium Stone Hammer"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2700
	Atk: 210
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_2HAXE"
	Script: <" bonus3 bAddEffOnSkill,BS_HAMMERFALL,Eff_Stun,500+(200*getrefine()); ">
},
{
	Id: 1386
	AegisName: "Doom_Slayer_I"
	Name: "Doom Slayer"
	Type: "IT_WEAPON"
	Atk: 20
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		if(readparam(bStr)>=95) {
			bonus bBaseAtk,400;
			bonus2 bAddEff,Eff_Stun,3000;
			bonus bAspdRate,-25;
			bonus bUseSPrate,100;
			bonus bBreakArmorRate,500;
		}

	">
},
{
	Id: 1387
	AegisName: "Giant_Axe"
	Name: "Giant Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 4000
	Atk: 330
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_2HAXE"
	Script: <"
		bonus2 bSkillAtk,WS_CARTTERMINATION,15;
		if(readparam(bStr)>=95) {
			bonus bHit,10;
			bonus bAspdRate,3;
		}

	">
},
{
	Id: 1388
	AegisName: "Two_Handed_Axe_C"
	Name: "Two-Handed Axe"
	Type: "IT_WEAPON"
	Atk: 220
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_2HAXE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},
{
	Id: 1389
	AegisName: "E_Tomahawk_C"
	Name: "Tomahawk"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 200
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	Refine: false
	Subtype: "W_2HAXE"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1390
	AegisName: "E_Right_Epsilon_C"
	Name: "Light Epsilon"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 229
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_2HAXE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bStr,10;
	">
},

//== One-Handed Spears =====================================
{
	Id: 1401
	AegisName: "Javelin"
	Name: "Javelin"
	Type: "IT_WEAPON"
	Buy: 150
	Weight: 700
	Atk: 28
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1402
	AegisName: "Javelin_"
	Name: "Javelin"
	Type: "IT_WEAPON"
	Buy: 150
	Weight: 700
	Atk: 28
	Range: 3
	Slots: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1403
	AegisName: "Javelin__"
	Name: "Javelin"
	Type: "IT_WEAPON"
	Buy: 150
	Weight: 700
	Atk: 28
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1404
	AegisName: "Spear"
	Name: "Spear"
	Type: "IT_WEAPON"
	Buy: 1700
	Weight: 850
	Atk: 44
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1405
	AegisName: "Spear_"
	Name: "Spear"
	Type: "IT_WEAPON"
	Buy: 1700
	Weight: 850
	Atk: 44
	Range: 3
	Slots: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1406
	AegisName: "Spear__"
	Name: "Spear"
	Type: "IT_WEAPON"
	Buy: 1700
	Weight: 850
	Atk: 44
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1407
	AegisName: "Pike"
	Name: "Pike"
	Type: "IT_WEAPON"
	Buy: 3450
	Weight: 1000
	Atk: 60
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1408
	AegisName: "Pike_"
	Name: "Pike"
	Type: "IT_WEAPON"
	Buy: 3450
	Weight: 1000
	Atk: 60
	Range: 3
	Slots: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1409
	AegisName: "Pike__"
	Name: "Pike"
	Type: "IT_WEAPON"
	Buy: 3450
	Weight: 1000
	Atk: 60
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_1HSPEAR"
},
{
	Id: 1410
	AegisName: "Lance"
	Name: "Lance"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2500
	Atk: 185
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1411
	AegisName: "Lance_"
	Name: "Lance"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2500
	Atk: 185
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1412
	AegisName: "Lance__"
	Name: "Lance"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2500
	Atk: 185
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1413
	AegisName: "Gungnir"
	Name: "Gungnir"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 120
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 4
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bPerfectHitRate,25;
		bonus bHit,30;
	">
},
{
	Id: 1414
	AegisName: "Gelerdria"
	Name: "Gelerdria"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 145
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Earth;
		bonus bMaxHP,800;
		bonus bMaxSP,-50;
	">
},
{
	Id: 1415
	AegisName: "Skewer"
	Name: "Brocca"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 850
	Atk: 100
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bIgnoreDefRace,RC_NonBoss;
		bonus2 bAddEle,Ele_Neutral,25;
	">
},
{
	Id: 1416
	AegisName: "Tjungkuletti"
	Name: "Tjungkuletti"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 95
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bSPDrainValue,1;
		bonus bSPGainValue,5;
	">
},
{
	Id: 1417
	AegisName: "Pole_Axe"
	Name: "Pole Axe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3800
	Atk: 160
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 71
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bStr,1;
		bonus bInt,2;
		bonus bDex,1;
	">
},
{
	Id: 1418
	AegisName: "Gungnir_"
	Name: "Gungnir"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 120
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 4
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bPerfectHitRate,25;
		bonus bHit,30;
	">
},
{
	Id: 1419
	AegisName: "Pole_Axe_C"
	Name: "Pole Axe"
	Type: "IT_WEAPON"
	Buy: 1
	Weight: 4800
	Atk: 159
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,2;
		bonus bDex,1;
	">
},
{
	Id: 1420
	AegisName: "Long_Horn"
	Name: "Long Horn"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 150
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus2 bAddEff,Eff_Bleeding,500;
		skill TF_DETOXIFY,1;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1421
	AegisName: "Battle_Hook"
	Name: "Battle Hook"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 140
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus2 bAddEff,Eff_Stun,500;
		bonus2 bAddRace,RC_DemiPlayer,20;
		skill KN_PIERCE,3;
	">
},
{
	Id: 1422
	AegisName: "Hunting_Spear"
	Name: "Hunting Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 4200
	Atk: 180
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bIgnoreDefRace,RC_Brute;
		bonus3 bAddMonsterDropItem,517,RC_Brute,1000;
		bonus3 bAutoSpell,LK_JOINTBEAT,3,100;
	">
},
{
	Id: 1423
	AegisName: "Pole_XO"
	Name: "Pole XO"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1424
	AegisName: "Skewer_C"
	Name: "Refined Brocca"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 149
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bIgnoreDefRace,RC_NonBoss;
		bonus2 bAddSize,Size_Medium,20;
	">
},
{
	Id: 1425
	AegisName: "BF_Spear1"
	Name: "Assaulter Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 60
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(BaseJob==Job_Crusader) bonus bAspdRate,20;
	">
},
{
	Id: 1426
	AegisName: "Krieger_Onehand_Spear1"
	Name: "Glorious Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 130
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
			bonus bAspdRate,10;
		}
		if(getrefine()>8) {
			if(BaseJob==Job_Knight) bonus4 bAutoSpellOnSkill,KN_PIERCE,NPC_CRITICALWOUND,2,200;
			else if(BaseJob==Job_Crusader) bonus3 bAutoSpell,PA_PRESSURE,5,100;
		}

	">
},
{
	Id: 1427
	AegisName: "Spear_Of_Excellent"
	Name: "Spear Of Excellent"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 160
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSkillAtk,SM_MAGNUM,25;
		bonus bStr,2;
	">
},
{
	Id: 1428
	AegisName: "Long_Horn_M"
	Name: "Long Horn"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 150
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus2 bAddEff,Eff_Bleeding,500;
		skill TF_DETOXIFY,1;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1429
	AegisName: "Hunting_Spear_M"
	Name: "Hunting Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 4200
	Atk: 180
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bIgnoreDefRace,RC_Brute;
		bonus3 bAddMonsterDropItem,517,RC_Brute,1000;
		bonus3 bAutoSpell,LK_JOINTBEAT,3,500;
	">
},
{
	Id: 1430
	AegisName: "Pike_C"
	Name: "Pike"
	Type: "IT_WEAPON"
	Atk: 74
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Refine: false
	Subtype: "W_1HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,70;
		bonus2 bAddSize,Size_Medium,70;
		bonus2 bAddSize,Size_Large,70;
	">
},
{
	Id: 1431
	AegisName: "F_Pole_Axe_C"
	Name: "Pole Axe"
	Type: "IT_WEAPON"
	Buy: 1
	Weight: 4800
	Atk: 195
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bStr,1;
		bonus bInt,2;
		bonus bDex,1;
	">
},
{
	Id: 1432
	AegisName: "E_Pole_Axe_C"
	Name: "Pole Axe"
	Type: "IT_WEAPON"
	Buy: 1
	Weight: 4800
	Atk: 195
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_1HSPEAR"
	Script: <"
		bonus bStr,1;
		bonus bInt,2;
		bonus bDex,1;
	">
},

//== Two-Handed Spears =====================================
{
	Id: 1451
	AegisName: "Guisarme"
	Name: "Guisarme"
	Type: "IT_WEAPON"
	Buy: 13000
	Weight: 1000
	Atk: 84
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1452
	AegisName: "Guisarme_"
	Name: "Guisarme"
	Type: "IT_WEAPON"
	Buy: 13000
	Weight: 1000
	Atk: 84
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1453
	AegisName: "Guisarme__"
	Name: "Guisarme"
	Type: "IT_WEAPON"
	Buy: 13000
	Weight: 1000
	Atk: 84
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1454
	AegisName: "Glaive"
	Name: "Glaive"
	Type: "IT_WEAPON"
	Buy: 20000
	Weight: 1200
	Atk: 104
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1455
	AegisName: "Glaive_"
	Name: "Glaive"
	Type: "IT_WEAPON"
	Buy: 20000
	Weight: 1200
	Atk: 104
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1456
	AegisName: "Glaive__"
	Name: "Glaive"
	Type: "IT_WEAPON"
	Buy: 20000
	Weight: 1200
	Atk: 104
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1457
	AegisName: "Partizan"
	Name: "Partizan"
	Type: "IT_WEAPON"
	Buy: 27000
	Weight: 2000
	Atk: 124
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1458
	AegisName: "Partizan_"
	Name: "Partizan"
	Type: "IT_WEAPON"
	Buy: 27000
	Weight: 2000
	Atk: 124
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1459
	AegisName: "Partizan__"
	Name: "Partizan"
	Type: "IT_WEAPON"
	Buy: 27000
	Weight: 2000
	Atk: 124
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_2HSPEAR"
},
{
	Id: 1460
	AegisName: "Trident"
	Name: "Trident"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 150
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1461
	AegisName: "Trident_"
	Name: "Trident"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 150
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1462
	AegisName: "Trident__"
	Name: "Trident"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 1200
	Atk: 150
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1463
	AegisName: "Halberd"
	Name: "Halberd"
	Type: "IT_WEAPON"
	Buy: 54000
	Weight: 2500
	Atk: 165
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1464
	AegisName: "Halberd_"
	Name: "Halberd"
	Type: "IT_WEAPON"
	Buy: 54000
	Weight: 2500
	Atk: 165
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1465
	AegisName: "Halberd__"
	Name: "Halberd"
	Type: "IT_WEAPON"
	Buy: 54000
	Weight: 2500
	Atk: 165
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_2HSPEAR"
},
{
	Id: 1466
	AegisName: "Crescent_Scythe"
	Name: "Crescent Scythe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 180
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bCritical,30;
		bonus bHit,10;
	">
},
{
	Id: 1467
	AegisName: "Bill_Guisarme"
	Name: "Bill Guisarme"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 183
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus2 bAddRace,RC_Brute,10;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 1468
	AegisName: "Zephyrus"
	Name: "Zephyrus"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 170
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddEff,Eff_Silence,200;
		bonus3 bAutoSpell,MG_THUNDERSTORM,3,100;
	">
},
{
	Id: 1469
	AegisName: "Longinuss_Spear"
	Name: "Longinus's Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 180
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bAddRace,RC_DemiPlayer,10;
		bonus2 bAddRace,RC_Angel,10;
	">
},
{
	Id: 1470
	AegisName: "Brionac"
	Name: "Brionac"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3000
	Atk: 190
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		skill AL_HEAL,5;
		bonus3 bAutoSpell,MG_SOULSTRIKE,3,100;
		bonus2 bAddRace,RC_Boss,5;
	">
},
{
	Id: 1471
	AegisName: "Hell_Fire"
	Name: "Hellfire"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3500
	Atk: 200
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Fire;
		bonus3 bAutoSpell,MG_FIREBALL,3,100;
		bonus bStr,3;
	">
},

//== Two-Handed Staves =====================================
{
	Id: 1472
	AegisName: "Staff_Of_Soul"
	Name: "Soul Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 25
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 73
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,5;
		bonus bAgi,2;
		bonus bMatkRate,15;
	">
},
{
	Id: 1473
	AegisName: "Wizardy_Staff"
	Name: "Wizardry Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2400
	Atk: 120
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 90
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,6;
		bonus bDex,2;
		bonus bMatkRate,15;
	">
},

//== Two-Handed Spears =====================================
{
	Id: 1474
	AegisName: "Gae_Bolg"
	Name: "Gae Bolg"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 160
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bIgnoreDefRace,RC_Dragon;
		bonus2 bAddRace,RC_Boss,10;
	">
},
{
	Id: 1475
	AegisName: "Horseback_Lance"
	Name: "Equestrian's Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3700
	Atk: 200
	Range: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_2HSPEAR"
},
{
	Id: 1476
	AegisName: "Crescent_Scythe_"
	Name: "Crescent Scythe"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 180
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bCritical,30;
		bonus bHit,10;
	">
},
{
	Id: 1477
	AegisName: "Spectral_Spear"
	Name: "Spectral Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 170
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus2 bAddEle,Ele_Dark,20;
		bonus2 bAddRace,RC_Demon,20;
		bonus2 bAddRace,RC_Undead,20;
		bonus2 bSubEle,Ele_Dark,10;
		bonus2 bSubRace,RC_Demon,10;
		bonus2 bSubRace,RC_Undead,10;
		bonus3 bAddEff,Eff_Confusion,10000,ATF_SELF|ATF_SHORT;
		bonus bHPGainValue,50;
	">
},
{
	Id: 1478
	AegisName: "Ahlspiess"
	Name: "Ahlspiess"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 120
	Range: 3
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bIgnoreDefRace, RC_All;
		bonus2 bAddRace,RC_DemiPlayer,10;
		bonus3 bAutoSpell,KN_PIERCE,5,30;
	">
},
{
	Id: 1479
	AegisName: "Spectral_Spear_"
	Name: "Spectral Spear"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 170
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus2 bAddEle,Ele_Dark,20;
		bonus2 bAddRace,RC_Demon,20;
		bonus2 bAddRace,RC_Undead,20;
		bonus2 bSubEle,Ele_Dark,10;
		bonus2 bSubRace,RC_Demon,10;
		bonus2 bSubRace,RC_Undead,10;
		bonus3 bAddEff,Eff_Confusion,10000,ATF_SELF|ATF_SHORT;
		bonus bHPGainValue,50;
	">
},
{
	Id: 1480
	AegisName: "Gae_Bolg_"
	Name: "Gae Bolg"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 160
	Range: 3
	Slots: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bIgnoreDefRace,RC_Dragon;
		bonus2 bAddRace,RC_Boss,10;
	">
},
{
	Id: 1481
	AegisName: "Zephyrus_"
	Name: "Zephyrus"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 170
	Range: 3
	Slots: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddEff,Eff_Silence,200;
		bonus3 bAutoSpell,MG_THUNDERSTORM,3,100;
	">
},
{
	Id: 1482
	AegisName: "BF_Lance1"
	Name: "Assaulter Lance"
	Type: "IT_WEAPON"
	Atk: 160
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_2HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus2 bAddRace,RC_DemiPlayer,25;
		bonus bIgnoreDefRace,RC_DemiPlayer;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1483
	AegisName: "Ivory_Lance"
	Name: "Ivory Lance"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 160
	Range: 3
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAgi,2;
		bonus bAspdRate,3;
		bonus2 bAddEff,Eff_Bleeding,100;
		bonus3 bAutoSpell,LK_JOINTBEAT,1,100;
		skill KN_SPEARSTAB,5;
	">
},
{
	Id: 1484
	AegisName: "Cardo"
	Name: "Cardo"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 5600
	Atk: 150
	Range: 3
	Slots: 1
	Job: {
		Knight: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bAspdRate,-10;
		bonus bDef,getrefine()/2;
	">
},
{
	Id: 1485
	AegisName: "Battle_Fork"
	Name: "Battle Fork"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 112
	Range: 3
	Slots: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 50
	Subtype: "W_2HSPEAR"
},
{
	Id: 1486
	AegisName: "Krieger_Twohand_Spear1"
	Name: "Glorious Lance"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 220
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,70;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) {
			if(BaseJob==Job_Knight) bonus4 bAutoSpellOnSkill,KN_PIERCE,NPC_CRITICALWOUND,2,200;
			else if(BaseJob==Job_Crusader) bonus3 bAutoSpell,PA_PRESSURE,5,200;
		}

	">
},
{
	Id: 1487
	AegisName: "Lance_C"
	Name: "Lance"
	Type: "IT_WEAPON"
	Atk: 220
	Range: 3
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_2HSPEAR"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,50;
		bonus2 bAddSize,Size_Medium,50;
		bonus2 bAddSize,Size_Large,50;
	">
},
{
	Id: 1488
	AegisName: "Ahlspiess_C"
	Name: "Ahlspiess"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 135
	Range: 3
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Subtype: "W_2HSPEAR"
	Script: <"
		bonus bIgnoreDefRace, RC_All;
		bonus2 bAddRace,RC_DemiPlayer,10;
		bonus3 bAutoSpell,KN_PIERCE,5,30;
	">
},

//== Maces =================================================
{
	Id: 1501
	AegisName: "Club"
	Name: "Club"
	Type: "IT_WEAPON"
	Buy: 120
	Weight: 700
	Atk: 23
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1502
	AegisName: "Club_"
	Name: "Club"
	Type: "IT_WEAPON"
	Buy: 120
	Weight: 700
	Atk: 23
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1503
	AegisName: "Club__"
	Name: "Club"
	Type: "IT_WEAPON"
	Buy: 120
	Weight: 700
	Atk: 23
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1504
	AegisName: "Mace"
	Name: "Mace"
	Type: "IT_WEAPON"
	Buy: 1600
	Weight: 800
	Atk: 37
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1505
	AegisName: "Mace_"
	Name: "Mace"
	Type: "IT_WEAPON"
	Buy: 1600
	Weight: 800
	Atk: 37
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1506
	AegisName: "Mace__"
	Name: "Mace"
	Type: "IT_WEAPON"
	Buy: 1600
	Weight: 800
	Atk: 37
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MACE"
},
{
	Id: 1507
	AegisName: "Smasher"
	Name: "Smasher"
	Type: "IT_WEAPON"
	Buy: 9000
	Weight: 1000
	Atk: 54
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1508
	AegisName: "Smasher_"
	Name: "Smasher"
	Type: "IT_WEAPON"
	Buy: 9000
	Weight: 1000
	Atk: 54
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1509
	AegisName: "Smasher__"
	Name: "Smasher"
	Type: "IT_WEAPON"
	Buy: 9000
	Weight: 1000
	Atk: 54
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1510
	AegisName: "Flail"
	Name: "Flail"
	Type: "IT_WEAPON"
	Buy: 16000
	Weight: 900
	Atk: 69
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1511
	AegisName: "Flail_"
	Name: "Flail"
	Type: "IT_WEAPON"
	Buy: 16000
	Weight: 900
	Atk: 69
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1512
	AegisName: "Flail__"
	Name: "Flail"
	Type: "IT_WEAPON"
	Buy: 16000
	Weight: 900
	Atk: 69
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1513
	AegisName: "Morning_Star"
	Name: "Morning Star"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 1500
	Atk: 110
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1514
	AegisName: "Morning_Star_"
	Name: "Morning Star"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 1500
	Atk: 110
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1515
	AegisName: "Morning_Star__"
	Name: "Morning Star"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 1500
	Atk: 110
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1516
	AegisName: "Sword_Mace"
	Name: "Sword Mace"
	Type: "IT_WEAPON"
	Buy: 50000
	Weight: 1200
	Atk: 130
	Range: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1517
	AegisName: "Sword_Mace_"
	Name: "Sword Mace"
	Type: "IT_WEAPON"
	Buy: 50000
	Weight: 1200
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1518
	AegisName: "Sword_Mace__"
	Name: "Sword Mace"
	Type: "IT_WEAPON"
	Buy: 50000
	Weight: 1200
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
},
{
	Id: 1519
	AegisName: "Chain"
	Name: "Chain"
	Type: "IT_WEAPON"
	Buy: 23000
	Weight: 800
	Atk: 84
	Range: 1
	Slots: 2
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1520
	AegisName: "Chain_"
	Name: "Chain"
	Type: "IT_WEAPON"
	Buy: 23000
	Weight: 800
	Atk: 84
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1521
	AegisName: "Chain__"
	Name: "Chain"
	Type: "IT_WEAPON"
	Buy: 23000
	Weight: 800
	Atk: 84
	Range: 1
	Slots: 3
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MACE"
},
{
	Id: 1522
	AegisName: "Stunner"
	Name: "Stunner"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2000
	Atk: 140
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
	Script: <" bonus2 bAddEff,Eff_Stun,1000; ">
},
{
	Id: 1523
	AegisName: "Spike"
	Name: "Spike"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 85
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus bCritical,40;
		bonus bDefRate,-67;
		bonus bDef2Rate,-67;
	">
},
{
	Id: 1524
	AegisName: "Golden_Mace"
	Name: "Golden Mace"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 110
	Range: 1
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddRace,RC_Undead,10;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1525
	AegisName: "Long_Mace"
	Name: "Long Mace"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 135
	Range: 3
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <" bonus bLongAtkDef,10; ">
},
{
	Id: 1526
	AegisName: "Slash"
	Name: "Slash"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 145
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddRace,RC_Undead,15;
		bonus2 bWeaponComaRace,RC_Undead,10;
		bonus2 bExpAddRace,RC_Undead,5;
	">
},
{
	Id: 1527
	AegisName: "Quadrille"
	Name: "Quadrille"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 165
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddRace,RC_Undead,10;
		bonus2 bAddRace,RC_DemiPlayer,10;
		bonus2 bAddEle,Ele_Earth,10;
	">
},
{
	Id: 1528
	AegisName: "Grand_Cross"
	Name: "Grand Cross"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 140
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		skill PR_TURNUNDEAD,3;
		bonus3 bAutoSpell,PR_TURNUNDEAD,3,100;
		bonus2 bSPDrainValueRace,RC_Undead,1;
		bonus2 bSPGainRace,RC_Undead,3;
	">
},
{
	Id: 1529
	AegisName: "Iron_Driver"
	Name: "Iron Driver"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 3000
	Atk: 155
	Range: 2
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 78
	Subtype: "W_MACE"
},
{
	Id: 1530
	AegisName: "Mjolnir"
	Name: "Mjolnir"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 6000
	Atk: 250
	Range: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 95
	Refine: false
	Subtype: "W_MACE"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bDex,40;
		bonus bStr,15;
		bonus bAspdRate,10;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1531
	AegisName: "Spanner"
	Name: "Wrench"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 115
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddEff,Eff_Blind,100;
		bonus2 bAddEff,Eff_Stun,100;
		bonus2 bAddEff,Eff_Poison,100;
		bonus2 bAddEff,Eff_Freeze,100;
	">
},
{
	Id: 1532
	AegisName: "Stunner_"
	Name: "Stunner"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 2000
	Atk: 140
	Range: 1
	Slots: 2
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MACE"
	Script: <" bonus2 bAddEff,Eff_Stun,1000; ">
},
{
	Id: 1533
	AegisName: "Warrior_Balmung"
	Name: "Warrior's Balmung"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 170
	Range: 1
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,5; ">
},
{
	Id: 1534
	AegisName: "Spanner_C"
	Name: "Wrench"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 150
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddEff,Eff_Blind,100;
		bonus2 bAddEff,Eff_Stun,100;
		bonus2 bAddEff,Eff_Poison,100;
		bonus2 bAddEff,Eff_Freeze,100;
	">
},
{
	Id: 1535
	AegisName: "Hollgrehenn_Hammer"
	Name: "Hollgrehenn's Hammer"
	Type: "IT_WEAPON"
	Buy: 4444
	Weight: 44
	Atk: 4
	Range: 1
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_MACE"
	Script: <"
		bonus bBreakArmorRate,100;
		bonus bBreakWeaponRate,100;
		if(readparam(bStr)>=44) {
			bonus bBaseAtk,44;
		}

	">
},
{
	Id: 1536
	AegisName: "Good_Morning_Star"
	Name: "Good Morning Star"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1537
	AegisName: "Quadrille_C"
	Name: "Refined Quadrille"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 193
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,30;
		bonus2 bAddRace,RC_Demon,40;
		bonus2 bAddRace,RC_Undead,40;
	">
},
{
	Id: 1538
	AegisName: "Spike_"
	Name: "Spike"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 85
	Range: 1
	Slots: 2
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus bCritical,40;
		bonus bDefRate,-67;
		bonus bDef2Rate,-67;
	">
},
{
	Id: 1539
	AegisName: "Golden_Mace_"
	Name: "Golden Mace"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 110
	Range: 1
	Slots: 2
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus2 bAddRace,RC_Undead,10;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1540
	AegisName: "Grand_Cross_"
	Name: "Grand Cross"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_MACE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		skill PR_TURNUNDEAD,3;
		bonus3 bAutoSpell,PR_TURNUNDEAD,3,100;
		bonus2 bSPDrainValueRace,RC_Undead,1;
		bonus2 bSPGainRace,RC_Undead,3;
	">
},
{
	Id: 1541
	AegisName: "Nemesis"
	Name: "Nemesis"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 120
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_MACE"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus2 bAddRace,RC_Undead,10;
		bonus2 bAddRace,RC_Demon,10;
		bonus3 bAutoSpell,AL_CRUCIS,1+getrefine(),100;
		autobonus "{ bonus bBaseAtk,50; }",10,20000,BF_WEAPON,"{ specialeffect(EF_BLOODDRAIN, AREA, playerattached()); }";
	">
},
{
	Id: 1542
	AegisName: "BF_Morning_Star1"
	Name: "Valorous Battlefield Morning Star"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 105
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus2 bAddRace,RC_DemiPlayer,75;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1543
	AegisName: "BF_Morning_Star2"
	Name: "Brave Battlefield Morning Star"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 105
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus2 bAddRace,RC_DemiPlayer,75;
		bonus bUnbreakableWeapon,0;
		autobonus "{ bonus2 bAddEff,Eff_Stun,5000; }",10,6000,BF_WEAPON,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
	">
},
{
	Id: 1544
	AegisName: "Lunakaligo"
	Name: "Lunakaligo"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 1
	Slots: 3
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_MACE"
	Script: <"
		if(readparam(bStr)>=77) {
			bonus bAspdRate,4;
			bonus2 bAddEff,Eff_Stun,1500;
			bonus3 bAddMonsterDropItem,12065,RC_Plant,500;
			bonus3 bAddMonsterDropItem,12043,RC_Brute,500;
			bonus3 bAddMonsterDropItem,12069,RC_Fish,500;
		}

	">
},
{
	Id: 1545
	AegisName: "N_Mace"
	Name: "Novice Mace"
	Type: "IT_WEAPON"
	Atk: 57
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Refine: false
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 1546
	AegisName: "Krieger_Onehand_Mace1"
	Name: "Glorious Morning Star"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 130
	Range: 1
	Job: {
		Novice: true
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,75;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
			bonus bAspdRate,5;
		}
		if(getrefine()>8) {
			bonus2 bAddEff,Eff_Stun,2000;
			bonus bAspdRate,5;
		}

	">
},
{
	Id: 1547
	AegisName: "Mace_Of_Madness"
	Name: "Mace Of Madness"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 150
	Range: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_MACE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSkillAtk,MC_CARTREVOLUTION,25;
		bonus bStr,2;
	">
},
{
	Id: 1548
	AegisName: "Veteran_Hammer"
	Name: "Veteran Hammer"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 1800
	Atk: 160
	Range: 1
	Slots: 2
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_MACE"
	Script: <"
		bonus bHealPower,getskilllv(AL_DP);
		bonus bCritical,getskilllv(PR_MACEMASTERY)*2;
		bonus bInt,1;
		bonus bLuk,1;
	">
},
{
	Id: 1549
	AegisName: "Pilebuncker"
	Name: "Pile Bunker"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 3500
	Atk: 450
	Range: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 99
	Subtype: "W_MACE"
},

//== Books =================================================
{
	Id: 1550
	AegisName: "Book"
	Name: "Book"
	Type: "IT_WEAPON"
	Buy: 30000
	Weight: 600
	Atk: 85
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_BOOK"
},
{
	Id: 1551
	AegisName: "Bible"
	Name: "Bible"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 1000
	Atk: 115
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bInt,2; ">
},
{
	Id: 1552
	AegisName: "Tablet"
	Name: "Tablet"
	Type: "IT_WEAPON"
	Buy: 51000
	Weight: 800
	Atk: 125
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
},
{
	Id: 1553
	AegisName: "Book_Of_Billows"
	Name: "Book of Billows"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Water; ">
},
{
	Id: 1554
	AegisName: "Book_Of_Mother_Earth"
	Name: "Book of Mother Earth"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1555
	AegisName: "Book_Of_Blazing_Sun"
	Name: "Book of the Blazing Sun"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1556
	AegisName: "Book_Of_Gust_Of_Wind"
	Name: "Book of Gust of Wind"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1557
	AegisName: "Book_Of_The_Apocalypse"
	Name: "Book of the Apocalypse"
	Type: "IT_WEAPON"
	Buy: 60000
	Weight: 800
	Atk: 120
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_BOOK"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus2 bAddEle,Ele_Holy,5;
		bonus2 bAddEle,Ele_Water,7;
		bonus2 bAddEle,Ele_Earth,7;
		bonus2 bAddEle,Ele_Fire,7;
		bonus2 bAddEle,Ele_Wind,7;
	">
},
{
	Id: 1558
	AegisName: "Girls_Diary"
	Name: "Girl's Diary"
	Type: "IT_WEAPON"
	Buy: 1500
	Weight: 300
	Atk: 60
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_BOOK"
	Script: <" bonus2 bAddDamageClass,1188,150; ">
},
{
	Id: 1559
	AegisName: "Legacy_Of_Dragon"
	Name: "Legacy of Dragon"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 130
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_BOOK"
	Script: <"
		bonus bInt,3;
		bonus bIgnoreDefRace,RC_Dragon;
		bonus2 bSPGainRace,RC_Dragon,10;
	">
},
{
	Id: 1560
	AegisName: "Diary_Of_Great_Sage"
	Name: "Sage's Diary"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1100
	Atk: 100
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 60
	Subtype: "W_BOOK"
	Script: <"
		bonus bMatkRate,15;
		if(readparam(bStr)>=50) bonus bAspdRate,5;
		if(readparam(bInt)>=70) bonus bMatkRate,5;
	">
},
{
	Id: 1561
	AegisName: "Hardback"
	Name: "Hardcover Book"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 140
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 55
	Subtype: "W_BOOK"
	Script: <"
		bonus bStr,3;
		bonus bDex,2;
	">
},
{
	Id: 1562
	AegisName: "Bible_Of_Battlefield"
	Name: "Battlefield Textbook"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Refine: false
	Subtype: "W_BOOK"
	Script: <"
		bonus bInt,3;
		bonus3 bAutoSpell,AL_BLESSING,3+(getskilllv(AL_BLESSING)>3)*(getskilllv(AL_BLESSING)-3),20;
	">
},
{
	Id: 1563
	AegisName: "Diary_Of_Great_Sage_C"
	Name: "Sage's Diary"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 135
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,20;
		bonus bAspdRate,5;
	">
},
{
	Id: 1564
	AegisName: "Encyclopedia"
	Name: "Encyclopedia"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 110
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_BOOK"
	Script: <"
		bonus bMatkRate,15;
		bonus bInt,3;
		bonus bDex,2;
		bonus bCritical,20+((readparam(bLuk)*2)/10);
	">
},
{
	Id: 1565
	AegisName: "Death_Note"
	Name: "Ledger of Death"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 137
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 85
	Subtype: "W_BOOK"
	Script: <"
		bonus bMatkRate,15;
		bonus bStr,3;
		bonus bInt,3;
		bonus bLuk,-20;
		bonus2 bWeaponComaRace,RC_DemiPlayer,10;
		bonus bAspdRate,getrefine();
		if(BaseJob==Job_Sage) bonus3 bAutoSpell,NPC_HELLJUDGEMENT,5,20;
	">
},
{
	Id: 1566
	AegisName: "Diary_Of_Great_Basil"
	Name: "Diary Of Great Basil"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1567
	AegisName: "Hardback_C"
	Name: "Refined Hardcover Book"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 168
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_BOOK"
	Script: <"
		bonus bStr,5;
		bonus bDex,2;
		bonus bMatkRate,20;
	">
},
{
	Id: 1568
	AegisName: "Book_Of_Billows_"
	Name: "Book of Billows"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Water; ">
},
{
	Id: 1569
	AegisName: "Book_Of_Mother_Earth_"
	Name: "Book of Mother Earth"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1570
	AegisName: "Book_Of_Blazing_Sun_"
	Name: "Book of Blazing Sun"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1571
	AegisName: "Book_Of_Gust_Of_Wind_"
	Name: "Book of Gust of Wind"
	Type: "IT_WEAPON"
	Buy: 35000
	Weight: 750
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_BOOK"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1572
	AegisName: "Principles_Of_Magic"
	Name: "Principles of Magic"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 300
	Atk: 60
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 60
	Subtype: "W_BOOK"
	Script: <"
		bonus bMatkRate,20;
		bonus bInt,3;
		bonus bSPrecovRate,5;
	">
},
{
	Id: 1573
	AegisName: "Ancient_Magic"
	Name: "Ancient Magic"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 30
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_BOOK"
	Script: <" bonus bMatkRate,15; ">
},
{
	Id: 1574
	AegisName: "BF_Book1"
	Name: "Brave Battle Strategy Book"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bInt,1;
		bonus bMatkRate,15;
		bonus2 bAddRace,RC_DemiPlayer,75;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1575
	AegisName: "BF_Book2"
	Name: "Valorous Battle Strategy Book"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bInt,1;
		bonus bMatkRate,15;
		bonus2 bIgnoreMdefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1576
	AegisName: "Krieger_Book1"
	Name: "Glorious Tablet"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus2 bAddRace,RC_DemiPlayer,80;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) autobonus "{ bonus bBaseAtk,200; }",30,3000,BF_WEAPON,"{ specialeffect(EF_BASH3D, AREA, playerattached()); }";
	">
},
{
	Id: 1577
	AegisName: "Krieger_Book2"
	Name: "Glorious Apocalypse"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 90
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus2 bAddRace,RC_DemiPlayer,80;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		if(getrefine()>8) {
			bonus bMatkRate,5;
			bonus bCastrate,-5;
			bonus bDelayrate,-5;
		}

	">
},
{
	Id: 1578
	AegisName: "Book_Of_Prayer"
	Name: "Book Of Prayer"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 140
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bVit,2;
		bonus bMdef,2;
		bonus bMaxSPrate,10;
	">
},
{
	Id: 1579
	AegisName: "Death_Note_M"
	Name: "Book of the Dead"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 137
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 85
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus bStr,3;
		bonus bInt,3;
		bonus bLuk,-20;
		bonus2 bWeaponComaRace,RC_DemiPlayer,10;
		bonus bAspdRate,getrefine();
		if(BaseJob==Job_Sage) bonus3 bAutoSpell,NPC_HELLJUDGEMENT,5,20;
	">
},
{
	Id: 1580
	AegisName: "Encyclopedia_C"
	Name: "Giant Encyclopedia"
	Type: "IT_WEAPON"
	Atk: 145
	Range: 1
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_BOOK"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus bInt,3;
		bonus bDex,2;
		bonus bCritical,20+((readparam(bLuk)*2)/10);
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},
{
	Id: 1581
	AegisName: "F_Diary_Of_Great_Sage_C"
	Name: "Diary Of Great Sage"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 135
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_BOOK"
},
{
	Id: 1582
	AegisName: "E_Diary_Of_Great_Sage_C"
	Name: "Diary Of Great Sage"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 135
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Sage: true
		Star_Gladiator: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_BOOK"
},

//== GM Weapon =============================================
{
	Id: 1599
	AegisName: "Angra_Manyu"
	Name: "Angra Manyu"
	Type: "IT_WEAPON"
	Buy: 1
	Weight: 10
	Atk: 200
	Range: 2
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_MACE"
	Script: <"
		bonus bAllStats,50;
		bonus bBaseAtk,3800;
		bonus bMatkRate,200;
		bonus2 bHPDrainRate,1000,100;
		bonus2 bSPDrainRate,1000,20;
		bonus bHealPower,200;
		bonus2 bAddRace, RC_All, 100;
		skill WZ_STORMGUST,10;
		skill WZ_METEOR,10;
		skill WZ_VERMILION,10;
		skill GM_SANDMAN,1;
	">
},

//== Staves ================================================
{
	Id: 1601
	AegisName: "Rod"
	Name: "Rod"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 15
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_STAFF"
	Script: <" bonus bMatkRate,15; ">
},
{
	Id: 1602
	AegisName: "Rod_"
	Name: "Rod"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 15
	Range: 1
	Slots: 4
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_STAFF"
	Script: <" bonus bMatkRate,15; ">
},
{
	Id: 1603
	AegisName: "Rod__"
	Name: "Rod"
	Type: "IT_WEAPON"
	Buy: 50
	Weight: 400
	Atk: 15
	Range: 1
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_STAFF"
	Script: <" bonus bMatkRate,15; ">
},
{
	Id: 1604
	AegisName: "Wand"
	Name: "Wand"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 400
	Atk: 25
	Range: 1
	Slots: 2
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,15;
	">
},
{
	Id: 1605
	AegisName: "Wand_"
	Name: "Wand"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 400
	Atk: 25
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,15;
	">
},
{
	Id: 1606
	AegisName: "Wand__"
	Name: "Wand"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 400
	Atk: 25
	Range: 1
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,15;
	">
},
{
	Id: 1607
	AegisName: "Staff"
	Name: "Staff"
	Type: "IT_WEAPON"
	Buy: 9500
	Weight: 400
	Atk: 40
	Range: 1
	Slots: 2
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,2;
		bonus bMatkRate,15;
	">
},
{
	Id: 1608
	AegisName: "Staff_"
	Name: "Staff"
	Type: "IT_WEAPON"
	Buy: 9500
	Weight: 400
	Atk: 40
	Range: 1
	Slots: 3
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,2;
		bonus bMatkRate,15;
	">
},
{
	Id: 1609
	AegisName: "Staff__"
	Name: "Staff"
	Type: "IT_WEAPON"
	Buy: 9500
	Weight: 400
	Atk: 40
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,2;
		bonus bMatkRate,15;
	">
},
{
	Id: 1610
	AegisName: "Arc_Wand"
	Name: "Arc Wand"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 400
	Atk: 60
	Range: 1
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bMatkRate,15;
	">
},
{
	Id: 1611
	AegisName: "Arc_Wand_"
	Name: "Arc Wand"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 400
	Atk: 60
	Range: 1
	Slots: 2
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bMatkRate,15;
	">
},
{
	Id: 1612
	AegisName: "Arc_Wand__"
	Name: "Arc Wand"
	Type: "IT_WEAPON"
	Buy: 45000
	Weight: 400
	Atk: 60
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bMatkRate,15;
	">
},
{
	Id: 1613
	AegisName: "Mighty_Staff"
	Name: "Mighty Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 130
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bStr,10;
		bonus bMatkRate,15;
		bonus bSPDrainValue,-2;
	">
},
{
	Id: 1614
	AegisName: "Blessed_Wand"
	Name: "Wand of Occult"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 75
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bMatkRate,15;
	">
},
{
	Id: 1615
	AegisName: "Bone_Wand"
	Name: "Evil Bone Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 40
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,4;
		bonus bAtkEle,Ele_Undead;
		bonus bMatkRate,15;
	">
},
{
	Id: 1616
	AegisName: "Staff_Of_Wing"
	Name: "Wing Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 60
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 40
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatkRate,15;
		bonus bCastrate,-5;
	">
},
{
	Id: 1617
	AegisName: "Survival_Rod"
	Name: "Survivor's Rod"
	Type: "IT_WEAPON"
	Buy: 85000
	Weight: 1000
	Atk: 50
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bDex,2;
		bonus bMatkRate,15;
		bonus bMaxHP,300;
	">
},
{
	Id: 1618
	AegisName: "Survival_Rod_"
	Name: "Survivor's Rod"
	Type: "IT_WEAPON"
	Buy: 85000
	Weight: 1000
	Atk: 50
	Range: 1
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bDex,3;
		bonus bMatkRate,15;
		bonus bMaxHP,400;
	">
},
{
	Id: 1619
	AegisName: "Survival_Rod2"
	Name: "Survivor's Rod"
	Type: "IT_WEAPON"
	Buy: 85000
	Weight: 1000
	Atk: 50
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,2;
		bonus bMatkRate,15;
		bonus bMaxHP,300;
	">
},
{
	Id: 1620
	AegisName: "Survival_Rod2_"
	Name: "Survivor's Rod"
	Type: "IT_WEAPON"
	Buy: 85000
	Weight: 1000
	Atk: 50
	Range: 1
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bMatkRate,15;
		bonus bMaxHP,400;
	">
},
{
	Id: 1621
	AegisName: "Hypnotists_Staff"
	Name: "Hypnotist's Staff"
	Type: "IT_WEAPON"
	Buy: 43000
	Weight: 500
	Atk: 70
	Range: 1
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,25;
	">
},
{
	Id: 1622
	AegisName: "Hypnotists_Staff_"
	Name: "Hypnotist's Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 70
	Range: 1
	Slots: 2
	Job: {
		Novice: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,25;
	">
},
{
	Id: 1623
	AegisName: "Mighty_Staff_C"
	Name: "Mighty Staff"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 165
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,10;
		bonus bInt,4;
		bonus bMatkRate,20;
		bonus bSPDrainValue,-1;
	">
},
{
	Id: 1624
	AegisName: "Lich_Bone_Wand"
	Name: "Lich's Bone Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 60
	Range: 1
	Slots: 2
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bAtkEle,Ele_Undead;
		bonus bMatkRate,20;
		bonus3 bAutoSpellWhenHit,NPC_WIDECURSE,5,10+getrefine();
		if(getrefine()>=9) {
			bonus bMatkRate,3;
			bonus bMaxSP,300;
		}

	">
},
{
	Id: 1625
	AegisName: "Healing_Staff"
	Name: "Healing Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 10
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_STAFF"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15;
		bonus bHealPower,(getrefine()*3/2);
	">
},
{
	Id: 1626
	AegisName: "Piercing_Staff"
	Name: "Piercing Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 80
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,4;
		bonus bMatkRate,15;
		bonus bIgnoreMdefRate,10+getrefine();
	">
},
{
	Id: 1627
	AegisName: "Staffy"
	Name: "Staffy"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 40
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus2 bAddRace, RC_All, 50;
	">
},
{
	Id: 1628
	AegisName: "Survival_Rod_C"
	Name: "Refined Survivor's Rod"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 71
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	Refine: false
	Subtype: "W_STAFF"
	Script: <"
		bonus bDex,4;
		bonus bMatkRate,20;
		bonus bMaxHP,500;
	">
},
{
	Id: 1629
	AegisName: "Walking_Stick"
	Name: "Gentleman's Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 40
	Range: 1
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 50
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatkRate,15;
		bonus bDex,1;
	">
},
{
	Id: 1630
	AegisName: "Release_Of_Wish"
	Name: "Release of Wish"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 30
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatkRate,15;
		bonus bInt,3;
		bonus bHealPower,5;
		autobonus "{ bonus2 bSPRegenRate,100,2000; bonus2 bHPRegenRate,50,2000; }",10,10000,BF_MAGIC,"{ specialeffect(EF_HEAL, AREA, playerattached()); }";
	">
},
{
	Id: 1631
	AegisName: "Holy_Stick"
	Name: "Holy Stick"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 50
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_STAFF"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15;
		bonus2 bCastrate,AL_HOLYLIGHT,-25;
		bonus2 bCastrate,PR_TURNUNDEAD,-25;
		bonus2 bCastrate,PR_MAGNUS,-25;
	">
},
{
	Id: 1632
	AegisName: "BF_Staff1"
	Name: "Warlock's Magic Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,4;
		bonus bDex,3;
		bonus bMatkRate,15;
		bonus2 bIgnoreMdefRate,RC_DemiPlayer,25;
		bonus3 bAddEff,Eff_Stun,500,ATF_SKILL;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1633
	AegisName: "BF_Staff2"
	Name: "Warlock's Battle Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,3;
		bonus bDex,3;
		bonus bMatkRate,15;
		bonus2 bMagicAddRace,RC_DemiPlayer,15;
		bonus3 bAddEff,Eff_Stun,500,ATF_SKILL;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1634
	AegisName: "BF_Staff3"
	Name: "Strong Recovery Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,15;
		bonus bHealPower,14;
		bonus2 bSPRegenRate,5,10000;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1635
	AegisName: "BF_Staff4"
	Name: "Speedy Recovery Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,3;
		bonus bDex,2;
		bonus bMatkRate,15;
		bonus bDelayrate,-15;
		bonus2 bSPRegenRate,5,10000;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1636
	AegisName: "Thorn_Staff"
	Name: "Thorn Staff of Darkness"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 60
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 75
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,3;
		bonus bDex,3;
		bonus bMatkRate,20;
		bonus bIgnoreMdefRate,getrefine();
		bonus bDelayrate,-(getrefine()*3/2);
	">
},
{
	Id: 1637
	AegisName: "Eraser"
	Name: "Eraser"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 80
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatkRate,20;
		bonus bInt,3;
		bonus bDex,2;
		bonus bSPrecovRate,8;
		if( getrefine()>9 ) bonus5 bAutoSpell,NPC_WIDESOULDRAIN,3,5,BF_MAGIC,0;
		else bonus5 bAutoSpell,NPC_WIDESOULDRAIN,1,5,BF_MAGIC,0;
	">
},
{
	Id: 1638
	AegisName: "Healing_Staff_C"
	Name: "Staff Of Healing"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 10
	Range: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15;
		bonus bHealPower,(getrefine()*3/2);
	">
},
{
	Id: 1639
	AegisName: "N_Rod"
	Name: "Novice Rod"
	Type: "IT_WEAPON"
	Atk: 15
	Range: 1
	Slots: 3
	Job: {
		Novice: true
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Refine: false
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMatkRate,16; ">
},
{
	Id: 1640
	AegisName: "Krieger_Onehand_Staff1"
	Name: "Glorious Arc Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bMagicAddRace,RC_DemiPlayer,15;
		bonus2 bIgnoreMdefRate,RC_DemiPlayer,25 + ((getrefine()>5) ? 5 : 0);
		bonus bUnbreakableWeapon,0;
		if(getrefine()>8) {
			bonus bCastrate,-5;
			bonus bDelayrate,-5;
			bonus bMatkRate,5;
		}

	">
},
{
	Id: 1641
	AegisName: "Krieger_Onehand_Staff2"
	Name: "Glorious Cure Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bHealPower,14;
		bonus bDelayrate,-10;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bIgnoreMdefRate,RC_DemiPlayer,5;
			bonus bHealPower,5+(getrefine()-5)*2;
		}
		if(getrefine()>8) bonus5 bAutoSpellOnSkill,AL_HEAL,AL_HEAL,10,100,1;
		if(getrefine()>9) {
			bonus bHealPower,10;
		}

	">
},
{
	Id: 1642
	AegisName: "Staff_Of_Darkness"
	Name: "Staff Of Darkness"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 100
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	Refine: false
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bCastrate,-5;
		bonus bMatkRate,15;
		bonus bInt,2;
	">
},
{
	Id: 1643
	AegisName: "Dead_Tree_Cane"
	Name: "Dead Tree Cane"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 100
	Atk: 100
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatk,15;
		bonus bInt,4;
		if(getrefine()>5) {
			bonus bInt,getrefine()-5;
			bonus bMaxHP,-200;
			bonus bMaxSP,-100;
		}

	">
},
{
	Id: 1644
	AegisName: "Piercing_Staff_M"
	Name: "Staff of Piercing"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 80
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,4;
		bonus bMatkRate,15;
		bonus bIgnoreMdefRate,10+getrefine();
	">
},
{
	Id: 1645
	AegisName: "Lich_Bone_Wand_M"
	Name: "Lich's Bone Wand"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 800
	Atk: 60
	Range: 1
	Slots: 2
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_STAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bAtkEle,Ele_Undead;
		bonus bMatkRate,20;
		bonus3 bAutoSpellWhenHit,NPC_WIDECURSE,5,10+getrefine();
		if(getrefine()>=9) {
			bonus bMatkRate,3;
			bonus bMaxSP,300;
		}

	">
},
{
	Id: 1646
	AegisName: "Lacryma_Stick"
	Name: "La'cryma Stick"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 30
	Range: 1
	Slots: 2
	Job: {
		Magician: true
		Wizard: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_STAFF"
	Script: <"
		bonus bInt,4;
		bonus bMatkRate,15;
		bonus bMdef,1;
		bonus2 bSkillAtk,WZ_STORMGUST,getrefine();
		if(getrefine()>9) bonus2 bCastrate,WZ_STORMGUST,-8;
	">
},
{
	Id: 1647
	AegisName: "Croce_Staff"
	Name: "Croce Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 30
	Range: 1
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_STAFF"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15;
		bonus bInt,4;
		bonus4 bAutoSpellOnSkill,AL_HEAL,AL_BLESSING,max(getskilllv(AL_BLESSING),1),20;
	">
},
{
	Id: 1648
	AegisName: "Staff_Of_Bordeaux"
	Name: "Staff Of Bordeaux"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 30
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 50
	Subtype: "W_STAFF"
	Script: <"
		bonus bMatkRate,15;
		bonus bInt,2;
		bonus bDex,1;
		if(getskilllv(SA_DRAGONOLOGY)==5) {
			bonus bUseSPrate,-15;
			bonus bInt,3;
		}

	">
},

//== Bows ==================================================
{
	Id: 1701
	AegisName: "Bow"
	Name: "Bow"
	Type: "IT_WEAPON"
	Buy: 1000
	Weight: 500
	Atk: 15
	Range: 5
	Slots: 3
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
},
{
	Id: 1702
	AegisName: "Bow_"
	Name: "Bow"
	Type: "IT_WEAPON"
	Buy: 1000
	Weight: 500
	Atk: 15
	Range: 5
	Slots: 4
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
},
{
	Id: 1703
	AegisName: "Bow__"
	Name: "Bow"
	Type: "IT_WEAPON"
	Buy: 1000
	Atk: 15
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddDamageClass,1002,500;
		bonus2 bAddDamageClass,1113,500;
		bonus2 bAddDamageClass,1031,500;
		bonus2 bAddDamageClass,1242,500;
	">
},
{
	Id: 1704
	AegisName: "Composite_Bow"
	Name: "Composite Bow"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 600
	Atk: 29
	Range: 5
	Slots: 3
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
},
{
	Id: 1705
	AegisName: "Composite_Bow_"
	Name: "Composite Bow"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 600
	Atk: 29
	Range: 5
	Slots: 4
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
},
{
	Id: 1706
	AegisName: "Composite_Bow__"
	Name: "Composite Bow"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 600
	Atk: 29
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Subtype: "W_BOW"
},
{
	Id: 1707
	AegisName: "Great_Bow"
	Name: "Great Bow"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 1000
	Atk: 50
	Range: 5
	Slots: 2
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1708
	AegisName: "Great_Bow_"
	Name: "Great Bow"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 1000
	Atk: 50
	Range: 5
	Slots: 3
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1709
	AegisName: "Great_Bow__"
	Name: "Great Bow"
	Type: "IT_WEAPON"
	Buy: 10000
	Weight: 1000
	Atk: 50
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1710
	AegisName: "CrossBow"
	Name: "Crossbow"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 900
	Atk: 65
	Range: 5
	Slots: 2
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1711
	AegisName: "CrossBow_"
	Name: "Crossbow"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 900
	Atk: 65
	Range: 5
	Slots: 3
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1712
	AegisName: "CrossBow__"
	Name: "Crossbow"
	Type: "IT_WEAPON"
	Buy: 17000
	Weight: 900
	Atk: 65
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 2
	EquipLv: 18
	Subtype: "W_BOW"
},
{
	Id: 1713
	AegisName: "Arbalest"
	Name: "Arbalest"
	Type: "IT_WEAPON"
	Buy: 48000
	Weight: 1000
	Atk: 90
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
	Script: <" bonus bDex,2; ">
},
{
	Id: 1714
	AegisName: "Kakkung"
	Name: "Gakkung Bow"
	Type: "IT_WEAPON"
	Buy: 42000
	Weight: 1100
	Atk: 100
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
},
{
	Id: 1715
	AegisName: "Arbalest_"
	Name: "Arbalest"
	Type: "IT_WEAPON"
	Buy: 48000
	Weight: 1000
	Atk: 90
	Range: 5
	Slots: 2
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
	Script: <" bonus bDex,2; ">
},
{
	Id: 1716
	AegisName: "Kakkung_"
	Name: "Gakkung Bow"
	Type: "IT_WEAPON"
	Buy: 42000
	Weight: 1100
	Atk: 100
	Range: 5
	Slots: 2
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
},
{
	Id: 1718
	AegisName: "Hunter_Bow"
	Name: "Hunter Bow"
	Type: "IT_WEAPON"
	Buy: 64000
	Weight: 1500
	Atk: 125
	Range: 5
	Job: {
		Hunter: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
},
{
	Id: 1719
	AegisName: "Bow_Of_Roguemaster"
	Name: "Roguemaster's Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 75
	Range: 11
	Job: {
		Thief: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_BOW"
},
{
	Id: 1720
	AegisName: "Bow_Of_Rudra"
	Name: "Rudra Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 150
	Range: 5
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 48
	Subtype: "W_BOW"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bInt,5;
		skill AL_CURE,1;
		skill AL_HEAL,1;
		bonus2 bResEff,Eff_Poison,5000;
		bonus2 bResEff,Eff_Curse,5000;
		bonus2 bResEff,Eff_Silence,5000;
		bonus2 bResEff,Eff_Confusion,5000;
		bonus2 bResEff,Eff_Blind,5000;
	">
},
{
	Id: 1721
	AegisName: "Repeting_CrossBow"
	Name: "Repeating Crossbow"
	Type: "IT_WEAPON"
	Buy: 89000
	Weight: 2000
	Atk: 95
	Range: 9
	Slots: 1
	Job: {
		Thief: true
		Hunter: true
		Rogue: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 65
	Subtype: "W_BOW"
},
{
	Id: 1722
	AegisName: "Balistar"
	Name: "Ballista"
	Type: "IT_WEAPON"
	Buy: 124000
	Weight: 3500
	Atk: 145
	Range: 5
	Job: {
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 77
	Subtype: "W_BOW"
},
{
	Id: 1723
	AegisName: "Luna_Bow"
	Name: "Luna Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 100
	Range: 5
	Slots: 2
	Job: {
		Hunter: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_BOW"
	Script: <" bonus bDef,2+3*(getrefine()>5)+2*(getrefine()>8); ">
},
{
	Id: 1724
	AegisName: "Dragon_Wing"
	Name: "Dragon Wing"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 100
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_BOW"
	Script: <"
		bonus3 bAddMonsterDropItem,1765,RC_Dragon,300;
		bonus bIgnoreDefRace,RC_Dragon;
	">
},
{
	Id: 1725
	AegisName: "Bow_Of_Minstrel"
	Name: "Minstrel Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1700
	Atk: 120
	Range: 5
	Slots: 1
	Job: {
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_BOW"
	Script: <"
		bonus bInt,2;
		bonus bSPrecovRate,10;
	">
},
{
	Id: 1726
	AegisName: "Hunter_Bow_"
	Name: "Hunter Bow"
	Type: "IT_WEAPON"
	Buy: 64000
	Weight: 1500
	Atk: 125
	Range: 5
	Slots: 1
	Job: {
		Hunter: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 33
	Subtype: "W_BOW"
},
{
	Id: 1727
	AegisName: "Balistar_"
	Name: "Ballista"
	Type: "IT_WEAPON"
	Buy: 124000
	Weight: 3500
	Atk: 145
	Range: 5
	Slots: 1
	Job: {
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 77
	Subtype: "W_BOW"
},
{
	Id: 1728
	AegisName: "Balistar_C"
	Name: "Ballista"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 194
	Range: 5
	Job: {
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLongAtkRate,20; ">
},
{
	Id: 1729
	AegisName: "Bow_Of_Rudra_C"
	Name: "Rudra Bow"
	Type: "IT_WEAPON"
	Buy: 2
	Atk: 185
	Range: 5
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_BOW"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bInt,5;
		skill AL_CURE,1;
		skill AL_HEAL,1;
	">
},
{
	Id: 1730
	AegisName: "Burning_Bow"
	Name: "Burning Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 95
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_BOW"
	Script: <" bonus2 bSubEle,Ele_Fire,10; ">
},
{
	Id: 1731
	AegisName: "Frozen_Bow"
	Name: "Frozen Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 100
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_BOW"
	Script: <" bonus2 bAddEff,Eff_Freeze,1000; ">
},
{
	Id: 1732
	AegisName: "Earth_Bow"
	Name: "Earth Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 105
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_BOW"
},
{
	Id: 1733
	AegisName: "Gust_Bow"
	Name: "Gust Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1400
	Atk: 95
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 55
	Subtype: "W_BOW"
},
{
	Id: 1734
	AegisName: "Orc_Archer_Bow"
	Name: "Orc Archer Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1600
	Atk: 120
	Range: 5
	Job: {
		Archer: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 65
	Subtype: "W_BOW"
	Script: <" bonus2 bAddMonsterDropItem,1753,200; ">
},
{
	Id: 1735
	AegisName: "Kkakkung"
	Name: "Kkakkung"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 1
	Refine: false
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1736
	AegisName: "Double_Bound"
	Name: "Double Bound"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 70
	Range: 5
	Slots: 3
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_BOW"
	Script: <" bonus3 bAutoSpell,AC_DOUBLE,getskilllv(AC_DOUBLE),10; ">
},
{
	Id: 1737
	AegisName: "Ixion_Wing"
	Name: "Ixion Wings"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 300
	Atk: 135
	Range: 5
	Slots: 1
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_BOW"
	Script: <"
		autobonus "{ bonus bAspdRate,7; }",10+(getrefine()*2),7000,BF_WEAPON,"{ specialeffect(EF_HASTEUP, AREA, playerattached()); }";
		bonus2 bAddSkillBlow,AC_CHARGEARROW,3;
	">
},
{
	Id: 1738
	AegisName: "BF_Bow1"
	Name: "Valorous Battle CrossBow"
	Type: "IT_WEAPON"
	Atk: 100
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1739
	AegisName: "BF_Bow2"
	Name: "Brave Battle CrossBow"
	Type: "IT_WEAPON"
	Atk: 100
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus bInt,10;
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1740
	AegisName: "Nepenthes_Bow"
	Name: "Nepenthes Bow"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 105
	Range: 5
	Slots: 2
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_BOW"
	Script: <" bonus4 bAutoSpellOnSkill,AC_DOUBLE,AC_CHARGEARROW,1,20; ">
},
{
	Id: 1741
	AegisName: "Cursed_Lyre"
	Name: "Cursed Lyre"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1250
	Atk: 125
	Range: 5
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_BOW"
	Script: <"
		bonus bLuk,-2;
		bonus2 bAddEff,Eff_Curse,400;
	">
},
{
	Id: 1742
	AegisName: "N_Composite_Bow"
	Name: "Novice Composite Bow"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 49
	Range: 5
	Slots: 3
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 1
	EquipLv: 4
	Refine: false
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 1743
	AegisName: "Krieger_Bow1"
	Name: "Glorious Hunter Bow"
	Type: "IT_WEAPON"
	Atk: 100
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,55;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bCritAtkRate,getrefine() * 2;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) bonus2 bSkillAtk,AC_DOUBLE,20;
	">
},
{
	Id: 1744
	AegisName: "Bow_Of_Evil"
	Name: "Bow Of Evil"
	Type: "IT_WEAPON"
	Atk: 170
	Range: 5
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_BOW"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSkillAtk,AC_DOUBLE,25;
		bonus bDex,2;
	">
},
{
	Id: 1745
	AegisName: "Falken_Blitz"
	Name: "Falken Blitz"
	Type: "IT_WEAPON"
	Weight: 1000
	Atk: 100
	Range: 5
	Slots: 2
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_BOW"
	Script: <"
		bonus2 bSkillAtk,SN_SHARPSHOOTING,10;
		bonus2 bSkillAtk,AC_DOUBLE,10;
		bonus2 bSkillAtk,AC_CHARGEARROW,10;
	">
},

//== Arrows ================================================
{
	Id: 1750
	AegisName: "Arrow"
	Name: "Arrow"
	Type: "IT_AMMO"
	Buy: 1
	Weight: 1
	Atk: 25
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
},
{
	Id: 1751
	AegisName: "Silver_Arrow"
	Name: "Silver Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Holy; ">
},
{
	Id: 1752
	AegisName: "Fire_Arrow"
	Name: "Fire Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1753
	AegisName: "Steel_Arrow"
	Name: "Steel Arrow"
	Type: "IT_AMMO"
	Buy: 4
	Weight: 2
	Atk: 40
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
},
{
	Id: 1754
	AegisName: "Crystal_Arrow"
	Name: "Crystal Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Water; ">
},
{
	Id: 1755
	AegisName: "Arrow_Of_Wind"
	Name: "Arrow of Wind"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1756
	AegisName: "Stone_Arrow"
	Name: "Stone Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1757
	AegisName: "Immatrial_Arrow"
	Name: "Immaterial Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 1
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Ghost; ">
},
{
	Id: 1758
	AegisName: "Stun_Arrow"
	Name: "Stun Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus2 bAddEff,Eff_Stun,1000; ">
},
{
	Id: 1759
	AegisName: "Freezing_Arrow"
	Name: "Frozen Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <"
		bonus bAtkEle,Ele_Water;
		bonus2 bAddEff,Eff_Freeze,1000;
	">
},
{
	Id: 1760
	AegisName: "Flash_Arrow"
	Name: "Flash Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus2 bAddEff,Eff_Blind,1000; ">
},
{
	Id: 1761
	AegisName: "Curse_Arrow"
	Name: "Cursed Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus2 bAddEff,Eff_Curse,1000; ">
},
{
	Id: 1762
	AegisName: "Rusty_Arrow"
	Name: "Rusty Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Poison; ">
},
{
	Id: 1763
	AegisName: "Poison_Arrow"
	Name: "Poison Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <"
		bonus bAtkEle,Ele_Poison;
		bonus2 bAddEff,Eff_Poison,2000;
	">
},
{
	Id: 1764
	AegisName: "Incisive_Arrow"
	Name: "Sharp Arrow"
	Type: "IT_AMMO"
	Buy: 20
	Weight: 3
	Atk: 10
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bCritical,20; ">
},
{
	Id: 1765
	AegisName: "Oridecon_Arrow"
	Name: "Oridecon Arrow"
	Type: "IT_AMMO"
	Buy: 30
	Weight: 3
	Atk: 50
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
},
{
	Id: 1766
	AegisName: "Arrow_Of_Counter_Evil"
	Name: "Arrow of Counter Evil"
	Type: "IT_AMMO"
	Buy: 40
	Weight: 3
	Atk: 50
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Holy; ">
},
{
	Id: 1767
	AegisName: "Arrow_Of_Shadow"
	Name: "Arrow of Shadow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus bAtkEle,Ele_Dark; ">
},
{
	Id: 1768
	AegisName: "Sleep_Arrow"
	Name: "Sleep Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus2 bAddEff,Eff_Sleep,2000; ">
},
{
	Id: 1769
	AegisName: "Silence_Arrow"
	Name: "Mute Arrow"
	Type: "IT_AMMO"
	Buy: 10
	Weight: 3
	Atk: 1
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <" bonus2 bAddEff,Eff_Silence,1000; ">
},
{
	Id: 1770
	AegisName: "Iron_Arrow"
	Name: "Iron Arrow"
	Type: "IT_AMMO"
	Buy: 2
	Weight: 1
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
},
{
	Id: 1771
	AegisName: "Venom_Knife"
	Name: "Venom Knife"
	Type: "IT_AMMO"
	Buy: 50
	Weight: 5
	Atk: 30
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_DAGGER"
},
{
	Id: 1772
	AegisName: "Holy_Arrow"
	Name: "Holy Arrow"
	Type: "IT_AMMO"
	Buy: 3
	Weight: 2
	Atk: 50
	Job: {
		Archer: true
		Thief: true
		Hunter: true
		Assassin: true
		Rogue: true
		Bard: true
	}
	Loc: "EQP_AMMO"
	EquipLv: 1
	Subtype: "A_ARROW"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus2 bAddRace,RC_Demon,5;
	">
},

//== Knuckles ==============================================
{
	Id: 1801
	AegisName: "Waghnakh"
	Name: "Waghnak"
	Type: "IT_WEAPON"
	Buy: 8000
	Weight: 400
	Atk: 30
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_KNUCKLE"
},
{
	Id: 1802
	AegisName: "Waghnakh_"
	Name: "Waghnak"
	Type: "IT_WEAPON"
	Buy: 8000
	Weight: 400
	Atk: 30
	Range: 1
	Slots: 4
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 1
	Subtype: "W_KNUCKLE"
},
{
	Id: 1803
	AegisName: "Knuckle_Duster"
	Name: "Knuckle Dusters"
	Type: "IT_WEAPON"
	Buy: 25000
	Weight: 450
	Atk: 50
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_KNUCKLE"
},
{
	Id: 1804
	AegisName: "Knuckle_Duster_"
	Name: "Knuckle Dusters"
	Type: "IT_WEAPON"
	Buy: 25000
	Weight: 450
	Atk: 50
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_KNUCKLE"
},
{
	Id: 1805
	AegisName: "Hora"
	Name: "Studded Knuckles"
	Type: "IT_WEAPON"
	Buy: 32000
	Weight: 450
	Atk: 65
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_KNUCKLE"
},
{
	Id: 1806
	AegisName: "Hora_"
	Name: "Studded Knuckles"
	Type: "IT_WEAPON"
	Buy: 32000
	Weight: 450
	Atk: 65
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 12
	Subtype: "W_KNUCKLE"
},
{
	Id: 1807
	AegisName: "Fist"
	Name: "Fist"
	Type: "IT_WEAPON"
	Buy: 53000
	Weight: 650
	Atk: 115
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
},
{
	Id: 1808
	AegisName: "Fist_"
	Name: "Fist"
	Type: "IT_WEAPON"
	Buy: 53000
	Weight: 650
	Atk: 115
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
},
{
	Id: 1809
	AegisName: "Claw"
	Name: "Claw"
	Type: "IT_WEAPON"
	Buy: 67000
	Weight: 500
	Atk: 86
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
	Script: <" bonus bStr,2; ">
},
{
	Id: 1810
	AegisName: "Claw_"
	Name: "Claw"
	Type: "IT_WEAPON"
	Buy: 67000
	Weight: 500
	Atk: 86
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
	Script: <" bonus bStr,2; ">
},
{
	Id: 1811
	AegisName: "Finger"
	Name: "Finger"
	Type: "IT_WEAPON"
	Buy: 58000
	Weight: 500
	Atk: 97
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
},
{
	Id: 1812
	AegisName: "Finger_"
	Name: "Finger"
	Type: "IT_WEAPON"
	Buy: 58000
	Weight: 500
	Atk: 97
	Range: 1
	Slots: 2
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 24
	Subtype: "W_KNUCKLE"
},
{
	Id: 1813
	AegisName: "Kaiser_Knuckle"
	Name: "Kaiser Knuckle"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 450
	Atk: 110
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_KNUCKLE"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddRace,RC_Undead,5;
		bonus2 bAddEle,Ele_Water,10;
		bonus2 bAddEle,Ele_Earth,10;
		bonus2 bAddEle,Ele_Fire,10;
		bonus2 bAddEle,Ele_Wind,10;
	">
},
{
	Id: 1814
	AegisName: "Berserk"
	Name: "Berserk"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 120
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_KNUCKLE"
	Script: <" bonus bAspdRate,12; ">
},
{
	Id: 1815
	AegisName: "Claw_Of_Garm"
	Name: "Hatii Claw"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 550
	Atk: 152
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_KNUCKLE"
	Script: <"
		bonus bAtkEle,Ele_Dark;
		bonus bMaxHPrate,-2;
		bonus2 bAddEff,Eff_Bleeding,200;
	">
},
{
	Id: 1816
	AegisName: "Berserk_"
	Name: "Berserk"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 120
	Range: 1
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 36
	Subtype: "W_KNUCKLE"
	Script: <" bonus bAspdRate,12; ">
},
{
	Id: 1817
	AegisName: "Kaiser_Knuckle_C"
	Name: "Kaiser Knuckle"
	Type: "IT_WEAPON"
	Buy: 1
	Atk: 159
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 1
	Refine: false
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus2 bAddRace,RC_Undead,5;
		bonus2 bAddEle,Ele_Water,10;
		bonus2 bAddEle,Ele_Earth,10;
		bonus2 bAddEle,Ele_Fire,10;
		bonus2 bAddEle,Ele_Wind,10;
		bonus bAspdRate,5;
	">
},
{
	Id: 1818
	AegisName: "Magma_Fist"
	Name: "Magma Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 650
	Atk: 80
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 75
	Subtype: "W_KNUCKLE"
	Script: <" bonus3 bAutoSpell,SA_FLAMELAUNCHER,5,10; ">
},
{
	Id: 1819
	AegisName: "Icicle_Fist"
	Name: "Icicle Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 650
	Atk: 80
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 75
	Subtype: "W_KNUCKLE"
	Script: <" bonus3 bAutoSpell,SA_FROSTWEAPON,5,10; ">
},
{
	Id: 1820
	AegisName: "Electric_Fist"
	Name: "Electric Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 650
	Atk: 80
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 75
	Subtype: "W_KNUCKLE"
	Script: <" bonus3 bAutoSpell,SA_LIGHTNINGLOADER,5,10; ">
},
{
	Id: 1821
	AegisName: "Seismic_Fist"
	Name: "Seismic Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 650
	Atk: 80
	Range: 1
	Slots: 3
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 75
	Subtype: "W_KNUCKLE"
	Script: <" bonus3 bAutoSpell,SA_SEISMICWEAPON,5,10; ">
},
{
	Id: 1822
	AegisName: "Combo_Battle_Glove"
	Name: "Combo Battle Glove"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 500
	Atk: 30
	Range: 1
	Slots: 4
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 60
	Subtype: "W_KNUCKLE"
	Script: <"
		bonus2 bSkillAtk,MO_TRIPLEATTACK,15;
		bonus2 bSkillAtk,MO_CHAINCOMBO,15;
		bonus2 bSkillAtk,MO_COMBOFINISH,20;
	">
},
{
	Id: 1823
	AegisName: "BF_Knuckle1"
	Name: "Valorous Battle Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 30
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bAgi,1;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus4 bAutoSpell,CH_SOULCOLLECT,1,5,0;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1824
	AegisName: "BF_Knuckle2"
	Name: "Brave Battle Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 30
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bInt,1;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bCastrate,MO_EXTREMITYFIST,-25;
		autobonus "{ bonus2 bCastrate,MO_EXTREMITYFIST,-100; }",50,6000,BF_WEAPON,"{ specialeffect(EF_SUFFRAGIUM, AREA, playerattached()); }";
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1825
	AegisName: "Horn_Of_Hilthrion"
	Name: "Horn of Hillslion"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 600
	Atk: 95
	Range: 1
	Slots: 3
	Job: {
		Monk: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 60
	Subtype: "W_KNUCKLE"
	Script: <"
		bonus3 bAutoSpell,NPC_CRITICALWOUND,1,100;
		bonus4 bAutoSpellOnSkill,CH_PALMSTRIKE,MO_INVESTIGATE,1,100;
		bonus3 bAutoSpell,MO_CALLSPIRITS,5,100;
	">
},
{
	Id: 1826
	AegisName: "Krieger_Knuckle1"
	Name: "Glorious Claw"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 30
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) {
			bonus3 bAutoSpell,MO_INVESTIGATE,5,(getrefine()*10-50);
			bonus3 bAutoSpell,AL_DECAGI,1,(getrefine()*10-50);
		}

	">
},
{
	Id: 1827
	AegisName: "Krieger_Knuckle2"
	Name: "Glorious Fist"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 30
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) {
			bonus2 bCastrate,MO_EXTREMITYFIST,-100;
			bonus4 bAutoSpellOnSkill,MO_EXPLOSIONSPIRITS,CH_SOULCOLLECT,1,1000;
		}

	">
},
{
	Id: 1828
	AegisName: "Monk_Knuckle"
	Name: "Monk Knuckle"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 150
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus2 bSkillAtk,MO_FINGEROFFENSIVE,25;
	">
},
{
	Id: 1829
	AegisName: "Fist_C"
	Name: "Fist"
	Type: "IT_WEAPON"
	Atk: 150
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_KNUCKLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},
{
	Id: 1846
	AegisName: "Combo_Battle_Glove_IL"
	Name: "Combo_Battle_Glove_IL"
},
{
	Id: 1847
	AegisName: "Iron_Nail_K"
	Name: "Iron_Nail_K"
},
{
	Id: 1848
	AegisName: "Rebeginer_SR_Nuckle"
	Name: "Rebeginer_SR_Nuckle"
},
{
	Id: 1862
	AegisName: "Burning_Knuckle_OS"
	Name: "Burning_Knuckle_OS"
},
{
	Id: 1864
	AegisName: "Evt_Iron_Nail_K"
	Name: "Evt_Iron_Nail_K"
},
{
	Id: 1867
	AegisName: "Ein_1HKNUCK"
	Name: "Ein_1HKNUCK"
},

//== Instruments ===========================================
{
	Id: 1901
	AegisName: "Violin"
	Name: "Violin"
	Type: "IT_WEAPON"
	Buy: 4000
	Weight: 700
	Atk: 50
	Range: 1
	Slots: 3
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MUSICAL"
},
{
	Id: 1902
	AegisName: "Violin_"
	Name: "Violin"
	Type: "IT_WEAPON"
	Buy: 4000
	Weight: 700
	Atk: 50
	Range: 1
	Slots: 4
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 2
	Subtype: "W_MUSICAL"
},
{
	Id: 1903
	AegisName: "Mandolin"
	Name: "Mandolin"
	Type: "IT_WEAPON"
	Buy: 18000
	Weight: 400
	Atk: 90
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MUSICAL"
},
{
	Id: 1904
	AegisName: "Mandolin_"
	Name: "Mandolin"
	Type: "IT_WEAPON"
	Buy: 18000
	Weight: 400
	Atk: 90
	Range: 1
	Slots: 3
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MUSICAL"
},
{
	Id: 1905
	AegisName: "Lute"
	Name: "Lute"
	Type: "IT_WEAPON"
	Buy: 24500
	Weight: 500
	Atk: 105
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MUSICAL"
},
{
	Id: 1906
	AegisName: "Lute_"
	Name: "Lute"
	Type: "IT_WEAPON"
	Buy: 24500
	Weight: 500
	Atk: 105
	Range: 1
	Slots: 3
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 14
	Subtype: "W_MUSICAL"
},
{
	Id: 1907
	AegisName: "Guitar"
	Name: "Guitar"
	Type: "IT_WEAPON"
	Buy: 47000
	Weight: 900
	Atk: 142
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
},
{
	Id: 1908
	AegisName: "Guitar_"
	Name: "Guitar"
	Type: "IT_WEAPON"
	Buy: 47000
	Weight: 900
	Atk: 142
	Range: 1
	Slots: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
},
{
	Id: 1909
	AegisName: "Harp"
	Name: "Harp"
	Type: "IT_WEAPON"
	Buy: 62000
	Weight: 900
	Atk: 114
	Range: 1
	Slots: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bInt,2; ">
},
{
	Id: 1910
	AegisName: "Harp_"
	Name: "Harp"
	Type: "IT_WEAPON"
	Buy: 62000
	Weight: 900
	Atk: 114
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bInt,2; ">
},
{
	Id: 1911
	AegisName: "Guh_Moon_Goh"
	Name: "Gumoongoh"
	Type: "IT_WEAPON"
	Buy: 54000
	Weight: 1300
	Atk: 126
	Range: 1
	Slots: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
},
{
	Id: 1912
	AegisName: "Guh_Moon_Goh_"
	Name: "Gumoongoh"
	Type: "IT_WEAPON"
	Buy: 54000
	Weight: 1300
	Atk: 126
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
},
{
	Id: 1913
	AegisName: "Electronic_Guitar"
	Name: "Electric Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1800
	Atk: 110
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_MUSICAL"
	Script: <"
		skill WZ_JUPITEL,1;
		bonus3 bAutoSpell,WZ_JUPITEL,1,100;
		bonus bAtkEle,Ele_Wind;
		bonus bInt,2;
		bonus bAgi,1;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1914
	AegisName: "Guitar_Of_Passion"
	Name: "Burning Passion Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 110
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1915
	AegisName: "Guitar_Of_Blue_Solo"
	Name: "Loner's Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 110
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bAtkEle,Ele_Water; ">
},
{
	Id: 1916
	AegisName: "Guitar_Of_Vast_Land"
	Name: "Green Acre Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 110
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1917
	AegisName: "Guitar_Of_Gentle_Breeze"
	Name: "Gentle Breeze Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 900
	Atk: 110
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 27
	Subtype: "W_MUSICAL"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1918
	AegisName: "Oriental_Lute"
	Name: "Oriental Lute"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 150
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_MUSICAL"
	Script: <"
		bonus2 bSkillAtk,CG_ARROWVULCAN,10;
		bonus2 bSkillAtk,BA_MUSICALSTRIKE,10;
	">
},
{
	Id: 1919
	AegisName: "Base_Guitar"
	Name: "Bass Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_MUSICAL"
	Script: <"
		bonus bSPGainValue,3;
		bonus4 bAutoSpellWhenHit,WZ_HEAVENDRIVE,3,30,1;
		bonus3 bAutoSpell,NPC_WIDECONFUSE,2,100;
	">
},
{
	Id: 1920
	AegisName: "Berserk_Guitar"
	Name: "Berserk Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1800
	Atk: 10
	Range: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_MUSICAL"
	Script: <"
		bonus bAspdRate,100;
		bonus bHPrecovRate,-100;
		bonus2 bHPLossRate,50,5000;
		bonus bDex,-readparam(bDex);
	">
},
{
	Id: 1921
	AegisName: "Guh_Moon_Gom"
	Name: "Gun Moon Gom"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1922
	AegisName: "Oriental_Lute_"
	Name: "Oriental Lute"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 150
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_MUSICAL"
	Script: <"
		bonus2 bSkillAtk,CG_ARROWVULCAN,10;
		bonus2 bSkillAtk,BA_MUSICALSTRIKE,10;
	">
},
{
	Id: 1923
	AegisName: "BF_Instrument1"
	Name: "Valorous Battlefield Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1924
	AegisName: "BF_Instrument2"
	Name: "Brave Battlefield Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bSkillAtk,CG_ARROWVULCAN,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1925
	AegisName: "Cello"
	Name: "Cello"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 1
	Slots: 3
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_MUSICAL"
	Script: <"
		bonus bAgi,2;
		bonus bDex,3;
		bonus2 bAddSkillBlow,BA_MUSICALSTRIKE,2;
		bonus2 bAddSkillBlow,CG_ARROWVULCAN,3;
	">
},
{
	Id: 1926
	AegisName: "Harp_Of_Nepenthes"
	Name: "Harp of Nepenthes"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 120
	Range: 1
	Slots: 2
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_MUSICAL"
	Script: <"
		bonus bInt,2;
		if( getrefine()>9 ) {
			bonus3 bAddEffOnSkill,BA_MUSICALSTRIKE,Eff_Stun,2000;
		}
		else {
			bonus3 bAddEffOnSkill,BA_MUSICALSTRIKE,Eff_Stun,1000;
		}

	">
},
{
	Id: 1927
	AegisName: "Krieger_Instrument1"
	Name: "Glorious Guitar"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) bonus4 bAutoSpellOnSkill,CG_ARROWVULCAN,CG_TAROTCARD,5,100;
	">
},
{
	Id: 1928
	AegisName: "Berserk_Guitar_I"
	Name: "Spirited Guitar"
	Type: "IT_WEAPON"
	Atk: 40
	Range: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAspdRate,100;
		bonus bHPrecovRate,-100;
		bonus2 bHPLossRate,50,5000;
		bonus bDex,-readparam(bDex);
	">
},
{
	Id: 1929
	AegisName: "Guitar_C"
	Name: "Guitar"
	Type: "IT_WEAPON"
	Atk: 177
	Range: 1
	Job: {
		Bard: true
	}
	Gender: "SEX_MALE"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_MUSICAL"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},

//== Whips =================================================
{
	Id: 1950
	AegisName: "Rope"
	Name: "Rope"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 400
	Atk: 45
	Range: 2
	Slots: 3
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_WHIP"
},
{
	Id: 1951
	AegisName: "Rope_"
	Name: "Rope"
	Type: "IT_WEAPON"
	Buy: 2500
	Weight: 400
	Atk: 45
	Range: 2
	Slots: 4
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	EquipLv: 3
	Subtype: "W_WHIP"
},
{
	Id: 1952
	AegisName: "Line"
	Name: "Whip"
	Type: "IT_WEAPON"
	Buy: 12000
	Weight: 300
	Atk: 80
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_WHIP"
},
{
	Id: 1953
	AegisName: "Line_"
	Name: "Whip"
	Type: "IT_WEAPON"
	Buy: 12000
	Weight: 300
	Atk: 80
	Range: 2
	Slots: 3
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_WHIP"
},
{
	Id: 1954
	AegisName: "Wire"
	Name: "Wire Whip"
	Type: "IT_WEAPON"
	Buy: 17500
	Weight: 1000
	Atk: 95
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_WHIP"
},
{
	Id: 1955
	AegisName: "Wire_"
	Name: "Wire Whip"
	Type: "IT_WEAPON"
	Buy: 17500
	Weight: 1000
	Atk: 95
	Range: 2
	Slots: 3
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 2
	EquipLv: 16
	Subtype: "W_WHIP"
},
{
	Id: 1956
	AegisName: "Rante"
	Name: "Rante Whip"
	Type: "IT_WEAPON"
	Buy: 32000
	Weight: 900
	Atk: 135
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
},
{
	Id: 1957
	AegisName: "Rante_"
	Name: "Rante Whip"
	Type: "IT_WEAPON"
	Buy: 32000
	Weight: 900
	Atk: 135
	Range: 2
	Slots: 1
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
},
{
	Id: 1958
	AegisName: "Tail"
	Name: "Tail Whip"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 700
	Atk: 105
	Range: 2
	Slots: 1
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bLuk,3; ">
},
{
	Id: 1959
	AegisName: "Tail_"
	Name: "Tail Whip"
	Type: "IT_WEAPON"
	Buy: 41000
	Weight: 700
	Atk: 105
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bLuk,3; ">
},
{
	Id: 1960
	AegisName: "Whip"
	Name: "Whip"
	Type: "IT_WEAPON"
	Buy: 38000
	Weight: 700
	Atk: 120
	Range: 2
	Slots: 1
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
},
{
	Id: 1961
	AegisName: "Whip_"
	Name: "Whip"
	Type: "IT_WEAPON"
	Buy: 38000
	Weight: 700
	Atk: 120
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
},
{
	Id: 1962
	AegisName: "Lariat"
	Name: "Lariat Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 100
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_WHIP"
	Script: <"
		bonus bDex,5;
		bonus bAgi,1;
	">
},
{
	Id: 1963
	AegisName: "Rapture_Rose"
	Name: "Rapture Rose"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 300
	Atk: 115
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_WHIP"
	Script: <"
		bonus bAtkEle,Ele_Poison;
		bonus2 bAddEff,Eff_Poison,5000;
	">
},
{
	Id: 1964
	AegisName: "Chemeti"
	Name: "Chemeti Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 135
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 44
	Subtype: "W_WHIP"
	Script: <"
		bonus bCritical,5;
		bonus bFlee,10;
		bonus bFlee2,2;
	">
},
{
	Id: 1965
	AegisName: "Whip_Of_Red_Flame"
	Name: "Red Flame Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bAtkEle,Ele_Fire; ">
},
{
	Id: 1966
	AegisName: "Whip_Of_Ice_Piece"
	Name: "Icicle Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bAtkEle,Ele_Water; ">
},
{
	Id: 1967
	AegisName: "Whip_Of_Earth"
	Name: "Gaia Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bAtkEle,Ele_Earth; ">
},
{
	Id: 1968
	AegisName: "Jump_Rope"
	Name: "Skipping Rope"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 400
	Atk: 120
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bCritical,20; ">
},
{
	Id: 1969
	AegisName: "Bladed_Whip"
	Name: "Blade Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1200
	Atk: 140
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus2 bAddEff,Eff_Bleeding,300; ">
},
{
	Id: 1970
	AegisName: "Queens_Whip"
	Name: "Queen's Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1100
	Atk: 150
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_WHIP"
	Script: <"
		bonus2 bSkillAtk,CG_ARROWVULCAN,10;
		bonus2 bSkillAtk,DC_THROWARROW,10;
	">
},
{
	Id: 1971
	AegisName: "Electric_Wire"
	Name: "Electric Wire"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 30
	Subtype: "W_WHIP"
	Script: <" bonus bAtkEle,Ele_Wind; ">
},
{
	Id: 1972
	AegisName: "Electric_Eel"
	Name: "Electric Eel"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2000
	Atk: 100
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_WHIP"
	Script: <"
		bonus bAtkEle,Ele_Wind;
		bonus bInt,2;
		bonus bAgi,2;
		bonus3 bAutoSpell,WZ_JUPITEL,3,20;
		if(getrefine()>0) bonus3 bAutoSpell,CG_ARROWVULCAN,getrefine(),50;
	">
},
{
	Id: 1973
	AegisName: "Sea_Witch_Foot"
	Name: "Sea Witch's Foot"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 110
	Range: 2
	Slots: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_WHIP"
	Script: <"
		bonus bSPGainValue,5;
		bonus4 bAutoSpellWhenHit,WZ_FROSTNOVA,3,50,1;
		bonus3 bAutoSpell,NPC_WIDESILENCE,2,100;
	">
},
{
	Id: 1974
	AegisName: "Carrot_Whip"
	Name: "Carrot Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1300
	Atk: 185
	Range: 2
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_WHIP"
	Script: <" if(getrefine()>0) bonus3 bAutoSpell,AL_INCAGI,getrefine(),10; ">
},
{
	Id: 1975
	AegisName: "Queen_Is_Whip"
	Name: "Queen Is Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 120
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 1
	Refine: false
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace, RC_All, 50; ">
},
{
	Id: 1976
	AegisName: "Queens_Whip_"
	Name: "Queen's Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1100
	Atk: 150
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 65
	Subtype: "W_WHIP"
	Script: <"
		bonus2 bSkillAtk,CG_ARROWVULCAN,10;
		bonus2 bSkillAtk,DC_THROWARROW,10;
	">
},
{
	Id: 1977
	AegisName: "BF_Whip1"
	Name: "Valorous Battle Lariat"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1978
	AegisName: "BF_Whip2"
	Name: "Brave Battle Lariat"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 80
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bSkillAtk,CG_ARROWVULCAN,20;
		bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 1979
	AegisName: "Stem_Of_Nepenthes"
	Name: "Stem of Nepenthes"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 120
	Range: 2
	Slots: 2
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_WHIP"
	Script: <"
		bonus bInt,2;
		if( getrefine()>=9 ) {
			bonus3 bAddEffOnSkill,DC_THROWARROW,Eff_Freeze,2000;
		}
		else {
			bonus3 bAddEffOnSkill,DC_THROWARROW,Eff_Freeze,1000;
		}

	">
},
{
	Id: 1980
	AegisName: "Whip_Of_Balance"
	Name: "Whip of Balance"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 700
	Atk: 110
	Range: 2
	Slots: 3
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 70
	Subtype: "W_WHIP"
	Script: <"
		bonus bAgi,2;
		bonus bDex,3;
		bonus2 bAddSkillBlow,DC_THROWARROW,2;
		bonus2 bAddSkillBlow,CG_ARROWVULCAN,3;
	">
},
{
	Id: 1981
	AegisName: "Krieger_Whip1"
	Name: "Glorious Lariat"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 50
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,95;
		bonus2 bIgnoreDefRate,RC_DemiPlayer,20;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bAddRace,RC_DemiPlayer,(getrefine()-4)*(getrefine()-4);
			bonus2 bIgnoreDefRate,RC_DemiPlayer,5;
		}
		if(getrefine()>8) bonus4 bAutoSpellOnSkill,CG_ARROWVULCAN,CG_TAROTCARD,5,100;
	">
},
{
	Id: 1982
	AegisName: "Phenomena_Whip"
	Name: "Phenomena Whip"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 160
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 4
	Refine: false
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus2 bSkillAtk,DC_THROWARROW,25;
	">
},
{
	Id: 1983
	AegisName: "Rante_C"
	Name: "Rante Whip"
	Type: "IT_WEAPON"
	Atk: 170
	Range: 2
	Job: {
		Bard: true
	}
	Loc: "EQP_WEAPON"
	WeaponLv: 3
	EquipLv: 1
	Refine: false
	Subtype: "W_WHIP"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddSize,Size_Small,40;
		bonus2 bAddSize,Size_Medium,40;
		bonus2 bAddSize,Size_Large,40;
	">
},

//== More Two-Handed Staves ================================
{
	Id: 2000
	AegisName: "Destruction_Rod"
	Name: "Staff of Destruction"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Wizard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSTAFF"
	Script: <"
		bonus bMatkRate,25+getrefine()/2;
		bonus bInt,3;
		bonus bAgi,10;
		bonus bUseSPrate,(getrefine()*2);
		bonus3 bAutoSpellWhenHit,WZ_JUPITEL,5,(getrefine()*20);
		bonus2 bCastrate,HW_MAGICPOWER,-50;
	">
},
{
	Id: 2001
	AegisName: "Divine_Cross"
	Name: "Divine Cross"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1500
	Atk: 120
	Range: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 70
	Subtype: "W_2HSTAFF"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15;
		bonus bDex,4;
		bonus2 bSubRace,RC_Demon,15;
		bonus2 bSubRace,RC_Undead,15;
	">
},
{
	Id: 2002
	AegisName: "Krieger_Twohand_Staff1"
	Name: "Glorious Destruction Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Atk: 70
	Range: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSTAFF"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,getrefine();
		bonus2 bMagicAddRace,RC_DemiPlayer,15;
		bonus2 bIgnoreMdefRate,RC_DemiPlayer,25;
		bonus bUnbreakableWeapon,0;
		if(getrefine()>5) {
			bonus2 bMagicAddRace,RC_DemiPlayer,(getrefine()-5)*2;
			bonus2 bIgnoreMdefRate,RC_DemiPlayer,5+(getrefine()-5)*2;
		}
		if(getrefine()>8) {
			bonus5 bAutoSpellOnSkill,WZ_STORMGUST,MG_SAFETYWALL,10,200,1;
			bonus5 bAutoSpellOnSkill,WZ_METEOR,MG_SAFETYWALL,10,200,1;
			bonus5 bAutoSpellOnSkill,WZ_VERMILION,MG_SAFETYWALL,10,200,1;
		}

	">
},
{
	Id: 2003
	AegisName: "Destruction_Rod_M"
	Name: "Staff of Destruction"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 2500
	Atk: 130
	Range: 1
	Slots: 1
	Job: {
		Wizard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 80
	Subtype: "W_2HSTAFF"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMatkRate,25+getrefine()/2;
		bonus bInt,3;
		bonus bAgi,10;
		bonus bUseSPrate,(getrefine()*2);
		bonus3 bAutoSpellWhenHit,WZ_JUPITEL,5,(getrefine()*20);
		bonus2 bCastrate,HW_MAGICPOWER,-50;
	">
},
{
	Id: 2004
	AegisName: "Kronos"
	Name: "Kronos"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 30
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 50
	Subtype: "W_2HSTAFF"
	Script: <"
		bonus bMatkRate,20;
		bonus bInt,3+(getrefine()/2);
		bonus bMaxHP,300+(50*getrefine()/2);
		autobonus "{ bonus bMatkRate,12; bonus bUseSPrate,20; }",1,5000,BF_MAGIC,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
	">
},
{
	Id: 2005
	AegisName: "Dea_Staff"
	Name: "Dea Staff"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1000
	Atk: 30
	Range: 1
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMS"
	WeaponLv: 3
	EquipLv: 50
	Subtype: "W_2HSTAFF"
	Script: <"
		bonus bAtkEle,Ele_Holy;
		bonus bMatkRate,15+getrefine()/2;
		bonus bInt,6;
		bonus bVit,2;
		autobonus3 "{ }",20,1000,AL_HEAL,"{ specialeffect(EF_MAGICALATTHIT, AREA, playerattached()); heal 0,200; }";
	">
},
{
	Id: 2006
	AegisName: "G_Staff_Of_Light"
	Name: "Staff Of Light"
	Type: "IT_WEAPON"
	Buy: 20
	Weight: 1900
	Atk: 80
	Range: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMS"
	WeaponLv: 4
	EquipLv: 60
	Subtype: "W_2HSTAFF"
	Script: <"
		//bonus bMatk,150;
		bonus bAtkEle,Ele_Holy;
		bonus bInt,6;
	">
},
{
	Id: 2039
	AegisName: "Wizardy_Staff_IL"
	Name: "Wizardy_Staff_IL"
},
{
	Id: 2046
	AegisName: "Rebeginer_WL_Staff"
	Name: "Rebeginer_WL_Staff"
},
{
	Id: 2048
	AegisName: "Iron_Staff"
	Name: "Iron_Staff"
},
{
	Id: 2051
	AegisName: "Survival_Staff_IL"
	Name: "Survival_Staff_IL"
},
{
	Id: 2054
	AegisName: "Evt_Iron_Staff"
	Name: "Evt_Iron_Staff"
},
{
	Id: 2058
	AegisName: "Ein_BHSTAFF"
	Name: "Ein_BHSTAFF"
},

//== Shields ===============================================
{
	Id: 2101
	AegisName: "Guard"
	Name: "Guard"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 300
	Def: 3
	Loc: "EQP_SHIELD"
	ViewSprite: 1
},
{
	Id: 2102
	AegisName: "Guard_"
	Name: "Guard"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_SHIELD"
	ViewSprite: 1
},
{
	Id: 2103
	AegisName: "Buckler"
	Name: "Buckler"
	Type: "IT_ARMOR"
	Buy: 14000
	Weight: 600
	Def: 4
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Thief: true
		Knight: true
		Priest: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Monk: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 2
},
{
	Id: 2104
	AegisName: "Buckler_"
	Name: "Buckler"
	Type: "IT_ARMOR"
	Buy: 14000
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Thief: true
		Knight: true
		Priest: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Monk: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 2
},
{
	Id: 2105
	AegisName: "Shield"
	Name: "Shield"
	Type: "IT_ARMOR"
	Buy: 56000
	Weight: 1300
	Def: 6
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 3
},
{
	Id: 2106
	AegisName: "Shield_"
	Name: "Shield"
	Type: "IT_ARMOR"
	Buy: 56000
	Weight: 1300
	Def: 6
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 3
},
{
	Id: 2107
	AegisName: "Mirror_Shield"
	Name: "Mirror Shield"
	Type: "IT_ARMOR"
	Buy: 60000
	Weight: 1000
	Def: 4
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
		Star_Gladiator: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 4
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2108
	AegisName: "Mirror_Shield_"
	Name: "Mirror Shield"
	Type: "IT_ARMOR"
	Buy: 60000
	Weight: 1000
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
		Star_Gladiator: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 4
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2109
	AegisName: "Memorize_Book"
	Name: "Memory Book"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 5
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
	">
},
{
	Id: 2110
	AegisName: "Holy_Guard"
	Name: "Holy Guard"
	Type: "IT_ARMOR"
	Buy: 85000
	Weight: 1400
	Def: 5
	Job: {
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 68
	Refine: false
	ViewSprite: 4
	Script: <"
		bonus bVit,2;
		bonus bMdef,2;
	">
},
{
	Id: 2111
	AegisName: "Herald_Of_GOD"
	Name: "Sacred Mission"
	Type: "IT_ARMOR"
	Buy: 128000
	Weight: 1600
	Def: 5
	Job: {
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 83
	ViewSprite: 4
	Script: <"
		bonus bVit,3;
		bonus bInt,2;
		bonus bMdef,3;
		bonus bUnbreakableShield,0;
	">
},
{
	Id: 2112
	AegisName: "Novice_Guard"
	Name: "Novice Guard"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 1
	Def: 3
	Job: {
		Novice: true
	}
	Loc: "EQP_SHIELD"
	Refine: false
	ViewSprite: 1
},
{
	Id: 2113
	AegisName: "Novice_Shield"
	Name: "Novice Shield"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 1000
	Def: 3
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 40
	ViewSprite: 3
	Script: <"
		bonus2 bSubEle,Ele_Water,20;
		bonus2 bSubEle,Ele_Earth,20;
		bonus2 bSubEle,Ele_Fire,20;
		bonus2 bSubEle,Ele_Wind,20;
		bonus2 bSubEle,Ele_Poison,20;
		bonus2 bSubEle,Ele_Ghost,20;
		bonus2 bSubEle,Ele_Undead,20;
	">
},
{
	Id: 2114
	AegisName: "Stone_Buckler"
	Name: "Stone Buckler"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 1500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHIELD"
	EquipLv: 65
	ViewSprite: 2
	Script: <" bonus2 bSubSize,Size_Large,5; ">
},
{
	Id: 2115
	AegisName: "Valkyrjas_Shield"
	Name: "Valkyrja's Shield"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHIELD"
	EquipLv: 65
	ViewSprite: 4
	Script: <"
		bonus2 bSubEle,Ele_Water,20;
		bonus2 bSubEle,Ele_Fire,20;
		bonus2 bSubEle,Ele_Dark,20;
		bonus2 bSubEle,Ele_Undead,20;
		bonus bMdef,5;
	">
},
{
	Id: 2116
	AegisName: "Angels_Safeguard"
	Name: "Angelic Guard"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 400
	Def: 3
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 20
	ViewSprite: 1
	Script: <" bonus2 bSubRace,RC_Demon,5; ">
},
{
	Id: 2117
	AegisName: "Arm_Guard"
	Name: "Arm Guard"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 150
	Def: 5
	Job: {
		Ninja: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 20
	ViewSprite: 1
},
{
	Id: 2118
	AegisName: "Arm_Guard_"
	Name: "Arm Guard"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 150
	Def: 5
	Slots: 1
	Job: {
		Ninja: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 20
	ViewSprite: 1
},
{
	Id: 2119
	AegisName: "Improved_Arm_Guard"
	Name: "Advanced Arm Guard"
	Type: "IT_ARMOR"
	Buy: 40000
	Weight: 150
	Def: 4
	Job: {
		Ninja: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 50
	ViewSprite: 1
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2120
	AegisName: "Improved_Arm_Guard_"
	Name: "Advanced Arm Guard"
	Type: "IT_ARMOR"
	Buy: 40000
	Weight: 150
	Def: 4
	Slots: 1
	Job: {
		Ninja: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 50
	ViewSprite: 1
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2121
	AegisName: "Memorize_Book_"
	Name: "Memory Book"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_SHIELD"
	ViewSprite: 5
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
	">
},
{
	Id: 2122
	AegisName: "Platinum_Shield"
	Name: "Platinum Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1200
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 68
	ViewSprite: 4
	Script: <"
		bonus bMdef,5;
		bonus2 bSubSize,Size_Medium,15;
		bonus2 bSubSize,Size_Large,15;
		bonus2 bSubRace,RC_Undead,10;
		bonus5 bAutoSpellWhenHit,NPC_MAGICMIRROR,2,150,BF_MAGIC,0;
	">
},
{
	Id: 2123
	AegisName: "Orleans_Server"
	Name: "Orleans's Server"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 55
	ViewSprite: 4
	Script: <"
		bonus bMdef,2;
		bonus bMagicDamageReturn,5;
	">
},
{
	Id: 2124
	AegisName: "Thorny_Buckler"
	Name: "Thorny Buckler"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 55
	ViewSprite: 2
	Script: <" bonus bMdef,2; ">
},
{
	Id: 2125
	AegisName: "Strong_Shield"
	Name: "Strong Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 75
	ViewSprite: 4
	Script: <"
		bonus bNoKnockback,0;
		bonus2 bSubEle,Ele_Neutral,-20;
		bonus2 bSubEle,Ele_Fire,-20;
		bonus2 bSubEle,Ele_Water,-20;
		bonus2 bSubEle,Ele_Wind,-20;
		bonus2 bSubEle,Ele_Earth,-20;
		bonus2 bSubEle,Ele_Dark,-20;
		bonus2 bSubEle,Ele_Holy,-20;
		bonus2 bSubEle,Ele_Ghost,-20;
	">
},
{
	Id: 2126
	AegisName: "Guyak_Shield"
	Name: "Guyak Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHIELD"
	EquipLv: 75
	ViewSprite: 2
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2127
	AegisName: "Secular_Mission"
	Name: "Secular Mission"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 10
	Loc: "EQP_SHIELD"
	Refine: false
	ViewSprite: 4
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bSubRace, RC_All, 25; ">
},
{
	Id: 2128
	AegisName: "Herald_Of_GOD_"
	Name: "Sacred Mission"
	Type: "IT_ARMOR"
	Buy: 128000
	Weight: 1600
	Def: 5
	Slots: 1
	Job: {
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 83
	ViewSprite: 4
	Script: <"
		bonus bVit,3;
		bonus bInt,2;
		bonus bMdef,3;
		bonus bUnbreakableShield,0;
	">
},
{
	Id: 2129
	AegisName: "Exorcism_Bible"
	Name: "Exorcism Bible"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 5
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 50
	ViewSprite: 5
	Script: <"
		bonus bHPrecovRate,3;
		bonus bSPrecovRate,3;
		bonus bInt,1;
	">
},
{
	Id: 2130
	AegisName: "Cross_Shield"
	Name: "Cross Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Def: 6
	Slots: 1
	Job: {
		Crusader: true
	}
	Loc: "EQP_SHIELD"
	EquipLv: 80
	ViewSprite: 4
	Script: <"
		bonus bStr,1;
		bonus2 bSkillAtk,PA_SHIELDCHAIN,30;
		bonus2 bSkillAtk,CR_SHIELDBOOMERANG,30;
		bonus bUseSPrate,10;
	">
},
{
	Id: 2131
	AegisName: "Magic_Study_Vol1"
	Name: "Magic Bible Vol1"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 2
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 70
	ViewSprite: 5
	Script: <"
		bonus bMdef,3;
		bonus bInt,2;
		bonus2 bAddEffWhenHit,Eff_Stun,1000;
	">
},
{
	Id: 2132
	AegisName: "Shelter_Resistance"
	Name: "Shell Of Resistance"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 9
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	Refine: false
	ViewSprite: 2
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Neutral,20;
		bonus2 bSubEle,Ele_Water,20;
		bonus2 bSubEle,Ele_Earth,20;
		bonus2 bSubEle,Ele_Fire,20;
		bonus2 bSubEle,Ele_Wind,20;
		bonus2 bSubEle,Ele_Poison,20;
		bonus2 bSubEle,Ele_Holy,20;
		bonus2 bSubEle,Ele_Dark,20;
		bonus2 bSubEle,Ele_Ghost,20;
		bonus2 bSubEle,Ele_Undead,20;
		bonus bShortWeaponDamageReturn,1;
	">
},
{
	Id: 2133
	AegisName: "Tournament_Shield"
	Name: "Tournament Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 50
	ViewSprite: 4
	Script: <"
		bonus2 bAddRace, RC_All, 1;
		if (Class == Job_Lord_Knight)
			bonus bAspdRate,-5;
	">
},
{
	Id: 2134
	AegisName: "Shield_Of_Naga"
	Name: "Shield of Naga"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 70
	ViewSprite: 2
	Script: <"
		bonus bMdef,3;
		autobonus2 "{ bonus bShortWeaponDamageReturn,(getrefine()*3); }",10,5000,BF_WEAPON,"{ specialeffect(EF_GUARD, AREA, playerattached()); }";
	">
},
{
	Id: 2135
	AegisName: "Shadow_Guard"
	Name: "Shadow Guard"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 4
	Slots: 1
	Job: {
		Rogue: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 70
	ViewSprite: 2
},
{
	Id: 2136
	AegisName: "Cracked_Buckler"
	Name: "Cracked Buckler"
	Type: "IT_ARMOR"
	Def: 5
	Loc: "EQP_SHIELD"
	Refine: false
	ViewSprite: 2
	Script: <"
		bonus bAgi,2;
		bonus2 bAddEle,Ele_Neutral,-10;
		bonus3 bAutoSpellWhenHit,PR_KYRIE,1,50;
		bonus bMdef,1;
	">
},
{
	Id: 2137
	AegisName: "Valkyrjas_Shield_C"
	Name: "Neo Valkyrja's Shield"
	Type: "IT_ARMOR"
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 95
	Refine: false
	ViewSprite: 4
	Script: <"
		bonus2 bSubEle,Ele_Water,20;
		bonus2 bSubEle,Ele_Fire,20;
		bonus2 bSubEle,Ele_Dark,20;
		bonus2 bSubEle,Ele_Undead,20;
		bonus bMdef,5;
	">
},
{
	Id: 2138
	AegisName: "Bradium_Shield"
	Name: "Bradium Shield"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1800
	Def: 5
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHIELD"
	EquipLv: 65
	ViewSprite: 3
	Script: <"
		bonus2 bSkillAtk,CR_SHIELDBOOMERANG,60;
		bonus bAgi,-1;
		bonus bMaxHP,500;
	">
},
{
	Id: 2139
	AegisName: "Flame_Thrower"
	Name: "Flame Thrower"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 2000
	Def: 60
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_SHIELD"
	EquipLv: 99
	Refine: false
	ViewSprite: 1
},

//== GM Shield =============================================
{
	Id: 2199
	AegisName: "Ahura_Mazda"
	Name: "Ahura Mazdah"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 10
	Def: 100
	Loc: "EQP_SHIELD"
	EquipLv: 1
	Script: <"
		bonus bAllStats,50;
		bonus bMdef,99;
		bonus bShortWeaponDamageReturn,100;
		bonus2 bSubRace,RC_DemiPlayer,95;
		skill CR_FULLPROTECTION,5;
		skill WZ_ESTIMATION,1;
		skill ST_FULLSTRIP,5;
		skill HW_MAGICPOWER,10;
		bonus bMaxHPrate,200;
		bonus bNoGemStone,0;
		bonus bSpeedRate,25;
	">
	OnEquipScript: <" sc_start4 SC_ENDURE,60000,10,0,0,1; ">
	OnUnequipScript: <" sc_end SC_ENDURE; ">
},

//== Headgears =============================================
{
	Id: 2201
	AegisName: "Sunglasses"
	Name: "Sunglasses"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 12
	Script: <" bonus2 bResEff,Eff_Blind,500; ">
},
{
	Id: 2202
	AegisName: "Sunglasses_"
	Name: "Sunglasses"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 100
	Slots: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 12
	Script: <" bonus2 bResEff,Eff_Blind,500; ">
},
{
	Id: 2203
	AegisName: "Glasses"
	Name: "Glasses"
	Type: "IT_ARMOR"
	Buy: 4000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 3
},
{
	Id: 2204
	AegisName: "Glasses_"
	Name: "Glasses"
	Type: "IT_ARMOR"
	Buy: 4000
	Weight: 100
	Slots: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 3
},
{
	Id: 2205
	AegisName: "Divers_Goggles"
	Name: "Diver Goggles"
	Type: "IT_ARMOR"
	Buy: 3500
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 10
},
{
	Id: 2206
	AegisName: "Wedding_Veil"
	Name: "Wedding Veil"
	Type: "IT_ARMOR"
	Buy: 23000
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 44
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2207
	AegisName: "Fancy_Flower"
	Name: "Fancy Flower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 4
	Script: <" bonus2 bSubRace,RC_Plant,10; ">
},
{
	Id: 2208
	AegisName: "Ribbon"
	Name: "Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 17
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2209
	AegisName: "Ribbon_"
	Name: "Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 17
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2210
	AegisName: "Hair_Band"
	Name: "Hair Band"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 9
},
{
	Id: 2211
	AegisName: "Bandana"
	Name: "Bandana"
	Type: "IT_ARMOR"
	Buy: 400
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 6
},
{
	Id: 2212
	AegisName: "Eye_Bandage"
	Name: "Eye Patch"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 13
},
{
	Id: 2213
	AegisName: "Cat_Hairband"
	Name: "Kitty Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 2
},
{
	Id: 2214
	AegisName: "Bunny_Band"
	Name: "Bunny Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 15
	Script: <" bonus bLuk,2; ">
},
{
	Id: 2215
	AegisName: "Flower_Hairband"
	Name: "Flower Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 5
},
{
	Id: 2216
	AegisName: "Biretta"
	Name: "Biretta"
	Type: "IT_ARMOR"
	Buy: 9000
	Weight: 100
	Def: 4
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 11
},
{
	Id: 2217
	AegisName: "Biretta_"
	Name: "Biretta"
	Type: "IT_ARMOR"
	Buy: 9000
	Weight: 100
	Def: 4
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 11
},
{
	Id: 2218
	AegisName: "Flu_Mask"
	Name: "Flu Mask"
	Type: "IT_ARMOR"
	Buy: 300
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 8
	Script: <" bonus2 bResEff,Eff_Silence,1000; ">
},
{
	Id: 2219
	AegisName: "Flu_Mask_"
	Name: "Flu Mask"
	Type: "IT_ARMOR"
	Buy: 300
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 8
	Script: <" bonus2 bResEff,Eff_Silence,1000; ">
},
{
	Id: 2220
	AegisName: "Hat"
	Name: "Hat"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 16
},
{
	Id: 2221
	AegisName: "Hat_"
	Name: "Hat"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 16
},
{
	Id: 2222
	AegisName: "Turban"
	Name: "Turban"
	Type: "IT_ARMOR"
	Buy: 4500
	Weight: 300
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 7
},
{
	Id: 2223
	AegisName: "Turban_"
	Name: "Turban"
	Type: "IT_ARMOR"
	Buy: 4500
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 7
},
{
	Id: 2224
	AegisName: "Goggle"
	Name: "Goggles"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 1
},
{
	Id: 2225
	AegisName: "Goggle_"
	Name: "Goggles"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 1
},
{
	Id: 2226
	AegisName: "Cap"
	Name: "Cap"
	Type: "IT_ARMOR"
	Buy: 12000
	Weight: 400
	Def: 4
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 14
},
{
	Id: 2227
	AegisName: "Cap_"
	Name: "Cap"
	Type: "IT_ARMOR"
	Buy: 12000
	Weight: 400
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 14
},
{
	Id: 2228
	AegisName: "Helm"
	Name: "Helm"
	Type: "IT_ARMOR"
	Buy: 44000
	Weight: 600
	Def: 6
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 40
},
{
	Id: 2229
	AegisName: "Helm_"
	Name: "Helm"
	Type: "IT_ARMOR"
	Buy: 44000
	Weight: 600
	Def: 6
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 40
},
{
	Id: 2230
	AegisName: "Gemmed_Sallet"
	Name: "Gemmed Sallet"
	Type: "IT_ARMOR"
	Buy: 50000
	Weight: 500
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2231
	AegisName: "Gemmed_Sallet_"
	Name: "Gemmed Sallet"
	Type: "IT_ARMOR"
	Buy: 50000
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2232
	AegisName: "Circlet"
	Name: "Circlet"
	Type: "IT_ARMOR"
	Buy: 7500
	Weight: 300
	Def: 3
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 18
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2233
	AegisName: "Circlet_"
	Name: "Circlet"
	Type: "IT_ARMOR"
	Buy: 7500
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 18
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2234
	AegisName: "Tiara"
	Name: "Tiara"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 19
	Script: <" bonus bInt,2; ">
},
{
	Id: 2235
	AegisName: "Crown"
	Name: "Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Gender: "SEX_MALE"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 45
	Script: <" bonus bInt,2; ">
},
{
	Id: 2236
	AegisName: "Santas_Hat"
	Name: "Santa Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 20
	Script: <"
		bonus bMdef,1;
		bonus bLuk,1;
	">
},
{
	Id: 2237
	AegisName: "Weird_Goatee"
	Name: "Bandit Beard"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 21
},
/*
{
	Id: 2238
	AegisName: "Weird_Moustache"
	Name: "Moustache"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 22
},
*/
{
	Id: 2239
	AegisName: "One_Eyed_Glass"
	Name: "Monocle"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 23
},
{
	Id: 2240
	AegisName: "Beard"
	Name: "Beard"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 24
	Sprite: 2241
},
{
	Id: 2241
	AegisName: "Granpa_Beard"
	Name: "Grampa Beard"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 25
},
{
	Id: 2242
	AegisName: "Luxury_Sunglasses"
	Name: "Purple Glasses"
	Type: "IT_ARMOR"
	Buy: 24000
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 26
	Script: <" bonus2 bResEff,Eff_Blind,1000; ">
},
{
	Id: 2243
	AegisName: "Spinning_Eyes"
	Name: "Geek Glasses"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 27
	Script: <" bonus2 bResEff,Eff_Blind,1500; ">
},
{
	Id: 2244
	AegisName: "Big_Sis_Ribbon"
	Name: "Big Ribbon"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 200
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 28
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2245
	AegisName: "Sweet_Gents"
	Name: "Sweet Gent"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 400
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 29
},
{
	Id: 2246
	AegisName: "Golden_Gear"
	Name: "Golden Gear"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 30
	Script: <" bonus bUnbreakableHelm,0; ">
},
{
	Id: 2247
	AegisName: "Oldmans_Romance"
	Name: "Romantic Gent"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 400
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 31
},
{
	Id: 2248
	AegisName: "Western_Grace"
	Name: "Western Grace"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 400
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 32
},
{
	Id: 2249
	AegisName: "Coronet"
	Name: "Coronet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 33
	Script: <" bonus bInt,1; ">
},
{
	Id: 2250
	AegisName: "Fillet"
	Name: "Cute Ribbon"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 34
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 2251
	AegisName: "Holy_Bonnet"
	Name: "Monk Hat"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Def: 5
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 35
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2252
	AegisName: "Star_Sparkling"
	Name: "Wizard Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 36
	Script: <" bonus bMaxSP,100; ">
},
{
	Id: 2253
	AegisName: "Sunflower"
	Name: "Sunflower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 37
	Script: <" bonus2 bSubRace,RC_Insect,10; ">
},
{
	Id: 2254
	AegisName: "Angelic_Chain"
	Name: "Angel Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 38
	Script: <"
		bonus bMdef,3;
		bonus bAgi,1;
		bonus bLuk,1;
		bonus2 bSubRace,RC_Demon,3;
	">
},
{
	Id: 2255
	AegisName: "Satanic_Chain"
	Name: "Evil Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 39
	Script: <"
		bonus bMdef,2;
		bonus bStr,1;
		bonus2 bSubRace,RC_Angel,3;
	">
},
{
	Id: 2256
	AegisName: "Magestic_Goat"
	Name: "Majestic Goat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 41
	Script: <" bonus bStr,1; ">
},
{
	Id: 2257
	AegisName: "Snowy_Horn"
	Name: "Unicorn Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 42
},
{
	Id: 2258
	AegisName: "Sharp_Gear"
	Name: "Spiky Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 6
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Thief: true
		Knight: true
		Priest: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Monk: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 43
},
{
	Id: 2259
	AegisName: "Mini_Propeller"
	Name: "Mini Propeller"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 46
},
{
	Id: 2260
	AegisName: "Mini_Glasses"
	Name: "Mini Glasses"
	Type: "IT_ARMOR"
	Buy: 28000
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 47
},
{
	Id: 2261
	AegisName: "Prontera_Army_Cap"
	Name: "Army Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 48
},
{
	Id: 2262
	AegisName: "Pierrot_Nose"
	Name: "Clown Nose"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 49
},
{
	Id: 2263
	AegisName: "Gangster_Patch"
	Name: "Zorro Masque"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 50
},
{
	Id: 2264
	AegisName: "Munak_Turban"
	Name: "Munak Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 51
	Script: <" bonus2 bSubRace,RC_Undead,10; ">
},
{
	Id: 2265
	AegisName: "Ganster_Mask"
	Name: "Gangster Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 52
	Script: <" bonus2 bResEff,Eff_Silence,1500; ">
},
{
	Id: 2266
	AegisName: "Iron_Cane"
	Name: "Iron Cain"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 50
	Refine: false
	ViewSprite: 53
},
{
	Id: 2267
	AegisName: "Cigar"
	Name: "Cigarette"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 54
	Script: <" bonus2 bSubRace,RC_Insect,3; ">
},
{
	Id: 2268
	AegisName: "Smoking_Pipe"
	Name: "Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 55
	Script: <" bonus2 bSubRace,RC_Insect,3; ">
},
{
	Id: 2269
	AegisName: "Centimental_Flower"
	Name: "Romantic Flower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 56
	Script: <" bonus2 bSubRace,RC_Plant,3; ">
},
{
	Id: 2270
	AegisName: "Centimental_Leaf"
	Name: "Romantic Leaf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 57
	Script: <" bonus2 bSubRace,RC_Plant,3; ">
},
{
	Id: 2271
	AegisName: "Jack_A_Dandy"
	Name: "Jack be Dandy"
	Type: "IT_ARMOR"
	Buy: 45000
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 58
},
{
	Id: 2272
	AegisName: "Stop_Post"
	Name: "Stop Post"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 59
},
{
	Id: 2273
	AegisName: "Doctor_Cap"
	Name: "Doctor Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 60
	Script: <" bonus bInt,1; ">
},
{
	Id: 2274
	AegisName: "Ghost_Bandana"
	Name: "Ghost Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 61
	Script: <"
		bonus bAgi,2;
		bonus2 bSubEle,Ele_Ghost,10;
	">
},
{
	Id: 2275
	AegisName: "Red_Bandana"
	Name: "Red Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 62
},
{
	Id: 2276
	AegisName: "Eagle_Eyes"
	Name: "Angled Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 63
},
{
	Id: 2277
	AegisName: "Nurse_Cap"
	Name: "Nurse Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 64
	Script: <" bonus bInt,1; ">
},
{
	Id: 2278
	AegisName: "Mr_Smile"
	Name: "Mr. Smile"
	Type: "IT_ARMOR"
	Buy: 60
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 65
},
{
	Id: 2279
	AegisName: "Bomb_Wick"
	Name: "Bomb Wick"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 66
},
{
	Id: 2280
	AegisName: "Sahkkat"
	Name: "Sakkat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 67
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2281
	AegisName: "Phantom_Of_Opera"
	Name: "Opera Masque"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 68
},
{
	Id: 2282
	AegisName: "Spirit_Chain"
	Name: "Halo"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 69
	Script: <" bonus2 bSubEle,Ele_Holy,15; ">
},
{
	Id: 2283
	AegisName: "Ear_Mufs"
	Name: "Ear Muffs"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 70
	Script: <" bonus2 bResEff,Eff_Curse,1000; ">
},
{
	Id: 2284
	AegisName: "Antler"
	Name: "Antlers"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 71
},
{
	Id: 2285
	AegisName: "Apple_Of_Archer"
	Name: "Apple of Archer"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 72
	Script: <" bonus bDex,3; ">
},
{
	Id: 2286
	AegisName: "Elven_Ears"
	Name: "Elven Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 73
},
{
	Id: 2287
	AegisName: "Pirate_Bandana"
	Name: "Pirate Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 74
	Script: <" bonus bStr,1; ">
},
{
	Id: 2288
	AegisName: "Mr_Scream"
	Name: "Mr. Scream"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 75
},
{
	Id: 2289
	AegisName: "Poo_Poo_Hat"
	Name: "Poo Poo Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 76
	Script: <" bonus2 bSubRace,RC_DemiPlayer,10; ">
},
{
	Id: 2290
	AegisName: "Funeral_Costume"
	Name: "Funeral Hat"
	Type: "IT_ARMOR"
	Buy: 3000
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 77
},
{
	Id: 2291
	AegisName: "Masquerade"
	Name: "Masquerade"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 78
	Script: <" bonus2 bAddRace,RC_DemiPlayer,3; ">
},
{
	Id: 2292
	AegisName: "Welding_Mask"
	Name: "Welding Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 79
	Script: <" bonus2 bSubEle,Ele_Fire,10; ">
},
{
	Id: 2293
	AegisName: "Pretend_Murdered"
	Name: "Pretend Murdered"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 80
},
{
	Id: 2294
	AegisName: "Star_Dust"
	Name: "Stellar"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 81
},
{
	Id: 2295
	AegisName: "Blinker"
	Name: "Blinker"
	Type: "IT_ARMOR"
	Buy: 1500
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 82
	Script: <" bonus2 bResEff,Eff_Blind,10000; ">
},
{
	Id: 2296
	AegisName: "Binoculars"
	Name: "Binoculars"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 50
	Refine: false
	ViewSprite: 83
	Script: <" bonus bDex,1; ">
},
{
	Id: 2297
	AegisName: "Goblini_Mask"
	Name: "Goblin Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 84
},
{
	Id: 2298
	AegisName: "Green_Feeler"
	Name: "Green Feeler"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 85
},
{
	Id: 2299
	AegisName: "Viking_Helm"
	Name: "Orc Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 86
},

//== Armors ================================================
{
	Id: 2301
	AegisName: "Cotton_Shirt"
	Name: "Cotton Shirt"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 1
	Loc: "EQP_ARMOR"
},
{
	Id: 2302
	AegisName: "Cotton_Shirt_"
	Name: "Cotton Shirt"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_ARMOR"
},
{
	Id: 2303
	AegisName: "Leather_Jacket"
	Name: "Jacket"
	Type: "IT_ARMOR"
	Buy: 200
	Weight: 200
	Def: 2
	Loc: "EQP_ARMOR"
},
{
	Id: 2304
	AegisName: "Leather_Jacket_"
	Name: "Jacket"
	Type: "IT_ARMOR"
	Buy: 200
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_ARMOR"
},
{
	Id: 2305
	AegisName: "Adventure_Suit"
	Name: "Adventurer's Suit"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 300
	Def: 3
	Loc: "EQP_ARMOR"
},
{
	Id: 2306
	AegisName: "Adventureres_Suit_"
	Name: "Adventurer's Suit"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_ARMOR"
},
{
	Id: 2307
	AegisName: "Mantle"
	Name: "Mantle"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 600
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2308
	AegisName: "Mantle_"
	Name: "Mantle"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2309
	AegisName: "Coat"
	Name: "Coat"
	Type: "IT_ARMOR"
	Buy: 22000
	Weight: 1200
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2310
	AegisName: "Coat_"
	Name: "Coat"
	Type: "IT_ARMOR"
	Buy: 22000
	Weight: 1200
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2311
	AegisName: "Mink_Coat"
	Name: "Mink Coat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2300
	Def: 6
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 30
},
{
	Id: 2312
	AegisName: "Padded_Armor"
	Name: "Padded Armor"
	Type: "IT_ARMOR"
	Buy: 48000
	Weight: 2800
	Def: 7
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2313
	AegisName: "Padded_Armor_"
	Name: "Padded Armor"
	Type: "IT_ARMOR"
	Buy: 48000
	Weight: 2800
	Def: 7
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2314
	AegisName: "Chain_Mail"
	Name: "Chain Mail"
	Type: "IT_ARMOR"
	Buy: 65000
	Weight: 3300
	Def: 8
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2315
	AegisName: "Chain_Mail_"
	Name: "Chain Mail"
	Type: "IT_ARMOR"
	Buy: 65000
	Weight: 3300
	Def: 8
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2316
	AegisName: "Plate_Armor"
	Name: "Full Plate"
	Type: "IT_ARMOR"
	Buy: 80000
	Weight: 4500
	Def: 10
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 40
},
{
	Id: 2317
	AegisName: "Plate_Armor_"
	Name: "Full Plate"
	Type: "IT_ARMOR"
	Buy: 80000
	Weight: 4500
	Def: 10
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 40
},
{
	Id: 2318
	AegisName: "Clothes_Of_The_Lord"
	Name: "Lord's Clothes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 8
	Slots: 1
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bMdef,5;
		bonus bInt,1;
	">
},
{
	Id: 2319
	AegisName: "Glittering_Clothes"
	Name: "Glittering Jacket"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 7
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 60
	Script: <"
		bonus bMdef,5;
		bonus2 bAddEff,Eff_Blind,300;
	">
},
{
	Id: 2320
	AegisName: "Formal_Suit"
	Name: "Formal Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2321
	AegisName: "Silk_Robe"
	Name: "Silk Robe"
	Type: "IT_ARMOR"
	Buy: 8000
	Weight: 400
	Def: 3
	Job: {
		Swordsman: true
		Magician: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Sage: true
		Alchemist: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,10; ">
},
{
	Id: 2322
	AegisName: "Silk_Robe_"
	Name: "Silk Robe"
	Type: "IT_ARMOR"
	Buy: 8000
	Weight: 400
	Def: 3
	Slots: 1
	Job: {
		Swordsman: true
		Magician: true
		Acolyte: true
		Merchant: true
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Crusader: true
		Monk: true
		Sage: true
		Alchemist: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,10; ">
},
{
	Id: 2323
	AegisName: "Scapulare"
	Name: "Scapulare"
	Type: "IT_ARMOR"
	Buy: 6500
	Weight: 400
	Def: 4
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2324
	AegisName: "Scapulare_"
	Name: "Scapulare"
	Type: "IT_ARMOR"
	Buy: 6500
	Weight: 400
	Def: 4
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2325
	AegisName: "Saint_Robe"
	Name: "Saint's Robe"
	Type: "IT_ARMOR"
	Buy: 54000
	Weight: 600
	Def: 6
	Job: {
		Acolyte: true
		Merchant: true
		Priest: true
		Blacksmith: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2326
	AegisName: "Saint_Robe_"
	Name: "Saint's Robe"
	Type: "IT_ARMOR"
	Buy: 54000
	Weight: 600
	Def: 6
	Slots: 1
	Job: {
		Acolyte: true
		Merchant: true
		Priest: true
		Blacksmith: true
		Monk: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2327
	AegisName: "Holy_Robe"
	Name: "Holy Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1700
	Def: 7
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 60
	Script: <"
		bonus bMdef,5;
		bonus2 bSubRace,RC_Demon,15;
		bonus2 bSubEle,Ele_Dark,10;
	">
},
{
	Id: 2328
	AegisName: "Wooden_Mail"
	Name: "Wooden Mail"
	Type: "IT_ARMOR"
	Buy: 5500
	Weight: 1000
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2329
	AegisName: "Wooden_Mail_"
	Name: "Wooden Mail"
	Type: "IT_ARMOR"
	Buy: 5500
	Weight: 1000
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2330
	AegisName: "Tights"
	Name: "Tights"
	Type: "IT_ARMOR"
	Buy: 71000
	Weight: 500
	Def: 6
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDex,1; ">
},
{
	Id: 2331
	AegisName: "Tights_"
	Name: "Tights"
	Type: "IT_ARMOR"
	Buy: 71000
	Weight: 500
	Def: 6
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDex,1; ">
},
{
	Id: 2332
	AegisName: "Silver_Robe"
	Name: "Silver Robe"
	Type: "IT_ARMOR"
	Buy: 7000
	Weight: 700
	Def: 4
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2333
	AegisName: "Silver_Robe_"
	Name: "Silver Robe"
	Type: "IT_ARMOR"
	Buy: 7000
	Weight: 700
	Def: 4
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2334
	AegisName: "Mage_Coat"
	Name: "Mage Coat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 5
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Script: <"
		bonus bMdef,5;
		bonus bInt,1;
	">
},
{
	Id: 2335
	AegisName: "Thief_Clothes"
	Name: "Thief Clothes"
	Type: "IT_ARMOR"
	Buy: 74000
	Weight: 100
	Def: 6
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2336
	AegisName: "Thief_Clothes_"
	Name: "Thief Clothes"
	Type: "IT_ARMOR"
	Buy: 74000
	Weight: 100
	Def: 6
	Slots: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2337
	AegisName: "Ninja_Suit"
	Name: "Ninja Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1500
	Def: 7
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Script: <"
		bonus bAgi,1;
		bonus bMdef,3;
	">
},
{
	Id: 2338
	AegisName: "Wedding_Dress"
	Name: "Wedding Dress"
	Type: "IT_ARMOR"
	Buy: 43000
	Weight: 500
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,15; ">
},
{
	Id: 2339
	AegisName: "G_Strings"
	Name: "Pantie"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 100
	Def: 4
	Loc: "EQP_ARMOR"
},
{
	Id: 2340
	AegisName: "Novice_Breast"
	Name: "Novice Breastplate"
	Type: "IT_ARMOR"
	Buy: 89000
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 10
},
{
	Id: 2341
	AegisName: "Full_Plate_Armor"
	Name: "Legion Plate Armor"
	Type: "IT_ARMOR"
	Buy: 94000
	Weight: 5500
	Def: 11
	Job: {
		Crusader: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 70
},
{
	Id: 2342
	AegisName: "Full_Plate_Armor_"
	Name: "Legion Plate Armor"
	Type: "IT_ARMOR"
	Buy: 102500
	Weight: 5500
	Def: 11
	Slots: 1
	Job: {
		Crusader: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 70
},
{
	Id: 2343
	AegisName: "Robe_Of_Casting"
	Name: "Robe of Cast"
	Type: "IT_ARMOR"
	Buy: 124800
	Weight: 1100
	Def: 5
	Job: {
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 75
	Script: <"
		bonus bCastrate,-3;
		bonus bMdef,4;
	">
},
{
	Id: 2344
	AegisName: "Flame_Sprits_Armor"
	Name: "Lucius's Fierce Armor of Volcano"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Fire; ">
},
{
	Id: 2345
	AegisName: "Flame_Sprits_Armor_"
	Name: "Lucius's Fierce Armor of Volcano"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Fire; ">
},
{
	Id: 2346
	AegisName: "Water_Sprits_Armor"
	Name: "Saphien's Armor of Ocean"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Water; ">
},
{
	Id: 2347
	AegisName: "Water_Sprits_Armor_"
	Name: "Saphien's Armor of Ocean"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Water; ">
},
{
	Id: 2348
	AegisName: "Wind_Sprits_Armor"
	Name: "Aebecee's Raging Typhoon Armor"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Wind; ">
},
{
	Id: 2349
	AegisName: "Wind_Sprits_Armor_"
	Name: "Aebecee's Raging Typhoon Armor"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Wind; ">
},
{
	Id: 2350
	AegisName: "Earth_Sprits_Armor"
	Name: "Claytos Cracking Earth Armor"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Earth; ">
},
{
	Id: 2351
	AegisName: "Earth_Sprits_Armor_"
	Name: "Claytos Cracking Earth Armor"
	Type: "IT_ARMOR"
	Buy: 136000
	Weight: 2200
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 45
	Script: <" bonus bDefEle,Ele_Earth; ">
},
{
	Id: 2352
	AegisName: "Novice_Plate"
	Name: "Tattered Novice Ninja Suit"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 1
	Def: 4
	Job: {
		Novice: true
	}
	Loc: "EQP_ARMOR"
	Refine: false
},
{
	Id: 2353
	AegisName: "Odins_Blessing"
	Name: "Odin's Blessing"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 2500
	Def: 6
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 65
},
{
	Id: 2354
	AegisName: "Goibnes_Armor"
	Name: "Goibne's Armor"
	Type: "IT_ARMOR"
	Buy: 50000
	Weight: 3500
	Def: 7
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 54
	Script: <"
		bonus bVit,2;
		bonus bMaxHPrate,10;
	">
},
{
	Id: 2355
	AegisName: "Angels_Protection"
	Name: "Angelic Protection"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 40
	Script: <" bonus bMdef,20; ">
},
{
	Id: 2356
	AegisName: "Vestment_Of_Grace"
	Name: "Blessed Holy Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 5
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bMdef,5;
		bonus2 bResEff,Eff_Blind,8000;
	">
},
{
	Id: 2357
	AegisName: "Valkyrie_Armor"
	Name: "Valkyrian Armor"
	Type: "IT_ARMOR"
	Weight: 2800
	Def: 6
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 1
	Script: <"
		bonus bAllStats,1;
		bonus bUnbreakableArmor,0;
		if(BaseClass==Job_Mage||BaseClass==Job_Archer||BaseClass==Job_Acolyte) bonus2 bResEff,Eff_Silence,5000;
		else if(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief) bonus2 bResEff,Eff_Stun,5000;
	">
},
{
	Id: 2358
	AegisName: "Dress_Of_Angel"
	Name: "Angel's Dress"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Loc: "EQP_ARMOR"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bLuk,4; ">
},
{
	Id: 2359
	AegisName: "Ninja_Suit_"
	Name: "Ninja Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1500
	Def: 7
	Slots: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Script: <"
		bonus bAgi,1;
		bonus bMdef,3;
	">
},
{
	Id: 2360
	AegisName: "Robe_Of_Casting_"
	Name: "Robe of Cast"
	Type: "IT_ARMOR"
	Buy: 124800
	Weight: 1100
	Def: 5
	Slots: 1
	Job: {
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 75
	Script: <"
		bonus bCastrate,-3;
		bonus bMdef,4;
	">
},
/*
{
	Id: 2361
	AegisName: "Blue_Aodai"
	Name: "Blue Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 1
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 2362
	AegisName: "Red_Aodai"
	Name: "Red Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 1
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 2363
	AegisName: "White_Aodai"
	Name: "White Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Job: {
		Novice: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 1
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,5;
	">
},
*/
{
	Id: 2364
	AegisName: "Meteo_Plate_Armor"
	Name: "Meteo Plate Armor"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 10
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 55
	Script: <"
		bonus2 bResEff,Eff_Stun,3000;
		bonus2 bResEff,Eff_Freeze,3000;
	">
},
{
	Id: 2365
	AegisName: "Orleans_Gown"
	Name: "Orleans's Gown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 55
	Script: <"
		bonus bCastrate,15;
		bonus bNoCastCancel,0;
	">
},
{
	Id: 2366
	AegisName: "Divine_Cloth"
	Name: "Divine Cloth"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1500
	Def: 6
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 55
	Script: <"
		bonus2 bResEff,Eff_Curse,500;
		bonus2 bResEff,Eff_Silence,500;
		bonus2 bResEff,Eff_Stun,500;
		bonus2 bResEff,Eff_Stone,500;
		bonus2 bResEff,Eff_Sleep,500;
	">
},
{
	Id: 2367
	AegisName: "Sniping_Suit"
	Name: "Sniping Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 750
	Def: 5
	Slots: 1
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Script: <"
		bonus bMdef,5;
		bonus bCritical,6+(readparam(bLuk)/10);
		bonus bDelayrate,-23;
	">
},
{
	Id: 2368
	AegisName: "Golden_Armor"
	Name: "Golden Armor"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Def: 4
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,4; ">
},
{
	Id: 2369
	AegisName: "Freyja_Overcoat"
	Name: "Freyja Overcoat"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 12
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bUnbreakableArmor,0;
		bonus2 bSubRace,RC_DemiPlayer,10;
	">
},
{
	Id: 2370
	AegisName: "Used_Mage_Coat"
	Name: "Used Mage Coat"
	Type: "IT_ARMOR"
	Def: 15
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,300;
		bonus bMaxSP,30;
		bonus bBaseAtk,10;
		bonus bAgi,1;
	">
},
{
	Id: 2371
	AegisName: "G_Strings_"
	Name: "Pantie"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 100
	Def: 4
	Slots: 1
	Loc: "EQP_ARMOR"
},
{
	Id: 2372
	AegisName: "Mage_Coat_"
	Name: "Mage Coat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 5
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Script: <"
		bonus bMdef,5;
		bonus bInt,1;
	">
},
{
	Id: 2373
	AegisName: "Holy_Robe_"
	Name: "Holy Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1700
	Def: 7
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 60
	Script: <"
		bonus bMdef,5;
		bonus2 bSubRace,RC_Demon,15;
		bonus2 bSubEle,Ele_Dark,10;
	">
},
{
	Id: 2374
	AegisName: "Diabolus_Robe"
	Name: "Diabolus Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Slots: 1
	Job: {
		Magician: true
		Archer: true
		Acolyte: true
		Priest: true
		Wizard: true
		Hunter: true
		Monk: true
		Sage: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 55
	Script: <"
		bonus bMaxSP,150;
		bonus bMdef,5;
		bonus bHealPower,6;
		bonus bDelayrate,-10;
	">
},
{
	Id: 2375
	AegisName: "Diabolus_Armor"
	Name: "Diabolus Armor"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 7
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 55
	Script: <"
		bonus bStr,2;
		bonus bDex,1;
		bonus bMaxHP,150;
		bonus2 bResEff,Eff_Stun,500;
		bonus2 bResEff,Eff_Stone,500;
	">
},
{
	Id: 2376
	AegisName: "Assaulter_Plate"
	Name: "Assaulter Plate"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 7
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2377
	AegisName: "Elite_Engineer_Armor"
	Name: "Elite Engineer Armor"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 7
	Slots: 1
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2378
	AegisName: "Assassin_Robe"
	Name: "Assassin Robe"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 7
	Slots: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2379
	AegisName: "Warlock_Battle_Robe"
	Name: "Warlock's Battle Robe"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2380
	AegisName: "Medic_Robe"
	Name: "Medic's Robe"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2381
	AegisName: "Elite_Archer_Suit"
	Name: "Elite Archer Suit"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2382
	AegisName: "Elite_Shooter_Suit"
	Name: "Elite Shooter Suit"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Gunslinger: true
	}
	Loc: "EQP_ARMOR"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,150;
		bonus bMdef,2;
		bonus2 bSubRace,RC_DemiPlayer,2;
	">
},
{
	Id: 2383
	AegisName: "Brynhild"
	Name: "Brynhild"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 10
	Loc: "EQP_ARMOR"
	EquipLv: 94
	Refine: false
	Script: <"
		bonus bMdef,10;
		bonus bMaxHP,20*BaseLevel;
		bonus bMaxSP,5*BaseLevel;
		bonus2 bAddRace, RC_All, 10;
		bonus bMatkRate,10;
		bonus bUnbreakableArmor,0;
		bonus bNoKnockback,0;
	">
},
{
	Id: 2384
	AegisName: "Spritual_Tunic"
	Name: "Spiritual Tunic"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 10
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,800;
		bonus2 bResEff,Eff_Freeze,10000;
		bonus2 bSubEle,Ele_Earth,20;
		bonus2 bSubEle,Ele_Fire,20;
		bonus2 bSubEle,Ele_Wind,20;
		bonus2 bSubEle,Ele_Poison,20;
		bonus2 bSubEle,Ele_Holy,20;
		bonus2 bSubEle,Ele_Dark,20;
		bonus2 bSubEle,Ele_Ghost,20;
		bonus2 bSubEle,Ele_Undead,20;
	">
},
{
	Id: 2385
	AegisName: "Recuperative_Armor"
	Name: "Recuperative Armor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 12
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bNoRegen,1;
		bonus bNoRegen,2;
		bonus bHPGainValue,60;
		bonus bSPGainValue,6;
		bonus bMagicHPGainValue,60;
		bonus bMagicSPGainValue,6;
	">
	OnUnequipScript: <" heal 0,-100; ">
},
{
	Id: 2386
	AegisName: "Chameleon_Armor"
	Name: "Chameleon Armor"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1700
	Def: 5
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bMaxHP,(BaseLevel*7);
		bonus bMaxSP,(BaseLevel/2);
		autobonus2 "{ bonus bNoMagicDamage,100; }",10,2000,BF_MAGIC,"{ specialeffect(EF_ENERGYCOAT, AREA, playerattached()); }";
		if( BaseClass==Job_Mage||BaseClass==Job_Archer||BaseClass==Job_Acolyte ) bonus bMdef,5;
		else if( BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief ) bonus bDef,3;
	">
},
{
	Id: 2387
	AegisName: "Sprint_Mail"
	Name: "Sprint Mail"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bVit,1;
		bonus bHPrecovRate,5;
		bonus bAddItemHealRate,3;
		bonus2 bSkillHeal,AL_HEAL,3;
	">
},
{
	Id: 2388
	AegisName: "Kandura"
	Name: "Kandura"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Slots: 1
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bAgi,1;
		bonus bFlee,5;
		bonus bAspdRate,2;
	">
},
{
	Id: 2389
	AegisName: "Armor_Of_Naga"
	Name: "Armor of Naga"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 70
	Script: <"
		bonus bMdef,2;
		autobonus "{ bonus bBaseAtk,20; }",10,10000,BF_WEAPON,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
	">
},
{
	Id: 2390
	AegisName: "Improved_Tights"
	Name: "Improved Tights"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 6
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 75
	Script: <"
		bonus bMdef,2;
		bonus bFlee2,3;
	">
},
{
	Id: 2391
	AegisName: "Life_Link"
	Name: "Life Link"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3500
	Def: 9
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 82
	Script: <"
		bonus bVit,2;
		bonus bMdef,5;
		bonus bHPrecovRate,50;
	">
},
{
	Id: 2392
	AegisName: "Old_Pant"
	Name: "Old Green Pantie"
	Type: "IT_ARMOR"
	Def: 10
	Loc: "EQP_ARMOR"
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus bVit,2;
		bonus bMaxHP,200;
		bonus3 bAutoSpellWhenHit,MO_CALLSPIRITS,5,20;
		bonus bMdef,1;
	">
},
{
	Id: 2393
	AegisName: "N_Adventurers_Suit"
	Name: "Novice Adventurer's Suit"
	Type: "IT_ARMOR"
	Def: 8
	Slots: 1
	Loc: "EQP_ARMOR"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2394
	AegisName: "Krieger_Suit1"
	Name: "Glorious Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 81
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,20;
		bonus2 bSubRace,RC_DemiPlayer,7;
	">
},
{
	Id: 2395
	AegisName: "Krieger_Suit2"
	Name: "Glorious Popularized Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	EquipLv: 61
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,600;
		bonus bSPrecovRate,10;
	">
},
{
	Id: 2396
	AegisName: "Krieger_Suit3"
	Name: "Glorious Mass-Production Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMaxHP,500; ">
},
{
	Id: 2397
	AegisName: "Incredible_Coat"
	Name: "Incredible Event Resignation Coat"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 900
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ARMOR"
},
{
	Id: 2398
	AegisName: "Sniping_Suit_M"
	Name: "Sniping Suit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 750
	Def: 5
	Slots: 1
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	EquipLv: 50
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,5;
		bonus bCritical,6+(readparam(bLuk)/10);
		bonus bDelayrate,-23;
	">
},
{
	Id: 2399
	AegisName: "Dragon_Vest"
	Name: "Dragon Vest"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ARMOR"
	Script: <" bonus bMdef,3; ">
},

//== Footgears =============================================
{
	Id: 2401
	AegisName: "Sandals"
	Name: "Sandals"
	Type: "IT_ARMOR"
	Buy: 400
	Weight: 200
	Def: 1
	Loc: "EQP_SHOES"
},
{
	Id: 2402
	AegisName: "Sandals_"
	Name: "Sandals"
	Type: "IT_ARMOR"
	Buy: 400
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_SHOES"
},
{
	Id: 2403
	AegisName: "Shoes"
	Name: "Shoes"
	Type: "IT_ARMOR"
	Buy: 3500
	Weight: 400
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
},
{
	Id: 2404
	AegisName: "Shoes_"
	Name: "Shoes"
	Type: "IT_ARMOR"
	Buy: 3500
	Weight: 400
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
},
{
	Id: 2405
	AegisName: "Boots"
	Name: "Boots"
	Type: "IT_ARMOR"
	Buy: 18000
	Weight: 600
	Def: 4
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
		Taekwon: true
		Star_Gladiator: true
		Gunslinger: true
	}
	Loc: "EQP_SHOES"
},
{
	Id: 2406
	AegisName: "Boots_"
	Name: "Boots"
	Type: "IT_ARMOR"
	Buy: 18000
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
		Taekwon: true
		Star_Gladiator: true
		Gunslinger: true
	}
	Loc: "EQP_SHOES"
},
{
	Id: 2407
	AegisName: "Chrystal_Pumps"
	Name: "Crystal Pumps"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMdef,10;
		bonus bLuk,5;
	">
},
{
	Id: 2408
	AegisName: "Cuffs"
	Name: "Shackles"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 3000
	Def: 3
	Loc: "EQP_SHOES"
},
{
	Id: 2409
	AegisName: "Spiky_Heel"
	Name: "High Heels"
	Type: "IT_ARMOR"
	Buy: 8500
	Weight: 600
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2410
	AegisName: "Sleipnir"
	Name: "Sleipnir"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3500
	Def: 5
	Loc: "EQP_SHOES"
	EquipLv: 94
	Refine: false
	Script: <"
		bonus bMdef,10;
		bonus bMaxHPrate,20;
		bonus bMaxSPrate,20;
		bonus bSPrecovRate,15;
		bonus bSpeedRate,25;
	">
},
{
	Id: 2411
	AegisName: "Grave"
	Name: "Greaves"
	Type: "IT_ARMOR"
	Buy: 48000
	Weight: 750
	Def: 5
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 65
},
{
	Id: 2412
	AegisName: "Grave_"
	Name: "Greaves"
	Type: "IT_ARMOR"
	Buy: 54000
	Weight: 750
	Def: 5
	Slots: 1
	Job: {
		Knight: true
		Crusader: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 65
},
{
	Id: 2413
	AegisName: "Safty_Boots"
	Name: "Safety Boots"
	Type: "IT_ARMOR"
	Buy: 34000
	Weight: 350
	Def: 6
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 30
	Refine: false
},
{
	Id: 2414
	AegisName: "Novice_Boots"
	Name: "Novice Slippers"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 1
	Def: 2
	Job: {
		Novice: true
	}
	Loc: "EQP_SHOES"
	Refine: false
},
{
	Id: 2415
	AegisName: "Slipper"
	Name: "Bunny Slipper"
	Type: "IT_ARMOR"
	Buy: 34000
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 30
	Script: <"
		bonus bLuk,3;
		bonus bMdef,3;
	">
},
{
	Id: 2416
	AegisName: "Novice_Shoes"
	Name: "Novice Shoes"
	Type: "IT_ARMOR"
	Buy: 35000
	Weight: 500
	Def: 2
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 40
	Script: <" bonus bMaxHPrate,5; ">
},
{
	Id: 2417
	AegisName: "Fricco_Shoes"
	Name: "Fricco's Shoes"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 65
	Script: <"
		bonus bAgi,2;
		bonus2 bAddItemHealRate,Red_Potion,20;
		bonus2 bAddItemHealRate,Yellow_Potion,20;
		bonus2 bAddItemHealRate,Orange_Potion,20;
		bonus2 bAddItemHealRate,White_Potion,20;
	">
},
{
	Id: 2418
	AegisName: "Vidars_Boots"
	Name: "Vidar's Boots"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 650
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 65
	Script: <"
		bonus bMaxHPrate,9;
		bonus bMaxSPrate,9;
	">
},
{
	Id: 2419
	AegisName: "Goibnes_Combat_Boots"
	Name: "Goibne's Greaves"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 700
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 54
	Script: <"
		bonus bMdef,3;
		bonus bMaxHPrate,5;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2420
	AegisName: "Angels_Arrival"
	Name: "Angel's Reincarnation"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 300
	Def: 2
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 25
	Script: <" bonus bMaxHP,100; ">
},
{
	Id: 2421
	AegisName: "Valkyrie_Shoes"
	Name: "Valkyrian Shoes"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 1
	Script: <"
		bonus bUnbreakableShoes,0;
		if(BaseClass==Job_Mage||BaseClass==Job_Archer||BaseClass==Job_Acolyte) bonus bMaxHP,(BaseLevel*5);
		else if(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief) bonus bMaxSP,(JobLevel*2);
	">
},
{
	Id: 2422
	AegisName: "High_Fashion_Sandals"
	Name: "High Fashion Sandals"
	Type: "IT_ARMOR"
	Buy: 24000
	Weight: 200
	Def: 2
	Slots: 1
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 40
	Script: <" bonus bMdef,10; ">
},
{
	Id: 2423
	AegisName: "Variant_Shoes"
	Name: "Variant Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 85
	Script: <"
		bonus bMaxHPrate,20-getrefine();
		bonus bMaxSPrate,20-getrefine();
		bonus bDef,getrefine()/2;
	">
},
{
	Id: 2424
	AegisName: "Tidal_Shoes"
	Name: "Tidal Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 55
	Script: <" bonus2 bSubEle,Ele_Water,5; ">
},
{
	Id: 2425
	AegisName: "Black_Leather_Boots"
	Name: "Black Leather Boots"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 55
	Script: <"
		bonus bAgi,1;
		if(getrefine()>=9) bonus bAgi,2;
	">
},
{
	Id: 2426
	AegisName: "Shadow_Walk"
	Name: "Shadow Walk"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 75
	Script: <"
		bonus bMdef,10;
		if(getskilllv(AS_CLOAKING)<2) {
			bonus5 bAutoSpellWhenHit,AS_CLOAKING,2,100,BF_MAGIC,0;
		}
		else bonus5 bAutoSpellWhenHit,AS_CLOAKING,getskilllv(AS_CLOAKING),100,BF_MAGIC,0;
	">
},
{
	Id: 2427
	AegisName: "Golden_Shoes"
	Name: "Golden Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Loc: "EQP_SHOES"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,4; ">
},
/*
{
	Id: 2428
	AegisName: "Freyja_Boots"
	Name: "Freyja Boots"
	Type: "IT_ARMOR"
	Weight: 300
	Def: 10
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	Refine: false
	Script: <" bonus2 bSubRace,RC_DemiPlayer,5; ">
},
*/
{
	Id: 2429
	AegisName: "Iron_Boots01"
	Name: "Iron Boots"
	Type: "IT_ARMOR"
	Weight: 1500
	Def: 5
	Job: {
		Swordsman: true
		Archer: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Loc: "EQP_SHOES"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2430
	AegisName: "Iron_Boots02"
	Name: "Iron Boots"
	Type: "IT_ARMOR"
	Weight: 800
	Def: 5
	Loc: "EQP_SHOES"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2431
	AegisName: "Valley_Shoes"
	Name: "Valley Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 10
	Loc: "EQP_SHOES"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,7;
		bonus bMaxSPrate,7;
	">
},
{
	Id: 2432
	AegisName: "Spiky_Heel_"
	Name: "High Heels"
	Type: "IT_ARMOR"
	Buy: 8500
	Weight: 600
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2433
	AegisName: "Diabolus_Boots"
	Name: "Diabolus Boots"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 4
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	Script: <" bonus bMaxHP,(BaseLevel*10); ">
},
{
	Id: 2434
	AegisName: "Black_Leather_Boots_"
	Name: "Black Leather Boots"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 55
	Script: <"
		bonus bAgi,1;
		if(getrefine()>=9) bonus bAgi,2;
	">
},
{
	Id: 2435
	AegisName: "Battle_Greave"
	Name: "Battle Greaves"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
		Ninja: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,100;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2436
	AegisName: "Combat_Boots"
	Name: "Combat Boots"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Archer: true
		Acolyte: true
		Priest: true
		Wizard: true
		Hunter: true
		Monk: true
		Sage: true
		Bard: true
		Soul_Linker: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,100;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2437
	AegisName: "Battle_Boots"
	Name: "Battle Boots"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Gunslinger: true
	}
	Loc: "EQP_SHOES"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,100;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2438
	AegisName: "Paw_Of_Cat"
	Name: "Paw Of Cat"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 300
	Loc: "EQP_SHOES"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bFlee,5;
		bonus bAgi,1;
		skill ALL_CATCRY, 1;
	">
},
{
	Id: 2439
	AegisName: "Refresh_Shoes"
	Name: "Refresh Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 9
	Loc: "EQP_SHOES"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,17;
		bonus bMaxSPrate,8;
		bonus2 bHPRegenRate,20,10000;
		bonus2 bSPRegenRate,3,10000;
	">
},
{
	Id: 2440
	AegisName: "Sprint_Shoes"
	Name: "Sprint Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 70
	Script: <"
		bonus bAgi,1;
		bonus bSPrecovRate,5;
	">
},
{
	Id: 2441
	AegisName: "Beach_Sandal"
	Name: "Beach Sandals"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_SHOES"
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bAgi,1;
		bonus2 bSubEle,Ele_Fire,10;
	">
},
{
	Id: 2442
	AegisName: "Boots_Perforated"
	Name: "Red Stocking Boots"
	Type: "IT_ARMOR"
	Def: 7
	Loc: "EQP_SHOES"
	Refine: false
	Script: <"
		bonus bLuk,2;
		bonus bHPrecovRate,10;
		bonus bSPrecovRate,10;
		bonus3 bAutoSpellWhenHit,WZ_QUAGMIRE,3,20;
		bonus bMdef,1;
	">
},
{
	Id: 2443
	AegisName: "Fish_Shoes"
	Name: "Fisher's Boots"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 250
	Loc: "EQP_SHOES"
	Refine: false
},
{
	Id: 2444
	AegisName: "Krieger_Shoes1"
	Name: "Glorious Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 81
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,10;
		bonus2 bSubRace,RC_DemiPlayer,4;
		bonus3 bAutoSpellWhenHit,AL_INCAGI,1,10;
	">
},
{
	Id: 2445
	AegisName: "Krieger_Shoes2"
	Name: "Glorious Popularized Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	EquipLv: 61
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,5;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2446
	AegisName: "Krieger_Shoes3"
	Name: "Glorious Mass-Production Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMaxHPrate,5; ">
},
{
	Id: 2447
	AegisName: "Military_Boots"
	Name: "Army Boots"
	Type: "IT_ARMOR"
	Weight: 1000
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_SHOES"
},
{
	Id: 2448
	AegisName: "Air_Boss"
	Name: "Air Boss"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 2
	Loc: "EQP_SHOES"
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2449
	AegisName: "Variant_Shoes_M"
	Name: "Variant Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 85
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,20-getrefine();
		bonus bMaxSPrate,20-getrefine();
		bonus bDef,getrefine()/2;
	">
},
{
	Id: 2450
	AegisName: "Vital_Tree_Shoes"
	Name: "Vital Tree Shoes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_SHOES"
	EquipLv: 60
	Script: <"
		bonus bMaxHPrate,10;
		bonus2 bHPRegenRate,30,10000;
		bonus bHealPower2,5;
		bonus bAddItemHealRate,5;
		bonus bMdef,3;
		bonus bVit,2;
	">
},

//== Garments ==============================================
{
	Id: 2501
	AegisName: "Hood"
	Name: "Hood"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 200
	Def: 1
	Loc: "EQP_GARMENT"
},
{
	Id: 2502
	AegisName: "Hood_"
	Name: "Hood"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_GARMENT"
},
{
	Id: 2503
	AegisName: "Muffler"
	Name: "Muffler"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 400
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
},
{
	Id: 2504
	AegisName: "Muffler_"
	Name: "Muffler"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 400
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
},
{
	Id: 2505
	AegisName: "Manteau"
	Name: "Manteau"
	Type: "IT_ARMOR"
	Buy: 32000
	Weight: 600
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_GARMENT"
},
{
	Id: 2506
	AegisName: "Manteau_"
	Name: "Manteau"
	Type: "IT_ARMOR"
	Buy: 32000
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_GARMENT"
},
{
	Id: 2507
	AegisName: "Cape_Of_Ancient_Lord"
	Name: "Ancient Cape"
	Type: "IT_ARMOR"
	Buy: 82000
	Weight: 600
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 40
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2508
	AegisName: "Ragamuffin_Cape"
	Name: "Ragamuffin Manteau"
	Type: "IT_ARMOR"
	Buy: 56000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bUnbreakableGarment,0;
		bonus bMdef,10;
	">
},
{
	Id: 2509
	AegisName: "Clack_Of_Servival"
	Name: "Survivor's Manteau"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 550
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 75
	Script: <"
		bonus bMdef,5;
		bonus bVit,10;
	">
},
{
	Id: 2510
	AegisName: "Novice_Hood"
	Name: "Somber Novice Hood"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 1
	Def: 2
	Job: {
		Novice: true
	}
	Loc: "EQP_GARMENT"
	Refine: false
	Script: <" bonus2 bSubEle,Ele_Neutral,20; ">
},
{
	Id: 2511
	AegisName: "Skeletons_Cape"
	Name: "Skeleton Manteau"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 700
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 75
	Script: <"
		bonus bStr,2;
		bonus bInt,-3;
		bonus bDex,2;
		bonus bVit,-3;
		bonus bLuk,2;
		bonus bAgi,-4;
	">
},
{
	Id: 2512
	AegisName: "Novice_Manteau"
	Name: "Novice Manteau"
	Type: "IT_ARMOR"
	Buy: 50000
	Weight: 500
	Def: 2
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 40
	Script: <" bonus2 bSubEle,Ele_Neutral,10; ">
},
{
	Id: 2513
	AegisName: "Celestial_Robe"
	Name: "Heavenly Maiden Robe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 80
},
{
	Id: 2514
	AegisName: "Pauldron"
	Name: "Pauldron"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 80
},
{
	Id: 2515
	AegisName: "Wing_Of_Eagle"
	Name: "Eagle Wing"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 300
	Def: 1
	Slots: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 85
},
{
	Id: 2516
	AegisName: "Falcon_Robe"
	Name: "Falcon Muffler"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 400
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 65
	Script: <"
		bonus bFlee,15;
		bonus bFlee2,5;
	">
},
{
	Id: 2517
	AegisName: "Valis_Manteau"
	Name: "Vali's Manteau"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 600
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 65
	Script: <" bonus2 bSubEle,Ele_Neutral,15; ">
},
{
	Id: 2518
	AegisName: "Morpheuss_Shawl"
	Name: "Morpheus's Shawl"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 600
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 33
	Script: <"
		bonus bMaxSPrate,10;
		bonus bMdef,3;
	">
},
{
	Id: 2519
	AegisName: "Morriganes_Manteau"
	Name: "Morrigane's Manteau"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 600
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 61
	Script: <"
		bonus bLuk,2;
		bonus bFlee2,8;
	">
},
{
	Id: 2520
	AegisName: "Goibnes_Shoulder_Arms"
	Name: "Goibne's Spaulders"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 700
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 54
	Script: <"
		bonus bLongAtkDef,10;
		bonus bMdef,2;
		bonus bVit,1;
	">
},
{
	Id: 2521
	AegisName: "Angels_Warmth"
	Name: "Angelic Cardigan"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 400
	Def: 2
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 20
	Script: <" bonus bHPrecovRate,5; ">
},
{
	Id: 2522
	AegisName: "Undershirt"
	Name: "Undershirt"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 150
	Def: 2
	Loc: "EQP_GARMENT"
	EquipLv: 1
	Script: <" bonus bMdef,1; ">
},
{
	Id: 2523
	AegisName: "Undershirt_"
	Name: "Undershirt"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 150
	Def: 2
	Slots: 1
	Loc: "EQP_GARMENT"
	EquipLv: 1
	Script: <" bonus bMdef,1; ">
},
{
	Id: 2524
	AegisName: "Valkyrie_Manteau"
	Name: "Valkyrian Manteau"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 1
	Script: <"
		bonus bUnbreakableGarment,0;
		if(BaseClass==Job_Mage||BaseClass==Job_Archer||BaseClass==Job_Acolyte) bonus bFlee2,5+(getequiprefinerycnt(EQI_GARMENT)*2);
		else if(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief) bonus bShortWeaponDamageReturn,5+(getequiprefinerycnt(EQI_GARMENT)*2);
	">
},
{
	Id: 2525
	AegisName: "Cape_Of_Ancient_Lord_"
	Name: "Ancient Cape"
	Type: "IT_ARMOR"
	Buy: 82000
	Weight: 600
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 40
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2526
	AegisName: "Dragon_Scale_Coat"
	Name: "Coat of Dragon Scale"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Def: 4
	Loc: "EQP_GARMENT"
	EquipLv: 50
},
{
	Id: 2527
	AegisName: "Dragon_Breath"
	Name: "Dragon Breath"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 48
	Script: <" bonus2 bSubRace,RC_Dragon,15; ">
},
{
	Id: 2528
	AegisName: "Wool_Scarf"
	Name: "Wool Scarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 55
	Script: <" bonus bMdef,4; ">
},
{
	Id: 2529
	AegisName: "Rider_Insignia"
	Name: "Rider Insignia"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 55
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2530
	AegisName: "Rider_Insignia_"
	Name: "Rider Insignia"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 55
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2531
	AegisName: "Ulfhedinn"
	Name: "Ulfhedinn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 3
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 70
	Script: <" bonus3 bAutoSpellWhenHit,NPC_STONESKIN,1,20; ">
},
{
	Id: 2532
	AegisName: "Mithril_Magic_Cape"
	Name: "Mithril Magic Cape"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Archer: true
		Acolyte: true
		Priest: true
		Wizard: true
		Hunter: true
		Monk: true
		Sage: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 70
	Script: <"
		bonus bMdef,3;
		bonus5 bAutoSpellWhenHit,NPC_ANTIMAGIC,1,200,BF_MAGIC,0;
	">
},
/*
{
	Id: 2533
	AegisName: "Freyja_Cape"
	Name: "Freyja Cape"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 10
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	Refine: false
	Script: <" bonus2 bSubRace,RC_DemiPlayer,15; ">
},
*/
{
	Id: 2534
	AegisName: "Ruffler"
	Name: "Ruffler"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 10
	Loc: "EQP_GARMENT"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Neutral,17;
		bonus bFlee,17;
	">
},
{
	Id: 2535
	AegisName: "Cloak_Of_Survival_C"
	Name: "Cloak Of Survival"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 5
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_GARMENT"
	Refine: false
	Script: <"
		bonus bVit,10;
		bonus bMdef,10;
	">
},
{
	Id: 2536
	AegisName: "Skin_Of_Ventus"
	Name: "Skin of Ventus"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 60
	Script: <"
		bonus bMdef,2;
		bonus bMaxHP,200;
		bonus bFlee,10;
	">
},
{
	Id: 2537
	AegisName: "Diabolus_Manteau"
	Name: "Diabolus Manteau"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 5
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Neutral,5;
		bonus bMaxHP,100;
		bonus2 bAddDamageClass,1916,10;
		bonus2 bAddDamageClass,1917,10;
	">
},
{
	Id: 2538
	AegisName: "Commander_Manteau"
	Name: "Captain's Manteau"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 4
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
		Ninja: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,50;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2539
	AegisName: "Commander_Manteau_"
	Name: "Commander's Manteau"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Archer: true
		Acolyte: true
		Priest: true
		Wizard: true
		Hunter: true
		Monk: true
		Sage: true
		Bard: true
		Soul_Linker: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,50;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2540
	AegisName: "Sheriff_Manteau"
	Name: "Sheriff's Manteau"
	Type: "IT_ARMOR"
	Buy: 10
	Def: 3
	Slots: 1
	Job: {
		Gunslinger: true
	}
	Loc: "EQP_GARMENT"
	EquipLv: 80
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,50;
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 2541
	AegisName: "Asprika"
	Name: "Asprika"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 5
	Loc: "EQP_GARMENT"
	EquipLv: 94
	Refine: false
	Script: <"
		bonus bMdef,5;
		bonus3 bSubEle,Ele_Neutral,30,BF_SHORT;
		bonus3 bSubEle,Ele_Water,30,BF_SHORT;
		bonus3 bSubEle,Ele_Earth,30,BF_SHORT;
		bonus3 bSubEle,Ele_Fire,30,BF_SHORT;
		bonus3 bSubEle,Ele_Wind,30,BF_SHORT;
		bonus3 bSubEle,Ele_Poison,30,BF_SHORT;
		bonus3 bSubEle,Ele_Holy,30,BF_SHORT;
		bonus3 bSubEle,Ele_Dark,30,BF_SHORT;
		bonus3 bSubEle,Ele_Ghost,30,BF_SHORT;
		bonus3 bSubEle,Ele_Undead,30,BF_SHORT;
		bonus bFlee,30;
		skill AL_TELEPORT,1;
		bonus bUnbreakableGarment,0;
	">
},
{
	Id: 2542
	AegisName: "Flame_Manteau"
	Name: "Flame Manteau of Naght Sieger"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 70
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 70
	Script: <"
		bonus bMaxHPrate,5;
		bonus bMdef,2;
		bonus bMatkRate,1;
		bonus2 bAddEle,Ele_Fire,2;
	">
},
{
	Id: 2543
	AegisName: "Sylphid_Manteau"
	Name: "Sylphid Manteau"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 9
	Loc: "EQP_GARMENT"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bFlee,13;
		bonus2 bSubEle,Ele_Neutral,13;
		bonus bFlee2,1;
	">
},
{
	Id: 2544
	AegisName: "Leather_Of_Tendrilion"
	Name: "Leather of Tendrilion"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Water,5;
		bonus2 bSubEle,Ele_Earth,5;
		bonus2 bSubRace,RC_Plant,5;
		bonus2 bSubRace,RC_Brute,5;
	">
},
{
	Id: 2545
	AegisName: "Musika"
	Name: "Musika"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Slots: 1
	Job: {
		Priest: true
		Monk: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 70
	Script: <"
		bonus bMdef,3;
		bonus3 bAutoSpellWhenHit,AL_HEAL,max(getskilllv(AL_HEAL),1),20;
	">
},
{
	Id: 2546
	AegisName: "Beach_Manteau"
	Name: "Beach Manteau"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Slots: 1
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus2 bSubEle,Ele_Fire,10;
	">
},
{
	Id: 2547
	AegisName: "Cheap_Running_Shirts"
	Name: "Cheap Undershirt"
	Type: "IT_ARMOR"
	Def: 8
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bDex,2;
		bonus bFlee,10;
		bonus2 bSubEle,Ele_Neutral,10;
		bonus bMdef,1;
	">
},
{
	Id: 2548
	AegisName: "Muffler_C"
	Name: "Neo Muffler"
	Type: "IT_ARMOR"
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 95
	Refine: false
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,10;
		bonus bMaxHPrate,10;
		bonus2 bSubEle,Ele_Water,5;
		bonus2 bSubEle,Ele_Fire,5;
		bonus2 bSubEle,Ele_Holy,5;
		bonus2 bSubEle,Ele_Dark,5;
	">
},
{
	Id: 2549
	AegisName: "Krieger_Muffler1"
	Name: "Glorious Muffler"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_GARMENT"
	EquipLv: 81
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,5;
		bonus2 bSubRace,RC_DemiPlayer,5;
	">
},
{
	Id: 2550
	AegisName: "Fishers_Muffler"
	Name: "Fisher's Muffler"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_GARMENT"
},
{
	Id: 2551
	AegisName: "Rider_Insignia_M"
	Name: "Crest of the Rider"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 55
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2552
	AegisName: "Mithril_Magic_Cape_M"
	Name: "Mithril Magic Manteau"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Slots: 1
	Job: {
		Magician: true
		Archer: true
		Acolyte: true
		Priest: true
		Wizard: true
		Hunter: true
		Monk: true
		Sage: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 70
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus5 bAutoSpellWhenHit,NPC_ANTIMAGIC,1,200,BF_MAGIC,0;
	">
},
{
	Id: 2553
	AegisName: "Dragon_Manteau"
	Name: "Dragon Manteau"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bAgi,1;
		bonus bMdef,5;
	">
},
{
	Id: 2554
	AegisName: "Piece_Of_Angent_Skin"
	Name: "Nydhorgg's Shadow Garb"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_GARMENT"
	EquipLv: 90
	Script: <"
		bonus2 bSubEle,Ele_Neutral,7;
		bonus2 bSubEle,Ele_Water,7;
		bonus2 bSubEle,Ele_Earth,7;
		bonus2 bSubEle,Ele_Fire,7;
		bonus2 bSubEle,Ele_Wind,7;
		bonus2 bSubEle,Ele_Poison,7;
		bonus2 bSubEle,Ele_Holy,7;
		bonus2 bSubEle,Ele_Dark,7;
		bonus2 bSubEle,Ele_Ghost,7;
		bonus2 bSubEle,Ele_Undead,7;
		bonus bMaxSP,(BaseLevel/3)+(getrefine()*10);
		bonus3 bSPDrainRate,10,1,0;
		bonus bMdef,3;
	">
},

//== Accessories ===========================================
{
	Id: 2601
	AegisName: "Ring"
	Name: "Ring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bStr,2; ">
},
{
	Id: 2602
	AegisName: "Earring"
	Name: "Earring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bInt,2; ">
},
{
	Id: 2603
	AegisName: "Necklace"
	Name: "Necklace"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bVit,2; ">
},
{
	Id: 2604
	AegisName: "Glove"
	Name: "Glove"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bDex,2; ">
},
{
	Id: 2605
	AegisName: "Brooch"
	Name: "Brooch"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2607
	AegisName: "Clip"
	Name: "Clip"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bMaxSP,10; ">
},
{
	Id: 2608
	AegisName: "Rosary"
	Name: "Rosary"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <"
		bonus bMdef,5;
		bonus bLuk,2;
	">
},
{
	Id: 2609
	AegisName: "Skul_Ring"
	Name: "Skull Ring"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2610
	AegisName: "Gold_Ring"
	Name: "Gold Ring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2611
	AegisName: "Silver_Ring"
	Name: "Silver Ring"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2612
	AegisName: "Flower_Ring"
	Name: "Flower Ring"
	Type: "IT_ARMOR"
	Buy: 1500
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2613
	AegisName: "Diamond_Ring"
	Name: "Diamond Ring"
	Type: "IT_ARMOR"
	Buy: 45000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2614
	AegisName: "An_Eye_Of_Dullahan"
	Name: "Eye of Dullahan"
	Type: "IT_ARMOR"
	Buy: 90000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 50
	Refine: false
	Script: <"
		bonus2 bResEff,Eff_Poison,10000;
		bonus2 bSubRace,RC_Undead,4;
		bonus2 bSubRace,RC_Demon,4;
	">
},
{
	Id: 2615
	AegisName: "Safety_Ring"
	Name: "Safety Ring"
	Type: "IT_ARMOR"
	Buy: 75000
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 40
	Refine: false
	Script: <" bonus bMdef,3; ">
},
{
	Id: 2616
	AegisName: "Critical_Ring"
	Name: "Critical Ring"
	Type: "IT_ARMOR"
	Buy: 75000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 40
	Refine: false
	Script: <" bonus bCritical,5; ">
},
{
	Id: 2617
	AegisName: "Mitten_Of_Presbyter"
	Name: "Celebrant's Mitten"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 35
	Refine: false
	Script: <" bonus bInt,1; ">
},
{
	Id: 2618
	AegisName: "Matyrs_Flea_Guard"
	Name: "Matyr's Leash"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 35
	Refine: false
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2619
	AegisName: "Thimble_Of_Archer"
	Name: "Bow Thimble"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ACC"
	EquipLv: 65
	Refine: false
	Script: <" bonus bLongAtkRate,3; ">
},
{
	Id: 2620
	AegisName: "Ring_Of_Rogue"
	Name: "Rogue's Treasure"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		if(readparam(bStr)>=90) {
			bonus bHit,10;
			bonus bFlee,10;
		}
		if(readparam(bAgi)>=90) {
			bonus bBaseAtk,10;
			bonus bCritical,10;
		}

	">
},
{
	Id: 2621
	AegisName: "Ring_"
	Name: "Ring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bStr,1; ">
},
{
	Id: 2622
	AegisName: "Earring_"
	Name: "Earring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bInt,1; ">
},
{
	Id: 2623
	AegisName: "Necklace_"
	Name: "Necklace"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bVit,1; ">
},
{
	Id: 2624
	AegisName: "Glove_"
	Name: "Glove"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bDex,1; ">
},
{
	Id: 2625
	AegisName: "Brooch_"
	Name: "Brooch"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2626
	AegisName: "Rosary_"
	Name: "Rosary"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bLuk,1;
	">
},
{
	Id: 2627
	AegisName: "Belt"
	Name: "Belt"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 1200
	Slots: 1
	Loc: "EQP_ACC"
	EquipLv: 25
	Refine: false
},
{
	Id: 2628
	AegisName: "Novice_Armlet"
	Name: "Novice Armlet"
	Type: "IT_ARMOR"
	Buy: 400
	Weight: 200
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
},
{
	Id: 2629
	AegisName: "Magingiorde"
	Name: "Megingjard"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 8000
	Def: 2
	Loc: "EQP_ACC"
	EquipLv: 94
	Refine: false
	Script: <"
		bonus bStr,40;
		bonus bMdef,7;
	">
},
{
	Id: 2630
	AegisName: "Brysinggamen"
	Name: "Brisingamen"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1500
	Def: 1
	Loc: "EQP_ACC"
	EquipLv: 94
	Refine: false
	Script: <"
		bonus bStr,6;
		bonus bAgi,6;
		bonus bVit,6;
		bonus bInt,6;
		bonus bLuk,10;
		bonus bMdef,5;
	">
},
{
	Id: 2631
	AegisName: "First_Age_Ring"
	Name: "Celebration Ring"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 10
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
},
/*
{
	Id: 2632
	AegisName: "Korean_Trinket"
	Name: "Korean Trinket"
	Type: "IT_ARMOR"
	Buy: 125000
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 65
	Refine: false
	Script: <"
		bonus bVit,1;
		bonus bDex,1;
		bonus bLuk,1;
	">
},
*/
/*
{
	Id: 2633
	AegisName: "Jade_Ring"
	Name: "Jade Ring"
	Type: "IT_ARMOR"
	Buy: 204000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus bInt,1;
	">
},
*/
{
	Id: 2634
	AegisName: "Bridegroom_Ring"
	Name: "Wedding Ring"
	Type: "IT_ARMOR"
	Gender: "SEX_MALE"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		skill WE_MALE,1;
		skill WE_FEMALE,1;
		skill WE_CALLPARTNER,1;
	">
},
{
	Id: 2635
	AegisName: "Bride_Ring"
	Name: "Wedding Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		skill WE_MALE,1;
		skill WE_FEMALE,1;
		skill WE_CALLPARTNER,1;
	">
},
{
	Id: 2636
	AegisName: "Gold_Ring_"
	Name: "Gold Christmas Ring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bLuk,1; ">
},
{
	Id: 2637
	AegisName: "Silver_Ring_"
	Name: "Silver Christmas Ring"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bLuk,1; ">
},
{
	Id: 2638
	AegisName: "Exorcize_Sachet"
	Name: "Sacred Incense"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bStr,1;
		bonus bLuk,1;
	">
},
{
	Id: 2639
	AegisName: "Purification_Sachet"
	Name: "Occult Incense"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,1;
		bonus bAgi,1;
	">
},
{
	Id: 2640
	AegisName: "Kafra_Ring"
	Name: "Kafra Ring"
	Type: "IT_ARMOR"
	Buy: 40000
	Weight: 200
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bAgi,1;
		bonus bLuk,1;
		bonus bMdef,1;
	">
},
{
	Id: 2641
	AegisName: "Fashionable_Sack"
	Name: "Fashion Hip Sack"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_ACC"
	EquipLv: 50
	Refine: false
	Script: <" bonus bStr,2; ">
},
{
	Id: 2642
	AegisName: "Serins_Gold_Ring"
	Name: "Serin's Gold Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2643
	AegisName: "Serins_Gold_Ring_"
	Name: "Serin's Gold Ring"
	Type: "IT_ARMOR"
	Buy: 45000
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2644
	AegisName: "The_Sign_"
	Name: "The Sign"
	Type: "IT_ARMOR"
	Buy: 2
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
	">
},
{
	Id: 2645
	AegisName: "Moonlight_Ring"
	Name: "Moonlight Ring"
	Type: "IT_ARMOR"
	Buy: 40000
	Weight: 200
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <" bonus bMdef,2; ">
},
{
	Id: 2646
	AegisName: "Bunch_Of_Carnation"
	Name: "Bunch of Carnations"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bAllStats,3; ">
},
{
	Id: 2647
	AegisName: "Nile_Rose"
	Name: "Nile Rose"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMaxHP,10; ">
},
{
	Id: 2648
	AegisName: "Morpheuss_Ring"
	Name: "Morpheus's Ring"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 33
	Refine: false
	Script: <"
		bonus bInt,1;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2649
	AegisName: "Morpheuss_Armlet"
	Name: "Morpheus's Bracelet"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 33
	Refine: false
	Script: <"
		bonus bInt,1;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2650
	AegisName: "Morriganes_Belt"
	Name: "Morrigane's Belt"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 61
	Refine: false
	Script: <"
		bonus bBaseAtk,5;
		bonus bCritical,3;
	">
},
{
	Id: 2651
	AegisName: "Morriganes_Pendant"
	Name: "Morrigane's Pendant"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 61
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus bCritical,3;
	">
},
{
	Id: 2652
	AegisName: "Cursed_Lucky_Brooch"
	Name: "Goddess of Fortune's Cursed Brooch"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 40
	Refine: false
	Script: <"
		bonus bCritical,6;
		bonus2 bAddEff2,Eff_Curse,50;
	">
},
{
	Id: 2653
	AegisName: "Sacrifice_Ring"
	Name: "Sacrifice Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
},
{
	Id: 2654
	AegisName: "Shinobis_Sash"
	Name: "Shinobi Sash"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 300
	Def: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Script: <"
		bonus bStr,1;
		bonus bAgi,1;
		bonus bMdef,1;
	">
},
{
	Id: 2655
	AegisName: "Bloody_Iron_Ball"
	Name: "Bloodied Shackle Ball"
	Type: "IT_ARMOR"
	Buy: 50000
	Weight: 4000
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
},
{
	Id: 2656
	AegisName: "Hyper_Changer"
	Name: "Armor Charm"
	Type: "IT_ARMOR"
	Buy: 20000
	Weight: 1000
	Def: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" bonus bMaxHP,50; ">
},
{
	Id: 2657
	AegisName: "Lab_Passport"
	Name: "Laboratory Permit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
},
{
	Id: 2658
	AegisName: "Nile_Rose_"
	Name: "Nile Rose"
	Type: "IT_ARMOR"
	Buy: 2
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bMaxHP,10; ">
},
{
	Id: 2659
	AegisName: "Vesper_Core01"
	Name: "Vesper Core 01"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bInt,2;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2660
	AegisName: "Vesper_Core02"
	Name: "Vesper Core 02"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bStr,3;
		bonus bBaseAtk,10;
	">
},
{
	Id: 2661
	AegisName: "Vesper_Core03"
	Name: "Vesper Core 03"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bAgi,3;
		bonus bFlee,5;
	">
},
{
	Id: 2662
	AegisName: "Vesper_Core04"
	Name: "Vesper Core 04"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bDex,3;
		bonus bHit,10;
	">
},
{
	Id: 2663
	AegisName: "Gauntlet_Of_Accuracy"
	Name: "Gauntlet of Hit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Loc: "EQP_ACC"
	EquipLv: 75
	Refine: false
	Script: <"
		bonus bHit,15;
		bonus bStr,1;
	">
},
{
	Id: 2664
	AegisName: "Scarf_Belt"
	Name: "Belcarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 75
	Refine: false
	Script: <"
		bonus bDex,2;
		bonus bInt,1;
	">
},
{
	Id: 2665
	AegisName: "Ring_Of_Exorcism"
	Name: "Exorcising Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <"
		bonus bMdef,1;
		bonus2 bExpAddRace,RC_Undead,5;
		bonus2 bExpAddRace,RC_Demon,5;
	">
},
{
	Id: 2666
	AegisName: "Lamp_Of_Hope"
	Name: "Lantern of Hope"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus2 bResEff,Eff_Blind,1000;
	">
},
{
	Id: 2667
	AegisName: "Glove_Of_Archer"
	Name: "Renown Archer's Gloves"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <"
		bonus bHit,5;
		bonus bCritical,5;
		bonus bDex,1;
	">
},
{
	Id: 2668
	AegisName: "Womens_Glory"
	Name: "Woman Glory"
	Type: "IT_ARMOR"
	Weight: 500
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2669
	AegisName: "Golden_Necklace_"
	Name: "RJC Necklace"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bMaxSP,10; ">
},
{
	Id: 2670
	AegisName: "Ring_Of_Longing"
	Name: "Ring of Longing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bFlee,5; ">
},
{
	Id: 2671
	AegisName: "Thimble_Of_Archer_"
	Name: "Bow Thimble"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ACC"
	EquipLv: 65
	Refine: false
	Script: <" bonus bLongAtkRate,3; ">
},
{
	Id: 2672
	AegisName: "Anniversary_Ring"
	Name: "3rd Anniversary Celebration Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2673
	AegisName: "Shining_Ring"
	Name: "Warrior's Shining Ring"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 48
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bBaseAtk,10;
		bonus bSPrecovRate,3;
	">
},
{
	Id: 2674
	AegisName: "Honor_Ring"
	Name: "Ring of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2675
	AegisName: "Lord_Ring"
	Name: "Lord Ring"
	Type: "IT_ARMOR"
	Weight: 10
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" bonus bAllStats,3; ">
},
{
	Id: 2676
	AegisName: "Hunter_Earring"
	Name: "Hunter's Earring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddMonsterDropItem,7618,100; ">
},
{
	Id: 2677
	AegisName: "Spiritual_Ring"
	Name: "Spiritual Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,2;
		bonus bDex,1;
	">
},
{
	Id: 2678
	AegisName: "Ring_Of_Flame_Lord"
	Name: "Ring Of Flame Lord"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
		bonus bBaseAtk,15;
		bonus2 bSubEle,Ele_Fire,10;
		bonus3 bAutoSpell,CH_SOULCOLLECT,1,30;
		bonus3 bAutoSpell,MO_EXPLOSIONSPIRITS,1,10;
		bonus3 bAutoSpell,PA_PRESSURE,2,30;
		bonus3 bAutoSpell,MG_FIREBALL,1,150;
		bonus3 bAutoSpell,KN_BOWLINGBASH,5,20;
	">
},
{
	Id: 2679
	AegisName: "Ring_Of_Resonance"
	Name: "Ring Of Resonance"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bAgi,2;
		bonus bVit,1;
		bonus bMdef,2;
		bonus4 bAutoSpellWhenHit,WZ_QUAGMIRE,1,50,0;
		bonus3 bAutoSpellWhenHit,AS_SPLASHER,10,20;
		bonus3 bAutoSpellWhenHit,AL_HEAL,10,30;
		bonus3 bAutoSpellWhenHit,HP_ASSUMPTIO,3,20;
		bonus3 bAutoSpellWhenHit,CG_TAROTCARD,5,20;
	">
},
{
	Id: 2680
	AegisName: "Lesser_Elemental_Ring"
	Name: "Lesser Elemental Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bAllStats,1;
		bonus3 bAutoSpell,WZ_ESTIMATION,1,80;
		bonus3 bAutoSpell,MC_IDENTIFY,1,50;
		bonus3 bAutoSpell,TF_PICKSTONE,1,100;
		bonus3 bAutoSpell,BS_GREED,1,10;
		bonus3 bAutoSpellWhenHit,TK_RUN,5,20;
		bonus3 bAutoSpellWhenHit,TK_HIGHJUMP,3,30;
		bonus3 bAutoSpellWhenHit,NV_FIRSTAID,1,100;
		bonus3 bAutoSpellWhenHit,TF_BACKSLIDING,1,50;
	">
},
{
	Id: 2681
	AegisName: "Republic_Ring"
	Name: "Republic Anniversary Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bAllStats,3; ">
},
{
	Id: 2682
	AegisName: "Ring_Of_Water"
	Name: "Ring of Water"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus2 bSubEle,Ele_Water,5; ">
},
{
	Id: 2683
	AegisName: "Ring_Of_Fire"
	Name: "Ring of Fire"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus2 bSubEle,Ele_Fire,5; ">
},
{
	Id: 2684
	AegisName: "Ring_Of_Wind"
	Name: "Ring of Wind"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus2 bSubEle,Ele_Wind,5; ">
},
{
	Id: 2685
	AegisName: "Ring_Of_Earth"
	Name: "Ring of Earth"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 20
	Refine: false
	Script: <" bonus2 bSubEle,Ele_Earth,5; ">
},
{
	Id: 2686
	AegisName: "Elven_Ears_C"
	Name: "Elven Ears"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 73
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bInt,1; ">
},
{
	Id: 2687
	AegisName: "Steel_Flower_C"
	Name: "Steel Flower"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 56
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bSubRace,RC_Plant,3; ">
},
{
	Id: 2688
	AegisName: "Critical_Ring_C"
	Name: "Critical Ring"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bCritical,10; ">
},
{
	Id: 2689
	AegisName: "Earring_C"
	Name: "Earring"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bInt,3; ">
},
{
	Id: 2690
	AegisName: "Ring_C"
	Name: "Ring"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bStr,4; ">
},
{
	Id: 2691
	AegisName: "Necklace_C"
	Name: "Necklace"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bVit,4; ">
},
{
	Id: 2692
	AegisName: "Glove_C"
	Name: "Glove"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bDex,4; ">
},
{
	Id: 2693
	AegisName: "Brooch_C"
	Name: "Brooch"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAgi,4; ">
},
{
	Id: 2694
	AegisName: "Rosary_C"
	Name: "Rosary"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,5;
		bonus bLuk,4;
	">
},
{
	Id: 2695
	AegisName: "Safety_Ring_C"
	Name: "Safety Ring"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,5; ">
},
{
	Id: 2696
	AegisName: "Vesper_Core01_C"
	Name: "Vesper Core 01"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bInt,2;
		bonus bMaxSPrate,5;
	">
},
{
	Id: 2697
	AegisName: "Vesper_Core02_C"
	Name: "Vesper Core 02"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bStr,3;
		bonus bBaseAtk,10;
	">
},
{
	Id: 2698
	AegisName: "Vesper_Core03_C"
	Name: "Vesper Core 03"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bAgi,3;
		bonus bFlee,5;
	">
},
{
	Id: 2699
	AegisName: "Vesper_Core04_C"
	Name: "Vesper Core 04"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bDex,3;
		bonus bHit,10;
	">
},
{
	Id: 2700
	AegisName: "Red_Silk_Seal"
	Name: "Red Silk Seal"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
},
{
	Id: 2701
	AegisName: "Orleans_Glove"
	Name: "Orleans's Glove"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <"
		bonus bDex,2;
		bonus bMatkRate,3;
	">
},
{
	Id: 2702
	AegisName: "Bison_Horn"
	Name: "Bison Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2703
	AegisName: "Expert_Ring"
	Name: "Expert Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 50
	Refine: false
	Script: <"
		bonus bDelayrate,-5;
		bonus bUseSPrate,5;
	">
},
{
	Id: 2704
	AegisName: "Golden_Accessory"
	Name: "Golden Accessories"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,4; ">
},
{
	Id: 2705
	AegisName: "Golden_Accessory2"
	Name: "Golden Accessories"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddMonsterDropItem,12018,500; ">
},
{
	Id: 2706
	AegisName: "Handcuff"
	Name: "Arrest Handcuffs"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2707
	AegisName: "GUSLI"
	Name: "GUSLI"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2708
	AegisName: "Chinese_Handicraft"
	Name: "Chinese Handicraft"
	Type: "IT_ARMOR"
	Weight: 50
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus3 bAutoSpell,MG_FIREBOLT,5,300; ">
},
{
	Id: 2709
	AegisName: "5_Anniversary_Coin"
	Name: "5th Anniversary Coin"
	Type: "IT_ARMOR"
	Buy: 2
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bAtkRate,5;
		bonus bMatkRate,5;
	">
},
{
	Id: 2710
	AegisName: "Bloody_Iron_Ball_C"
	Name: "Bloody Iron Ball"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bBaseAtk,30; ">
},
{
	Id: 2711
	AegisName: "Spiritual_Ring_C"
	Name: "Spiritual Ring"
	Type: "IT_ARMOR"
	Buy: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,2;
		bonus bDex,2;
	">
},
{
	Id: 2712
	AegisName: "Ragnarok_Limited_Ed"
	Name: "Ragnarok Limited Edition"
	Type: "IT_ARMOR"
	Weight: 300
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Script: <"
		bonus bVit,3;
		bonus bAgi,3;
		bonus bLuk,3;
	">
},
{
	Id: 2713
	AegisName: "Certificate_TW"
	Name: "Certificate"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2714
	AegisName: "Marvelous_Pandent"
	Name: "Marvelous Pendant"
	Type: "IT_ARMOR"
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2715
	AegisName: "Skul_Ring_"
	Name: "Skull Ring"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus2 bSubRace,RC_Undead,1; ">
},
{
	Id: 2716
	AegisName: "Librarian_Glove"
	Name: "Librarian Glove"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Job: {
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 2717
	AegisName: "Pocket_Watch_"
	Name: "Pocket Watch"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
},
{
	Id: 2718
	AegisName: "Lunatic_Brooch"
	Name: "Lunatic Brooch"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ACC"
	EquipLv: 65
	Refine: false
},
{
	Id: 2719
	AegisName: "Iron_Wrist"
	Name: "Iron Wrist"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_ACC"
	EquipLv: 50
	Refine: false
	Script: <"
		bonus2 bSkillAtk,SM_BASH,6;
		bonus2 bSkillAtk,MC_MAMMONITE,6;
	">
},
{
	Id: 2720
	AegisName: "Medal_Swordman"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
		Star_Gladiator: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bHit,10;
		bonus bMaxHP,500;
		bonus bMaxSP,50;
		bonus3 bAddEff,Eff_Stun,100,ATF_SHORT;
	">
},
{
	Id: 2721
	AegisName: "Medal_Thief"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Thief: true
		Assassin: true
		Rogue: true
		Ninja: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bFlee,10;
		bonus bMaxHP,300;
		bonus bMaxSP,80;
		bonus3 bAddEff,Eff_Poison,100,ATF_SHORT;
	">
},
{
	Id: 2722
	AegisName: "Medal_Acolyte"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bMdef,6;
		bonus bMaxHP,600;
		bonus3 bAddEff,Eff_Silence,100,ATF_SHORT;
	">
},
{
	Id: 2723
	AegisName: "Medal_Mage"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bMdef,6;
		bonus bMaxHP,600;
		bonus2 bAddEffWhenHit,Eff_Stone,100;
	">
},
{
	Id: 2724
	AegisName: "Medal_Archer"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bCritical,10;
		bonus bMaxHP,300;
		bonus bMaxSP,80;
		bonus3 bAddEff,Eff_Blind,100,ATF_LONG;
	">
},
{
	Id: 2725
	AegisName: "Medal_Merchant"
	Name: "Medal of Honor"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bAspdRate,10;
		bonus bMaxHP,500;
		bonus bMaxSP,50;
		bonus3 bAddEff,Eff_Curse,100,ATF_SHORT;
	">
},
{
	Id: 2726
	AegisName: "Icarus_Wing"
	Name: "Icarus Wings"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bMaxSP,50;
		bonus bDex,3;
	">
},
{
	Id: 2727
	AegisName: "Bowman_Scarf"
	Name: "Bowman Scarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bMaxSP,50;
		bonus bDex,3;
	">
},
{
	Id: 2728
	AegisName: "Cursed_Hand"
	Name: "Cursed Hand"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Script: <"
		bonus3 bAutoSpell,NPC_CRITICALWOUND,1,30;
		bonus bHit,10;
		bonus bHPrecovRate,20;
	">
},
{
	Id: 2729
	AegisName: "Diabolus_Ring"
	Name: "Diabolus Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bMaxHP,100;
		bonus bMaxSP,100;
		bonus bHealPower,5;
		bonus2 bAddDamageClass,1916,10;
		bonus2 bAddDamageClass,1917,10;
	">
},
{
	Id: 2730
	AegisName: "Morroc_Seal"
	Name: "Seal of Continental Guard"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,50;
		bonus bAspdRate,3;
	">
},
{
	Id: 2731
	AegisName: "Morroc_Charm_Stone"
	Name: "Rune Spellstone"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,50;
		bonus bCastrate,-1;
	">
},
{
	Id: 2732
	AegisName: "Morroc_Ring"
	Name: "Death Loop"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bCritical,5; ">
},
{
	Id: 2733
	AegisName: "Medal_Gunner"
	Name: "Sheriff Badge"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Job: {
		Gunslinger: true
	}
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
		bonus bCritical,10;
		bonus bMaxHP,300;
		bonus bMaxSP,80;
		bonus3 bAddEff,Eff_Blind,100,ATF_LONG;
	">
},
{
	Id: 2734
	AegisName: "Directive_A"
	Name: "Directive"
	Type: "IT_ARMOR"
	Def: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2735
	AegisName: "Directive_B"
	Name: "Directive"
	Type: "IT_ARMOR"
	Def: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 2736
	AegisName: "Navel_Ring"
	Name: "Navel Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 75
	Refine: false
	Script: <"
		bonus bDex,3;
		bonus bLuk,3;
		bonus bMdef,2;
	">
},
{
	Id: 2737
	AegisName: "Foot_Ring"
	Name: "Foot Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 75
	Refine: false
	Script: <"
		bonus bVit,3;
		bonus bMaxHPrate,10;
	">
},
{
	Id: 2738
	AegisName: "Shiny_Coin"
	Name: "Shiny Coin"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 6;
		bonus bMatkRate,6;
	">
},
{
	Id: 2739
	AegisName: "Ordinary_Coin"
	Name: "Ordinary Coin"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
	">
},
{
	Id: 2740
	AegisName: "Rusty_Coin"
	Name: "Rusty Coin"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 3;
		bonus bMatkRate,3;
	">
},
{
	Id: 2741
	AegisName: "All_In_One_Ring"
	Name: "All In One Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAllStats,1;
		bonus bNoCastCancel,0;
		bonus bCastrate,10;
		skill AL_HEAL,1;
		skill AL_TELEPORT,1;
	">
},
/*
{
	Id: 2742
	AegisName: "Lucky_Clip"
	Name: "Lucky Clip"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
},
*/
{
	Id: 2743
	AegisName: "Angelic_Ring"
	Name: "Angelic Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bInt,2;
		bonus bDex,1;
		bonus bMdef,2;
		autobonus3 "{ bonus bHealPower,20; }",50,3000,AL_HEAL;
		autobonus3 "{ bonus bHealPower,20; }",50,3000,AM_POTIONPITCHER;
		autobonus3 "{ bonus bHealPower,20; }",50,3000,PR_SANCTUARY;
	">
},
{
	Id: 2744
	AegisName: "Sprint_Ring"
	Name: "Sprint Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bCastrate,-10;
		bonus bDelayrate,-5;
	">
},
{
	Id: 2745
	AegisName: "Pinguicula_Corsage"
	Name: "Pinguicula Corsage"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bMdef,2;
		bonus bMaxSP,25;
	">
},
{
	Id: 2746
	AegisName: "Cold_Heart"
	Name: "Cold Heart"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Script: <" bonus bAgi,3; ">
},
{
	Id: 2747
	AegisName: "Black_Cat"
	Name: "Black Cat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		Rogue: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Script: <" bonus bDex,3; ">
},
{
	Id: 2748
	AegisName: "Cursed_Star"
	Name: "Cursed Star"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 84
	Refine: false
	Script: <"
		bonus bMdef,3;
		bonus bDex,2;
		bonus bLuk,-1;
		bonus2 bHPLossRate,50,10000;
		bonus3 bAddEff,Eff_Curse,200,ATF_WEAPON|ATF_LONG|ATF_TARGET;
	">
	OnUnequipScript: <" heal -300,0; ">
},
{
	Id: 2749
	AegisName: "Linen_Glove"
	Name: "Linen Glove"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 120
	Def: 1
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Script: <"
		bonus bMdef,2;
		bonus bAgi,2;
		bonus bDex,1;
	">
},
/*
{
	Id: 2750
	AegisName: "Summer_Night_Dream"
	Name: "Summer Night Dream"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_ACC"
	Refine: false
	Script: <" skill ALL_DREAM_SUMMERNIGHT,1; ">
},
*/
{
	Id: 2751
	AegisName: "Academy_Badge"
	Name: "Academy Of Badge"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		if(BaseLevel<80) {
			bonus bMaxHP,400;
			bonus bMaxSP,200;
		}

	">
},
{
	Id: 2752
	AegisName: "Praxinus_C"
	Name: "Praccsinos"
	Type: "IT_ARMOR"
	Buy: 2
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace, RC_All, 5;
		bonus bMatkRate,5;
	">
},
{
	Id: 2753
	AegisName: "Beholder_Ring"
	Name: "Beholder Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Formless,15; ">
},
{
	Id: 2754
	AegisName: "Hallow_Ring"
	Name: "Hallow Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Undead,15; ">
},
{
	Id: 2755
	AegisName: "Clamorous_Ring"
	Name: "Clamorous Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Brute,15; ">
},
{
	Id: 2756
	AegisName: "Chemical_Ring"
	Name: "Chemical Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Plant,15; ">
},
{
	Id: 2757
	AegisName: "Insecticide_Ring"
	Name: "Insecticide Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Insect,15; ">
},
{
	Id: 2758
	AegisName: "Fisher_Ring"
	Name: "Fischer Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Fish,15; ">
},
{
	Id: 2759
	AegisName: "Decussate_Ring"
	Name: "Decussate Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Demon,15; ">
},
{
	Id: 2760
	AegisName: "Bloody_Ring"
	Name: "Bloody Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_DemiPlayer,15; ">
},
{
	Id: 2761
	AegisName: "Satanic_Ring"
	Name: "Satanic Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Angel,15; ">
},
{
	Id: 2762
	AegisName: "Dragoon_Ring"
	Name: "Dragon Ring"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace,RC_Dragon,15; ">
},
{
	Id: 2763
	AegisName: "Skul_Ring_C"
	Name: "Neo Skull Ring"
	Type: "IT_ARMOR"
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 95
	Refine: false
	Script: <"
		bonus bAtkRate,5;
		bonus bMatkRate,5;
		bonus bMaxHPrate,5;
		bonus2 bSkillHeal,AL_HEAL,5;
		skill MG_SIGHT,1;
	">
},
{
	Id: 2764
	AegisName: "Small_Fishing_Rod"
	Name: "Small Fishing Rod"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 250
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2765
	AegisName: "Novice_Figure"
	Name: "Novice Figure"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bMaxHP,70;
		if(Class==Job_Novice || Class==Job_Novice_High || Class==Job_SuperNovice) bonus bMaxHP,30;
	">
},
{
	Id: 2766
	AegisName: "Swordman_Figure"
	Name: "Swordman Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bVit,1;
		if(BaseClass==Job_Swordman) bonus bDef,2;
	">
},
{
	Id: 2767
	AegisName: "Acolyte_Figure"
	Name: "Acolyte Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,1;
		if(BaseClass==Job_Acolyte) bonus bMaxSP,50;
	">
},
{
	Id: 2768
	AegisName: "Mage_Figure"
	Name: "Mage Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,1;
		if(BaseClass==Job_Mage) bonus bSPrecovRate,5;
	">
},
{
	Id: 2769
	AegisName: "Archer_Figure"
	Name: "Archer Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bDex,1;
		if(BaseClass==Job_Archer) bonus bBaseAtk,10;
	">
},
{
	Id: 2770
	AegisName: "Thief_Figure"
	Name: "Thief Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bAgi,1;
		if(BaseClass==Job_Thief) bonus bAspdRate,3;
	">
},
{
	Id: 2771
	AegisName: "Merchant_Figure"
	Name: "Merchant Figure"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bStr,1;
		if(BaseClass==Job_Merchant) bonus bCritical,5;
	">
},
{
	Id: 2772
	AegisName: "Krieger_Ring1"
	Name: "Glorious Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 81
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,300;
		bonus2 bSubEle,Ele_Water,10;
		bonus2 bSubEle,Ele_Wind,10;
		bonus2 bSubEle,Ele_Earth,10;
		bonus2 bSubEle,Ele_Fire,10;
		bonus bAspdRate,5;
		bonus bCastrate,-3;
		bonus bHealPower,5;
	">
},
{
	Id: 2773
	AegisName: "Krieger_Ring2"
	Name: "Glorious Mass-Production Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 61
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,2; ">
},
{
	Id: 2774
	AegisName: "Krieger_Ring3"
	Name: "Glorious Popularized Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,1; ">
},
{
	Id: 2775
	AegisName: "Lure"
	Name: "Lure"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
},
{
	Id: 2776
	AegisName: "Cool_Towel"
	Name: "Adventurer's Trusty Towel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	OnEquipScript: <" sc_start SC_SUMMER,-1,0; ">
	OnUnequipScript: <" sc_end SC_SUMMER; ">
},
{
	Id: 2777
	AegisName: "Shaman_Ring"
	Name: "Shaman Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <" bonus bUseSPrate,-5; ">
},
{
	Id: 2778
	AegisName: "Shaman_Earing"
	Name: "Shaman Earrings"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <" bonus bInt,2; ">
},
{
	Id: 2779
	AegisName: "Dark_Knight_Belt"
	Name: "Dark Knight Belt"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_ACC"
	EquipLv: 30
	Refine: false
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus bAgi,1;
	">
},
{
	Id: 2780
	AegisName: "Dark_Knight_Glove"
	Name: "Dark Knight Glove"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_ACC"
	EquipLv: 80
	Refine: false
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <" autobonus "{ bonus bAspdRate,2; }",10,10000,0,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }"; ">
},
{
	Id: 2781
	AegisName: "Aumduras_Grace"
	Name: "Aumdura's Benefit"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bAllStats,1;
		bonus bMdef,1;
	">
},
{
	Id: 2782
	AegisName: "Ring_Of_Wise_King"
	Name: "Ring of the Ancient Wise King"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,50;
		bonus bMaxSP,20;
	">
},
{
	Id: 2783
	AegisName: "Eyes_Stone_Ring"
	Name: "Eye Stone Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	EquipLv: 70
	Refine: false
	Script: <"
		bonus bCritical,2;
		bonus bMaxSP,25;
	">
},
{
	Id: 2784
	AegisName: "Oh_Holy_Night"
	Name: "Christmas Musicbox"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" skill ALL_WEWISH,1; ">
},
{
	Id: 2785
	AegisName: "Orleans_Glove_M"
	Name: "Orlean's Gloves"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 90
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus bMatkRate,3;
	">
},
{
	Id: 2786
	AegisName: "Spiritual_Ring_M"
	Name: "Spiritual Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bInt,2;
		bonus bDex,1;
	">
},
{
	Id: 2787
	AegisName: "Waterdrop_Brooch"
	Name: "Waterdrop Brooch"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 75
	Refine: false
	Script: <"
		bonus2 bSubEle,Ele_Water,5;
		bonus bMaxHP,80;
		bonus bMdef,2;
	">
},
{
	Id: 2788
	AegisName: "Bradium_Earing"
	Name: "Bradium Earring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <"
		bonus bMatkRate,2;
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 2789
	AegisName: "Bradium_Ring"
	Name: "Bradium Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <"
		bonus2 bAddRace, RC_All, 2;
		bonus bStr,1;
		bonus bVit,1;
	">
},
{
	Id: 2790
	AegisName: "Bradium_Brooch"
	Name: "Bradium Brooch"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	EquipLv: 60
	Refine: false
	Script: <"
		bonus bFlee,4;
		bonus bAspdRate,2;
		bonus bAgi,1;
	">
},
{
	Id: 2791
	AegisName: "Just_Got_Fish"
	Name: "Fresh Fish"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Slots: 1
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" bonus bHit,3; ">
},
/*
{
	Id: 2792
	AegisName: "Ring_Of_Flame_Lord_I"
	Name: "Ring of Flame Lord"
	Type: "IT_ARMOR"
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
		bonus bBaseAtk,15;
		bonus2 bSubEle,Ele_Fire,10;
		bonus3 bAutoSpell,CH_SOULCOLLECT,1,30;
		bonus3 bAutoSpell,MO_EXPLOSIONSPIRITS,1,10;
		bonus3 bAutoSpell,PA_PRESSURE,2,30;
		bonus3 bAutoSpell,MG_FIREBALL,1,150;
		bonus3 bAutoSpell,KN_BOWLINGBASH,5,20;
	">
},
*/
/*
{
	Id: 2793
	AegisName: "Ring_Of_Resonance_I"
	Name: "Ring of Resonance"
	Type: "IT_ARMOR"
	Def: 2
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bAgi,2;
		bonus bVit,1;
		bonus bMdef,2;
		bonus4 bAutoSpellWhenHit,WZ_QUAGMIRE,1,50,0;
		bonus3 bAutoSpellWhenHit,AS_SPLASHER,10,20;
		bonus3 bAutoSpellWhenHit,AL_HEAL,10,30;
		bonus3 bAutoSpellWhenHit,HP_ASSUMPTIO,3,20;
		bonus3 bAutoSpellWhenHit,CG_TAROTCARD,5,20;
	">
},
*/
{
	Id: 2794
	AegisName: "Magic_Stone_Ring"
	Name: "Magic Stone Ring"
	Type: "IT_ARMOR"
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bStr,2; ">
},
{
	Id: 2795
	AegisName: "Green_Apple_Ring"
	Name: "Green Apple Ring"
	Type: "IT_ARMOR"
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAllStats,6;
		if(JobLevel <30) {
			bonus bAllStats,(JobLevel/5);
		}

	">
},
{
	Id: 2796
	AegisName: "Magical_Stone"
	Name: "Rocks"
	Type: "IT_ARMOR"
	Weight: 200
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddDamageClass,2047,10;
		bonus2 bAddDefClass,2048,-10;
		bonus3 bAddClassDropItem,6152,2047,70;
	">
},
{
	Id: 2797
	AegisName: "Magical_Stone_"
	Name: "Rocks"
	Type: "IT_ARMOR"
	Weight: 200
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddDamageClass,2049,10;
		bonus2 bAddDefClass,2050,-10;
		bonus3 bAddClassDropItem,6151,2049,70;
	">
},
{
	Id: 2798
	AegisName: "Will_Of_Exhausted_Angel"
	Name: "Will Of Exhausted Angel"
	Type: "IT_ARMOR"
	Weight: 200
	Job: {
		Priest: true
		Monk: true
	}
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		if(strcharinfo(PC_MAP)=="job3_arch02") {
			bonus2 bAddDefClass,1761,50;
			bonus2 bAddDefClass,1762,50;
		}

	">
},
{
	Id: 2799
	AegisName: "Kuirpenring"
	Name: "Kuirpenring"
	Type: "IT_ARMOR"
	Weight: 100
	Slots: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bMdef,1; ">
},
{
	Id: 2800
	AegisName: "Accelerator"
	Name: "Accelerator"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 100
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bAgi,2; ">
},
{
	Id: 2801
	AegisName: "Hovering_Booster"
	Name: "Hovering Booster"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 2000
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bAgi,1; ">
},
{
	Id: 2802
	AegisName: "Suicidal_Device"
	Name: "Suicidal Device"
	Type: "IT_ARMOR"
	Buy: 500000
	Weight: 1000
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
},
{
	Id: 2803
	AegisName: "Shape_Shifter"
	Name: "Shape Shifter"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 500
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bInt,3; ">
},
{
	Id: 2804
	AegisName: "Cooling_Device"
	Name: "Cooling Device"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 2500
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bDex,1; ">
},
{
	Id: 2805
	AegisName: "Mag_Field_Generator"
	Name: "Magnetic Field Generator"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 6000
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bDex,1; ">
},
{
	Id: 2806
	AegisName: "Barrier_Builder"
	Name: "Barrier Builder"
	Type: "IT_ARMOR"
	Buy: 150000
	Weight: 8000
	Def: 3
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bDex,1; ">
},
{
	Id: 2807
	AegisName: "Repair_Kit"
	Name: "Repair Kit"
	Type: "IT_ARMOR"
	Buy: 200000
	Weight: 400
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
},
{
	Id: 2808
	AegisName: "Camouflage_Generator"
	Name: "Camouflage Generator"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 1000
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_ACC"
	EquipLv: 99
	Refine: false
	Script: <" bonus bAgi,3; ">
},
{
	Id: 2819
	AegisName: "Swordman_Manual"
	Name: "Swordsman Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill SM_BASH,1;
		skill SM_PROVOKE,1;
		skill SM_MAGNUM,1;
	">
},
{
	Id: 2820
	AegisName: "Thief_Manual"
	Name: "Thief Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill TF_DOUBLE,3;
		bonus bDoubleRate,15;
		skill TF_STEAL,1;
		skill TF_HIDING,1;
		skill TF_POISON,1;
	">
},
{
	Id: 2821
	AegisName: "Acolyte_Manual"
	Name: "Acolyte Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill AL_HEAL,1;
		skill AL_INCAGI,1;
		skill AL_BLESSING,1;
	">
},
{
	Id: 2822
	AegisName: "Archer_Manual"
	Name: "Archer Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill AC_OWL,1;
		skill AC_CONCENTRATION,1;
	">
},
{
	Id: 2823
	AegisName: "Merchant_Manual"
	Name: "Merchant Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill MC_DISCOUNT,1;
		skill MC_OVERCHARGE,10;
		skill MC_IDENTIFY,1;
		skill MC_MAMMONITE,1;
	">
},
{
	Id: 2824
	AegisName: "Mage_Manual"
	Name: "Mage Manual"
	Type: "IT_ARMOR"
	Weight: 100
	Job: {
		Novice: true
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxSP,100;
		skill MG_SRECOVERY,1;
		skill MG_COLDBOLT,1;
		skill MG_FIREWALL,1;
		skill MG_FIREBOLT,1;
	">
},

//== Cards =================================================
{
	Id: 4001
	AegisName: "Poring_Card"
	Name: "Poring Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bLuk,2;
		bonus bFlee2,1;
	">
},
{
	Id: 4002
	AegisName: "Fabre_Card"
	Name: "Fabre Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bVit,1;
		bonus bMaxHP,100;
	">
},
{
	Id: 4003
	AegisName: "Pupa_Card"
	Name: "Pupa Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bMaxHP,700; ">
},
{
	Id: 4004
	AegisName: "Drops_Card"
	Name: "Drops Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bDex,1;
		bonus bHit,3;
	">
},
{
	Id: 4005
	AegisName: "Poring__Card"
	Name: "Santa Poring Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Dark,20; ">
},
{
	Id: 4006
	AegisName: "Lunatic_Card"
	Name: "Lunatic Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bLuk,1;
		bonus bCritical,1;
		bonus bFlee2,1;
	">
},
{
	Id: 4007
	AegisName: "Pecopeco_Egg_Card"
	Name: "Peco Peco Egg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Formless,20; ">
},
{
	Id: 4008
	AegisName: "Picky_Card"
	Name: "Picky Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bStr,1;
		bonus bBaseAtk,10;
	">
},
{
	Id: 4009
	AegisName: "Chonchon_Card"
	Name: "Chonchon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bAgi,1;
		bonus bFlee,2;
	">
},
{
	Id: 4010
	AegisName: "Wilow_Card"
	Name: "Willow Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bMaxSP,80; ">
},
{
	Id: 4011
	AegisName: "Picky__Card"
	Name: "Picky Egg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bVit,1;
		bonus bMaxHP,100;
	">
},
{
	Id: 4012
	AegisName: "Thief_Bug_Egg_Card"
	Name: "Thief Bug Egg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bMaxHP,400; ">
},
{
	Id: 4013
	AegisName: "Andre_Egg_Card"
	Name: "Andre Egg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bMaxHPrate,5; ">
},
{
	Id: 4014
	AegisName: "Roda_Frog_Card"
	Name: "Roda Frog Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMaxHP,400;
		bonus bMaxSP,50;
	">
},
{
	Id: 4015
	AegisName: "Condor_Card"
	Name: "Condor Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bFlee,10; ">
},
{
	Id: 4016
	AegisName: "Thief_Bug_Card"
	Name: "Thief Bug Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bAgi,1; ">
},
{
	Id: 4017
	AegisName: "Savage_Babe_Card"
	Name: "Savage Babe Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEff,Eff_Stun,500; ">
},
{
	Id: 4018
	AegisName: "Andre_Larva_Card"
	Name: "Andre Larva Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bInt,1;
		bonus bMaxSP,10;
	">
},
{
	Id: 4019
	AegisName: "Hornet_Card"
	Name: "Hornet Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bStr,1;
		bonus bBaseAtk,3;
	">
},
{
	Id: 4020
	AegisName: "Farmiliar_Card"
	Name: "Familiar Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Blind,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4021
	AegisName: "Rocker_Card"
	Name: "Rocker Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDex,1;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4022
	AegisName: "Spore_Card"
	Name: "Spore Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bVit,2; ">
},
{
	Id: 4023
	AegisName: "Desert_Wolf_Babe_Card"
	Name: "Baby Desert Wolf Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bInt,1; ">
},
{
	Id: 4024
	AegisName: "Plankton_Card"
	Name: "Plankton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Sleep,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4025
	AegisName: "Skeleton_Card"
	Name: "Skeleton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,10;
		bonus2 bAddEff,Eff_Stun,200;
	">
},
{
	Id: 4026
	AegisName: "Thief_Bug_Female_Card"
	Name: "Female Thief Bug Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bAgi,1;
		bonus bFlee,1;
	">
},
{
	Id: 4027
	AegisName: "Kukre_Card"
	Name: "Kukre Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bAgi,2; ">
},
{
	Id: 4028
	AegisName: "Tarou_Card"
	Name: "Tarou Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bStr,2; ">
},
{
	Id: 4029
	AegisName: "Wolf_Card"
	Name: "Wolf Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,15;
		bonus bCritical,1;
	">
},
{
	Id: 4030
	AegisName: "Mandragora_Card"
	Name: "Mandragora Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Wind,20; ">
},
{
	Id: 4031
	AegisName: "Pecopeco_Card"
	Name: "Peco Peco Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bMaxHPrate,10; ">
},
{
	Id: 4032
	AegisName: "Ambernite_Card"
	Name: "Ambernite Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bDef,2; ">
},
{
	Id: 4033
	AegisName: "Poporing_Card"
	Name: "Poporing Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill TF_DETOXIFY,1; ">
},
{
	Id: 4034
	AegisName: "Worm_Tail_Card"
	Name: "Wormtail Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bDex,2; ">
},
{
	Id: 4035
	AegisName: "Hydra_Card"
	Name: "Hydra Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_DemiPlayer,20; ">
},
{
	Id: 4036
	AegisName: "Muka_Card"
	Name: "Muka Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bHPrecovRate,10; ">
},
{
	Id: 4037
	AegisName: "Snake_Card"
	Name: "Snake Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Poison,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4038
	AegisName: "Zombie_Card"
	Name: "Zombie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bHPrecovRate,20; ">
},
{
	Id: 4039
	AegisName: "Stainer_Card"
	Name: "Stainer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Silence,2000;
		bonus bDef,1;
	">
},
{
	Id: 4040
	AegisName: "Creamy_Card"
	Name: "Creamy Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill AL_TELEPORT,1; ">
},
{
	Id: 4041
	AegisName: "Coco_Card"
	Name: "Coco Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Sleep,2000;
		bonus bDef,1;
	">
},
{
	Id: 4042
	AegisName: "Steel_Chonchon_Card"
	Name: "Steel Chonchon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus2 bSubEle,Ele_Wind,10;
		bonus bDef,2;
	">
},
{
	Id: 4043
	AegisName: "Andre_Card"
	Name: "Andre Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bBaseAtk,20; ">
},
{
	Id: 4044
	AegisName: "Smokie_Card"
	Name: "Smokie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill TF_HIDING,1; ">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 4045
	AegisName: "Horn_Card"
	Name: "Horn Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bLongAtkDef,35; ">
},
{
	Id: 4046
	AegisName: "Martin_Card"
	Name: "Martin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Blind,2000;
		bonus bDef,1;
	">
},
{
	Id: 4047
	AegisName: "Ghostring_Card"
	Name: "Ghostring Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Ghost;
		bonus bHPrecovRate,-25;
	">
},
{
	Id: 4048
	AegisName: "Poison_Spore_Card"
	Name: "Poison Spore Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill TF_POISON,3; ">
},
{
	Id: 4049
	AegisName: "Vadon_Card"
	Name: "Vadon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Fire,20; ">
},
{
	Id: 4050
	AegisName: "Thief_Bug_Male_Card"
	Name: "Male Thief Bug Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bAgi,2; ">
},
{
	Id: 4051
	AegisName: "Yoyo_Card"
	Name: "Yoyo Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bFlee2,5;
		bonus bAgi,1;
	">
},
{
	Id: 4052
	AegisName: "Elder_Wilow_Card"
	Name: "Elder Willow Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bInt,2; ">
},
{
	Id: 4053
	AegisName: "Vitata_Card"
	Name: "Vitata Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		skill AL_HEAL,1;
		bonus bUseSPrate,25;
	">
},
{
	Id: 4054
	AegisName: "Angeling_Card"
	Name: "Angeling Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bDefEle,Ele_Holy; ">
},
{
	Id: 4055
	AegisName: "Marina_Card"
	Name: "Marina Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Freeze,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4056
	AegisName: "Dustiness_Card"
	Name: "Dustiness Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Wind,30;
		bonus bFlee,5;
	">
},
{
	Id: 4057
	AegisName: "Metaller_Card"
	Name: "Metaller Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Silence,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4058
	AegisName: "Thara_Frog_Card"
	Name: "Thara Frog Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_DemiPlayer,30; ">
},
{
	Id: 4059
	AegisName: "Soldier_Andre_Card"
	Name: "Soldier Andre Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Plant,30; ">
},
{
	Id: 4060
	AegisName: "Goblin_Card"
	Name: "Goblin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Brute,20; ">
},
{
	Id: 4061
	AegisName: "Cornutus_Card"
	Name: "Cornutus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bUnbreakableArmor,0;
		bonus bDef,1;
	">
},
{
	Id: 4062
	AegisName: "Anacondaq_Card"
	Name: "Anacondaq Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Poison,20; ">
},
{
	Id: 4063
	AegisName: "Caramel_Card"
	Name: "Caramel Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Insect,20; ">
},
{
	Id: 4064
	AegisName: "Zerom_Card"
	Name: "Zerom Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bDex,3; ">
},
{
	Id: 4065
	AegisName: "Kaho_Card"
	Name: "Kaho Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Earth,20; ">
},
{
	Id: 4066
	AegisName: "Orc_Warrior_Card"
	Name: "Orc Warrior Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Brute,30; ">
},
{
	Id: 4067
	AegisName: "Megalodon_Card"
	Name: "Megalodon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bResEff,Eff_Freeze,2000;
		bonus bDef,1;
	">
},
{
	Id: 4068
	AegisName: "Scorpion_Card"
	Name: "Scorpion Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Plant,20; ">
},
{
	Id: 4069
	AegisName: "Drainliar_Card"
	Name: "Drainliar Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Water,20; ">
},
{
	Id: 4070
	AegisName: "Eggyra_Card"
	Name: "Eggyra Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bSPrecovRate,15; ">
},
{
	Id: 4071
	AegisName: "Orc_Zombie_Card"
	Name: "Orc Zombie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Undead,30;
		bonus bFlee,5;
	">
},
{
	Id: 4072
	AegisName: "Golem_Card"
	Name: "Golem Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bUnbreakableWeapon,0;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4073
	AegisName: "Pirate_Skel_Card"
	Name: "Pirate Skeleton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill MC_DISCOUNT,5; ">
},
{
	Id: 4074
	AegisName: "BigFoot_Card"
	Name: "Bigfoot Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Insect,30; ">
},
{
	Id: 4075
	AegisName: "Argos_Card"
	Name: "Argos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bResEff,Eff_Stone,2000;
		bonus bDef,1;
	">
},
{
	Id: 4076
	AegisName: "Magnolia_Card"
	Name: "Magnolia Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Curse,500;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4077
	AegisName: "Phen_Card"
	Name: "Phen Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bNoCastCancel,0;
		bonus bCastrate,25;
	">
},
{
	Id: 4078
	AegisName: "Savage_Card"
	Name: "Savage Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bVit,3; ">
},
{
	Id: 4079
	AegisName: "Mantis_Card"
	Name: "Mantis Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bStr,3; ">
},
{
	Id: 4080
	AegisName: "Flora_Card"
	Name: "Flora Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Fish,20; ">
},
{
	Id: 4081
	AegisName: "Hode_Card"
	Name: "Hode Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Earth,30;
		bonus bFlee,5;
	">
},
{
	Id: 4082
	AegisName: "Desert_Wolf_Card"
	Name: "Desert Wolf Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddSize,Size_Small,15;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4083
	AegisName: "Rafflesia_Card"
	Name: "Rafflesia Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Fish,30; ">
},
{
	Id: 4084
	AegisName: "Marine_Sphere_Card"
	Name: "Marine Sphere Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill SM_MAGNUM,3; ">
},
{
	Id: 4085
	AegisName: "Orc_Skeleton_Card"
	Name: "Orc Skeleton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Holy,20; ">
},
{
	Id: 4086
	AegisName: "Soldier_Skeleton_Card"
	Name: "Soldier Skeleton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bCritical,9; ">
},
{
	Id: 4087
	AegisName: "Giearth_Card"
	Name: "Giearth Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Confusion,10000;
		bonus2 bSubEle,Ele_Earth,15;
	">
},
{
	Id: 4088
	AegisName: "Frilldora_Card"
	Name: "Frilldora Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" skill AS_CLOAKING,1; ">
	OnUnequipScript: <" sc_end SC_CLOAKING; ">
},
{
	Id: 4089
	AegisName: "Sword_Fish_Card"
	Name: "Swordfish Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Water;
		bonus bDef,1;
	">
},
{
	Id: 4090
	AegisName: "Munak_Card"
	Name: "Munak Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bResEff,Eff_Stone,1500;
		bonus2 bSubEle,Ele_Earth,5;
		bonus bDef,1;
	">
},
{
	Id: 4091
	AegisName: "Kobold_Card"
	Name: "Kobold Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bStr,1;
		bonus bCritical,4;
	">
},
{
	Id: 4092
	AegisName: "Skel_Worker_Card"
	Name: "Skeleton Worker Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddSize,Size_Medium,15;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4093
	AegisName: "Obeaune_Card"
	Name: "Obeaune Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill AL_CURE,1; ">
},
{
	Id: 4094
	AegisName: "Archer_Skeleton_Card"
	Name: "Archer Skeleton Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bLongAtkRate,10; ">
},
{
	Id: 4095
	AegisName: "Marse_Card"
	Name: "Marse Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Water,30;
		bonus bFlee,5;
	">
},
{
	Id: 4096
	AegisName: "Zenorc_Card"
	Name: "Zenorc Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddEff,Eff_Poison,400;
		bonus bBaseAtk,10;
	">
},
{
	Id: 4097
	AegisName: "Matyr_Card"
	Name: "Matyr Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxHPrate,10;
		bonus bAgi,1;
	">
},
{
	Id: 4098
	AegisName: "Dokebi_Card"
	Name: "Dokebi Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Wind;
		bonus bDef,1;
	">
},
{
	Id: 4099
	AegisName: "Pasana_Card"
	Name: "Pasana Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Fire;
		bonus bDef,1;
	">
},
{
	Id: 4100
	AegisName: "Sohee_Card"
	Name: "Sohee Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxSPrate,15;
		bonus bSPrecovRate,3;
	">
},
{
	Id: 4101
	AegisName: "Sand_Man_Card"
	Name: "Sandman Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Earth;
		bonus bDef,1;
	">
},
{
	Id: 4102
	AegisName: "Whisper_Card"
	Name: "Whisper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bFlee,20;
		bonus2 bSubEle,Ele_Ghost,-50;
	">
},
{
	Id: 4103
	AegisName: "Horong_Card"
	Name: "Horong Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill MG_SIGHT,1; ">
	OnUnequipScript: <" sc_end SC_SIGHT; ">
},
{
	Id: 4104
	AegisName: "Requiem_Card"
	Name: "Requiem Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEff,Eff_Confusion,500; ">
},
{
	Id: 4105
	AegisName: "Marc_Card"
	Name: "Marc Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus2 bSubEle,Ele_Water,5;
		bonus2 bResEff,Eff_Freeze,10000;
	">
},
{
	Id: 4106
	AegisName: "Mummy_Card"
	Name: "Mummy Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bHit,20; ">
},
{
	Id: 4107
	AegisName: "Verit_Card"
	Name: "Verit Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxHPrate,8;
		bonus bMaxSPrate,8;
	">
},
{
	Id: 4108
	AegisName: "Myst_Card"
	Name: "Myst Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Poison,30;
		bonus bFlee,5;
	">
},
{
	Id: 4109
	AegisName: "Jakk_Card"
	Name: "Jakk Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Fire,30;
		bonus bFlee,5;
	">
},
{
	Id: 4110
	AegisName: "Ghoul_Card"
	Name: "Ghoul Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Poison,2000;
		bonus bDef,1;
	">
},
{
	Id: 4111
	AegisName: "Strouf_Card"
	Name: "Strouf Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Demon,20; ">
},
{
	Id: 4112
	AegisName: "Marduk_Card"
	Name: "Marduk Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus2 bResEff,Eff_Silence,10000; ">
},
{
	Id: 4113
	AegisName: "Marionette_Card"
	Name: "Marionette Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Ghost,30;
		bonus bFlee,5;
	">
},
{
	Id: 4114
	AegisName: "Argiope_Card"
	Name: "Argiope Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Poison;
		bonus bDef,1;
	">
},
{
	Id: 4115
	AegisName: "Hunter_Fly_Card"
	Name: "Hunter Fly Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bHPDrainRate,30,15; ">
},
{
	Id: 4116
	AegisName: "Isis_Card"
	Name: "Isis Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Dark,30;
		bonus bFlee,5;
	">
},
{
	Id: 4117
	AegisName: "Side_Winder_Card"
	Name: "Sidewinder Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		skill TF_DOUBLE,1;
		bonus bDoubleRate,5;
	">
},
{
	Id: 4118
	AegisName: "Petit_Card"
	Name: "Earth Petite Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Dragon,20; ">
},
{
	Id: 4119
	AegisName: "Bathory_Card"
	Name: "Bathory Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bDefEle,Ele_Dark; ">
},
{
	Id: 4120
	AegisName: "Petit__Card"
	Name: "Sky Petite Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Dragon,30; ">
},
{
	Id: 4121
	AegisName: "Phreeoni_Card"
	Name: "Phreeoni Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bHit,100; ">
},
{
	Id: 4122
	AegisName: "Deviruchi_Card"
	Name: "Deviruchi Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bStr,1;
		bonus2 bResEff,Eff_Blind,10000;
	">
},
{
	Id: 4123
	AegisName: "Eddga_Card"
	Name: "Eddga Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bMaxHPrate,-25; ">
	OnEquipScript: <" sc_start4 SC_ENDURE,60000,10,0,0,1; ">
	OnUnequipScript: <" sc_end SC_ENDURE; ">
},
{
	Id: 4124
	AegisName: "Medusa_Card"
	Name: "Medusa Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubRace,RC_Demon,15;
		bonus2 bResEff,Eff_Stone,10000;
	">
},
{
	Id: 4125
	AegisName: "Deviace_Card"
	Name: "Deviace Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,7;
		bonus2 bAddRace,RC_Brute,7;
		bonus2 bAddRace,RC_Plant,7;
		bonus2 bAddRace,RC_Insect,7;
	">
},
{
	Id: 4126
	AegisName: "Minorous_Card"
	Name: "Minorous Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddSize,Size_Large,15;
		bonus bBaseAtk,5;
	">
},
{
	Id: 4127
	AegisName: "Nightmare_Card"
	Name: "Nightmare Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bResEff,Eff_Sleep,10000;
		bonus bAgi,1;
	">
},
{
	Id: 4128
	AegisName: "Golden_Bug_Card"
	Name: "Golden Thief Bug Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bNoMagicDamage,100;
		bonus bUseSPrate,100;
	">
},
{
	Id: 4129
	AegisName: "Baphomet__Card"
	Name: "Bapho Jr. Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bAgi,3;
		bonus bCritical,1;
	">
},
{
	Id: 4130
	AegisName: "Scorpion_King_Card"
	Name: "Scorpion King Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Undead,20; ">
},
{
	Id: 4131
	AegisName: "Moonlight_Flower_Card"
	Name: "Moonlight Flower Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bSpeedRate,25; ">
},
{
	Id: 4132
	AegisName: "Mistress_Card"
	Name: "Mistress Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bNoGemStone,0;
		bonus bUseSPrate,25;
	">
},
{
	Id: 4133
	AegisName: "Daydric_Card"
	Name: "Raydric Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus2 bSubEle,Ele_Neutral,20; ">
},
{
	Id: 4134
	AegisName: "Dracula_Card"
	Name: "Dracula Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPDrainRate,100,5; ">
},
{
	Id: 4135
	AegisName: "Orc_Load_Card"
	Name: "Orc Lord Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bShortWeaponDamageReturn,30; ">
},
{
	Id: 4136
	AegisName: "Khalitzburg_Card"
	Name: "Khalitzburg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Demon,30; ">
},
{
	Id: 4137
	AegisName: "Drake_Card"
	Name: "Drake Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bNoSizeFix,0; ">
},
{
	Id: 4138
	AegisName: "Anubis_Card"
	Name: "Anubis Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Angel,30; ">
},
{
	Id: 4139
	AegisName: "Joker_Card"
	Name: "Joker Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill TF_STEAL,1; ">
},
{
	Id: 4140
	AegisName: "Knight_Of_Abyss_Card"
	Name: "Abysmal Knight Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace,RC_Boss,25; ">
},
{
	Id: 4141
	AegisName: "Evil_Druid_Card"
	Name: "Evil Druid Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDefEle,Ele_Undead;
		bonus bInt,1;
		bonus bDef,1;
	">
},
{
	Id: 4142
	AegisName: "Doppelganger_Card"
	Name: "Doppelganger Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bAspdRate,10; ">
},
{
	Id: 4143
	AegisName: "Orc_Hero_Card"
	Name: "Orc Hero Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bVit,3;
		bonus2 bResEff,Eff_Stun,10000;
	">
},
{
	Id: 4144
	AegisName: "Osiris_Card"
	Name: "Osiris Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bRestartFullRecover,0; ">
},
{
	Id: 4145
	AegisName: "Berzebub_Card"
	Name: "Berzebub Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bCastrate,-30; ">
},
{
	Id: 4146
	AegisName: "Maya_Card"
	Name: "Maya Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bMagicDamageReturn,50; ">
},
{
	Id: 4147
	AegisName: "Baphomet_Card"
	Name: "Baphomet Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bHit,-10;
		bonus bSplashRange,1;
	">
},
{
	Id: 4148
	AegisName: "Pharaoh_Card"
	Name: "Pharaoh Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bUseSPrate,-30; ">
},
{
	Id: 4149
	AegisName: "Gargoyle_Card"
	Name: "Gargoyle Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12028,RC_Insect,100; ">
},
{
	Id: 4150
	AegisName: "Goat_Card"
	Name: "Goat Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		if(getrefine()<6) {
			bonus bDef,2;
			bonus bMdef,5;
		}

	">
},
{
	Id: 4151
	AegisName: "Gajomart_Card"
	Name: "Gajomart Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Plant,-20;
		bonus2 bExpAddRace,RC_Plant,10;
	">
},
{
	Id: 4152
	AegisName: "Galapago_Card"
	Name: "Galapago Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddItemHealRate,Apple_Juice,50;
		bonus2 bAddItemHealRate,Banana_Juice,50;
		bonus2 bAddItemHealRate,Carrot_Juice,50;
		bonus3 bAddMonsterDropItem,531,RC_Insect,300;
		bonus3 bAddMonsterDropItem,532,RC_Insect,300;
		bonus3 bAddMonsterDropItem,534,RC_Insect,300;
	">
},
{
	Id: 4153
	AegisName: "Crab_Card"
	Name: "Crab Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,5;
		bonus2 bAddDamageClass,1266,30;
	">
},
{
	Id: 4154
	AegisName: "Rice_Cake_Boy_Card"
	Name: "Dumpling Child Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddItemHealRate,Candy,50;
		bonus2 bAddItemHealRate,Candy_Striper,50;
		bonus3 bAddMonsterDropItem,529,RC_DemiPlayer,300;
		bonus3 bAddMonsterDropItem,530,RC_DemiPlayer,100;
	">
},
{
	Id: 4155
	AegisName: "Goblin_Leader_Card"
	Name: "Goblin Leader Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace2,RC2_Goblin,30; ">
},
{
	Id: 4156
	AegisName: "Steam_Goblin_Card"
	Name: "Goblin Steamrider Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Formless,7;
	">
},
{
	Id: 4157
	AegisName: "Goblin_Archer_Card"
	Name: "Goblin Archer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Undead,7;
	">
},
{
	Id: 4158
	AegisName: "Flying_Deleter_Card"
	Name: "Sky Deleter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bHPrecovRate,-100;
		bonus bHPGainValue,100;
	">
},
{
	Id: 4159
	AegisName: "Nine_Tail_Card"
	Name: "Nine Tail Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bAgi,2;
		if(getrefine()>8) bonus bFlee,20;
	">
},
{
	Id: 4160
	AegisName: "Antique_Firelock_Card"
	Name: "Firelock Soldier Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bStr,2;
		if(getrefine()>8) {
			bonus bMaxHPrate,10;
			bonus bMaxSPrate,10;
		}

	">
},
{
	Id: 4161
	AegisName: "Grand_Peco_Card"
	Name: "Grand Peco Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus3 bAutoSpellWhenHit,PR_GLORIA,1,50; ">
},
{
	Id: 4162
	AegisName: "Grizzly_Card"
	Name: "Grizzly Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Blind,300; ">
},
{
	Id: 4163
	AegisName: "Gryphon_Card"
	Name: "Gryphon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bFlee,2;
		bonus bCritical,7;
		if(BaseClass==Job_Swordman) bonus3 bAutoSpell,KN_BOWLINGBASH,5,10;
	">
},
{
	Id: 4164
	AegisName: "Gullinbursti_Card"
	Name: "Gullinbursti Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Fish,-20;
		bonus2 bExpAddRace,RC_Fish,10;
	">
},
{
	Id: 4165
	AegisName: "Gig_Card"
	Name: "Gig Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Insect,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4166
	AegisName: "Nightmare_Terror_Card"
	Name: "Nightmare Terror Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Curse,300; ">
},
{
	Id: 4167
	AegisName: "Neraid_Card"
	Name: "Nereid Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Brute,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4168
	AegisName: "Dark_Lord_Card"
	Name: "Dark Lord Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus3 bAutoSpellWhenHit,WZ_METEOR,5,100; ">
},
{
	Id: 4169
	AegisName: "Dark_Illusion_Card"
	Name: "Dark Illusion Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bMaxHPrate,-10;
		bonus bMaxSPrate,-10;
		bonus bCastrate,-10;
	">
},
{
	Id: 4170
	AegisName: "Dark_Frame_Card"
	Name: "Dark Frame Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Stone,600; ">
},
{
	Id: 4171
	AegisName: "Dark_Priest_Card"
	Name: "Dark Priest Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSPVanishRate, 50, 10;
		if (BaseJob == Job_Sage) bonus bSPDrainValue, 1;
	">
},
{
	Id: 4172
	AegisName: "The_Paper_Card"
	Name: "The Paper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,20;
		bonus2 bSPDrainValue,-1,0;
	">
},
{
	Id: 4173
	AegisName: "Demon_Pungus_Card"
	Name: "Demon Pungus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Sleep,600; ">
},
{
	Id: 4174
	AegisName: "Deviling_Card"
	Name: "Deviling Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Neutral,50;
		bonus2 bSubEle,Ele_Water,-50;
		bonus2 bSubEle,Ele_Earth,-50;
		bonus2 bSubEle,Ele_Fire,-50;
		bonus2 bSubEle,Ele_Wind,-50;
		bonus2 bSubEle,Ele_Poison,-50;
		bonus2 bSubEle,Ele_Holy,-50;
		bonus2 bSubEle,Ele_Dark,-50;
		bonus2 bSubEle,Ele_Ghost,-50;
		bonus2 bSubEle,Ele_Undead,-50;
	">
},
{
	Id: 4175
	AegisName: "Poison_Toad_Card"
	Name: "Poisonous Toad Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus3 bAutoSpell,TF_POISON,1,20;
		bonus2 bAddSkillBlow,52,5;
	">
},
{
	Id: 4176
	AegisName: "Dullahan_Card"
	Name: "Dullahan Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Dragon,7;
	">
},
{
	Id: 4177
	AegisName: "Dryad_Card"
	Name: "Dryad Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus3 bAddMonsterDropItem,993,RC_Plant,100;
		bonus2 bSubEle,Ele_Earth,10;
	">
},
{
	Id: 4178
	AegisName: "Dragon_Tail_Card"
	Name: "Dragon Tail Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bAgi,1;
		bonus bFlee,10;
		bonus2 bSkillAtk,AC_DOUBLE,5;
		bonus2 bSkillAtk,AC_SHOWER,5;
	">
},
{
	Id: 4179
	AegisName: "Dragon_Fly_Card"
	Name: "Dragon Fly Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bAgi,1; ">
},
{
	Id: 4180
	AegisName: "Driller_Card"
	Name: "Driller Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Dragon,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4181
	AegisName: "Disguise_Card"
	Name: "Disguise Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Silence,300+600*(readparam(bVit)>=77); ">
},
{
	Id: 4182
	AegisName: "Diabolic_Card"
	Name: "Diabolic Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Demon,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4183
	AegisName: "Vagabond_Wolf_Card"
	Name: "Vagabond Wolf Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bStr,1; ">
},
{
	Id: 4184
	AegisName: "Lava_Golem_Card"
	Name: "Lava Golem Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace2,RC2_Golem,30; ">
},
{
	Id: 4185
	AegisName: "Rideword_Card"
	Name: "Rideword Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,1;
		if(BaseClass==Job_Acolyte) {
			bonus bInt,1;
			bonus bMdef,1;
		}

	">
},
{
	Id: 4186
	AegisName: "Raggler_Card"
	Name: "Raggler Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bStr,1;
		bonus bVit,1;
	">
},
{
	Id: 4187
	AegisName: "Raydric_Archer_Card"
	Name: "Raydric Archer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12030,RC_Demon,100; ">
},
{
	Id: 4188
	AegisName: "Leib_Olmai_Card"
	Name: "Leib Olmai Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bSubEle,Ele_Fire,10;
		bonus3 bAddMonsterDropItem,990,RC_Brute,100;
	">
},
{
	Id: 4189
	AegisName: "Wraith_Dead_Card"
	Name: "Wraith Dead Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Curse,600; ">
},
{
	Id: 4190
	AegisName: "Wraith_Card"
	Name: "Wraith Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12027,RC_Undead,100; ">
},
{
	Id: 4191
	AegisName: "Loli_Ruri_Card"
	Name: "Loli Ruri Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,AL_HEAL,3,50; ">
},
{
	Id: 4192
	AegisName: "Rotar_Zairo_Card"
	Name: "Rotar Zairo Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Fish,7;
	">
},
{
	Id: 4193
	AegisName: "Lude_Card"
	Name: "Lude Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" if(BaseJob==Job_Novice||BaseJob==Job_SuperNovice) bonus3 bAutoSpellWhenHit,SM_ENDURE,1,200; ">
},
{
	Id: 4194
	AegisName: "Rybio_Card"
	Name: "Rybio Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Stun,300+600*(readparam(bDex)>=77); ">
},
{
	Id: 4195
	AegisName: "Leaf_Cat_Card"
	Name: "Leaf Cat Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bSubEle,Ele_Water,10;
		bonus3 bAddMonsterDropItem,991,RC_Fish,100;
	">
},
{
	Id: 4196
	AegisName: "Marin_Card"
	Name: "Marin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddMonsterDropItem,909,2000;
		bonus2 bAddMonsterDropItem,7126,10;
	">
},
{
	Id: 4197
	AegisName: "Mastering_Card"
	Name: "Mastering Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bLuk,1; ">
},
{
	Id: 4198
	AegisName: "Maya_Puple_Card"
	Name: "Maya Purple Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bIntravision,0; ">
},
{
	Id: 4199
	AegisName: "Merman_Card"
	Name: "Merman Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bHPrecovRate,10;
		bonus bSPrecovRate,10;
	">
},
{
	Id: 4200
	AegisName: "Megalith_Card"
	Name: "Megalith Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" if(getrefine()<6) bonus bMdef,7; ">
},
{
	Id: 4201
	AegisName: "Majoruros_Card"
	Name: "Majoruros Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Stun,600; ">
},
{
	Id: 4202
	AegisName: "Civil_Servant_Card"
	Name: "Mao Guai Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddEle,Ele_Ghost,20; ">
},
{
	Id: 4203
	AegisName: "Mutant_Dragon_Card"
	Name: "Mutant Dragonoid Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,15;
		bonus3 bAutoSpell,MG_FIREBALL,3+2*(getskilllv(MG_FIREBALL)==10),50;
	">
},
{
	Id: 4204
	AegisName: "Mini_Demon_Card"
	Name: "Mini Demon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Brute,-20;
		bonus2 bExpAddRace,RC_Brute,10;
	">
},
{
	Id: 4205
	AegisName: "Mimic_Card"
	Name: "Mimic Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus2 bAddMonsterDropItem,603,10; ">
},
{
	Id: 4206
	AegisName: "Mystcase_Card"
	Name: "Myst Case Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus2 bAddMonsterDropItem,644,30; ">
},
{
	Id: 4207
	AegisName: "Mysteltainn_Card"
	Name: "Mysteltainn Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubSize,Size_Small,25;
		bonus bDef,1;
	">
},
{
	Id: 4208
	AegisName: "Miyabi_Ningyo_Card"
	Name: "Miyabi Doll Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxSPrate,10;
		bonus2 bSkillAtk,MG_FROSTDIVER,5;
	">
},
{
	Id: 4209
	AegisName: "Violy_Card"
	Name: "Violy Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		if (getskilllv(BA_FROSTJOKE) == 5)
			bonus3(bAutoSpell, BA_FROSTJOKE, 5, 20);
		else
			bonus3(bAutoSpell, BA_FROSTJOKE, 1, 20);
	">
},
{
	Id: 4210
	AegisName: "Wander_Man_Card"
	Name: "Wanderer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		if(!isequipped(4172,4257,4230,4272)) bonus3 bAutoSpell,RG_INTIMIDATE,1,20;
		if(BaseClass==Job_Thief) bonus bFlee,20;
	">
},
{
	Id: 4211
	AegisName: "Vocal_Card"
	Name: "Vocal Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bMdef,3; ">
},
{
	Id: 4212
	AegisName: "Bon_Gun_Card"
	Name: "Bongun Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus3 bAutoSpell,SM_BASH,1,20;
		bonus2 bAddSkillBlow,SM_BASH,5;
		bonus2 bAddDefClass,1026,-100;
	">
},
{
	Id: 4213
	AegisName: "Brilight_Card"
	Name: "Brilight Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Silence,600; ">
},
{
	Id: 4214
	AegisName: "Bloody_Murderer_Card"
	Name: "Bloody Murderer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Insect,7;
	">
},
{
	Id: 4215
	AegisName: "Blazzer_Card"
	Name: "Blazer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bAddMonsterDropChainItem,ITMCHAIN_FOOD; ">
},
{
	Id: 4216
	AegisName: "Sasquatch_Card"
	Name: "Sasquatch Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Freeze,600; ">
},
{
	Id: 4217
	AegisName: "Live_Peach_Tree_Card"
	Name: "Enchanted Peach Tree Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus3 bAutoSpell,AL_HEAL,1+9*(getskilllv(AL_HEAL)==10),20; ">
},
{
	Id: 4218
	AegisName: "Succubus_Card"
	Name: "Succubus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bVit,-3;
		bonus bHPrecovRate,-20;
		bonus bMaxHP,1000;
	">
},
{
	Id: 4219
	AegisName: "Sageworm_Card"
	Name: "Sage Worm Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddMonsterDropItem,715,30;
		bonus2 bAddMonsterDropItem,716,30;
		bonus2 bAddMonsterDropItem,717,30;
	">
},
{
	Id: 4220
	AegisName: "Solider_Card"
	Name: "Solider Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDef,2;
		bonus bMdef,2;
	">
},
{
	Id: 4221
	AegisName: "Skeleton_General_Card"
	Name: "Skeleton General Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Insect,-20;
		bonus2 bExpAddRace,RC_Insect,10;
	">
},
{
	Id: 4222
	AegisName: "Skel_Prisoner_Card"
	Name: "Skeleton Prisoner Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Sleep,300; ">
},
{
	Id: 4223
	AegisName: "Stalactic_Golem_Card"
	Name: "Stalactic Golem Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bDef,1;
		bonus2 bResEff,Eff_Stun,2000;
	">
},
{
	Id: 4224
	AegisName: "Stem_Worm_Card"
	Name: "Stem Worm Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12032,RC_Brute,100; ">
},
{
	Id: 4225
	AegisName: "Stone_Shooter_Card"
	Name: "Stone Shooter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,10;
		bonus bHit,10;
	">
},
{
	Id: 4226
	AegisName: "Sting_Card"
	Name: "Sting Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bDef,2;
		if(getrefine()>8) bonus bMdef,5;
	">
},
{
	Id: 4227
	AegisName: "Spring_Rabbit_Card"
	Name: "Spring Rabbit Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddItemHealRate,Meat,50;
		bonus2 bAddItemHealRate,528,50;
		bonus3 bAddMonsterDropItem,Meat,RC_Brute,200;
		bonus3 bAddMonsterDropItem,528,RC_Brute,200;
	">
},
{
	Id: 4228
	AegisName: "Sleeper_Card"
	Name: "Sleeper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12031,RC_Fish,100; ">
},
{
	Id: 4229
	AegisName: "C_Tower_Manager_Card"
	Name: "Tower Keeper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,1;
		bonus bCastrate,-5;
	">
},
{
	Id: 4230
	AegisName: "Shinobi_Card"
	Name: "Shinobi Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bAgi,1;
		bonus3 bAutoSpellWhenHit,AS_CLOAKING,5,100;
	">
},
{
	Id: 4231
	AegisName: "Increase_Soil_Card"
	Name: "Mi Gao Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace2,RC2_Guardian,50; ">
},
{
	Id: 4232
	AegisName: "Wild_Ginseng_Card"
	Name: "Hermit Plant Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddItemHealRate,Red_Herb,50;
		bonus2 bAddItemHealRate,Yellow_Herb,50;
		bonus2 bAddItemHealRate,White_Herb,50;
		bonus3 bAddMonsterDropItem,507,RC_Plant,300;
		bonus3 bAddMonsterDropItem,508,RC_Plant,200;
		bonus3 bAddMonsterDropItem,509,RC_Plant,100;
	">
},
{
	Id: 4233
	AegisName: "Baby_Leopard_Card"
	Name: "Baby Leopard Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bLuk,3;
		if(BaseClass==Job_Merchant) bonus bUnbreakableArmor,0;
	">
},
{
	Id: 4234
	AegisName: "Anolian_Card"
	Name: "Anolian Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,AC_CONCENTRATION,1+9*(getskilllv(AC_CONCENTRATION)==10),30; ">
},
{
	Id: 4235
	AegisName: "Cookie_XMAS_Card"
	Name: "Christmas Cookie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Angel,-20;
		bonus2 bExpAddRace,RC_Angel,10;
	">
},
{
	Id: 4236
	AegisName: "Amon_Ra_Card"
	Name: "Amon Ra Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bAllStats,1;
		bonus3 bAutoSpellWhenHit,PR_KYRIE,10,(30+70*(readparam(bInt)>=99));
	">
},
{
	Id: 4237
	AegisName: "Owl_Duke_Card"
	Name: "Owl Duke Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,PR_IMPOSITIO,3,3; ">
},
{
	Id: 4238
	AegisName: "Owl_Baron_Card"
	Name: "Owl Baron Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,PR_LEXAETERNA,1,30; ">
},
{
	Id: 4239
	AegisName: "Iron_Fist_Card"
	Name: "Iron Fist Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Formless,-20;
		bonus2 bExpAddRace,RC_Formless,10;
	">
},
{
	Id: 4240
	AegisName: "Arclouse_Card"
	Name: "Arclouze Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		if(getrefine()<6) {
			bonus bDef,2;
			bonus bMdef,3;
		}

	">
},
{
	Id: 4241
	AegisName: "Archangeling_Card"
	Name: "Arc Angeling Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bMaxHP,300;
		if(readparam(bLuk)>=77) {
			bonus bHPrecovRate,100;
			bonus bSPrecovRate,100;
		}

	">
},
{
	Id: 4242
	AegisName: "Apocalips_Card"
	Name: "Apocalipse Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bVit,2;
		if(getrefine()>8) bonus bMaxHP,800;
	">
},
{
	Id: 4243
	AegisName: "Antonio_Card"
	Name: "Antonio Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,AL_TELEPORT,1,500; ">
},
{
	Id: 4244
	AegisName: "Alarm_Card"
	Name: "Alarm Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus3 bAutoSpellWhenHit,MG_SIGHT,1,200;
		bonus bMaxHP,300;
		bonus bVit,1;
	">
},
{
	Id: 4245
	AegisName: "Am_Mut_Card"
	Name: "Am Mut Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,-20;
		bonus2 bExpAddRace,RC_DemiPlayer,10;
	">
},
{
	Id: 4246
	AegisName: "Assulter_Card"
	Name: "Assaulter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_DemiPlayer,7;
	">
},
{
	Id: 4247
	AegisName: "Aster_Card"
	Name: "Aster Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,5;
		bonus2 bAddDamageClass,1074,30;
	">
},
{
	Id: 4248
	AegisName: "Ancient_Mummy_Card"
	Name: "Ancient Mummy Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus3 bAutoSpellWhenHit,AL_CRUCIS,5,30; ">
},
{
	Id: 4249
	AegisName: "Ancient_Worm_Card"
	Name: "Ancient Worm Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Demon,-20;
		bonus2 bExpAddRace,RC_Demon,10;
	">
},
{
	Id: 4250
	AegisName: "Executioner_Card"
	Name: "Executioner Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubSize,Size_Large,25;
		bonus bDef,1;
	">
},
{
	Id: 4251
	AegisName: "Elder_Card"
	Name: "Elder Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace2,RC2_Guardian,40; ">
},
{
	Id: 4252
	AegisName: "Alligator_Card"
	Name: "Alligator Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bLongAtkDef,5; ">
},
{
	Id: 4253
	AegisName: "Alice_Card"
	Name: "Alice Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubRace,RC_Boss,40;
		bonus2 bSubRace,RC_NonBoss,-40;
	">
},
{
	Id: 4254
	AegisName: "Tirfing_Card"
	Name: "Ogretooth Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubSize,Size_Medium,25;
		bonus bDef,1;
	">
},
{
	Id: 4255
	AegisName: "Orc_Lady_Card"
	Name: "Orc Lady Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace2,RC2_Orc,30; ">
},
{
	Id: 4256
	AegisName: "Orc_Archer_Card"
	Name: "Orc Archer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12034,RC_DemiPlayer,100; ">
},
{
	Id: 4257
	AegisName: "Wild_Rose_Card"
	Name: "Wild Rose Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bAgi,1;
		if(BaseClass==Job_Thief) bonus bFlee2,5;
	">
},
{
	Id: 4258
	AegisName: "Wicked_Nymph_Card"
	Name: "Evil Nymph Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,1;
		bonus bMaxSP,50;
	">
},
{
	Id: 4259
	AegisName: "Wooden_Golem_Card"
	Name: "Wooden Golem Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bDef,1;
		bonus bHPrecovRate,30;
	">
},
{
	Id: 4260
	AegisName: "Wootan_Shooter_Card"
	Name: "Wootan Shooter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bDef,1;
		bonus2 bResEff,Eff_Confusion,2000;
	">
},
{
	Id: 4261
	AegisName: "Wootan_Fighter_Card"
	Name: "Wootan Fighter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bDef,1;
		bonus2 bResEff,Eff_Bleeding,2000;
	">
},
{
	Id: 4262
	AegisName: "Evil_Cloud_Hermit_Card"
	Name: "Cloud Hermit Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12029,RC_Plant,100; ">
},
{
	Id: 4263
	AegisName: "Incant_Samurai_Card"
	Name: "Samurai Spector Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bIgnoreDefRace,RC_NonBoss;
		bonus bHPrecovRate,-100;
		bonus2 bHPLossRate,666,10000;
	">
	OnUnequipScript: <"
		if (Hp <= 999 && !getmapflag(strcharinfo(PC_MAP), MF_PVP) && !getmapflag(strcharinfo(PC_MAP), MF_PVP_NOPARTY) && !getmapflag(strcharinfo(PC_MAP), MF_PVP_NOGUILD)) {
			heal (1-Hp),0;
		}
		else {
			heal -999,0;
		}

	">
},
{
	Id: 4264
	AegisName: "Wind_Ghost_Card"
	Name: "Wind Ghost Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,WZ_JUPITEL,3+7*(getskilllv(WZ_JUPITEL)==10),20; ">
},
{
	Id: 4265
	AegisName: "Li_Me_Mang_Ryang_Card"
	Name: "Jing Guai Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12033,RC_Angel,100; ">
},
{
	Id: 4266
	AegisName: "Eclipse_Card"
	Name: "Eclipse Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bVit,1; ">
},
{
	Id: 4267
	AegisName: "Explosion_Card"
	Name: "Explosion Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Dragon,-20;
		bonus2 bExpAddRace,RC_Dragon,10;
	">
},
{
	Id: 4268
	AegisName: "Injustice_Card"
	Name: "Injustice Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus3 bAutoSpell,AS_SONICBLOW,1,50; ">
},
{
	Id: 4269
	AegisName: "Incubus_Card"
	Name: "Incubus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,-3;
		bonus bSPrecovRate,-20;
		bonus bMaxSP,150;
	">
},
{
	Id: 4270
	AegisName: "Giant_Spider_Card"
	Name: "Giant Spider Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Poison,600; ">
},
{
	Id: 4271
	AegisName: "Giant_Honet_Card"
	Name: "Giant Hornet Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bSubEle,Ele_Wind,10;
		bonus3 bAddMonsterDropItem,992,RC_Insect,100;
	">
},
{
	Id: 4272
	AegisName: "Dancing_Dragon_Card"
	Name: "Zhu Po Long Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bAgi,1;
		bonus bCritical,3;
	">
},
{
	Id: 4273
	AegisName: "Shellfish_Card"
	Name: "Shell Fish Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,5;
		bonus2 bAddDamageClass,1073,30;
	">
},
{
	Id: 4274
	AegisName: "Zombie_Master_Card"
	Name: "Zombie Master Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Undead,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4275
	AegisName: "Zombie_Prisoner_Card"
	Name: "Zombie Prisoner Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bSubRace,RC_Undead,-20;
		bonus2 bExpAddRace,RC_Undead,10;
	">
},
{
	Id: 4276
	AegisName: "Lord_Of_Death_Card"
	Name: "Lord of The Dead Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus3 bAddEff,Eff_Stun,500,ATF_SHORT;
		bonus3 bAddEff,Eff_Curse,500,ATF_SHORT;
		bonus3 bAddEff,Eff_Silence,500,ATF_SHORT;
		bonus3 bAddEff,Eff_Poison,500,ATF_SHORT;
		bonus3 bAddEff,Eff_Bleeding,500,ATF_SHORT;
		bonus2 bWeaponComaRace,RC_NonBoss,1;
	">
},
{
	Id: 4277
	AegisName: "Zherlthsh_Card"
	Name: "Zealotus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bLuk,2;
		bonus2 bSkillAtk,BA_MUSICALSTRIKE,10;
		bonus2 bSkillAtk,DC_THROWARROW,10;
	">
},
{
	Id: 4278
	AegisName: "Gibbet_Card"
	Name: "Gibbet Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" if(getrefine()<6) bonus bMdef,5; ">
},
{
	Id: 4279
	AegisName: "Deleter_Card"
	Name: "Earth Deleter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bSPrecovRate,-100;
		bonus bSPGainValue,10;
	">
	OnUnequipScript: <" heal 0,-100; ">
},
{
	Id: 4280
	AegisName: "Geographer_Card"
	Name: "Geographer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,AL_BLESSING,2+8*(getskilllv(AL_BLESSING)==10),30; ">
},
{
	Id: 4281
	AegisName: "Zipper_Bear_Card"
	Name: "Zipper Bear Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,30;
		bonus2 bSPDrainValue,-1,0;
		if(BaseClass==Job_Merchant) bonus bUnbreakableWeapon,0;
	">
},
{
	Id: 4282
	AegisName: "Tengu_Card"
	Name: "Tengu Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bAddMonsterDropChainItem,ITMCHAIN_HEAL; ">
},
{
	Id: 4283
	AegisName: "Greatest_General_Card"
	Name: "Greatest General Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,MO_CALLSPIRITS,5,2+18*(BaseClass==Job_Acolyte); ">
},
{
	Id: 4284
	AegisName: "Chepet_Card"
	Name: "Chepet Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus4 bAutoSpell,AL_HEAL,5,50,1; ">
},
{
	Id: 4285
	AegisName: "Choco_Card"
	Name: "Choco Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bFlee2,5;
		bonus bFlee,10;
	">
},
{
	Id: 4286
	AegisName: "Karakasa_Card"
	Name: "Karakasa Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Confusion,300+600*(readparam(bStr)>=77); ">
},
{
	Id: 4287
	AegisName: "Kapha_Card"
	Name: "Kapha Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" if(getrefine()<6) bonus bMdef,8; ">
},
{
	Id: 4288
	AegisName: "Carat_Card"
	Name: "Carat Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,2;
		if(getrefine()>8) bonus bMaxSP,150;
	">
},
{
	Id: 4289
	AegisName: "Caterpillar_Card"
	Name: "Caterpillar Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Plant,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4290
	AegisName: "Cat_O_Nine_Tail_Card"
	Name: "Cat O' Nine Tails Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMdef,3;
		bonus bMagicDamageReturn,5;
	">
},
{
	Id: 4291
	AegisName: "Kobold_Leader_Card"
	Name: "Kobold Leader Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bAddRace2,RC2_Kobold,30; ">
},
{
	Id: 4292
	AegisName: "Kobold_Archer_Card"
	Name: "Kobold Archer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Plant,7;
	">
},
{
	Id: 4293
	AegisName: "Cookie_Card"
	Name: "Cookie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bLuk,2;
		bonus2 bSkillAtk,AL_HOLYLIGHT,10;
	">
},
{
	Id: 4294
	AegisName: "Quve_Card"
	Name: "Quve Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" if(BaseJob==Job_Novice||BaseJob==Job_SuperNovice) bonus3 bAutoSpellWhenHit,AL_INCAGI,1,100; ">
},
{
	Id: 4295
	AegisName: "Kraben_Card"
	Name: "Kraben Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Blind,600; ">
},
{
	Id: 4296
	AegisName: "Cramp_Card"
	Name: "Cramp Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus2 bGetZenyNum,500,1; ">
},
{
	Id: 4297
	AegisName: "Cruiser_Card"
	Name: "Cruiser Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Brute,7;
	">
},
{
	Id: 4298
	AegisName: "Cremy_Fear_Card"
	Name: "Creamy Fear Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Confusion,600; ">
},
{
	Id: 4299
	AegisName: "Clock_Card"
	Name: "Clock Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,CR_AUTOGUARD,3+7*(getskilllv(CR_AUTOGUARD)==10),30; ">
	OnUnequipScript: <" sc_end SC_AUTOGUARD; ">
},
{
	Id: 4300
	AegisName: "Chimera_Card"
	Name: "Chimera Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Poison,300+600*(BaseJob==Job_Assassin); ">
},
{
	Id: 4301
	AegisName: "Killer_Mantis_Card"
	Name: "Killer Mantis Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Bleeding,600; ">
},
{
	Id: 4302
	AegisName: "Tao_Gunka_Card"
	Name: "Tao Gunka Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMaxHPrate,100;
		bonus bDef,-50;
		bonus bMdef,-50;
	">
},
{
	Id: 4303
	AegisName: "Whisper_Boss_Card"
	Name: "Giant Whisper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bFlee,10;
		if(readparam(bStr)>=80) bonus bBaseAtk,20;
		if(readparam(bVit)>=80) bonus bMaxHPrate,3;
		if(readparam(bLuk)>=80) bonus bCritical,3;
	">
},
{
	Id: 4304
	AegisName: "Tamruan_Card"
	Name: "Tamruan Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bDef,2;
		bonus2 bSkillAtk,CR_SHIELDCHARGE,10;
		bonus2 bSkillAtk,CR_SHIELDBOOMERANG,10;
	">
},
{
	Id: 4305
	AegisName: "Turtle_General_Card"
	Name: "Turtle General Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bAddRace, RC_All, 20;
		bonus3 bAutoSpell,SM_MAGNUM,10,30;
	">
},
{
	Id: 4306
	AegisName: "Toad_Card"
	Name: "Toad Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus bFlee2,1; ">
},
{
	Id: 4307
	AegisName: "Kind_Of_Beetle_Card"
	Name: "Beetle King Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Fish,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4308
	AegisName: "Tri_Joint_Card"
	Name: "Tri Joint Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Formless,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4309
	AegisName: "Parasite_Card"
	Name: "Parasite Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bDef,1;
		bonus2 bSubEle,Ele_Neutral,5;
	">
},
{
	Id: 4310
	AegisName: "Panzer_Goblin_Card"
	Name: "Panzer Goblin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,10;
		bonus2 bCriticalAddRace,RC_Demon,7;
	">
},
{
	Id: 4311
	AegisName: "Permeter_Card"
	Name: "Permeter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bSubEle,Ele_Dark,15;
		bonus2 bSubEle,Ele_Undead,15;
	">
},
{
	Id: 4312
	AegisName: "Fur_Seal_Card"
	Name: "Seal Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bFlee,3;
		bonus bHit,10;
		if(BaseClass==Job_Acolyte) {
			bonus2 bCriticalAddRace,RC_Undead,9;
			bonus2 bCriticalAddRace,RC_Demon,9;
		}

	">
},
{
	Id: 4313
	AegisName: "Punk_Card"
	Name: "Punk Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" bonus4 bAutoSpellWhenHit,WZ_QUAGMIRE,1+4*(getskilllv(WZ_QUAGMIRE)==5),50,0; ">
},
{
	Id: 4314
	AegisName: "Penomena_Card"
	Name: "Penomena Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Formless,30; ">
},
{
	Id: 4315
	AegisName: "Pest_Card"
	Name: "Pest Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Stone,300+600*(readparam(bInt)>=77); ">
},
{
	Id: 4316
	AegisName: "Fake_Angel_Card"
	Name: "False Angel Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_Angel,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4317
	AegisName: "Mobster_Card"
	Name: "Mobster Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bCritAtkRate,15;
		if(BaseClass==Job_Thief) bonus bCritical,4;
	">
},
{
	Id: 4318
	AegisName: "Knight_Windstorm_Card"
	Name: "Stormy Knight Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus3 bAutoSpell,WZ_STORMGUST,2,20;
		bonus2 bAddEff,Eff_Freeze,2000;
	">
},
{
	Id: 4319
	AegisName: "Freezer_Card"
	Name: "Freezer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxHP,300;
		if(getrefine()>=9) bonus2 bSkillAtk,SM_BASH,10;
	">
},
{
	Id: 4320
	AegisName: "Bloody_Knight_Card"
	Name: "Bloody Knight Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus3 bAutoSpell,WZ_METEOR,1,20; ">
},
{
	Id: 4321
	AegisName: "Hylozoist_Card"
	Name: "Hylozoist Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus bClassChange,100; ">
},
{
	Id: 4322
	AegisName: "High_Orc_Card"
	Name: "High Orc Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus bDef,1;
		bonus bShortWeaponDamageReturn,5;
	">
},
{
	Id: 4323
	AegisName: "Garm_Baby_Card"
	Name: "Hatii Babe Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus3 bAutoSpell,MG_FROSTDIVER,3,50; ">
},
{
	Id: 4324
	AegisName: "Garm_Card"
	Name: "Hatii Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus2 bAddEffWhenHit,Eff_Freeze,5000; ">
},
{
	Id: 4325
	AegisName: "Harpy_Card"
	Name: "Harpy Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSubEle,Ele_Neutral,15;
		bonus2 bSkillAtk,MG_NAPALMBEAT,5;
	">
},
{
	Id: 4326
	AegisName: "See_Otter_Card"
	Name: "Sea-Otter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2(bAddItemHealRate, Shusi, 50);
		bonus2(bAddItemHealRate, Fish_Slice, 50);
		bonus3(bAddMonsterDropItem, Shusi, RC_Fish, 300);
		bonus3(bAddMonsterDropItem, Fish_Slice, RC_Fish, 300);
	">
},
{
	Id: 4327
	AegisName: "Blood_Butterfly_Card"
	Name: "Bloody Butterfly Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bCastrate,30;
		bonus bNoCastCancel,0;
		bonus2 bSkillAtk,MG_FIREWALL,5;
	">
},
{
	Id: 4328
	AegisName: "Hyegun_Card"
	Name: "Yao Jun Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bFlee,15;
		bonus bCritical,1;
	">
},
{
	Id: 4329
	AegisName: "Phendark_Card"
	Name: "Phendark Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bSPGainRace,RC_DemiPlayer,5; ">
	OnUnequipScript: <" heal 0,-5; ">
},
{
	Id: 4330
	AegisName: "Dark_Snake_Lord_Card"
	Name: "Evil Snake Lord Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,3;
		bonus2 bResEff,Eff_Blind,10000;
		bonus2 bResEff,Eff_Curse,10000;
	">
},
{
	Id: 4331
	AegisName: "Heater_Card"
	Name: "Heater Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bCritical,3;
		if(BaseClass==Job_Swordman) bonus bFlee2,3;
	">
},
{
	Id: 4332
	AegisName: "Waste_Stove_Card"
	Name: "Waste Stove Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bBaseAtk,5;
		bonus bInt,1;
	">
},
{
	Id: 4333
	AegisName: "Venomous_Card"
	Name: "Venomous Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAddEffWhenHit,Eff_Poison,3000,ATF_TARGET|ATF_SELF; ">
},
{
	Id: 4334
	AegisName: "Noxious_Card"
	Name: "Noxious Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bLongAtkDef,10;
		bonus2 bSubEle,Ele_Neutral,10;
	">
},
{
	Id: 4335
	AegisName: "Pitman_Card"
	Name: "Pitman Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSkillAtk,WZ_EARTHSPIKE,5;
		bonus2 bSkillAtk,WZ_HEAVENDRIVE,5;
	">
	OnUnequipScript: <" heal 0,-50; ">
},
{
	Id: 4336
	AegisName: "Ungoliant_Card"
	Name: "Ungoliant Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bHPrecovRate,10;
		bonus2 bResEff,Eff_Bleeding,10000;
	">
},
{
	Id: 4337
	AegisName: "Porcellio_Card"
	Name: "Porcellio Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bBaseAtk,25;
		bonus bDef,-5;
	">
},
{
	Id: 4338
	AegisName: "Obsidian_Card"
	Name: "Obsidian Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bVit,readparam(bDex)/18; ">
},
{
	Id: 4339
	AegisName: "Mineral_Card"
	Name: "Mineral Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bBaseAtk,-25;
		bonus bDef,3;
	">
},
{
	Id: 4340
	AegisName: "Teddy_Bear_Card"
	Name: "Teddy Bear Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus2 bSubRace,RC_Undead,30; ">
},
{
	Id: 4341
	AegisName: "Metaling_Card"
	Name: "Metaling Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus3 bAutoSpell,RG_STRIPWEAPON,1,50; ">
},
{
	Id: 4342
	AegisName: "Rsx_0806_Card"
	Name: "RSX-0806 Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bVit,3;
		bonus bUnbreakableArmor,0;
		bonus bNoKnockback,0;
	">
},
{
	Id: 4343
	AegisName: "Mole_Card"
	Name: "Holden Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bLuk,2; ">
},
{
	Id: 4344
	AegisName: "Anopheles_Card"
	Name: "Anopheles Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12058,RC_Insect,50; ">
},
{
	Id: 4345
	AegisName: "Hill_Wind_Card"
	Name: "Hill Wind Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSkillAtk,MG_THUNDERSTORM,5;
		bonus2 bSkillAtk,WZ_JUPITEL,5;
		bonus2 bSkillAtk,WZ_VERMILION,5;
	">
	OnUnequipScript: <" heal 0,-50; ">
},
{
	Id: 4346
	AegisName: "Ygnizem_Card"
	Name: "Egnigem Cenia Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bStr,readparam(bInt)/18; ">
},
{
	Id: 4347
	AegisName: "Armaia_Card"
	Name: "Armeyer Dinze Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12053,RC_Fish,50; ">
},
{
	Id: 4348
	AegisName: "Whikebain_Card"
	Name: "Wickebine Tres Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,RG_STRIPARMOR,1,50; ">
},
{
	Id: 4349
	AegisName: "Erend_Card"
	Name: "Errende Ebecee Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus4 bAutoSpellWhenHit,AL_PNEUMA,1,50,0; ">
},
{
	Id: 4350
	AegisName: "Rawrel_Card"
	Name: "Laurell Weinder Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSkillAtk,WZ_FROSTNOVA,3;
		bonus2 bSkillAtk,WZ_STORMGUST,3;
	">
	OnUnequipScript: <" heal 0,-50; ">
},
{
	Id: 4351
	AegisName: "Kavac_Card"
	Name: "Kavach Icarus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		if(getrefine()<=4) {
			bonus bFlee,20;
			bonus bFlee2,1;
		}
		else {
			bonus bFlee,10;
		}

	">
},
{
	Id: 4352
	AegisName: "B_Ygnizem_Card"
	Name: "General Egnigem Cenia Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxHPrate,10;
		bonus bMaxSPrate,10;
		bonus2 bHPRegenRate,50,10000;
		bonus2 bSPRegenRate,10,10000;
	">
},
{
	Id: 4353
	AegisName: "Removal_Card"
	Name: "Remover Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMaxHP,800-40*getrefine();
		bonus bHPrecovRate,10;
	">
},
{
	Id: 4354
	AegisName: "Gemini_Card"
	Name: "Gemini-S58 Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		if(readparam(bAgi)>=90) {
			bonus2 bResEff,Eff_Silence,3000;
			bonus2 bResEff,Eff_Stun,3000;
		}
		if(readparam(bVit)>=80) {
			bonus2 bResEff,Eff_Stone,5000;
			bonus2 bResEff,Eff_Sleep,5000;
		}

	">
},
{
	Id: 4355
	AegisName: "Gremlin_Card"
	Name: "Gremlin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12043,RC_Brute,50; ">
},
{
	Id: 4356
	AegisName: "Beholder_Card"
	Name: "Beholder Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" skill SA_CASTCANCEL,1; ">
},
{
	Id: 4357
	AegisName: "B_Seyren_Card"
	Name: "Lord Knight Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		skill LK_BERSERK,1;
		bonus bMaxHPrate,-50;
	">
},
{
	Id: 4358
	AegisName: "Seyren_Card"
	Name: "Seyren Windsor Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bStr,getrefine()-6; ">
},
{
	Id: 4359
	AegisName: "B_Eremes_Card"
	Name: "Assassin Cross Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <" skill AS_CLOAKING,3; ">
	OnUnequipScript: <" sc_end SC_CLOAKING; ">
},
{
	Id: 4360
	AegisName: "Eremes_Card"
	Name: "Eremes Guile Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bCriticalAddRace,RC_DemiPlayer,10; ">
},
{
	Id: 4361
	AegisName: "B_Harword_Card"
	Name: "MasterSmith Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBreakWeaponRate,1000;
		bonus bBreakArmorRate,700;
	">
},
{
	Id: 4362
	AegisName: "Harword_Card"
	Name: "Howard Alt-Eisen Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bAspdRate,-5;
		bonus bHit,30;
	">
},
{
	Id: 4363
	AegisName: "B_Magaleta_Card"
	Name: "High Priest Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus5 bAutoSpellWhenHit,HP_ASSUMPTIO,1,50,BF_WEAPON|BF_MAGIC,0; ">
},
{
	Id: 4364
	AegisName: "Magaleta_Card"
	Name: "Margaretha Sorin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,1;
		bonus5 bAutoSpellWhenHit,PR_LEXDIVINA,5,150,BF_MAGIC,1;
	">
},
{
	Id: 4365
	AegisName: "B_Katrinn_Card"
	Name: "High Wizard Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bIgnoreMdefRace,RC_NonBoss;
		bonus bCastrate,100;
		bonus bSPrecovRate,-100;
	">
	OnUnequipScript: <" heal 0,-2000; ">
},
{
	Id: 4366
	AegisName: "Katrinn_Card"
	Name: "Kathryne Keyron Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bCastrate,getrefine()*-1;
		if(getrefine()>=9) {
			bonus bMatkRate,2;
		}

	">
},
{
	Id: 4367
	AegisName: "B_Shecil_Card"
	Name: "Sniper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bHPDrainRate,50,20;
		bonus bHPrecovRate,-10;
	">
},
{
	Id: 4368
	AegisName: "Shecil_Card"
	Name: "Cecil Damon Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bAspdRate,5;
		bonus bHit,-30;
	">
},
{
	Id: 4369
	AegisName: "Venatu_Card"
	Name: "Venatu Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bLuk,readparam(bAgi)/18; ">
},
{
	Id: 4370
	AegisName: "Dimik_Card"
	Name: "Dimik Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bVit,getrefine()-5; ">
},
{
	Id: 4371
	AegisName: "Archdam_Card"
	Name: "Archdam Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bBaseAtk,10;
		bonus bCastrate,20;
	">
},
{
	Id: 4372
	AegisName: "Bacsojin_Card"
	Name: "White Lady Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bHealPower,30;
		bonus bUseSPrate,15;
	">
},
{
	Id: 4373
	AegisName: "Chung_E_Card"
	Name: "Green Maiden Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bLuk,getrefine()-5;
		bonus bCritical,getrefine();
	">
},
{
	Id: 4374
	AegisName: "Apocalips_H_Card"
	Name: "Vesper Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bDex,2;
		bonus2 bIgnoreMdefRate,RC_Boss,30;
	">
},
{
	Id: 4375
	AegisName: "Orc_Baby_Card_Card"
	Name: "Orc Baby Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		if(getrefine()>=9) {
			bonus2 bSubEle,Ele_Neutral,15;
			bonus bFlee,15;
		}
		else {
			bonus2 bSubEle,Ele_Neutral,10;
			bonus bFlee,10;
		}

	">
},
{
	Id: 4376
	AegisName: "Lady_Tanee_Card"
	Name: "Lady Tanee Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMaxHPrate,-40;
		bonus bMaxSPrate,50;
		bonus2 bAddMonsterDropItem,513,200;
		bonus2 bAddItemHealRate,513,100;
	">
},
{
	Id: 4377
	AegisName: "Green_Iguana_Card"
	Name: "Grove Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12063,RC_Formless,50; ">
},
{
	Id: 4378
	AegisName: "Acidus_Card"
	Name: "Gold Acidus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		if(getrefine()<=4) {
			bonus bMaxHPrate,8;
			bonus bMaxSPrate,8;
			bonus bHPrecovRate,5;
			bonus bSPrecovRate,5;
		}
		else {
			bonus bMaxHPrate,4;
			bonus bMaxSPrate,4;
		}

	">
},
{
	Id: 4379
	AegisName: "Acidus__Card"
	Name: "Blue Acidus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		if(getrefine()<=4) {
			bonus bSPrecovRate,5;
			bonus bMaxSP,80;
		}
		else {
			bonus bMaxSP,40;
		}

	">
},
{
	Id: 4380
	AegisName: "Ferus_Card"
	Name: "Red Ferus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSkillAtk,WZ_FIREPILLAR,5;
		bonus2 bSkillAtk,WZ_METEOR,5;
	">
	OnUnequipScript: <" heal 0,-50; ">
},
{
	Id: 4381
	AegisName: "Ferus__Card"
	Name: "Green Ferus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bVit,1;
		bonus bMaxHPrate,10;
	">
},
{
	Id: 4382
	AegisName: "Novus__Card"
	Name: "Yellow Novus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMaxHP,500;
		bonus bHPrecovRate,10;
	">
},
{
	Id: 4383
	AegisName: "Novus_Card"
	Name: "Red Novus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAddEffWhenHit,Eff_Confusion,3000,ATF_TARGET|ATF_SELF; ">
},
{
	Id: 4384
	AegisName: "Hydro_Card"
	Name: "Hydrolancer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,SA_SPELLBREAKER,1,100; ">
},
{
	Id: 4385
	AegisName: "Dragon_Egg_Card"
	Name: "Dragon Egg Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12048,RC_Dragon,50; ">
},
{
	Id: 4386
	AegisName: "Detale_Card"
	Name: "Detardeurus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMdef,-20;
		bonus2 bResEff,Eff_Freeze,10000;
		bonus5 bAutoSpellWhenHit,SA_LANDPROTECTOR,1,70,BF_MAGIC,0;
	">
},
{
	Id: 4387
	AegisName: "Ancient_Mimic_Card"
	Name: "Ancient Mimic Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bAgi,readparam(bLuk)/18; ">
},
{
	Id: 4388
	AegisName: "Deathword_Card"
	Name: "Death Word Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus2 bSkillAtk,MG_NAPALMBEAT,5;
		bonus2 bSkillAtk,MG_SOULSTRIKE,5;
		bonus2 bSkillAtk,HW_NAPALMVULCAN,5;
	">
	OnUnequipScript: <" heal 0,-50; ">
},
{
	Id: 4389
	AegisName: "Plasma_Card"
	Name: "Plasma Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddMonsterDropItem,12118,50;
		bonus2 bAddMonsterDropItem,12119,50;
		bonus2 bAddMonsterDropItem,12120,50;
		bonus2 bAddMonsterDropItem,12121,50;
	">
},
{
	Id: 4390
	AegisName: "Breeze_Card"
	Name: "Breeze Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,5;
		bonus2 bAddEff,Eff_Bleeding,500;
	">
},
{
	Id: 4391
	AegisName: "Retribution_Card"
	Name: "Baroness of Retribution Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAddMonsterDropItem,12068,RC_Angel,50; ">
},
{
	Id: 4392
	AegisName: "Observation_Card"
	Name: "Dame of Sentinel Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bDex,readparam(bVit)/18; ">
},
{
	Id: 4393
	AegisName: "Shelter_Card"
	Name: "Mistress of Shelter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bInt,readparam(bStr)/18; ">
},
{
	Id: 4394
	AegisName: "Solace_Card"
	Name: "Lady Solace Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" if(BaseJob==Job_Priest) bonus3 bAutoSpell,CR_GRANDCROSS,5,20; ">
},
{
	Id: 4395
	AegisName: "Tha_Maero_Card"
	Name: "Maero of Thanatos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,5;
		bonus3 bAutoSpell,AL_DECAGI,3,50;
	">
},
{
	Id: 4396
	AegisName: "Tha_Odium_Card"
	Name: "Odium of Thanatos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <" bonus bAgi,getrefine()-5; ">
},
{
	Id: 4397
	AegisName: "Tha_Despero_Card"
	Name: "Despero of Thanatos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <" bonus bInt,getrefine()-6; ">
},
{
	Id: 4398
	AegisName: "Tha_Dolor_Card"
	Name: "Dolor of Thanatos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bMagicAddRace,RC_Angel,10; ">
},
{
	Id: 4399
	AegisName: "Thanatos_Card"
	Name: "Memory of Thanatos Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bDefRatioAtkRace, RC_All;
		bonus bSPDrainValue,-1;
		bonus bDef,-30;
		bonus bFlee,-30;
	">
},
{
	Id: 4400
	AegisName: "Aliza_Card"
	Name: "Aliza Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAutoSpellWhenHit,DC_WINKCHARM,1,50+50*(BaseJob==Job_Dancer); ">
},
{
	Id: 4401
	AegisName: "Alicel_Card"
	Name: "Alicel Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bFlee,10;
		bonus bDef,-5;
	">
},
{
	Id: 4402
	AegisName: "Aliot_Card"
	Name: "Aliot Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		if(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief) {
			bonus bStr,2;
			bonus bMaxHPrate,5;
		}
		if(BaseClass==Job_Mage||BaseClass==Job_Archer||BaseClass==Job_Acolyte) {
			bonus bInt,2;
			bonus bMaxSPrate,5;
		}

	">
},
{
	Id: 4403
	AegisName: "Kiel_Card"
	Name: "Kiel-D-01 Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <" bonus bDelayrate,-30; ">
},
{
	Id: 4404
	AegisName: "Skogul_Card"
	Name: "Skogul Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus3 bAddEffWhenHit,Eff_Bleeding,3000,ATF_TARGET|ATF_SELF; ">
},
{
	Id: 4405
	AegisName: "Frus_Card"
	Name: "Frus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMagicDamageReturn,getrefine()*2;
		if(BaseClass==Job_Mage) bonus bMdef,3;
	">
},
{
	Id: 4406
	AegisName: "Skeggiold_Card"
	Name: "Skeggiold Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus2 bMagicAddRace,RC_Demon,2; ">
},
{
	Id: 4407
	AegisName: "Randgris_Card"
	Name: "Randgris Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bUnbreakableWeapon,0;
		bonus2 bAddRace, RC_All, 10;
		bonus3 bAutoSpell,SA_DISPELL,1,50;
	">
},
{
	Id: 4408
	AegisName: "Gloom_Under_Night_Card"
	Name: "Gloom Under Night Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus2 bAddEle,Ele_Holy,40;
		bonus2 bAddEle,Ele_Dark,40;
		bonus2 bAddRace,RC_Angel,40;
		bonus2 bAddRace,RC_Demon,40;
	">
},
{
	Id: 4409
	AegisName: "Agav_Card"
	Name: "Agav Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bMatkRate,5;
		bonus bDef,-10;
		if(BaseClass==Job_Mage) bonus bMaxSP,100;
	">
},
{
	Id: 4410
	AegisName: "Echio_Card"
	Name: "Echio Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bBaseAtk,15;
		if(BaseClass==Job_Swordman) bonus bMaxHP,500;
	">
},
{
	Id: 4411
	AegisName: "Vanberk_Card"
	Name: "Vanberk Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bStr,2;
		autobonus "{ bonus bCritical,100; }",5,5000,0,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
	">
},
{
	Id: 4412
	AegisName: "Isilla_Card"
	Name: "Isilla Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus bInt,2;
		autobonus "{ bonus bCastrate,-50; bonus bFlee,30; }",50,5000,BF_MAGIC,"{ specialeffect(EF_SUFFRAGIUM, AREA, playerattached()); }";
	">
},
{
	Id: 4413
	AegisName: "Hodremlin_Card"
	Name: "Hodremlin Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubSize,Size_Small,15;
		bonus2 bSubSize,Size_Medium,15;
		bonus2 bSubSize,Size_Large,15;
		autobonus2 "{ bonus bFlee2,30; }",3,10000,BF_WEAPON|BF_MAGIC,"{ specialeffect(EF_WIND, AREA, playerattached()); }";
	">
},
{
	Id: 4414
	AegisName: "Seeker_Card"
	Name: "Seeker Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		skill MG_STONECURSE,1;
		bonus2 bResEff,Eff_Stone,3000;
		bonus bMdef,10;
	">
},
{
	Id: 4415
	AegisName: "Snowier_Card"
	Name: "Snowier Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bAddMonsterDropItem,536,2000;
		bonus2 bAddItemHealRate,536,100;
	">
},
{
	Id: 4416
	AegisName: "Siroma_Card"
	Name: "Siroma Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bSkillAtk,MG_COLDBOLT,25;
		bonus2 bCastrate,MG_COLDBOLT,-25;
	">
},
{
	Id: 4417
	AegisName: "Ice_Titan_Card"
	Name: "Ice Titan Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bVit,2;
		autobonus2 "{ bonus bDef,10; }",3,10000,BF_WEAPON|BF_MAGIC,"{ specialeffect(EF_FREEZED, AREA, playerattached()); }";
	">
},
{
	Id: 4418
	AegisName: "Gazeti_Card"
	Name: "Gazeti Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <" bonus3 bAutoSpell,MG_COLDBOLT,2,100; ">
},
{
	Id: 4419
	AegisName: "Ktullanux_Card"
	Name: "Ktullanux Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus2 bAddEle,Ele_Fire,50;
		bonus5 bAutoSpellWhenHit,WZ_FROSTNOVA,10,20,BF_WEAPON|BF_MAGIC,0;
	">
},
{
	Id: 4420
	AegisName: "Muscipular_Card"
	Name: "Muscipular Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus3 bAutoSpellWhenHit,AL_HEAL,1,100;
		bonus3 bAutoSpellWhenHit,AL_INCAGI,1,100;
	">
},
{
	Id: 4421
	AegisName: "Drosera_Card"
	Name: "Drosera Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" if(getiteminfo(getequipid(EQI_HAND_R),9)>3) bonus bCritical,15; ">
},
{
	Id: 4422
	AegisName: "Roween_Card"
	Name: "Roween Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bFlee,5;
		bonus bFlee2,3;
		bonus2 bAddEle,Ele_Water,10;
		bonus2 bCriticalAddRace,RC_Fish,15;
	">
},
{
	Id: 4423
	AegisName: "Galion_Card"
	Name: "Galion Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bHit,5;
		bonus2 bAddEle,Ele_Water,5;
	">
},
{
	Id: 4424
	AegisName: "Stapo_Card"
	Name: "Stapo Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		skill TF_PICKSTONE,1;
		skill TF_THROWSTONE,1;
	">
},
{
	Id: 4425
	AegisName: "Atroce_Card"
	Name: "Atroce Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bBaseAtk,25;
		autobonus "{ bonus bAspdRate,100; }",5,10000,0,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
	">
},
{
	Id: 4426
	AegisName: "Byorgue_Card"
	Name: "Byorgue Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		if (BaseJob == Job_Rogue) {
			bonus bMatkRate,10;
			bonus2 bAddRace, RC_All, 10;
		}
	">
},
{
	Id: 4427
	AegisName: "Sword_Guardian_Card"
	Name: "Sword Guardian Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		if(getiteminfo(getequipid(EQI_HAND_R),11)==2||getiteminfo(getequipid(EQI_HAND_R),11)==3) {
			bonus bHit,5;
			bonus bCritical,5;
			bonus2 bSkillAtk,62,25;
		}

	">
},
{
	Id: 4428
	AegisName: "Bow_Guardian_Card"
	Name: "Bow Guardian Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		if(getiteminfo(getequipid(EQI_HAND_R),11)==11) {
			bonus bHit,5;
			bonus bCritical,5;
			bonus2 bSkillAtk,47,50;
		}

	">
},
{
	Id: 4429
	AegisName: "Salamander_Card"
	Name: "Salamander Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus2 bSkillAtk,WZ_FIREPILLAR,40;
		bonus2 bSkillAtk,WZ_METEOR,40;
	">
},
{
	Id: 4430
	AegisName: "Ifrit_Card"
	Name: "Ifrit Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bBaseAtk,(JobLevel/10);
		bonus bCritical,(JobLevel/10);
		bonus bHit,(JobLevel/10);
		bonus3 bAutoSpellWhenHit,NPC_EARTHQUAKE,2,10;
	">
},
{
	Id: 4431
	AegisName: "Kasa_Card"
	Name: "Kasa Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus3 bAutoSpell,MG_FIREBALL,5,20;
		bonus3 bAutoSpell,MG_FIREBOLT,5,20;
	">
},
{
	Id: 4432
	AegisName: "Magmaring_Card"
	Name: "Magmaring Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_GARMENT"
	Script: <"
		bonus bBaseAtk,5;
		bonus2 bAddEle,Ele_Earth,10;
		bonus2 bCriticalAddRace,RC_Brute,15;
	">
},
{
	Id: 4433
	AegisName: "Imp_Card"
	Name: "Imp Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bSkillAtk,MG_FIREBOLT,25;
		bonus2 bCastrate,MG_FIREBOLT,-25;
	">
},
{
	Id: 4434
	AegisName: "Knocker_Card"
	Name: "Knocker Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		bonus2 bAddRace,RC_Formless,5;
		bonus3 bAddMonsterDropItem,756,RC_Formless,10;
		bonus3 bAddMonsterDropItem,757,RC_Formless,10;
	">
},
{
	Id: 4435
	AegisName: "Zombie_Slaughter_Card"
	Name: "Zombie Slaughter Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,1;
		bonus2 bMagicAddRace,RC_DemiPlayer,1;
		bonus bHPGainValue,50;
	">
},
{
	Id: 4436
	AegisName: "Ragged_Zombie_Card"
	Name: "Ragged Zombie Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus2 bCriticalAddRace,RC_DemiPlayer,5;
		bonus2 bAddRace,RC_DemiPlayer,1;
		bonus2 bMagicAddRace,RC_DemiPlayer,1;
		bonus2 bAddEff2,Eff_Bleeding,10;
	">
},
{
	Id: 4437
	AegisName: "Hell_Poodle_Card"
	Name: "Hell Poodle Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ACC"
	Script: <"
		bonus bHit,1;
		bonus2 bAddItemHealRate,517,100;
		bonus3 bAddEff,Eff_Bleeding,50,ATF_SHORT;
	">
},
{
	Id: 4438
	AegisName: "Banshee_Card"
	Name: "Banshee Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Script: <"
		if(BaseClass==Job_Mage) {
			bonus bMaxSP,100;
			bonus bMaxHP,-100;
			bonus2 bSkillAtk,MG_NAPALMBEAT,20;
			bonus2 bSkillAtk,MG_SOULSTRIKE,20;
			bonus2 bSkillAtk,HW_NAPALMVULCAN,20;
		}

	">
},
{
	Id: 4439
	AegisName: "Flame_Skull_Card"
	Name: "Flame Skull Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bResEff,Eff_Blind,3000;
		bonus2 bResEff,Eff_Stun,3000;
		bonus2 bResEff,Eff_Curse,3000;
		bonus2 bResEff,Eff_Stone,3000;
		bonus2 bAddEffWhenHit,Eff_Blind,500;
		bonus2 bAddEffWhenHit,Eff_Stun,500;
		bonus2 bAddEffWhenHit,Eff_Curse,500;
		bonus2 bAddEffWhenHit,Eff_Stone,500;
	">
},
{
	Id: 4440
	AegisName: "Necromancer_Card"
	Name: "Necromancer Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		.@i = getiteminfo(getequipid(EQI_HAND_R),11);
		if (.@i == 10 || .@i == 23) {
			bonus bInt,1;
			bonus bIgnoreMdefRate,2;
		}

	">
},
{
	Id: 4441
	AegisName: "Fallen_Bishop_Card"
	Name: "Fallen Bishop Hibram Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHOES"
	Script: <"
		bonus bMatkRate,10;
		bonus bMaxSPrate,-50;
		bonus2 bMagicAddRace,RC_Angel,50;
		bonus2 bMagicAddRace,RC_DemiPlayer,50;
	">
},
{
	Id: 4442
	AegisName: "Tatacho_Card"
	Name: "Tatacho Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Neutral,20;
		bonus2 bAddEle,Ele_Neutral,5;
	">
},
{
	Id: 4443
	AegisName: "Aqua_Elemental_Card"
	Name: "Aqua Elemental Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Water,20;
		bonus2 bAddEle,Ele_Water,5;
	">
},
{
	Id: 4444
	AegisName: "Draco_Card"
	Name: "Draco Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Earth,20;
		bonus2 bAddEle,Ele_Earth,5;
	">
},
{
	Id: 4445
	AegisName: "Luciola_Vespa_Card"
	Name: "Luciola Vespa Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Wind,20;
		bonus2 bAddEle,Ele_Wind,5;
	">
},
{
	Id: 4447
	AegisName: "Centipede_Card"
	Name: "Centipede Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Poison,20;
		bonus2 bAddEle,Ele_Poison,5;
	">
},
{
	Id: 4448
	AegisName: "Cornus_Card"
	Name: "Cornus Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Holy,20;
		bonus2 bAddEle,Ele_Holy,5;
	">
},
{
	Id: 4449
	AegisName: "Dark_Shadow_Card"
	Name: "Dark Shadow Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_SHIELD"
	Script: <"
		bonus2 bSubEle,Ele_Dark,20;
		bonus2 bAddEle,Ele_Dark,5;
	">
},
{
	Id: 4450
	AegisName: "Banshee_Master_Card"
	Name: "Banshee Master Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <"
		bonus bInt,1;
		bonus bMatk,10;
	">
},
{
	Id: 4451
	AegisName: "Ant_Buyanne_Card"
	Name: "Entweihen Crothen Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_ARMOR"
	Script: <" bonus bMatk,100; ">
},
{
	Id: 4452
	AegisName: "Centipede_Larva_Card"
	Name: "Centipede Larva Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <"
		bonus bInt,1;
		bonus bMatk,3;
	">
},
{
	Id: 4453
	AegisName: "Hilsrion_Card"
	Name: "Hillsrion Card"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: "EQP_WEAPON"
	Script: <" bonus bBaseAtk,25; ">
},

//== Armor Enchant System ==================================
{
	Id: 4700
	AegisName: "Strength1"
	Name: "STR+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,1; ">
},
{
	Id: 4701
	AegisName: "Strength2"
	Name: "STR+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,2; ">
},
{
	Id: 4702
	AegisName: "Strength3"
	Name: "STR+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,3; ">
},
{
	Id: 4703
	AegisName: "Strength4"
	Name: "STR+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,4; ">
},
{
	Id: 4704
	AegisName: "Strength5"
	Name: "STR+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,5; ">
},
{
	Id: 4705
	AegisName: "Strength6"
	Name: "STR+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,6; ">
},
{
	Id: 4706
	AegisName: "Strength7"
	Name: "STR+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,7; ">
},
{
	Id: 4707
	AegisName: "Strength8"
	Name: "STR+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,8; ">
},
{
	Id: 4708
	AegisName: "Strength9"
	Name: "STR+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,9; ">
},
{
	Id: 4709
	AegisName: "Strength10"
	Name: "STR+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bStr,10; ">
},
{
	Id: 4710
	AegisName: "Inteligence1"
	Name: "INT+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,1; ">
},
{
	Id: 4711
	AegisName: "Inteligence2"
	Name: "INT+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,2; ">
},
{
	Id: 4712
	AegisName: "Inteligence3"
	Name: "INT+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,3; ">
},
{
	Id: 4713
	AegisName: "Inteligence4"
	Name: "INT+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,4; ">
},
{
	Id: 4714
	AegisName: "Inteligence5"
	Name: "INT+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,5; ">
},
{
	Id: 4715
	AegisName: "Inteligence6"
	Name: "INT+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,6; ">
},
{
	Id: 4716
	AegisName: "Inteligence7"
	Name: "INT+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,7; ">
},
{
	Id: 4717
	AegisName: "Inteligence8"
	Name: "INT+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,8; ">
},
{
	Id: 4718
	AegisName: "Inteligence9"
	Name: "INT+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,9; ">
},
{
	Id: 4719
	AegisName: "Inteligence10"
	Name: "INT+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bInt,10; ">
},
{
	Id: 4720
	AegisName: "Dexterity1"
	Name: "DEX+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,1; ">
},
{
	Id: 4721
	AegisName: "Dexterity2"
	Name: "DEX+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,2; ">
},
{
	Id: 4722
	AegisName: "Dexterity3"
	Name: "DEX+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,3; ">
},
{
	Id: 4723
	AegisName: "Dexterity4"
	Name: "DEX+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,4; ">
},
{
	Id: 4724
	AegisName: "Dexterity5"
	Name: "DEX+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,5; ">
},
{
	Id: 4725
	AegisName: "Dexterity6"
	Name: "DEX+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,6; ">
},
{
	Id: 4726
	AegisName: "Dexterity7"
	Name: "DEX+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,7; ">
},
{
	Id: 4727
	AegisName: "Dexterity8"
	Name: "DEX+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,8; ">
},
{
	Id: 4728
	AegisName: "Dexterity9"
	Name: "DEX+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,9; ">
},
{
	Id: 4729
	AegisName: "Dexterity10"
	Name: "DEX+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bDex,10; ">
},
{
	Id: 4730
	AegisName: "Agility1"
	Name: "AGI+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,1; ">
},
{
	Id: 4731
	AegisName: "Agility2"
	Name: "AGI+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,2; ">
},
{
	Id: 4732
	AegisName: "Agility3"
	Name: "AGI+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,3; ">
},
{
	Id: 4733
	AegisName: "Agility4"
	Name: "AGI+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,4; ">
},
{
	Id: 4734
	AegisName: "Agility5"
	Name: "AGI+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,5; ">
},
{
	Id: 4735
	AegisName: "Agility6"
	Name: "AGI+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,6; ">
},
{
	Id: 4736
	AegisName: "Agility7"
	Name: "AGI+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,7; ">
},
{
	Id: 4737
	AegisName: "Agility8"
	Name: "AGI+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,8; ">
},
{
	Id: 4738
	AegisName: "Agility9"
	Name: "AGI+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,9; ">
},
{
	Id: 4739
	AegisName: "Agility10"
	Name: "AGI+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bAgi,10; ">
},
{
	Id: 4740
	AegisName: "Vitality1"
	Name: "VIT+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,1; ">
},
{
	Id: 4741
	AegisName: "Vitality2"
	Name: "VIT+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,2; ">
},
{
	Id: 4742
	AegisName: "Vitality3"
	Name: "VIT+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,3; ">
},
{
	Id: 4743
	AegisName: "Vitality4"
	Name: "VIT+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,4; ">
},
{
	Id: 4744
	AegisName: "Vitality5"
	Name: "VIT+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,5; ">
},
{
	Id: 4745
	AegisName: "Vitality6"
	Name: "VIT+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,6; ">
},
{
	Id: 4746
	AegisName: "Vitality7"
	Name: "VIT+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,7; ">
},
{
	Id: 4747
	AegisName: "Vitality8"
	Name: "VIT+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,8; ">
},
{
	Id: 4748
	AegisName: "Vitality9"
	Name: "VIT+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,9; ">
},
{
	Id: 4749
	AegisName: "Vitality10"
	Name: "VIT+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bVit,10; ">
},
{
	Id: 4750
	AegisName: "Luck1"
	Name: "LUK+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,1; ">
},
{
	Id: 4751
	AegisName: "Luck2"
	Name: "LUK+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,2; ">
},
{
	Id: 4752
	AegisName: "Luck3"
	Name: "LUK+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,3; ">
},
{
	Id: 4753
	AegisName: "Luck4"
	Name: "LUK+4"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,4; ">
},
{
	Id: 4754
	AegisName: "Luck5"
	Name: "LUK+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,5; ">
},
{
	Id: 4755
	AegisName: "Luck6"
	Name: "LUK+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,6; ">
},
{
	Id: 4756
	AegisName: "Luck7"
	Name: "LUK+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,7; ">
},
{
	Id: 4757
	AegisName: "Luck8"
	Name: "LUK+8"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,8; ">
},
{
	Id: 4758
	AegisName: "Luck9"
	Name: "LUK+9"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,9; ">
},
{
	Id: 4759
	AegisName: "Luck10"
	Name: "LUK+10"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bLuk,10; ">
},
{
	Id: 4760
	AegisName: "Matk1"
	Name: "MATK+1%"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bMatkRate,1; ">
},
{
	Id: 4761
	AegisName: "Matk2"
	Name: "MATK+2%"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bMatkRate,2; ">
},
{
	Id: 4762
	AegisName: "Evasion6"
	Name: "FLEE+6"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bFlee,6; ">
},
{
	Id: 4763
	AegisName: "Evasion12"
	Name: "FLEE+12"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bFlee,12; ">
},
{
	Id: 4764
	AegisName: "Critical5"
	Name: "CRI+5"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bCritical,5; ">
},
{
	Id: 4765
	AegisName: "Critical7"
	Name: "CRI+7"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus bCritical,7; ">
},
{
	Id: 4766
	AegisName: "Atk2"
	Name: "ATK+2%"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus2 bAddRace, RC_All, 2; ">
},
{
	Id: 4767
	AegisName: "Atk3"
	Name: "ATK+3%"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
	Script: <" bonus2 bAddRace, RC_All, 3; ">
},
{
	Id: 4768
	AegisName: "Str1_J"
	Name: "STR+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4769
	AegisName: "Str2_J"
	Name: "STR+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4770
	AegisName: "Str3_J"
	Name: "STR+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4771
	AegisName: "Int1_J"
	Name: "INT+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4772
	AegisName: "Int2_J"
	Name: "INT+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4773
	AegisName: "Int3_J"
	Name: "INT+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4774
	AegisName: "Vit1_J"
	Name: "VIT+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4775
	AegisName: "Vit2_J"
	Name: "VIT+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4776
	AegisName: "Vit3_J"
	Name: "VIT+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4777
	AegisName: "Agi1_J"
	Name: "AGI+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4778
	AegisName: "Agi2_J"
	Name: "AGI+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4779
	AegisName: "Agi3_J"
	Name: "AGI+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4780
	AegisName: "Dex1_J"
	Name: "DEX+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4781
	AegisName: "Dex2_J"
	Name: "DEX+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4782
	AegisName: "Dex3_J"
	Name: "DEX+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4783
	AegisName: "Luk1_J"
	Name: "LUK+1"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4784
	AegisName: "Luk2_J"
	Name: "LUK+2"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},
{
	Id: 4785
	AegisName: "Luk3_J"
	Name: "LUK+3"
	Type: "IT_CARD"
	Buy: 20
	Weight: 10
	Loc: ["EQP_HELM", "EQP_ARMS", "EQP_GARMENT", "EQP_ACC", "EQP_ARMOR", "EQP_SHOES"]
},

//== More Headgears ========================================
{
	Id: 5001
	AegisName: "Headset"
	Name: "Headset"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 87
	Script: <" bonus2 bResEff,Eff_Curse,1000; ">
},
{
	Id: 5002
	AegisName: "Gemmed_Crown"
	Name: "Jewel Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 4
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 88
	Script: <"
		bonus bInt,2;
		bonus bLuk,1;
		bonus bMdef,3;
	">
},
{
	Id: 5003
	AegisName: "Joker_Jester"
	Name: "Joker Jester"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 89
	Script: <"
		bonus bLuk,2;
		bonus bMdef,5;
	">
},
{
	Id: 5004
	AegisName: "Oxygen_Mask"
	Name: "Oxygen Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 90
	Script: <" bonus2 bResEff,Eff_Poison,2000; ">
},
{
	Id: 5005
	AegisName: "Gas_Mask"
	Name: "Gas Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 91
	Script: <" bonus2 bResEff,Eff_Poison,3000; ">
},
{
	Id: 5006
	AegisName: "Machoman_Glasses"
	Name: "Machoman's Glasses"
	Type: "IT_ARMOR"
	Buy: 36000
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 92
},
{
	Id: 5007
	AegisName: "Loard_Circlet"
	Name: "Grand Circlet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 55
	ViewSprite: 93
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bLuk,1;
		bonus bMdef,4;
	">
},
{
	Id: 5008
	AegisName: "Puppy_Love"
	Name: "Puppy Love"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 94
},
{
	Id: 5009
	AegisName: "Safety_Helmet"
	Name: "Safety Helmet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 95
	Script: <"
		bonus bMdef,3;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5010
	AegisName: "Indian_Hair_Piece"
	Name: "Indian Fillet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 96
},
{
	Id: 5011
	AegisName: "Antenna"
	Name: "Aerial"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 97
},
{
	Id: 5012
	AegisName: "Ph_D_Hat"
	Name: "Ph.D Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 98
},
{
	Id: 5013
	AegisName: "Horn_Of_Lord_Kaho"
	Name: "Lord Kaho's Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 99
	Script: <"
		bonus bMdef,10;
		bonus bStr,5;
		bonus bAgi,10;
		bonus bVit,10;
		bonus bInt,5;
		bonus bLuk,20;
	">
},
{
	Id: 5014
	AegisName: "Fin_Helm"
	Name: "Fin Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 65
	Refine: false
	ViewSprite: 100
},
{
	Id: 5015
	AegisName: "Egg_Shell"
	Name: "Egg Shell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 101
},
{
	Id: 5016
	AegisName: "Boys_Cap"
	Name: "Boy's Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 102
},
{
	Id: 5017
	AegisName: "Bone_Helm"
	Name: "Bone Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 7
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 103
	Script: <" bonus2 bSubEle,Ele_Dark,-15; ">
},
{
	Id: 5018
	AegisName: "Feather_Bonnet"
	Name: "Feather Bonnet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 104
	Script: <" bonus bAgi,1; ">
},
{
	Id: 5019
	AegisName: "Corsair"
	Name: "Corsair"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 105
	Script: <" bonus bVit,1; ">
},
{
	Id: 5020
	AegisName: "Kafra_Band"
	Name: "Kafra Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 106
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5021
	AegisName: "Bankruptcy_Of_Heart"
	Name: "Grief for Greed"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1200
	Def: 4
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 38
	ViewSprite: 107
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5022
	AegisName: "Helm_Of_Sun"
	Name: "Hat of the Sun God"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2400
	Def: 4
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 138
	Script: <"
		bonus bStr,3;
		bonus bInt,2;
	">
},
{
	Id: 5023
	AegisName: "Hat_Of_Bundle"
	Name: "Parcel Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Job: {
		Merchant: true
		Blacksmith: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 108
},
{
	Id: 5024
	AegisName: "Hat_Of_Cake"
	Name: "Cake Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 109
},
{
	Id: 5025
	AegisName: "Helm_Of_Angel"
	Name: "Helm of Angel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1600
	Def: 5
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 74
	ViewSprite: 110
	Script: <"
		bonus bAgi,1;
		bonus bLuk,1;
		bonus bMdef,3;
	">
},
{
	Id: 5026
	AegisName: "Hat_Of_Cook"
	Name: "Chef Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 111
	Script: <" bonus bDex,1; ">
},
{
	Id: 5027
	AegisName: "Wizardry_Hat"
	Name: "Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 112
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5028
	AegisName: "Candle"
	Name: "Candle"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 113
},
{
	Id: 5029
	AegisName: "Spore_Hat"
	Name: "Spore Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 114
},
{
	Id: 5030
	AegisName: "Panda_Cap"
	Name: "Panda Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 115
},
{
	Id: 5031
	AegisName: "Mine_Helm"
	Name: "Mine Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1500
	Def: 4
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Thief: true
		Knight: true
		Priest: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Monk: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 55
	ViewSprite: 116
	Script: <" bonus bDex,2; ">
},
{
	Id: 5032
	AegisName: "Picnic_Hat"
	Name: "Sunday Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 117
},
{
	Id: 5033
	AegisName: "Smokie_Hat"
	Name: "Raccoon Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 118
},
{
	Id: 5034
	AegisName: "Light_Bulb_Band"
	Name: "Bulb Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 119
},
{
	Id: 5035
	AegisName: "Poring_Hat"
	Name: "Poring Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 38
	ViewSprite: 120
},
{
	Id: 5036
	AegisName: "Cross_Band"
	Name: "Cross Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 121
},
{
	Id: 5037
	AegisName: "Fruit_Shell"
	Name: "Nut Shell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 5
	Refine: false
	ViewSprite: 122
},
{
	Id: 5038
	AegisName: "Deviruchi_Cap"
	Name: "Deviruchi Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 123
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
{
	Id: 5039
	AegisName: "Mottled_Egg_Shell"
	Name: "Rainbow Eggshell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 19
	Refine: false
	ViewSprite: 124
},
{
	Id: 5040
	AegisName: "Blush"
	Name: "Blush"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 125
},
{
	Id: 5041
	AegisName: "Heart_Hair_Pin"
	Name: "Heart Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 126
},
{
	Id: 5042
	AegisName: "Hair_Protector"
	Name: "Bao Bao"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 14
	ViewSprite: 127
},
{
	Id: 5043
	AegisName: "Opera_Ghost_Mask"
	Name: "Opera Phantom Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 20
	Refine: false
	ViewSprite: 128
},
{
	Id: 5044
	AegisName: "Devils_Wing"
	Name: "Evil Wing Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Job: {
		All: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 129
	Script: <" bonus bVit,1; ">
},
{
	Id: 5045
	AegisName: "Magician_Hat"
	Name: "Magician Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Job: {
		Magician: true
		Acolyte: true
		Priest: true
		Wizard: true
		Monk: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 130
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
		bonus bMaxSP,50;
	">
},
{
	Id: 5046
	AegisName: "Bongun_Hat"
	Name: "Bongun Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 139
},
{
	Id: 5047
	AegisName: "Fashion_Sunglass"
	Name: "Fashionable Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 131
},
{
	Id: 5048
	AegisName: "First_Moon_Hair_Pin"
	Name: "Cresent Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 132
},
{
	Id: 5049
	AegisName: "Stripe_Band"
	Name: "Striped Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 133
},
{
	Id: 5050
	AegisName: "Mystery_Fruit_Shell"
	Name: "Wonder Nutshell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 134
},
{
	Id: 5051
	AegisName: "Kitty_Bell"
	Name: "Pussy Cat Bell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 135
},
{
	Id: 5052
	AegisName: "Blue_Hair_Band"
	Name: "Blue Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 136
},
{
	Id: 5053
	AegisName: "Spinx_Helm"
	Name: "Sphinx Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 5
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP"]
	EquipLv: 65
	Refine: false
	ViewSprite: 137
	Script: <" bonus bStr,2; ">
},
{
	Id: 5054
	AegisName: "Assasin_Mask"
	Name: "Assassin Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Priest: true
		Assassin: true
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 70
	Refine: false
	ViewSprite: 180
},
{
	Id: 5055
	AegisName: "Novice_Egg_Cap"
	Name: "Novice False Eggshell"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 1
	Def: 3
	Job: {
		Novice: true
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 101
},
{
	Id: 5056
	AegisName: "Love_Berry"
	Name: "Fruit of Love"
	Type: "IT_ARMOR"
	Buy: 1
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 140
},
{
	Id: 5057
	AegisName: "Ear_Of_Black_Cat"
	Name: "Black Cat Ears"
	Type: "IT_ARMOR"
	Buy: 16000
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 141
},
{
	Id: 5058
	AegisName: "Drooping_Kitty"
	Name: "Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 142
	Script: <"
		bonus bMdef,15;
		bonus2 bResEff,Eff_Curse,3000;
	">
},
{
	Id: 5059
	AegisName: "Brown_Bear_Cap"
	Name: "Teddybear Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 143
},
{
	Id: 5060
	AegisName: "Party_Hat"
	Name: "Party Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 144
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5061
	AegisName: "Flower_Hairpin"
	Name: "Flower Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 145
},
{
	Id: 5062
	AegisName: "Straw_Hat"
	Name: "Straw Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 146
	Script: <" bonus bAgi,1; ">
},
{
	Id: 5063
	AegisName: "Plaster"
	Name: "Giant Band Aid"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 147
},
{
	Id: 5064
	AegisName: "Leaf_Headgear"
	Name: "Smokie Leaf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 148
},
{
	Id: 5065
	AegisName: "Fish_On_Head"
	Name: "Blue Fish"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 149
	Script: <" bonus2 bAddRace,RC_Fish,10; ">
},
{
	Id: 5066
	AegisName: "Horn_Of_Succubus"
	Name: "Succubus Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 150
	Script: <"
		bonus bInt,1;
		bonus bMdef,10;
	">
},
{
	Id: 5067
	AegisName: "Sombrero"
	Name: "Sombrero"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 151
	Script: <" bonus bAgi,1; ">
},
{
	Id: 5068
	AegisName: "Ear_Of_Devils_Wing"
	Name: "Evil Wing Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 152
	Script: <" bonus bStr,1; ">
},
{
	Id: 5069
	AegisName: "Mask_Of_Fox"
	Name: "Kitsune Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 153
	Script: <"
		bonus bAgi,1;
		bonus bLuk,1;
	">
},
{
	Id: 5070
	AegisName: "Headband_Of_Power"
	Name: "Hot-blooded Headband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 154
	Script: <" bonus bStr,2; ">
},
{
	Id: 5071
	AegisName: "Indian_Headband"
	Name: "Indian Headband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 155
	Script: <" bonus bDex,1; ">
},
{
	Id: 5072
	AegisName: "Inccubus_Horn"
	Name: "Incubus Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 156
	Script: <"
		bonus bAgi,1;
		bonus bMdef,10;
	">
},
{
	Id: 5073
	AegisName: "Cap_Of_Concentration"
	Name: "Model Training Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 157
	Script: <" bonus bDex, 2; ">
},
{
	Id: 5074
	AegisName: "Ear_Of_Angels_Wing"
	Name: "Angel Wing Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 158
	Script: <" bonus bStr,1; ">
},
{
	Id: 5075
	AegisName: "Cowboy_Hat"
	Name: "Cowboy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 159
},
{
	Id: 5076
	AegisName: "Fur_Hat"
	Name: "Beanie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 160
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5077
	AegisName: "Tulip_Hairpin"
	Name: "Tulip Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 161
},
{
	Id: 5078
	AegisName: "Sea_Otter_Cap"
	Name: "Sea-Otter Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 162
	Script: <" bonus bVit,1; ">
},
{
	Id: 5079
	AegisName: "Crossed_Hair_Band"
	Name: "X Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 163
},
{
	Id: 5080
	AegisName: "Headgear_Of_Queen"
	Name: "Crown of Ancient Queen"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 164
},
{
	Id: 5081
	AegisName: "Mistress_Crown"
	Name: "Crown of Mistress"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 75
	ViewSprite: 165
	Script: <"
		bonus bMaxSP,100;
		bonus bInt,2;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5082
	AegisName: "Mushroom_Band"
	Name: "Decorative Mushroom"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 166
},
{
	Id: 5083
	AegisName: "Red_Tailed_Ribbon"
	Name: "Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 167
	Script: <" bonus bMdef,10; ">
},
{
	Id: 5084
	AegisName: "Lazy_Raccoon"
	Name: "Lazy Smokie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 168
	Script: <" bonus2 bResEff,Eff_Sleep,2000; ">
},
{
	Id: 5085
	AegisName: "Pair_Of_Red_Ribbon"
	Name: "Small Ribbons"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 45
	Refine: false
	ViewSprite: 169
},
{
	Id: 5086
	AegisName: "Alarm_Mask"
	Name: "Alarm Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 170
	Script: <" bonus2 bResEff,Eff_Blind,5000; ">
},
{
	Id: 5087
	AegisName: "Goblin_Mask_01"
	Name: "Poker Face"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 171
},
{
	Id: 5088
	AegisName: "Goblin_Mask_02"
	Name: "Surprised Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 172
},
{
	Id: 5089
	AegisName: "Goblin_Mask_03"
	Name: "Annoyed Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 173
},
{
	Id: 5090
	AegisName: "Goblin_Mask_04"
	Name: "Goblin Leader Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 174
},
{
	Id: 5091
	AegisName: "Big_Golden_Bell"
	Name: "Decorative Golden Bell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 35
	ViewSprite: 175
},
{
	Id: 5092
	AegisName: "Blue_Coif"
	Name: "Coif"
	Type: "IT_ARMOR"
	Buy: 150000
	Weight: 300
	Def: 5
	Job: {
		Priest: true
		Assassin: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 65
	ViewSprite: 176
},
{
	Id: 5093
	AegisName: "Blue_Coif_"
	Name: "Coif"
	Type: "IT_ARMOR"
	Buy: 150000
	Weight: 300
	Def: 5
	Slots: 1
	Job: {
		Priest: true
		Assassin: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 65
	ViewSprite: 177
	Script: <" bonus bMaxSP,100; ">
},
{
	Id: 5094
	AegisName: "Orc_Hero_Helm"
	Name: "Helmet of Orc Hero"
	Type: "IT_ARMOR"
	Buy: 500000
	Weight: 900
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 55
	ViewSprite: 178
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
	">
},
/*
{
	Id: 5095
	AegisName: "Orc_Hero_Helm_"
	Name: "Helmet of Orc Hero"
	Type: "IT_ARMOR"
	Buy: 800000
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 55
	ViewSprite: 179
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
	">
},
*/
{
	Id: 5096
	AegisName: "Assassin_Mask_"
	Name: "Assassin Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		Priest: true
		Assassin: true
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 70
	Refine: false
	ViewSprite: 180
},
{
	Id: 5097
	AegisName: "Cone_Hat_"
	Name: "Holiday Hat"
	Type: "IT_ARMOR"
	Weight: 400
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 144
},
{
	Id: 5098
	AegisName: "Tiger_Mask"
	Name: "Tiger Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 181
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,3;
		bonus bMaxHP,100;
	">
},
{
	Id: 5099
	AegisName: "Cat_Hat"
	Name: "Neko Mimi"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 182
	Script: <"
		bonus bLuk,2;
		bonus bMdef,10;
		bonus2 bSubRace,RC_Brute,5;
	">
},
{
	Id: 5100
	AegisName: "Sales_Signboard"
	Name: "Sales Banner"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Loc: "EQP_HEAD_TOP"
	EquipLv: 75
	ViewSprite: 183
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bAgi,1;
		bonus bLuk,1;
	">
},
{
	Id: 5101
	AegisName: "Takius_Blindfold"
	Name: "Takius's Blindfold"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 184
},
{
	Id: 5102
	AegisName: "Round_Eyes"
	Name: "Blank Eyes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 185
},
{
	Id: 5103
	AegisName: "Sunflower_Hairpin"
	Name: "Sunflower Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 186
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,2;
		bonus bCritical,5;
	">
},
{
	Id: 5104
	AegisName: "Dark_Blindfold"
	Name: "Dark Blinder"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 187
	Script: <"
		bonus2 bResEff,Eff_Blind,10000;
		bonus2 bResEff,Eff_Stun,200;
	">
},
{
	Id: 5105
	AegisName: "Hat_Of_Cake_"
	Name: "2nd Anniversary Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 24
	ViewSprite: 109
	Script: <"
		bonus bDex,1;
		bonus bMaxSP,80;
		bonus3 bAddMonsterDropItem,7864,7,50;
	">
},
{
	Id: 5106
	AegisName: "Cone_Hat_INA"
	Name: "2nd Anniversary Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 144
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5107
	AegisName: "Well_Baked_Toast"
	Name: "Crunch Toast"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 188
},
{
	Id: 5108
	AegisName: "Detective_Hat"
	Name: "Renown Detective's Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 189
},
{
	Id: 5109
	AegisName: "Red_Bonnet"
	Name: "Red Bonnet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 190
},
{
	Id: 5110
	AegisName: "Baby_Pacifier"
	Name: "Baby Pacifier"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 191
},
{
	Id: 5111
	AegisName: "Galapago_Cap"
	Name: "Galapago Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 55
	ViewSprite: 192
	Script: <" bonus2 bAddMonsterDropItem,605,100; ">
},
{
	Id: 5112
	AegisName: "Super_Novice_Hat"
	Name: "Super Novice Hat"
	Type: "IT_ARMOR"
	Buy: 8500
	Weight: 400
	Def: 4
	Job: {
		Novice: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 193
	Script: <" bonus bAllStats,1; ">
},
{
	Id: 5113
	AegisName: "Angry_Mouth"
	Name: "Angry Snarl"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 194
},
{
	Id: 5114
	AegisName: "Fedora"
	Name: "Bucket Hat"
	Type: "IT_ARMOR"
	Buy: 6000
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 195
},
{
	Id: 5115
	AegisName: "Winter_Hat"
	Name: "Winter Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 196
	Script: <" bonus2 bResEff,Eff_Freeze,1000; ">
},
{
	Id: 5116
	AegisName: "Banana_Hat"
	Name: "Banana Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 197
	Script: <" bonus3 bAutoSpell,SM_PROVOKE,3,30; ">
},
{
	Id: 5117
	AegisName: "Mistic_Rose"
	Name: "Mystic Rose"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 198
	Script: <" bonus2 bSubRace,RC_Plant,2; ">
},
{
	Id: 5118
	AegisName: "Ear_Of_Puppy"
	Name: "Puppy Headband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 199
},
{
	Id: 5119
	AegisName: "Super_Novice_Hat_"
	Name: "Super Novice Hat"
	Type: "IT_ARMOR"
	Buy: 8500
	Weight: 400
	Def: 4
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 193
	Script: <" bonus bAllStats,1; ">
},
{
	Id: 5120
	AegisName: "Fedora_"
	Name: "Bucket Hat"
	Type: "IT_ARMOR"
	Buy: 6000
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 195
},
{
	Id: 5121
	AegisName: "Zherlthsh_Mask"
	Name: "Zealotus Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 70
	ViewSprite: 200
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,5;
		bonus2 bSubRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5122
	AegisName: "Magni_Cap"
	Name: "Magni's Cap"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 1000
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 65
	ViewSprite: 250
	Script: <" bonus bStr,2; ">
},
{
	Id: 5123
	AegisName: "Ulle_Cap"
	Name: "Ulle's Cap"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 65
	ViewSprite: 254
	Script: <"
		bonus bDex,2;
		bonus bAgi,1;
	">
},
{
	Id: 5124
	AegisName: "Fricca_Circlet"
	Name: "Fricca's Circlet"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 300
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 65
	ViewSprite: 251
	Script: <"
		bonus bMdef,10;
		bonus bInt,2;
		bonus bMaxSP,50;
	">
},
{
	Id: 5125
	AegisName: "Kiss_Of_Angel"
	Name: "Angel's Kiss"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 300
	Def: 3
	Slots: 1
	Job: {
		Novice: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 255
	Script: <" bonus bSPrecovRate,5; ">
},
{
	Id: 5126
	AegisName: "Morpheuss_Hood"
	Name: "Morpheus's Hood"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 200
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 33
	ViewSprite: 256
	Script: <" bonus bInt,2; ">
},
{
	Id: 5127
	AegisName: "Morriganes_Helm"
	Name: "Morrigane's Helm"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 61
	ViewSprite: 257
	Script: <"
		bonus bLuk,2;
		bonus bBaseAtk,3;
	">
},
{
	Id: 5128
	AegisName: "Goibnes_Helmet"
	Name: "Goibne's Helm"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 54
	ViewSprite: 258
	Script: <"
		bonus bVit,3;
		bonus bMdef,3;
	">
},
{
	Id: 5129
	AegisName: "Bird_Nest"
	Name: "Bird Nest"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	Refine: false
	ViewSprite: 201
	Script: <"
		bonus bAgi,2;
		bonus2 bSubRace,RC_Brute,10;
	">
},
{
	Id: 5130
	AegisName: "Lion_Mask"
	Name: "Lion Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 75
	ViewSprite: 202
	Script: <"
		bonus2 bAddEffWhenHit,Eff_Silence,500;
		bonus bMdef,1;
	">
},
{
	Id: 5131
	AegisName: "Close_Helmet"
	Name: "Close Helmet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1200
	Def: 8
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 75
	ViewSprite: 203
	Script: <"
		bonus bVit,3;
		bonus bMaxHPrate,3;
	">
},
{
	Id: 5132
	AegisName: "Angeling_Hat"
	Name: "Angeling Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 204
	Trade: {
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bSubRace,RC_DemiPlayer,10; ">
},
{
	Id: 5133
	AegisName: "Sheep_Hat"
	Name: "Sheep Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 205
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bShortWeaponDamageReturn,5; ">
},
{
	Id: 5134
	AegisName: "Pumpkin_Hat"
	Name: "Pumpkin-Head"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 206
	Script: <" bonus2 bSubRace,RC_Demon,5; ">
},
{
	Id: 5135
	AegisName: "Cyclops_Visor"
	Name: "Cyclop's Eye"
	Type: "IT_ARMOR"
	Weight: 200
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 75
	Refine: false
	ViewSprite: 207
	Script: <" bonus bMaxSP,50; ">
},
{
	Id: 5136
	AegisName: "Santas_Hat_"
	Name: "Antonio's Santa Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 20
},
{
	Id: 5137
	AegisName: "Alice_Doll"
	Name: "Alice Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 208
	Script: <"
		bonus bStr,1;
		bonus2 bAddRace,RC_DemiPlayer,10;
		bonus2 bAddEff2,Eff_Sleep,10;
	">
},
{
	Id: 5138
	AegisName: "Magic_Eyes"
	Name: "Magic Eyes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 209
	Script: <"
		bonus bMdef,5;
		bonus bCastrate,-10;
		bonus bUseSPrate,20;
	">
},
{
	Id: 5139
	AegisName: "Hibiscus"
	Name: "Hibiscus"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 210
	Script: <"
		bonus bDex,1;
		bonus bInt,1;
		bonus bMdef,5;
	">
},
{
	Id: 5140
	AegisName: "Charming_Ribbon"
	Name: "Charming Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 211
	Script: <"
		bonus2 bSubRace,RC_Undead,5;
		bonus2 bSubRace,RC_Demon,5;
	">
},
{
	Id: 5141
	AegisName: "Marionette_Doll"
	Name: "Marionette Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 212
	Script: <" bonus bStr,1; ">
},
{
	Id: 5142
	AegisName: "Crescent_Helm"
	Name: "Crescent Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 8
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 213
	Script: <"
		bonus bVit,1;
		bonus2 bSubRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5143
	AegisName: "Kabuki_Mask"
	Name: "Kabuki Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Gender: "SEX_MALE"
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 30
	ViewSprite: 214
	Script: <" bonus2 bResEff,Eff_Silence,3000; ">
},
{
	Id: 5144
	AegisName: "Gambler_Hat"
	Name: "Gambler Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 16
	Script: <" bonus bLuk,5; ">
},
{
	Id: 5145
	AegisName: "Carnival_Joker_Jester"
	Name: "Carnival Joker Jester"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 89
},
{
	Id: 5146
	AegisName: "Elephant_Hat"
	Name: "Elephant Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 215
	Script: <"
		bonus bVit,1;
		bonus2 bSubRace,RC_Brute,7;
		skill WZ_WATERBALL,1;
	">
},
{
	Id: 5147
	AegisName: "Baseball_Cap"
	Name: "Baseball Cap"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 216
},
{
	Id: 5148
	AegisName: "Phrygian_Cap"
	Name: "Phrygian Cap"
	Type: "IT_ARMOR"
	Weight: 500
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 217
	Script: <" bonus bInt,2; ">
},
{
	Id: 5149
	AegisName: "Silver_Tiara"
	Name: "Silver Tiara"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 218
	Script: <" bonus bInt,2; ">
},
{
	Id: 5150
	AegisName: "Joker_Jester_"
	Name: "Joker Jester"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 219
	Script: <" bonus bSpeedRate,25; ">
},
{
	Id: 5151
	AegisName: "Headset_OST"
	Name: "Note Headphones"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 4
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 220
	Script: <"
		bonus bMdef,3;
		bonus2 bResEff,Eff_Stun,1000;
		bonus2 bResEff,Eff_Freeze,1000;
	">
},
{
	Id: 5152
	AegisName: "Chinese_Crown"
	Name: "Chinese Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 221
	Script: <"
		bonus2 bResEff,Eff_Stun,1000;
		bonus bInt,1;
	">
},
{
	Id: 5153
	AegisName: "Angeling_Hairpin"
	Name: "Angeling Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 222
	Script: <" bonus bFlee,5; ">
},
{
	Id: 5154
	AegisName: "Sunglasses_F"
	Name: "Father's Sunglasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 12
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5155
	AegisName: "Granpa_Beard_F"
	Name: "Father's White Moustache"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 25
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bBaseAtk,20; ">
},
{
	Id: 5156
	AegisName: "Flu_Mask_F"
	Name: "Father's Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 8
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMatkRate,1; ">
},
{
	Id: 5157
	AegisName: "Viking_Helm_"
	Name: "Orc Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 86
},
{
	Id: 5158
	AegisName: "Holy_Bonnet_"
	Name: "Monk Hat"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Def: 5
	Slots: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 35
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5159
	AegisName: "Golden_Gear_"
	Name: "Golden Gear"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 30
	Script: <" bonus bUnbreakableHelm,0; ">
},
{
	Id: 5160
	AegisName: "Magestic_Goat_"
	Name: "Majestic Goat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 41
	Script: <" bonus bStr,1; ">
},
{
	Id: 5161
	AegisName: "Sharp_Gear_"
	Name: "Spiky Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 6
	Slots: 1
	Job: {
		Swordsman: true
		Acolyte: true
		Merchant: true
		Thief: true
		Knight: true
		Priest: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Monk: true
		Rogue: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 43
},
{
	Id: 5162
	AegisName: "Bone_Helm_"
	Name: "Bone Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 7
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 103
	Script: <" bonus2 bSubEle,Ele_Dark,-15; ">
},
{
	Id: 5163
	AegisName: "Corsair_"
	Name: "Corsair"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 105
	Script: <" bonus bVit,1; ">
},
{
	Id: 5164
	AegisName: "Tiara_"
	Name: "Tiara"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 19
	Script: <" bonus bInt,1; ">
},
{
	Id: 5165
	AegisName: "Crown_"
	Name: "Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Gender: "SEX_MALE"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 45
	Script: <" bonus bInt,1; ">
},
{
	Id: 5166
	AegisName: "Spinx_Helm_"
	Name: "Sphinx Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP"]
	EquipLv: 65
	Refine: false
	ViewSprite: 137
	Script: <" bonus bStr,2; ">
},
{
	Id: 5167
	AegisName: "Munak_Turban_"
	Name: "Munak Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 51
	Script: <" bonus2 bSubRace,RC_Undead,10; ">
},
{
	Id: 5168
	AegisName: "Bongun_Hat_"
	Name: "Bongun Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 139
},
{
	Id: 5169
	AegisName: "Bride_Mask"
	Name: "Bride Mask"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 4
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 40
	ViewSprite: 223
	Script: <"
		if(BaseClass==Job_Taekwon) {
			bonus bLuk,2;
			bonus bCritical,5;
		}

	">
},
{
	Id: 5170
	AegisName: "Feather_Beret"
	Name: "Feather Beret"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 600
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 224
	Script: <"
		bonus bMdef,1;
		bonus2 bSubRace,RC_DemiPlayer,10;
	">
},
{
	Id: 5171
	AegisName: "Valkyrie_Helm"
	Name: "Valkyrie Helm"
	Type: "IT_ARMOR"
	Buy: 100000
	Weight: 1000
	Def: 5
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 225
	Script: <" bonus bMdef,5; ">
},
{
	Id: 5172
	AegisName: "Beret"
	Name: "Beret"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 700
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 226
	Script: <" bonus2 bSubRace,RC_DemiPlayer,10; ">
},
{
	Id: 5173
	AegisName: "Satto_Hat"
	Name: "Magistrate Hat"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 400
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 227
	Script: <"
		if(BaseClass==Job_Taekwon) {
			bonus bAgi,1;
			bonus bHPrecovRate,3;
		}

	">
},
{
	Id: 5174
	AegisName: "Ayam"
	Name: "Ayam"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 400
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 228
	Script: <"
		if(BaseClass==Job_Taekwon) {
			bonus bInt,1;
			bonus bSPrecovRate,3;
		}

	">
},
{
	Id: 5175
	AegisName: "Censor_Bar"
	Name: "Censor Bar"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 229
	Script: <"
		bonus2 bResEff,Eff_Curse,500;
		bonus bMdef,1;
		bonus bHit,-5;
	">
},
{
	Id: 5176
	AegisName: "Hahoe_Mask"
	Name: "Hahoe Mask"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 100
	Def: 2
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 30
	Refine: false
	ViewSprite: 230
	Script: <"
		if(BaseClass==Job_Taekwon) {
			bonus bLuk,1;
			bonus bFlee2,2;
		}

	">
},
{
	Id: 5177
	AegisName: "Guardian_Lion_Mask"
	Name: "Mythical Lion Mask"
	Type: "IT_ARMOR"
	Buy: 30000
	Weight: 500
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 40
	ViewSprite: 231
	Script: <"
		if(BaseClass==Job_Taekwon) {
			bonus bDex,2;
			bonus bBaseAtk,2*getrefine();
			bonus3 bAddEff,Eff_Stun,1000,ATF_SHORT;
		}

	">
},
{
	Id: 5178
	AegisName: "Candle_"
	Name: "Candle"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 113
	Script: <" bonus bAllStats,1; ">
},
{
	Id: 5179
	AegisName: "Gold_Tiara"
	Name: "Golden Tiara"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 232
	Script: <" bonus bInt,2; ">
},
{
	Id: 5180
	AegisName: "Phrygian_Cap_"
	Name: "France Holiday Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 217
	Script: <" bonus bVit,1; ">
},
{
	Id: 5181
	AegisName: "Helm_Of_Darkness"
	Name: "Helm of Darkness"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Def: 3
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 233
	Script: <" bonus bStr,2; ">
},
{
	Id: 5182
	AegisName: "Puppy_Hat"
	Name: "Puppy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 234
	Script: <"
		bonus bAgi,1;
		bonus3 bAutoSpell,PR_GLORIA,1,10+20*(readparam(bAgi)>=77);
	">
},
{
	Id: 5183
	AegisName: "Bird_Nest_Hat"
	Name: "Bird Nest Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 235
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
		bonus2 bResEff,Eff_Stun,1000;
	">
},
{
	Id: 5184
	AegisName: "Captain_Hat"
	Name: "Captain's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 236
	Script: <" bonus2 bSubEle,Ele_Water,5; ">
},
{
	Id: 5185
	AegisName: "Laurel_Wreath"
	Name: "Laurel Wreath"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 237
	Script: <"
		bonus bLuk,3;
		bonus2 bResEff,Eff_Blind,500;
		bonus2 bResEff,Eff_Curse,500;
	">
},
{
	Id: 5186
	AegisName: "Geographer_Band"
	Name: "Geographer Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 238
	Script: <"
		bonus bInt,1;
		bonus3 bAutoSpellWhenHit,AL_HEAL,1,50;
	">
},
{
	Id: 5187
	AegisName: "Twin_Ribbon"
	Name: "Twin Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 239
	Script: <"
		bonus bMaxSP,30;
		bonus bMdef,3;
		bonus3 bAutoSpellWhenHit,NPC_STONESKIN,6,10;
		bonus5 bAutoSpellWhenHit,NPC_ANTIMAGIC,6,120,BF_MAGIC,0;
	">
},
{
	Id: 5188
	AegisName: "Minstrel_Hat"
	Name: "Wandering Minstrel Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 240
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5189
	AegisName: "Fallen_Leaves"
	Name: "Autumn Leaves"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 241
	Script: <"
		bonus bMaxHP,40;
		bonus bMaxSP,40;
	">
},
{
	Id: 5190
	AegisName: "Baseball_Cap_"
	Name: "Independence Memorial Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 20
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 216
},
{
	Id: 5191
	AegisName: "Ribbon_Black"
	Name: "Black Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 242
	Script: <"
		bonus bInt,1;
		bonus bMdef,3;
	">
},
{
	Id: 5192
	AegisName: "Ribbon_Yellow"
	Name: "Yellow Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 243
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5193
	AegisName: "Ribbon_Green"
	Name: "Green Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 244
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5194
	AegisName: "Ribbon_Pink"
	Name: "Pink Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 245
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5195
	AegisName: "Ribbon_Red"
	Name: "Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 246
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5196
	AegisName: "Ribbon_Orange"
	Name: "Orange Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 247
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5197
	AegisName: "Ribbon_White"
	Name: "White Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 248
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5198
	AegisName: "Drooping_Bunny"
	Name: "Drooping Bunny"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 249
	Script: <"
		bonus bDex,1;
		bonus bFlee,2;
	">
},
{
	Id: 5199
	AegisName: "Baseball_Cap_I"
	Name: "Baseball Cap"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 216
},
{
	Id: 5200
	AegisName: "Coppola"
	Name: "Coppola"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 300
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 252
},
{
	Id: 5201
	AegisName: "Party_Hat_B"
	Name: "Party Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 144
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5202
	AegisName: "Pumpkin_Hat_"
	Name: "Fantastic Pumpkin-Head"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 206
	Script: <" bonus2 bSubRace,RC_Demon,5; ">
},
{
	Id: 5203
	AegisName: "Tongue_Mask"
	Name: "Smiling Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 253
	Script: <" bonus bSpeedRate,25; ">
},
{
	Id: 5204
	AegisName: "Event_Pierrot_Nose"
	Name: "Rudolph's Nose"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 49
	Script: <"
		bonus2 bResEff,Eff_Blind,3000;
		bonus2 bAddMonsterDropItem,12130,30;
	">
},
{
	Id: 5205
	AegisName: "Wreath"
	Name: "Emperor's Laurel Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 261
	Script: <"
		bonus bAllStats,1;
		bonus bMdef,3;
	">
},
{
	Id: 5206
	AegisName: "Romantic_White_Flower"
	Name: "Romantic White Flower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 259
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus2 bSubRace,RC_Plant,3; ">
},
{
	Id: 5207
	AegisName: "Gold_Spirit_Chain"
	Name: "Angel Blessing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 260
	Script: <"
		bonus bLuk,1;
		bonus2 bSubEle,Ele_Holy,5;
	">
},
{
	Id: 5208
	AegisName: "Rideword_Hat"
	Name: "Rideword Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 262
	Script: <"
		bonus2 bHPDrainRate,50,8;
		bonus2 bSPDrainRate,10,4;
		bonus2 bHPLossRate,10,5000;
	">
},
{
	Id: 5209
	AegisName: "Yellow_Baseball_Cap"
	Name: "Love Dad Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 263
},
{
	Id: 5210
	AegisName: "Flying_Angel"
	Name: "Flapping Angel Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 264
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bCastrate,-3;
		bonus bAspdRate,3;
		bonus bInt,1;
		bonus bAgi,1;
	">
},
{
	Id: 5211
	AegisName: "Dress_Hat"
	Name: "Dress Hat"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 265
	Script: <"
		bonus bMdef,7;
		bonus bStr,1;
		bonus bInt,1;
		bonus2 bAddRace, RC_All, 2;
		bonus bMatkRate,2;
		bonus bHealPower,5;
		if (getrefine() >= 7) {
			bonus2 bAddRace, RC_All, 1;
			bonus bMatkRate,1;
			bonus bHealPower,1;
		}

	">
},
{
	Id: 5212
	AegisName: "Satellite_Hairband"
	Name: "Satellite Hairband"
	Type: "IT_ARMOR"
	Weight: 1000
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 266
	Script: <"
		bonus bMaxHP,50;
		bonus bMaxSP,10;
		skill AL_RUWACH,1;
	">
	OnUnequipScript: <" sc_end SC_RUWACH; ">
},
{
	Id: 5213
	AegisName: "Black_Bunny_Band"
	Name: "Sheila Hairnet"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 267
	Script: <"
		bonus bAgi,2;
		bonus bMdef,3;
	">
},
{
	Id: 5214
	AegisName: "Moonlight_Flower_Hat"
	Name: "Moonlight Flower Hat"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 3
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 268
	Script: <"
		bonus bDex,2;
		bonus3 bAutoSpell,AL_INCAGI,1,50;
	">
},
{
	Id: 5215
	AegisName: "Angelic_Chain_"
	Name: "Evolved Angel Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 38
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bDex,1;
		bonus bInt,1;
		bonus2 bSubRace,RC_Demon,3;
	">
},
{
	Id: 5216
	AegisName: "Satanic_Chain_"
	Name: "Evolved Evil Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 39
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bAgi,1;
		bonus bFlee,3;
		bonus2 bSubRace,RC_Angel,3;
	">
},
{
	Id: 5217
	AegisName: "Magestic_Goat_TW"
	Name: "Evolved Majestic Goat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 41
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bStr,2; ">
},
{
	Id: 5218
	AegisName: "Bunny_Band_"
	Name: "Evolved Bunny Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 15
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bInt,2; ">
},
{
	Id: 5219
	AegisName: "Drooping_Kitty_"
	Name: "Evolved Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 142
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,18;
		bonus bFlee,3;
	">
},
{
	Id: 5220
	AegisName: "Smoking_Pipe_"
	Name: "Evolved Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 55
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bVit,1;
		bonus2 bSubRace,RC_Brute,5;
	">
},
{
	Id: 5221
	AegisName: "Pair_Of_Red_Ribbon_"
	Name: "Evolved Pair of Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 45
	Refine: false
	ViewSprite: 169
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bFlee,5; ">
},
{
	Id: 5222
	AegisName: "Fish_On_Head_"
	Name: "Evolved Blue Fish"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 149
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,1;
		bonus bDex,1;
	">
},
{
	Id: 5223
	AegisName: "Big_Golden_Bell_"
	Name: "Evolved Big Golden Bell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 35
	ViewSprite: 175
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bAgi,2; ">
},
{
	Id: 5224
	AegisName: "Orc_Hero_Helm_TW"
	Name: "Evolved Orc Hero Helm"
	Type: "IT_ARMOR"
	Buy: 500000
	Weight: 900
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 55
	ViewSprite: 178
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
		bonus bMaxHPrate,10;
	">
},
{
	Id: 5225
	AegisName: "Marcher_Hat"
	Name: "Parade Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 269
	Script: <"
		bonus bMdef,2;
		bonus bStr,2;
		bonus4 bAutoSpellWhenHit,AL_ANGELUS,5,30,0;
		bonus4 bAutoSpellWhenHit,HP_ASSUMPTIO,1,1,0;
		bonus2 bResEff,Eff_Stun,1000;
		if(BaseClass==Job_Acolyte) bonus4 bAutoSpellOnSkill,AL_HEAL,PR_LEXAETERNA,1,1000;
	">
},
{
	Id: 5226
	AegisName: "Mini_Propeller_"
	Name: "Mini Propeller"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 270
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,2;
		bonus bDex,1;
		bonus bFlee,10;
		bonus bCastrate,-getrefine();
	">
},
{
	Id: 5227
	AegisName: "Red_Deviruchi_Cap"
	Name: "Red Deviruchi Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 271
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
{
	Id: 5228
	AegisName: "White_Deviruchi_Cap"
	Name: "Gray Deviruchi Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 272
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
{
	Id: 5229
	AegisName: "Gray_Deviruchi_Cap"
	Name: "Brown Deviruchi Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 273
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
{
	Id: 5230
	AegisName: "White_Drooping_Kitty"
	Name: "Gray Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 274
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,3000;
		bonus bMdef,15;
	">
},
{
	Id: 5231
	AegisName: "Gray_Drooping_Kitty"
	Name: "Brown Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 275
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,3000;
		bonus bMdef,15;
	">
},
{
	Id: 5232
	AegisName: "Pink_Drooping_Kitty"
	Name: "Pink Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 276
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,3000;
		bonus bMdef,15;
	">
},
{
	Id: 5233
	AegisName: "Blue_Drooping_Kitty"
	Name: "Blue Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 277
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,3000;
		bonus bMdef,15;
	">
},
{
	Id: 5234
	AegisName: "Yellow_Drooping_Kitty"
	Name: "Yellow Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 278
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,3000;
		bonus bMdef,15;
	">
},
{
	Id: 5235
	AegisName: "Gray_Fur_Hat"
	Name: "Brown Beanie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 279
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5236
	AegisName: "Blue_Fur_Hat"
	Name: "Blue Beanie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 280
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5237
	AegisName: "Pink_Fur_Hat"
	Name: "Pink Beanie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 281
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5238
	AegisName: "Red_Wizardry_Hat"
	Name: "Red Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 282
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5239
	AegisName: "White_Wizardry_Hat"
	Name: "Gray Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 283
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5240
	AegisName: "Gray_Wizardry_Hat"
	Name: "Brown Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 284
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5241
	AegisName: "Blue_Wizardry_Hat"
	Name: "Blue Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 285
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5242
	AegisName: "Yellow_Wizardry_Hat"
	Name: "Yellow Mage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 286
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,150;
	">
},
{
	Id: 5243
	AegisName: "Chullos"
	Name: "Shafka"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 287
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus2 bResEff,Eff_Freeze,1000; ">
},
{
	Id: 5244
	AegisName: "Elven_Blindfold"
	Name: "Elven Blindfold"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 288
	Script: <" bonus2 bResEff,Eff_Blind,10000; ">
},
{
	Id: 5245
	AegisName: "Elven_Sunglasses"
	Name: "Elven Sunglasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 289
	Script: <" bonus2 bResEff,Eff_Blind,500; ">
},
{
	Id: 5246
	AegisName: "Angelic_Helm"
	Name: "Angelic Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 290
	Script: <"
		bonus bAgi,1;
		bonus bLuk,1;
		bonus bMdef,3;
		bonus2 bSubRace,RC_Demon,5;
	">
},
{
	Id: 5247
	AegisName: "Satanic_Helm"
	Name: "Satanic Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 291
	Script: <"
		bonus bAgi,1;
		bonus bLuk,1;
		bonus bMdef,3;
		bonus2 bSubRace,RC_Demon,5;
	">
},
{
	Id: 5248
	AegisName: "Robotic_Blindfold"
	Name: "Robotic Blindfold"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 292
	Script: <" bonus2 bResEff,Eff_Blind,10000; ">
},
{
	Id: 5249
	AegisName: "Human_Blindfold"
	Name: "Human Blindfold"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 293
	Script: <" bonus2 bResEff,Eff_Blind,10000; ">
},
{
	Id: 5250
	AegisName: "Robotic_Ears"
	Name: "Robotic Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 294
},
{
	Id: 5251
	AegisName: "Round_Ears"
	Name: "Round Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 295
},
{
	Id: 5252
	AegisName: "Drooping_Nine_Tail"
	Name: "Drooping Ninetail"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 296
	Script: <"
		bonus bAgi,1;
		bonus bDex,1;
		bonus3 bAutoSpellWhenHit,PR_GLORIA,1,30;
	">
},
{
	Id: 5253
	AegisName: "Lif_Doll_Hat"
	Name: "Lif Doll Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 297
	Script: <"
		bonus bInt,1;
		bonus bMdef,getrefine();
		bonus bDef,getrefine()*-1;
	">
},
{
	Id: 5254
	AegisName: "Deviling_Hat"
	Name: "Deviling Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 298
	Script: <"
		bonus bStr,1;
		bonus bCritical,3;
		bonus2 bSubRace,RC_Angel,-20;
		if(getrefine()>=6) {
			bonus bCritical,getrefine()-5;
		}

	">
},
{
	Id: 5255
	AegisName: "Triple_Poring_Hat"
	Name: "Triple Poring Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 299
	Script: <"
		bonus bLuk,3;
		bonus3 bAutoSpell,BS_GREED,1,50;
	">
},
{
	Id: 5256
	AegisName: "Valkyrie_Feather_Band"
	Name: "Valkyrie Feather Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 300
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,1;
		bonus3 bAutoSpellWhenHit,AL_HEAL,1,10;
	">
},
{
	Id: 5257
	AegisName: "Soulless_Wing"
	Name: "Soul Ring"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 301
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,2;
		bonus3 bAutoSpellWhenHit,HP_ASSUMPTIO,1,10;
	">
},
{
	Id: 5258
	AegisName: "Afro_Wig"
	Name: "Afro Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 10
	ViewSprite: 302
	Script: <"
		bonus3 bAutoSpellWhenHit,NV_FIRSTAID,1,300;
		bonus2 bSubEle,Ele_Neutral,1;
	">
},
{
	Id: 5259
	AegisName: "Elephant_Hat_"
	Name: "Elephant Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 215
	Script: <"
		bonus bVit,1;
		bonus3 bAutoSpell,WZ_WATERBALL,3,10;
		skill AL_HOLYWATER,1;
	">
},
{
	Id: 5260
	AegisName: "Cookie_Hat"
	Name: "Cookie Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 217
	Script: <"
		bonus bAgi,1;
		bonus bFlee2,5;
		bonus bCritAtkRate,5;
	">
},
{
	Id: 5261
	AegisName: "Silver_Tiara_"
	Name: "Silver Tiara"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 218
	Script: <"
		bonus bInt,2;
		if(BaseClass==Job_Mage) bonus bMatkRate,(JobLevel/20);
		if(BaseClass==Job_Acolyte) bonus bUseSPrate,-(JobLevel/10);
		if(BaseClass==Job_Archer) bonus bMaxSP,(JobLevel*2);
	">
},
{
	Id: 5262
	AegisName: "Gold_Tiara_"
	Name: "Golden Tiara"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 232
	Script: <"
		bonus bStr,2;
		bonus bUnbreakableHelm,0;
		if((readparam(bDex)<56)&&(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief)) bonus bDex,JobLevel/7;
	">
},
{
	Id: 5263
	AegisName: "Ati_Atihan_Hat"
	Name: "Pagdayaw"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 20
	ViewSprite: 303
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Water,1;
		bonus2 bSubEle,Ele_Earth,1;
		bonus2 bSubEle,Ele_Fire,1;
		bonus2 bSubEle,Ele_Wind,1;
		bonus2 bAddEff,Eff_Curse,3;
	">
},
{
	Id: 5264
	AegisName: "Aussie_Flag_Hat"
	Name: "Australian Flag Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 304
	Script: <" bonus bAllStats,2; ">
},
{
	Id: 5265
	AegisName: "Apple_Of_Archer_C"
	Name: "Apple of Archer"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 7
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 72
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bDex,4; ">
},
{
	Id: 5266
	AegisName: "Bunny_Band_C"
	Name: "Bunny Band"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 9
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 15
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,5;
		bonus2 bSubRace,RC_DemiPlayer,10;
	">
},
{
	Id: 5267
	AegisName: "Sahkkat_C"
	Name: "Sakkat"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 10
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 67
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAgi,3; ">
},
{
	Id: 5268
	AegisName: "Lord_Circlet_C"
	Name: "Grand Circlet"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 10
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 93
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,3;
		bonus bInt,3;
		bonus bLuk,3;
		bonus bMdef,4;
	">
},
{
	Id: 5269
	AegisName: "Flying_Angel_"
	Name: "Flapping Angel Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 264
	Script: <"
		bonus bInt,1;
		bonus bAgi,1;
		bonus bAspdRate,3;
		bonus bSpeedRate,25;
	">
},
{
	Id: 5270
	AegisName: "Fallen_Leaves_"
	Name: "Autumn Leaves"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 241
	Script: <" bonus bFlee2,5; ">
},
{
	Id: 5271
	AegisName: "Chinese_Crown_"
	Name: "Phoenix Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 221
	Script: <"
		bonus bMdef,3;
		bonus2 bSubRace,RC_Boss,getrefine();
	">
},
{
	Id: 5272
	AegisName: "Tongue_Mask_"
	Name: "Tongue Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 253
	Script: <" bonus3 bAutoSpell,SM_PROVOKE,5,50; ">
},
{
	Id: 5273
	AegisName: "Happy_Wig"
	Name: "Happy Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 305
	Script: <"
		bonus bSpeedRate,25;
		bonus bDef,4;
		skill TF_HIDING,1;
	">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 5274
	AegisName: "Shiny_Wig"
	Name: "Shiny Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 306
	Script: <"
		bonus bSpeedRate,25;
		bonus bDef,4;
		skill TF_HIDING,1;
	">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 5275
	AegisName: "Marvelous_Wig"
	Name: "Marvelous Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 307
	Script: <"
		bonus bSpeedRate,25;
		bonus bDef,4;
		skill TF_HIDING,1;
	">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 5276
	AegisName: "Fantastic_Wig"
	Name: "Fantastic Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 308
	Script: <"
		bonus bSpeedRate,25;
		bonus bDef,4;
		skill TF_HIDING,1;
	">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 5277
	AegisName: "Yellow_Bandana"
	Name: "Yellow Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 309
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,2;
		bonus bVit,2;
		bonus bLongAtkDef,10;
	">
},
{
	Id: 5278
	AegisName: "Yellow_Ribbon"
	Name: "Yellow Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 310
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,2;
		bonus bVit,2;
		bonus bLongAtkDef,10;
	">
},
{
	Id: 5279
	AegisName: "Drooping_Kitty_C"
	Name: "Refined Drooping Cat"
	Type: "IT_ARMOR"
	Buy: 2
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 142
	Script: <"
		bonus bMdef,15;
		bonus2 bResEff,Eff_Curse,3000;
	">
},
{
	Id: 5280
	AegisName: "Magestic_Goat_C"
	Name: "Baphomet Horns"
	Type: "IT_ARMOR"
	Buy: 2
	Def: 5
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 41
	Script: <" bonus bStr,1; ">
},
{
	Id: 5281
	AegisName: "Deviruchi_Cap_C"
	Name: "Refined Deviruchi Hat"
	Type: "IT_ARMOR"
	Buy: 2
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 123
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
{
	Id: 5282
	AegisName: "euRO_Baseball_Cap"
	Name: "Europe Baseball Cap"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 216
},
{
	Id: 5283
	AegisName: "Chick_Hat"
	Name: "Chick Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 311
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,2;
		bonus bMaxHP,50;
		bonus bMaxSP,50;
		skill TF_DOUBLE,2;
		bonus bDoubleRate,10;
		bonus2 bSubRace,RC_DemiPlayer,3;
	">
},
{
	Id: 5284
	AegisName: "Water_Lily_Crown"
	Name: "Water Lily Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 312
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
		bonus bHPrecovRate,5;
		bonus bSPrecovRate,3;
	">
},
{
	Id: 5285
	AegisName: "Vane_Hairpin"
	Name: "Vane Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 313
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bAgi,2; ">
},
{
	Id: 5286
	AegisName: "Pecopeco_Hairband"
	Name: "Pecopeco Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	Refine: false
	ViewSprite: 314
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bSpeedRate,25;
		bonus bAspdRate,-10;
		bonus bCastrate,25;
	">
},
{
	Id: 5287
	AegisName: "Vacation_Hat"
	Name: "Vacation Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 315
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bVit,1; ">
},
{
	Id: 5288
	AegisName: "Red_Glasses"
	Name: "Red Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 316
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bInt,1; ">
},
{
	Id: 5289
	AegisName: "Vanilmirth_Hat"
	Name: "Vanilmirth Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 317
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bUnbreakableHelm,0;
		bonus3 bAutoSpell,MG_FIREBOLT,1,10;
		bonus3 bAutoSpell,MG_COLDBOLT,1,10;
		bonus3 bAutoSpell,MG_LIGHTNINGBOLT,1,10;
		bonus bMdef,5;
	">
},
{
	Id: 5290
	AegisName: "Drooping_Bunny_"
	Name: "Drooping Bunny"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 249
	Script: <"
		bonus bDex,1;
		bonus bFlee,2;
	">
},
{
	Id: 5291
	AegisName: "Kettle_Hat"
	Name: "Kettle Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 318
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus4 bAutoSpell,SA_DELUGE,2,10,0;
		bonus3 bAutoSpell,WZ_WATERBALL,3,10;
	">
},
{
	Id: 5292
	AegisName: "Dragon_Skull"
	Name: "Dragon Skull"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 319
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus2 bSubRace,RC_Dragon,5; ">
},
{
	Id: 5293
	AegisName: "Ramen_Hat"
	Name: "Ramen Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 320
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,4;
		bonus4 bAutoSpellWhenHit,AL_DECAGI,1,30,1;
	">
},
{
	Id: 5294
	AegisName: "Whisper_Mask"
	Name: "Whisper Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 321
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,3;
		bonus2 bSubEle,Ele_Ghost,-10;
	">
},
{
	Id: 5295
	AegisName: "Golden_Bandana"
	Name: "Golden Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2400
	Def: 4
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 138
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,4; ">
},
{
	Id: 5296
	AegisName: "Drooping_Nine_Tail_"
	Name: "Drooping Nine Tail"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 296
	Script: <"
		bonus bAgi,1;
		bonus bCritical,1;
	">
},
{
	Id: 5297
	AegisName: "Soulless_Wing_"
	Name: "Soul Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 301
	Script: <"
		bonus bAllStats,1;
		bonus2 bSPRegenRate,2,10000;
	">
},
{
	Id: 5298
	AegisName: "Marvelous_Wig_"
	Name: "Dokebi's Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 307
	Script: <"
		bonus2 bSubEle,Ele_Neutral,5;
		bonus2 bSubEle,Ele_Fire,-5;
		bonus2 bSubEle,Ele_Water,-5;
	">
},
{
	Id: 5299
	AegisName: "Ati_Atihan_Hat_"
	Name: "Pagdayaw"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 303
	Script: <" bonus3 bAutoSpell,DC_SCREAM,1,50; ">
},
{
	Id: 5300
	AegisName: "Bullock_Helm"
	Name: "Bullock Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 322
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bMaxHP,100; ">
},
{
	Id: 5301
	AegisName: "Russian_Ribbon"
	Name: "Victory Hairband"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 323
},
{
	Id: 5302
	AegisName: "Lotus_Flower_Hat"
	Name: "Flower Lily"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 324
},
{
	Id: 5303
	AegisName: "Flower_Coronet"
	Name: "Flower Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 325
	Script: <"
		bonus bMdef,3;
		bonus bMaxHP,50;
	">
},
{
	Id: 5304
	AegisName: "Cap_Of_Blindness"
	Name: "Cap Of Blindness"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 4
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 326
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bResEff,Eff_Curse,700;
		bonus2 bResEff,Eff_Blind,10000;
	">
},
{
	Id: 5305
	AegisName: "Pirate_Dagger"
	Name: "Pirate Dagger"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 327
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bBaseAtk,5; ">
},
{
	Id: 5306
	AegisName: "Freyja_Crown"
	Name: "Freya's Crown"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 12
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 328
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bSubRace,RC_DemiPlayer,5; ">
},
{
	Id: 5307
	AegisName: "Carmen_Mirandas_Hat"
	Name: "Carmen Miranda's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 329
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,3;
		bonus3 bAutoSpellWhenHit,DC_WINKCHARM,1,50;
	">
},
{
	Id: 5308
	AegisName: "Brazilian_Flag_Hat"
	Name: "Brazil National Flag Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 330
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bSpeedAddRate,25; ">
},
{
	Id: 5309
	AegisName: "Mahican"
	Name: "Wool Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 331
	Script: <" skill RG_GRAFFITI,1; ">
},
{
	Id: 5310
	AegisName: "Bulb_Hairband"
	Name: "Shining Electric Bulb Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 332
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Dark,10;
		skill MG_SIGHT,1;
	">
	OnUnequipScript: <" sc_end SC_SIGHT; ">
},
{
	Id: 5311
	AegisName: "Large_Hibiscus"
	Name: "Large Hisbiscus"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 333
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bMdef,15; ">
},
{
	Id: 5312
	AegisName: "Ayothaya_Hat"
	Name: "Ayothaya King's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 334
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5313
	AegisName: "Diadem"
	Name: "Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 335
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,1;
		bonus bMatkRate,3;
		bonus bCastrate,-3;
	">
},
{
	Id: 5314
	AegisName: "Hockey_Mask"
	Name: "Hockey Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 336
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus2 bAddRace,RC_DemiPlayer,5; ">
},
{
	Id: 5315
	AegisName: "Observer"
	Name: "Observer"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 35
	Refine: false
	ViewSprite: 337
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" skill WZ_ESTIMATION,1; ">
},
{
	Id: 5316
	AegisName: "Umbrella_Hat"
	Name: "Umbrella Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 338
	Script: <" bonus2 bSubEle,Ele_Water,3; ">
},
{
	Id: 5317
	AegisName: "Fisherman_Hat"
	Name: "Fisherman's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 339
	Script: <" bonus3 bAutoSpell,WZ_WATERBALL,3,50; ">
},
{
	Id: 5318
	AegisName: "Poring_Party_Hat"
	Name: "Poring Party Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 340
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,3; ">
},
{
	Id: 5319
	AegisName: "Hellomother_Hat"
	Name: "Hello Mother Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 341
	Script: <" bonus bLuk,3; ">
},
{
	Id: 5320
	AegisName: "Champion_Wreath"
	Name: "Champion Wreath"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 261
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAllStats,2;
		bonus4 bAutoSpellWhenHit,AL_HEAL,1,50,0;
	">
},
{
	Id: 5321
	AegisName: "Indonesian_Bandana"
	Name: "Bandana Merah Putih"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 342
},
{
	Id: 5322
	AegisName: "Scarf"
	Name: "Kerchief"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 24
	ViewSprite: 343
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,2;
		bonus bFlee,5;
	">
},
{
	Id: 5323
	AegisName: "Misstrance_Crown"
	Name: "Misstrance Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 10
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 165
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,2; ">
},
{
	Id: 5324
	AegisName: "Little_Angel_Doll"
	Name: "Little Angel Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 344
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,3;
		bonus4 bAutoSpellWhenHit,CR_GRANDCROSS,3,30,0;
	">
},
{
	Id: 5325
	AegisName: "Robo_Eye"
	Name: "Robo Eye"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_MID"
	EquipLv: 10
	Refine: false
	ViewSprite: 345
	Script: <"
		bonus2 bAddRace, RC_All, 2;
		bonus bMatkRate,2;
		bonus bDex,1;
	">
},
{
	Id: 5326
	AegisName: "Masquerade_C"
	Name: "Masquerade C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 78
	Script: <" bonus2 bAddRace,RC_DemiPlayer,7; ">
},
{
	Id: 5327
	AegisName: "Orc_Hero_Helm_C"
	Name: "Refined Helmet of Orc Hero"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 10
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 178
	Script: <"
		bonus bStr,5;
		bonus bVit,3;
	">
},
{
	Id: 5328
	AegisName: "Evil_Wing_Ears_C"
	Name: "Evil Wing Ears C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 2
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 152
	Script: <" bonus bStr,1; ">
},
{
	Id: 5329
	AegisName: "Dark_Blindfold_C"
	Name: "Dark Blindfold C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 187
	Script: <"
		bonus2 bResEff,Eff_Blind,10000;
		bonus2 bResEff,Eff_Stun,500;
	">
},
{
	Id: 5330
	AegisName: "kRO_Drooping_Kitty_C"
	Name: "kRO Drooping Kitty C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 6
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 142
	Script: <"
		bonus bMdef,15;
		bonus2 bResEff,Eff_Curse,4000;
		bonus2 bResEff,Eff_Stun,1000;
	">
},
{
	Id: 5331
	AegisName: "Corsair_C"
	Name: "Corsair C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 10
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 105
	Script: <"
		bonus bVit,3;
		bonus bInt,3;
	">
},
{
	Id: 5332
	AegisName: "Loki_Mask"
	Name: "Loki Mask"
	Type: "IT_ARMOR"
	Weight: 200
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 20
	Refine: false
	ViewSprite: 346
	Script: <" bonus bFlee2,3; ">
},
{
	Id: 5333
	AegisName: "Radio_Antenna"
	Name: "Radio Antenna"
	Type: "IT_ARMOR"
	Weight: 1500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 347
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,5;
		bonus bCritical,5;
		bonus bFlee,5;
		skill MG_LIGHTNINGBOLT,1;
		bonus4 bAutoSpellWhenHit,MG_THUNDERSTORM,5,30,1;
	">
},
{
	Id: 5334
	AegisName: "Angeling_Wanna_Fly"
	Name: "Flapping Angeling"
	Type: "IT_ARMOR"
	Weight: 700
	Loc: "EQP_HEAD_TOP"
	EquipLv: 38
	Refine: false
	ViewSprite: 348
	Script: <"
		bonus bLuk,2;
		bonus bMdef,2;
	">
},
{
	Id: 5335
	AegisName: "Jumping_Poring"
	Name: "Jumping Poring"
	Type: "IT_ARMOR"
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 349
	Script: <"
		bonus bLuk,1;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5336
	AegisName: "Guildsman_Recruiter"
	Name: "Guildsman Recruiter Hat"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 350
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 5337
	AegisName: "Party_Recruiter_Hat"
	Name: "Party Recruiter Hat"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 351
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 5338
	AegisName: "Bf_Recruiter_Hat"
	Name: "Bf Recruiter Hat"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 352
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5339
	AegisName: "Friend_Recruiter_Hat"
	Name: "Friend Recruiter Hat"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 353
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5340
	AegisName: "Deprotai_Doll_Hat"
	Name: "Defolty Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 354
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bStr,2;
		bonus3 bAutoSpellWhenHit,AL_ANGELUS,10,20;
	">
},
{
	Id: 5341
	AegisName: "Claris_Doll_Hat"
	Name: "Glaris Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 355
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bInt,2;
		bonus bMagicHPGainValue,50;
	">
},
{
	Id: 5342
	AegisName: "Sorin_Doll_Hat"
	Name: "Sorin Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 356
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bDex,2;
		autobonus "{ bonus bBaseAtk,50; }",20,10000,0,"{ specialeffect(EF_POTION_BERSERK, AREA, playerattached()); }";
	">
},
{
	Id: 5343
	AegisName: "Tayelin_Doll_Hat"
	Name: "Telling Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 357
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bAgi,2;
		bonus2 bAddItemHealRate,504,10;
		bonus2 bAddItemHealRate,547,10;
	">
},
{
	Id: 5344
	AegisName: "Binit_Doll_Hat"
	Name: "Bennit Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 358
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bVit,2;
		autobonus "{ bonus bAspdRate,5; }",20,30000,0,"{ specialeffect(EF_HASTEUP, AREA, playerattached()); }";
	">
},
{
	Id: 5345
	AegisName: "Debril_Doll_Hat"
	Name: "W Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 359
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus bLuk,2;
		bonus2 bAddRace,RC_Undead,5;
		bonus2 bMagicAddRace,RC_Undead,5;
		bonus2 bSubRace,RC_Undead,5;
	">
},
{
	Id: 5346
	AegisName: "Gf_Recruiter_Hat"
	Name: "Gf Recruiter Hat"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 360
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5347
	AegisName: "Ph_D_Hat_"
	Name: "Ph.D Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 98
},
{
	Id: 5348
	AegisName: "Big_Sis_Ribbon_"
	Name: "Big Ribbon"
	Type: "IT_ARMOR"
	Buy: 15000
	Weight: 200
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 28
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5349
	AegisName: "Boys_Cap_"
	Name: "Boy's Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 102
},
{
	Id: 5350
	AegisName: "Pirate_Bandana_"
	Name: "Pirate Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 74
	Script: <" bonus bStr,1; ">
},
{
	Id: 5351
	AegisName: "Sunflower_"
	Name: "Sunflower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 37
	Script: <" bonus2 bSubRace,RC_Insect,10; ">
},
{
	Id: 5352
	AegisName: "Poporing_Cap"
	Name: "Poporing Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 38
	ViewSprite: 361
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 5353
	AegisName: "Helm_Of_Sun_"
	Name: "Hat of the Sun God"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2400
	Def: 4
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 138
	Script: <"
		bonus bStr,3;
		bonus bInt,2;
	">
},
{
	Id: 5354
	AegisName: "Muslim_Hat_M"
	Name: "Muslim Hat M"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 2
	Gender: "SEX_MALE"
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 362
	Script: <" bonus bCastrate,-5; ">
},
{
	Id: 5355
	AegisName: "Muslim_Hat_F"
	Name: "Selendang"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 363
	Script: <" bonus bCastrate,-5; ">
},
{
	Id: 5356
	AegisName: "Pumpkin_Hat_H"
	Name: "Festival Pumpkin Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 206
	Trade: {
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bSubRace,RC_Demon,5;
		bonus2 bAddRace,RC_Demon,5;
	">
},
{
	Id: 5357
	AegisName: "Wings_Of_Victory"
	Name: "Wings Of Victory"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 10
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 365
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,10;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5358
	AegisName: "Pecopeco_Wing_Ears"
	Name: "Peco Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 366
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,1;
		bonus bMdef,2;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5359
	AegisName: "J_Captain_Hat"
	Name: "Ship Captain Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 367
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,1;
		bonus bLongAtkRate,7;
		bonus bMaxHP,100;
	">
},
{
	Id: 5360
	AegisName: "Whikebain_Ears"
	Name: "Hyuke's Black Cat Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 368
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bFlee,10;
		bonus bCritical,3;
		bonus bCritAtkRate,10;
		bonus bDefRate,-50;
		bonus bDef2Rate,-50;
	">
},
{
	Id: 5361
	AegisName: "Gang_Scarf"
	Name: "Gangster Scarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	EquipLv: 60
	Refine: false
	ViewSprite: 369
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bBaseAtk,5;
		if(BaseJob==Job_Rogue) skill RG_GANGSTER,1;
	">
},
{
	Id: 5362
	AegisName: "Ninja_Scroll"
	Name: "Ninja Scroll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_HEAD_LOW"
	EquipLv: 60
	Refine: false
	ViewSprite: 370
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bMatkRate,1; ">
},
{
	Id: 5363
	AegisName: "Helm_Of_Abyss"
	Name: "Helm Of Abyss"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 2
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Thief: true
		Knight: true
		Blacksmith: true
		Assassin: true
		Crusader: true
		Rogue: true
		Alchemist: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 371
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,-10;
		bonus2 bSubRace,RC_Boss,10;
	">
},
{
	Id: 5364
	AegisName: "Dark_Snake_Lord_Hat"
	Name: "Evil Snake Lord Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 372
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bAgi,2;
	">
},
{
	Id: 5365
	AegisName: "Fried_Egg"
	Name: "Magnolia Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 373
	Script: <"
		bonus bBaseAtk, 5;
		bonus5 bAutoSpellWhenHit, BS_GREED, 1, 10, BF_SHORT, 0;
	">
},
{
	Id: 5366
	AegisName: "Hat_0f_King"
	Name: "Love Dad Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 374
	Script: <" bonus bAllStats,5; ">
},
{
	Id: 5367
	AegisName: "Hyegun_Hat"
	Name: "Hyegun Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 10
	Refine: false
	ViewSprite: 375
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,3;
		bonus2 bSubRace,RC_Demon,10;
	">
},
{
	Id: 5368
	AegisName: "White_Wing"
	Name: "White Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 38
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddMonsterDropItem,12280,300; ">
},
{
	Id: 5369
	AegisName: "Dark_Wing"
	Name: "Dark Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 39
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddMonsterDropItem,12279,300; ">
},
{
	Id: 5370
	AegisName: "Orchid_Hairband"
	Name: "Orchid Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 376
	Script: <" bonus bInt,1; ">
},
{
	Id: 5371
	AegisName: "Hat_Of_Judge"
	Name: "Judge Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 377
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,1;
		bonus bMaxSP,30;
	">
},
{
	Id: 5372
	AegisName: "Drooping_White_Kitty"
	Name: "Koneko Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 378
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,1;
		bonus bDelayrate,-3;
		bonus bMatkRate,3;
		bonus bMaxSPrate,3;
		bonus bMdef,3;
	">
},
{
	Id: 5373
	AegisName: "Darkness_Helm"
	Name: "Dark Randgris Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 379
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,3;
		bonus bMdef,1;
	">
},
{
	Id: 5374
	AegisName: "L_Magestic_Goat"
	Name: "Gigantic Majestic Goat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 380
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bAddRace,RC_DemiPlayer,12;
		bonus bBaseAtk,(JobLevel*2)/7;
	">
},
{
	Id: 5375
	AegisName: "L_Orc_Hero_Helm"
	Name: "Orc Hero Headdress"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 900
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 381
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus3 bAutoSpellWhenHit,BS_WEAPONPERFECT,3,10;
	">
},
{
	Id: 5376
	AegisName: "Satanic_Chain_P"
	Name: "Flying Evil Wing"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 382
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMaxSP,120;
		bonus2 bAddEff2,Eff_Curse,300;
	">
},
{
	Id: 5377
	AegisName: "Antique_Pipe"
	Name: "Gentleman's Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 383
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus2 bSubRace,RC_DemiPlayer,2; ">
},
{
	Id: 5378
	AegisName: "Rabbit_Ear_Hat"
	Name: "Bunny Top Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 384
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,3;
		bonus3 bAutoSpellWhenHit,AL_INCAGI,5,10;
	">
},
{
	Id: 5379
	AegisName: "Balloon_Hat"
	Name: "Tam"
	Type: "IT_ARMOR"
	Weight: 800
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 385
	Script: <"
		bonus bMdef,2;
		bonus bMatkRate,2+(getrefine()/2);
	">
},
{
	Id: 5380
	AegisName: "Fish_Head_Hat"
	Name: "Fish Head Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 386
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus3 bAutoSpell,SA_FROSTWEAPON,1,5; ">
},
{
	Id: 5381
	AegisName: "Santa_Poring_Hat"
	Name: "Santa Poring Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 387
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,2;
		bonus2 bAddEle,Ele_Dark,3;
		bonus2 bSubEle,Ele_Dark,3;
	">
},
{
	Id: 5382
	AegisName: "Bell_Ribbon"
	Name: "Bell Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 388
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bVit,1;
		skill AL_ANGELUS,1;
	">
	OnUnequipScript: <" sc_end SC_ANGELUS; ">
},
{
	Id: 5383
	AegisName: "Hunting_Cap"
	Name: "Hunter's Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 389
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,1;
		bonus2 bAddRace,RC_Brute,10;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5384
	AegisName: "Santa_Hat_1"
	Name: "Twin Pompom By JB"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 390
	Script: <"
		bonus bLuk,3;
		skill WZ_ESTIMATION,1;
		bonus3 bAutoSpell,AL_INCAGI,1,500;
	">
},
{
	Id: 5385
	AegisName: "Yoyo_Hat"
	Name: "Yoyo Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 391
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" skill TF_HIDING, 1; ">
	OnUnequipScript: <" sc_end SC_HIDING; ">
},
{
	Id: 5386
	AegisName: "Ayam_"
	Name: "Ayam"
	Type: "IT_ARMOR"
	Weight: 70
	Def: 7
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 228
	Trade: {
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,7;
		bonus bFlee,7;
		bonus2 bAddMonsterDropItem,12198,200;
	">
},
{
	Id: 5387
	AegisName: "Neko_Mimi_Kafra"
	Name: "Neko Mimi Kafra"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 392
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bMdef,5; ">
},
{
	Id: 5388
	AegisName: "Snake_Head"
	Name: "Snake Head Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 393
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		skill TF_DOUBLE,5;
		bonus bDoubleRate,25;
	">
},
{
	Id: 5389
	AegisName: "Angel_Spirit"
	Name: "Angel Spirit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_HEAD_MID"
	EquipLv: 30
	Refine: false
	ViewSprite: 394
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus bHit,15;
	">
},
{
	Id: 5390
	AegisName: "Santa_Hat_2"
	Name: "Frozen Twin Pompom"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 395
	Script: <" bonus2 bResEff, Eff_Freeze, 3000; ">
},
{
	Id: 5391
	AegisName: "Toast_C"
	Name: "Toast"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 188
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,100;
		bonus2 bAddMonsterDropItem,617,10;
	">
},
{
	Id: 5392
	AegisName: "Louyang_Cap"
	Name: "Louyang NewYear Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 396
	Script: <" bonus bLuk,2; ">
},
{
	Id: 5393
	AegisName: "Valentine_Hat"
	Name: "Love Valentine's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 397
	Script: <"
		bonus bMaxSPrate, 7;
		bonus bMaxHPrate, 7;
	">
},
{
	Id: 5394
	AegisName: "Bubblegum_Lower"
	Name: "Bubblegum"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5395
	AegisName: "Tiraya_Bonnet"
	Name: "Striped Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 398
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMaxHP,100+(getrefine()*20);
		bonus bLuk,3;
	">
},
{
	Id: 5396
	AegisName: "Jasper_Crest"
	Name: "Jasper Crest"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 399
	Script: <"
		bonus bDex,3;
		bonus bVit,1;
	">
},
{
	Id: 5397
	AegisName: "Scuba_Mask"
	Name: "Scuba Gear"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 400
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Water, 10;
		bonus bUnbreakableHelm, 0;
	">
},
{
	Id: 5398
	AegisName: "Bone_Head"
	Name: "Bone Head"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1200
	Def: 5
	Slots: 1
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 85
	ViewSprite: 401
	Script: <"
		bonus bStr,2;
		bonus bMdef,5;
		bonus2 bResEff,Eff_Stun,500;
		bonus2 bResEff,Eff_Bleeding,500;
	">
},
{
	Id: 5399
	AegisName: "Mandragora_Cap"
	Name: "Mandragora Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
		Star_Gladiator: true
		Soul_Linker: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 85
	Refine: false
	ViewSprite: 402
	Script: <"
		bonus bVit,3;
		bonus3 bAutoSpellWhenHit,DC_SCREAM,5,30;
	">
},
{
	Id: 5400
	AegisName: "Fox_Hat"
	Name: "Fox Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 403
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5401
	AegisName: "Black_Glasses"
	Name: "Black Frame Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 404
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
		bonus bUnbreakableHelm, 0;
	">
},
{
	Id: 5402
	AegisName: "Mischievous_Fairy"
	Name: "Mischievous Fairy"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 405
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bUnbreakableHelm, 0;
		bonus bFlee2, 3;
	">
},
{
	Id: 5403
	AegisName: "Fish_In_Mouth"
	Name: "Fish In Mouth"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 200
	Loc: "EQP_HEAD_LOW"
	EquipLv: 30
	Refine: false
	ViewSprite: 406
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bAddMonsterDropItem,579,500;
		bonus2 bAddItemHealRate,579,25;
	">
},
{
	Id: 5404
	AegisName: "Blue_Ribbon"
	Name: "Blue Ribbon"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	ViewSprite: 407
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus4 bAutoSpellWhenHit, AC_CONCENTRATION, 2, 7, 0; ">
},
{
	Id: 5405
	AegisName: "Filir_Hat"
	Name: "Filir Hat"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 200
	Loc: "EQP_HEAD_TOP"
	EquipLv: 80
	Refine: false
	ViewSprite: 408
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bShortWeaponDamageReturn, 1; ">
},
{
	Id: 5406
	AegisName: "Academy_Freshman_Hat"
	Name: "Academy Freshman Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 409
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHP,80;
		bonus bMaxSP,10;
	">
},
{
	Id: 5407
	AegisName: "Academy_Graduating_Cap"
	Name: "Academy Completion Hat"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 410
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMaxSP,30; ">
},
{
	Id: 5408
	AegisName: "Old_Bandanna"
	Name: "Old Bandana"
	Type: "IT_ARMOR"
	Def: 5
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 6
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,50;
		bonus bCastrate,10;
	">
},
{
	Id: 5409
	AegisName: "New_Cowboy_Hat"
	Name: "Purple Cowboy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 411
	Script: <"
		bonus bInt,2;
		bonus bVit,2;
		bonus bMaxSP,50;
	">
},
{
	Id: 5410
	AegisName: "Bread_Bag2"
	Name: "Brown Paperbag Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 6
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 412
	Script: <"
		bonus bMaxHP,100;
		bonus2 bResEff, Eff_Stun, 400;
		bonus2 bSubRace,RC_DemiPlayer,4;
	">
},
{
	Id: 5411
	AegisName: "White_Snake_Hat"
	Name: "White Snake Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 413
	Script: <" bonus bDex,2; ">
},
{
	Id: 5412
	AegisName: "Sweet_Candy"
	Name: "Sweet Candy"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 414
	Script: <" bonus bUnbreakableHelm, 0; ">
},
{
	Id: 5413
	AegisName: "Popcorn_Hat"
	Name: "Pop Corn Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 415
	Script: <" bonus2 bSubEle,Ele_Wind, 10; ">
},
{
	Id: 5414
	AegisName: "Campfire_Hat"
	Name: "Camp Fire Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 416
	Script: <"
		bonus2 bSubEle,Ele_Fire, 10;
		bonus4 bAutoSpellWhenHit, MG_FIREBALL, 5, 100, 1;
	">
},
{
	Id: 5415
	AegisName: "Poring_Cake_Cap"
	Name: "Poring Cake Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 417
	Script: <"
		bonus bMdef,5;
		bonus bCritical,5;
		bonus bFlee,5;
		bonus bFlee2,5;
		bonus bAspdRate,5;
		bonus bCastrate,-5;
		bonus bDelayrate,-5;
	">
},
{
	Id: 5416
	AegisName: "Beer_Cap"
	Name: "Beer Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 18
	ViewSprite: 418
	Script: <"
		bonus bFlee2,5;
		skill SM_RECOVERY,3;
		skill MG_SRECOVERY,3;
	">
},
{
	Id: 5417
	AegisName: "Crown_Parrot"
	Name: "Crown Parrots"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 419
	Script: <"
		bonus bInt,1;
		bonus2 bResEff,Eff_Silence,10000;
		bonus3 bAutoSpell,DC_SCREAM,1,50;
	">
},
{
	Id: 5418
	AegisName: "Soldier_Hat"
	Name: "Legionnaire Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 420
	Script: <"
		bonus bStr,1;
		bonus2 bAddRace, RC_All, 3;
		bonus bUseSPrate,10;
	">
},
{
	Id: 5419
	AegisName: "Evolved_Leaf"
	Name: "Leaves Of Grass"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 57
	Script: <"
		bonus bVit,1;
		bonus2 bSubRace,RC_Plant,5;
	">
},
{
	Id: 5420
	AegisName: "Mask_Of_Ifrit"
	Name: "Mask Of Ifrit"
	Type: "IT_ARMOR"
	Def: 8
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 70
	Refine: false
	ViewSprite: 421
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bMdef,5;
		bonus2 bSubEle,Ele_Fire,10;
		bonus2 bSubEle,Ele_Water,-10;
		skill MG_SIGHT,1;
		bonus3 bAutoSpellWhenHit,WZ_METEOR,3,50;
		bonus3 bAutoSpell,MG_FIREBOLT,3,50;
	">
	OnUnequipScript: <" sc_end SC_SIGHT; ">
},
{
	Id: 5421
	AegisName: "Ifrits_Ear"
	Name: "Ears Of Ifrit"
	Type: "IT_ARMOR"
	Buy: 20
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 422
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bMdef,3;
		bonus2 bSkillAtk,MG_FIREBOLT,2;
		bonus2 bSkillAtk,WZ_FIREPILLAR,2;
		bonus2 bSkillAtk,WZ_METEOR,2;
		bonus2 bSkillAtk,SM_BASH,2;
		bonus2 bSkillAtk,SM_MAGNUM,2;
		bonus2 bSkillAtk,KN_PIERCE,2;
		bonus2 bSubEle,Ele_Fire,5;
		bonus2 bSubEle,Ele_Water,-5;
	">
},
{
	Id: 5422
	AegisName: "Linguistic_Book_Cap"
	Name: "Linguistic Book Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 70
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 423
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
	">
},
{
	Id: 5423
	AegisName: "Lovecap_China"
	Name: "I Love China"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 5
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 424
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,3;
		bonus2 bSubRace,RC_DemiPlayer,10;
	">
},
{
	Id: 5424
	AegisName: "Fanta_Orange_Can"
	Name: "Fanta Orange Can Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 425
},
{
	Id: 5425
	AegisName: "Fanta_Grape_Can"
	Name: "Fanta Grape Can Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 426
},
{
	Id: 5426
	AegisName: "Karada_Meguri_Tea_Hat"
	Name: "Karada Meguricha Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 427
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5427
	AegisName: "Royal_Milk_Tea_Hat"
	Name: "Black Tea Kochakaden Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 428
	Script: <" bonus bAgi,1; ">
},
{
	Id: 5428
	AegisName: "Bread_Bag1"
	Name: "RWC Anniversary Bread Envelope"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 429
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bSubRace,RC_DemiPlayer,12; ">
},
{
	Id: 5429
	AegisName: "Bogy_Cap"
	Name: "Bogy Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 430
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bHPrecovRate, 5;
		bonus bSPrecovRate, 5;
	">
},
{
	Id: 5430
	AegisName: "Sacred_Torch_Coronet"
	Name: "Torch Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 431
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSubEle,Ele_Fire,20;
		skill MG_FIREBOLT,5;
	">
},
{
	Id: 5431
	AegisName: "Chicken_Hat"
	Name: "Chicken Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 432
	Script: <"
		bonus3 bAutoSpell,MC_LOUD,1,30;
		bonus bAspdRate,5;
	">
},
{
	Id: 5432
	AegisName: "Brazil_Baseball_Cap"
	Name: "bRO 4th Anniversary Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 433
	Script: <"
		if (gettime(GETTIME_MONTH) == SEPTEMBER && gettime(GETTIME_DAYOFMONTH) >= 10 && gettime(GETTIME_DAYOFMONTH) <= 24)
			bonus bAllStats, 4;
	">
},
{
	Id: 5433
	AegisName: "Golden_Wreath"
	Name: "Golden Laurel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 434
},
/*
{
	Id: 5434
	AegisName: "Cola_Can"
	Name: "Cola Can"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 435
},
*/
{
	Id: 5435
	AegisName: "Coke_Hat"
	Name: "Red Minstrel Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 436
	Script: <"
		bonus bInt,1;
		bonus bMaxSP,80;
		bonus bMdef,3;
		if(getrefine()>5) {
			bonus bMdef,getrefine()-5;
			bonus bMaxSP,(getrefine()-5)*10;
		}

	">
},
{
	Id: 5436
	AegisName: "Brides_Corolla"
	Name: "Bride's Corolla"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 437
	Script: <"
		bonus bLuk,3;
		bonus bMdef,2;
	">
},
{
	Id: 5437
	AegisName: "Flower_Of_Fairy"
	Name: "Fairy Flower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 438
	Script: <"
		bonus bInt,1;
		bonus bMdef,1;
		bonus2 bSubRace,RC_Insect,5;
	">
},
{
	Id: 5438
	AegisName: "Fillet_Green"
	Name: "Cute Green Ribbon"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 439
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 5439
	AegisName: "Fillet_Red"
	Name: "Cute Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 440
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 5440
	AegisName: "Fillet_Blue"
	Name: "Cute Blue Ribbon"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 441
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 5441
	AegisName: "Fillet_White"
	Name: "Cute White Ribbon"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 442
	Script: <" bonus bMaxSP,20; ">
},
{
	Id: 5442
	AegisName: "Necktie"
	Name: "Necktie"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 443
	Script: <"
		bonus bVit,1;
		bonus bHit,-5;
		bonus bUseSPrate,5;
	">
},
{
	Id: 5443
	AegisName: "Status_Of_Baby_Angel"
	Name: "Statue Of Baby Angel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 444
	Script: <"
		bonus bMdef,2;
		bonus4 bAutoSpellWhenHit,PR_STRECOVERY,1,20,0;
	">
},
{
	Id: 5444
	AegisName: "Hair_Brush"
	Name: "Hair Brush"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 445
	Script: <" bonus bCritical,6; ">
},
{
	Id: 5445
	AegisName: "Candy_Cane_In_The_Mouth"
	Name: "Candy Cane In Mouth"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 446
	Script: <" bonus bMaxSP,5; ">
},
{
	Id: 5446
	AegisName: "Cat_Foot_Hairpin"
	Name: "Catfoot Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 447
	Script: <"
		bonus bFlee,5;
		bonus bFlee2,3;
	">
},
{
	Id: 5447
	AegisName: "Frog_Cap"
	Name: "Frog Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 448
	Script: <"
		bonus bMdef,1;
		bonus2 bAddRace,RC_Insect,12;
		bonus2 bMagicAddRace,RC_Insect,12;
	">
},
{
	Id: 5448
	AegisName: "Solo_Play_Box1"
	Name: "Soloplay Box1"
	Type: "IT_ARMOR"
	Weight: 300
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 449
},
{
	Id: 5449
	AegisName: "Solo_Play_Box2"
	Name: "Soloplay Box2"
	Type: "IT_ARMOR"
	Weight: 300
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 450
},
{
	Id: 5450
	AegisName: "Sun_Cap"
	Name: "Solar Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 451
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5451
	AegisName: "Dragonhelm_Gold"
	Name: "RWC 2008 Dragon Helm Gold"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 7
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 452
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAspdRate,10;
		bonus bAllStats,3;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5452
	AegisName: "Dragonhelm_Silver"
	Name: "RWC 2008 Dragon Helm Silver"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Def: 5
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 453
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAspdRate,7;
		bonus bAllStats,2;
		bonus2 bAddRace,RC_DemiPlayer,3;
	">
},
{
	Id: 5453
	AegisName: "Dragonhelm_Copper"
	Name: "RWC 2008 Dragon Helm Copper"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 454
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAspdRate,5;
		bonus bAllStats,2;
		bonus2 bAddRace,RC_DemiPlayer,1;
	">
},
{
	Id: 5454
	AegisName: "Dog_Cap_"
	Name: "Puppy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 234
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		autobonus "{ bonus bCritical,100; }",10,3000,BF_WEAPON,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
		autobonus "{ bonus bIgnoreMdefRate,100; }",10,3000,BF_MAGIC,"{ specialeffect(EF_MAGICALATTHIT, AREA, playerattached()); }";
	">
},
{
	Id: 5455
	AegisName: "Geographer_Band_"
	Name: "Decorative Geographer"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 238
	Script: <"
		bonus bInt,1;
		bonus3 bAutoSpell,AL_HEAL,5,50;
		bonus3 bAutoSpellWhenHit,AL_HEAL,5,30;
	">
},
{
	Id: 5456
	AegisName: "Vacation_Hat_"
	Name: "Summer Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 315
	Script: <"
		bonus bVit,5;
		bonus bHPrecovRate,20;
		bonus bSPrecovRate,15;
	">
},
{
	Id: 5457
	AegisName: "Spring_Rabbit_Hat"
	Name: "Moon Rabbit Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 455
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,3;
		bonus bBaseAtk,5;
		bonus bMatkRate,5;
		if(getrefine()>4) {
			bonus bBaseAtk,getrefine()-4;
			bonus bMatkRate,getrefine()-4;
		}

	">
},
{
	Id: 5458
	AegisName: "Pinwheel_Cap"
	Name: "Pinwheel Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 456
	Script: <"
		bonus bHPrecovRate, 5;
		bonus bHPrecovRate, 5;
	">
},
{
	Id: 5459
	AegisName: "Drooping_Bunny_Chusuk"
	Name: "Drooping Bunny"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 249
	Script: <"
		bonus bDex,1;
		bonus bFlee,2;
	">
},
{
	Id: 5460
	AegisName: "Adv_Dragon_Skull"
	Name: "Evolved Dragon Skull Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 7
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 457
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAllStats, 2;
		bonus bMaxHPrate, 3;
	">
},
{
	Id: 5461
	AegisName: "Adv_Whisper_Mask"
	Name: "Evolved Whisper Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 458
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,3;
		bonus2 bSubEle,Ele_Ghost, 20;
	">
},
{
	Id: 5462
	AegisName: "Spiked_Scarf"
	Name: "Spiked Scarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 90
	Refine: false
	ViewSprite: 459
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bVit,1;
		bonus2 bAddRace,RC_DemiPlayer,1;
		bonus2 bSubRace,RC_DemiPlayer,1;
	">
},
{
	Id: 5463
	AegisName: "Rainbow_Scarf"
	Name: "Rainbow Scarf"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 90
	Refine: false
	ViewSprite: 460
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
		bonus bMatkRate,1;
	">
},
{
	Id: 5464
	AegisName: "Zaha_Doll_Hat"
	Name: "Zaha Doll Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 461
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		skill PR_MAGNIFICAT, 3;
	">
},
/*
{
	Id: 5465
	AegisName: "Celestial_Hat"
	Name: "Hat Of Fortune"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 462
	Script: <"
		bonus bLuk,2;
		bonus bMdef,5;
		if(getrefine()>4) bonus bLuk,getrefine()-4;
	">
},
*/
/*
{
	Id: 5466
	AegisName: "Wind_Milestone"
	Name: "Wind Milestone"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 463
	Script: <"
		bonus bAgi,2;
		skill AL_TELEPORT,1;
	">
},
*/
/*
{
	Id: 5467
	AegisName: "Helm_Of_Dragoon"
	Name: "Helm Of Dragon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 2000
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 464
	Script: <"
		bonus2 bAddRace,RC_Dragon,20;
		bonus3 bAutoSpell,NPC_DRAGONFEAR,1,30;
	">
},
*/
/*
{
	Id: 5468
	AegisName: "Parade_Cap"
	Name: "Parade Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 465
	Script: <"
		bonus bDelayrate,-5;
		bonus bMdef,2;
		if(getrefine()>5) bonus bCastrate,-(getrefine()-5);
	">
},
*/
/*
{
	Id: 5469
	AegisName: "Noble_Hat"
	Name: "Musketeer Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 466
	Script: <"
		bonus bStr,2;
		bonus3 bAutoSpellWhenHit,BS_ADRENALINE,1,7;
	">
},
*/
/*
{
	Id: 5470
	AegisName: "Eyes_Of_Darkness"
	Name: "Eye Of Darkness"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 50
	Refine: false
	ViewSprite: 467
	Script: <"
		bonus bDex,1;
		bonus2 bResEff,Eff_Blind,10000;
	">
},
*/
{
	Id: 5471
	AegisName: "Hairband_Of_Reginleif"
	Name: "Hairband Of Reginleif"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 50
	Refine: false
	ViewSprite: 468
	Script: <"
		bonus2 bSubEle,Ele_Water,3;
		bonus2 bSubEle,Ele_Fire,3;
		bonus2 bSubEle,Ele_Undead,3;
		bonus2 bSubEle,Ele_Ghost,3;
	">
},
/*
{
	Id: 5472
	AegisName: "Red_White_Hat"
	Name: "Red Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 469
	Script: <" bonus3 bAddMonsterDropItem,550,RC_DemiPlayer,3; ">
},
*/
/*
{
	Id: 5473
	AegisName: "Forceps_Hairpin"
	Name: "Nipper Crab Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 470
	Script: <"
		bonus3 bAutoSpellWhenHit,MG_COLDBOLT,1,100;
		bonus3 bAddMonsterDropItem,991,RC_Fish,3;
	">
},
*/
/*
{
	Id: 5474
	AegisName: "Notice_Board"
	Name: "AFK Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 471
},
*/
/*
{
	Id: 5475
	AegisName: "Cube_Mask"
	Name: "Mask Cube"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 472
},
*/
{
	Id: 5476
	AegisName: "Hairband_Of_Grandpeco"
	Name: "Grand Peco Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 30
	ViewSprite: 473
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus bMaxHPrate,-10;
		bonus2 bAddRace2,RC2_Orc,15;
	">
},
{
	Id: 5477
	AegisName: "Bro_Flag"
	Name: "Brazilian Flag Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 474
	Script: <" skill SM_BASH, 1; ">
},
{
	Id: 5478
	AegisName: "Classic_Hat"
	Name: "Classic Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 475
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bMaxHP,300;
	">
},
{
	Id: 5479
	AegisName: "Shamans_Hair_Ornament"
	Name: "Shaman's Hair Decoration"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 476
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,3;
		bonus bMaxHP,50;
		bonus2 bSubEle,Ele_Neutral,5;
	">
},
{
	Id: 5480
	AegisName: "Bizofnil_Wing_Deco"
	Name: "Bijofnil Wings"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 477
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bAllStats,2;
		bonus3 bAutoSpell,PR_IMPOSITIO,3,3;
	">
},
{
	Id: 5481
	AegisName: "Hermose_Cap"
	Name: "Hermode Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 478
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bAspdRate,10;
		bonus bBaseAtk,-20;
		bonus bMatkRate,-10;
	">
},
{
	Id: 5482
	AegisName: "Dark_Knight_Mask"
	Name: "Dark Knight Mask"
	Type: "IT_ARMOR"
	Weight: 3000
	Def: 5
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 80
	ViewSprite: 479
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <" bonus bStr,3; ">
},
{
	Id: 5483
	AegisName: "Odin_Mask"
	Name: "Odin Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 480
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <"
		bonus bHit,-10;
		bonus2 bAddRace,RC_DemiPlayer,6;
	">
},
{
	Id: 5485
	AegisName: "Tiger_Face"
	Name: "Tiger Face"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 60
	ViewSprite: 483
	Script: <"
		bonus2 bSubRace,RC_Brute,5;
		bonus2 bAddRace,RC_Brute,5;
		bonus2 bMagicAddRace,RC_Brute,5;
	">
},
{
	Id: 5486
	AegisName: "J_Anniversary_Hat"
	Name: "Anniversary Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 395
	Script: <" bonus bAllStats, 2; ">
},
{
	Id: 5487
	AegisName: "J_Poringcake_Hat"
	Name: "Poring Cake Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 417
	Script: <" bonus bLuk,2; ">
},
{
	Id: 5488
	AegisName: "J_Twin_Santahat"
	Name: "Twin Santa Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 390
	Script: <"
		bonus bLuk,1;
		bonus bMdef,1;
	">
},
{
	Id: 5489
	AegisName: "Love_Daddy"
	Name: "Love Daddy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 484
	Script: <" bonus bDex,2; ">
},
{
	Id: 5490
	AegisName: "Anubis_Helm"
	Name: "Anubis Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	Refine: false
	ViewSprite: 485
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,5;
		bonus2 bSubRace,RC_Boss,10;
		bonus bHealPower2,10;
		bonus bAddItemHealRate,10;
	">
},
{
	Id: 5491
	AegisName: "Hat_Of_Outlaw"
	Name: "Bandit Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 486
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus2 bSubEle,Ele_Fire, 10;
	">
},
{
	Id: 5492
	AegisName: "Boys_Cap_I"
	Name: "Student Cap"
	Type: "IT_ARMOR"
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 102
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMdef,3;
		bonus2 bAddRace,RC_DemiPlayer,5;
	">
},
{
	Id: 5493
	AegisName: "Ulle_Cap_I"
	Name: "Ulle's Cap"
	Type: "IT_ARMOR"
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 254
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,2;
		bonus bAgi,1;
	">
},
{
	Id: 5494
	AegisName: "Spinx_Helm_I"
	Name: "Sphinx Hat"
	Type: "IT_ARMOR"
	Def: 5
	Job: {
		Swordsman: true
		Knight: true
		Crusader: true
	}
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP"]
	Refine: false
	ViewSprite: 137
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bStr,5; ">
},
{
	Id: 5495
	AegisName: "Power_Of_Thor"
	Name: "Power Of Thor"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 75
	ViewSprite: 493
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bMdef,3;
		bonus bFlee,5;
	">
},
{
	Id: 5496
	AegisName: "Dice_Hat"
	Name: "Dice Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	Refine: false
	ViewSprite: 494
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLuk,4; ">
},
{
	Id: 5497
	AegisName: "King_Tiger_Doll_Hat"
	Name: "King Tiger Doll Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 495
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bStr,2; ">
},
{
	Id: 5498
	AegisName: "Wondering_Wolf_Helm"
	Name: "Wandering Wolf Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 490
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bVit,5;
		bonus bFlee,10;
	">
},
{
	Id: 5499
	AegisName: "Pizza_Hat"
	Name: "Pizza Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 487
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" skill SM_PROVOKE, 1; ">
},
{
	Id: 5500
	AegisName: "Icecream_Hat"
	Name: "Icecream Hat"
	Type: "IT_ARMOR"
	Weight: 300
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 488
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,3;
		skill MG_FROSTDIVER, 3;
	">
},
{
	Id: 5501
	AegisName: "Pirates_Pride"
	Name: "Pirate's Pride"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 496
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus2 bAddRace2,RC2_Ninja,5;
		bonus2 bSubRace2,RC2_Ninja,5;
	">
},
{
	Id: 5502
	AegisName: "Necromencers_Hood"
	Name: "Necromancer's Hood"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 491
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus5 bAutoSpellWhenHit,NPC_DARKSTRIKE,5,5,BF_WEAPON|BF_MAGIC,1; ">
},
{
	Id: 5503
	AegisName: "Rabbit_Magic_Hat"
	Name: "Magic Rabit Hat"
	Type: "IT_ARMOR"
	Weight: 800
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 497
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,2;
		bonus bAgi,2;
		bonus bMdef,1;
		bonus bMaxSP,50;
		bonus3 bAutoSpellWhenHit,MG_FIREBOLT,1,20;
		bonus3 bAutoSpellWhenHit,MG_COLDBOLT,1,20;
		bonus3 bAutoSpellWhenHit,MG_LIGHTNINGBOLT,1,20;
	">
},
{
	Id: 5504
	AegisName: "China_Wedding_Veil"
	Name: "Wedding Weil"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 70
	ViewSprite: 489
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bMdef,10; ">
},
{
	Id: 5505
	AegisName: "Asara_Fairy_Hat"
	Name: "Asara Fairy Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 492
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		skill DC_DONTFORGETME,1;
		bonus bDex,2;
		bonus bLuk,2;
	">
},
{
	Id: 5506
	AegisName: "Blue_Pajamas_Hat"
	Name: "Blue Night Cap"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 501
	Script: <"
		bonus bBaseAtk,5;
		bonus bMatkRate,5;
	">
},
{
	Id: 5507
	AegisName: "Pink_Pajamas_Hat"
	Name: "Pink Night Cap"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 502
	Script: <"
		bonus bBaseAtk,5;
		bonus bMatkRate,5;
	">
},
{
	Id: 5508
	AegisName: "Shark_Hat"
	Name: "Shark Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 503
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bAgi,2;
		bonus bMdef,1;
		bonus2 bAddEle,Ele_Water,5;
		bonus2 bSubEle,Ele_Water,10;
	">
},
{
	Id: 5509
	AegisName: "Sting_Hat"
	Name: "Sting hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 5
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 504
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus bVit,1;
		bonus bMdef,3;
		bonus2 bAddEle,Ele_Fire,5;
		bonus2 bSubEle,Ele_Earth,5;
		bonus3 bAutoSpell,WZ_EARTHSPIKE,1,10;
	">
},
{
	Id: 5510
	AegisName: "Shower_Cap"
	Name: "Shower Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 507
	Script: <"
		bonus bMdef,3;
		bonus bFlee,3;
		bonus2 bAddEle,Ele_Water,10;
		bonus2 bSubRace,RC_Fish,10;
	">
},
{
	Id: 5511
	AegisName: "Samambaia"
	Name: "Samambaia"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 5
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 30
	ViewSprite: 508
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bSPrecovRate,8; ">
},
{
	Id: 5512
	AegisName: "Aquarius_Diadem"
	Name: "Aquarius Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 509
	Script: <"
		bonus bStr,2;
		bonus bFlee,10;
		bonus2 bSubEle,Ele_Wind, 5;
		if(getrefine()>6) {
			bonus bDef, 1;
			bonus bBaseAtk,15;
		}

	">
},
{
	Id: 5513
	AegisName: "Aquarius_Crown"
	Name: "Aquarius Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 510
	Script: <"
		bonus bStr,2;
		bonus bFlee,10;
		bonus2 bSubEle,Ele_Wind, 5;
		if(getrefine()>6) {
			bonus bDef, 1;
			bonus bBaseAtk,15;
		}

	">
},
{
	Id: 5514
	AegisName: "Pisces_Diadem"
	Name: "Pisces Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 511
	Script: <"
		bonus bInt,2;
		bonus bMdef,5;
		bonus2 bSubEle,Ele_Water, 5;
		if(getrefine()>6) {
			bonus bDef, 1;
			bonus bMatkRate,2;
		}

	">
},
{
	Id: 5515
	AegisName: "Pisces_Crown"
	Name: "Pisces Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 512
	Script: <"
		bonus bInt,2;
		bonus bMdef,5;
		bonus2 bSubEle,Ele_Water, 5;
		if(getrefine()>6) {
			bonus bDef, 1;
			bonus bMatkRate,2;
		}

	">
},
{
	Id: 5516
	AegisName: "Hawk_Eyes01"
	Name: "hawk Eyes"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: "EQP_HEAD_MID"
	EquipLv: 60
	Refine: false
	ViewSprite: 23
	Script: <" bonus bDex,1; ">
},
{
	Id: 5517
	AegisName: "Hawk_Eyes02"
	Name: "Hawk Eyes"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Job: {
		Archer: true
		Hunter: true
		Bard: true
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 60
	Refine: false
	ViewSprite: 23
	Script: <" bonus bDex,1; ">
},
{
	Id: 5518
	AegisName: "L_Magestic_Goat2"
	Name: "Gigantic Majestic Goat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 513
	Script: <"
		bonus2 bSubRace,RC_DemiPlayer,12;
		bonus bBaseAtk,(JobLevel*2)/7;
	">
},
{
	Id: 5519
	AegisName: "Peacock_Feather"
	Name: "Peacock Feather"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 514
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bInt,2; ">
},
{
	Id: 5520
	AegisName: "Rabbit_Earplug"
	Name: "Rabbit Earplugs"
	Type: "IT_ARMOR"
	Weight: 400
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 515
	Script: <"
		bonus2 bAddRace, RC_All, 4;
		bonus bMatkRate,4;
	">
},
{
	Id: 5521
	AegisName: "Angry_Mouth_C"
	Name: "Angry Mouth"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 194
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bDelayrate,-3; ">
},
{
	Id: 5522
	AegisName: "Fanta_Zero_Lemon_Hat"
	Name: "Fanta Zero Lemon Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 516
},
{
	Id: 5523
	AegisName: "Sakura_Mist_Hat"
	Name: "Sakura Mist Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 517
	Script: <" bonus bDex,1; ">
},
{
	Id: 5524
	AegisName: "Sakura_Milk_Tea_Hat"
	Name: "Sakura Milk Tea Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 518
	Script: <" bonus bVit,1; ">
},
{
	Id: 5525
	AegisName: "First_Leaf_Tea_Hat"
	Name: "Flower Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 519
	Script: <"
		bonus bMaxHP,80;
		bonus bMaxSP,20;
	">
},
{
	Id: 5526
	AegisName: "Lady_Tanee_Doll"
	Name: "Tanigumi Girl Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 520
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,2;
		bonus bFlee,3;
		bonus2 bSubEle,Ele_Wind, 5;
		bonus2 bAddMonsterDropItem, 513, 200;
	">
},
{
	Id: 5527
	AegisName: "Lunatic_Hat"
	Name: "Lunatic Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 521
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bLuk,5;
		bonus bMdef,2;
		bonus bFlee2,5;
		bonus2 bAddMonsterDropItem,622,50;
	">
},
{
	Id: 5528
	AegisName: "King_Frog_Hat"
	Name: "Frog King Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 522
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAgi,1; ">
},
{
	Id: 5529
	AegisName: "Evils_Bone_Hat"
	Name: "Satanic Bone Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 6
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 70
	ViewSprite: 523
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bDex,3;
		bonus2 bSubEle,Ele_Neutral,5;
		skill WZ_FROSTNOVA,1;
	">
},
{
	Id: 5530
	AegisName: "Raven_Cap"
	Name: "Raven Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 524
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
/*
{
	Id: 5531
	AegisName: "B_Dragon_Hat"
	Name: "Baby Dragon Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 525
},
*/
{
	Id: 5532
	AegisName: "Pirate_Dagger_J"
	Name: "Pirate Dagger"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	ViewSprite: 327
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bShortWeaponDamageReturn,1; ">
},
{
	Id: 5533
	AegisName: "Emperor_Wreath_J"
	Name: "Emperor Wreath"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 80
	ViewSprite: 261
	Script: <" bonus bAllStats,1; ">
},
/*
{
	Id: 5534
	AegisName: "Fox_Hat_J"
	Name: "Fox Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 70
	Refine: false
	ViewSprite: 403
	Script: <"
		bonus bAgi,1;
		bonus bFlee2,2;
	">
},
*/
{
	Id: 5535
	AegisName: "Side_Cap"
	Name: "Side Cap"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 529
	Script: <"
		bonus bVit,1;
		bonus bDex,1;
		bonus bMdef,3;
		bonus2 bSubRace,RC_DemiPlayer,5;
		bonus2 bAddRace,RC_DemiPlayer,3;
	">
},
{
	Id: 5536
	AegisName: "Spare_Card"
	Name: "Spare Card"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 526
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddMonsterDropItem,6187,1000; ">
},
{
	Id: 5537
	AegisName: "Quati_Hat"
	Name: "Kwati Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 45
	Refine: false
	ViewSprite: 527
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bAgi,3; ">
},
{
	Id: 5538
	AegisName: "Tucan_Hat"
	Name: "Tucan Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 45
	Refine: false
	ViewSprite: 528
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bDex,3; ">
},
{
	Id: 5539
	AegisName: "Jaguar_Hat"
	Name: "Jaguar Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 4
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 25
	ViewSprite: 530
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bMdef,2;
		skill MC_LOUD, 1;
	">
},
{
	Id: 5540
	AegisName: "Freyja_SCirclet7"
	Name: "Freyja SCirclet7"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 8
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 18
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5541
	AegisName: "Freyja_SCirclet30"
	Name: "Freyja SCirclet30"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 8
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 18
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5542
	AegisName: "Freyja_SCirclet60"
	Name: "Freyja SCirclet60"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 8
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 18
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5543
	AegisName: "Freyja_SCirclet90"
	Name: "Freyja SCirclet90"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 700
	Def: 8
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 18
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,1;
	">
},
{
	Id: 5544
	AegisName: "Time_Keeper_Hat"
	Name: "Time Keeper Hat"
	Type: "IT_ARMOR"
	Buy: 30000
	Def: 6
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 240
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bMaxSP,50;
	">
},
{
	Id: 5545
	AegisName: "Aries_Diadem"
	Name: "Aries Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 531
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bVit,2;
		bonus2 bSubEle,Ele_Fire,5;
		if(getrefine()>6) {
			bonus bDef,1;
			bonus bVit,1;
		}

	">
},
{
	Id: 5546
	AegisName: "Aries_Crown"
	Name: "Aries Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 532
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bVit,2;
		bonus2 bSubEle,Ele_Fire,5;
		if(getrefine()>6) {
			bonus bDef,1;
			bonus bVit,1;
		}

	">
},
{
	Id: 5547
	AegisName: "RJC_Katusa"
	Name: "RJC Katusa Flower"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 533
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSkillAtk, WZ_HEAVENDRIVE, 15 + getequiprefinerycnt(EQI_HAND_R);
		bonus2 bSkillAtk, WZ_EARTHSPIKE, 15 + getequiprefinerycnt(EQI_HAND_R);
		bonus2 bCastrate, WZ_HEAVENDRIVE, -25;
		bonus2 bCastrate, WZ_EARTHSPIKE, -25;
		;
	">
},
{
	Id: 5548
	AegisName: "Scarlet_Rose"
	Name: "Scarlet Rose"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	EquipLv: 50
	ViewSprite: 534
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bLuk,1; ">
},
{
	Id: 5549
	AegisName: "Taurus_Diadem"
	Name: "Taurus Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 535
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,2;
		bonus bDelayrate,-2;
		bonus2 bSubEle,Ele_Earth,5;
		if(getrefine()>6) {
			bonus bDex,1;
			bonus bMatkRate,1;
		}

	">
},
{
	Id: 5550
	AegisName: "Taurus_Crown"
	Name: "Taurus Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 536
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bDex,2;
		bonus bDelayrate,-2;
		bonus2 bSubEle,Ele_Earth,5;
		if(getrefine()>6) {
			bonus bDex,1;
			bonus bMatkRate,1;
		}

	">
},
/*
{
	Id: 5551
	AegisName: "Holy_Egg_Hat"
	Name: "Holy Egg Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 537
},
*/
{
	Id: 5552
	AegisName: "Fest_Lord_Circlet"
	Name: "Festival Grand Circlet"
	Type: "IT_ARMOR"
	Def: 8
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 93
	Script: <"
		bonus bStr,3;
		bonus bInt,3;
		bonus bMdef,3;
	">
},
{
	Id: 5553
	AegisName: "Fest_Bunny_Band"
	Name: "Festival Bunny Band"
	Type: "IT_ARMOR"
	Def: 7
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 15
	Script: <"
		bonus bMdef,4;
		bonus2 bSubRace,RC_DemiPlayer,9;
	">
},
{
	Id: 5554
	AegisName: "Octopus_Hat"
	Name: "Octopus Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 538
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus3 bAutoSpell,SM_PROVOKE,5,10;
		bonus bUnbreakableHelm,0;
	">
},
{
	Id: 5555
	AegisName: "Leaf_Cat_Hat"
	Name: "Leaf Cat Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 539
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,1;
		bonus3 bAutoSpellWhenHit,AL_HEAL,3,10;
	">
},
{
	Id: 5556
	AegisName: "Fur_Seal_Hat"
	Name: "Seal Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 55
	ViewSprite: 540
	Script: <"
		bonus bInt,1;
		bonus3 bAutoSpell,WZ_FROSTNOVA,1,30;
	">
},
{
	Id: 5557
	AegisName: "Wild_Rose_Hat"
	Name: "Wild Rose Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 6
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	ViewSprite: 541
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bAgi,3; ">
},
{
	Id: 5558
	AegisName: "Saci_Hat"
	Name: "Luxury Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 542
	Script: <" bonus3 bAddMonsterDropItem,510,RC_Plant,500; ">
},
{
	Id: 5559
	AegisName: "Piece_Of_White_Cloth_E"
	Name: "Piece Of White Cloth"
	Type: "IT_ARMOR"
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 543
},
{
	Id: 5560
	AegisName: "Bullock_Helm_J"
	Name: "Bullock Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 75
	ViewSprite: 322
	Script: <"
		bonus bMaxHP,100;
		bonus bNoKnockback,0;
		bonus2 bSubEle,Ele_Neutral,-20;
		bonus2 bSubEle,Ele_Fire,-20;
		bonus2 bSubEle,Ele_Water,-20;
		bonus2 bSubEle,Ele_Wind,-20;
		bonus2 bSubEle,Ele_Earth,-20;
		bonus2 bSubEle,Ele_Dark,-20;
		bonus2 bSubEle,Ele_Holy,-20;
		bonus2 bSubEle,Ele_Ghost,-20;
	">
},
{
	Id: 5561
	AegisName: "Rabbit_Magic_Hat_J"
	Name: "Magic Rabbit Hat"
	Type: "IT_ARMOR"
	Weight: 800
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 497
	Script: <"
		bonus bInt,1;
		bonus bMaxSP,50;
		bonus4 bAutoSpellWhenHit,MG_FIREBOLT,3,10,3;
		bonus4 bAutoSpellWhenHit,MG_COLDBOLT,3,10,3;
		bonus4 bAutoSpellWhenHit,MG_LIGHTNINGBOLT,3,10,3;
		bonus3 bAutoSpellWhenHit,AL_HEAL,1,10;
	">
},
{
	Id: 5562
	AegisName: "Good_Wedding_Veil_J"
	Name: "Luxurious Wedding Veil"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 45
	Refine: false
	ViewSprite: 489
	Script: <"
		bonus bMdef,10;
		bonus bCastrate,-3;
		bonus bUseSPrate,-5;
	">
},
/*
{
	Id: 5563
	AegisName: "Dolor_Hat"
	Name: "Dolor Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 547
},
*/
{
	Id: 5564
	AegisName: "Crown_Of_Deceit"
	Name: "Crown of Deceit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 85
	ViewSprite: 544
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,4;
		bonus bCastrate,-10;
	">
},
{
	Id: 5565
	AegisName: "Dragon_Arhat_Mask"
	Name: "Dragon Arhat Mask"
	Type: "IT_ARMOR"
	Def: 5
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 1
	Refine: false
	ViewSprite: 545
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace,RC_DemiPlayer,10; ">
},
{
	Id: 5566
	AegisName: "Tiger_Arhat_Mask"
	Name: "Tiger Arhat Mask"
	Type: "IT_ARMOR"
	Def: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 1
	Refine: false
	ViewSprite: 546
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bAddRace,RC_DemiPlayer,2; ">
},
{
	Id: 5567
	AegisName: "Bright_Fury"
	Name: "Bright Fury"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 548
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus2 bAddRace, RC_All, 2;
		bonus bAspdRate,2;
	">
},
{
	Id: 5568
	AegisName: "Rabbit_Bonnet"
	Name: "Rabbit Bonnet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 549
	Script: <" bonus bInt,2; ">
},
{
	Id: 5569
	AegisName: "Gemini_Diadem"
	Name: "Gemini Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 550
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,2;
		bonus bMatkRate,2;
		if(getrefine()>6) {
			bonus bMdef,7;
			bonus bMatkRate,8;
			bonus2 bSubEle,Ele_Wind,5;
		}

	">
},
{
	Id: 5570
	AegisName: "Gemini_Crown"
	Name: "Gemini Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 551
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bAgi,2;
		bonus bBaseAtk,2;
		bonus bMdef,5;
		if(getrefine()>6) {
			bonus bDef,1;
			bonus bMatk,15;
			bonus bFlee,10;
			bonus2 bSubEle,Ele_Wind,5;
		}

	">
},
/*
{
	Id: 5571
	AegisName: "Rasta_Wig"
	Name: "Rasta_Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 552
	Script: <" bonus bStr,1; ">
},
*/
{
	Id: 5572
	AegisName: "Savage_Baby_Hat"
	Name: "Savage Babe Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 553
	Script: <" bonus bVit,2; ">
},
{
	Id: 5573
	AegisName: "Bogy_Horn"
	Name: "Dokebi Horn"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 554
},
{
	Id: 5574
	AegisName: "Pencil_In_Mouth"
	Name: "Well-Chewed Pencil"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	EquipLv: 10
	Refine: false
	ViewSprite: 555
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bUnbreakableHelm, 0;
		bonus bHitRate, 3;
	">
},
{
	Id: 5575
	AegisName: "Onigiri_Hat"
	Name: "Rice Ball Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 556
},
/*
{
	Id: 5576
	AegisName: "Japan_Winecup"
	Name: "Wine Cup"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 557
},
*/
{
	Id: 5577
	AegisName: "Dark_Knight_MaskB"
	Name: "Dark Knight Mask"
	Type: "IT_ARMOR"
	Weight: 3000
	Def: 5
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 80
	ViewSprite: 479
	Trade: {
		nodrop: true
		nogstorage: true
	}
	Script: <" bonus bStr,3; ">
},
{
	Id: 5578
	AegisName: "Voyage_Hat"
	Name: "Voyage_Hat"
	Type: "IT_ARMOR"
	Buy: 200
	Weight: 10
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 236
	Script: <" bonus bAgi,2; ">
},
{
	Id: 5579
	AegisName: "Wanderers_Sakkat"
	Name: "Wanderer's Sakkat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 70
	ViewSprite: 558
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" bonus bAgi,2; ">
},
/*
{
	Id: 5580
	AegisName: "Red_Beret"
	Name: "Red Beret"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 559
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,3;
	">
},
*/
{
	Id: 5581
	AegisName: "Cancer_Diadem"
	Name: "Cancer Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 560
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bInt,2;
		bonus2 bSubEle,Ele_Water, 5;
		if(getrefine()>6) {
			bonus bMdef,1;
			bonus bHealPower, 3;
			bonus bMatkRate,2;
		}

	">
},
{
	Id: 5582
	AegisName: "Cancer_Crown"
	Name: "Cancer Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 561
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus2 bSubEle,Ele_Water, 5;
		if(getrefine()>6) {
			bonus bDef, 1;
			bonus bBaseAtk,15;
			bonus bFlee,10;
		}

	">
},
{
	Id: 5583
	AegisName: "Para_Team_Hat"
	Name: "Eden Team Hat"
	Type: "IT_ARMOR"
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 12
	ViewSprite: 465
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5584
	AegisName: "Majestic_Evil_Horn"
	Name: "Majestic Evil Horns"
	Type: "IT_ARMOR"
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 562
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus2 bSubRace,RC_Demon,3;
		bonus2 bHPDrainRate,3,15;
		bonus2 bSPDrainRate,1,7;
	">
},
{
	Id: 5585
	AegisName: "Rune_Hairband"
	Name: "Rune Cloth Circlet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 564
},
{
	Id: 5586
	AegisName: "Mosquito_Coil"
	Name: "Mosquito Coil"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 563
},
{
	Id: 5587
	AegisName: "Mosquito_Coil_1Use"
	Name: "Mosquito Coil"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 563
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
/*
{
	Id: 5588
	AegisName: "Leo_Crown"
	Name: "Leo Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 565
	Script: <"
		bonus bStr,2;
		bonus2 bSubEle,Ele_Fire,5;
		if(getrefine()>6) {
			bonus bDef,1;
			bonus bFlee,10;
			bonus3 bAutoSpell,TK_SEVENWIND,4,50;
		}

	">
},
*/
/*
{
	Id: 5589
	AegisName: "Leo_Diadem"
	Name: "Leo Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 566
	Script: <"
		bonus bDex,2;
		bonus2 bSubEle,Ele_Fire,5;
		if(getrefine()>6) {
			bonus bFlee,10;
			bonus bAspdRate,3;
			autobonus "{ bonus bSplashRange,1; }",10,10000,BF_WEAPON,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
		}

	">
},
*/
{
	Id: 5590
	AegisName: "K_Poring_Cake_Cap"
	Name: "Poring Cake Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 417
},
/*
{
	Id: 5591
	AegisName: "Desert_Prince"
	Name: "Desert Prince"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 567
},
*/
{
	Id: 5592
	AegisName: "Sigruns_Wing"
	Name: "Sigrun's Wings"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_MID"
	EquipLv: 80
	Refine: false
	ViewSprite: 568
	Script: <"
		if(BaseClass==Job_Swordman||BaseClass==Job_Merchant||BaseClass==Job_Thief||(BaseJob==Job_Taekwon&&Class!=Job_Soul_Linker)) bonus bStr,1;
		else if(BaseClass==Job_Mage||BaseClass==Job_Acolyte||Class==Job_Ninja||Class==Job_Soul_Linker) bonus bInt,1;
		else if(BaseClass==Job_Archer||BaseClass==Job_Gunslinger) bonus bDex,1;
		else if(BaseJob==Job_Novice||BaseJob==Job_SuperNovice) {
			bonus bMaxHP,80;
			bonus bMaxSP,30;
		}

	">
},
{
	Id: 5593
	AegisName: "K_Rabbit_Bonnet"
	Name: "Rabbit Bonnet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 1
	ViewSprite: 549
},
{
	Id: 5594
	AegisName: "Donut_In_Mouth"
	Name: "Donut In Mouth"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 569
},
/*
{
	Id: 5595
	AegisName: "Eye_Of_Juno"
	Name: "Eye Of Juno"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 570
	Script: <" bonus bMdef,2; ">
},
*/
{
	Id: 5596
	AegisName: "4Leaf_Clover_In_Mouth"
	Name: "4Leaf Clover In Mouth"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 2
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 571
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,2; ">
},
{
	Id: 5597
	AegisName: "Bubble_Gum_In_Mouth"
	Name: "Bubble Gum In Mouth"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 2
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 572
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,2; ">
},
/*
{
	Id: 5598
	AegisName: "Virgo_Crown"
	Name: "Virgo Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 573
	Script: <"
		bonus bDex,2;
		bonus bAspdRate,1;
		if(getrefine()>6) {
			bonus2 bSubEle,Ele_Earth,5;
			autobonus "{ bonus bDex,20; }",10,6000,BF_WEAPON,"{ specialeffect(EF_ENHANCE, AREA, playerattached()); }";
		}

	">
},
*/
/*
{
	Id: 5599
	AegisName: "Virgo_Diadem"
	Name: "Virgo Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 574
	Script: <"
		bonus bAspdRate,3;
		bonus2 bSubEle,Ele_Earth,5;
		if(getrefine()>6) bonus3 bAutoSpell,MO_BALKYOUNG,1,50;
	">
},
*/
{
	Id: 5600
	AegisName: "Br_Twin_Ribbon"
	Name: "Brazil Twin Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 575
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,1;
	">
},
/*
{
	Id: 5601
	AegisName: "Br_Beret"
	Name: "Brazil Beret"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 576
	Script: <"
		bonus bAllStats,3;
		bonus bMdef,1;
	">
},
*/
/*
{
	Id: 5602
	AegisName: "Jaguar_Hat_J"
	Name: "Jaguar Hat J"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Slots: 1
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 530
},
*/
{
	Id: 5603
	AegisName: "RTC_Winner_Only"
	Name: "RTC First Place"
	Type: "IT_ARMOR"
	Weight: 250
	Def: 8
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 577
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats, 3; ">
},
{
	Id: 5604
	AegisName: "RTC_Second_Best"
	Name: "RTC Second Place"
	Type: "IT_ARMOR"
	Weight: 250
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 578
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats, 2; ">
},
{
	Id: 5605
	AegisName: "RTC_Third_Best"
	Name: "RTC Third Place"
	Type: "IT_ARMOR"
	Weight: 250
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 579
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats, 1; ">
},
/*
{
	Id: 5606
	AegisName: "Campume_Hat"
	Name: "Champune Hat"
	Type: "IT_ARMOR"
	Buy: 500
	Weight: 1200
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 3
	ViewSprite: 580
	Script: <" bonus bAllStats,1; ">
},
*/
/*
{
	Id: 5607
	AegisName: "Lyria_Doll_Hat"
	Name: "Lyria Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 581
},
*/
/*
{
	Id: 5608
	AegisName: "Dorothy_Doll_Hat"
	Name: "Dorothy Doll Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 582
},
*/
/*
{
	Id: 5609
	AegisName: "Chung_Hairband"
	Name: "Chung Hairband"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 5
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	Refine: false
	ViewSprite: 583
	Script: <"
		bonus bLuk,3;
		bonus bMdef,4;
	">
},
*/
/*
{
	Id: 5610
	AegisName: "Ice_Wing_Ear"
	Name: "Ice Wing Ear"
	Type: "IT_ARMOR"
	Weight: 100
	Loc: "EQP_HEAD_MID"
	EquipLv: 10
	Refine: false
	ViewSprite: 584
	Script: <" bonus bLuk,1; ">
},
*/
{
	Id: 5611
	AegisName: "Turtle_Hat"
	Name: "Turtle_Hat"
	Type: "IT_ARMOR"
	Weight: 300
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 585
	Script: <" bonus bAgi,1; ">
},
/*
{
	Id: 5612
	AegisName: "F_Blue_Drooping_Kitty"
	Name: "F Blue Drooping Kitty"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 277
	Script: <" bonus bMdef,15; ">
},
*/
/*
{
	Id: 5613
	AegisName: "F_Flying_Angel"
	Name: "F Flying Angel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 264
	Script: <"
		bonus bInt,1;
		bonus bAgi,1;
	">
},
*/
/*
{
	Id: 5614
	AegisName: "F_Smoking_Pipe_"
	Name: "F Smoking Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 55
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5615
	AegisName: "F_Pair_Of_Red_Ribbon_"
	Name: "F Pair Of Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 45
	Refine: false
	ViewSprite: 169
},
*/
/*
{
	Id: 5616
	AegisName: "F_Fish_On_Head_"
	Name: "F Fish On Head"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 149
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
	">
},
*/
/*
{
	Id: 5617
	AegisName: "F_Hibiscus"
	Name: "F Hibiscus"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 210
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 5618
	AegisName: "F_Cat_Hat"
	Name: "F Cat Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 182
	Script: <"
		bonus bLuk,2;
		bonus bMdef,10;
	">
},
*/
/*
{
	Id: 5619
	AegisName: "F_Bunny_Band_"
	Name: "F Bunny Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 15
	Script: <" bonus bInt,2; ">
},
*/
/*
{
	Id: 5620
	AegisName: "F_Magestic_Goat_TW"
	Name: "F Magestic Goat TW"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 41
	Script: <" bonus bStr,2; ">
},
*/
/*
{
	Id: 5621
	AegisName: "F_Sheep_Hat"
	Name: "F Sheep Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 205
},
*/
/*
{
	Id: 5622
	AegisName: "F_Mini_Propeller_"
	Name: "F Mini Propeller"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 270
	Script: <"
		bonus bDex,1;
		bonus bAgi,2;
	">
},
*/
/*
{
	Id: 5623
	AegisName: "F_Alice_Doll"
	Name: "F Alice Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 208
	Script: <" bonus bStr,1; ">
},
*/
/*
{
	Id: 5624
	AegisName: "F_Red_Glasses"
	Name: "F Red Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 316
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5625
	AegisName: "F_Chick_Hat"
	Name: "F Chick Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 311
	Script: <" bonus bLuk,2; ">
},
*/
/*
{
	Id: 5626
	AegisName: "F_White_Deviruchi_Cap"
	Name: "F White Deviruchi Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 272
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
*/
/*
{
	Id: 5627
	AegisName: "F_Vane_Hairpin"
	Name: "F Vane Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 313
	Script: <" bonus bAgi,2; ">
},
*/
/*
{
	Id: 5628
	AegisName: "F_Pecopeco_Hairband"
	Name: "F Pecopeco Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 314
},
*/
/*
{
	Id: 5629
	AegisName: "F_Vacation_Hat"
	Name: "F Vacation Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 315
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5630
	AegisName: "F_Charming_Ribbon"
	Name: "F Charming Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 211
},
*/
/*
{
	Id: 5631
	AegisName: "F_Water_Lily_Crown"
	Name: "F Water Lily Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 312
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
		bonus bMdef,3;
	">
},
*/
/*
{
	Id: 5632
	AegisName: "F_Vanilmirth_Hat"
	Name: "F Vanilmirth Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 317
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5633
	AegisName: "F_Drooping_Bunny_"
	Name: "F Drooping Bunny"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 249
	Script: <" bonus bDex,1; ">
},
*/
/*
{
	Id: 5634
	AegisName: "F_Kettle_Hat"
	Name: "F Kettle Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 318
},
*/
/*
{
	Id: 5635
	AegisName: "F_Dragon_Skull"
	Name: "F Dragon Skull"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 319
},
*/
/*
{
	Id: 5636
	AegisName: "F_Ramen_Hat"
	Name: "F Ramen Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 320
	Script: <" bonus bDex,4; ">
},
*/
/*
{
	Id: 5637
	AegisName: "F_Pink_Fur_Hat"
	Name: "F Pink Fur Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 281
	Script: <" bonus bLuk,1; ">
},
*/
/*
{
	Id: 5638
	AegisName: "F_Puppy_Hat"
	Name: "F Puppy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 234
	Script: <" bonus bAgi,1; ">
},
*/
/*
{
	Id: 5639
	AegisName: "F_Magic_Eyes"
	Name: "F Magic Eyes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 209
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5640
	AegisName: "F_Jumping_Poring"
	Name: "F Jumping Poring"
	Type: "IT_ARMOR"
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 349
	Script: <" bonus bLuk,1; ">
},
*/
/*
{
	Id: 5641
	AegisName: "F_Robo_Eye"
	Name: "F Robo Eye"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 10
	Refine: false
	ViewSprite: 345
	Script: <" bonus bDex,1; ">
},
*/
/*
{
	Id: 5642
	AegisName: "F_Yellow_Wizardry_Hat"
	Name: "F Yellow Wizardry Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 286
	Script: <" bonus bInt,2; ">
},
*/
/*
{
	Id: 5643
	AegisName: "F_Crescent_Helm"
	Name: "F Crescent Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 8
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 213
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5644
	AegisName: "F_Tiger_Mask"
	Name: "F Tiger Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 181
	Script: <" bonus bStr,3; ">
},
*/
/*
{
	Id: 5645
	AegisName: "F_Fantastic_Wig"
	Name: "F Fantastic Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 308
},
*/
/*
{
	Id: 5646
	AegisName: "F_Whisper_Mask"
	Name: "F Whisper Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 321
	Script: <" bonus bAgi,3; ">
},
*/
/*
{
	Id: 5647
	AegisName: "F_Bunny_Band_C"
	Name: "F Bunny Band C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 9
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 15
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5648
	AegisName: "F_Centimental_Flower_C"
	Name: "F Centimental Flower C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 56
},
*/
/*
{
	Id: 5649
	AegisName: "F_Apple_Of_Archer_C"
	Name: "F Apple Of Archer C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 7
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 72
	Script: <" bonus bDex,4; ">
},
*/
/*
{
	Id: 5650
	AegisName: "F_Elven_Ears_C"
	Name: "F Elven Ears C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 73
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5651
	AegisName: "F_Brooch_C"
	Name: "F Brooch C"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" bonus bAgi,4; ">
},
*/
/*
{
	Id: 5652
	AegisName: "F_Magestic_Goat_C"
	Name: "F Magestic Goat C"
	Type: "IT_ARMOR"
	Buy: 2
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 41
	Script: <" bonus bStr,1; ">
},
*/
{
	Id: 5653
	AegisName: "Darkness_Helm_J"
	Name: "Darkness Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	ViewSprite: 586
},
{
	Id: 5654
	AegisName: "Holy_Marching_Hat_J"
	Name: "Holy Marching Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 587
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,2;
		bonus3 bAutoSpell,PR_ASPERSIO,2,30;
	">
},
/*
{
	Id: 5655
	AegisName: "Dark_Snake_Lord_Hat_J"
	Name: "Evil Snake Lord Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 372
	Script: <"
		bonus bInt,2;
		bonus bAgi,2;
		bonus bDex,-2;
		autobonus "{ bonus bCastrate,-50; bonus bFlee,30; }",50,5000,BF_MAGIC,"{ specialeffect(EF_SUFFRAGIUM, AREA, playerattached()); }";
	">
},
*/
/*
{
	Id: 5656
	AegisName: "Scooter_Hat_J"
	Name: "Scooter Helmet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 7
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 588
	Script: <" bonus bUnbreakableHelm,0; ">
},
*/
/*
{
	Id: 5657
	AegisName: "Antique_Pipe_J"
	Name: "Captain's Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	EquipLv: 30
	Refine: false
	ViewSprite: 383
},
*/
{
	Id: 5658
	AegisName: "Imp_Hat"
	Name: "Imp Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 589
	Script: <" bonus3 bAutoSpell,SA_FLAMELAUNCHER,1,10; ">
},
{
	Id: 5659
	AegisName: "Sleepr_Hat"
	Name: "Sleeper Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 590
	Script: <" bonus3 bAutoSpell,SA_SEISMICWEAPON,1,10; ">
},
{
	Id: 5660
	AegisName: "Gryphon_Hat"
	Name: "Gryphon Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 591
	Script: <" bonus3 bAutoSpell,SA_LIGHTNINGLOADER,1,10; ">
},
/*
{
	Id: 5661
	AegisName: "Red_Pirate_Bandana"
	Name: "Red Pirate Banada"
	Type: "IT_ARMOR"
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 592
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bAspdRate,2;
		bonus bCastrate,-2;
	">
},
*/
/*
{
	Id: 5662
	AegisName: "Libra_Crown"
	Name: "Libra Crown"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 593
	Script: <" bonus bDex,3; ">
},
*/
/*
{
	Id: 5663
	AegisName: "Libra_Diadem"
	Name: "Libra Diadem"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 594
	Script: <" bonus bDex,3; ">
},
*/
{
	Id: 5664
	AegisName: "Filir_Wing"
	Name: "Filir's Pinions"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 595
	Script: <"
		bonus bAspdRate,2;
		bonus bCastrate,-2;
	">
},
{
	Id: 5665
	AegisName: "Shaman_Hat"
	Name: "Shaman Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 596
	Script: <"
		bonus2 bSubEle,Ele_Neutral,3;
		bonus2 bSubEle,Ele_Water,3;
		bonus2 bSubEle,Ele_Earth,3;
		bonus2 bSubEle,Ele_Fire,3;
		bonus2 bSubEle,Ele_Wind,3;
		bonus2 bSubEle,Ele_Poison,3;
		bonus2 bSubEle,Ele_Holy,3;
		bonus2 bSubEle,Ele_Dark,3;
		bonus2 bSubEle,Ele_Ghost,3;
		bonus2 bSubEle,Ele_Undead,3;
	">
},
{
	Id: 5666
	AegisName: "Golden_Crown"
	Name: "Golden Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 8
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 597
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bLuk,1;
	">
},
{
	Id: 5667
	AegisName: "Skull_Hood"
	Name: "Skull Hood"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 30
	ViewSprite: 598
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 5668
	AegisName: "Weird_Pumpkin_Hat"
	Name: "Weird Pumpkin Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 206
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bMdef,5; ">
},
/*
{
	Id: 5669
	AegisName: "Poring_Party_Hat_J"
	Name: "Poring Party Hat J"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 340
},
*/
/*
{
	Id: 5670
	AegisName: "Aniv_Star_Hat"
	Name: "Aniv Star Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 599
},
*/
{
	Id: 5671
	AegisName: "Drooping_Morocc_Minion"
	Name: "Drooping Morocc Minion"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	Refine: false
	ViewSprite: 600
},
/*
{
	Id: 5672
	AegisName: "Southern_Cross"
	Name: "Southern Cross"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 601
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5673
	AegisName: "Home_Cherry_Blossom"
	Name: "Home Cherry Blossom"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 602
},
*/
/*
{
	Id: 5674
	AegisName: "Pig_Moneybox"
	Name: "Pig Moneybox"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 603
},
*/
/*
{
	Id: 5675
	AegisName: "Poring_Letter"
	Name: "Poring Letter"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	EquipLv: 10
	Refine: false
	ViewSprite: 604
},
*/
/*
{
	Id: 5676
	AegisName: "Scorpio_Crown"
	Name: "Scorpio Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 605
},
*/
/*
{
	Id: 5677
	AegisName: "Scorpio_Diadem"
	Name: "Scorpio Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 606
	Script: <" bonus bDex,2; ">
},
*/
/*
{
	Id: 5678
	AegisName: "Notation_Hairband"
	Name: "Notation Hairband"
	Type: "IT_ARMOR"
	Buy: 200
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 607
},
*/
/*
{
	Id: 5679
	AegisName: "Engineer_Cap"
	Name: "Engineer Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 608
},
*/
/*
{
	Id: 5680
	AegisName: "Hawkeyes"
	Name: "Hawkeyes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_MID"
	EquipLv: 10
	Refine: false
	ViewSprite: 609
},
*/
{
	Id: 5681
	AegisName: "F_Ribbon_Green"
	Name: "Green Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 244
	Script: <" bonus bMdef,3; ">
},
{
	Id: 5682
	AegisName: "Triangle_Rune_Cap"
	Name: "Triangle Rune Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 610
	Script: <" bonus bInt,1; ">
},
{
	Id: 5683
	AegisName: "Majestic_Goat_Repl"
	Name: "Baphomet Horns"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 41
},
{
	Id: 5684
	AegisName: "Jewel_Crown_Repl"
	Name: "Ornate Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 88
},
{
	Id: 5685
	AegisName: "Prontera_Army_Cap_Repl"
	Name: "Army Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 48
},
{
	Id: 5686
	AegisName: "Feather_Bonnet_Repl"
	Name: "Nice Hat Feather"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 104
},
{
	Id: 5687
	AegisName: "Viking_Helm_Repl"
	Name: "Orc Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 86
},
/*
{
	Id: 5688
	AegisName: "2009Love_Daddy"
	Name: "2009 Love Dad"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 611
	Script: <" bonus bVit,2; ">
},
*/
/*
{
	Id: 5689
	AegisName: "Queen_Ant_Diadem"
	Name: "Queen Ant Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 75
	ViewSprite: 612
},
*/
{
	Id: 5690
	AegisName: "Red_Wing_Hat"
	Name: "Red Wing Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 613
	Script: <"
		if (getrefine() > 6) {
			bonus2 bAddRace, RC_All, 2;
			bonus bMatkRate,2;
		}
		if (getrefine() > 8) {
			bonus2 bAddRace, RC_All, 2;
			bonus bMatkRate,2;
		}

	">
},
{
	Id: 5691
	AegisName: "Catain_Bandanna"
	Name: "Sailor's Bandana"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 542
	Script: <"
		bonus bDex,1;
		bonus2 bSubEle,Ele_Poison,20;
	">
},
{
	Id: 5692
	AegisName: "Sea_Cat_Hat"
	Name: "Sea Cat Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 539
	Script: <" bonus bDex,1; ">
},
/*
{
	Id: 5693
	AegisName: "No_Fear_Underware"
	Name: "No Fear Underwear"
	Type: "IT_ARMOR"
	Def: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 30
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,1;
	">
},
*/
/*
{
	Id: 5694
	AegisName: "No_Fear_P_Headgear"
	Name: "No Fear P Headgear"
	Type: "IT_ARMOR"
	Def: 1
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 20
	Refine: false
	ViewSprite: 614
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5695
	AegisName: "E_Blue_Drooping_Kitty"
	Name: "E Blue Drooping Kitty"
	Type: "IT_ARMOR"
	Buy: 250000
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 277
	Script: <" bonus bMdef,15; ">
},
*/
/*
{
	Id: 5696
	AegisName: "E_Flying_Angel"
	Name: "E Flying Angel"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 264
	Script: <"
		bonus bInt,1;
		bonus bAgi,1;
	">
},
*/
/*
{
	Id: 5697
	AegisName: "E_Smoking_Pipe_"
	Name: "E Smoking Pipe"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 55
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5698
	AegisName: "E_Pair_OE_Red_Ribbon_"
	Name: "E Pair OE Red Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 45
	Refine: false
	ViewSprite: 169
},
*/
/*
{
	Id: 5699
	AegisName: "E_Fish_On_Head_"
	Name: "E Fish On Head"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 149
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
	">
},
*/
/*
{
	Id: 5700
	AegisName: "E_Hibiscus"
	Name: "E Hibiscus"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 210
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 5701
	AegisName: "E_Cat_Hat"
	Name: "E Cat Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 182
	Script: <"
		bonus bLuk,2;
		bonus bMdef,10;
	">
},
*/
/*
{
	Id: 5702
	AegisName: "E_Bunny_Band_"
	Name: "E Bunny Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 15
	Script: <" bonus bInt,2; ">
},
*/
/*
{
	Id: 5703
	AegisName: "E_Magestic_Goat_TW"
	Name: "E Magestic Goat TW"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
		Taekwon: true
		Star_Gladiator: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 41
	Script: <" bonus bStr,2; ">
},
*/
/*
{
	Id: 5704
	AegisName: "E_Sheep_Hat"
	Name: "E Sheep Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 150
	Def: 1
	Job: {
		Acolyte: true
		Priest: true
		Monk: true
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 205
},
*/
/*
{
	Id: 5705
	AegisName: "E_Mini_Propeller_"
	Name: "E Mini Propeller"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 270
	Script: <"
		bonus bDex,1;
		bonus bAgi,2;
	">
},
*/
/*
{
	Id: 5706
	AegisName: "E_Alice_Doll"
	Name: "E Alice Doll"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Slots: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 208
	Script: <" bonus bStr,1; ">
},
*/
/*
{
	Id: 5707
	AegisName: "E_Red_Glasses"
	Name: "E Red Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 316
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5708
	AegisName: "E_Chick_Hat"
	Name: "E Chick Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	Refine: false
	ViewSprite: 311
	Script: <" bonus bLuk,2; ">
},
*/
/*
{
	Id: 5709
	AegisName: "E_White_Deviruchi_Cap"
	Name: "E White Deviruchi Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 64
	ViewSprite: 272
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
	">
},
*/
/*
{
	Id: 5710
	AegisName: "E_Vane_Hairpin"
	Name: "E Vane Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 313
	Script: <" bonus bAgi,2; ">
},
*/
/*
{
	Id: 5711
	AegisName: "E_Pecopeco_Hairband"
	Name: "E Pecopeco Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 314
},
*/
/*
{
	Id: 5712
	AegisName: "E_Vacation_Hat"
	Name: "E Vacation Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 315
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5713
	AegisName: "E_Charming_Ribbon"
	Name: "E Charming Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 211
},
*/
/*
{
	Id: 5714
	AegisName: "E_Water_Lily_Crown"
	Name: "E Water Lily Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 312
	Script: <"
		bonus bDex,1;
		bonus bAgi,1;
		bonus bMdef,3;
	">
},
*/
/*
{
	Id: 5715
	AegisName: "E_Vanilmirth_Hat"
	Name: "E Vanilmirth Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 1000
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 317
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5716
	AegisName: "E_Drooping_Bunny_"
	Name: "E Drooping Bunny"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 249
	Script: <" bonus bDex,1; ">
},
*/
/*
{
	Id: 5717
	AegisName: "E_Kettle_Hat"
	Name: "E Kettle Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 318
},
*/
/*
{
	Id: 5718
	AegisName: "E_Dragon_Skull"
	Name: "E Dragon Skull"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 319
},
*/
/*
{
	Id: 5719
	AegisName: "E_Ramen_Hat"
	Name: "E Ramen Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 320
	Script: <" bonus bDex,4; ">
},
*/
/*
{
	Id: 5720
	AegisName: "E_Pink_Fur_Hat"
	Name: "E Pink Fur Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 350
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 281
	Script: <" bonus bLuk,1; ">
},
*/
/*
{
	Id: 5721
	AegisName: "E_Puppy_Hat"
	Name: "E Puppy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 234
	Script: <" bonus bAgi,1; ">
},
*/
/*
{
	Id: 5722
	AegisName: "E_Magic_Eyes"
	Name: "E Magic Eyes"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 209
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5723
	AegisName: "E_Jumping_Poring"
	Name: "E Jumping Poring"
	Type: "IT_ARMOR"
	Weight: 300
	Def: 2
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 349
	Script: <" bonus bLuk,1; ">
},
*/
/*
{
	Id: 5724
	AegisName: "E_Robo_Eye"
	Name: "E Robo Eye"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 10
	Refine: false
	ViewSprite: 345
	Script: <" bonus bDex,1; ">
},
*/
/*
{
	Id: 5725
	AegisName: "E_Yellow_Wizardry_Hat"
	Name: "E Yellow Wizardry Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Job: {
		Magician: true
		Wizard: true
		Sage: true
		Soul_Linker: true
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 286
	Script: <" bonus bInt,2; ">
},
*/
/*
{
	Id: 5726
	AegisName: "E_Crescent_Helm"
	Name: "E Crescent Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 3000
	Def: 8
	Job: {
		Swordsman: true
		Merchant: true
		Knight: true
		Blacksmith: true
		Crusader: true
		Alchemist: true
	}
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	ViewSprite: 213
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5727
	AegisName: "E_Tiger_Mask"
	Name: "E Tiger Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 2
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 50
	Refine: false
	ViewSprite: 181
	Script: <" bonus bStr,3; ">
},
*/
/*
{
	Id: 5728
	AegisName: "E_Fantastic_Wig"
	Name: "E Fantastic Wig"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 308
},
*/
/*
{
	Id: 5729
	AegisName: "E_Bunny_Band_C"
	Name: "E Bunny Band C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 9
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 15
	Script: <" bonus bMdef,5; ">
},
*/
/*
{
	Id: 5730
	AegisName: "E_Centimental_Flower_C"
	Name: "E Centimental Flower C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 56
},
*/
/*
{
	Id: 5731
	AegisName: "E_Apple_OE_Archer_C"
	Name: "E Apple OE Archer C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 7
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 72
	Script: <" bonus bDex,4; ">
},
*/
/*
{
	Id: 5732
	AegisName: "E_Elven_Ears_C"
	Name: "E Elven Ears C"
	Type: "IT_ARMOR"
	Buy: 1
	Def: 2
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 73
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5733
	AegisName: "E_Brooch_C"
	Name: "E Brooch C"
	Type: "IT_ARMOR"
	Buy: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_ACC"
	EquipLv: 1
	Refine: false
	Script: <" bonus bAgi,4; ">
},
*/
/*
{
	Id: 5734
	AegisName: "E_Magestic_Goat_C"
	Name: "E Magestic Goat C"
	Type: "IT_ARMOR"
	Buy: 2
	Def: 5
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 41
	Script: <" bonus bStr,1; ">
},
*/
/*
{
	Id: 5735
	AegisName: "E_Ribbon_Green"
	Name: "Green Ribbon"
	Type: "IT_ARMOR"
	Buy: 800
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 244
	Script: <" bonus bMdef,3; ">
},
*/
/*
{
	Id: 5736
	AegisName: "EF_Whisper_Mask"
	Name: "Whisper Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	Refine: false
	ViewSprite: 321
	Script: <"
		bonus bAgi,3;
		bonus2 bSubEle,Ele_Ghost,-10;
	">
},
*/
/*
{
	Id: 5737
	AegisName: "Cactus_Hat"
	Name: "Cactus Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 615
},
*/
{
	Id: 5738
	AegisName: "Snowman_Hat"
	Name: "Snowman Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 4
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 616
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bMdef,3;
		bonus2 bSubEle,Ele_Water,7;
		bonus2 bAddMonsterDropItem,530,100;
		bonus2 bAddMonsterDropItem,12354,300;
		if (getrefine() > 7) {
			bonus5(bAutoSpellWhenHit, BA_FROSTJOKE, 5, 20, BF_WEAPON | BF_MAGIC, 0);
		} else {
			bonus5(bAutoSpellWhenHit, BA_FROSTJOKE, 1, 20, BF_WEAPON | BF_MAGIC, 0);
		}
	">
},
/*
{
	Id: 5739
	AegisName: "Sagittarius_Crown"
	Name: "Sagittarius Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 617
	Script: <" bonus bDex,2; ">
},
*/
/*
{
	Id: 5740
	AegisName: "Sagittarius_Diadem"
	Name: "Sagittarius Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 618
	Script: <"
		bonus bDex,2;
		bonus bMdef,3;
	">
},
*/
{
	Id: 5741
	AegisName: "Im_Egg_Shell_Hat"
	Name: "Eternal Egg Shell"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 101
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5742
	AegisName: "Rudolf_Santa_Hat"
	Name: "Rudolph Santa Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 400
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 619
	Script: <" bonus bLuk,1; ">
},
/*
{
	Id: 5743
	AegisName: "Orange_Stem_Hat"
	Name: "Orange Stem Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Job: {
		All: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 620
	Script: <" bonus bLuk,3; ">
},
*/
/*
{
	Id: 5744
	AegisName: "Capricorn_Crown"
	Name: "Capricon Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 621
	Script: <"
		bonus bVit,2;
		bonus bDex,2;
	">
},
*/
/*
{
	Id: 5745
	AegisName: "Capricorn_Diadem"
	Name: "Capricon Diadem"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 622
	Script: <"
		bonus bDex,2;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 5746
	AegisName: "Rune_Circlet"
	Name: "Rune Circlet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Knight: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 623
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bMdef,5;
		if(readparam(bStr)>=120) {
			bonus bBaseAtk,10;
			bonus bMatk,5;
		}

	">
},
*/
/*
{
	Id: 5747
	AegisName: "Mitra"
	Name: "Mitra"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Priest: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 624
	Script: <"
		bonus bVit,1;
		bonus bInt,1;
		bonus bMdef,5;
		bonus bHealPower,5;
		if(readparam(bInt)>=120) {
			bonus bMatk,10;
		}

	">
},
*/
/*
{
	Id: 5748
	AegisName: "Sniper_Goggle"
	Name: "Sniper Goggles"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Hunter: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 100
	ViewSprite: 625
	Script: <"
		bonus bAgi,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bAgi)>=120) {
			bonus bLongAtkRate,4;
			bonus bAspd,1;
		}

	">
},
*/
/*
{
	Id: 5749
	AegisName: "Driver_Band"
	Name: "Driver Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Gender: "SEX_MALE"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 626
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bStr)>=120) {
			bonus bBaseAtk,10;
			bonus bCritical,3;
		}

	">
},
*/
/*
{
	Id: 5750
	AegisName: "Shadow_Handicraft"
	Name: "Shadow Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Rogue: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 627
	Script: <"
		bonus bAgi,1;
		bonus bInt,1;
		bonus bMdef,1;
		if(readparam(bAgi)>=120) {
			bonus bBaseAtk,10;
			bonus bFlee,3;
		}

	">
},
*/
/*
{
	Id: 5751
	AegisName: "Minstrel_Song_Hat"
	Name: "Minstrel Song Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_THIRD"
	Gender: "SEX_MALE"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 628
	Script: <"
		bonus bInt,1;
		bonus bLuk,1;
		bonus bMdef,5;
		bonus bLongAtkRate,4;
		bonus bUseSPrate,-10;
	">
},
*/
/*
{
	Id: 5752
	AegisName: "Midas_Whispers"
	Name: "Midas Whispers"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Alchemist: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 629
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bStr)>=120) {
			bonus bBaseAtk,5;
			bonus bAspd,1;
		}

	">
},
*/
/*
{
	Id: 5753
	AegisName: "Magic_Stone_Hat"
	Name: "Magic Stone Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Wizard: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 630
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bDex)>=120) {
			bonus bMatkRate,10;
			bonus bCastrate,-2;
		}

	">
},
*/
/*
{
	Id: 5754
	AegisName: "Blazing_Soul"
	Name: "Burning Spirit"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Monk: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 631
	Script: <"
		bonus bStr,1;
		bonus bVit,1;
		bonus bMdef,5;
		if(readparam(bStr)>=120) {
			bonus bBaseAtk,10;
			bonus bHit,3;
		}

	">
},
*/
/*
{
	Id: 5755
	AegisName: "Silent_Enforcer"
	Name: "Silent Enforcer"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Job: {
		Assassin: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 100
	ViewSprite: 632
	Script: <"
		bonus bAgi,1;
		bonus bMdef,5;
		if(readparam(bAgi)>=120) {
			bonus bBaseAtk,10;
			bonus bFlee2,5;
		}

	">
},
*/
/*
{
	Id: 5756
	AegisName: "Wind_Whisper"
	Name: "Wispers of Wind"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Sage: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 633
	Script: <"
		bonus bInt,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bInt)>=120) {
			bonus bMatkRate,10;
			bonus bFlee,3;
		}

	">
},
*/
/*
{
	Id: 5757
	AegisName: "Schmidt_Helm"
	Name: "Reissue Schmitz Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Crusader: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 100
	ViewSprite: 634
	Script: <"
		bonus bVit,2;
		bonus bInt,1;
		bonus bMdef,5;
		if(readparam(bInt)>=120) {
			bonus bMatkRate,10;
			bonus bDef,5;
		}

	">
},
*/
{
	Id: 5758
	AegisName: "Dying_Swan"
	Name: "Resting Swan"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 17
	Slots: 1
	Job: {
		Bard: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 635
	Script: <"
		bonus bInt,1;
		bonus bLuk,1;
		bonus bMdef,5;
		bonus bAtkRate,5;
		bonus bUseSPrate,-10;
	">
},
/*
{
	Id: 5759
	AegisName: "Noah_Hat"
	Name: "Noah Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 636
	Script: <" bonus bMdef,3; ">
},
*/
/*
{
	Id: 5760
	AegisName: "Driver_Band_F"
	Name: "Driver Band"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 12
	Slots: 1
	Job: {
		Blacksmith: true
	}
	Upper: "ITEMUPPER_THIRD"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 100
	ViewSprite: 637
	Script: <"
		bonus bStr,1;
		bonus bDex,1;
		bonus bMdef,5;
		if(readparam(bStr)>=120) {
			bonus bBaseAtk,10;
			bonus bCritical,3;
		}

	">
},
*/
/*
{
	Id: 5761
	AegisName: "Sloth_Hat"
	Name: "Sloth Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 638
	Script: <" bonus bAgi,2; ">
},
*/
/*
{
	Id: 5762
	AegisName: "Duneyrr_Helm"
	Name: "Duneyrr Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 639
	Script: <"
		bonus bAllStats,1;
		bonus bMdef,5;
	">
},
*/
/*
{
	Id: 5763
	AegisName: "Red_Bunny_Band"
	Name: "Red Bunny Band"
	Type: "IT_ARMOR"
	Weight: 200
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 640
	Script: <"
		bonus bAgi,2;
		bonus bMdef,3;
	">
},
*/
/*
{
	Id: 5765
	AegisName: "Black_Tail_Ribbon"
	Name: "Black Tail Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 10
	ViewSprite: 642
	Script: <" bonus bMdef,5; ">
},
*/
{
	Id: 5766
	AegisName: "Amistr_Cap"
	Name: "Amistr Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 4
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 643
	Script: <" bonus bVit,5; ">
},
/*
{
	Id: 5767
	AegisName: "Samurai_Mask"
	Name: "Samurai Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 50
	Refine: false
	ViewSprite: 644
},
*/
/*
{
	Id: 5768
	AegisName: "Sakura_Coronet"
	Name: "Sakura Coronet"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 645
	Script: <" bonus bMdef,3; ">
},
*/
/*
{
	Id: 5769
	AegisName: "Gold_Angel_Sculpture"
	Name: "Gold Angel Sculpture"
	Type: "IT_ARMOR"
	Buy: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	Refine: false
	ViewSprite: 646
},
*/
{
	Id: 5770
	AegisName: "Splash_Hat"
	Name: "Splash Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 349
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
	Script: <" autobonus "{ sc_start SC_PROPERTYWIND, 180000, 1; }", 3, 180000, BF_WEAPON, "{ specialeffect(EF_ENHANCE, AREA, playerattached()); }"; ">
},
{
	Id: 5771
	AegisName: "Family_Hat"
	Name: "Family Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 109
	Script: <"
		bonus bDex,1;
		bonus bMdef,1;
	">
},
/*
{
	Id: 5772
	AegisName: "Red_Navy_Hat"
	Name: "Red Navy Hat"
	Type: "IT_ARMOR"
	Buy: 3000
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 95
	ViewSprite: 651
},
*/
/*
{
	Id: 5773
	AegisName: "Navy_Beret"
	Name: "Navy Beret"
	Type: "IT_ARMOR"
	Buy: 3000
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 95
	ViewSprite: 652
},
*/
/*
{
	Id: 5774
	AegisName: "Red_Pirate_Hat"
	Name: "Red Pirate Hat"
	Type: "IT_ARMOR"
	Buy: 3000
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 95
	ViewSprite: 496
},
*/
{
	Id: 5775
	AegisName: "Choco_Donut_In_Mouth"
	Name: "Choco Donut In Mouth"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 653
},
/*
{
	Id: 5776
	AegisName: "Blazing_Sun"
	Name: "Blazing Sun"
	Type: "IT_ARMOR"
	Weight: 500
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 654
},
*/
/*
{
	Id: 5777
	AegisName: "Remover_Hat"
	Name: "Remover Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 800
	Def: 2
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 655
	Script: <" bonus bMdef,1; ">
},
*/
/*
{
	Id: 5778
	AegisName: "Blue_Arara_Hat"
	Name: "Blue Arara Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 656
	Script: <" bonus bStr,2; ">
},
*/
/*
{
	Id: 5779
	AegisName: "Drooping_Boto"
	Name: "Drooping Boto"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 657
	Script: <" bonus bInt,2; ">
},
*/
/*
{
	Id: 5780
	AegisName: "Tendrilion_Hat"
	Name: "Tendrilion Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 658
},
*/
{
	Id: 5781
	AegisName: "Persika"
	Name: "Persika"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 659
},
/*
{
	Id: 5783
	AegisName: "YellowBunny_Hairband"
	Name: "YellowBunny Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 662
	Script: <"
		bonus bStr,1;
		bonus bInt,1;
		bonus bDex,2;
	">
},
*/
/*
{
	Id: 5784
	AegisName: "PinkBunny_Hairband"
	Name: "PinkBunny Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 663
	Script: <"
		bonus bStr,1;
		bonus bInt,2;
		bonus bDex,1;
	">
},
*/
/*
{
	Id: 5785
	AegisName: "Green_Bunny_Hairband"
	Name: "Green Bunny Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 200
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 664
	Script: <"
		bonus bStr,2;
		bonus bInt,1;
		bonus bDex,1;
	">
},
*/
{
	Id: 5786
	AegisName: "Ancient_Elven_Ear"
	Name: "Ancient Elven Ear"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 200
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 665
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bLuk,1; ">
},
/*
{
	Id: 5787
	AegisName: "Tha_Maero_Mask"
	Name: "Tha Maero Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 30
	Refine: false
	ViewSprite: 666
	Script: <" bonus bMdef,2; ">
},
*/
{
	Id: 5788
	AegisName: "3D_Glasses"
	Name: "3D Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 661
},
/*
{
	Id: 5789
	AegisName: "Thanatos_Mal_Mask"
	Name: "Thanatos Mal Mask"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_MID"]
	EquipLv: 30
	Refine: false
	ViewSprite: 667
	Script: <" bonus bVit,1; ">
},
*/
/*
{
	Id: 5790
	AegisName: "Holy_Mom_Love"
	Name: "TM"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Slots: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 45
	ViewSprite: 610
},
*/
/*
{
	Id: 5791
	AegisName: "Tenkaippin_Ramen"
	Name: "Tenkaippin Ramen"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	Refine: false
	ViewSprite: 668
	Script: <"
		bonus bInt,-1;
		bonus bDex,4;
	">
},
*/
{
	Id: 5792
	AegisName: "Fish_Pin"
	Name: "Fish Pin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 669
},
{
	Id: 5793
	AegisName: "Ribbon_Of_Life"
	Name: "Ribbon Of Life"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 2
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 575
	Script: <"
		bonus bInt,1;
		bonus bMdef,2;
	">
},
{
	Id: 5794
	AegisName: "3D_Glasses_"
	Name: "3D Glasses"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 661
},
/*
{
	Id: 5795
	AegisName: "Red_Dress_Hat"
	Name: "Red Dress Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 670
	Script: <" bonus bMdef,7; ">
},
*/
{
	Id: 5796
	AegisName: "Cheer_Scarf"
	Name: "Cheer Scarf"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 369
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5797
	AegisName: "Cheer_Scarf2"
	Name: "Cheer Scarf2"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 369
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5798
	AegisName: "Cheer_Scarf3"
	Name: "Cheer Scarf3"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 369
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5799
	AegisName: "Cheer_Scarf4"
	Name: "Cheer Scarf4"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 369
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5800
	AegisName: "Blush_Of_Groom"
	Name: "Blush of Groom"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 50
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 125
	Script: <" bonus2 bSubRace,RC_DemiPlayer,3; ">
},
{
	Id: 5801
	AegisName: "Ribbon_Of_Bride"
	Name: "Red Tailed Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 167
	Script: <"
		bonus bAllStats,2;
		bonus2 bSubRace,RC_DemiPlayer,10;
		if(getskilllv(AL_HEAL)==10) {
			bonus3 bAutoSpellWhenHit,AL_HEAL,10,20;
		}
		else {
			bonus3 bAutoSpellWhenHit,AL_HEAL,5,20;
		}

	">
},
{
	Id: 5802
	AegisName: "Upgrade_Elephant_Hat"
	Name: "Upgraded Elephant Hat"
	Type: "IT_ARMOR"
	Weight: 500
	Def: 3
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 215
},
{
	Id: 5803
	AegisName: "Flower_Love_Hat"
	Name: "Love Flower Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 5
	Script: <" bonus2 bAddMonsterDropItem,608,100; ">
},
{
	Id: 5804
	AegisName: "Pirate_Eyepatch"
	Name: "Pirate Eye Bandage"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 100
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 13
},
{
	Id: 5805
	AegisName: "Victorious_Coronet"
	Name: "Victorious Coronet"
	Type: "IT_ARMOR"
	Weight: 150
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 70
	Refine: false
	ViewSprite: 43
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bMaxHPrate,15;
		bonus bSPrecovRate,5;
	">
},
{
	Id: 5806
	AegisName: "Poem_Natalia_Hat"
	Name: "Poet Natalie's Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 5
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 67
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 5807
	AegisName: "October_Fest_Cap"
	Name: "October Fest Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 104
},
{
	Id: 5808
	AegisName: "Diabolus_Helmet"
	Name: "Dark Bacilium"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 250
	Def: 5
	Slots: 1
	Job: {
		Knight: true
		Priest: true
		Wizard: true
		Blacksmith: true
		Hunter: true
		Assassin: true
		Crusader: true
		Monk: true
		Sage: true
		Rogue: true
		Alchemist: true
		Bard: true
	}
	Upper: "ITEMUPPER_UPPER"
	Loc: ["EQP_HEAD_LOW", "EQP_HEAD_TOP", "EQP_HEAD_MID"]
	ViewSprite: 364
	Script: <"
		bonus2 bResEff,Eff_Stone,2000+(getrefine()*200);
		bonus2 bResEff,Eff_Freeze,2000+(getrefine()*200);
		bonus2 bResEff,Eff_Stun,2000+(getrefine()*200);
	">
},
{
	Id: 5809
	AegisName: "Boom_Boom_Hat"
	Name: "Boom Boom Hat"
	Type: "IT_ARMOR"
	Weight: 100
	Def: 6
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 216
	Script: <" bonus bAllStats,5; ">
},
{
	Id: 5810
	AegisName: "Ph_D_Hat_V"
	Name: "Ph.D Hat V"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 3
	Job: {
		All: true
		Novice: false
	}
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 98
	Script: <"
		bonus bInt,5;
		bonus bVit,3;
		bonus bDex,3;
	">
},
{
	Id: 5811
	AegisName: "Santa_Beard"
	Name: "Santa's Beard"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 5
	Loc: "EQP_HEAD_LOW"
	Refine: false
	ViewSprite: 25
},
{
	Id: 5812
	AegisName: "Hat_Of_Expert"
	Name: "Hat Of Expert"
	Type: "IT_ARMOR"
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 16
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
/*
{
	Id: 5813
	AegisName: "Red_Ph_D_Hat"
	Name: "Red Ph.D Hat"
	Type: "IT_ARMOR"
	Buy: 1000
	Weight: 500
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 481
	Script: <" bonus bInt,1; ">
},
*/
/*
{
	Id: 5814
	AegisName: "Ati_Atihan_Hat3"
},
*/
{
	Id: 5815
	AegisName: "Cowboy_Hat_J"
	Name: "Purple Cowboy Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 475
	Script: <"
		bonus bStr,1;
		bonus2 bSubSize, 0, 5;
		bonus2 bSubSize, 1, 5;
		bonus2 bSubSize, 2, 5;
	">
},
{
	Id: 5816
	AegisName: "Classic_Hat_J"
	Name: "Classic Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 411
},
{
	Id: 5817
	AegisName: "Valentine_Pledge"
	Name: "Valentine Pledge"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 3
	Loc: "EQP_ACC"
	Refine: false
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bAllStats,2;
		bonus bMdef,3;
	">
},
{
	Id: 5818
	AegisName: "Carnival_Hat"
	Name: "Carnival Hat"
	Type: "IT_ARMOR"
	Def: 6
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 505
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats, 3; ">
},
{
	Id: 5819
	AegisName: "Carnival_Circlet"
	Name: "Carnival Circlet"
	Type: "IT_ARMOR"
	Def: 6
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 506
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats, 3; ">
},
/*
{
	Id: 5820
	AegisName: "Black_Elven_Ears"
	Name: "Black Elven Ears"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_MID"
	Refine: false
	ViewSprite: 498
},
*/
{
	Id: 5821
	AegisName: "Gold_Tulip_Hairpin"
	Name: "Gold Tulip Hairpin"
	Type: "IT_ARMOR"
	Buy: 10
	Weight: 100
	Def: 2
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 499
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus2 bExpAddRace, RC_All, 5; ">
},
{
	Id: 5822
	AegisName: "Love_Chick_Hat"
	Name: "Love Chick Hat"
	Type: "IT_ARMOR"
	Buy: 10000
	Weight: 100
	Def: 4
	Loc: "EQP_HEAD_TOP"
	ViewSprite: 500
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bLuk,4;
		bonus bMaxHP,100;
		bonus bMaxSP,100;
		bonus2 bSubRace,RC_DemiPlayer,7;
		bonus2 bSubRace,RC_Undead,7;
	">
},
/*
{
	Id: 5823
	AegisName: "Love_Arrow"
	Name: "Love Arrow"
	Type: "IT_ARMOR"
	Buy: 5000
	Weight: 100
	Def: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <"
		bonus bDex,5;
		bonus bAgi,5;
	">
},
*/
{
	Id: 5824
	AegisName: "Fools_Day_Hat"
	Name: "Fools Day Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 300
	Def: 6
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 265
},
/*
{
	Id: 5825
	AegisName: "Badge_Of_Order_Grace"
	Name: "Badge Of Order Grace"
	Type: "IT_ARMOR"
	Def: 1
	Loc: "EQP_ACC"
	Refine: false
	Script: <" bonus bMdef,1; ">
},
*/
{
	Id: 5826
	AegisName: "Valkyrie_Helmet"
	Name: "Valkyrie Helmet"
	Type: "IT_ARMOR"
	Def: 10
	Loc: "EQP_HEAD_TOP"
	Refine: false
	ViewSprite: 225
	Script: <"
		bonus bStr,2;
		bonus bInt,2;
		bonus bDex,2;
		bonus bAgi,2;
		bonus bMdef,5;
	">
},
{
	Id: 5827
	AegisName: "Book_File_Hat"
	Name: "Book File Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 423
},
{
	Id: 5828
	AegisName: "Honor_Gold_Ring"
	Name: "Honor Gold Ring"
	Type: "IT_ARMOR"
	Weight: 50
	Loc: "EQP_ACC"
	EquipLv: 1
	Script: <"
		bonus bAllStats,1;
		bonus bMdef,5;
	">
},
/*
{
	Id: 5829
	AegisName: "Ordinary_Armor"
	Name: "Ordinary Armor"
	Type: "IT_ARMOR"
	Loc: "EQP_ARMOR"
	EquipLv: 30
},
*/
/*
{
	Id: 5830
	AegisName: "Woe_Sahkkat"
	Name: "Woe Sahkkat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 67
},
*/
/*
{
	Id: 5831
	AegisName: "Woe_Big_Sis_Ribbon"
	Name: "Woe Big Sis Ribbon"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 28
},
*/
/*
{
	Id: 5832
	AegisName: "Woe_Vane_Hairpin"
	Name: "Woe Vane Hairpin"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 313
},
*/
/*
{
	Id: 5833
	AegisName: "Woe_Picnic_Hat"
	Name: "Woe Picnic Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 117
},
*/
/*
{
	Id: 5834
	AegisName: "Woe_Crown"
	Name: "Woe Crown"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 45
},
*/
/*
{
	Id: 5835
	AegisName: "Woe_Tiara"
	Name: "Woe Tiara"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 19
},
*/
/*
{
	Id: 5836
	AegisName: "Woe_Boys_Cap"
	Name: "Woe Boys Cap"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_TOP"
	EquipLv: 60
	ViewSprite: 102
},
*/
/*
{
	Id: 5837
	AegisName: "Woe_Sunglass"
	Name: "Woe Sunglass"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 12
},
*/
/*
{
	Id: 5838
	AegisName: "Woe_Fin_Helm"
	Name: "Woe Fin Helm"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 100
},
*/
/*
{
	Id: 5839
	AegisName: "Woe_Blush"
	Name: "Woe Blush"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 125
},
*/
/*
{
	Id: 5840
	AegisName: "Woe_Elven_Ears"
	Name: "Woe Elven Ears"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 10
	Loc: "EQP_HEAD_MID"
	EquipLv: 70
	Refine: false
	ViewSprite: 73
},
*/
/*
{
	Id: 5841
	AegisName: "Shaman_Hat_"
	Name: "Shaman_Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 100
	Def: 1
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 30
	ViewSprite: 596
	Script: <" bonus bLuk,2; ">
},
*/
/*
{
	Id: 5842
	AegisName: "Loyal_Ring1"
	Name: "Loyal Ring1"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
},
*/
/*
{
	Id: 5843
	AegisName: "Loyal_Ring2"
	Name: "Loyal Ring2"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Script: <" bonus bAllStats,2; ">
},
*/
{
	Id: 5844
	AegisName: "Loyal_Ring3"
	Name: "Loyal Ring3"
	Type: "IT_ARMOR"
	Loc: "EQP_ACC"
	EquipLv: 1
	Script: <" bonus bAllStats,3; ">
},
/*
{
	Id: 5845
	AegisName: "Buzzy_Ball_Board"
	Name: "Buzzy Ball Board"
	Type: "IT_ARMOR"
	Buy: 50
	Weight: 400
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 641
},
*/
{
	Id: 5846
	AegisName: "Buzzy_Ball_Gum"
	Name: "Buzzy Ball Gum"
	Type: "IT_ARMOR"
	Buy: 50
	Weight: 100
	Def: 1
	Loc: "EQP_HEAD_LOW"
	EquipLv: 1
	Refine: false
	ViewSprite: 572
	Script: <" bonus bMdef,5; ">
},
/*
{
	Id: 5847
	AegisName: "Fools_Day_Helmet"
	Name: "Fools Day Helmet"
	Type: "IT_ARMOR"
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 647
	Script: <"
		bonus bInt,5;
		bonus bVit,-3;
	">
},
*/
/*
{
	Id: 5848
	AegisName: "Robin_Eyepatch"
	Name: "Robin Eyepatch"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_HEAD_MID"
	EquipLv: 1
	Refine: false
	ViewSprite: 50
},
*/
/*
{
	Id: 5849
	AegisName: "Doctor_Hairband"
	Name: "Doctor Hairband"
	Type: "IT_ARMOR"
	Buy: 20
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	Refine: false
	ViewSprite: 60
},
*/
/*
{
	Id: 5850
	AegisName: "Golden_Savage_Hat"
	Name: "Golden Savage Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: 5
	Loc: "EQP_HEAD_TOP"
	EquipLv: 50
	ViewSprite: 648
},
*/
{
	Id: 5851
	AegisName: "Summer_Knight"
	Name: "Summer Knight"
	Type: "IT_ARMOR"
	Buy: 20
	Def: 1
	Loc: ["EQP_HEAD_TOP", "EQP_HEAD_MID"]
	EquipLv: 60
	Refine: false
	ViewSprite: 138
},
/*
{
	Id: 5852
	AegisName: "Easter_Egg_Shell"
	Name: "Resurrect Egg Shell"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 500
	Def: -7
	Loc: "EQP_HEAD_TOP"
	EquipLv: 40
	ViewSprite: 537
	Script: <" bonus bMdef,-7; ">
},
*/
{
	Id: 5856
	AegisName: "Passion_FB_Hat"
	Name: "Passion FB Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 671
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bStr,2;
		bonus bDex,2;
	">
},
{
	Id: 5857
	AegisName: "Cool_FB_Hat"
	Name: "Cool FB Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 672
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bVit,2;
	">
},
{
	Id: 5858
	AegisName: "Victory_FB_Hat"
	Name: "Victory FB Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 673
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <"
		bonus bInt,2;
		bonus bDex,2;
	">
},
{
	Id: 5859
	AegisName: "Glory_FB_Hat"
	Name: "Glory FB Hat"
	Type: "IT_ARMOR"
	Buy: 20
	Weight: 600
	Def: 2
	Slots: 1
	Loc: "EQP_HEAD_TOP"
	EquipLv: 1
	ViewSprite: 674
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" bonus bAllStats,1; ">
},

//== More Etc Items ========================================
{
	Id: 6000
	AegisName: "Dark_Ashes"
	Name: "Ashes of Darkness"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6001
	AegisName: "Essence_Of_Fire"
	Name: "Essence of Fire"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6002
	AegisName: "Token_Of_Apostle"
	Name: "Token of Apostle"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6003
	AegisName: "Soul_Pendant"
	Name: "Pendant of Spirit"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6004
	AegisName: "Bapho_Doll"
	Name: "Cursed Baphomet Doll"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6005
	AegisName: "New_Year_Rice_Cake"
	Name: "New Year Rice Cake"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6006
	AegisName: "Rice_Cake_Delivery_Box"
	Name: "Rice Cake Delivery Box"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6007
	AegisName: "New_Year_Rice_Cake_Soup"
	Name: "New Year Rice Cake Soup"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6008
	AegisName: "Wood"
	Name: "Wood"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6009
	AegisName: "Large_Magical_Fan"
	Name: "Big Fan Of Magic"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6010
	AegisName: "Pickaxe"
	Name: "Hoe"
	Weight: 10
	BuyingStore: true
},
{
	Id: 6011
	AegisName: "Blue_Card_B"
	Name: "Blue B Card"
	Weight: 10
},
{
	Id: 6012
	AegisName: "Blue_Card_C"
	Name: "Blue C Card"
	Weight: 10
},
{
	Id: 6013
	AegisName: "Blue_Card_J"
	Name: "Blue J Card"
	Weight: 10
},
{
	Id: 6015
	AegisName: "Blue_Card_M"
	Name: "Blue M Card"
	Weight: 10
},
{
	Id: 6016
	AegisName: "Blue_Card_Q"
	Name: "Blue Q Card"
	Weight: 10
},
{
	Id: 6017
	AegisName: "Blue_Card_T"
	Name: "Blue T Card"
	Weight: 10
},
{
	Id: 6018
	AegisName: "Blue_Card_V"
	Name: "Blue V Card"
	Weight: 10
},
{
	Id: 6019
	AegisName: "Blue_Card_Z"
	Name: "Blue Z Card"
	Weight: 10
},
{
	Id: 6020
	AegisName: "Fur"
	Name: "Fur"
	Buy: 704
	Weight: 10
	BuyingStore: true
},
{
	Id: 6021
	AegisName: "Peaked_Hat"
	Name: "Peaked Hat"
	Buy: 433
	Weight: 10
	BuyingStore: true
},
{
	Id: 6022
	AegisName: "Hard_Skin"
	Name: "Hard Skin"
	Buy: 884
	Weight: 10
	BuyingStore: true
},
{
	Id: 6023
	AegisName: "Mystic_Horn"
	Name: "Mystic Horn"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6024
	AegisName: "17Carat_Dia"
	Name: "17Carat Diamond"
	Weight: 10
},
{
	Id: 6025
	AegisName: "Towel_Of_Memory"
	Name: "Towel of Memory"
},
{
	Id: 6026
	AegisName: "Marriage_Covenant"
	Name: "Written Oath Of Marriage"
	Weight: 10
},
{
	Id: 6027
	AegisName: "Crystal_Of_Feardoom"
	Name: "Crystal Of Feardom"
},
{
	Id: 6028
	AegisName: "Seal_Scroll"
	Name: "Sealed Scroll"
},
{
	Id: 6029
	AegisName: "Morocc_Tracing_Log"
	Name: "Morroc Tracing Log"
},
{
	Id: 6030
	AegisName: "Glitering_PaperA"
	Name: "Glittering Paper"
	Weight: 10
},
{
	Id: 6031
	AegisName: "Glitering_PaperB"
	Name: "Glittering Paper"
	Weight: 10
},
{
	Id: 6032
	AegisName: "Horn_Of_Hilsrion"
	Name: "Horn of Hillslion"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 6033
	AegisName: "Horn_Of_Tendrilion"
	Name: "Horn of Tendrilion"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 6034
	AegisName: "Weird_Part"
	Name: "Weird Part"
},
{
	Id: 6035
	AegisName: "Decaying_Stem"
	Name: "Decaying Stem"
},
{
	Id: 6036
	AegisName: "Invite_To_Meeting"
	Name: "Meeting Invitation"
	Weight: 10
},
{
	Id: 6037
	AegisName: "Rough_File"
	Name: "Messy File"
},
{
	Id: 6038
	AegisName: "Neat_Report"
	Name: "Neat Report"
	Weight: 10
},
{
	Id: 6039
	AegisName: "Piece_Of_Fish"
	Name: "Piece of Fish"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6040
	AegisName: "Some_Of_Report"
	Name: "Part of a Report"
},
{
	Id: 6041
	AegisName: "Strong_Bine"
	Name: "Strong Vine"
	Buy: 30
	Weight: 50
},
{
	Id: 6042
	AegisName: "Ordinary_Branch"
	Name: "Ordinary Branch"
	Weight: 10
},
{
	Id: 6043
	AegisName: "Letter_From_Lugen"
	Name: "Letter from Lugen"
	Weight: 10
},
{
	Id: 6044
	AegisName: "Letter_From_Otto"
	Name: "Letter from Otto"
	Weight: 10
},
{
	Id: 6045
	AegisName: "Supply_Box"
	Name: "Supply Box"
},
{
	Id: 6046
	AegisName: "Clothing_Dye_Coupon"
	Name: "Clothing Dye Coupon"
	Type: "IT_USABLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" callfunc "SetPalete",1; ">
},
{
	Id: 6047
	AegisName: "Clothing_Dye_Coupon2"
	Name: "Clothing Dye Coupon II"
	Type: "IT_USABLE"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" callfunc "SetPalete",2; ">
},
{
	Id: 6048
	AegisName: "Unidentified_Mineral"
	Name: "Unidentified Mineral"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6049
	AegisName: "Marlin"
	Name: "Marlin"
	Weight: 10
},
{
	Id: 6050
	AegisName: "Mercenary_Contract"
	Name: "Mercenary Contract"
	Weight: 10
},
{
	Id: 6051
	AegisName: "Gray_Hollow"
	Name: "Gray Hollow"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6052
	AegisName: "Ornamental_Hairpin"
	Name: "Ornament Hairpin"
	Buy: 1
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6053
	AegisName: "Yuanbao"
	Name: "Circle Step"
	Buy: 100
	Weight: 100
},
{
	Id: 6054
	AegisName: "Blue_Card_6"
	Name: "Number 6 Card"
	Weight: 10
},
{
	Id: 6055
	AegisName: "Blue_Card_Annyver"
	Name: "Character Week Card"
	Weight: 10
},
{
	Id: 6056
	AegisName: "Blue_Card_Sary"
	Name: "Character Year Card"
	Weight: 10
},
{
	Id: 6057
	AegisName: "Blue_Card_E"
	Name: "Character Lee Card"
	Weight: 10
},
{
	Id: 6058
	AegisName: "Blue_Card_Ven"
	Name: "Character Ben Card"
	Weight: 10
},
{
	Id: 6059
	AegisName: "Blue_Card_Nt"
	Name: "Character Project Card"
	Weight: 10
},
{
	Id: 6060
	AegisName: "Moon_Admin_Ticket"
	Name: "Month Viewing Ticket"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6061
	AegisName: "Plantain"
	Name: "Blood Beginner"
	Buy: 100
	Weight: 50
},
{
	Id: 6062
	AegisName: "Moon_Cake15"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6063
	AegisName: "Moon_Cake16"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6064
	AegisName: "Moon_Cake17"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6065
	AegisName: "Moon_Cake18"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6066
	AegisName: "Moon_Cake19"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6067
	AegisName: "Moon_Cake20"
	Name: "Letter Moon Cake"
	Buy: 10
	Weight: 10
},
{
	Id: 6068
	AegisName: "Rabbit_Skin"
	Name: "Leather Rabbit"
	Buy: 10
	Weight: 10
},
{
	Id: 6069
	AegisName: "ABUNDANCE"
	Name: "Abundance"
	Buy: 10
	Weight: 10
},
{
	Id: 6070
	AegisName: "Shamans_Old_Paper"
	Name: "Shaman's Document"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6071
	AegisName: "Broken_Sword"
	Name: "Broken Sword"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6072
	AegisName: "Wing_Of_Bizofnil"
	Name: "Bijofnil Feather"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6073
	AegisName: "Dragons_Mane"
	Name: "Dragon's Mane"
	BuyingStore: true
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6074
	AegisName: "Bazetts_Order"
	Name: "Bazett's Order"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6075
	AegisName: "Crystalized_Teardrop"
	Name: "Crystalized Teardrop"
	BuyingStore: true
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6076
	AegisName: "Portable_Toolbox"
	Name: "Portable Toolbox"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6077
	AegisName: "Rough_Mineral"
	Name: "Rough Mineral"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6078
	AegisName: "Stone_Fragments"
	Name: "Stone Fragment"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6079
	AegisName: "Flower_Of_Alfheim"
	Name: "Flower Of Alfheim"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6080
	AegisName: "Manuk_Coin"
	Name: "Manuk Coin"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6081
	AegisName: "Splendide_Coin"
	Name: "Splendide Coin"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6082
	AegisName: "Spirit_Of_Alfheim"
	Name: "Spirit Of Alfheim"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6083
	AegisName: "Dolly_Capsule"
	Name: "Capsule Dolls"
	Weight: 10
},
{
	Id: 6084
	AegisName: "Bradium_Fragments"
	Name: "Bradium Fragments"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6085
	AegisName: "Shaggy_Muffler"
	Name: "Shaggy Muffler"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6086
	AegisName: "Withered_Flower"
	Name: "Withered Flower"
	Buy: 890
	Weight: 10
	BuyingStore: true
},
{
	Id: 6087
	AegisName: "Crystal_Of_Soul_01"
	Name: "Spiritual Crystal"
	Buy: 1050
	Weight: 10
	BuyingStore: true
},
{
	Id: 6088
	AegisName: "Crystal_Of_Soul_02"
	Name: "Spiritual Crystal"
	Buy: 1050
	Weight: 10
	BuyingStore: true
},
{
	Id: 6089
	AegisName: "Piece_Of_Darkness"
	Name: "Dark Piece"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6090
	AegisName: "Purified_Bradium"
	Name: "Refined Bradium"
	Buy: 1100
	Weight: 50
	BuyingStore: true
},
{
	Id: 6091
	AegisName: "Dark_Red_Scale"
	Name: "Dark Red Scale"
	Buy: 200000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6092
	AegisName: "Singing_Crystal_Piece"
	Name: "Piece Of Singing Crystal"
	Weight: 10
},
{
	Id: 6093
	AegisName: "Egg_Of_Draco"
	Name: "Draco's Egg"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6094
	AegisName: "Traditional_Cookie"
	Name: "Traditional Sweets"
	Buy: 20
	Weight: 10
},
{
	Id: 6095
	AegisName: "Flavored_Alcohol"
	Name: "Flavored Alcohol"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6096
	AegisName: "Fish_With_Blue_Back"
	Name: "Fish With Blue Back"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6097
	AegisName: "Pumpkin_Pie_"
	Name: "Pumpkin Pie"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6098
	AegisName: "Small_Snow_Flower"
	Name: "Small Snow Flower"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6099
	AegisName: "Grilled_Rice_Cake"
	Name: "Grilled Rice Cake"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6100
	AegisName: "Damp_Darkness"
	Name: "Damp Darkness"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6101
	AegisName: "Attendance_Card"
	Name: "Attendance Card"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6102
	AegisName: "Report_On_Splendide"
	Name: "Report On Splendide"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6103
	AegisName: "Report_On_Manuk"
	Name: "Report On Manuk"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6104
	AegisName: "Big_Cell"
	Name: "Big Cell"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6105
	AegisName: "Morning_Dew"
	Name: "Morning Dew"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6106
	AegisName: "Well_Ripened_Berry"
	Name: "Well Ripened Berry"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6107
	AegisName: "Sunset_On_The_Rock"
	Name: "Sunset On The Rock"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6108
	AegisName: "Apple_Pudding"
	Name: "Apple Pudding"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6109
	AegisName: "Plant_Neutrient"
	Name: "Plant Neutrient"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6110
	AegisName: "Vital_Flower"
	Name: "Vital Flower"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6111
	AegisName: "Mystic_Stone"
	Name: "Mystic Stone"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6112
	AegisName: "Fresh_Plant"
	Name: "Fresh Plant"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6113
	AegisName: "Vital_Flower_"
	Name: "Vital Flower"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6114
	AegisName: "Flame_Gemstone"
	Name: "Flame Gemstone"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6115
	AegisName: "Bun_"
	Name: "Bun"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6116
	AegisName: "Succu_Pet_Coupon"
	Name: "Succubus Pet Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6117
	AegisName: "Imp_Pet_Coupon"
	Name: "Imp Pet Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6118
	AegisName: "Chung_E_Pet_Coupon"
	Name: "Chung E Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6119
	AegisName: "Natural_Leather"
	Name: "Cow Leather"
},
{
	Id: 6120
	AegisName: "Face_Paint"
	Name: "Face Paint"
	Buy: 120
	Weight: 20
	BuyingStore: true
},
{
	Id: 6121
	AegisName: "Makeover_Brush"
	Name: "Makeover Brush"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6122
	AegisName: "Paint_Brush"
	Name: "Paint Brush"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6123
	AegisName: "Surface_Paint"
	Name: "Surface Paint"
	Buy: 200
	Weight: 30
	BuyingStore: true
},
{
	Id: 6124
	AegisName: "Wolfs_Flute"
	Name: "Wolf Flute"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6125
	AegisName: "Lucky_Box"
	Name: "Spring Time Box"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6126
	AegisName: "Happy_Box"
	Name: "Summer Happy Box"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6127
	AegisName: "Purification_Stone"
	Name: "Purification Stone"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6128
	AegisName: "Guillotine_Antidote"
	Name: "Antidote"
	BuyingStore: true
},
{
	Id: 6129
	AegisName: "Ticket_Nightmare"
	Name: "Nightmare Terror Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6130
	AegisName: "Ticket_Loli_Ruri"
	Name: "Loli Ruri Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6131
	AegisName: "Ticket_Goblin_Leader"
	Name: "Goblin Leader Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6132
	AegisName: "Ticket_Incubus"
	Name: "Incubus Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6133
	AegisName: "Ticket_Miyabi_Ningyo"
	Name: "Miyabi Ningyo Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6134
	AegisName: "Ticket_Whisper"
	Name: "Giant Whisper Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6135
	AegisName: "Ticket_Wicked_Nymph"
	Name: "Evil Nymph Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6136
	AegisName: "Ticket_Medusa"
	Name: "Medusa Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6137
	AegisName: "Ticket_Stoneshooter"
	Name: "Stone Shooter Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6138
	AegisName: "Ticket_Marionette"
	Name: "Marionette Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6139
	AegisName: "Ticket_Leafcat"
	Name: "Leaf Cat Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6140
	AegisName: "Ticket_Dullahan"
	Name: "Dullahan Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6141
	AegisName: "Ticket_Shinobi"
	Name: "Shinobi Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6142
	AegisName: "Ticket_Golem"
	Name: "Golem Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6143
	AegisName: "Ticket_Civil_Servant"
	Name: "Civil Servant Exchange Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6144
	AegisName: "Heartbroken_Tears"
	Name: "Regrettable Tears"
	Buy: 1000
	Weight: 2
	BuyingStore: true
},
{
	Id: 6145
	AegisName: "Vulcan_Bullet"
	Name: "Vulcan Bullet"
	Buy: 10
	Weight: 2
	BuyingStore: true
},
{
	Id: 6146
	AegisName: "Magic_Gear_Fuel"
	Name: "Magic Gear Fuel"
	Buy: 300
	Weight: 30
	BuyingStore: true
},
{
	Id: 6147
	AegisName: "Liquid_Condensed_Bullet"
	Name: "Liquid Condensed Bullet"
	Buy: 100
	Weight: 3
	BuyingStore: true
},
{
	Id: 6148
	AegisName: "Chocolate_Of_Eternity"
	Name: "Eternity Of Chocolate"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6149
	AegisName: "Plain_Chocolate"
	Name: "Simple Chocolate"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6150
	AegisName: "Key_Of_The_Mansion"
	Name: "Key of The Mansion"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6151
	AegisName: "Peice_Of_Great_Bradium"
	Name: "Giant Bradium Fragment"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6152
	AegisName: "Glittering_Crystal"
	Name: "Glittering Crystal"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6153
	AegisName: "Special_Exchange_Coupon"
	Name: "Special Exchange Ticket"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6154
	AegisName: "Broken_Horn_Pipe"
	Name: "Broken Horn Pipe"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6155
	AegisName: "Coke_Membership_Card"
	Name: "Member Card"
},
{
	Id: 6156
	AegisName: "Approval_Report"
	Name: "Approval Report"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6157
	AegisName: "Poring_Ticket"
	Name: "Poring Exchange Ticket"
},
{
	Id: 6158
	AegisName: "Drops_Ticket"
	Name: "Drops Exchange Ticket"
},
{
	Id: 6159
	AegisName: "Poporing_Ticket"
	Name: "Poporing Exchange Ticket"
},
{
	Id: 6160
	AegisName: "Lunatic_Ticket"
	Name: "Lunatic Exchange Ticket"
},
{
	Id: 6161
	AegisName: "Picky_Ticket"
	Name: "Picky Exchange Ticket"
},
{
	Id: 6162
	AegisName: "Pecopeco_Ticket"
	Name: "Peco Peco Exchange Ticket"
},
{
	Id: 6163
	AegisName: "Savage_Baby_Ticket"
	Name: "Savage Babe Exchange Ticket"
},
{
	Id: 6164
	AegisName: "Spore_Ticket"
	Name: "Spore Exchange Ticket"
},
{
	Id: 6165
	AegisName: "Poison_Spore_Ticket"
	Name: "Poison Spore Exchange Ticket"
},
{
	Id: 6166
	AegisName: "Chonchon_Ticket"
	Name: "Chonchon Exchange Ticket"
},
{
	Id: 6167
	AegisName: "Steel_Chonchon_Ticket"
	Name: "Steel Chonchon Exchange Ticket"
},
{
	Id: 6168
	AegisName: "Petit_Ticket"
	Name: "Sky Petite Exchange Ticket"
},
{
	Id: 6169
	AegisName: "Deviruchi_Ticket"
	Name: "Deviruchi Exchange Ticket"
},
{
	Id: 6170
	AegisName: "Isis_Ticket"
	Name: "Isis Exchange Ticket"
},
{
	Id: 6171
	AegisName: "Smokie_Ticket"
	Name: "Smokie Exchange Ticket"
},
{
	Id: 6172
	AegisName: "Dokebi_Ticket"
	Name: "Dokebi Exchange Ticket"
},
{
	Id: 6173
	AegisName: "Desert_Wolf_B_Ticket"
	Name: "Baby Desert Wolf Exchange Ticket"
},
{
	Id: 6174
	AegisName: "Yoyo_Ticket"
	Name: "Yoyo Exchange Ticket"
},
{
	Id: 6175
	AegisName: "Sohee_Ticket"
	Name: "Sohee Exchange Ticket"
},
{
	Id: 6176
	AegisName: "Rocker_Ticket"
	Name: "Rocker Exchange Ticket"
},
{
	Id: 6177
	AegisName: "Hunter_Fly_Ticket"
	Name: "Hunter Fly Exchange Ticket"
},
{
	Id: 6178
	AegisName: "Orc_Warrior_Ticket"
	Name: "Orc Warrior Exchange Ticket"
},
{
	Id: 6179
	AegisName: "Bapho_Jr_Ticket"
	Name: "Bapho Jr. Exchange Ticket"
},
{
	Id: 6180
	AegisName: "Munak_Ticket"
	Name: "Munak Exchange Ticket"
},
{
	Id: 6181
	AegisName: "Bongun_Ticket"
	Name: "Bongun Exchange Ticket"
},
{
	Id: 6182
	AegisName: "Goblin_Ticket"
	Name: "Christmas Goblin Exchange Ticket"
},
{
	Id: 6183
	AegisName: "Hardtack_Ticket"
	Name: "Rice Cake Exchange Ticket"
},
{
	Id: 6184
	AegisName: "Zherlthsh_Ticket"
	Name: "Zherlthsh Exchange Ticket"
},
{
	Id: 6185
	AegisName: "Alice_Ticket"
	Name: "Alice Exchange Ticket"
},
{
	Id: 6186
	AegisName: "Monkey_Wrench"
	Name: "Monkey Wrench"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 6187
	AegisName: "Blank_Card"
	Name: "Blank Card"
	Buy: 20
	Weight: 10
},
{
	Id: 6188
	AegisName: "Slot_Coupon"
	Name: "Slotting Advertisement"
	Buy: 20
	Weight: 10
},
{
	Id: 6189
	AegisName: "Magic_Book_FB"
	Name: "Spell Book (Fire Bolt)"
	BuyingStore: true
},
{
	Id: 6190
	AegisName: "Magic_Book_CB"
	Name: "Spell Book (Cold Bolt)"
	BuyingStore: true
},
{
	Id: 6191
	AegisName: "Magic_Book_LB"
	Name: "Spell Book (Lightening Bolt)"
	BuyingStore: true
},
{
	Id: 6192
	AegisName: "Magic_Book_SG"
	Name: "Spell Book (Storm Gust)"
	BuyingStore: true
},
{
	Id: 6193
	AegisName: "Magic_Book_LOV"
	Name: "Spell Book (Lord Of Vermilion)"
	BuyingStore: true
},
{
	Id: 6194
	AegisName: "Magic_Book_MS"
	Name: "Spell Book (Meteor Storm)"
	BuyingStore: true
},
{
	Id: 6195
	AegisName: "Magic_Book_CM"
	Name: "Spell Book (Comet)"
	BuyingStore: true
},
{
	Id: 6196
	AegisName: "Magic_Book_TV"
	Name: "Spell Book (Tetra Vortex)"
	BuyingStore: true
},
{
	Id: 6197
	AegisName: "Magic_Book_TS"
	Name: "Spell Book (Thunder Storm)"
	BuyingStore: true
},
{
	Id: 6198
	AegisName: "Magic_Book_JT"
	Name: "Spell Book (Jupitel Thunder)"
	BuyingStore: true
},
{
	Id: 6199
	AegisName: "Magic_Book_WB"
	Name: "Spell Book (Water Ball)"
	BuyingStore: true
},
{
	Id: 6200
	AegisName: "Magic_Book_HD"
	Name: "Spell Book (Heaven's Drive)"
	BuyingStore: true
},
{
	Id: 6201
	AegisName: "Magic_Book_ES"
	Name: "Spell Book (Earth Spike)"
	BuyingStore: true
},
{
	Id: 6202
	AegisName: "Magic_Book_ES_"
	Name: "Spell Book (Earth Strain)"
	BuyingStore: true
},
{
	Id: 6203
	AegisName: "Magic_Book_CL"
	Name: "Spell Book (Chain Lightning)"
	BuyingStore: true
},
{
	Id: 6204
	AegisName: "Magic_Book_CR"
	Name: "Spell Book (Crimson Rock)"
	BuyingStore: true
},
{
	Id: 6205
	AegisName: "Magic_Book_DL"
	Name: "Spell Book (Drain Life)"
	BuyingStore: true
},
{
	Id: 6206
	AegisName: "I_Love_You"
	Name: "I Love You"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6207
	AegisName: "Thank_You"
	Name: "Thank You"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6208
	AegisName: "I_Respect_You"
	Name: "I Respect You"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6209
	AegisName: "Glory_Of_Knights"
	Name: "Knight's Honor"
},
{
	Id: 6210
	AegisName: "Seed_Of_Horny_Plant"
	Name: "Seed Of Thorny Plant"
	Buy: 600
	Weight: 1
	BuyingStore: true
},
{
	Id: 6211
	AegisName: "Bloodsuck_Plant_Seed"
	Name: "Bloodsuck Plant Seed"
	Buy: 800
	Weight: 1
	BuyingStore: true
},
{
	Id: 6212
	AegisName: "Bomb_Mushroom_Spore"
	Name: "Bomb Mushroom Spore"
	Buy: 1000
	Weight: 1
	BuyingStore: true
},
{
	Id: 6213
	AegisName: "Explosive_Powder"
	Name: "Explosive Powder"
	Buy: 500
	Weight: 1
	BuyingStore: true
},
{
	Id: 6214
	AegisName: "Smoke_Powder"
	Name: "Smoke Powder"
	Buy: 500
	Weight: 1
	BuyingStore: true
},
{
	Id: 6215
	AegisName: "Tear_Gas"
	Name: "Tear Gas"
	Buy: 500
	Weight: 1
	BuyingStore: true
},
{
	Id: 6216
	AegisName: "Oil_Bottle"
	Name: "Oil Bottle"
	Buy: 1000
	Weight: 1
	BuyingStore: true
},
{
	Id: 6217
	AegisName: "Mandragora_Flowerpot"
	Name: "Mandragora Flowerpot"
	Buy: 2000
	Weight: 1
	BuyingStore: true
},
{
	Id: 6218
	AegisName: "Disin_Delivery_Box"
	Name: "Delivery_Daishin_Box"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6219
	AegisName: "Para_Team_Mark"
	Name: "Eden Group Mark"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6220
	AegisName: "Mysterious_Dyestuff"
	Name: "Mysterious Dyestuff"
	Weight: 10
},
{
	Id: 6221
	AegisName: "Mystic_Leaf_Cat_Ball"
	Name: "Mystic Leaf Cat Ball"
},
{
	Id: 6222
	AegisName: "Shining_Beads"
	Name: "Shining Beads"
	Buy: 20
},
{
	Id: 6223
	AegisName: "Carnium"
	Name: "Carnium"
	Buy: 2000
	Weight: 150
	BuyingStore: true
},
{
	Id: 6224
	AegisName: "Bradium"
	Name: "Bradium"
	Buy: 2000
	Weight: 150
	BuyingStore: true
},
{
	Id: 6225
	AegisName: "HD_Carnium"
	Name: "HD Carnium"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6226
	AegisName: "HD_Bradium"
	Name: "HD Bradium"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6228
	AegisName: "Guarantee_Weapon_9Up"
	Name: "Guarantee Weapon 9Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6229
	AegisName: "Guarantee_Weapon_8Up"
	Name: "Guarantee Weapon 8Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6230
	AegisName: "Guarantee_Weapon_7Up"
	Name: "Guarantee Weapon 7Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6231
	AegisName: "Guarantee_Weapon_6Up"
	Name: "Guarantee Weapon 6Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6232
	AegisName: "Guarantee_Armor_9Up"
	Name: "Guarantee Armor 9Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6233
	AegisName: "Guarantee_Armor_8Up"
	Name: "Guarantee Armor 8Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6234
	AegisName: "Guarantee_Armor_7Up"
	Name: "Guarantee Armor 7Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6235
	AegisName: "Guarantee_Armor_6Up"
	Name: "Guarantee Armor 6Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6236
	AegisName: "Blue_Card_7"
	Name: "Blue Card 7"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6237
	AegisName: "Guarana_Fruit"
	Name: "Guarana Fruit"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6238
	AegisName: "Guarantee_Weapon_11Up"
	Name: "Guarantee Weapon 11Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6239
	AegisName: "Guarantee_Armor_11Up"
	Name: "Guarantee Armor 11Up"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6240
	AegisName: "HD_Oridecon"
	Name: "Purified Oridecon"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6241
	AegisName: "HD_Elunium"
	Name: "Purified Elunium"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6242
	AegisName: "Midgard_Coin"
	Name: "Midgard Coin"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6243
	AegisName: "Exchange_Coupon"
	Name: "Exchange Coupon"
},
{
	Id: 6244
	AegisName: "Gun_Powder"
	Name: "Gun Powder"
	Buy: 10
	Weight: 1
	BuyingStore: true
},
{
	Id: 6245
	AegisName: "Black_Powder"
	Name: "Black Powder"
	Buy: 100
	Weight: 1
	BuyingStore: true
},
{
	Id: 6246
	AegisName: "Yellow_Powder"
	Name: "Yellow Powder"
	Buy: 100
	Weight: 1
	BuyingStore: true
},
{
	Id: 6247
	AegisName: "White_Powder"
	Name: "White Powder"
	Buy: 100
	Weight: 1
	BuyingStore: true
},
{
	Id: 6248
	AegisName: "Melange_Pot"
	Name: "Melange Pot"
	Buy: 600
	Weight: 10
	BuyingStore: true
},
{
	Id: 6249
	AegisName: "Savage_Meat"
	Name: "Savage Meat"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6250
	AegisName: "Cooking_Skewer"
	Name: "Cooking Skewer"
	Buy: 300
	Weight: 10
	BuyingStore: true
},
{
	Id: 6251
	AegisName: "Black_Charcoal"
	Name: "Black Charcoal"
	Buy: 300
	Weight: 10
	BuyingStore: true
},
{
	Id: 6252
	AegisName: "Wolf_Blood"
	Name: "Blood Of Wolf"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6253
	AegisName: "Cold_Ice"
	Name: "Cold Ice"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6254
	AegisName: "Beef_Head_Meat"
	Name: "Beef Head"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6255
	AegisName: "Large_Cookpot"
	Name: "Large Cookpot"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 6256
	AegisName: "Ice_Fragment"
	Name: "Ice Piece"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6257
	AegisName: "Ice_Crystal"
	Name: "Ice Crystal"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6258
	AegisName: "Comodo_Tropic_Fruit"
	Name: "Comodo Tropical Fruit"
	Buy: 800
	Weight: 10
	BuyingStore: true
},
{
	Id: 6259
	AegisName: "Drocera_Tentacle"
	Name: "Drosera Tentacle"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6260
	AegisName: "Petti_Tail"
	Name: "Petite's Tail"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6261
	AegisName: "Fine_Noodle"
	Name: "Fine Noodles"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 6262
	AegisName: "Cool_Gravy"
	Name: "Cool Gravy"
	Buy: 400
	Weight: 10
	BuyingStore: true
},
{
	Id: 6263
	AegisName: "Coconut_Fruit"
	Name: "Coconut Fruit"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6264
	AegisName: "Melon"
	Name: "Melon"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6265
	AegisName: "Pineapple"
	Name: "Pineapple"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 6266
	AegisName: "Cheat_Key"
	Name: "Key Of Deception"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6267
	AegisName: "Virtual_Key"
	Name: "Key Of Illusion"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6268
	AegisName: "Mirth_Key"
	Name: "Key Of Gaiety"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6269
	AegisName: "Master_Brush"
	Name: "A Master's Blush"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6270
	AegisName: "Mins_Picture"
	Name: "A Picture Of Minstrel Song"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6271
	AegisName: "Mins_Receipt"
	Name: "Receipt"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6272
	AegisName: "Experiment_Seed"
	Name: "Experiment Seed"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6273
	AegisName: "Altered_Seed"
	Name: "Seed For Experiment"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6274
	AegisName: "Saint_Cloth_Piece"
	Name: "A Piece Of Cloth Of A Saint"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6275
	AegisName: "King_Shield"
	Name: "Shield Of King"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6276
	AegisName: "Clear_Reagent"
	Name: "Clear Reagent"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6277
	AegisName: "Red_Reagent"
	Name: "Red Reagent"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6278
	AegisName: "Black_Reagent"
	Name: "Black Reagent"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6279
	AegisName: "Apple_Bomb_CB"
	Name: "Apple Bomb Guidebook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6280
	AegisName: "Pinepple_Bomb_CB"
	Name: "Pineapple Bomb Guidebook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6281
	AegisName: "Coconut_Bomb_CB"
	Name: "Coconut Fruit Bomb Guidebook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6282
	AegisName: "Melon_Bomb_CB"
	Name: "Melon Bomb Guidebook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6283
	AegisName: "Banana_Bomb_CB"
	Name: "Banana Bomb Guidebook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6284
	AegisName: "Plant_Genetic_Grow"
	Name: "How To Grow Plant Genes"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6285
	AegisName: "Quality_Potion_Book"
	Name: "Manual: How To Make High Quality Potion"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 6286
	AegisName: "F_Max_Weight_Up_Scroll"
	Name: "F Max Weight Up Scroll"
	Weight: 10
},
{
	Id: 6287
	AegisName: "F_Clothing_Dye_Coupon"
	Name: "F Clothing Dye Coupon"
},
{
	Id: 6288
	AegisName: "F_Happy_Box"
	Name: "F Happy Box"
	Buy: 10
},
{
	Id: 6289
	AegisName: "F_Mysterious_Dyestuff"
	Name: "F Mysterious Dyestuff"
	Weight: 10
},
{
	Id: 6290
	AegisName: "F_New_Style_Coupon"
	Name: "F New Style Coupon"
	Weight: 10
},
{
	Id: 6291
	AegisName: "F_Enriched_Elunium"
	Name: "F Enriched Elunium"
	Buy: 2
	Weight: 10
},
{
	Id: 6292
	AegisName: "F_Enriched_Oridecon"
	Name: "F Enriched Oridecon"
	Buy: 2
	Weight: 10
},
{
	Id: 6293
	AegisName: "F_Token_Of_Siegfried"
	Name: "F Token Of Siegfried"
	Buy: 2
	Weight: 10
},
{
	Id: 6294
	AegisName: "F_Marriage_Covenant"
	Name: "F Marriage Covenant"
	Weight: 10
},
{
	Id: 6295
	AegisName: "F_Clothing_Dye_Coupon2"
	Name: "F Clothing Dye Coupon2"
},
{
	Id: 6296
	AegisName: "RF_Taining_Notice"
	Name: "Training Notice"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6297
	AegisName: "Bottle_To_Throw"
	Name: "Throwing Bottle"
	Buy: 300
	Weight: 10
	BuyingStore: true
},
{
	Id: 6298
	AegisName: "Pumpkin_Head_Crushed"
	Name: "Pumpkin Head Crushed"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6299
	AegisName: "Worn_Cloth_Piece"
	Name: "Worn Cloth Piece"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6300
	AegisName: "J_7Draw"
	Name: "event"
	Buy: 20
	Weight: 10
},
{
	Id: 6301
	AegisName: "J_Semi_Draw"
	Name: "event"
	Buy: 20
	Weight: 10
},
{
	Id: 6302
	AegisName: "GM_Handwriting"
	Name: "GM Handwriting"
	Buy: 20004
},
{
	Id: 6303
	AegisName: "Changed_Hydra_Ball"
	Name: "Changed Hydra Ball"
},
{
	Id: 6304
	AegisName: "Sapa_Feat_Cert"
	Name: "Proof Of Sapha's Honor"
},
{
	Id: 6305
	AegisName: "Frozen_Skin_Piece"
	Name: "Frozen Piece Of Skin"
},
{
	Id: 6306
	AegisName: "Solid_Bloodstain"
	Name: "Hard Bloodstain"
},
{
	Id: 6307
	AegisName: "Suspicious_Magic_Stone"
	Name: "Cursed Magical Stone"
},
{
	Id: 6308
	AegisName: "Unidentified_Relic"
	Name: "Unidentified Relic"
},
{
	Id: 6309
	AegisName: "E_Max_Weight_Up_Scroll"
	Name: "E Max Weight Up Scroll"
	Weight: 10
},
{
	Id: 6310
	AegisName: "E_Cloth_Dye_Coupon"
	Name: "E Cloth Dye Coupon"
},
{
	Id: 6311
	AegisName: "E_Happy_Box"
	Name: "E Happy Box"
	Buy: 10
},
{
	Id: 6312
	AegisName: "E_Mysterious_Dyestuff"
	Name: "E Mysterious Dyestuff"
	Weight: 10
},
{
	Id: 6313
	AegisName: "E_New_Style_Coupon"
	Name: "E New Style Coupon"
	Weight: 10
},
{
	Id: 6314
	AegisName: "E_Enriched_Elunium"
	Name: "E Enriched Elunium"
	Buy: 2
	Weight: 10
},
{
	Id: 6315
	AegisName: "E_Enriched_Oridecon"
	Name: "E Enriched Oridecon"
	Buy: 2
	Weight: 10
},
{
	Id: 6316
	AegisName: "E_Token_Of_Siegfried"
	Name: "E Token Of Siegfried"
	Buy: 2
	Weight: 10
},
{
	Id: 6317
	AegisName: "E_Marriage_Covenant"
	Name: "E Marriage Covenant"
	Weight: 10
},
{
	Id: 6318
	AegisName: "E_Cloth_Dye_Coupon2"
	Name: "E Cloth Dye Coupon2"
},
{
	Id: 6319
	AegisName: "Small_Bradium"
	Name: "Small Bradium"
	Buy: 324
	Weight: 10
},
{
	Id: 6320
	AegisName: "Premium_Reset_Stone"
	Name: "Premium Reset Stone"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6321
	AegisName: "Rakehorn_Helm"
	Name: "Rakehorn Helm"
	Buy: 822
	Weight: 10
	BuyingStore: true
},
{
	Id: 6322
	AegisName: "Antler_Helm"
	Name: "Antler Helmet"
	Buy: 800
	Weight: 10
	BuyingStore: true
},
{
	Id: 6323
	AegisName: "Twinhorn_Helm"
	Name: "Two-Horned Helmet"
	Buy: 728
	Weight: 10
	BuyingStore: true
},
{
	Id: 6324
	AegisName: "Singlehorn_Helm"
	Name: "Single Horned Helmet"
	Buy: 702
	Weight: 10
	BuyingStore: true
},
{
	Id: 6325
	AegisName: "White_Spider_Limb"
	Name: "White Spider Limb"
	Buy: 1004
	Weight: 10
	BuyingStore: true
},
{
	Id: 6326
	AegisName: "Queen_Wing_Piece"
	Name: "Queen Wing Piece"
	Buy: 1630
	Weight: 10
	BuyingStore: true
},
{
	Id: 6328
	AegisName: "Calender_January"
	Name: "Calender January"
	Buy: 20
},
{
	Id: 6329
	AegisName: "Calender_February"
	Name: "Calender February"
	Buy: 20
},
{
	Id: 6330
	AegisName: "Calender_March"
	Name: "Calender March"
	Buy: 20
},
{
	Id: 6331
	AegisName: "Calender_April"
	Name: "Calender April"
	Buy: 20
},
{
	Id: 6332
	AegisName: "Calender_May"
	Name: "Calender May"
	Buy: 20
},
{
	Id: 6333
	AegisName: "Calender_June"
	Name: "Calender June"
	Buy: 20
},
{
	Id: 6334
	AegisName: "Calender_July"
	Name: "Calender July"
	Buy: 20
},
{
	Id: 6335
	AegisName: "Calender_August"
	Name: "Calender August"
	Buy: 20
},
{
	Id: 6336
	AegisName: "Calender_September"
	Name: "Calender September"
	Buy: 20
},
{
	Id: 6337
	AegisName: "Calender_October"
	Name: "Calender October"
	Buy: 20
},
{
	Id: 6338
	AegisName: "Calender_November"
	Name: "Calender November"
	Buy: 20
},
{
	Id: 6339
	AegisName: "Calender_December"
	Name: "Calender December"
	Buy: 20
},
{
	Id: 6340
	AegisName: "Fade_Notation_Green"
	Name: "Fade Notation Green"
	Weight: 10
},
{
	Id: 6341
	AegisName: "Fade_Notation_Red"
	Name: "Fade Notation Red"
	Weight: 10
},
{
	Id: 6342
	AegisName: "Fade_Notation_Purple"
	Name: "Fade Notation Purple"
	Weight: 10
},
{
	Id: 6343
	AegisName: "Fade_Notation_Blue"
	Name: "Fade Notation Blue"
	Weight: 10
},
{
	Id: 6344
	AegisName: "Muscle_Story"
	Name: "Muscle Story"
},
{
	Id: 6345
	AegisName: "Love_Ball"
	Name: "Love Ball"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6346
	AegisName: "Seagate_Mark"
	Name: "Seagate Mark"
},
{
	Id: 6347
	AegisName: "Bless_Word_Paper1"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6348
	AegisName: "Bless_Word_Paper2"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6349
	AegisName: "Bless_Word_Paper3"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6350
	AegisName: "Bless_Word_Paper4"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6351
	AegisName: "Bless_Word_Paper5"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6352
	AegisName: "Bless_Word_Paper6"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6353
	AegisName: "Bless_Word_Paper7"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6354
	AegisName: "Bless_Word_Paper8"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6355
	AegisName: "Bless_Word_Paper9"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6356
	AegisName: "Bless_Word_Paper10"
	Name: "Bless Word Paper"
	Buy: 4020
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6357
	AegisName: "Fortune_Cookie_Fail"
	Name: "Fortune Cookie Fail"
	Buy: 4020
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6358
	AegisName: "Free_Cash_Coupon"
	Name: "Free Cash Coupon"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6359
	AegisName: "Guidebook_Exchange"
	Name: "Guidebook Exchange"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6360
	AegisName: "Scarlet_Pts"
	Name: "Scarlet Point"
	Buy: 100
	Weight: 5
	BuyingStore: true
},
{
	Id: 6361
	AegisName: "Indigo_Pts"
	Name: "Indigo Point"
	Buy: 100
	Weight: 5
	BuyingStore: true
},
{
	Id: 6362
	AegisName: "Yellow_Wish_Pts"
	Name: "Yellow Wish Point"
	Buy: 100
	Weight: 5
	BuyingStore: true
},
{
	Id: 6363
	AegisName: "Lime_Green_Pts"
	Name: "Lime Green Point"
	Buy: 100
	Weight: 5
	BuyingStore: true
},
{
	Id: 6369
	AegisName: "Amatsu_Bead_A"
	Name: "Amatsu Bead A"
},
{
	Id: 6370
	AegisName: "Amatsu_Bead_Ma"
	Name: "Amatsu Bead Ma"
},
{
	Id: 6371
	AegisName: "Amatsu_Bead_Tsu"
	Name: "Amatsu Bead Tsu"
},
{
	Id: 6372
	AegisName: "Amatsu_Bead_Jam"
	Name: "Amatsu Bead Jam"
},
{
	Id: 6373
	AegisName: "Amatsu_Bead_Bo"
	Name: "Amatsu Bead Bo"
},
{
	Id: 6374
	AegisName: "Amatsu_Bead_Ree"
	Name: "Amatsu Bead Ree"
},
{
	Id: 6375
	AegisName: "Amatsu_Bead_"
	Name: "Amatsu Bead !"
},
{
	Id: 6376
	AegisName: "KVM_Badge"
	Name: "KVM Badge"
},
{
	Id: 6377
	AegisName: "Buy_Market_Permit"
	Name: "Buy Market Permit"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6378
	AegisName: "Winning_Mark"
	Name: "Winning Mark"
},
{
	Id: 6379
	AegisName: "Card_Coin"
	Name: "7Star Board"
	Buy: 20
	Weight: 10
},
{
	Id: 6380
	AegisName: "Mora_Coin"
	Name: "Mora Coin"
	Buy: 20
},
{
	Id: 6381
	AegisName: "Field_Shovel"
	Name: "Field Shovel"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6382
	AegisName: "Urn"
	Name: "Urn"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 6383
	AegisName: "Clue_Of_Lope"
	Name: "Ropewa Clues"
	Buy: 20
	Weight: 10
},
{
	Id: 6384
	AegisName: "Ring_Of_Lope"
	Name: "Ring Of Lope"
},
{
	Id: 6385
	AegisName: "Research_Tool_Bag"
	Name: "Research Tool Bag"
},
{
	Id: 6386
	AegisName: "Bathtub_R_Sample"
	Name: "Bathtub R Sample"
	Buy: 20
},
{
	Id: 6387
	AegisName: "Teeth_Sample"
	Name: "Teeth Sample"
	Buy: 20
},
{
	Id: 6388
	AegisName: "Scale_Sample"
	Name: "Scale Sample"
	Buy: 20
},
{
	Id: 6389
	AegisName: "Puddle_R_Sample"
	Name: "Pool Sample"
	Buy: 20
},
{
	Id: 6390
	AegisName: "Small_Pocket"
	Name: "Small Pocket"
	Buy: 20
},
{
	Id: 6391
	AegisName: "Splendid_Supply_Kit"
	Name: "Splendid Supply Kit"
	Buy: 20
	Weight: 2000
},
{
	Id: 6392
	AegisName: "Bradium_Box"
	Name: "Bradium Box"
	Buy: 20
	Weight: 10
},
{
	Id: 6393
	AegisName: "Round_Feather"
	Name: "Round Feather"
	Buy: 700
	Weight: 10
	BuyingStore: true
},
{
	Id: 6394
	AegisName: "Golden_Feather"
	Name: "Golden Feather"
	Buy: 650
	Weight: 10
	BuyingStore: true
},
{
	Id: 6395
	AegisName: "Angel_Magic_Power"
	Name: "Angel Magic Power"
	Buy: 820
	Weight: 10
	BuyingStore: true
},
{
	Id: 6396
	AegisName: "Auger_Of_Spirit"
	Name: "Auger Of Spirit"
	Weight: 10
},
{
	Id: 6413
	AegisName: "New_Insurance"
	Name: "New Insurance"
	Buy: 2
	Weight: 10
},
{
	Id: 6415
	AegisName: "Strange_Embryo"
	Name: "Strange Embryo"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6493
	AegisName: "Makibishi"
	Name: "Makibishi"
	Buy: 30
	Weight: 1
},
{
	Id: 6498
	AegisName: "Jejellopy"
	Name: "Jejellopy"
	Buy: 200
	Weight: 10
},
{
	Id: 6507
	AegisName: "Evil_Bone"
	Name: "Evil Spirit Bone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6510
	AegisName: "Elegant_Flower"
	Name: "Elegant Flower"
	Buy: 300
	Weight: 10
},
{
	Id: 6512
	AegisName: "Charm_Fire"
	Name: "Charm Fire"
	Buy: 100
	Weight: 1
},
{
	Id: 6513
	AegisName: "Charm_Ice"
	Name: "Charm Ice"
	Buy: 100
	Weight: 1
},
{
	Id: 6514
	AegisName: "Charm_Wind"
	Name: "Charm Wind"
	Buy: 100
	Weight: 1
},
{
	Id: 6515
	AegisName: "Charm_Earth"
	Name: "Charm Earth"
	Buy: 100
	Weight: 1
},
{
	Id: 6520
	AegisName: "Lost_Belongings"
	Name: "Lost Belongings"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6542
	AegisName: "Star_Shape_Mushroom"
	Name: "Star Shape Mushroom"
	Buy: 20
	Weight: 100
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 6707
	AegisName: "Cash_Hair_Coupon"
	Name: "Cash Hair Coupon"
	Weight: 10
},
{
	Id: 7001
	AegisName: "Mould_Powder"
	Name: "Mould Powder"
	Buy: 466
	Weight: 10
	BuyingStore: true
},
{
	Id: 7002
	AegisName: "Ogre_Tooth"
	Name: "Ogre Tooth"
	Buy: 658
	Weight: 10
	BuyingStore: true
},
{
	Id: 7003
	AegisName: "Anolian_Skin"
	Name: "Anolian Skin"
	Buy: 968
	Weight: 10
	BuyingStore: true
},
{
	Id: 7004
	AegisName: "Mud_Lump"
	Name: "Mud Lump"
	Buy: 876
	Weight: 10
	BuyingStore: true
},
{
	Id: 7005
	AegisName: "Skull"
	Name: "Skull"
	Buy: 1044
	Weight: 10
	BuyingStore: true
},
{
	Id: 7006
	AegisName: "Wing_Of_Red_Bat"
	Name: "Wing of Red Bat"
	Buy: 168
	Weight: 10
	BuyingStore: true
},
{
	Id: 7007
	AegisName: "Claw_Of_Rat"
	Name: "Claw of Rat"
	Buy: 748
	Weight: 10
	BuyingStore: true
},
{
	Id: 7008
	AegisName: "Stiff_Horn"
	Name: "Stiff Horn"
	Buy: 636
	Weight: 10
	BuyingStore: true
},
{
	Id: 7009
	AegisName: "Glitter_Shell"
	Name: "Glitter Shell"
	Buy: 528
	Weight: 10
	BuyingStore: true
},
{
	Id: 7010
	AegisName: "Tail_Of_Steel_Scorpion"
	Name: "Tail of Steel Scorpion"
	Buy: 548
	Weight: 10
	BuyingStore: true
},
{
	Id: 7011
	AegisName: "Claw_Of_Monkey"
	Name: "Claw of Monkey"
	Buy: 466
	Weight: 10
	BuyingStore: true
},
{
	Id: 7012
	AegisName: "Tough_Scalelike_Stem"
	Name: "Tough Scalelike Stem"
	Buy: 412
	Weight: 10
	BuyingStore: true
},
{
	Id: 7013
	AegisName: "Coral_Reef"
	Name: "Coral Reef"
	Buy: 772
	Weight: 10
	BuyingStore: true
},
{
	Id: 7014
	AegisName: "Old_Portrait"
	Name: "Old Portrait"
	Buy: 1500
	Weight: 100
	BuyingStore: true
},
{
	Id: 7015
	AegisName: "Bookclip_In_Memory"
	Name: "Bookclip in Memory"
	Buy: 3000
	Weight: 20
	BuyingStore: true
},
{
	Id: 7016
	AegisName: "Spoon_Stub"
	Name: "Spoon Stub"
	Buy: 2500
	Weight: 20
	BuyingStore: true
},
{
	Id: 7017
	AegisName: "Executioners_Mitten"
	Name: "Executioner's Mitten"
	Buy: 4500
	Weight: 30
	BuyingStore: true
},
{
	Id: 7018
	AegisName: "Young_Twig"
	Name: "Young Twig"
	Buy: 50
	Weight: 10
	BuyingStore: true
},
{
	Id: 7019
	AegisName: "Lokis_Whispers"
	Name: "Loki's Whispers"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7020
	AegisName: "Mothers_Nightmare"
	Name: "Mother's Nightmare"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7021
	AegisName: "Foolishness_Of_Blind"
	Name: "Foolishness of the Blind"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7022
	AegisName: "Old_Hilt"
	Name: "Old Hilt"
	Buy: 150
	Weight: 30
	BuyingStore: true
},
{
	Id: 7023
	AegisName: "Blade_Lost_In_Darkness"
	Name: "Blade Lost in Darkness"
	Buy: 12000
	Weight: 40
	BuyingStore: true
},
{
	Id: 7024
	AegisName: "Bloody_Edge"
	Name: "Bloody Edge"
	Buy: 10000
	Weight: 40
	BuyingStore: true
},
{
	Id: 7025
	AegisName: "Lucifers_Lament"
	Name: "Lucifer's Lament"
	Buy: 30000
	Weight: 50
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7026
	AegisName: "Key_Of_Clock_Tower"
	Name: "Key of Clock Tower"
	Buy: 100
	Weight: 30
	BuyingStore: true
},
{
	Id: 7027
	AegisName: "Underground_Key"
	Name: "Key of Underground"
	Buy: 100
	Weight: 30
	BuyingStore: true
},
{
	Id: 7028
	AegisName: "Invite_For_Duel"
	Name: "Invite for Duel"
},
{
	Id: 7029
	AegisName: "Admission_For_Duel"
	Name: "Admission for Duel"
},
{
	Id: 7030
	AegisName: "Claw_Of_Desert_Wolf"
	Name: "Claw of Desert Wolf"
	Buy: 208
	Weight: 10
	BuyingStore: true
},
{
	Id: 7031
	AegisName: "Old_Frying_Pan"
	Name: "Old Frying Pan"
	Buy: 196
	Weight: 10
	BuyingStore: true
},
{
	Id: 7032
	AegisName: "Piece_Of_Egg_Shell"
	Name: "Piece of Egg Shell"
	Buy: 168
	Weight: 10
	BuyingStore: true
},
{
	Id: 7033
	AegisName: "Poison_Spore"
	Name: "Poison Spore"
	Buy: 114
	Weight: 10
	BuyingStore: true
},
{
	Id: 7034
	AegisName: "Red_Socks_With_Holes"
	Name: "Red Stocking"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7035
	AegisName: "Matchstick"
	Name: "Matchstick"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7036
	AegisName: "Fang_Of_Garm"
	Name: "Fang of Hatii"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7037
	AegisName: "Trade_Coupon"
	Name: "Coupon"
	Buy: 100
	Weight: 10
},
{
	Id: 7038
	AegisName: "Yarn"
	Name: "Yarn"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7039
	AegisName: "Novice_Nametag"
	Name: "Newbie Tag"
	Weight: 10
},
{
	Id: 7040
	AegisName: "Megaphone"
	Name: "Megaphone"
	Buy: 1
	Weight: 10
},
{
	Id: 7041
	AegisName: "Fine_Grit"
	Name: "Fine Grit"
	Buy: 120
	Weight: 10
	BuyingStore: true
},
{
	Id: 7042
	AegisName: "Leather_Bag_Of_Infinity"
	Name: "Leather Bag of Infinity"
	Buy: 1
	Weight: 10
},
{
	Id: 7043
	AegisName: "Fine_Sand"
	Name: "Fine Sand"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7044
	AegisName: "Vigorgra"
	Name: "Vigorgra"
	Buy: 1
	Weight: 10
},
{
	Id: 7045
	AegisName: "Magic_Paint"
	Name: "Magic Paint"
	Buy: 1
	Weight: 10
},
{
	Id: 7046
	AegisName: "Cart_Parts"
	Name: "Cart Parts"
	Buy: 1
	Weight: 10
},
{
	Id: 7047
	AegisName: "Alices_Apron"
	Name: "Alice's Apron"
	Buy: 2424
	Weight: 10
	BuyingStore: true
},
{
	Id: 7048
	AegisName: "Talon_Of_Griffin"
	Name: "Talon of Griffon"
	Buy: 5418
	Weight: 10
	BuyingStore: true
},
{
	Id: 7049
	AegisName: "Stone"
	Name: "Stone"
	Weight: 30
	BuyingStore: true
},
{
	Id: 7050
	AegisName: "Cotton_Mat"
	Name: "Cotton Mat"
	Buy: 100
	Weight: 10
},
{
	Id: 7051
	AegisName: "Silk_Mat"
	Name: "Silk Mat"
	Buy: 100
	Weight: 10
},
{
	Id: 7052
	AegisName: "Old_Magazine"
	Name: "Old Papers"
	Buy: 100
	Weight: 10
},
{
	Id: 7053
	AegisName: "Cyfar"
	Name: "Cyfar"
	Buy: 772
	Weight: 10
	BuyingStore: true
},
{
	Id: 7054
	AegisName: "Brigan"
	Name: "Brigan"
	Buy: 746
	Weight: 10
	BuyingStore: true
},
{
	Id: 7055
	AegisName: "Animal_Pooopoo"
	Name: "Animal Poop"
	Buy: 100
	Weight: 50
	BuyingStore: true
},
{
	Id: 7056
	AegisName: "Payroll_Of_Kafra"
	Name: "Payment Statement for Kafra Employee"
	Buy: 1
	Weight: 50
	BuyingStore: true
},
{
	Id: 7057
	AegisName: "Gallar_Horn"
	Name: "Gjallar"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7058
	AegisName: "Gullraifnir"
	Name: "Gleipnir"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7059
	AegisName: "Cargo_Free_Ticket"
	Name: "Free Ticket for Kafra Storage"
	Buy: 1
},
{
	Id: 7060
	AegisName: "Warp_Free_Ticket"
	Name: "Free Ticket for Kafra Transportation"
	Buy: 1
},
{
	Id: 7061
	AegisName: "Cart_Free_Ticket"
	Name: "Free Ticket for the Cart Service"
	Buy: 1
},
{
	Id: 7062
	AegisName: "Turtle_Shell_"
	Name: "Broken Turtle Shell"
	Buy: 280
	Weight: 10
},
{
	Id: 7063
	AegisName: "Soft_Feather"
	Name: "Soft Feather"
	Buy: 280
	Weight: 10
	BuyingStore: true
},
{
	Id: 7064
	AegisName: "Dragon_Fly_Wing"
	Name: "Wing of Dragonfly"
	Buy: 520
	Weight: 10
	BuyingStore: true
},
{
	Id: 7065
	AegisName: "Sea_Otter_Leather"
	Name: "Sea-Otter Fur"
	Buy: 820
	Weight: 10
	BuyingStore: true
},
{
	Id: 7066
	AegisName: "Ice_Piece"
	Name: "Ice Cubic"
	Buy: 660
	Weight: 10
	BuyingStore: true
},
{
	Id: 7067
	AegisName: "Stone_Piece"
	Name: "Stone Fragment"
	Buy: 640
	Weight: 10
	BuyingStore: true
},
{
	Id: 7068
	AegisName: "Burn_Tree"
	Name: "Burnt Tree"
	Buy: 722
	Weight: 10
	BuyingStore: true
},
{
	Id: 7069
	AegisName: "Broken_Armor_Piece"
	Name: "Destroyed Armor"
	Buy: 1042
	Weight: 10
	BuyingStore: true
},
{
	Id: 7070
	AegisName: "Broken_Shell"
	Name: "Broken Shell"
	Buy: 900
	Weight: 10
	BuyingStore: true
},
{
	Id: 7071
	AegisName: "Tatters_Clothes"
	Name: "Tattered Clothes"
	Buy: 1280
	Weight: 10
	BuyingStore: true
},
{
	Id: 7072
	AegisName: "Rust_Suriken"
	Name: "Old Shuriken"
	Buy: 1780
	Weight: 10
	BuyingStore: true
},
{
	Id: 7073
	AegisName: "Jewel_Of_Prayer"
	Name: "Freya's Jewel"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7074
	AegisName: "Iron_Glove"
	Name: "Thor's Gauntlets"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7075
	AegisName: "Iron_Maiden"
	Name: "Iron Maiden"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7076
	AegisName: "Mystery_Wheel"
	Name: "Wheel of the Unknown"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7077
	AegisName: "Silver_Fancy"
	Name: "Silver Ornament"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7078
	AegisName: "Anger_Of_Valkurye"
	Name: "Wrath of Valkyrie"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7079
	AegisName: "Feather_Of_Angel"
	Name: "Feather of Angel Wing"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7080
	AegisName: "Foot_Step_Of_Cat"
	Name: "Cat Tread"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7081
	AegisName: "Beard_Of_Women"
	Name: "Woman's Moustache"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7082
	AegisName: "Root_Of_Stone"
	Name: "Root of Stone"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7083
	AegisName: "Soul_Of_Fish"
	Name: "Spirit of Fish"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7084
	AegisName: "Saliva_Of_Bird"
	Name: "Sputum of Bird"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7085
	AegisName: "Tendon_Of_Bear"
	Name: "Sinew of Bear"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7086
	AegisName: "Symbol_Of_Sun"
	Name: "Emblem of the Sun God"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7087
	AegisName: "Breath_Of_Soul"
	Name: "Breath of Spirit"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7088
	AegisName: "Crystal_Of_Snow"
	Name: "Snow Crystal"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7089
	AegisName: "Indication_Of_Tempest"
	Name: "Omen of Tempest"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7090
	AegisName: "Slilince_Wave"
	Name: "Ripple"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7091
	AegisName: "Rough_Billows"
	Name: "Billow"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7092
	AegisName: "Air_Stream"
	Name: "Drifting Air"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7093
	AegisName: "Wheel"
	Name: "Cogwheel"
	Buy: 1512
	Weight: 10
	BuyingStore: true
},
{
	Id: 7094
	AegisName: "Mystery_Piece"
	Name: "Fragment"
	Buy: 1344
	Weight: 10
	BuyingStore: true
},
{
	Id: 7095
	AegisName: "Broken_Steel_Piece"
	Name: "Metal Fragment"
	Buy: 1075
	Weight: 10
	BuyingStore: true
},
{
	Id: 7096
	AegisName: "Cold_Magma"
	Name: "Lava"
	Buy: 1109
	Weight: 10
	BuyingStore: true
},
{
	Id: 7097
	AegisName: "Burning_Heart"
	Name: "Burning Heart"
	Buy: 924
	Weight: 10
	BuyingStore: true
},
{
	Id: 7098
	AegisName: "Live_Coal"
	Name: "Live Coal"
	Buy: 638
	Weight: 10
	BuyingStore: true
},
{
	Id: 7099
	AegisName: "Old_Magic_Circle"
	Name: "Worn-out Magic Scroll"
	Buy: 773
	Weight: 10
	BuyingStore: true
},
{
	Id: 7100
	AegisName: "Sharp_Leaf"
	Name: "Sharp Leaf"
	Buy: 806
	Weight: 10
	BuyingStore: true
},
{
	Id: 7101
	AegisName: "Peco_Wing_Feather"
	Name: "Peco Peco Feather"
	Buy: 454
	Weight: 10
	BuyingStore: true
},
{
	Id: 7102
	AegisName: "Hideous_Dream"
	Name: "Nightmare"
	Buy: 1075
	Weight: 10
	BuyingStore: true
},
{
	Id: 7103
	AegisName: "Unknown_Liquid_Bottle"
	Name: "Unknown Liquid Bottle"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 7104
	AegisName: "Fake_Angel_Wing"
	Name: "False Angel Wing"
	Buy: 756
	Weight: 10
	BuyingStore: true
},
{
	Id: 7105
	AegisName: "Fake_Angel_Loop"
	Name: "False Heaven Ring"
	Buy: 924
	Weight: 10
	BuyingStore: true
},
{
	Id: 7106
	AegisName: "Goats_Horn"
	Name: "Antelope Horn"
	Buy: 672
	Weight: 10
	BuyingStore: true
},
{
	Id: 7107
	AegisName: "Gaoats_Skin"
	Name: "Antelope Skin"
	Buy: 756
	Weight: 10
	BuyingStore: true
},
{
	Id: 7108
	AegisName: "Boroken_Shiled_Piece"
	Name: "Piece of Shield"
	Buy: 1680
	Weight: 10
	BuyingStore: true
},
{
	Id: 7109
	AegisName: "Shine_Spear_Blade"
	Name: "Shining Spear Blade"
	Buy: 840
	Weight: 10
	BuyingStore: true
},
{
	Id: 7110
	AegisName: "Vroken_Sword"
	Name: "Broken Sword"
	Buy: 588
	Weight: 10
	BuyingStore: true
},
{
	Id: 7111
	AegisName: "Smooth_Paper"
	Name: "Slick Paper"
	Buy: 706
	Weight: 10
	BuyingStore: true
},
{
	Id: 7112
	AegisName: "Fright_Paper_Blade"
	Name: "Sharp Paper"
	Buy: 907
	Weight: 10
	BuyingStore: true
},
{
	Id: 7113
	AegisName: "Broken_Pharaoh_Symbol"
	Name: "Broken Pharaoh Emblem"
	Buy: 2016
	Weight: 10
	BuyingStore: true
},
{
	Id: 7114
	AegisName: "Tutankhamens_Mask"
	Name: "Masque of Tutankhamen"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 7115
	AegisName: "Harpys_Feather"
	Name: "Harpy Feather"
	Buy: 1142
	Weight: 10
	BuyingStore: true
},
{
	Id: 7116
	AegisName: "Harpys_Claw"
	Name: "Harpy Talon"
	Buy: 1210
	Weight: 10
	BuyingStore: true
},
{
	Id: 7117
	AegisName: "Rent_Spell_Book"
	Name: "Torn Magic Book"
	Buy: 1142
	Weight: 10
	BuyingStore: true
},
{
	Id: 7118
	AegisName: "Rent_Scroll"
	Name: "Torn Scroll"
	Buy: 1361
	Weight: 10
	BuyingStore: true
},
{
	Id: 7119
	AegisName: "Spawns"
	Name: "Bacillus"
	Buy: 1025
	Weight: 10
	BuyingStore: true
},
{
	Id: 7120
	AegisName: "Burning_Horse_Shoe"
	Name: "Burning Horseshoe"
	Buy: 823
	Weight: 10
	BuyingStore: true
},
{
	Id: 7121
	AegisName: "Honey_Jar"
	Name: "Honey Pot"
	Buy: 622
	Weight: 10
	BuyingStore: true
},
{
	Id: 7122
	AegisName: "Hot_Hair"
	Name: "Burning Hair"
	Buy: 974
	Weight: 10
	BuyingStore: true
},
{
	Id: 7123
	AegisName: "Dragons_Skin"
	Name: "Dragon Skin"
	Buy: 1025
	Weight: 10
	BuyingStore: true
},
{
	Id: 7124
	AegisName: "Sand_Lump"
	Name: "Sand Clump"
	Buy: 706
	Weight: 10
	BuyingStore: true
},
{
	Id: 7125
	AegisName: "Scropions_Nipper"
	Name: "Scorpion Claw"
	Buy: 706
	Weight: 10
	BuyingStore: true
},
{
	Id: 7126
	AegisName: "Large_Jellopy"
	Name: "Large Jellopy"
	Buy: 840
	Weight: 10
	BuyingStore: true
},
{
	Id: 7127
	AegisName: "Alcol_Create_Book"
	Name: "Alcohol Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7128
	AegisName: "FireBottle_Create_Book"
	Name: "Bottle Grenade Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7129
	AegisName: "Acid_Create_Book"
	Name: "Acid Bottle Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7130
	AegisName: "Plant_Create_Book"
	Name: "Plant Bottle Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7131
	AegisName: "Mine_Create_Book"
	Name: "Marine Sphere Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7132
	AegisName: "Coating_Create_Book"
	Name: "Glistening Coat Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7133
	AegisName: "Slim_Potion_Create_Book"
	Name: "Condensed Potion Creation Guide"
	Buy: 240000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7134
	AegisName: "Medicine_Bowl"
	Name: "Medicine Bowl"
	Buy: 8
	Weight: 10
	BuyingStore: true
},
{
	Id: 7135
	AegisName: "Fire_Bottle"
	Name: "Bottle Grenade"
	Buy: 200
	Weight: 10
},
{
	Id: 7136
	AegisName: "Acid_Bottle"
	Name: "Acid Bottle"
	Buy: 200
	Weight: 10
},
{
	Id: 7137
	AegisName: "MenEater_Plant_Bottle"
	Name: "Plant Bottle"
	Buy: 200
	Weight: 10
},
{
	Id: 7138
	AegisName: "Mini_Bottle"
	Name: "Marine Sphere Bottle"
	Buy: 200
	Weight: 10
},
{
	Id: 7139
	AegisName: "Coating_Bottle"
	Name: "Glistening Coat"
	Buy: 200
	Weight: 10
},
{
	Id: 7140
	AegisName: "Seed_Of_Life"
	Name: "Seed of Life"
	Buy: 60000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7141
	AegisName: "Yggdrasilberry_Dew"
	Name: "Morning Dew of Yggdrasil"
	Buy: 20000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7142
	AegisName: "Germination_Breed"
	Name: "Embryo"
	Buy: 10
	Weight: 10
},
{
	Id: 7143
	AegisName: "Life_Force_Pot"
	Name: "Glass Tube"
	Buy: 5000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7144
	AegisName: "Normal_Potion_Book"
	Name: "Potion Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7145
	AegisName: "Rag_T_Shirts"
	Name: "Ragnarok T-shirt"
	Buy: 1
	Weight: 10
},
{
	Id: 7146
	AegisName: "Vacance_Ticket"
	Name: "Vacation Ticket"
	Buy: 1
	Weight: 10
},
{
	Id: 7147
	AegisName: "Jasmin"
	Name: "Jasmine"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7148
	AegisName: "Mother_Letter"
	Name: "Mother's Letter"
	Buy: 1
	Weight: 10
},
{
	Id: 7149
	AegisName: "Yellow_Plate"
	Name: "Yellow Plate"
	Buy: 220
	Weight: 10
	BuyingStore: true
},
{
	Id: 7150
	AegisName: "Bamboo_Cut"
	Name: "Piece of Bamboo"
	Buy: 310
	Weight: 10
	BuyingStore: true
},
{
	Id: 7151
	AegisName: "Oil_Paper"
	Name: "Oil Paper"
	Buy: 210
	Weight: 10
	BuyingStore: true
},
{
	Id: 7152
	AegisName: "Glossy_Hair"
	Name: "Glossy Hair"
	Buy: 340
	Weight: 10
	BuyingStore: true
},
{
	Id: 7153
	AegisName: "Old_Japaness_Clothes"
	Name: "Worn-out Kimono"
	Buy: 590
	Weight: 10
	BuyingStore: true
},
{
	Id: 7154
	AegisName: "Poison_Powder"
	Name: "Poisonous Powder"
	Buy: 160
	Weight: 10
	BuyingStore: true
},
{
	Id: 7155
	AegisName: "Poison_Toads_Skin"
	Name: "Poisonous Toad Skin"
	Buy: 280
	Weight: 10
	BuyingStore: true
},
{
	Id: 7156
	AegisName: "Broken_Shuriken"
	Name: "Broken Shuriken"
	Buy: 470
	Weight: 10
	BuyingStore: true
},
{
	Id: 7157
	AegisName: "Black_Mask"
	Name: "Dark Mask"
	Buy: 315
	Weight: 10
	BuyingStore: true
},
{
	Id: 7158
	AegisName: "Broken_Wine_Vessel"
	Name: "Broken Liquor Jar"
	Buy: 160
	Weight: 10
	BuyingStore: true
},
{
	Id: 7159
	AegisName: "Tengus_Nose"
	Name: "Tengu Nose"
	Buy: 400
	Weight: 10
	BuyingStore: true
},
{
	Id: 7160
	AegisName: "Lords_Passable_Ticket"
	Name: "Feudal Lord Permit"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7161
	AegisName: "Black_Bears_Skin"
	Name: "Black Bear Skin"
	Buy: 384
	Weight: 10
	BuyingStore: true
},
{
	Id: 7162
	AegisName: "Cloud_Piece"
	Name: "Cloud Crumb"
	Buy: 390
	Weight: 10
	BuyingStore: true
},
{
	Id: 7163
	AegisName: "Sharp_Feeler"
	Name: "Hard Feeler"
	Buy: 570
	Weight: 10
	BuyingStore: true
},
{
	Id: 7164
	AegisName: "Hard_Peach"
	Name: "Solid Peach"
	Buy: 400
	Weight: 10
	BuyingStore: true
},
{
	Id: 7165
	AegisName: "Limpid_Celestial_Robe"
	Name: "Transparent Celestial Robe"
	Buy: 650
	Weight: 10
	BuyingStore: true
},
{
	Id: 7166
	AegisName: "Soft_Silk_Cloth"
	Name: "Soft Silk"
	Buy: 1200
	Weight: 10
	BuyingStore: true
},
{
	Id: 7167
	AegisName: "Mystery_Iron_Bit"
	Name: "Strange Steel Piece"
	Buy: 430
	Weight: 10
	BuyingStore: true
},
{
	Id: 7168
	AegisName: "Great_Wing"
	Name: "Giant Butterfly Wing"
	Buy: 614
	Weight: 10
	BuyingStore: true
},
{
	Id: 7169
	AegisName: "Taegeuk_Plate"
	Name: "Ba Gua"
	Buy: 2800
	Weight: 10
	BuyingStore: true
},
{
	Id: 7170
	AegisName: "Tuxedo"
	Name: "Tuxedo"
	Buy: 43000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7171
	AegisName: "Leopard_Skin"
	Name: "Leopard Skin"
	Buy: 282
	Weight: 10
	BuyingStore: true
},
{
	Id: 7172
	AegisName: "Leopard_Talon"
	Name: "Leopard Claw"
	Buy: 290
	Weight: 10
	BuyingStore: true
},
{
	Id: 7173
	AegisName: "BurnBuster_Bag"
	Name: "iROGM02's Backpack"
	Weight: 10
},
{
	Id: 7174
	AegisName: "Packing_Ribbon"
	Name: "Wrapping Lace"
	Weight: 10
	BuyingStore: true
},
{
	Id: 7175
	AegisName: "Packing_Paper"
	Name: "Wrapping Paper"
	Weight: 10
	BuyingStore: true
},
{
	Id: 7176
	AegisName: "XMAS_Coupon"
	Name: "Royal Certificate"
	Weight: 10
},
{
	Id: 7177
	AegisName: "Part_Of_Stars_Sob"
	Name: "Crumb of Sobbing Starlight"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7178
	AegisName: "Stars_Sob"
	Name: "Sobbing Starlight"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7179
	AegisName: "Donation_Card"
	Name: "Proof of Donation"
	Weight: 10
},
{
	Id: 7180
	AegisName: "Introduction_Of_Mr_Han"
	Name: "Hahn Sukbong's Recommendation"
	Weight: 10
},
{
	Id: 7181
	AegisName: "Receipt_01"
	Name: "Receipt"
	Weight: 10
},
{
	Id: 7182
	AegisName: "Cacao"
	Name: "Cacao"
	Buy: 200
	Weight: 20
	BuyingStore: true
},
{
	Id: 7183
	AegisName: "Sister_Letter"
	Name: "Letter from Sister"
	Weight: 10
},
{
	Id: 7184
	AegisName: "Piano_Keyboard"
	Name: "Piano Key"
	Weight: 10
},
{
	Id: 7185
	AegisName: "Quiz_Ticket"
	Name: "Quiz Entry"
	Weight: 10
},
{
	Id: 7186
	AegisName: "Thin_Stem"
	Name: "Thin Trunk"
	Buy: 380
	Weight: 10
	BuyingStore: true
},
{
	Id: 7187
	AegisName: "Festival_Mask"
	Name: "Festival Mask"
	Buy: 100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7188
	AegisName: "Browny_Root"
	Name: "Brown Root"
	Buy: 560
	Weight: 10
	BuyingStore: true
},
{
	Id: 7189
	AegisName: "Heart_Of_Tree"
	Name: "Wooden Heart"
	Buy: 680
	Weight: 10
	BuyingStore: true
},
{
	Id: 7190
	AegisName: "Solid_Peeling"
	Name: "Solid Husk"
	Buy: 140
	Weight: 10
	BuyingStore: true
},
{
	Id: 7191
	AegisName: "Lamplight"
	Name: "Lamp"
	Weight: 10
	BuyingStore: true
},
{
	Id: 7192
	AegisName: "Blade_Of_Pinwheel"
	Name: "Vane"
	Buy: 160
	Weight: 10
	BuyingStore: true
},
{
	Id: 7193
	AegisName: "Germinating_Sprout"
	Name: "Sprout"
	Buy: 230
	Weight: 10
	BuyingStore: true
},
{
	Id: 7194
	AegisName: "Soft_Leaf"
	Name: "Soft Blade of Grass"
	Buy: 400
	Weight: 10
	BuyingStore: true
},
{
	Id: 7195
	AegisName: "Air_Rifle"
	Name: "Slingshot"
	Buy: 210
	Weight: 10
	BuyingStore: true
},
{
	Id: 7196
	AegisName: "Shoulder_Protection"
	Name: "Shoulder Protector"
	Buy: 230
	Weight: 10
	BuyingStore: true
},
{
	Id: 7197
	AegisName: "Tough_Vines"
	Name: "Tough Vines"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 7198
	AegisName: "Great_Leaf"
	Name: "Huge Leaf"
	Buy: 610
	Weight: 10
	BuyingStore: true
},
{
	Id: 7199
	AegisName: "Coupon"
	Name: "Coupon"
	Weight: 10
	BuyingStore: true
},
{
	Id: 7200
	AegisName: "Flexible_String"
	Name: "Elastic Band"
	Buy: 380
	Weight: 10
	BuyingStore: true
},
{
	Id: 7201
	AegisName: "Log"
	Name: "Log"
	Buy: 250
	Weight: 10
	BuyingStore: true
},
{
	Id: 7202
	AegisName: "Beetle_Nipper"
	Name: "Pincher of Beetle"
	Buy: 290
	Weight: 10
	BuyingStore: true
},
{
	Id: 7203
	AegisName: "Solid_Twig"
	Name: "Strong Branch"
	Buy: 190
	Weight: 10
	BuyingStore: true
},
{
	Id: 7204
	AegisName: "Gunpowder"
	Name: "Gunpowder"
	Buy: 320
	Weight: 10
	BuyingStore: true
},
{
	Id: 7205
	AegisName: "Piece_Of_Black_Cloth"
	Name: "Piece of Black Cloth"
	Buy: 526
	Weight: 10
	BuyingStore: true
},
{
	Id: 7206
	AegisName: "Black_Kitty_Doll"
	Name: "Black Cat Doll"
	Buy: 1440
	Weight: 10
	BuyingStore: true
},
{
	Id: 7207
	AegisName: "Old_Manteau"
	Name: "Old Manteau"
	Buy: 1050
	Weight: 10
	BuyingStore: true
},
{
	Id: 7208
	AegisName: "Rusty_Cleaver"
	Name: "Rusty Kitchen Knife"
	Buy: 1780
	Weight: 10
	BuyingStore: true
},
{
	Id: 7209
	AegisName: "Dullahans_Helm"
	Name: "Helm of Dullahan"
	Buy: 1350
	Weight: 10
	BuyingStore: true
},
{
	Id: 7210
	AegisName: "Dullahan_Armor"
	Name: "Armor Piece of Dullahan"
	Buy: 790
	Weight: 10
	BuyingStore: true
},
{
	Id: 7211
	AegisName: "Rojerta_Piece"
	Name: "Fragment of Rossata Stone"
	Buy: 2600
	Weight: 10
	BuyingStore: true
},
{
	Id: 7212
	AegisName: "Hanging_Doll"
	Name: "Hung Doll"
	Buy: 1020
	Weight: 10
	BuyingStore: true
},
{
	Id: 7213
	AegisName: "Needle_Pouch"
	Name: "Needle Packet"
	Buy: 832
	Weight: 10
	BuyingStore: true
},
{
	Id: 7214
	AegisName: "Bat_Cage"
	Name: "Bat Cage"
	Buy: 880
	Weight: 10
	BuyingStore: true
},
{
	Id: 7215
	AegisName: "Broken_Needle"
	Name: "Broken Needle"
	Buy: 690
	Weight: 10
	BuyingStore: true
},
{
	Id: 7216
	AegisName: "Red_Scarf"
	Name: "Red Muffler"
	Buy: 660
	Weight: 10
	BuyingStore: true
},
{
	Id: 7217
	AegisName: "Spool"
	Name: "Spool"
	Buy: 424
	Weight: 10
	BuyingStore: true
},
{
	Id: 7218
	AegisName: "Rotten_Rope"
	Name: "Decomposed Rope"
	Buy: 390
	Weight: 10
	BuyingStore: true
},
{
	Id: 7219
	AegisName: "Striped_Socks"
	Name: "Striped Sock"
	Buy: 920
	Weight: 10
	BuyingStore: true
},
{
	Id: 7220
	AegisName: "Ectoplasm"
	Name: "Ectoplasm"
	Buy: 322
	Weight: 10
	BuyingStore: true
},
{
	Id: 7221
	AegisName: "Tangled_Chain"
	Name: "Tangled Chains"
	Buy: 740
	Weight: 10
	BuyingStore: true
},
{
	Id: 7222
	AegisName: "Tree_Knot"
	Name: "Wooden Gnarl"
	Buy: 468
	Weight: 10
	BuyingStore: true
},
{
	Id: 7223
	AegisName: "Distorted_Portrait"
	Name: "Contorted Self-Portrait"
	Buy: 2032
	Weight: 10
	BuyingStore: true
},
{
	Id: 7224
	AegisName: "Stone_Of_Intelligence"
	Name: "Stone of Sage"
	Weight: 10
},
{
	Id: 7225
	AegisName: "Pumpkin_Bucket"
	Name: "Pumpkin Lantern"
	Buy: 486
	Weight: 10
	BuyingStore: true
},
{
	Id: 7226
	AegisName: "Pill"
	Name: "Pellet"
	Buy: 2
	Weight: 10
	BuyingStore: true
},
{
	Id: 7227
	AegisName: "TCG_Card"
	Name: "TCG Card"
	Weight: 10
},
{
	Id: 7228
	AegisName: "Gold_Bullion"
	Name: "Gold Bullion"
	Buy: 100000
	Weight: 300
},
{
	Id: 7229
	AegisName: "Silver_Bullion"
	Name: "Silver Bullion"
	Buy: 50000
	Weight: 300
},
{
	Id: 7230
	AegisName: "White_Gold_Bullion"
	Name: "Platinum Bullion"
	Buy: 200000
	Weight: 300
},
{
	Id: 7231
	AegisName: "Gold_Ore"
	Name: "Gold Ore"
	Buy: 20
	Weight: 150
},
{
	Id: 7232
	AegisName: "Silver_Ore"
	Name: "Silver Ore"
	Buy: 20
	Weight: 150
},
{
	Id: 7233
	AegisName: "Mithril_Ore"
	Name: "Mithril Ore"
	Buy: 20
	Weight: 150
},
{
	Id: 7234
	AegisName: "Soul_Of_Guild"
	Name: "Spirit of Guild"
	Weight: 10
},
{
	Id: 7235
	AegisName: "Soul_Of_Courage"
	Name: "Spirit of Charge"
	Weight: 10
},
{
	Id: 7236
	AegisName: "Soul_Of_Guard"
	Name: "Spirit of Protection"
	Weight: 10
},
{
	Id: 7237
	AegisName: "Soul_Of_Partnership"
	Name: "Spirit of Association"
	Weight: 10
},
{
	Id: 7238
	AegisName: "Soul_Of_Correspondence"
	Name: "Spirit of Coordination"
	Weight: 10
},
{
	Id: 7239
	AegisName: "Soul_Of_Proceeding"
	Name: "Spirit of Advance"
	Weight: 10
},
{
	Id: 7240
	AegisName: "Soul_Of_Confidence"
	Name: "Spirit of Trust"
	Weight: 10
},
{
	Id: 7241
	AegisName: "Soul_Of_Agreement"
	Name: "Spirit of Union"
	Weight: 10
},
{
	Id: 7242
	AegisName: "Soul_Of_Harmony"
	Name: "Spirit of Combination"
	Weight: 10
},
{
	Id: 7243
	AegisName: "Soul_Of_Cooperate"
	Name: "Spirit of Cooperation"
	Weight: 10
},
{
	Id: 7244
	AegisName: "Soul_Of_Unity"
	Name: "Spirit of Solidarity"
	Weight: 10
},
{
	Id: 7245
	AegisName: "Soul_Of_Friendship"
	Name: "Spirit of Friendship"
	Weight: 10
},
{
	Id: 7246
	AegisName: "Soul_Of_Peace"
	Name: "Spirit of Peace"
	Weight: 10
},
{
	Id: 7247
	AegisName: "Soul_Of_Spirit"
	Name: "Spirit of Determination"
	Weight: 10
},
{
	Id: 7248
	AegisName: "Soul_Of_Honor"
	Name: "Spirit of Honor"
	Weight: 10
},
{
	Id: 7249
	AegisName: "Soul_Of_Service"
	Name: "Spirit of Service"
	Weight: 10
},
{
	Id: 7250
	AegisName: "Soul_Of_Glory"
	Name: "Spirit of Glory"
	Weight: 10
},
{
	Id: 7251
	AegisName: "Soul_Of_Victory"
	Name: "Spirit of Victory"
	Weight: 10
},
{
	Id: 7252
	AegisName: "Herb_Medicine"
	Name: "Herbal Medicine"
	Weight: 10
},
{
	Id: 7253
	AegisName: "Taeguk_Flag"
	Name: "Golden Korean Flag"
	Weight: 10
},
{
	Id: 7254
	AegisName: "Digital_Print_Ticket"
	Name: "Digital Picture Printing Coupon"
	Weight: 10
},
{
	Id: 7255
	AegisName: "China_Marble01"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7256
	AegisName: "China_Marble02"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7257
	AegisName: "China_Marble03"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7258
	AegisName: "China_Marble04"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7259
	AegisName: "China_Marble05"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7260
	AegisName: "China_Marble06"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7261
	AegisName: "China_Marble07"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7262
	AegisName: "Fan"
	Name: "Folding Fan of Cat Ghost"
	Buy: 466
	Weight: 10
	BuyingStore: true
},
{
	Id: 7263
	AegisName: "Cat_Eyed_Stone"
	Name: "Cat's Eye"
	Buy: 954
	Weight: 10
	BuyingStore: true
},
{
	Id: 7264
	AegisName: "Dried_Sand"
	Name: "Dry Sand"
	Buy: 322
	Weight: 10
	BuyingStore: true
},
{
	Id: 7265
	AegisName: "Dragon_Horn"
	Name: "Dragon Horn"
	Buy: 544
	Weight: 10
	BuyingStore: true
},
{
	Id: 7266
	AegisName: "Dragon_Fang"
	Name: "Denture from Dragon Mask"
	Buy: 436
	Weight: 10
	BuyingStore: true
},
{
	Id: 7267
	AegisName: "Tiger_Skin_Panties"
	Name: "Tiger Panty"
	Buy: 298
	Weight: 10
	BuyingStore: true
},
{
	Id: 7268
	AegisName: "Little_Blacky_Ghost"
	Name: "Little Ghost Doll"
	Buy: 1210
	Weight: 10
	BuyingStore: true
},
{
	Id: 7269
	AegisName: "Bib"
	Name: "Pinafore"
	Buy: 960
	Weight: 10
	BuyingStore: true
},
{
	Id: 7270
	AegisName: "Milk_Bottle"
	Name: "Nursing Bottle"
	Buy: 1100
	Weight: 10
	BuyingStore: true
},
{
	Id: 7271
	AegisName: "Figure"
	Name: "Novice Figure"
	Buy: 10000
	Weight: 10
},
{
	Id: 7272
	AegisName: "Meat_Dumpling_Doll"
	Name: "Rice Ball Doll"
	Buy: 500
	Weight: 10
},
{
	Id: 7273
	AegisName: "Golden_Necklace"
	Name: "RWC Necklace"
	Buy: 2
	Weight: 10
},
{
	Id: 7274
	AegisName: "Ancient_Translator"
	Name: "Translated Ancient Language"
	Weight: 10
},
{
	Id: 7275
	AegisName: "Ancient_Document"
	Name: "Record of Ancient Language"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7276
	AegisName: "Picture_Letter"
	Name: "Doodled Message"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7277
	AegisName: "Munak_Doll"
	Name: "Munak Doll"
	Buy: 8900
	Weight: 10
	BuyingStore: true
},
{
	Id: 7278
	AegisName: "Wellbeing_Letter"
	Name: "Letter to Wife"
	Weight: 10
},
{
	Id: 7279
	AegisName: "Vita500_Lid"
	Name: "Vita500 Lid"
	Buy: 10
	Weight: 10
},
{
	Id: 7280
	AegisName: "Quiz_Ticket01"
	Name: "1st Quiz Entry"
	Weight: 10
},
{
	Id: 7281
	AegisName: "Quiz_Ticket02"
	Name: "2nd Quiz Entry"
	Weight: 10
},
{
	Id: 7282
	AegisName: "Quiz_Ticket03"
	Name: "3rd Quiz Entry"
	Weight: 10
},
{
	Id: 7283
	AegisName: "Quiz_Ticket04"
	Name: "4th Quiz Entry"
	Weight: 10
},
{
	Id: 7284
	AegisName: "Quiz_Ticket05"
	Name: "5th Quiz Entry"
	Weight: 10
},
{
	Id: 7285
	AegisName: "Thread_Skein"
	Name: "Holy Threads"
	Buy: 2
	Weight: 10
},
{
	Id: 7286
	AegisName: "Chilli"
	Name: "Red Chile"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7287
	AegisName: "Thread_Skein_"
	Name: "Holier Threads"
	Buy: 2
	Weight: 10
},
{
	Id: 7288
	AegisName: "Thai_Ring"
	Name: "Engagement Ring"
	Buy: 2
	Weight: 10
},
{
	Id: 7289
	AegisName: "Olivine"
	Name: "Peridot"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7290
	AegisName: "Phlogopite"
	Name: "Phlogopite"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7291
	AegisName: "Agate"
	Name: "Agate"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7292
	AegisName: "Muscovite"
	Name: "Muscovite"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7293
	AegisName: "Rose_Quartz"
	Name: "Rose Quartz"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7294
	AegisName: "Turquoise"
	Name: "Turquoise"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7295
	AegisName: "Citrine"
	Name: "Citrin"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7296
	AegisName: "Pyroxene"
	Name: "Pyroxene"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7297
	AegisName: "Biotite"
	Name: "Biotite"
	Buy: 3000
	Weight: 100
	BuyingStore: true
},
{
	Id: 7298
	AegisName: "Leaf_Clothes"
	Name: "Fig Leaf"
	Buy: 538
	Weight: 10
	BuyingStore: true
},
{
	Id: 7299
	AegisName: "Bamboo_Basket"
	Name: "Straw Basket"
	Buy: 632
	Weight: 10
	BuyingStore: true
},
{
	Id: 7300
	AegisName: "Gemstone"
	Name: "Gemstone"
	Buy: 1420
	Weight: 10
	BuyingStore: true
},
{
	Id: 7301
	AegisName: "Sword_Accessory"
	Name: "Tassel"
	Buy: 798
	Weight: 10
	BuyingStore: true
},
{
	Id: 7302
	AegisName: "KRATHONG"
	Name: "Krathong"
	Buy: 2
	Weight: 10
},
{
	Id: 7303
	AegisName: "Bag_Of_Rice"
	Name: "Straw Rice Bag"
	Weight: 800
	BuyingStore: true
},
{
	Id: 7304
	AegisName: "Witchs_Spell_Book"
	Name: "Witch's Spell Scroll"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7305
	AegisName: "Authority_Of_Nine_World"
	Name: "Symbol of the Nine Realms"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7306
	AegisName: "Fragment_Of_Soul"
	Name: "Piece of Spirit"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7307
	AegisName: "Whisper_Of_Soul"
	Name: "Spiritual Whispers"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7308
	AegisName: "Witchs_Potion"
	Name: "Witch's Tonic"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7309
	AegisName: "Wing_Of_Crow"
	Name: "Crow Wing"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7310
	AegisName: "Free_Peco_Ticket"
	Name: "Free Ticket for Peco Ride"
	Buy: 20
	Weight: 10
},
{
	Id: 7311
	AegisName: "Free_Flying_Ship_Ticket"
	Name: "Free Ticket for Flyship"
	Buy: 20
	Weight: 10
},
{
	Id: 7312
	AegisName: "Jubilee"
	Name: "Jubilee"
	Buy: 32
	Weight: 10
	BuyingStore: true
},
{
	Id: 7313
	AegisName: "Seal_Of_Witch"
	Name: "Witch's Medal"
	Buy: 2
},
{
	Id: 7314
	AegisName: "The_Sign"
	Name: "The Sign"
	Buy: 2
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7315
	AegisName: "Dark_Crystal_Fragment"
	Name: "Dark Crystal Fragment"
	Buy: 422
	Weight: 10
	BuyingStore: true
},
{
	Id: 7316
	AegisName: "Long_Limb"
	Name: "Insect Leg"
	Buy: 658
	Weight: 10
	BuyingStore: true
},
{
	Id: 7317
	AegisName: "Screw"
	Name: "Rusty Screw"
	Buy: 534
	Weight: 10
	BuyingStore: true
},
{
	Id: 7318
	AegisName: "Old_Pick"
	Name: "Old Pick"
	Buy: 512
	Weight: 10
	BuyingStore: true
},
{
	Id: 7319
	AegisName: "Old_Steel_Plate"
	Name: "Used Iron Plate"
	Buy: 1024
	Weight: 10
	BuyingStore: true
},
{
	Id: 7320
	AegisName: "Air_Pollutant"
	Name: "Dust Pollutant"
	Buy: 256
	Weight: 10
	BuyingStore: true
},
{
	Id: 7321
	AegisName: "Fragment_Of_Crystal"
	Name: "Crystal Fragment"
	Buy: 552
	Weight: 10
	BuyingStore: true
},
{
	Id: 7322
	AegisName: "Poisonous_Gas"
	Name: "Toxic Gas"
	Buy: 666
	Weight: 10
	BuyingStore: true
},
{
	Id: 7323
	AegisName: "Battered_Kettle"
	Name: "Battered Kettle"
	Buy: 256
	Weight: 10
	BuyingStore: true
},
{
	Id: 7325
	AegisName: "Tube"
	Name: "Flexible Tube"
	Buy: 102
	Weight: 10
	BuyingStore: true
},
{
	Id: 7326
	AegisName: "Fluorescent_Liquid"
	Name: "Fluorescent Liquid"
	Buy: 712
	Weight: 10
	BuyingStore: true
},
{
	Id: 7327
	AegisName: "Headlamp"
	Name: "Flashlight"
	Buy: 1024
	Weight: 10
	BuyingStore: true
},
{
	Id: 7328
	AegisName: "Legendary_Scroll"
	Name: "Legend of Songkran"
	Weight: 10
},
{
	Id: 7329
	AegisName: "Old_Copper_Key"
	Name: "Old Bronze Key"
	Weight: 10
},
{
	Id: 7330
	AegisName: "2anny"
	Name: "Mystic Orb"
	Weight: 100
},
{
	Id: 7331
	AegisName: "Flower_Of_Heaven"
	Name: "Heaven Flower"
	Buy: 500
	Weight: 10
},
{
	Id: 7332
	AegisName: "Slate"
	Name: "Complete Tablet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7333
	AegisName: "Piece_Of_Slate_1"
	Name: "Prontera Tablet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7334
	AegisName: "Piece_Of_Slate_2"
	Name: "Payon Tablet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7335
	AegisName: "Piece_Of_Slate_3"
	Name: "Morroc Tablet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7336
	AegisName: "Piece_Of_Slate_4"
	Name: "Geffen Tablet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7337
	AegisName: "Eye_Of_Hellion"
	Name: "Eye of Hellion"
},
{
	Id: 7338
	AegisName: "RO_Transportation_Card"
	Name: "One-way Ticket"
},
{
	Id: 7339
	AegisName: "RO_Transportation_Card_"
	Name: "Commemorative Travel Card"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7340
	AegisName: "Will_Of_Darkness"
	Name: "Will of the Darkness"
	Buy: 734
	Weight: 50
	BuyingStore: true
},
{
	Id: 7341
	AegisName: "Worn_Out_Pendant"
	Name: "Old Pendant"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7342
	AegisName: "File01"
	Name: "File Folder"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7343
	AegisName: "File02"
	Name: "Sealed File Folder"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7344
	AegisName: "File03"
	Name: "Shinokas Case File"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7345
	AegisName: "Armlet_Of_Prisoner"
	Name: "Handcuffs"
	Buy: 724
	Weight: 10
	BuyingStore: true
},
{
	Id: 7346
	AegisName: "Pile_Of_Ymir_Heart"
	Name: "Ymir's Heart Piece"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7347
	AegisName: "Lab_Staff_Record"
	Name: "Research Chart"
	Buy: 840
	Weight: 10
	BuyingStore: true
},
{
	Id: 7348
	AegisName: "Indication_Of_Member01"
	Name: "Membership Card"
	Buy: 20
	Weight: 10
},
{
	Id: 7349
	AegisName: "Indication_Of_Member02"
	Name: "Archive Permit"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7350
	AegisName: "Pass"
	Name: "Pass"
	Buy: 20
	Weight: 10
},
{
	Id: 7351
	AegisName: "Friends_Diary"
	Name: "Friend's Diary"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7352
	AegisName: "Transparent_Plate01"
	Name: "Transparent Plate"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7353
	AegisName: "Transparent_Plate02"
	Name: "Transparent Plate"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7354
	AegisName: "Transparent_Plate03"
	Name: "Transparent Plate"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7355
	AegisName: "Transparent_Plate04"
	Name: "Transparent Plate"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7356
	AegisName: "Piece_Of_Crest1"
	Name: "Crest Piece"
	Buy: 5000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7357
	AegisName: "Piece_Of_Crest2"
	Name: "Crest Piece"
	Buy: 5000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7358
	AegisName: "Piece_Of_Crest3"
	Name: "Crest Piece"
	Buy: 5000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7359
	AegisName: "Piece_Of_Crest4"
	Name: "Crest Piece"
	Buy: 5000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7360
	AegisName: "RO_Festival_Ticket"
	Name: "RO Festival Invitation"
	Weight: 10
},
{
	Id: 7361
	AegisName: "Lotto01"
	Name: "Lotto Ball 01"
	Weight: 10
},
{
	Id: 7362
	AegisName: "Lotto02"
	Name: "Lotto Ball 02"
	Weight: 10
},
{
	Id: 7363
	AegisName: "Lotto03"
	Name: "Lotto Ball 03"
	Weight: 10
},
{
	Id: 7364
	AegisName: "Lotto04"
	Name: "Lotto Ball 04"
	Weight: 10
},
{
	Id: 7365
	AegisName: "Lotto05"
	Name: "Lotto Ball 05"
	Weight: 10
},
{
	Id: 7366
	AegisName: "Lotto06"
	Name: "Lotto Ball 06"
	Weight: 10
},
{
	Id: 7367
	AegisName: "Lotto07"
	Name: "Lotto Ball 07"
	Weight: 10
},
{
	Id: 7368
	AegisName: "Lotto08"
	Name: "Lotto Ball 08"
	Weight: 10
},
{
	Id: 7369
	AegisName: "Lotto09"
	Name: "Lotto Ball 09"
	Weight: 10
},
{
	Id: 7370
	AegisName: "Lotto10"
	Name: "Lotto Ball 10"
	Weight: 10
},
{
	Id: 7371
	AegisName: "Lotto11"
	Name: "Lotto Ball 11"
	Weight: 10
},
{
	Id: 7372
	AegisName: "Lotto12"
	Name: "Lotto Ball 12"
	Weight: 10
},
{
	Id: 7373
	AegisName: "Lotto13"
	Name: "Lotto Ball 13"
	Weight: 10
},
{
	Id: 7374
	AegisName: "Lotto14"
	Name: "Lotto Ball 14"
	Weight: 10
},
{
	Id: 7375
	AegisName: "Lotto15"
	Name: "Lotto Ball 15"
	Weight: 10
},
{
	Id: 7376
	AegisName: "Lotto16"
	Name: "Lotto Ball 16"
	Weight: 10
},
{
	Id: 7377
	AegisName: "Lotto17"
	Name: "Lotto Ball 17"
	Weight: 10
},
{
	Id: 7378
	AegisName: "Lotto18"
	Name: "Lotto Ball 18"
	Weight: 10
},
{
	Id: 7379
	AegisName: "Lotto19"
	Name: "Lotto Ball 19"
	Weight: 10
},
{
	Id: 7380
	AegisName: "Lotto20"
	Name: "Lotto Ball 20"
	Weight: 10
},
{
	Id: 7381
	AegisName: "Lotto21"
	Name: "Lotto Ball 21"
	Weight: 10
},
{
	Id: 7382
	AegisName: "Lotto22"
	Name: "Lotto Ball 22"
	Weight: 10
},
{
	Id: 7383
	AegisName: "Lotto23"
	Name: "Lotto Ball 23"
	Weight: 10
},
{
	Id: 7384
	AegisName: "Lotto24"
	Name: "Lotto Ball 24"
	Weight: 10
},
{
	Id: 7385
	AegisName: "Lotto25"
	Name: "Lotto Ball 25"
	Weight: 10
},
{
	Id: 7386
	AegisName: "Lotto26"
	Name: "Lotto Ball 26"
	Weight: 10
},
{
	Id: 7387
	AegisName: "Lotto27"
	Name: "Lotto Ball 27"
	Weight: 10
},
{
	Id: 7388
	AegisName: "Lotto28"
	Name: "Lotto Ball 28"
	Weight: 10
},
{
	Id: 7389
	AegisName: "Lotto29"
	Name: "Lotto Ball 29"
	Weight: 10
},
{
	Id: 7390
	AegisName: "Lotto30"
	Name: "Lotto Ball 30"
	Weight: 10
},
{
	Id: 7391
	AegisName: "Lotto31"
	Name: "Lotto Ball 31"
	Weight: 10
},
{
	Id: 7392
	AegisName: "Lotto32"
	Name: "Lotto Ball 32"
	Weight: 10
},
{
	Id: 7393
	AegisName: "Lotto33"
	Name: "Lotto Ball 33"
	Weight: 10
},
{
	Id: 7394
	AegisName: "Lotto34"
	Name: "Lotto Ball 34"
	Weight: 10
},
{
	Id: 7395
	AegisName: "Lotto35"
	Name: "Lotto Ball 35"
	Weight: 10
},
{
	Id: 7396
	AegisName: "Lotto36"
	Name: "Lotto Ball 36"
	Weight: 10
},
{
	Id: 7397
	AegisName: "Lotto37"
	Name: "Lotto Ball 37"
	Weight: 10
},
{
	Id: 7398
	AegisName: "Lotto38"
	Name: "Lotto Ball 38"
	Weight: 10
},
{
	Id: 7399
	AegisName: "Word_Card01"
	Name: "Selamat"
	Buy: 2
	Weight: 10
},
{
	Id: 7400
	AegisName: "Word_Card02"
	Name: "Hari"
	Buy: 2
	Weight: 10
},
{
	Id: 7401
	AegisName: "Word_Card03"
	Name: "Kemerdekaan"
	Buy: 2
	Weight: 10
},
{
	Id: 7402
	AegisName: "Word_Card04"
	Name: "Republik"
	Buy: 2
	Weight: 10
},
{
	Id: 7403
	AegisName: "Word_Card05"
	Name: "Indonesia"
	Buy: 2
	Weight: 10
},
{
	Id: 7404
	AegisName: "Word_Card06"
	Name: "Ke-60"
	Buy: 2
	Weight: 10
},
{
	Id: 7405
	AegisName: "Crushed_Can"
	Name: "Crushed Can"
	Buy: 2
	Weight: 10
},
{
	Id: 7406
	AegisName: "Moon_Cake1"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7407
	AegisName: "Moon_Cake2"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7408
	AegisName: "Moon_Cake3"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7409
	AegisName: "Moon_Cake4"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7410
	AegisName: "Moon_Cake5"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7411
	AegisName: "Moon_Cake6"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7412
	AegisName: "Moon_Cake7"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7413
	AegisName: "Moon_Cake8"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7414
	AegisName: "Moon_Cake9"
	Name: "Yuebing"
	Buy: 2
	Weight: 10
},
{
	Id: 7415
	AegisName: "Stone_Of_Summons"
	Name: "Summoning Stone"
	Buy: 2
	Weight: 10
},
{
	Id: 7416
	AegisName: "Letter_Of_Recommend"
	Name: "Letter of Recommendation"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7417
	AegisName: "Mission_ScrollA"
	Name: "Written Request(A)"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7418
	AegisName: "Mission_ScrollB"
	Name: "Written Request(B)"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7419
	AegisName: "Embryo_HandBook"
	Name: "Embryo Creation Guide"
	Buy: 48000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7420
	AegisName: "Skull_"
	Name: "Skull"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7421
	AegisName: "Key_Red"
	Name: "Red Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7422
	AegisName: "Key_Yellow"
	Name: "Yellow Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7423
	AegisName: "Key_Blue"
	Name: "Blue Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7424
	AegisName: "Key_Green"
	Name: "Green Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7425
	AegisName: "Key_Black"
	Name: "Black Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7426
	AegisName: "Magic_Gem_Red"
	Name: "Red Charm Stone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7427
	AegisName: "Magic_Gem_Yellow"
	Name: "Yellow Charm Stone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7428
	AegisName: "Magic_Gem_Blue"
	Name: "Blue Charm Stone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7429
	AegisName: "Magic_Gem_Green"
	Name: "Green Charm Stone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7430
	AegisName: "Magic_Gem_Black"
	Name: "Black Charm Stone"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7431
	AegisName: "Several_Books"
	Name: "Pile of Books"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7432
	AegisName: "Leather_Pouch"
	Name: "Leather Pouch"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7433
	AegisName: "Scroll"
	Name: "Blank Scroll"
	Buy: 4000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7434
	AegisName: "Elemental_Potion_Book"
	Name: "Elemental Potion Creation Guide"
	Buy: 100000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7435
	AegisName: "Golden_Bracelet"
	Name: "Golden Ornament"
	Buy: 1907
	Weight: 10
	BuyingStore: true
},
{
	Id: 7436
	AegisName: "Piece_Of_Memory_Green"
	Name: "Fragment of Agony"
	Buy: 1506
	Weight: 10
	BuyingStore: true
},
{
	Id: 7437
	AegisName: "Piece_Of_Memory_Purple"
	Name: "Fragment of Misery"
	Buy: 1506
	Weight: 10
	BuyingStore: true
},
{
	Id: 7438
	AegisName: "Piece_Of_Memory_Blue"
	Name: "Fragment of Hatred"
	Buy: 1506
	Weight: 10
	BuyingStore: true
},
{
	Id: 7439
	AegisName: "Piece_Of_Memory_Red"
	Name: "Fragment of Despair"
	Buy: 1506
	Weight: 10
	BuyingStore: true
},
{
	Id: 7440
	AegisName: "Red_Feather"
	Name: "Red Feather"
	Buy: 1335
	Weight: 10
	BuyingStore: true
},
{
	Id: 7441
	AegisName: "Blue_Feather"
	Name: "Blue Feather"
	Buy: 1408
	Weight: 10
	BuyingStore: true
},
{
	Id: 7442
	AegisName: "Cursed_Seal"
	Name: "Cursed Seal"
	Buy: 1332
	Weight: 10
	BuyingStore: true
},
{
	Id: 7443
	AegisName: "Tri_Headed_Dragon_Head"
	Name: "Three-Headed Dragon's Head"
	Buy: 956
	Weight: 10
	BuyingStore: true
},
{
	Id: 7444
	AegisName: "Treasure_Box"
	Name: "Treasure Box"
	Buy: 300000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7445
	AegisName: "Dragonball_Green"
	Name: "Green Bijou"
	Buy: 887
	Weight: 10
	BuyingStore: true
},
{
	Id: 7446
	AegisName: "Dragonball_Blue"
	Name: "Blue Bijou"
	Buy: 887
	Weight: 10
	BuyingStore: true
},
{
	Id: 7447
	AegisName: "Dragonball_Red"
	Name: "Red Bijou"
	Buy: 887
	Weight: 10
	BuyingStore: true
},
{
	Id: 7448
	AegisName: "Dragonball_Yellow"
	Name: "Yellow Bijou"
	Buy: 887
	Weight: 10
	BuyingStore: true
},
{
	Id: 7449
	AegisName: "Bloody_Page"
	Name: "Bloody Page"
	Buy: 681
	Weight: 10
	BuyingStore: true
},
{
	Id: 7450
	AegisName: "Piece_Of_Bone_Armor"
	Name: "Skeletal Armor Piece"
	Buy: 2050
	Weight: 10
	BuyingStore: true
},
{
	Id: 7451
	AegisName: "Scale_Of_Red_Dragon"
	Name: "Fire Dragon Scale"
	Buy: 1852
	Weight: 10
	BuyingStore: true
},
{
	Id: 7452
	AegisName: "Yellow_Spice"
	Name: "Yellow Spice"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7453
	AegisName: "Sweet_Sauce"
	Name: "Sweet Sauce"
	Buy: 700
	Weight: 10
	BuyingStore: true
},
{
	Id: 7454
	AegisName: "Plain_Sauce"
	Name: "Savory Sauce"
	Buy: 700
	Weight: 10
	BuyingStore: true
},
{
	Id: 7455
	AegisName: "Hot_Sauce"
	Name: "Spicy Sauce"
	Buy: 700
	Weight: 10
	BuyingStore: true
},
{
	Id: 7456
	AegisName: "Red_Spice"
	Name: "Red Spice"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7457
	AegisName: "Cooking_Oil"
	Name: "Cooking Oil"
	Buy: 500
	Weight: 10
	BuyingStore: true
},
{
	Id: 7458
	AegisName: "Baphomets_Horn"
	Name: "Fortune Horn"
	Buy: 2
	Weight: 10
},
{
	Id: 7459
	AegisName: "RAMADAN_"
	Name: "Idul Fitri Card"
	Buy: 2
	Weight: 10
},
{
	Id: 7460
	AegisName: "Niflheim_Ticket"
	Name: "Niflheim Express Ticket"
	Buy: 2
	Weight: 10
},
{
	Id: 7461
	AegisName: "BlueCard_A"
	Name: "Blue A Card"
	Weight: 10
},
{
	Id: 7462
	AegisName: "BlueCard_E"
	Name: "Blue E Card"
	Weight: 10
},
{
	Id: 7463
	AegisName: "BlueCard_F"
	Name: "Blue F Card"
	Weight: 10
},
{
	Id: 7464
	AegisName: "BlueCard_H"
	Name: "Blue H Card"
	Weight: 10
},
{
	Id: 7465
	AegisName: "BlueCard_L"
	Name: "Blue L Card"
	Weight: 10
},
{
	Id: 7466
	AegisName: "BlueCard_N"
	Name: "Blue N Card"
	Weight: 10
},
{
	Id: 7467
	AegisName: "BlueCard_O"
	Name: "Blue O Card"
	Weight: 10
},
{
	Id: 7468
	AegisName: "BlueCard_P"
	Name: "Blue P Card"
	Weight: 10
},
{
	Id: 7469
	AegisName: "BlueCard_U"
	Name: "Blue U Card"
	Weight: 10
},
{
	Id: 7470
	AegisName: "BlueCard_W"
	Name: "Blue W Card"
	Weight: 10
},
{
	Id: 7471
	AegisName: "BlueCard_Y"
	Name: "Blue Y Card"
	Weight: 10
},
{
	Id: 7472
	AegisName: "Cookbook01"
	Name: "Level 1 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7473
	AegisName: "Cookbook02"
	Name: "Level 2 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7474
	AegisName: "Cookbook03"
	Name: "Level 3 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7475
	AegisName: "Cookbook04"
	Name: "Level 4 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7476
	AegisName: "Cookbook05"
	Name: "Level 5 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7477
	AegisName: "Cookbook06"
	Name: "Level 6 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7478
	AegisName: "Cookbook07"
	Name: "Level 7 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7479
	AegisName: "Cookbook08"
	Name: "Level 8 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7480
	AegisName: "Cookbook09"
	Name: "Level 9 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7481
	AegisName: "Cookbook10"
	Name: "Level 10 Cookbook"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7482
	AegisName: "Pot"
	Name: "Pot"
	Buy: 200
	Weight: 10
	BuyingStore: true
},
{
	Id: 7483
	AegisName: "Key_Of_Seal"
	Name: "Key of the Seal"
},
{
	Id: 7484
	AegisName: "Warrior_Symbol"
	Name: "Symbol of a Brave Warrior"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7485
	AegisName: "2nd_Floor_Pass"
	Name: "Cloud General"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7486
	AegisName: "3rd_Floor_Pass"
	Name: "Wind General"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7487
	AegisName: "Tavern_Wine"
	Name: "Culinary Wine"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7488
	AegisName: "Delivery_Box"
	Name: "Delivery Package"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7489
	AegisName: "Villa_Spare_Key"
	Name: "Cottage Key"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7490
	AegisName: "Kyll_Hire_Letter"
	Name: "Letter to Elly"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7491
	AegisName: "Iron_Box"
	Name: "Steel Box"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7492
	AegisName: "Yellow_Key_Card"
	Name: "Yellow Keycard"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7493
	AegisName: "Golden_Key"
	Name: "Golden Key"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7494
	AegisName: "Kiel_Button"
	Name: "Luxurious Button"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7495
	AegisName: "Blue_Key_Card"
	Name: "Blue Keycard"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7496
	AegisName: "Red_Key_Card"
	Name: "Red Keycard"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7497
	AegisName: "Steel_Piece"
	Name: "Metal Fragment"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7498
	AegisName: "Rosimier_Key"
	Name: "Rosimier Mansion Keys"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7499
	AegisName: "Family_Portrait"
	Name: "Family Portrait"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7500
	AegisName: "Elysia_Portrait"
	Name: "Woman's Portrait"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7501
	AegisName: "Kyll_Hire_Letter2"
	Name: "K.H's Letter"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7502
	AegisName: "Piece_Memo_Of_James"
	Name: "James's Note"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7503
	AegisName: "Man_Portrait"
	Name: "Man's Portrait"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7504
	AegisName: "Toy_Motor"
	Name: "Power Device"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7505
	AegisName: "Toy_Key"
	Name: "Toy Key"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7506
	AegisName: "Black_Key_Card"
	Name: "Black Keycard"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7507
	AegisName: "Sturdy_Iron_Piece"
	Name: "Solid Iron Piece"
	Buy: 842
	Weight: 10
	BuyingStore: true
},
{
	Id: 7508
	AegisName: "Elysia_Ring"
	Name: "Allysia's Ring"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7509
	AegisName: "Fancy_Key_Card"
	Name: "Luxurious Keycard"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7510
	AegisName: "Valhalla_Flower"
	Name: "Valhalla's Flower"
	Buy: 200000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7511
	AegisName: "Rune_Of_Darkness"
	Name: "Rune of Darkness"
	Buy: 2526
	Weight: 10
	BuyingStore: true
},
{
	Id: 7512
	AegisName: "Burnt_Parts"
	Name: "Burnt Part"
	Buy: 1600
	Weight: 10
	BuyingStore: true
},
{
	Id: 7513
	AegisName: "Pocket_Watch"
	Name: "Pocket Watch"
	Buy: 3420
	Weight: 10
	BuyingStore: true
},
{
	Id: 7514
	AegisName: "Monster_Ticket"
	Name: "Monster Ticket"
	Buy: 2
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7515
	AegisName: "Marvelous_Medal"
	Name: "Prize Medal"
	Buy: 2
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7516
	AegisName: "Green_Key_Card"
	Name: "Green Keycard"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7517
	AegisName: "Gold_Coin_"
	Name: "Gold Coin"
	Buy: 1000
	Weight: 100
},
{
	Id: 7518
	AegisName: "Womens_Medal"
	Name: "Women's Medal"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7519
	AegisName: "Money_Envelope"
	Name: "Handsel"
	Weight: 10
},
{
	Id: 7520
	AegisName: "Chinese_Scroll"
	Name: "Please Be Rich"
	Weight: 10
},
{
	Id: 7521
	AegisName: "Flame_Stone"
	Name: "Flame Stone"
	Buy: 150
	Weight: 10
	BuyingStore: true
},
{
	Id: 7522
	AegisName: "Ice_Stone"
	Name: "Ice Stone"
	Buy: 150
	Weight: 10
	BuyingStore: true
},
{
	Id: 7523
	AegisName: "Wind_Stone"
	Name: "Wind Stone"
	Buy: 150
	Weight: 10
	BuyingStore: true
},
{
	Id: 7524
	AegisName: "Shadow_Orb"
	Name: "Shadow Orb"
	Buy: 300
	Weight: 20
	BuyingStore: true
},
{
	Id: 7525
	AegisName: "Summer_Feast_Ticket"
	Name: "Summer Festival Ticket"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7526
	AegisName: "Manuscript_Paper"
	Name: "Manuscript Paper"
	Buy: 2
},
{
	Id: 7527
	AegisName: "Life_Book"
	Name: "Book About True Life"
	Weight: 100
	Trade: {
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7528
	AegisName: "Id_Lottery_Ticket"
	Name: "Lottery Ticket"
},
{
	Id: 7529
	AegisName: "Stolen_Sandals"
	Name: "Stolen Sandal"
},
{
	Id: 7530
	AegisName: "Travel_Brochure_01"
	Name: "Travel Brochure [Amatsu]"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7531
	AegisName: "Travel_Brochure_02"
	Name: "Travel Brochure [Kunlun]"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7532
	AegisName: "Travel_Brochure_03"
	Name: "Travel Brochure [Louyang]"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7533
	AegisName: "Travel_Brochure_04"
	Name: "Travel Brochure [Ayothaya]"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7534
	AegisName: "Photo_Album_01"
	Name: "Amatsu Completed Photo Album"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7535
	AegisName: "Photo_Album_02"
	Name: "Kunlun Completed Photo Album"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7536
	AegisName: "Photo_Album_03"
	Name: "Louyang Completed Photo Album"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7537
	AegisName: "Photo_Album_04"
	Name: "Ayothaya Completed Photo Album"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7538
	AegisName: "Sifted_Sand"
	Name: "Sand for Work"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7539
	AegisName: "Poring_Coin"
	Name: "Poring Coin"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7540
	AegisName: "Lotto39"
	Name: "Lotto Ball 39"
	Weight: 10
},
{
	Id: 7541
	AegisName: "Lotto40"
	Name: "Lotto Ball 40"
	Weight: 10
},
{
	Id: 7542
	AegisName: "Lotto41"
	Name: "Lotto Ball 41"
	Weight: 10
},
{
	Id: 7543
	AegisName: "Lotto42"
	Name: "Lotto Ball 42"
	Weight: 10
},
{
	Id: 7544
	AegisName: "Lotto43"
	Name: "Lotto Ball 43"
	Weight: 10
},
{
	Id: 7545
	AegisName: "Lotto44"
	Name: "Lotto Ball 44"
	Weight: 10
},
{
	Id: 7546
	AegisName: "Lotto45"
	Name: "Lotto Ball 45"
	Weight: 10
},
{
	Id: 7547
	AegisName: "Soccer_Ball"
	Name: "Soccer Ball"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7548
	AegisName: "Soccer_Shoes"
	Name: "Soccer Shoes"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7549
	AegisName: "Brazilian_Flag"
	Name: "Brazilian Flag"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7550
	AegisName: "Ticket01"
	Name: "6.13 Ticket"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7551
	AegisName: "Ticket02"
	Name: "6.18 Ticket"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7552
	AegisName: "Ticket03"
	Name: "6.22 Ticket"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7553
	AegisName: "Lotus_Flower"
	Name: "Lotus Flower"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7554
	AegisName: "Striped_Candle"
	Name: "Striped Candle"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7555
	AegisName: "Green_Incense"
	Name: "Green Incense"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7556
	AegisName: "Longing_Heart"
	Name: "Longing Heart"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7557
	AegisName: "Invitation_Letter"
	Name: "Invitation Letter"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7558
	AegisName: "Invitation_Ticket"
	Name: "Invitation Ticket"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7559
	AegisName: "Key_Of_Flower_Garden"
	Name: "Key to the Secret Garden"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7560
	AegisName: "Longing_Heart2"
	Name: "Longing Heart"
},
{
	Id: 7561
	AegisName: "Ice_Heart"
	Name: "Glacial Heart"
	Buy: 606
	Weight: 10
	BuyingStore: true
},
{
	Id: 7562
	AegisName: "Ice_Scale"
	Name: "Ice Scale"
	Buy: 3020
	Weight: 10
	BuyingStore: true
},
{
	Id: 7563
	AegisName: "Bloody_Rune"
	Name: "Bloody Rune"
	Buy: 2016
	Weight: 10
	BuyingStore: true
},
{
	Id: 7564
	AegisName: "Rotten_Meat"
	Name: "Rotten Meat"
	Buy: 102
	Weight: 10
	BuyingStore: true
},
{
	Id: 7565
	AegisName: "Sticky_Poison"
	Name: "Sticky Poison"
	Buy: 350
	Weight: 10
	BuyingStore: true
},
{
	Id: 7566
	AegisName: "Will_Of_Darkness_"
	Name: "Will of Red Darkness"
	Buy: 1530
	Weight: 10
	BuyingStore: true
},
{
	Id: 7567
	AegisName: "Suspicious_Hat"
	Name: "Suspicious Hat"
	Buy: 1290
	Weight: 10
	BuyingStore: true
},
{
	Id: 7568
	AegisName: "White_Mask"
	Name: "White Mask"
	Buy: 1060
	Weight: 10
	BuyingStore: true
},
{
	Id: 7569
	AegisName: "Hammer_Of_Wind"
	Name: "Wind Hammer"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7570
	AegisName: "Temple_Lottery_Ticket"
	Name: "Temple Lottery Ticket"
	Weight: 10
},
{
	Id: 7571
	AegisName: "Diary_Of_Blue"
	Name: "Bruspetti's Diary"
},
{
	Id: 7572
	AegisName: "Magic_Necklace"
	Name: "Ashy Necklace"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7573
	AegisName: "Magic_Necklace_"
	Name: "Sparkling Necklace"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7574
	AegisName: "Ice_Particle"
	Name: "Freezing Snow Powder"
	BuyingStore: true
},
{
	Id: 7575
	AegisName: "Red_Jewel_"
	Name: "Red Jewel"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7576
	AegisName: "Blue_Jewel_"
	Name: "Blue Jewel"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7577
	AegisName: "Golden_Jewel_"
	Name: "Yellow Jewel"
	Buy: 20
	Weight: 50
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7578
	AegisName: "Anti_Spell_Bead"
	Name: "Countermagic Crystal"
	Buy: 20
	Weight: 10
},
{
	Id: 7579
	AegisName: "Silk_Handkerchief"
	Name: "Silk Handkerchief of Zhi Nu"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7580
	AegisName: "Black_Bead"
	Name: "Black Marble"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7581
	AegisName: "Anniversary_Ticket"
	Name: "Celebration Document"
	Buy: 20
	Weight: 10
},
{
	Id: 7582
	AegisName: "Gem_Of_Ruin"
	Name: "Jewel of Destruction"
	Buy: 10
	Weight: 10
},
{
	Id: 7583
	AegisName: "Evil_Mind"
	Name: "Evil Mind"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7584
	AegisName: "Proof_Of_Guard1"
	Name: "Guard's First Proof"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7585
	AegisName: "Proof_Of_Guard2"
	Name: "Guard's Second Proof"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7586
	AegisName: "Proof_Of_Guard3"
	Name: "Guard's Third Proof"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7587
	AegisName: "Proof_Of_Guard4"
	Name: "Guard's Fourth Proof"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7588
	AegisName: "IPOD_Ticker"
	Name: "IPOD Coupon"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7589
	AegisName: "Moon_Cake10"
	Name: "Lettered Moon Snack 01"
	Buy: 20
	Weight: 10
},
{
	Id: 7590
	AegisName: "Moon_Cake11"
	Name: "Lettered Moon Snack 02"
	Buy: 20
	Weight: 10
},
{
	Id: 7591
	AegisName: "Moon_Cake12"
	Name: "Lettered Moon Snack 03"
	Buy: 20
	Weight: 10
},
{
	Id: 7592
	AegisName: "Moon_Cake13"
	Name: "Lettered Moon Snack 04"
	Buy: 20
	Weight: 10
},
{
	Id: 7593
	AegisName: "Moon_Cake14"
	Name: "Lettered Moon Snack 05"
	Buy: 20
	Weight: 10
},
{
	Id: 7594
	AegisName: "Sonias_Letter"
	Name: "Sonia's Letter"
	Buy: 20
	Weight: 10
},
{
	Id: 7595
	AegisName: "Unique_Sword"
	Name: "Special Sword"
	Buy: 20
	Weight: 10
},
{
	Id: 7596
	AegisName: "Unique_Shield"
	Name: "Special Shield"
	Buy: 20
	Weight: 10
},
{
	Id: 7597
	AegisName: "Magic_Stone"
	Name: "Magic Stone"
	Buy: 20
	Weight: 10
},
/*
{
	Id: 7598
	AegisName: "BlueCard_I"
	Name: "Blue I Card"
	Weight: 10
},
*/
/*
{
	Id: 7599
	AegisName: "BlueCard_D"
	Name: "Blue D Card"
	Weight: 10
},
*/
/*
{
	Id: 7600
	AegisName: "BlueCard_K"
	Name: "Blue K Card"
	Weight: 10
},
*/
/*
{
	Id: 7601
	AegisName: "BlueCard_S"
	Name: "Blue S Card"
	Weight: 10
},
*/
/*
{
	Id: 7602
	AegisName: "BlueCard_R"
	Name: "Blue R Card"
	Weight: 10
},
*/
{
	Id: 7603
	AegisName: "RO_Party_Ticket"
	Name: "RO Party Invitation Ticket"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7604
	AegisName: "Flour"
	Name: "Flour"
	Weight: 10
},
{
	Id: 7605
	AegisName: "Chicken_Egg"
	Name: "Chicken Egg"
	Weight: 10
},
{
	Id: 7606
	AegisName: "Coin"
	Name: "Token of the Ox"
	Weight: 10
},
{
	Id: 7607
	AegisName: "Evil_Dragon_Head"
	Name: "Neck of Demon Dragon"
	Buy: 10
	Weight: 10
},
{
	Id: 7608
	AegisName: "Premium_Ticket"
	Name: "Premium Ticket"
	Buy: 20
	Weight: 10
},
{
	Id: 7609
	AegisName: "Pumpkin_Mojo"
	Name: "Pumpkin Mojo"
	Weight: 10
},
{
	Id: 7610
	AegisName: "Food_Ticket"
	Name: "Food Exchange Ticket"
	Buy: 1000
	Weight: 10
},
{
	Id: 7611
	AegisName: "Fox_Symbol"
	Name: "Symbol of Fox"
	Buy: 20
	Weight: 10
},
{
	Id: 7612
	AegisName: "Heart_Of_Fox_Queen"
	Name: "Heart of Queen Fox"
	Buy: 2
	Weight: 10
},
{
	Id: 7613
	AegisName: "Small_Rice_Dough"
	Name: "Small Rice Cake Dough"
},
{
	Id: 7614
	AegisName: "Special_Packing_Paper"
	Name: "Wrapping Paper"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7615
	AegisName: "MVP_Ticket"
	Name: "MVP Voucher"
	Buy: 10
	Weight: 10
},
{
	Id: 7616
	AegisName: "Mini_Boss_Ticket"
	Name: "Miniboss Voucher"
	Buy: 10
	Weight: 10
},
{
	Id: 7617
	AegisName: "Monster_Ticket_"
	Name: "Monster Voucher"
	Buy: 10
	Weight: 10
},
{
	Id: 7618
	AegisName: "Monster_Crystal"
	Name: "Monster Crystal"
	Buy: 2
	Weight: 100
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7619
	AegisName: "Enriched_Elunium"
	Name: "Enriched Elunium"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7620
	AegisName: "Enriched_Oridecon"
	Name: "Enriched Oridecon"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7621
	AegisName: "Token_Of_Siegfried"
	Name: "Token Of Siegfried"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7622
	AegisName: "New_Style_Coupon"
	Name: "Hairstyle Coupon"
	Weight: 10
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 7623
	AegisName: "Name_Change_Coupon"
	Name: "Ticket Of Identification"
	Buy: 2
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7624
	AegisName: "Spring_Stanza23"
	Name: "Spring Stanza23"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7625
	AegisName: "Registration_Ticket"
	Name: "Registration Ticket"
},
{
	Id: 7626
	AegisName: "Bubble_Gum_Token"
	Name: "Bubble Gum Token"
	Buy: 10
	Weight: 10
},
{
	Id: 7627
	AegisName: "Sage_Key"
	Name: "Sage Key"
},
{
	Id: 7628
	AegisName: "Idiot_Key"
	Name: "Idiot Key"
},
{
	Id: 7629
	AegisName: "Pink_Gift_Box"
	Name: "Pink Gift Box"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7630
	AegisName: "Clean_Beach_Brush"
	Name: "Clean Beach Brush"
},
{
	Id: 7631
	AegisName: "Trash_Debris"
	Name: "Trash Debris"
},
{
	Id: 7635
	AegisName: "Perfume_Pouch"
	Name: "Sachet"
	Buy: 100
},
{
	Id: 7663
	AegisName: "Fullmetal_Jacket_Bullet"
	Name: "Full Metal Jacket"
	Type: "IT_AMMO"
	Buy: 200
	Weight: 2
	Atk: 10
	Job: {
		Gunslinger: true
		Rebellion: true
	}
	Loc: "EQP_AMMO"
	Subtype: "A_BULLET"
},
{
	Id: 7664
	AegisName: "Mine_Projectile"
	Name: "Projection Landmines"
	Type: "IT_AMMO"
	Buy: 450
	Weight: 3
	Atk: 10
	Job: {
		Gunslinger: true
		Rebellion: true
	}
	Loc: "EQP_AMMO"
	Subtype: "A_GRENADE"
},
{
	Id: 7665
	AegisName: "Dragon_Tail_Missile"
	Name: "Dragon Tail Missile"
	Type: "IT_AMMO"
	Buy: 1500
	Weight: 100
	Atk: 10
	Job: {
		Gunslinger: true
		Rebellion: true
	}
	Loc: "EQP_AMMO"
	Subtype: "A_GRENADE"
},
{
	Id: 7701
	AegisName: "Dragon_Spirit"
	Name: "Soul"
	Buy: 2
	Weight: 10
},
{
	Id: 7702
	AegisName: "Special_Cogwheel"
	Name: "Special Cogwheel"
	Buy: 2
	Weight: 10
},
{
	Id: 7703
	AegisName: "Piece_Of_Cogwheel"
	Name: "Piece of Cogwheel"
	Buy: 2
	Weight: 10
},
{
	Id: 7704
	AegisName: "Broken_Thermometer"
	Name: "Broken Thermometer"
	Buy: 2
},
{
	Id: 7705
	AegisName: "Note_Of_Geologist"
	Name: "Note of Geologist"
	Buy: 2
},
{
	Id: 7706
	AegisName: "Spoiled_Carrot_Juice"
	Name: "Broken Carrot Juice"
	Buy: 20
	Weight: 40
},
{
	Id: 7707
	AegisName: "Spoiled_Banana_Juice"
	Name: "Broken Banana Juice"
	Buy: 20
	Weight: 40
},
{
	Id: 7708
	AegisName: "Spoiled_Apple_Juice"
	Name: "Broken Apple Juice"
	Buy: 20
	Weight: 40
},
{
	Id: 7709
	AegisName: "Spoiled_Grape_Juice"
	Name: "Broken Grape Juice"
	Buy: 20
	Weight: 40
},
{
	Id: 7710
	AegisName: "Black_Gemstone"
	Name: "Black Gemstone"
	Buy: 600
	Weight: 30
},
{
	Id: 7711
	AegisName: "Update_Ticket"
	Name: "Event Ticket"
	Weight: 10
},
{
	Id: 7712
	AegisName: "Nokia5500"
	Name: "Nokia 5500"
	Weight: 10
},
{
	Id: 7713
	AegisName: "BlueCard_A_"
	Name: "Blue A(2) Card"
	Weight: 10
},
{
	Id: 7714
	AegisName: "BlueCard_R_"
	Name: "Blue R(2) Card"
	Weight: 10
},
{
	Id: 7715
	AegisName: "Handmade_Choco_Recipe"
	Name: "Handmade Chocolate Recipe"
},
{
	Id: 7716
	AegisName: "Strawberry_Choco_Recipe"
	Name: "Chocolate Strawberry Recipe"
},
{
	Id: 7717
	AegisName: "Choco_Tart_Recipe"
	Name: "Chocolate Tart Recipe"
},
{
	Id: 7718
	AegisName: "Cacao_Bean"
	Name: "Cacao Bean"
	Weight: 10
},
{
	Id: 7719
	AegisName: "BlueCard_G"
	Name: "Blue G Card"
	Weight: 10
},
{
	Id: 7720
	AegisName: "Gold_Coin_US"
	Name: "Gold Coin"
	Buy: 100
	Weight: 10
},
{
	Id: 7721
	AegisName: "Treasure_Box_"
	Name: "Treasure Box"
	Buy: 100
	Weight: 500
},
{
	Id: 7722
	AegisName: "Debt_Note"
	Name: "Debt Note"
	Buy: 20
},
{
	Id: 7723
	AegisName: "Diamond_Of_Ruin"
	Name: "Diamond of Ruin"
	Buy: 20
},
{
	Id: 7724
	AegisName: "Forbidden_Secret_Art"
	Name: "Forbidden Secret Art"
	Buy: 20
},
{
	Id: 7725
	AegisName: "Unlucky_Emerald"
	Name: "Unlucky Emerald"
	Buy: 20
},
{
	Id: 7726
	AegisName: "Token_Of_King"
	Name: "Token of King"
	Buy: 20
},
{
	Id: 7727
	AegisName: "HP_Doctor_Ticket"
	Name: "HP Doctor Ticket"
},
{
	Id: 7728
	AegisName: "SP_Doctor_Ticket"
	Name: "SP Doctor Ticket"
},
{
	Id: 7729
	AegisName: "Rok_Star_Badge"
	Name: "Rok Star Badge"
	Buy: 20
	Weight: 100
},
{
	Id: 7730
	AegisName: "Mission_Certificate1"
	Name: "Mission Ticket 1"
	Weight: 10
},
{
	Id: 7731
	AegisName: "Mission_Certificate2"
	Name: "Mission Ticket 2"
	Weight: 10
},
{
	Id: 7732
	AegisName: "Mission_Certificate3"
	Name: "Mission Ticket 3"
	Weight: 10
},
{
	Id: 7733
	AegisName: "Mission_Certificate4"
	Name: "Mission Ticket 4"
	Weight: 10
},
{
	Id: 7734
	AegisName: "Mission_Certificate5"
	Name: "Mission Ticket 5"
	Weight: 10
},
{
	Id: 7735
	AegisName: "Mission_Certificate6"
	Name: "Mission Ticket 6"
	Weight: 10
},
{
	Id: 7736
	AegisName: "Mission_Certificate7"
	Name: "Mission Ticket 7"
	Weight: 10
},
{
	Id: 7737
	AegisName: "Mission_Certificate8"
	Name: "Mission Ticket 8"
	Weight: 10
},
{
	Id: 7738
	AegisName: "Mission_Certificate9"
	Name: "Mission Ticket 9"
	Weight: 10
},
{
	Id: 7739
	AegisName: "Mission_Certificate10"
	Name: "Mission Ticket 10"
	Weight: 10
},
{
	Id: 7740
	AegisName: "Mission_Certificate11"
	Name: "Mission Ticket 11"
	Weight: 10
},
{
	Id: 7741
	AegisName: "Mission_Certificate12"
	Name: "Mission Ticket 12"
	Weight: 10
},
{
	Id: 7742
	AegisName: "Kaong"
	Name: "Kaong"
	Buy: 2
	Weight: 10
},
{
	Id: 7743
	AegisName: "Gulaman"
	Name: "Gulaman"
	Buy: 2
	Weight: 10
},
{
	Id: 7744
	AegisName: "Leche_Flan"
	Name: "Leche Flan"
	Buy: 2
	Weight: 10
},
{
	Id: 7745
	AegisName: "Ube_Jam"
	Name: "Ube Jam"
	Buy: 2
	Weight: 10
},
{
	Id: 7746
	AegisName: "Sago"
	Name: "Sago"
	Buy: 2
	Weight: 10
},
{
	Id: 7747
	AegisName: "Langka"
	Name: "Langka"
	Buy: 2
	Weight: 10
},
{
	Id: 7748
	AegisName: "Sweet_Bean"
	Name: "Sweet Beans"
	Buy: 2
	Weight: 10
},
{
	Id: 7749
	AegisName: "Sweet_Banana"
	Name: "Sweet Bananas"
	Buy: 2
	Weight: 10
},
{
	Id: 7750
	AegisName: "Macapuno"
	Name: "Macapuno"
	Buy: 2
	Weight: 10
},
{
	Id: 7751
	AegisName: "Old_White_Cloth"
	Name: "Old White Cloth"
	Buy: 550
	Weight: 10
	BuyingStore: true
},
{
	Id: 7752
	AegisName: "Clattering_Skull"
	Name: "Clattering Skull"
	Buy: 840
	Weight: 10
	BuyingStore: true
},
{
	Id: 7753
	AegisName: "Broken_Farming_Utensil"
	Name: "Broken Farming Utensil"
	Buy: 330
	Weight: 10
	BuyingStore: true
},
{
	Id: 7754
	AegisName: "Broken_Crown"
	Name: "Broken Crown"
	Buy: 3000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7755
	AegisName: "Research_Note"
	Name: "Research Note"
	Buy: 20
},
{
	Id: 7756
	AegisName: "Sealed_Book"
	Name: "Sealed Book"
	Buy: 2000
	Weight: 10
},
{
	Id: 7757
	AegisName: "Mithril"
	Name: "Mithril"
	Buy: 20
	Weight: 100
},
{
	Id: 7758
	AegisName: "Star_Crystal"
	Name: "Star Crystal"
	Buy: 20
	Weight: 100
},
{
	Id: 7759
	AegisName: "Geology_Report"
	Name: "Geologist's Report"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7760
	AegisName: "Yaga_Magic_Book"
	Name: "Yaga's Magic Book"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7761
	AegisName: "Magic_Gourd_Bottle"
	Name: "Magic Gourd Bottle"
	Buy: 20
	Weight: 10
},
{
	Id: 7762
	AegisName: "Yaga_Pestle"
	Name: "Yaga's Pestle"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 7763
	AegisName: "Sticky_Herb"
	Name: "Sticky Herb"
	Buy: 20
	Weight: 10
},
{
	Id: 7764
	AegisName: "High_Strength_Adhesive"
	Name: "High Strength Adhesive"
	Buy: 20
	Weight: 10
},
{
	Id: 7765
	AegisName: "Yaga_Secret_Medicine"
	Name: "Baba Yaga's Secret Medicine"
	Buy: 20
	Weight: 10
},
{
	Id: 7766
	AegisName: "Bok_Choy"
	Name: "Bok Choy"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7767
	AegisName: "Chung_E_Cake"
	Name: "Green Maiden's Cake"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7768
	AegisName: "Squid"
	Name: "Squid"
	Weight: 10
},
{
	Id: 7769
	AegisName: "Egg_Yolk"
	Name: "Egg Yolk"
	Weight: 10
},
{
	Id: 7770
	AegisName: "Sweet_Rice"
	Name: "Sweet Rice"
	Weight: 10
},
{
	Id: 7771
	AegisName: "Lotus_Leaf"
	Name: "Lotus Leaf"
	Weight: 10
},
{
	Id: 7772
	AegisName: "String"
	Name: "String"
	Weight: 10
},
{
	Id: 7773
	AegisName: "War_Badge"
	Name: "Wat Badge"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7774
	AegisName: "Chung_E_Ticket"
	Name: "Green Maiden Ticket"
	Weight: 10
},
{
	Id: 7775
	AegisName: "Spring_Rabbit_Ticket"
	Name: "Spring Rabbit Ticket"
	Weight: 10
},
{
	Id: 7776
	AegisName: "Max_Weight_Up_Scroll"
	Name: "Gym Pass"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7777
	AegisName: "Gold_Box"
	Name: "Sealed Golden Box"
	Weight: 10
},
{
	Id: 7778
	AegisName: "Silver_Box"
	Name: "Sealed Silver Box"
	Weight: 10
},
{
	Id: 7779
	AegisName: "Gold_Key_TW"
	Name: "Golden Key"
	Weight: 10
},
{
	Id: 7780
	AegisName: "Silver_Key"
	Name: "Silver Key"
	Weight: 10
},
{
	Id: 7781
	AegisName: "Heart_Box"
	Name: "Engrave Treasure Box"
	Weight: 10
},
{
	Id: 7782
	AegisName: "Gold_Key77"
	Name: "Episode 13.1 Poporing Key"
	Weight: 10
	DropAnnounce: true
},
{
	Id: 7783
	AegisName: "Silver_Key77"
	Name: "Episode 13.2 Poring Key"
	Weight: 10
	DropAnnounce: true
},
{
	Id: 7784
	AegisName: "Fawner_Coupon1"
	Name: "Free Coupon 1"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7785
	AegisName: "Fawner_Coupon2"
	Name: "Free Coupon 2"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7786
	AegisName: "Fawner_Coupon3"
	Name: "Free Coupon 3"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7787
	AegisName: "Fawner_Coupon4"
	Name: "Free Coupon 4"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7788
	AegisName: "Fawner_Coupon5"
	Name: "Free Coupon 5"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7789
	AegisName: "Fawner_Coupon6"
	Name: "Free Coupon 6"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7790
	AegisName: "Fawner_Coupon7"
	Name: "Free Coupon 7"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7791
	AegisName: "Fawner_Coupon8"
	Name: "Free Coupon 8"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7792
	AegisName: "Guyak"
	Name: "Guyak"
	Weight: 10
},
{
	Id: 7793
	AegisName: "Golden_Apple"
	Name: "Golden Apple"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7794
	AegisName: "Fate_Of_Crow"
	Name: "The Crow of Destiny"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7795
	AegisName: "Mami_Photo_Album"
	Name: "Mammi's Photo Album"
	Buy: 2
	Weight: 10
},
{
	Id: 7796
	AegisName: "Author_Autograph"
	Name: "Author's Autograph"
	Buy: 2
	Weight: 10
},
{
	Id: 7797
	AegisName: "Author_Memo"
	Name: "Author's Memo"
	Buy: 2
	Weight: 10
},
{
	Id: 7798
	AegisName: "Dark_Debris"
	Name: "Fragment of Darkness"
	Buy: 500
	Weight: 10
},
{
	Id: 7799
	AegisName: "Dark_Crystal"
	Name: "Crystal of Darkness"
	Buy: 10
	Weight: 10
},
{
	Id: 7800
	AegisName: "Golden_Apple_"
	Name: "Golden Charm Apple"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7801
	AegisName: "Girl_Fan_Letter"
	Name: "Girl's Letter"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7802
	AegisName: "Autograph_Book"
	Name: "Signature Notebook"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7803
	AegisName: "Battle_Manual_TW"
	Name: "Beginner's Field Manual"
	Weight: 10
},
/*
{
	Id: 7804
	AegisName: "????_???"
	Name: "????_???"
	Weight: 10
},
*/
{
	Id: 7805
	AegisName: "Brown_Ring"
	Name: "Brown Jenoss's Family Ring"
	Weight: 10
},
{
	Id: 7806
	AegisName: "Black_Anvil"
	Name: "God Anvil"
	Weight: 10
},
{
	Id: 7807
	AegisName: "Ore"
	Name: "God Mineral"
	Weight: 10
},
{
	Id: 7808
	AegisName: "Gold_Hammer"
	Name: "God Hammer"
	Weight: 10
},
{
	Id: 7809
	AegisName: "Gold_Furnace"
	Name: "God Furnace"
	Weight: 10
},
{
	Id: 7810
	AegisName: "Yellow_Cat_Eyed_Stone"
	Name: "Symbol of Richness"
	Weight: 10
},
{
	Id: 7811
	AegisName: "Gold_Anvil"
	Name: "Anvil"
	Weight: 10
},
{
	Id: 7812
	AegisName: "Red_Cat_Eyed_Stone"
	Name: "Symbol of Bravery"
	Weight: 10
},
{
	Id: 7813
	AegisName: "Th_Red_Ring"
	Name: "Red Jenoss's Family Ring"
	Weight: 10
},
{
	Id: 7814
	AegisName: "Green_Ring"
	Name: "Green Jenoss's Family Ring"
	Weight: 10
},
{
	Id: 7815
	AegisName: "Blue_Ring"
	Name: "Blue Jenoss's Family Ring"
	Weight: 10
},
{
	Id: 7816
	AegisName: "Blue_Cat_Eyed_Stone"
	Name: "Symbol of Faith"
	Weight: 10
},
{
	Id: 7817
	AegisName: "White_Cat_Eyed_Stone"
	Name: "Symbol of Peace"
	Weight: 10
},
{
	Id: 7818
	AegisName: "RJC_Golden_Necklace"
	Name: "Jessur's Necklace"
	Weight: 10
},
{
	Id: 7819
	AegisName: "Nokia5300"
	Name: "Nokia 5300"
	Weight: 10
},
{
	Id: 7820
	AegisName: "Morroc_Skin"
	Name: "Piece of Morocc Skin"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7821
	AegisName: "Green_Apple"
	Name: "Green Apple"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7822
	AegisName: "Whole_Barbecue"
	Name: "Whole Barbecue"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7823
	AegisName: "Meat_Veg_Skewer"
	Name: "Meat Veg Skewer"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7824
	AegisName: "Spirit_Liquor"
	Name: "Spirit Liquor"
	Buy: 20
	Weight: 10
	BuyingStore: true
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7825
	AegisName: "Heroic_Stone"
	Name: "Heroic Stone"
	Buy: 20
	Weight: 10
},
{
	Id: 7826
	AegisName: "Continental_Guard_Paper"
	Name: "Continental Guard Paper"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7827
	AegisName: "Mineral_Report"
	Name: "Mineral Evals"
},
{
	Id: 7828
	AegisName: "BF_Badge1"
	Name: "Bravery Badge"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7829
	AegisName: "BF_Badge2"
	Name: "Valor Badge"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7830
	AegisName: "Goddess_Tear"
	Name: "Goddess Tear"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7831
	AegisName: "Valkyrie_Token"
	Name: "Valkyrie's Token"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7832
	AegisName: "Brynhild_Armor_Piece"
	Name: "Brynhild Armor Piece"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7833
	AegisName: "Hero_Remains"
	Name: "Hero's Remains"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7834
	AegisName: "Andvari_Ring"
	Name: "Andvari's Ring"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7835
	AegisName: "Dusk_Glow"
	Name: "Dusk Glow"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7836
	AegisName: "Dawn_Essence"
	Name: "Dawn Essence"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7837
	AegisName: "Cold_Moonlight"
	Name: "Cold Moonlight"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7838
	AegisName: "Hazy_Starlight"
	Name: "Hazy Starlight"
	Buy: 1
	Weight: 500
	BuyingStore: true
},
{
	Id: 7839
	AegisName: "Crystal_Key"
	Name: "Crystal Key"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7840
	AegisName: "Valkyrie_Gift"
	Name: "Valkyrie's Gift"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7841
	AegisName: "Spotted_Paper"
	Name: "Stained Piece Of Paper"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7842
	AegisName: "Torn_Paper"
	Name: "Torn Piece Of Paper"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7843
	AegisName: "Old_Paper"
	Name: "Old Piece Of Paper"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7844
	AegisName: "Burnt_Paper"
	Name: "Burnt Pieces Of Paper"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7845
	AegisName: "Copy_Of_Spotted_Paper"
	Name: "Copy Of Spotted Paper"
	Weight: 10
},
{
	Id: 7846
	AegisName: "Copy_Of_Torn_Paper"
	Name: "Copy Of Torn Paper"
	Weight: 10
},
{
	Id: 7847
	AegisName: "Copy_Of_Old_Paper"
	Name: "Copy Of Old Paper"
	Weight: 10
},
{
	Id: 7848
	AegisName: "Copy_Of_Burnt_Paper"
	Name: "Copy Of Burnt Paper"
	Weight: 10
},
{
	Id: 7849
	AegisName: "Soul_Crystal"
	Name: "Soul Crystal"
	Weight: 10
},
{
	Id: 7850
	AegisName: "Wooden_Block_"
	Name: "Wooden Block"
	Buy: 20
	Weight: 100
},
{
	Id: 7851
	AegisName: "Pass_F1"
	Name: "Wii Raffle Ticket"
	Buy: 20
	Weight: 10
},
{
	Id: 7852
	AegisName: "Pass_F2"
	Name: "Divx Player Raffle Ticket"
	Buy: 20
	Weight: 10
},
{
	Id: 7853
	AegisName: "Pass_F3"
	Name: "iPod nano Raffle Ticket"
	Buy: 20
	Weight: 10
},
{
	Id: 7854
	AegisName: "Pass_CF"
	Name: "Comodo Festival Ticket"
	Buy: 20
	Weight: 10
},
{
	Id: 7855
	AegisName: "Heart"
	Name: "Heart"
	Buy: 20
	Weight: 10
},
{
	Id: 7856
	AegisName: "Girl_Bunch_Of_Flower_"
	Name: "Girl's Bouquet"
	Buy: 20
	Weight: 50
},
{
	Id: 7857
	AegisName: "Handmade_Kitty_Doll"
	Name: "Hand-made Kitty Doll"
	Buy: 20
	Weight: 30
},
{
	Id: 7858
	AegisName: "Dragonball_Yellow_"
	Name: "Dragonball Yellow"
	Buy: 20
	Weight: 10
},
{
	Id: 7859
	AegisName: "Game_Ticket"
	Name: "Game Ticket"
	Buy: 20
	Weight: 100
},
{
	Id: 7860
	AegisName: "Peeps"
	Name: "Peeps"
	Weight: 50
},
{
	Id: 7861
	AegisName: "Jelly_Bean"
	Name: "Jelly Bean"
	Weight: 50
},
{
	Id: 7862
	AegisName: "Marshmallow"
	Name: "Marshmallow"
	Weight: 50
},
{
	Id: 7863
	AegisName: "GOLD_ID4"
	Name: "Special Gold"
	Buy: 20
	Weight: 200
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7864
	AegisName: "Love_Flower"
	Name: "Love Flower"
	Buy: 20
	Weight: 10
},
{
	Id: 7865
	AegisName: "Gold_Pouch"
	Name: "Gold Pouch"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7866
	AegisName: "Certificate"
	Name: "Certificate"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7867
	AegisName: "SesamePouch"
	Name: "Sesame Bag"
	Buy: 10
	Weight: 100
},
{
	Id: 7868
	AegisName: "Water"
	Name: "Fresh Water"
	Buy: 10
	Weight: 100
},
{
	Id: 7869
	AegisName: "RicePouch"
	Name: "Rice Pouch"
	Buy: 10
	Weight: 100
},
{
	Id: 7870
	AegisName: "Corn"
	Name: "Corn"
	Buy: 5
	Weight: 20
},
{
	Id: 7871
	AegisName: "BeanPouch"
	Name: "Bean Bag"
	Buy: 10
	Weight: 20
},
{
	Id: 7872
	AegisName: "Grass"
	Name: "Herb"
	Buy: 10
	Weight: 30
},
{
	Id: 7873
	AegisName: "MVP_Monster_Scroll"
	Name: "MVP Monster Scroll"
	Buy: 10
	Weight: 10
},
{
	Id: 7874
	AegisName: "Monster_Scroll"
	Name: "Create Monster Scroll"
	Buy: 10
	Weight: 10
},
{
	Id: 7875
	AegisName: "Pirate_Box"
	Name: "Pirate Treasure"
	Buy: 300000
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7876
	AegisName: "Gold_Key"
	Name: "Golden Key"
	Weight: 50
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7877
	AegisName: "Red_Ring"
	Name: "Red Ring"
	Weight: 100
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7878
	AegisName: "Lusalka_Hair"
	Name: "Lusalka's Hair"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7879
	AegisName: "Golden_Thread"
	Name: "Golden Thread"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7880
	AegisName: "Babayaga_Silver_Spoon"
	Name: "Baba Yaga's Silver Spoon"
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7881
	AegisName: "Book_Of_Magic"
	Name: "Mystery Magic Book"
	Weight: 50
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7882
	AegisName: "Pointed_Branch"
	Name: "Sharp Branch"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7883
	AegisName: "Pointed_Wooden_Flute"
	Name: "Wooden Flute"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7884
	AegisName: "Jade_Plate"
	Name: "Jade Plate"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7885
	AegisName: "Sacred_Arrow"
	Name: "Sacred Arrow"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7886
	AegisName: "Bean_Paste"
	Name: "Bean Paste"
	Weight: 10
},
{
	Id: 7887
	AegisName: "Dried_Fruit_Box"
	Name: "Dried Fruit Box"
	Weight: 30
},
{
	Id: 7888
	AegisName: "Bag_Of_Nuts"
	Name: "Bag of Nuts"
	Weight: 30
},
{
	Id: 7889
	AegisName: "Chicken_Feed"
	Name: "Chicken Feed"
	Weight: 20
},
{
	Id: 7891
	AegisName: "Mug"
	Name: "Mug"
	Buy: 2
	Weight: 100
},
{
	Id: 7892
	AegisName: "Charcoal"
	Name: "Charcoal"
	Buy: 10
	Weight: 10
},
{
	Id: 7893
	AegisName: "Sulfur"
	Name: "Sulphur"
	Buy: 10
	Weight: 10
},
{
	Id: 7894
	AegisName: "Nitrate"
	Name: "Nitrogen Acid"
	Buy: 10
	Weight: 10
},
{
	Id: 7895
	AegisName: "TRO_Memory_Book01"
	Name: "Rama5 Book"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7896
	AegisName: "TRO_Memory_Book02"
	Name: "Loykrathong Book"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7897
	AegisName: "TRO_Memory_Book03"
	Name: "Constitution Book"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7898
	AegisName: "VVS_Balmung"
	Name: "VV Strong Balmung"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7899
	AegisName: "Spiritualist_Dagger"
	Name: "Dagger Of Psychic"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7900
	AegisName: "Jenoss_Ring1"
	Name: "Jonathan Family Ring"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7901
	AegisName: "Jenoss_Ring2"
	Name: "Jillberriel Family Ring"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7902
	AegisName: "Jenoss_Ring3"
	Name: "Jessur Family Ring"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7903
	AegisName: "Jenoss_Ring4"
	Name: "Jenoss Family Ring"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7904
	AegisName: "Piano_Key"
	Name: "Piano Key"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7905
	AegisName: "Rok_Star_Badge_"
	Name: "Rok Star Badge"
	Buy: 20
	Weight: 100
},
{
	Id: 7906
	AegisName: "Poppy_Wreath"
	Name: "Poppy Wreath"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7907
	AegisName: "Bobbin_Of_Goddess"
	Name: "Bobbin Of Goddess"
	Buy: 20
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7908
	AegisName: "Louis_Hair_Coupon"
	Name: "Louise's Beauty Coupon"
	Weight: 10
},
{
	Id: 7909
	AegisName: "Stolen_Cookie"
	Name: "Stolen Cookie"
	Weight: 10
},
{
	Id: 7910
	AegisName: "Stolen_Candy"
	Name: "Stolen Candy"
	Weight: 10
},
{
	Id: 7911
	AegisName: "Yulia_Hat"
	Name: "Yulia's Hat"
	Weight: 10
},
{
	Id: 7912
	AegisName: "Portable_Snowman"
	Name: "Portable Snowman Machine"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7913
	AegisName: "Test_Certificate"
	Name: "Battle Test Certificate"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7914
	AegisName: "Ancient_Document_TW"
	Name: "Ancient Language Document"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7915
	AegisName: "Copper_Coin_"
	Name: "Bronze Coin"
},
{
	Id: 7916
	AegisName: "Silver_Coin_"
	Name: "Silver Coin"
},
{
	Id: 7917
	AegisName: "Magic_Potion"
	Name: "Magic Potion"
},
{
	Id: 7918
	AegisName: "Particle_Of_Memory"
	Name: "Fragment Of Memory"
	Buy: 2000
	Weight: 100
},
{
	Id: 7919
	AegisName: "Festival_Ticket"
	Name: "Festival Ticket"
	Buy: 10
	Weight: 10
},
{
	Id: 7920
	AegisName: "Heros_Arsenal"
	Name: "He's Arsenal"
},
{
	Id: 7921
	AegisName: "Essence_Of_Dragon"
	Name: "Essence Of Dragon"
	Buy: 1000
	Weight: 10
},
{
	Id: 7922
	AegisName: "RWC_Ticket"
	Name: "RWC Voucher Items"
	Buy: 2
	Weight: 10
},
{
	Id: 7923
	AegisName: "KRATHONG_"
	Name: "Krathong"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7928
	AegisName: "Brazilian_Flag_"
	Name: "Brazil National Flag"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7929
	AegisName: "Golden_Coin_"
	Name: "Gold Coin"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7930
	AegisName: "Cowkings_Nose_Ring"
	Name: "Devil's Cattle Ring"
	Weight: 1000
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7931
	AegisName: "Poison_Kit"
	Name: "Poison Kit"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7932
	AegisName: "Poison_Herb_Nerium"
	Name: "Poison Herb Nerium"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7933
	AegisName: "Poison_Herb_Rantana"
	Name: "Poison Herb Rantana"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7934
	AegisName: "Poison_Herb_Makulata"
	Name: "Poison Herb Makulata"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7935
	AegisName: "Poison_Herb_Seratum"
	Name: "Poison Herb Seratum"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7936
	AegisName: "Poison_Herb_Scopolia"
	Name: "Poison Herb Scoporia"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7937
	AegisName: "Poison_Herb_Amoena"
	Name: "Poison Herb Amoena"
	Buy: 1
	Weight: 10
	BuyingStore: true
},
{
	Id: 7938
	AegisName: "Light_Granule"
	Name: "Light Granule"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7939
	AegisName: "Elder_Branch"
	Name: "Elder Branch"
	Buy: 1000
	Weight: 10
	BuyingStore: true
},
{
	Id: 7940
	AegisName: "Special_Alloy_Trap"
	Name: "Special Alloy Trap"
	Buy: 200
	Weight: 2
	BuyingStore: true
},
{
	Id: 7941
	AegisName: "Halloween_Ticket"
	Name: "Halloween Ticket"
	Buy: 10
},
{
	Id: 7942
	AegisName: "Letter_From_Chico"
	Name: "Chico Cesar Letter"
},
{
	Id: 7943
	AegisName: "Caskinya"
	Name: "Caskinya"
},
{
	Id: 7944
	AegisName: "Box_Of_Seal"
	Name: "Sealed Box"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 7945
	AegisName: "Almighty_Charm"
	Name: "Universal Amulet"
	Weight: 10
	Trade: {
		nodrop: true
		noselltonpc: true
		nogstorage: true
	}
},
{
	Id: 7946
	AegisName: "Valentine_Gold_Ring"
	Name: "Gold Ring Of Valentine"
	Buy: 10
},
{
	Id: 7947
	AegisName: "Valentine_Silver_Ring"
	Name: "Silver Ring Of Valentine"
	Buy: 10
},
{
	Id: 7948
	AegisName: "Box"
	Name: "Box"
	Buy: 10
	Weight: 10
},
{
	Id: 7949
	AegisName: "Woven_Wool"
	Name: "Woven Wool"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7950
	AegisName: "Ayothaya_Ticket"
	Name: "Ayothaya Fest Ticket"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7951
	AegisName: "Gold_Tulip"
	Name: "Golden Tulip Flower"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7952
	AegisName: "Gift_From_Romiros"
	Name: "Gift Of Lomi Ross"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7953
	AegisName: "Gift_From_Juliedge"
	Name: "Gift Of Juliet"
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7954
	AegisName: "Festival_Ticket_"
	Name: "Summer Festival Ticket"
	Buy: 10
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7955
	AegisName: "Lost_Card1"
	Name: "Lost Card1"
	Buy: 10
},
{
	Id: 7956
	AegisName: "Lost_Card2"
	Name: "Lost Card2"
	Buy: 10
},
{
	Id: 7957
	AegisName: "Lost_Card3"
	Name: "Lost Card3"
	Buy: 10
},
{
	Id: 7958
	AegisName: "Lost_Card4"
	Name: "Lost Card4"
	Buy: 10
},
{
	Id: 7959
	AegisName: "Ancient_Gold_Coin"
	Name: "Ancient Gold Coin"
	Trade: {
		nodrop: true
		nogstorage: true
	}
},
{
	Id: 7960
	AegisName: "Ancient_Silver_Coin"
	Name: "Ancient Silver Coin"
	Trade: {
		nodrop: true
		nogstorage: true
	}
},
{
	Id: 7961
	AegisName: "Weapon_Exchange"
	Name: "Weapon Exchange"
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7962
	AegisName: "Treasure_Map1"
	Name: "Treasure Map1"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7963
	AegisName: "Treasure_Map2"
	Name: "Treasure Map2"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7964
	AegisName: "Treasure_Map3"
	Name: "Treasure Map3"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7965
	AegisName: "Treasure_Map4"
	Name: "Treasure Map4"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7966
	AegisName: "Weird_Parchment1"
	Name: "Weird Parchment1"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7967
	AegisName: "Weird_Parchment2"
	Name: "Weird Parchment2"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7968
	AegisName: "Weird_Parchment3"
	Name: "Weird Parchment3"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7969
	AegisName: "Weird_Parchment4"
	Name: "Weird Parchment4"
	Buy: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7970
	AegisName: "Unwritten_Letter1"
	Name: "Unwritten Letter1"
},
{
	Id: 7971
	AegisName: "Unwritten_Letter2"
	Name: "Unwritten Letter2"
},
{
	Id: 7972
	AegisName: "Oath_Day_Letter"
	Name: "Oath Day Letter"
},
{
	Id: 7973
	AegisName: "Immortality_Egg"
	Name: "Immortality Egg"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7974
	AegisName: "Illusion_Piece"
	Name: "Illusion Piece"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7975
	AegisName: "Cupid_Choco"
	Name: "Cupid Choco"
},
{
	Id: 7976
	AegisName: "Gf_Magic_Coin"
	Name: "Gf Magic Coin"
	Buy: 20
},
{
	Id: 7977
	AegisName: "Hunting_Medal_Badge"
	Name: "Hunting Medal Badge"
},
{
	Id: 7978
	AegisName: "Spring_Stanza1"
	Name: "Spring Stanza1"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7979
	AegisName: "Spring_Stanza2"
	Name: "Spring Stanza2"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7980
	AegisName: "Spring_Stanza3"
	Name: "Spring Stanza3"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7981
	AegisName: "Spring_Stanza4"
	Name: "Spring Stanza4"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7982
	AegisName: "Spring_Stanza5"
	Name: "Spring Stanza5"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7983
	AegisName: "Spring_Stanza6"
	Name: "Spring Stanza6"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7984
	AegisName: "Spring_Stanza7"
	Name: "Spring Stanza7"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7985
	AegisName: "Spring_Stanza8"
	Name: "Spring Stanza8"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7986
	AegisName: "Spring_Stanza9"
	Name: "Spring Stanza9"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7987
	AegisName: "Spring_Stanza10"
	Name: "Spring Stanza10"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7988
	AegisName: "Spring_Stanza11"
	Name: "Spring Stanza11"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7989
	AegisName: "Spring_Stanza12"
	Name: "Spring Stanza12"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7990
	AegisName: "Spring_Stanza13"
	Name: "Spring Stanza13"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7991
	AegisName: "Spring_Stanza14"
	Name: "Spring Stanza14"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7992
	AegisName: "Spring_Stanza15"
	Name: "Spring Stanza15"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7993
	AegisName: "Spring_Stanza16"
	Name: "Spring Stanza16"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7994
	AegisName: "Spring_Stanza17"
	Name: "Spring Stanza17"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7995
	AegisName: "Spring_Stanza18"
	Name: "Spring Stanza18"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7996
	AegisName: "Spring_Stanza19"
	Name: "Spring Stanza19"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7997
	AegisName: "Spring_Stanza20"
	Name: "Spring Stanza20"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7998
	AegisName: "Spring_Stanza21"
	Name: "Spring Stanza21"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 7999
	AegisName: "Spring_Stanza22"
	Name: "Spring Stanza22"
	Buy: 2
	Weight: 10
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},

//== Pet Eggs ==============================================
{
	Id: 9001
	AegisName: "Poring_Egg"
	Name: "Poring Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9002
	AegisName: "Drops_Egg"
	Name: "Drops Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9003
	AegisName: "Poporing_Egg"
	Name: "Poporing Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9004
	AegisName: "Lunatic_Egg"
	Name: "Lunatic Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9005
	AegisName: "Picky_Egg"
	Name: "Picky Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9006
	AegisName: "Chonchon_Egg"
	Name: "Chonchon Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9007
	AegisName: "Steel_Chonchon_Egg"
	Name: "Steel Chonchon Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9008
	AegisName: "Hunter_Fly_Egg"
	Name: "Hunter Fly Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9009
	AegisName: "Savage_Bebe_Egg"
	Name: "Savage Babe Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9010
	AegisName: "Baby_Desert_Wolf_Egg"
	Name: "Baby Desert Wolf Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9011
	AegisName: "Rocker_Egg"
	Name: "Rocker Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9012
	AegisName: "Spore_Egg"
	Name: "Spore Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9013
	AegisName: "Poison_Spore_Egg"
	Name: "Poison Spore Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9014
	AegisName: "PecoPeco_Egg"
	Name: "Peco Peco Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9015
	AegisName: "Smokie_Egg"
	Name: "Smokie Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9016
	AegisName: "Yoyo_Egg"
	Name: "Yoyo Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9017
	AegisName: "Orc_Warrior_Egg"
	Name: "Orc Warrior Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9018
	AegisName: "Munak_Egg"
	Name: "Munak Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9019
	AegisName: "Dokkaebi_Egg"
	Name: "Dokebi Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9020
	AegisName: "Sohee_Egg"
	Name: "Sohee Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9021
	AegisName: "Isis_Egg"
	Name: "Isis Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9022
	AegisName: "Green_Petite_Egg"
	Name: "Green Petite Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9023
	AegisName: "Deviruchi_Egg"
	Name: "Deviruchi Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9024
	AegisName: "Bapho_Jr_Egg"
	Name: "Bapho Jr. Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9025
	AegisName: "Bongun_Egg"
	Name: "Bongun Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9026
	AegisName: "Zherlthsh_Egg"
	Name: "Zealotus Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9027
	AegisName: "Alice_Egg"
	Name: "Alice Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9028
	AegisName: "Rice_Cake_Egg"
	Name: "Hard Rice Cake"
	Type: "IT_PETEGG"
	Buy: 20
	Trade: {
		nodrop: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 9029
	AegisName: "Santa_Goblin_Egg"
	Name: "Christmas Goblin's Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9030
	AegisName: "Chung_E_Egg"
	Name: "Green Maiden Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9031
	AegisName: "Spring_Rabbit_Egg"
	Name: "Spring Rabbit Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9032
	AegisName: "Knife_Goblin_Egg"
	Name: "Knife Goblin Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9033
	AegisName: "Flail_Goblin_Egg"
	Name: "Flail Goblin Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9034
	AegisName: "Hammer_Goblin_Egg"
	Name: "Hammer Goblin Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9035
	AegisName: "Red_Deleter_Egg"
	Name: "Red Deleter Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9036
	AegisName: "Diabolic_Egg"
	Name: "Diabolic Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9037
	AegisName: "Wanderer_Egg"
	Name: "Wanderer Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9038
	AegisName: "New_Year_Doll_Egg"
	Name: "New Year Doll Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9039
	AegisName: "Bacsojin_Egg"
	Name: "Bacsojin Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9040
	AegisName: "Civil_Servant_Egg"
	Name: "Civil Servant Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9041
	AegisName: "Leaf_Cat_Egg"
	Name: "Leaf Cat Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9042
	AegisName: "Loli_Ruri_Egg"
	Name: "Loli Ruri Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9043
	AegisName: "Marionette_Egg"
	Name: "Marionette Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9044
	AegisName: "Shinobi_Egg"
	Name: "Shinobi Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9045
	AegisName: "Whisper_Egg"
	Name: "Whisper Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9046
	AegisName: "Goblin_Leader_Egg"
	Name: "Goblin Leader Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9047
	AegisName: "Wicked_Nymph_Egg"
	Name: "Wicked Nymph Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9048
	AegisName: "Miyabi_Ningyo_Egg"
	Name: "Miyabi Ningyo Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9049
	AegisName: "Dullahan_Egg"
	Name: "Dullahan Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9050
	AegisName: "Medusa_Egg"
	Name: "Medusa Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9051
	AegisName: "Stone_Shooter_Egg"
	Name: "Stone Shooter Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9052
	AegisName: "Incubus_Egg"
	Name: "Incubus Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9053
	AegisName: "Golem_Egg"
	Name: "Golem Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9054
	AegisName: "Nightmare_Terror_Egg"
	Name: "Nightmare Terror Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9055
	AegisName: "Succubus_Egg"
	Name: "Succubus Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9056
	AegisName: "Imp_Egg"
	Name: "Imp Egg"
	Type: "IT_PETEGG"
	Buy: 20
},
{
	Id: 9058
	AegisName: "Snow_Rabbit_Egg"
	Name: "Christmas Snow Rabbit Egg"
	Type: "IT_PETEGG"
	Buy: 20
	Trade: {
		nodrop: true
		notrade: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
},
{
	Id: 9514
	AegisName: "Ein_Ddbox"
	Name: "Ein_Ddbox"
},
{
	Id: 9523
	AegisName: "Metal_Rifine_Ticket"
	Name: "Metal_Rifine_Ticket"
},
{
	Id: 9529
	AegisName: "Ein_Ddbox2"
	Name: "Ein_Ddbox2"
},
{
	Id: 9550
	AegisName: "Gemstone_Of_Time"
	Name: "Gemstone_Of_Time"
},
{
	Id: 9551
	AegisName: "Time_Unseal_Key"
	Name: "Time_Unseal_Key"
},
//== Pet Accessories =======================================
{
	Id: 10001
	AegisName: "Skull_Helm"
	Name: "Skull Helm"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10002
	AegisName: "Monster_Oxygen_Mask"
	Name: "Monster Oxygen Mask"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10003
	AegisName: "Transparent_Headgear"
	Name: "Transparent Head Protector"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10004
	AegisName: "Pacifier"
	Name: "Pacifier"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10005
	AegisName: "Wig"
	Name: "Wig"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10006
	AegisName: "Queens_Hair_Ornament"
	Name: "Queen's Hair Ornament"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10007
	AegisName: "Silk_Ribbon"
	Name: "Silk Ribbon"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10008
	AegisName: "Punisher"
	Name: "Punisher"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10009
	AegisName: "Wild_Flower"
	Name: "Wild Flower"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10010
	AegisName: "Battered_Pot"
	Name: "Battered Pot"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10011
	AegisName: "Stellar_Hairpin"
	Name: "Stellar Hairpin"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10012
	AegisName: "Tiny_Egg_Shell"
	Name: "Tiny Egg Shell"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10013
	AegisName: "Backpack"
	Name: "Backpack"
	Type: "IT_PETARMOR"
	Buy: 1500
},
{
	Id: 10014
	AegisName: "Rocker_Glasses"
	Name: "Rocker Glasses"
	Type: "IT_PETARMOR"
	Buy: 2000
},
{
	Id: 10015
	AegisName: "Green_Lace"
	Name: "Green Lace"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10016
	AegisName: "Golden_Bell"
	Name: "Golden Bell"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10017
	AegisName: "Bark_Shorts"
	Name: "Bark Shorts"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10018
	AegisName: "Monkey_Circlet"
	Name: "Monkey Circlet"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10019
	AegisName: "Red_Muffler"
	Name: "Red Scarf"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10020
	AegisName: "Sword_Of_Grave_Keeper"
	Name: "Grave Keeper's Sword"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10021
	AegisName: "Round_Hair_Ornament"
	Name: "Circular Headgear"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10022
	AegisName: "Golden_Earing"
	Name: "Gold Earring"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10023
	AegisName: "Green_Lucky_Bag"
	Name: "Green Jewel Bag"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10024
	AegisName: "Fashionable_Glasses"
	Name: "Fashion Glasses"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10025
	AegisName: "Star_Hairband"
	Name: "Hairband Of Stars"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10026
	AegisName: "Wine_On_Sleeve"
	Name: "Tassel for Durumagi"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10027
	AegisName: "Spirit_Chain_"
	Name: "Pet Soul Ring"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10028
	AegisName: "Nice_Badge"
	Name: "Beautiful Badges"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10029
	AegisName: "Jade_Trinket"
	Name: "Jade Trinket"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10030
	AegisName: "Summer_Fan"
	Name: "Summer Fan"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10031
	AegisName: "Death_Coil"
	Name: "Ring Of Death"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10032
	AegisName: "Queens_Coronet"
	Name: "Queen's Coronet"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10033
	AegisName: "Apro_Hair"
	Name: "Afro"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10034
	AegisName: "Ball_Mask"
	Name: "Masked Ball"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10035
	AegisName: "Windup_Spring"
	Name: "Spring"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10036
	AegisName: "Hell_Horn"
	Name: "Horn Of Hell"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10037
	AegisName: "Black_Butterfly_Mask"
	Name: "Black Butterfly Mask"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10038
	AegisName: "Horn_Protector"
	Name: "Horn Barrier"
	Type: "IT_PETARMOR"
	Buy: 20
},
{
	Id: 10042
	AegisName: "Dark_Mane"
	Name: "Dark_Mane"
},

//== Misc "Etc" Books ======================================
{
	Id: 11000
	AegisName: "Prontera_Book_01"
	Name: "History book of Prontera"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11001
	AegisName: "Adventure_Story01"
	Name: "Adventure Story Vol.1"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11002
	AegisName: "Great_Chef_Orleans01"
	Name: "Chef King Orleans Vol.1"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11003
	AegisName: "Legend_Of_Kafra01"
	Name: "Kafra Legend Vol.1"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11004
	AegisName: "Mercenary_Rebellion"
	Name: "Old Book"
	Buy: 10000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11005
	AegisName: "Tyrant_Schmidt"
	Name: "Rune Royal Family Book"
	Buy: 10000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11006
	AegisName: "Blood_Flower01"
	Name: "Blood Flower Vol.1"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11007
	AegisName: "Blood_Flower02"
	Name: "Blood Flower Vol.2"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11008
	AegisName: "Barmund"
	Name: "Biographical Dictionary Copy Edition"
	Buy: 10000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11009
	AegisName: "Adventure_Story02"
	Name: "Adventure Story Vol.2"
	Buy: 8000
	Weight: 10
	BuyingStore: true
},
{
	Id: 11010
	AegisName: "Reward_List_Book"
	Name: "Battlegrounds Catalog"
	Weight: 10
},
{
	Id: 11011
	AegisName: "Barmund_Note"
	Name: "Varmunt's Note"
},
{
	Id: 11012
	AegisName: "Expedition_Report"
	Name: "Expedition Report"
},
{
	Id: 11013
	AegisName: "Expedition_Report_Vol1"
	Name: "Expedition Report Vol1"
},
{
	Id: 11014
	AegisName: "Expedition_Report_Vol2"
	Name: "Expedition Report Vol2"
},
{
	Id: 11015
	AegisName: "Expedition_Report_Vol3"
	Name: "Expedition Report Vol3"
},
{
	Id: 11016
	AegisName: "Expedition_Report_Vol4"
	Name: "Expedition Report Vol4"
},
{
	Id: 11017
	AegisName: "Reward_List_Book2"
	Name: "KVM Reward Items Catalog"
	Weight: 10
},
{
	Id: 11018
	AegisName: "Splendide_Selling_Item"
	Name: "Splendide Selling Item"
	Weight: 10
},
{
	Id: 11019
	AegisName: "Manuk_Selling_Item"
	Name: "Manuk Selling Item"
	Weight: 10
},
{
	Id: 11020
	AegisName: "Japan_Book1"
	Name: "Japan Book1"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 11021
	AegisName: "Japan_Book2"
	Name: "Japan Book2"
	Buy: 20
	Weight: 10
	BuyingStore: true
},
{
	Id: 11022
	AegisName: "Mix_Cook_Book"
	Name: "Mix Cook Book"
	Buy: 10
	Weight: 10
	BuyingStore: true
},
{
	Id: 11023
	AegisName: "Increase_Stamina_Study"
	Name: "Increase Stamina Study"
	Buy: 10
	Weight: 50
	BuyingStore: true
},
{
	Id: 11024
	AegisName: "Vital_Drink_CB"
	Name: "Vital Drink CB"
	Buy: 10
	Weight: 50
	BuyingStore: true
},
{
	Id: 11025
	AegisName: "Swordman_Book_Basic"
	Name: "Swordman Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11026
	AegisName: "Swordman_Book_Practice"
	Name: "Swordman Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11027
	AegisName: "Swrodman_Book_Misc"
	Name: "Swrodman Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11028
	AegisName: "Thief_Book_Basic"
	Name: "Thief Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11029
	AegisName: "Thief_Book_Practice"
	Name: "Thief Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11030
	AegisName: "Thief_Book_Misc"
	Name: "Thief Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11031
	AegisName: "Archer_Book_Basic"
	Name: "Archer Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11032
	AegisName: "Archer_Book_Practice"
	Name: "Archer Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11033
	AegisName: "Archer_Book_Misc"
	Name: "Archer Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11034
	AegisName: "Acol_Book_Basic"
	Name: "Acol Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11035
	AegisName: "Acol_Book_Practice"
	Name: "Acol Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11036
	AegisName: "Acol_Book_Misc"
	Name: "Acol Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11037
	AegisName: "Mage_Book_Basic"
	Name: "Mage Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11038
	AegisName: "Mage_Book_Practice"
	Name: "Mage Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11039
	AegisName: "Mage_Book_Misc"
	Name: "Mage Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11040
	AegisName: "Mer_Book_Basic"
	Name: "Mer Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11041
	AegisName: "Mer_Book_Practice"
	Name: "Mer Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11042
	AegisName: "Mer_Book_Misc"
	Name: "Mer Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11043
	AegisName: "TK_Book_Basic"
	Name: "TK Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11044
	AegisName: "TK_Book_Practice"
	Name: "TK Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11045
	AegisName: "TK_Book_Misc"
	Name: "TK Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11046
	AegisName: "Ninja_Book_Basic"
	Name: "Ninja Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11047
	AegisName: "Ninja_Book_Practice"
	Name: "Ninja Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11048
	AegisName: "Ninja_Book_Misc"
	Name: "Ninja Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11049
	AegisName: "Gun_Book_Basic"
	Name: "Gun Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11050
	AegisName: "Gun_Book_Practice"
	Name: "Gun Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11051
	AegisName: "Gun_Book_Misc"
	Name: "Gun Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11052
	AegisName: "SN_Book_Basic"
	Name: "SN Book Basic"
	Buy: 20
	Weight: 10
},
{
	Id: 11053
	AegisName: "SN_Book_Practice"
	Name: "SN Book Practice"
	Buy: 20
	Weight: 10
},
{
	Id: 11054
	AegisName: "SN_Book_Misc"
	Name: "SN Book Misc"
	Buy: 20
	Weight: 10
},
{
	Id: 11055
	AegisName: "Basic_Adventure"
	Name: "Basic Adventure"
	Buy: 20
	Weight: 10
},
{
	Id: 11056
	AegisName: "Spiritualism_Guide"
	Name: "Elemental Spirit Guide"
	Buy: 1000
	Weight: 10
},

//== More Usable Items =====================================
{
	Id: 11500
	AegisName: "Light_Yellow_Pot"
	Name: "Light Yellow Potion"
	Type: "IT_HEALING"
	Buy: 550
	Weight: 10
	Script: <" itemheal rand(175,235),0; ">
},
{
	Id: 11501
	AegisName: "Light_White_Pot"
	Name: "Light White Potion"
	Type: "IT_HEALING"
	Buy: 1200
	Weight: 10
	Script: <" itemheal rand(325,405),0; ">
},
{
	Id: 11502
	AegisName: "Light_Blue_Pot"
	Name: "Light Blue Potion"
	Type: "IT_HEALING"
	Buy: 5000
	Weight: 10
	Script: <" itemheal 0,rand(40,60); ">
},
{
	Id: 11503
	AegisName: "Siege_White_Potion"
	Name: "WoE White Potion"
	Type: "IT_HEALING"
	Weight: 100
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" itemheal rand(400,500),0; ">
},
{
	Id: 11504
	AegisName: "Siege_Blue_Potion"
	Name: "WoE Blue Potion"
	Type: "IT_HEALING"
	Weight: 100
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" itemheal 0,rand(50,70); ">
},
{
	Id: 11505
	AegisName: "Iris"
	Name: "Iris"
	Type: "IT_HEALING"
	Weight: 30
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nostorage: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" itemheal 0,150; ">
},
{
	Id: 11506
	AegisName: "Fanta_Orange"
	Name: "Fanta Orange"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11507
	AegisName: "Fanta_Grape"
	Name: "Fanta Grape"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11508
	AegisName: "Karada_Meguri_Tea"
	Name: "Karada Meguricha"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11509
	AegisName: "Royal_Milk_Tea"
	Name: "Black Tea Kochakaden"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11510
	AegisName: "Coke_Zero"
	Name: "Coca Cola Zero"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11511
	AegisName: "Coke_No_Cal"
	Name: "Diet Coca Cola"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11512
	AegisName: "Coca_Cola"
	Name: "Coca Cola"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11513
	AegisName: "Protect_Neck_Candy"
	Name: "Protect Neck Candy"
	Type: "IT_HEALING"
	Buy: 200
	Weight: 1
	BuyingStore: true
	Script: <" itemheal rand(5,25),0; ">
},
{
	Id: 11514
	AegisName: "Enriched_Slim_Pot"
	Name: "Enriched Slim Pot"
	Type: "IT_HEALING"
	Weight: 50
	Trade: {
		nodrop: true
		notrade: true
		noselltonpc: true
		nocart: true
		nogstorage: true
		nomail: true
		noauction: true
	}
	Script: <" itemheal rand(335,415),0; ">
},
{
	Id: 11515
	AegisName: "Coconut"
	Name: "Coconut"
	Type: "IT_HEALING"
	Buy: 1500
	Weight: 120
	BuyingStore: true
	Script: <" itemheal rand(300,400),0; ">
},
{
	Id: 11516
	AegisName: "Asai_Fruit"
	Name: "Asai Fruit"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 20
	BuyingStore: true
	Script: <" itemheal rand(16,22),0; ">
},
{
	Id: 11517
	AegisName: "Puri_Potion"
	Name: "Puri Potion"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	BuyingStore: true
	Script: <" itemheal rand(400,600),0; ">
},
{
	Id: 11518
	AegisName: "N_Blue_Potion"
	Name: "Blue Potion"
	Type: "IT_HEALING"
	Weight: 50
	Script: <" itemheal 0,5; ">
},
{
	Id: 11519
	AegisName: "Beef_Toast"
	Name: "Beef Toast"
	Type: "IT_HEALING"
	Buy: 650
	Weight: 40
	BuyingStore: true
	Script: <" itemheal rand(170,250),0; ">
},
{
	Id: 11520
	AegisName: "Mora_Mandarin"
	Name: "Mora Mandar"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 20
	BuyingStore: true
	Script: <" itemheal 0,rand(50,80); ">
},
{
	Id: 11521
	AegisName: "Pingui_Berry_Juice"
	Name: "Pingui Berry Juice"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 50
	BuyingStore: true
	Script: <" itemheal rand(400,800),rand(50,80); ">
},
{
	Id: 11522
	AegisName: "Red_Raffle_Sap"
	Name: "Red Raffle Sap"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Delay: 1000
	Script: <" itemheal rand(400,800),0; ">
},
{
	Id: 11523
	AegisName: "Yellow_Raffle_Sap"
	Name: "Yellow Raffle Sap"
	Type: "IT_HEALING"
	Buy: 2400
	Weight: 120
	BuyingStore: true
	Delay: 2000
	Script: <" itemheal rand(600,1000),0; ">
},
{
	Id: 11524
	AegisName: "White_Raffle_Sap"
	Name: "White Raffle Sap"
	Type: "IT_HEALING"
	Buy: 2800
	Weight: 140
	BuyingStore: true
	Delay: 3000
	Script: <" itemheal rand(800,1200),0; ">
},
{
	Id: 11525
	AegisName: "Mora_Hip_Tea"
	Name: "Mora HIp Tea"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 150
	BuyingStore: true
	Delay: 5000
	Script: <" itemheal rand(1500,2000),0; ">
},
{
	Id: 11526
	AegisName: "Rafflecino"
	Name: "Rafflecino"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	BuyingStore: true
	Script: <" itemheal 0,rand(120,160); ">
},
{
	Id: 11527
	AegisName: "Baklava"
	Name: "Baklava"
	Type: "IT_HEALING"
	Buy: 3500
	Weight: 600
	Script: <" itemheal 1200,440; ">
},
{
	Id: 11528
	AegisName: "Kanafeh"
	Name: "Kanafeh"
	Type: "IT_HEALING"
	Buy: 1500
	Weight: 200
	Script: <" itemheal 300,240; ">
},
{
	Id: 11529
	AegisName: "MAAMOUL_"
	Name: "Maamoul"
	Type: "IT_HEALING"
	Buy: 500
	Weight: 100
	Script: <" itemheal 120,60; ">
},
{
	Id: 11530
	AegisName: "Jujube"
	Name: "Jujube"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 100
	Script: <" itemheal 30,0; ">
},
{
	Id: 11531
	AegisName: "Coffee"
	Name: "Coffee"
	Type: "IT_HEALING"
	Buy: 10
	Weight: 100
	Script: <" itemheal 0,10; ">
},
{
	Id: 11602
	AegisName: "Catnip_Fruit"
	Name: "Catnip Fruit"
	Type: "IT_HEALING"
	Buy: 15
	Weight: 1
	Script: <" itemheal rand(10, 40), 0; ">
},
{
	Id: 11607
	AegisName: "Crepe"
	Name: "Crepe"
},
{
	Id: 11608
	AegisName: "Chocolate_Egg"
	Name: "Chocolate_Egg"
},
{
	Id: 11609
	AegisName: "Yummy_Cookie_Egg"
	Name: "Yummy_Cookie_Egg"
},
{
	Id: 11611
	AegisName: "Pop_Corn"
	Name: "Pop_Corn"
},
{
	Id: 11612
	AegisName: "Aromatic_Pop_Corn"
	Name: "Aromatic_Pop_Corn"
},
{
	Id: 11614
	AegisName: "Fresh_Milk"
	Name: "Fresh_Milk"
},
{
	Id: 11615
	AegisName: "Sweet_Potato_"
	Name: "Sweet_Potato_"
},
{
	Id: 11620
	AegisName: "Bearopy"
	Name: "Bearopy"
},
{
	Id: 11625
	AegisName: "Aromatic_Pop_Corn_"
	Name: "Aromatic_Pop_Corn_"
},
{
	Id: 11701
	AegisName: "Girl_Bunch_Of_Flower"
	Name: "Girl's Bouquet"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 50
	Script: <" itemheal rand(105,145),0; ">
},
{
	Id: 11702
	AegisName: "Moon_Cookie"
	Name: "Moon Cookie"
	Type: "IT_HEALING"
	Weight: 300
	Nouse: {
		sitting: true
	}
},
{
	Id: 11703
	AegisName: "Mysterious_Blood"
	Name: "Mystery Blood"
	Type: "IT_HEALING"
	Weight: 30
	Script: <" itemheal 0,rand(25,35); ">
},
{
	Id: 11704
	AegisName: "KETUPAT_F"
	Name: "Ketupat"
	Type: "IT_HEALING"
	Buy: 2
	Weight: 10
	Script: <" itemheal rand(70,90),0; ">
},
{
	Id: 11705
	AegisName: "Special_White_Potion"
	Name: "Children's Potion"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 10
	Script: <" itemheal rand(425,425),0; ">
},
{
	Id: 11706
	AegisName: "Steak"
	Name: "Steak"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 200
	Script: <" itemheal rand(700,1000),0; ">
},
{
	Id: 11707
	AegisName: "Roasted_Beef"
	Name: "Roast Beef"
	Type: "IT_HEALING"
	Buy: 1
	Weight: 200
	Script: <" itemheal 0,rand(100,200); ">
},
{
	Id: 11708
	AegisName: "Fore_Flank_Sirloin"
	Name: "Fore Flank Sirloin"
	Type: "IT_HEALING"
	Buy: 20
	Weight: 100
	Script: <" itemheal rand(30,50),rand(1,5); ">
},
{
	Id: 11709
	AegisName: "Fanta_Zero_Lemon"
	Name: "Fanta Zero Lemon"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11710
	AegisName: "Sakura_Mist"
	Name: "Sakura Mist"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11711
	AegisName: "Sakura_Milk_Tea"
	Name: "Sakura Milk Tea"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 11712
	AegisName: "First_Leaf_Tea"
	Name: "Flower"
	Type: "IT_HEALING"
	Buy: 800
	Weight: 100
	Script: <" itemheal rand(50,70),rand(10,12); ">
},
{
	Id: 12000
	AegisName: "Cold_Scroll_2_5"
	Name: "Level 5 Frost Diver"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill MG_FROSTDIVER,5; ">
},
{
	Id: 12001
	AegisName: "Holy_Scroll_1_3"
	Name: "Level 3 Heal"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill AL_HEAL,3; ">
},
{
	Id: 12002
	AegisName: "Holy_Scroll_1_5"
	Name: "Level 5 Heal"
	Type: "IT_USABLE"
	Buy: 2000
	Weight: 10
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill AL_HEAL,5; ">
},
{
	Id: 12003
	AegisName: "Holy_Scroll_2_1"
	Name: "Level 1 Teleport"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 10
	BuyingStore: true
	Script: <" itemskill AL_TELEPORT,1; ">
},
{
	Id: 12004
	AegisName: "Arrow_Container"
	Name: "Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1750,500; ">
},
{
	Id: 12005
	AegisName: "Iron_Arrow_Container"
	Name: "Iron Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1770,500; ">
},
{
	Id: 12006
	AegisName: "Steel_Arrow_Container"
	Name: "Steel Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1753,500; ">
},
{
	Id: 12007
	AegisName: "Ori_Arrow_Container"
	Name: "Oridecon Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1765,500; ">
},
{
	Id: 12008
	AegisName: "Fire_Arrow_Container"
	Name: "Fire Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1752,500; ">
},
{
	Id: 12009
	AegisName: "Silver_Arrow_Container"
	Name: "Silver Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1751,500; ">
},
{
	Id: 12010
	AegisName: "Wind_Arrow_Container"
	Name: "Wind Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1755,500; ">
},
{
	Id: 12011
	AegisName: "Stone_Arrow_Container"
	Name: "Stone Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1756,500; ">
},
{
	Id: 12012
	AegisName: "Crystal_Arrow_Container"
	Name: "Crystal Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1754,500; ">
},
{
	Id: 12013
	AegisName: "Shadow_Arrow_Container"
	Name: "Shadow Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1767,500; ">
},
{
	Id: 12014
	AegisName: "Imma_Arrow_Container"
	Name: "Immaterial Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1757,500; ">
},
{
	Id: 12015
	AegisName: "Rusty_Arrow_Container"
	Name: "Rusty Arrow Quiver"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 250
	BuyingStore: true
	Script: <" getitem 1762,500; ">
},
{
	Id: 12016
	AegisName: "Speed_Up_Potion"
	Name: "Speed Potion"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 100
	BuyingStore: true
	Script: <" sc_start SC_MOVHASTE_POTION, 5000, 100; ">
},
{
	Id: 12017
	AegisName: "Slow_Down_Potion"
	Name: "Slow Potion"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 100
	BuyingStore: true
	Script: <" sc_start SC_MOVESLOW_POTION, 5000, 100; ">
},
{
	Id: 12018
	AegisName: "Fire_Cracker"
	Name: "Firecracker"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 20
	BuyingStore: true
	Script: <" end; ">
},
{
	Id: 12019
	AegisName: "Holy_Egg"
	Name: "Holy Egg"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 150
	Script: <" itemskill ALL_RESURRECTION,2; ">
},
{
	Id: 12020
	AegisName: "Water_Of_Darkness"
	Name: "Cursed Water"
	Type: "IT_USABLE"
	Buy: 2
	Weight: 30
	BuyingStore: true
	Script: <" itemskill ITEM_ENCHANTARMS,8; ">
},
{
	Id: 12021
	AegisName: "Pork_Belly"
	Name: "Pork"
	Type: "IT_HEALING"
	Weight: 10
	Script: <" itemheal rand(70,99),0; ">
},
{
	Id: 12022
	AegisName: "Spareribs"
	Name: "Galbi"
	Type: "IT_HEALING"
	Weight: 10
	Script: <" itemheal rand(70,99),0; ">
},
{
	Id: 12023
	AegisName: "Giftbox_China"
	Name: "Wrapped Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	Script: <" getrandgroupitem 12023,1; ">
},
{
	Id: 12024
	AegisName: "Red_Pouch_Of_Surprise"
	Name: "Red Pouch"
	Type: "IT_USABLE"
	Buy: 50
	Weight: 50
	Script: <" monster "this",-1,-1,"--ja--",-4,1,""; ">
},
{
	Id: 12025
	AegisName: "Egg_Boy"
	Name: "Dano Festival Egg"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	Script: <" getrandgroupitem 12025,1; ">
},
{
	Id: 12026
	AegisName: "Egg_Girl"
	Name: "Dano Festival Egg"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	Script: <" getrandgroupitem 12026,1; ">
},
{
	Id: 12027
	AegisName: "Giggling_Box"
	Name: "Giggling Box"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <"
		percentheal 9,0;
		sc_start SC_CURSE,30000,0,3000,SCFLAG_NONE;
	">
},
{
	Id: 12028
	AegisName: "Box_Of_Thunder"
	Name: "Box of Thunder"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" sc_start SC_MOVHASTE_HORSE, 20000, 25; ">
},
{
	Id: 12029
	AegisName: "Gloomy_Box"
	Name: "Box of Gloom"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill AC_CONCENTRATION,1; ">
},
{
	Id: 12030
	AegisName: "Box_Of_Grudge"
	Name: "Box of Resentment"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" sc_start SC_PLUSATTACKPOWER, 60000, 20; ">
},
{
	Id: 12031
	AegisName: "Sleepy_Box"
	Name: "Box of Drowsiness"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" sc_start SC_PLUSMAGICPOWER, 60000, 20; ">
},
{
	Id: 12032
	AegisName: "Box_Of_Storm"
	Name: "Box of Storms"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" itemskill ITEM_ENCHANTARMS,2; ">
},
{
	Id: 12033
	AegisName: "Box_Of_Sunlight"
	Name: "Box of Sunlight"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <" sc_start SC_CLAIRVOYANCE,30000,0; ">
},
{
	Id: 12034
	AegisName: "Painting_Box"
	Name: "Box of Panting"
	Type: "IT_USABLE"
	Buy: 1000
	Weight: 200
	BuyingStore: true
	Nouse: {
		sitting: true
	}
	Script: <"
		percentheal 0,9;
		sc_start SC_SILENCE,30000,0,3000,SCFLAG_NONE;
	">
},
{
	Id: 12035
	AegisName: "Lotto_Box01"
	Name: "Lotto Box 01"
	Type: "IT_USABLE"
	Weight: 20
	Script: <" getrandgroupitem 12035,1; ">
},
{
	Id: 12036
	AegisName: "Lotto_Box02"
	Name: "Lotto Box 02"
	Type: "IT_USABLE"
	Weight: 20
	Script: <" getrandgroupitem 12036,1; ">
},
{
	Id: 12037
	AegisName: "Lotto_Box03"
	Name: "Lotto Box 03"
	Type: "IT_USABLE"
	Weight: 20
	Script: <" getrandgroupitem 12037,1; ">
},
{
	Id: 12038
	AegisName: "Lotto_Box04"
	Name: "Lotto Box 04"
	Type: "IT_USABLE"
	Weight: 20
	Script: <" getrandgroupitem 12038,1; ">
},
{
	Id: 12039
	AegisName: "Lotto_Box05"
	Name: "Lotto Box 05"
	Type: "IT_USABLE"
	Weight: 20
	Script: <" getrandgroupitem 12039,1; ">
},
{
	Id: 12040
	AegisName: "Stone_Of_Intelligence_"
	Name: "Stone of Sage"
	Type: "IT_USABLE"
	Buy: 100000
	Weight: 300
	BuyingStore: true
	Script: <" homevolution; ">
},
{
	Id: 12041
	AegisName: "Str_Dish01"
	Name: "Fried Grasshopper Legs"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 60
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,1;
		percentheal 5,0;
	">
},
{
	Id: 12042
	AegisName: "Str_Dish02"
	Name: "Seasoned Sticky Webfoot"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,2;
		percentheal 5,0;
	">
},
{
	Id: 12043
	AegisName: "Str_Dish03"
	Name: "Bomber Steak"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,3;
		percentheal 5,0;
	">
},
{
	Id: 12044
	AegisName: "Str_Dish04"
	Name: "Herb Marinade Beef"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,4;
		percentheal 5,0;
	">
},
{
	Id: 12045
	AegisName: "Str_Dish05"
	Name: "Lutie Lady's Pancake"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,5;
		percentheal 10,0;
	">
},
{
	Id: 12046
	AegisName: "Int_Dish01"
	Name: "Grape Juice Herbal Tea"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,1;
		percentheal 0,5;
	">
},
{
	Id: 12047
	AegisName: "Int_Dish02"
	Name: "Autumn Red Tea"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,2;
		percentheal 0,5;
	">
},
{
	Id: 12048
	AegisName: "Int_Dish03"
	Name: "Honey Herbal Tea"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,3;
		percentheal 0,5;
	">
},
{
	Id: 12049
	AegisName: "Int_Dish04"
	Name: "Morroc Fruit Wine"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 300
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,4;
		percentheal 0,5;
	">
},
{
	Id: 12050
	AegisName: "Int_Dish05"
	Name: "Mastela Fruit Wine"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 400
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,5;
		percentheal 0,10;
	">
},
{
	Id: 12051
	AegisName: "Vit_Dish01"
	Name: "Steamed Crab Nippers"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,1;
		percentheal 5,0;
	">
},
{
	Id: 12052
	AegisName: "Vit_Dish02"
	Name: "Assorted Seafood"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 200
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,2;
		percentheal 5,0;
	">
},
{
	Id: 12053
	AegisName: "Vit_Dish03"
	Name: "Clam Soup"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 300
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,3;
		percentheal 5,0;
	">
},
{
	Id: 12054
	AegisName: "Vit_Dish04"
	Name: "Seasoned Jellyfish"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,4;
		percentheal 5,0;
	">
},
{
	Id: 12055
	AegisName: "Vit_Dish05"
	Name: "Spicy Fried Bao"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 800
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,5;
		percentheal 10,0;
	">
},
{
	Id: 12056
	AegisName: "Agi_Dish01"
	Name: "Frog Egg Squid Ink Soup"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,1;
		percentheal 3,1;
	">
},
{
	Id: 12057
	AegisName: "Agi_Dish02"
	Name: "Smooth Noodle"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,2;
		percentheal 3,1;
	">
},
{
	Id: 12058
	AegisName: "Agi_Dish03"
	Name: "Tentacle Cheese Gratin"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,3;
		percentheal 3,1;
	">
},
{
	Id: 12059
	AegisName: "Agi_Dish04"
	Name: "Lutie Cold Noodle"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 400
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,4;
		percentheal 3,1;
	">
},
{
	Id: 12060
	AegisName: "Agi_Dish05"
	Name: "Steamed Bat Wing in Pumpkin"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,5;
		percentheal 6,2;
	">
},
{
	Id: 12061
	AegisName: "Dex_Dish01"
	Name: "Honey Grape Juice"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 100
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_DEX,1200000,1;
		percentheal 2,2;
	">
},
{
	Id: 12062
	AegisName: "Dex_Dish02"
	Name: "Chocolate Mousse Cake"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 200
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_DEX,1200000,2;
		percentheal 2,2;
	">
},
{
	Id: 12063
	AegisName: "Dex_Dish03"
	Name: "Fruit Mix"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 200
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_DEX,1200000,3;
		percentheal 2,2;
	">
},
{
	Id: 12064
	AegisName: "Dex_Dish04"
	Name: "Cream Sandwich"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_DEX,1200000,4;
		percentheal 2,2;
	">
},
{
	Id: 12065
	AegisName: "Dex_Dish05"
	Name: "Green Salad"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 200
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_DEX,1200000,5;
		percentheal 5,5;
	">
},
{
	Id: 12066
	AegisName: "Luk_Dish01"
	Name: "Fried Monkey Tails"
	Type: "IT_HEALING"
	Buy: 2000
	Weight: 60
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_LUK,1200000,1;
		percentheal 3,2;
	">
},
{
	Id: 12067
	AegisName: "Luk_Dish02"
	Name: "Mixed Juice"
	Type: "IT_HEALING"
	Buy: 4000
	Weight: 200
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_LUK,1200000,2;
		percentheal 3,2;
	">
},
{
	Id: 12068
	AegisName: "Luk_Dish03"
	Name: "Fried Sweet Potato"
	Type: "IT_HEALING"
	Buy: 6000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_LUK,1200000,3;
		percentheal 4,2;
	">
},
{
	Id: 12069
	AegisName: "Luk_Dish04"
	Name: "Steamed Ancient Lips"
	Type: "IT_HEALING"
	Buy: 8000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_LUK,1200000,4;
		percentheal 4,2;
	">
},
{
	Id: 12070
	AegisName: "Luk_Dish05"
	Name: "Fried Scorpion Tails"
	Type: "IT_HEALING"
	Buy: 10000
	Weight: 400
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_LUK,1200000,5;
		percentheal 5,2;
	">
},
{
	Id: 12071
	AegisName: "Str_Dish06"
	Name: "Shiny Marinade Beef"
	Type: "IT_HEALING"
	Buy: 20000
	Weight: 800
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,6;
		percentheal 10,2;
	">
},
{
	Id: 12072
	AegisName: "Str_Dish07"
	Name: "Whole Roast"
	Type: "IT_HEALING"
	Buy: 40000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,7;
		percentheal 10,4;
	">
},
{
	Id: 12073
	AegisName: "Str_Dish08"
	Name: "Bearfoot Special"
	Type: "IT_HEALING"
	Buy: 60000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,8;
		percentheal 15,6;
	">
},
{
	Id: 12074
	AegisName: "Str_Dish09"
	Name: "Tendon Satay"
	Type: "IT_HEALING"
	Buy: 80000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,9;
		percentheal 15,8;
	">
},
{
	Id: 12075
	AegisName: "Str_Dish10"
	Name: "Steamed Tongue"
	Type: "IT_HEALING"
	Buy: 100000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_STR,1200000,10;
		percentheal 20,10;
	">
},
{
	Id: 12076
	AegisName: "Int_Dish06"
	Name: "Red Mushroom Wine"
	Type: "IT_HEALING"
	Buy: 20000
	Weight: 300
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,6;
		percentheal 2,10;
	">
},
{
	Id: 12077
	AegisName: "Int_Dish07"
	Name: "Special Royal Jelly Herbal Tea"
	Type: "IT_HEALING"
	Buy: 40000
	Weight: 800
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,7;
		percentheal 4,10;
	">
},
{
	Id: 12078
	AegisName: "Int_Dish08"
	Name: "Royal Family Tea"
	Type: "IT_HEALING"
	Buy: 60000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,8;
		percentheal 6,10;
	">
},
{
	Id: 12079
	AegisName: "Int_Dish09"
	Name: "Tristan XII"
	Type: "IT_HEALING"
	Buy: 80000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,9;
		percentheal 8,15;
	">
},
{
	Id: 12080
	AegisName: "Int_Dish10"
	Name: "Dragon Breath Cocktail"
	Type: "IT_HEALING"
	Buy: 100000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_INT,1200000,10;
		percentheal 10,20;
	">
},
{
	Id: 12081
	AegisName: "Vit_Dish06"
	Name: "Awfully Bitter Bracer"
	Type: "IT_HEALING"
	Buy: 20000
	Weight: 500
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,6;
		percentheal 13,0;
	">
},
{
	Id: 12082
	AegisName: "Vit_Dish07"
	Name: "Sumptuous Feast"
	Type: "IT_HEALING"
	Buy: 40000
	Weight: 400
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,7;
		percentheal 16,0;
	">
},
{
	Id: 12083
	AegisName: "Vit_Dish08"
	Name: "Giant Burito"
	Type: "IT_HEALING"
	Buy: 60000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,8;
		percentheal 19,0;
	">
},
{
	Id: 12084
	AegisName: "Vit_Dish09"
	Name: "Ascending Dragon Soup"
	Type: "IT_HEALING"
	Buy: 80000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,9;
		percentheal 22,0;
	">
},
{
	Id: 12085
	AegisName: "Vit_Dish10"
	Name: "Immortal Stew"
	Type: "IT_HEALING"
	Buy: 100000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_VIT,1200000,10;
		percentheal 25,0;
	">
},
{
	Id: 12086
	AegisName: "Agi_Dish06"
	Name: "Chile Shrimp Gratin"
	Type: "IT_HEALING"
	Buy: 20000
	Weight: 800
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,6;
		percentheal 7,2;
	">
},
{
	Id: 12087
	AegisName: "Agi_Dish07"
	Name: "Steamed Alligator with Vegetable"
	Type: "IT_HEALING"
	Buy: 40000
	Weight: 800
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,7;
		percentheal 8,2;
	">
},
{
	Id: 12088
	AegisName: "Agi_Dish08"
	Name: "Incredibly Spicy Curry"
	Type: "IT_HEALING"
	Buy: 60000
	Weight: 1000
	BuyingStore: true
	Script: <"
		sc_start SC_FOOD_AGI,1200000,8;
		percentheal 9,2;
	">
},
{
	Id: 12089
	AegisName: "Agi_Dish09"
	Name: "Special Meat Stew"
	Type: "IT_HEALING"
	Buy: 80000
	Weight: 1000
	Script: <"
	">