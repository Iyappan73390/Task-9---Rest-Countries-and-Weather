let apiURL = "https://restcountries.eu/rest/v2/all";

let modelmain = document.createElement("div");
modelmain.className = "modal fade";
modelmain.id = "staticBackdrop";
modelmain.setAttribute('data-bs-backdrop','static');
modelmain.setAttribute('data-bs-keyboard','false');
modelmain.setAttribute('tabindex','-1');
modelmain.setAttribute('aria-labelledby','staticBackdropLabel');
modelmain.setAttribute('aria-hidden','true');
document.querySelector('body').appendChild(modelmain);

let modeldialog = document.createElement("div");
modeldialog.className = "modal-dialog modal-dialog-centered ";
modelmain.appendChild(modeldialog);

let modelcontent = document.createElement("div");
modelcontent.className = "modal-content";
modeldialog.appendChild(modelcontent);

let modelheader = document.createElement("div");
modelheader.className = "modal-header";
modelcontent.appendChild(modelheader);

let modeltitle = document.createElement("h5");
modeltitle.className = "modal-title";
modeltitle.id="staticBackdropLabel";
let modeltitletext = document.createTextNode('Modal title');
modeltitle.appendChild(modeltitletext);
modelheader.appendChild(modeltitle);

let modelbutton = document.createElement("button");
modelbutton.className = "btn-close";
modelbutton.setAttribute('type','button');
modelbutton.setAttribute('data-bs-dismiss','modal');
modelbutton.setAttribute('aria-label','Close');
modelheader.appendChild(modelbutton);

let modelbody = document.createElement("p");
modelbody.className = "modal-body";
modelcontent.appendChild(modelbody);
let modelbody1 = document.createElement("p");
modelbody1.className = "body1";
modelcontent.appendChild(modelbody1);
let modelbody2 = document.createElement("img");
modelbody2.className = "body2 myicon";
modelcontent.appendChild(modelbody2);

let modelfooter = document.createElement("div");
modelfooter.className = "modal-footer";
modelcontent.appendChild(modelfooter);

let footerbutton = document.createElement("button");
footerbutton.className = "btn btn-secondary";
footerbutton.setAttribute('data-bs-dismiss','modal');
let buttonclose = document.createTextNode('Close');
modelfooter.appendChild(footerbutton);
footerbutton.appendChild(buttonclose);

fetch(apiURL).then((data)=>{
    return data.json();
}).then((data)=>{
    data.forEach(element => {


    let cname = element.name;
    let cflag = element.flag;
    let ccapital = element.capital;
    let ccode = element.alpha2Code+","+element.alpha3Code;
    let cregion = element.region;
    let clatlong = element.latlng;
    

    let card = document.createElement("div");
    card.className ='row col-sm-3 card' ;

    document.querySelector('body').appendChild(card); 


    let head = document.createElement("h5");
    head.className ='card-title ctitle';
    let CountryName = document.createTextNode(cname);
    head.appendChild(CountryName);
    card.appendChild(head);
    
    let image = document.createElement("img");
    image.className = 'card-img-top';
    image.setAttribute('src',cflag);
    card.appendChild(image);

    let row1 = document.createElement("div");
    card.appendChild(row1);

    let p1left = document.createElement("p");
    p1left.className ='cap1';
    let countrycapital = document.createTextNode("Capital :");
    p1left.appendChild(countrycapital);
    row1.appendChild(p1left);
    
    let p1right = document.createElement("p");
    p1right.className = 'btn btn-success btn-sm cap2';
    let ccap = document.createTextNode(" "+ccapital);
    p1right.appendChild(ccap);
    row1.appendChild(p1right);

    let row2 = document.createElement("div")
    card.appendChild(row2);

    let p2left = document.createElement("p");
    p2left.className = 'cod1';
    let countrycode = document.createTextNode("Code :"+" ");
    p2left.appendChild(countrycode);
    row2.appendChild(p2left);
    
    let p2right = document.createElement("p");
    p2right.className = 'cod2';
    let cocode = document.createTextNode(+" "+ccode)
    p2right.appendChild(cocode);
    row2.appendChild(p2right);

    let row3 = document.createElement("div");
    card.appendChild(row3);

    let p3left = document.createElement("p");
    p3left.className = 'reg1';
    let countryregion = document.createTextNode("Region :"+" ");
    p3left.appendChild(countryregion);
    row3.appendChild(p3left);

    let p3right = document.createElement("p")
    p3right.className = 'reg2'
    let coregion = document.createTextNode(+" "+cregion);
    p3right.appendChild(coregion);
    row3.appendChild(p3right);

    let row4 = document.createElement("div")
    card.appendChild(row4);

    let p4left = document.createElement("p");
    p4left.className = 'lat1';
    let countrylatlong = document.createTextNode("latlong :"+" ");
    p4left.appendChild(countrylatlong);
    row4.appendChild(p4left);

    let p4right = document.createElement("p");
    p4right.className = 'lat2';
    let colatlong = document.createTextNode(+" "+clatlong);
    p4right.appendChild(colatlong);
    row4.appendChild(p4right);

    let row5 = document.createElement("div")
    card.appendChild(row5);

    let button = document.createElement("button");
    button.className = "btn btn-outline-secondary"
    button.setAttribute('type','button');
    button.setAttribute('data-bs-toggle','modal');
    button.setAttribute('data-bs-target','#staticBackdrop');
    button.addEventListener('click',myfunction);
    let buttontext = document.createTextNode("click for whether");
    button.appendChild(buttontext);
    row5.appendChild(button);
    

     function myfunction(){
        let clat = element.latlng[0]
        let clng = element.latlng[1]
        let whetherkey = "0316f13e1102161dbbe49853dc046254";
        let whetherCountry = element.name;
        let whetherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+clat+"&lon="+clng+"&appid="+whetherkey;
        console.log(whetherURL);
       
        document.querySelector('.modal-body').innerHTML="Countryname : "+whetherCountry;

        fetch(whetherURL).then((data)=>{
            return data.json();
      }).then((data)=>{
        //   let countemp = data;
        //   console.log(countemp)
          let whethertemp = data.main.temp
          let coicon = data.weather[0].icon
          let iconURL = "https://openweathermap.org/img/wn/"+coicon+"@2x.png"
         
          document.querySelector('.body1').innerHTML="Countrytemp : "+whethertemp;
          document.querySelector('.body2').setAttribute("src",iconURL)
          
      }).catch((err)=>{
          console.log(err)
      })
  
    }

  });
}).catch((err)=>{
    console.log(err);
})
