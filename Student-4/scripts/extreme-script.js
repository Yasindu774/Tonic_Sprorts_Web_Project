function changeImage(fileName){
    var displayImage = document.getElementById("main-image");
    var displaText = document.getElementById("main-details");
    var displaHeader = document.getElementById("main-details-header");
    displayImage.setAttribute("src",fileName);
    if(fileName == 'images/image-extreme/details-images/1.jpg'){
        displaHeader.innerHTML = "Motocross";
        displaText.innerHTML = "Motocross first evolved in Britain from motorcycle trials competitions, such as the Auto-Cycle Clubs's first quarterly trial in 1909 and the Scottish Six Days Trial that began in 1912. When organisers dispensed with delicate balancing and strict scoring of trials in favour of a race to become the fastest rider to the finish, the activity became known as 'hare scrambles', said to have originated in the phrase, 'a rare old scramble' describing one such early race."
    }
    else if(fileName == 'images/image-extreme/details-images/2.jpg'){
        displaHeader.innerHTML = "Surfing";
        displaText.innerHTML = "Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found on ocean shores, but can also be found in standing waves in the open ocean, in lakes, in rivers in the form of a tidal bore, or in wave pools."

    }
    else if(fileName == 'images/image-extreme/details-images/3.jpg'){
        displaHeader.innerHTML = "Parachuting";
        displaText.innerHTML = "Parachuting, including also skydiving, is a method of transiting from a high point in the atmosphere to the surface of Earth with the aid of gravity, involving the control of speed during the descent using a parachute or parachutes. For human skydiving, it may involve a phase of more or less free-falling (the skydiving segment) which is a period when the parachute has not yet been deployed and the body gradually accelerates to terminal velocity."

    }
    else if(fileName == 'images/image-extreme/details-images/4.jpg'){
        displaHeader.innerHTML = "Rock climbing";
        displaText.innerHTML = "Rock climbing is a sport in which participants climb up, across, or down natural rock formations. The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling. Rock climbing is a physically and mentally demanding sport, one that often tests a climber's strength, endurance, agility and balance along with mental control."

    }
    else if(fileName == 'images/image-extreme/details-images/5.jpg'){
        displaHeader.innerHTML = "Snorkeling";
        displaText.innerHTML = "Snorkeling is the practice of swimming on or through a body of water while equipped with a diving mask, a shaped breathing tube called a snorkel, and usually swimfins. In cooler waters, a wetsuit may also be worn. The use of this equipment allows the snorkeler to observe underwater attractions for extended periods with relatively little effort and to breathe while face-down at the surface."
    }
}