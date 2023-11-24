(function(){
        console.info("Hello JS");
        const myNode = document.createElement("div");
        const digitalclock = document.getElementById("digitalClock");
        digitalclock.appendChild(myNode);

        const secondHand = document.getElementById("secondHand");
        const minHand = document.getElementById("minHand");
        const hrHand = document.getElementById("hrHand");

 const updateClockHands = (myDate) => {
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
  };

  const updateTime = () => {
    console.info("tick tock");
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    updateClockHands(myDate);
  };       
   

    
;
setInterval(updateTime, 1000);



})();

