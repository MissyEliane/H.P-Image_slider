// Setting the images as array items which assigns numbers 0 to 2 to them
let images = [
    "https://res.cloudinary.com/djeiqvu10/image/upload/v1673733997/My%20project%20Folder/when-emma-watson-almost-quit-the-harry-potter-film-franchise-hermione-granger-would-be-proud-of-it-01_ixdwzn.jpg",
    "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735069/My%20project%20Folder/landscape-1446218645-ron-weasley_eqbail.jpg", 
    
   "https://res.cloudinary.com/djeiqvu10/image/upload/v1673734146/My%20project%20Folder/dumbledore-c475b3b_zswnmc.jpg",
     "https://res.cloudinary.com/djeiqvu10/image/upload/v1673734466/My%20project%20Folder/Lordvoldemort_nrqgny.jpg",
   
   "https://res.cloudinary.com/djeiqvu10/image/upload/v1673734487/My%20project%20Folder/snape_640x480_71452776743_ppgjel.webp",
 "https://res.cloudinary.com/djeiqvu10/image/upload/v1673734508/My%20project%20Folder/_127163152_hagrid_hyalca.jpg",
   "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735052/My%20project%20Folder/Screenshot-from-2019-12-27-09-49-58_kut0gq.png",
     "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735087/My%20project%20Folder/nintchdbpict000280151971_ksxbew.jpg",
    "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735101/My%20project%20Folder/bellatrix_xzcngs.webp",
   
"https://res.cloudinary.com/djeiqvu10/image/upload/v1673735156/My%20project%20Folder/dursleys-141203_i4pptb.jpg",
 
"https://res.cloudinary.com/djeiqvu10/image/upload/v1673735389/My%20project%20Folder/ginny_web_uhoboy.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735740/My%20project%20Folder/HP-F8-deathly-hallows-part-2-molly-duel-wand-fierce-web-landscape_ucdfx5.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673735758/My%20project%20Folder/Draco-Malfoy.Harry-Potter-Series_u2bek9.webp",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673736581/56756476b352ebbb_MCDHAPO_EC453_H_lavxrd.webp",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673736791/be8cd5c5-c9b4-481d-bcbb-8a1c75f6c2e9_kr2015.avif",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737060/def709deeaf8531265cdb15fc50597ff--so-funny-funny-stuff_wj1ryo.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737073/Harry-Potter-and-the-Deathly-Hallows-Part-2-Neville-Longbottom_e6kglm.avif",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737315/luna-lovegood_sriw0c.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737334/download_dolores_evnrkx.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737760/arthur_f9zziw.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737860/425px-Argus_Filch_-_Edited_tboxr1.png",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737776/rs4t5v03go851_mea9ax.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673737884/SybilTrelawney_WB_F3_HeadshotOfTrelawney_Still_080615_Land_knutfq.jpg",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673753651/RemusLupin_tscmek.webp",
  "https://res.cloudinary.com/djeiqvu10/image/upload/v1673753665/09c68fbcc179295c934486a4a7f41193_svjbq6.jpg"
];

// Setting num to equal the first image in the array
let num = 0;


// Creating function for next button
function next() {
	// Creating slider var and assigning the element with the id of 'slider' to it (in the html)
	let slider = document.getElementById('slider');
	// Increment num to the next item in the array
	num++;
	// Condition where if the array is at the last position (greater or equal to), length being 2 (0,1,2), its position will reset to 0
	if(num >= images.length) {
		num = 0;
	}
	// Assigning the sliders source attribute in html element to our 'num' variable, which is an array number that changes with our function
	slider.src = images[num];
}


// Setting up the previous button
function prev() {
	// Same as next button, assigns var slider to html element with 'slider' as its id
	let slider = document.getElementById('slider');
	// Increments the num var which is an array item down one
	num--;
	// Condition where if it is already at the first array item, it will then cycle to the last one. Basically in the array if 0 is the first array item, minus 1 will move it to the last item. Sounds more confusing then it is.
	if(num < 0) {
		num = images.length-1;
	}
	// Lastly, as in the function 'next', assign the sliders src attribute (html) to our changing num array item
	slider.src = images[num];
}