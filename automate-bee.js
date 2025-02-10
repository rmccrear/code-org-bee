
// You can change this function to automate the bee
// Use the functions turnLeft(), turnRight(), moveForward(), gatherPollen(), and makeHoney()
// Make use of if and for statements to control the bee
// Can you get the bee to collect all the pollen and make all its honey?
function automateBee() {
  alert("Edit the file automate-bee.js to automate the bee, yourself");
  // 
  moveForward();
  if(atFlower()){
    gatherPollen();
  }
}