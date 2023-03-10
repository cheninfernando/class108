/*https://teachablemachine.withgoogle.com/models/EPPGe0TlU/ */

function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EPPGe0TlU/model.json",modelready);
}

function modelready(){
    console.log("Model has been initialized");
    classifier.classify(gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(3);
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img1=document.getElementById("voicegif");
        
        if(results[0].label=="Meow"){
            img1.src="catmeow.gif";
        }
    
        else
        if(results[0].label=="Bark"){
            img1.src="dogbark.gif";
        }
    
        else
        if(results[0].label=="Roar"){
            img1.src="lionroar.gif";
        }
    
        else{
            img1.src="listen.gif";
        }
    
    
    
    
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


