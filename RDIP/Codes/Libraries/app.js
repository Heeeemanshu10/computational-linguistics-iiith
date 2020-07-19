var jason = {
    "key1" : ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
    "key2"  : ["some students like to study in the night","at night some students like to study"],
    "key3" : ["John and Mary went to church","Mary and John went to church"],
    "key4" : ["John went to church after eating","after eating John went to church","John after eating went to church"],
    "key5" : ["did he go to market","he did go to market"],
    "key6" : ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
    "key7" : ["John goes to the library and studies","John studies and goes to the library"],
    "key8" : ["John ate an apple so did she","she ate an apple so did John"],
    "key9" : ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
    "key10" : ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"],
    "key11" : ["राम और श्याम बाजार गयेंराम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
    "key12" : ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
    "key13" : ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
    "key14" : ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
    "key15" : ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
    "key16" : ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
    "key17" : ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है"," बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
};

function Introduction(){
    document.getElementById('result').innerHTML = 'A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods.'
}
function Theory(){
    document.getElementById('result').innerHTML = 'Theory'
        
}
function Objective(){
    document.getElementById('result').innerHTML = 'The objective of this experiment is to know how to form logically correct sentences from the given words'
    
}
var allButton;
var count;
var original = "";
function Experiment(){
     
    var values = ["Select language" , "English" , "Hindi"];
     var select  = document.createElement('select');
     select.id = "language";
     select.name = "language";
     values[1].id1 = "English";
     values[2].id2 = "Hindi"; 
     select.onchange = function(){
         var id_value = document.getElementById('language');
         if(id_value.value == 'English'){
             document.getElementById('result1').innerHTML = 'Form a sentence(Declarative or interrogative or any type) from the given words';
             document.getElementById('result2').innerHTML = '(Select the buttons in proper order)';
             
             var rand = Math.floor((Math.random() * 9) + 1);
             var text1 = jason["key" + rand];
             for(var a in text1){
             var text2 = text1[a];
             }
             var text3 = text2.split(" ");
             shuffle(text3);
             count = text3.length;
            
             for(var i=0; i<text3.length; i++){
               var button = document.createElement('button');
               button.id = "button" + i;
               allButton = text3[i];
               var t = document.createTextNode(text3[i])
               button.appendChild(t);
               document.getElementById('result3').appendChild(button);
            
            }
            
            $("button").on("click", function(){
                document.getElementById("result4").innerHTML = "Formed Sentence";
                document.getElementById("result5").innerHTML = "(after selecting words):"
                var word = $(this).text()+" ";
                if($(this).text() !== "Re-form the sentence" && $(this).text() !== "Check the correctness of this sentence" && $(this).text() !== "Get Correct Sentence" && $(this).text() !== "Hide the correct Sentence" && $(this).text() !== "Get Answers") {
                    var wordnode = document.createTextNode(word);
                    $(this).hide();
                    document.getElementById("result6").appendChild(wordnode);
                    count--;
                       if(count === 0)
                       {
                           var checkCorrectness = document.createElement('button');
                           checkCorrectness.id = "checkcorrectness";
                           checkCorrectness.innerHTML = "Check the correctness";
                           document.getElementById('result8').appendChild(checkCorrectness);
                           checkCorrectness.onclick = function(){
                               var str = document.getElementById('result6').innerHTML;
                            for(var a in text1)
                                {
                                    if(text1[a] === str)
                                {
                                    var right = 'RIGHT ANSWER';
                                    document.getElementById('result9').innerHTML = right;
                                }
                                else{
                                    var wrong = 'WRONG ANSWER';
                                    document.getElementById('result9').innerHTML = wrong;
                                }
                                }
                            
                            if(document.getElementById('result9').innerHTML === wrong)
                            {
                                var getcorrect = document.createElement('button');
                                getcorrect.innerHTML = 'Correct statement';
                                document.getElementById('result10').appendChild(getcorrect);
                                getcorrect.onclick = function(){
                                    document.getElementById('result6').innerHTML = ""; 
                                    for(var b in text1)
                                    {
                                    document.getElementById('result11').innerHTML = text1[b];
                                    }
                                }
                            }
                                
                            }
                            }
                           
                       }
                   
                        
        })
                var reform = document.createElement('button');
                reform.id = "reform";
                reform.innerHTML = "Reform the sentence";
                document.getElementById('result7').appendChild(reform);
                
                reform.onclick = function(){
                    document.getElementById('result6').innerHTML = "";
                    document.getElementById('result5').innerHTML = "";
                    document.getElementById('result4').innerHTML = "";
                    shuffle(text3);
                     
            for(var i=0; i<text3.length; i++){
                var button = document.createElement('button');
                button.id = "button" + i;
                allButton = text3[i];
                var t = document.createTextNode(text3[i])
                button.appendChild(t);
                document.getElementById('result3').appendChild(button);
             
             } 
             
             $("button").on("click", function(){
                document.getElementById("result4").innerHTML = "Formed Sentence";
                document.getElementById("result5").innerHTML = "(after selecting words):"
                var word = $(this).text()+" ";
                if($(this).text() !== "Re-form the sentence" && $(this).text() !== "Check the correctness of this sentence" && $(this).text() !== "Get Correct Sentence" && $(this).text() !== "Hide the correct Sentence" && $(this).text() !== "Get Answers") {
                    var wordnode = document.createTextNode(word);
                    $(this).hide();
                    document.getElementById("result6").appendChild(wordnode);
                    
                    
                }  
               
        })     
                }
                
                                
       }   else if(id_value.value == 'Hindi'){
                    document.getElementById('result1').innerHTML = 'Form a sentence(Declarative or interrogative or any type) from the given words';
                    document.getElementById('result2').innerHTML = '(Select the buttons in proper order)';
                    
                    var rand = Math.floor((Math.random() * 17) + 11);
                    var text1 = jason["key" + rand];
                    var text2 = text1[0];
                    var text3 = text2.split(" ");
                    shuffle(text3);
                    
                   for(var i=0; i<text3.length; i++){
                      var button = document.createElement('button');
                      button.id = "button" + i;
                      button.innerHTML = text3[i];
                      document.getElementById('result3').appendChild(button);
                     
       
                   } 
                 }
                
             }
     
     for(const val of values){
         var option = document.createElement('option');
         option.value = val;
         option.text = val.charAt(0).toUpperCase() + val.slice(1);
         select.appendChild(option);
        
            
        
        }
      
        document.getElementById('container').appendChild(select);
     
    }
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
   

