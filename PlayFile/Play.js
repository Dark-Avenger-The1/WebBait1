
const carModel = ["Tracker","Jalpa","Gallardo","Patrol","Testarossa","Quattrovalvole","Dome Zero","Diablo VT"];
let carRate = [2,2,3,3,3,4,4,5];
let carSpeed = [2,4,3,3,4,4,5,4];
let carAccelaration = [3,2,4,2,4,4,4,5];
let carRoadGrip = [3,2,3,3,2,2,3,4];
let carHandling = [4,2,2,3,2,3,2,4];
let pageNum = 1;
let carPick = false;

//Buttons
let upwardButton = document.getElementById('up');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 =document.getElementById('button3');
let button4= document.getElementById('button4');
let downwardButton = document.getElementById('down');

//Button Active
upwardButton.onclick = function(){
    if(pageNum>1){
        pageNum--;
        page(pageNum);
    }
    
};
button1.onclick = function(){
    resetDisplayStar();

    switch(pageNum){
        
        case 1:
            carPick = true;
            document.getElementById('carName').innerText=carModel[0];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car1.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[0];i++){
                document.getElementById("starRate"+i).style.color="yellow";

            }
            //Car Stats
            for(let i =1; i<=carSpeed[0];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[0];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[0];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[0];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;
        case 2:
            carPick = true;
            document.getElementById('carName').innerText=carModel[4];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car5.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[4];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats 
            for(let i =1; i<=carSpeed[4];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[4];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[4];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[4];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;    
    }
};

button2.onclick = function(){
    resetDisplayStar();
    switch(pageNum){
        case 1:
            carPick = true;
            document.getElementById('carName').innerText=carModel[1];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car2.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[1];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats
            for(let i =1; i<=carSpeed[1];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[1];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[1];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[1];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;
        case 2:
            carPick = true;
            document.getElementById('carName').innerText=carModel[5];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car6.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[5];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats 
            for(let i =1; i<=carSpeed[5];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[5];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[5];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[5];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;    
    }
};

button3.onclick = function(){
    resetDisplayStar();
    switch(pageNum){
        case 1:
            carPick = true;
            document.getElementById('carName').innerText=carModel[2];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car3.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[2];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats
            for(let i =1; i<=carSpeed[2];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[2];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[2];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[2];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;
        case 2:
            carPick = true;
            document.getElementById('carName').innerText=carModel[6];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car7.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[6];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats 
            for(let i =1; i<=carSpeed[6];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[6];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[6];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[6];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;    
    }
};

button4.onclick = function(){
    resetDisplayStar();
    switch(pageNum){
        case 1:
            carPick = true;
            document.getElementById('carName').innerText=carModel[3];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car4.gif";
            //Car Star Rate
            for(let i=1;i<=carRate[3];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats
            for(let i =1; i<=carSpeed[3];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[3];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[3];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[3];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;
        case 2:
            carPick = true;
            document.getElementById('carName').innerText=carModel[7];
            //Car Image Display Change
            document.getElementById('carDisplay').src="CarModel/car8.webp";
            //Car Star Rate
            for(let i=1;i<=carRate[7];i++){
                document.getElementById("starRate"+i).style.color="yellow";
            }
            //Car Stats 
            for(let i =1; i<=carSpeed[7];i++){
                document.getElementById('speedStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carAccelaration[7];i++){
                document.getElementById('accelStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carRoadGrip[7];i++){
                document.getElementById('breakStarDisplay'+i).style.backgroundColor="#871059";
            }
            for(let i =1; i<=carHandling[7];i++){
                document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#871059";
            }
            carSelect(carPick);
            break;
                
    }
};

downwardButton.onclick = function(){
    if(pageNum<2){
        pageNum++;
        page(pageNum);
    }
    
};

//Methods Section

/*Page Display Method check the num of the 
page and update the buttons*/
function page(num){
    //Use to reset the Star everytime you change page
    resetPageStar();
    //Page 1
    if(num===1){
        document.getElementById('img1').src="CarModel/car1.gif";
        document.getElementById('img2').src="CarModel/car2.gif";
        document.getElementById('img3').src="CarModel/car3.gif";
        document.getElementById('img4').src="CarModel/car4.gif";
        for(let i=0;i<4;i++){
            document.getElementById('carName'+(i+1)).innerText=carModel[i];
        }
        for(let i=1;i<=4;i++){
            for(let j=1;j<=carRate[i-1];j++){
                document.getElementById("button"+i+"Star"+j).style.color="yellow";
            }
        }
    }
    //Page2
    else if(num===2){
        document.getElementById('img1').src="CarModel/car5.gif";
        document.getElementById('img2').src="CarModel/car6.gif";
        document.getElementById('img3').src="CarModel/car7.gif";
        document.getElementById('img4').src="CarModel/car8.webp";
        let carPlace=1;
        for(let i=4;i<8;i++){
            document.getElementById('carName'+carPlace).innerText=carModel[i];
            carPlace++;
        }
         for(let i=1;i<=4;i++){
            for(let j=1;j<=carRate[(i+2)+1];j++){
                document.getElementById("button"+i+"Star"+j).style.color="yellow";
            }
        }
    }
};

function resetPageStar(){
    for(let i=1;i<=4;i++){
            for(let j=1;j<=5;j++){
                document.getElementById("button"+i+"Star"+j).style.color="white";
            }
        }
}

function resetDisplayStar(){
    for(let i=1;i<=5;i++){
        document.getElementById("starRate"+i).style.color="#575352";
    }
    for(let i =1; i<=5;i++){
        document.getElementById('speedStarDisplay'+i).style.backgroundColor="#575352";
    }
    for(let i =1; i<=5;i++){
        document.getElementById('accelStarDisplay'+i).style.backgroundColor="#575352";
    }
    for(let i =1; i<=5;i++){
        document.getElementById('breakStarDisplay'+i).style.backgroundColor="#575352";
    }
    for(let i =1; i<=5;i++){
        document.getElementById('handlingStarDisplay'+i).style.backgroundColor="#575352";
    }
        
}

//Function if when you choose a car
function carSelect(checker){
    if(checker){
        document.getElementById('linkPlay').style.textShadow="1px 1px 10px #13f1fc, 1px 1px 10px #f5f3f3";
        document.getElementById('linkPlay').href="https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1";
        document.getElementById('playButton').style.boxShadow="1px 1px 10px #13f1fc, 1px 1px 10px #f5f3f3";
    }
    
}