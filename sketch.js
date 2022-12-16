var pos=prompt("Insert the number of infected people");
var neg=prompt("Insert the number of uninfected people");
var vac=prompt("Insert the number of vaccinated people");
var density=prompt("Insert the density");
var person
var people=[]
var tb,bb,lb,rb

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  lb=createSprite(0,(windowHeight-10)/2,5,windowHeight-10)
  rb=createSprite(windowWidth-10,(windowHeight-10)/2,5,windowHeight-10)
  tb=createSprite((windowWidth-10)/2,0,windowWidth-10,5)
  bb=createSprite(windowWidth-10,windowHeight-10,windowWidth-10,5)


  for(i=0;i<pos;i++){
  person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
  person.shapeColor="red"
  people.push(person)
  }
  for(i=0;i<neg;i++){
  person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
  person.shapeColor="gray"
  people.push(person)
  }
  for(i=0;i<vac;i++){
    person=createSprite(random(0,windowWidth),random(0,windowHeight),density,density)
    person.shapeColor="blue"
    people.push(person)
    }
}

function draw() {
  background(30);
  let l=people.length
for(i=0;i<l;i++){
  if(frameCount%24==0){
  people[i].velocityX=random(-5,5)
  people[i].velocityY=random(-5,5)
  }
  for(j=0;j<l;j++){
    if(people[i].isTouching(people[j])){
      //g-r
      if(people[i].shapeColor=="gray"&&people[j].shapeColor=="red"){
        let c=Math.round(random(1,4))
        if(c==1){}
        else{
        people[i].shapeColor="red"
        }
      }
      //g-r
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="gray"){
        let c=Math.round(random(1,2))
        if(c==1){
        people[j].shapeColor="blue"
        }
      }
      //g-r
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="red"){
        let c=Math.round(random(1,10))
        if(c==1||c==2){     
        people[i].shapeColor="purple"
        }
        if(c==1||c==3||c==4||c==5||c==6){
          people[j].shapeColor="purple"
        }
      }
      //
      if(people[i].shapeColor=="gray"&&people[j].shapeColor=="purple"){
        let c=Math.round(random(1,4))
        if(c==1){}
        if(c==2){
          people[i].shapeColor=="blue"
        }
        if(c==3){
          people[i].shapeColor=="red"
        }
        if(c==4){
          people[i].shapeColor=="purple"
        }
       
      }
      if(people[i].shapeColor=="blue"&&people[j].shapeColor=="purple"){
        let c=Math.round(random(1,10))
        if(c==1){
          people[i].shapeColor="purple"
        }
    
        
      }
     
        








    }
  }
  let r=Math.round(random(1,96))
  if(r==1){
    if(people[i].shapeColor=="red"){
    people[i].shapeColor="gray"
    }
  }
  let r2=Math.round(random(1,18))
  if(r2==1){

    if(people[i].shapeColor=="purple"){
      people[i].shapeColor="blue"
      }
  }






  if(people[i].isTouching(tb)){
    people[i].y+=10
  }  
  if(people[i].isTouching(bb)){
    people[i].y-=10
  }
  if(people[i].isTouching(lb)){
    people[i].x+=10
  }
  if(people[i].isTouching(rb)){
    people[i].x-=10
  }


}

drawSprites();

}

