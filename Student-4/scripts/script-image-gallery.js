//Reference for Blur Background - https://www.w3schools.com/howto/howto_css_blurred_background.asp
function toggle(game){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    let  x = document.getElementById('text-heading');
    let y = document.getElementById('text-para');
    x.innerHTML = game;
    if(game =='Football'){
        y.innerHTML = "Football is a physically hard and intensely competitive sport that calls for talent, teamwork, and athleticism. To excel in the game, players need to have strong ball control, speed, agility, and endurance. Several millions of people participate in amateur and professional leagues since the sport is so well-liked across the world. Football has also generated controversy due to disagreements about the game's regulations, player safety, and off-field conduct. Despite these problems, football continues to be a cherished sport that thrill and delight millions of followers worldwide.";
    }
    else if(game == 'Basketball'){
        y.innerHTML = "Basketball is a team sport that is played using a ball and hoop. The goal is to put the ball through the hoop while protecting one's own basket in order to score points. Dr. James Naismith created the game in 1891, and since then it has gained popularity as a leisure and competitive pastime all over the world. To succeed in the game, you need quick reflexes, strong hand-eye coordination, and top-notch physical condition. Basketball is played at all levels, from amateur to professional, and has been an Olympic sport since 1936.";
    }
    else if(game == 'Swimming'){
        y.innerHTML = "Swimmers use a variety of strokes and methods to move through the water, making it a popular solo and team activity. It is a very efficient type of cardiovascular workout that can enhance general health and fitness. Swimming is frequently employed as a kind of therapy but may simply be done for fun. All levels of competition, including the Olympics, have competitive swimming disciplines that call on extraordinary speed, strength, and endurance.";
    }
    else if(game == 'Baseball'){
        y.innerHTML = "Baseball is a two-team sport with nine players on each squad. The goal is to score runs by sprinting around four bases and hitting a ball with a bat. A mix of physical and cerebral abilities, such as hand-eye coordination, quickness, and tactical thinking, are needed to succeed in this highly complex game. Baseball has a long history in the United States and is sometimes referred to as 'America's pastime. Major League Baseball is one of the most well-liked professional sports leagues in the nation.";
    }
    else if(game == 'Cycling'){
        y.innerHTML = "Cycling is a well-liked activity in which participants ride bicycles for sport, leisure, or fitness. It may be done at various distances and on a variety of surfaces, including highways, trails, and mountains. Cycling is a great cardiovascular workout that may enhance general health and fitness. Road races, time trials, and track races are among the competitive cycling activities that call for remarkable physical stamina.";
    }
    else if(game == 'IceSurf'){
        y.innerHTML = "Ice surfing are used for the winter pastime of 'ice sailing,'' which includes sailing on ice while propelled by sails. In a manner comparable to sailing on water, the ship travels on ice while being powered by the wind. Ice sailing calls for a mix of physical stamina and ability and may be done on frozen lakes, rivers, and bays. For people who appreciate speed and excitement, it is an exciting and exhilarating pastime.";
    }
    else if(game == 'Badminton'){
        y.innerHTML = "A racket sport called badminton is played by two to four participants. To make it tough for the opponent to return, the goal is to hit a shuttlecock over a net and land it in their court. Badminton is a highly skilled and physically taxing sport that calls for a combination of speed, agility, and accuracy. It is an Olympic sport and is practiced at all levels, from amateur to professional.";
    }
    else if(game == 'Boxing'){
        y.innerHTML = "In the combat sport of boxing, two competitors compete against one another in strength, speed, and skill while donning gloves. The goal is to punch the opponent while avoiding getting punched back. Physically demanding sports like boxing demand a high level of fitness and mental fortitude. It's a well-liked sport that is played all over the world and has been an Olympic sport since 1904.";
    }
    else if(game == 'Hill Climb'){
        y.innerHTML = "Ascending mountains or other difficult terrain is a sport known as mountain climbing, sometimes known as mountaineering. It necessitates technical expertise, endurance, and both mental and physical fortitude. Mountaineers must traverse difficult, frequently erratic terrain while contending with severe weather. Mountain climbing may be risky, so it's important to get the right training and gear. It is a well-liked outdoor pastime that gives devotees a sense of challenge and adventure.";
    }
    else if(game == 'American Football'){
        y.innerHTML = "American football is a well-liked contact sport in which two teams of eleven players each compete. By carrying or tossing the ball into the end zone of the opposition, you may score points. Physical strength, quickness, and smart thinking are all needed for American football. The National Football League (NFL) is the most well-known professional league in the nation. It is a fiercely competitive sport that is extensively followed and enjoyed in the US.";
    }
    else if(game == 'Vollyball'){
        y.innerHTML = "In the team sport of volleyball, there are two groups of six players each. The aim of the game is to earn points by launching a ball over a net and onto the court of the opposition while keeping them from doing the same. A mix of athletic agility, coordination, and strategic thinking are required for volleyball. It is a well-liked leisure and competitive activity that may be played both inside and outdoors. Important international contests like the Olympics and World Championships are held in this sport.";
    }
    else if(game == 'Athletic'){
        y.innerHTML = "Running, leaping, and throwing events are all included in the sport category known as athletics, or track and field. It is a very difficult and competitive sport since it calls for a mix of speed, strength, and endurance. With multiple world championships and other international tournaments, athletics is a well-liked activity that is played all over the world and is also an Olympic sport.";
    }
    else if(game == 'Surf'){
        y.innerHTML = "Surfing is a water activity that includes using a surfboard to ride the waves. To glide through the waves and carry out tricks like slicing, cutbacks, and aerials, one needs talent, balance, and physical condition. Surfing is a well-liked leisure and competitive activity all over the world and may be practiced in a variety of wave conditions, from tiny and gentle to enormous and powerful.";
    }
    else if(game == 'Boat Riding'){
        y.innerHTML = "The action of operating a boat, such as a motorboat, sailboat, or kayak on a body of water is referred to as boating or boat riding. It needs navigational and marine safety expertise and can be done for recreation or sport. Boating is a well-liked pastime that offers the chance to discover rivers and take in the outdoors.";
    }
    else if(game == 'Bike Racing'){
        y.innerHTML = "Bicycles are raced in the sport of bike racing, which can take place on a track, a road, or an off-road course. It necessitates technical proficiency, strategic thought, and physical condition. Cycle racing is a well-liked amateur and professional activity that may be played either solo or in a team setting. The Tour de France, Giro d'Italia, and Vuelta a Espaa are three of the most important international cycle racing competitions.";

    }
    else if(game == 'Marathon'){
        y.innerHTML = "A marathon is a type of long-distance race that covers 26.2 miles or 42.195 kilometers. It takes stamina, mental fortitude, and deliberate pace. Marathons may be performed on your own or as a team and are often staged as a road race. The Boston Marathon, run every year since 1897, is the most well-known marathon competition.";

    }
    else if(game == 'Tennis'){
        y.innerHTML = "Tennis is a common racquet sport that is played on a court with a net between two or four players. The goal of the game is to advance the ball into the other team's court while stopping the other team from doing the same. Physical agility, coordination, and strategic thinking are all necessary for playing tennis. It is a popular sport with significant international events like Wimbledon and the US Open.";

    }
    else if(game == 'Cricket'){
        y.innerHTML = "Cricket is a well-liked team sport in which two teams of eleven players each compete. The goal of the game is to run between two sets of wickets and strike a ball with a bat in order to score more runs than the opposition. Cricket needs a blend of technical expertise, physical preparedness, and strategic planning. It is a popular sport that is played and watched worldwide, particularly in nations like England, India, and Australia.";

    }
}

function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}

// Reference for changing Randomly Background color using HEX values - https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php 
function getRandomColor(){
    var symbols,color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(var i = 0; i<6; i++){
        color= color + symbols[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = color;
}