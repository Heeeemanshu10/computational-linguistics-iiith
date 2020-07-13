function Introduction(){
    document.getElementById('result').innerHTML = 'A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods.'
}
function Theory(){
    document.getElementById('result').innerHTML = 'Theory'
        
}
function Objective(){
    document.getElementById('result').innerHTML = 'The objective of this experiment is to know how to form logically correct sentences from the given words'
    
}
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
   
    