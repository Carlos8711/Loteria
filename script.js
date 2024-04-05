
let btn= document.getElementById("btn")
let todos=document.getElementById("todos")
let matutino=document.getElementById("matutino")
let despertino=document.getElementById("despertino")
let tarde=document.getElementById("tarde")
let mediatarde=document.getElementById("mediatarde")
let noche=document.getElementById("noche")


var nacional=document.getElementById("nac")
let provincia=document.getElementById("pro")
let corriente=document.getElementById("cte")
let santafe=document.getElementById("ste")
let cordoba=document.getElementById("cor")
let rio=document.getElementById("rio")
let oro=document.getElementById("oro")


let nacional1=document.getElementById("nac1")
let provincia1=document.getElementById("pro1")
let corriente1=document.getElementById("cte1")
let santafe1=document.getElementById("ste1")
let cordoba1=document.getElementById("cor1")
let rio1=document.getElementById("rio1")
let oro1=document.getElementById("oro1")

let nacional2=document.getElementById("nac2")
let provincia2=document.getElementById("pro2")
let corriente2=document.getElementById("cte2")
let santafe2=document.getElementById("ste2")
let cordoba2=document.getElementById("cor2")
let rio2=document.getElementById("rio2")
let oro2=document.getElementById("oro2")



let nacional3=document.getElementById("nac3")
let provincia3=document.getElementById("pro3")
let corriente3=document.getElementById("cte3")
let santafe3=document.getElementById("ste3")
let cordoba3=document.getElementById("cor3")
let rio3=document.getElementById("rio3")
let oro3=document.getElementById("oro3")

let nacional4=document.getElementById("nac4")
let provincia4=document.getElementById("pro4")
let corriente4=document.getElementById("cte4")
let santafe4=document.getElementById("ste4")
let cordoba4=document.getElementById("cor4")
let rio4=document.getElementById("rio4")
let oro4=document.getElementById("oro4")

let loterias=document.getElementById("loterias")
let alertall=document.getElementById("alert-all")
let cambio=document.getElementsByClassName("mycheck")


let divlot=document.getElementById("conteiner-select")
let number=document.getElementById("numer-moves")
let position=document.getElementById("position-moves")
let pay=document.getElementById("pay-moves")

let numberR=document.getElementById("numer-move-redoblona")
let positionR=document.getElementById("position-move-redoblona")
let checkR=document.getElementById("check-move-redoblona")
const collection = document.getElementsByClassName("mycheck");
let conteiner=document.getElementById("conteiner")
let conteinerMNT=document.getElementById("conteiner-move-number-total")
let fechaticket=document.getElementById("fecha-ticket")
let horaticket=document.getElementById("hora-ticket")
let generateticket=document.getElementById("conteiner-imp")
let totalticket=document.getElementById("moves-total-pay")
let resetdata=document.getElementById("btn-reset")
let imprimirdata=document.getElementById("btn-imp")


let alertCount=0;
let mostrar
let mostrarall=""
let viewprovincia
let viewcorriente
let viewsamtafe
let viewcordoba
let viewrio
let vieworo
var viewmatutino="ABQW!ERSDRT"
var viewdepertino="QWMRTK"
var viewmediatarde="AECt3DLJM"
var viewmtarde="FBZVHU"
var viewnoche="NPGICYO"
let dategeneral
let horaImprimible
const arrlot=["N","P","Ct","S","C","R","O"]
const arrlotview=[]
const resultadoview=[]
const arraLotticket=[]
var resultado
let numero=0
let posicion=0
let numeroR=0
let posicionR=0
let importe=0
let auxviewdatalot
let auxiliarNumero
let auxiliarPosicion
let auxiliarNumeroR
let auxiliarPosicionR
let auxiliarImporte 
let N
let PO
let PA
let NR
let POR
let CL=0
let C=0
let start=false
let  total=0
let inp=0



/******************************************************************************************* */
/**************************matutino******************************/
matutino.addEventListener('click',()=>{

if(matutino.checked ){
   // matutino.style.display = "";

     if(!nacional.checked && !provincia.checked && !santafe.checked && !cordoba.checked && !corriente.checked && !rio.checked  ) {

        nacional.checked=true
        provincia.checked=true
        santafe.checked=true
        cordoba.checked=true
        corriente.checked=true
        rio.checked=true
      
        viewdatafile(viewmatutino)
        addDatafileticket("10")
 
         }
         else{
            nacional.checked=true
            provincia.checked=true
            santafe.checked=true
            cordoba.checked=true
            corriente.checked=true
            rio.checked=true
            viewdatafileextra(viewmatutino)
            dataTickectExtra("10")
         }
       }
      
    else{
        
        nacional.checked=false
        provincia.checked=false
        santafe.checked=false
        cordoba.checked=false
        corriente.checked=false
        rio.checked=false
        todos.checked=false
        deletedatafile(viewmatutino)
        deleteDatafileticket("10")

    }
    checked();

})

/************************despertino*************************/

despertino.addEventListener('click', ()=>{


    if(despertino.checked){
        if(!nacional1.checked && !provincia1.checked && !santafe1.checked && !cordoba1.checked && !corriente1.checked && !rio1.checked  ){
       
            nacional1.checked=true
            provincia1.checked=true
            santafe1.checked=true
            cordoba1.checked=true
            corriente1.checked=true
            rio1.checked=true
            viewdatafile(viewdepertino)
            addDatafileticket("12")
        }else{
            nacional1.checked=true
            provincia1.checked=true
            santafe1.checked=true
            cordoba1.checked=true
            corriente1.checked=true
            rio1.checked=true
            viewdatafileextra(viewdepertino)
            dataTickectExtra("12")

        }
       
    }else{
        nacional1.checked=false
        provincia1.checked=false
        santafe1.checked=false
        cordoba1.checked=false
        corriente1.checked=false
        rio1.checked=false
        todos.checked=false
        deletedatafile(viewdepertino)
        deleteDatafileticket("12")
    }
    checked();
})

/*******************************tarde*************************/
mediatarde.addEventListener('click', ()=>{
     if(mediatarde.checked){

        if(momentoActual.getDay()===6){

            if(!nacional2.checked && !provincia2.checked && !santafe2.checked && !cordoba2.checked && !corriente2.checked && !rio2.checked ){
                nacional2.checked=true
                provincia2.checked=true
                santafe2.checked=true
                cordoba2.checked=true
                corriente2.checked=true
                rio2.checked=true
             
                viewdatafile(viewmediatarde)
                addDatafileticket("15")
    
            }else{
                nacional2.checked=true
                provincia2.checked=true
                santafe2.checked=true
                cordoba2.checked=true
                corriente2.checked=true
                rio2.checked=true
                viewdatafileextra(viewmediatarde)
                dataTickectExtra("15")
    
            }

        }
        else{

            if(!nacional2.checked && !provincia2.checked && !santafe2.checked && !cordoba2.checked && !corriente2.checked && !rio2.checked && !oro2.checked ){
                nacional2.checked=true
                provincia2.checked=true
                santafe2.checked=true
                cordoba2.checked=true
                corriente2.checked=true
                rio2.checked=true
                oro2.checked=true
                viewdatafile(viewmediatarde)
                addDatafileticket("15")
    
            }else{
                nacional2.checked=true
                provincia2.checked=true
                santafe2.checked=true
                cordoba2.checked=true
                corriente2.checked=true
                rio2.checked=true
                oro2.checked=true
                viewdatafileextra(viewmediatarde)
                dataTickectExtra("15")
    
            }

        }
    
    }
    else{
        nacional2.checked=false
        provincia2.checked=false
        santafe2.checked=false
        cordoba2.checked=false
        corriente2.checked=false
        rio2.checked=false
        oro2.checked=false
        todos.checked=false
        deletedatafile(viewmediatarde)
        deleteDatafileticket("15")
    }
    checked();
})
/**********************mediatarde*********************/
tarde.addEventListener('click', ()=>{

    if(tarde.checked){

        if(!nacional3.checked && !provincia3.checked && !santafe3.checked && !cordoba3.checked && !corriente3.checked && !rio3.checked  ){

            nacional3.checked=true
            provincia3.checked=true
            santafe3.checked=true
            cordoba3.checked=true
            corriente3.checked=true
            rio3.checked=true
            viewdatafile(viewmtarde)
            addDatafileticket("18")
        }else{

            nacional3.checked=true
            provincia3.checked=true
            santafe3.checked=true
            cordoba3.checked=true
            corriente3.checked=true
            rio3.checked=true
            viewdatafileextra(viewmtarde)
            dataTickectExtra("18")
        }
    }else{
        nacional3.checked=false
        provincia3.checked=false
        santafe3.checked=false
        cordoba3.checked=false
        corriente3.checked=false
        rio3.checked=false
        todos.checked=false
        deletedatafile(viewmtarde)
        deleteDatafileticket("18")
    }
    checked();
})
/***************************noche*****************/
noche.addEventListener('click', ()=>{
    if(noche.checked){

        if(!nacional4.checked && !provincia4.checked && !santafe4.checked && !cordoba4.checked && !corriente4.checked && !rio4.checked && !oro4.checked ){
            nacional4.checked=true
            provincia4.checked=true
            santafe4.checked=true
            cordoba4.checked=true
            corriente4.checked=true
            rio4.checked=true
            oro4.checked=true
            viewdatafile(viewnoche)
            addDatafileticket("21")
        }else{
            nacional4.checked=true
            provincia4.checked=true
            santafe4.checked=true
            cordoba4.checked=true
            corriente4.checked=true
            rio4.checked=true
            oro4.checked=true
            viewdatafileextra(viewnoche)
            dataTickectExtra("21")
        }
       
    }
    else{
        
        nacional4.checked=false
        provincia4.checked=false
        santafe4.checked=false
        cordoba4.checked=false
        corriente4.checked=false
        rio4.checked=false
        oro4.checked=false
        todos.checked=false
        deletedatafile(viewnoche)
        deleteDatafileticket("21")
    }
    checked();
})

todos.addEventListener('click',()=>{
    
    if(todos.checked ){

            nacional.checked=true
            provincia.checked=true
            santafe.checked=true
            cordoba.checked=true
            corriente.checked=true
            rio.checked=true
          
            
            nacional1.checked=true
            provincia1.checked=true
            santafe1.checked=true
            cordoba1.checked=true
            corriente1.checked=true
            rio1.checked=true
           

            nacional2.checked=true
            provincia2.checked=true
            santafe2.checked=true
            cordoba2.checked=true
            corriente2.checked=true
            rio2.checked=true
            oro2.checked=true
           

            nacional3.checked=true
            provincia3.checked=true
            santafe3.checked=true
            cordoba3.checked=true
            corriente3.checked=true
            rio3.checked=true
       

            nacional4.checked=true
            provincia4.checked=true
            santafe4.checked=true
            cordoba4.checked=true
            corriente4.checked=true
            rio4.checked=true
            oro4.checked=true


            despertino.checked=true
            matutino.checked=true
            mediatarde.checked=true
            tarde.checked=true
            noche.checked=true
            /**generar una funcion para el number focus*/
            number.focus()
            number.style.backgroundColor="#dedede"
            viewdataall()
    }
    else {
        nacional.checked=false
        provincia.checked=false
        santafe.checked=false
        cordoba.checked=false
        corriente.checked=false
        rio.checked=false
     

        nacional1.checked=false
        provincia1.checked=false
        santafe1.checked=false
        cordoba1.checked=false
        corriente1.checked=false
        rio1.checked=false
       
        nacional2.checked=false
        provincia2.checked=false
        santafe2.checked=false
        cordoba2.checked=false
        corriente2.checked=false
        rio2.checked=false
        oro2.checked=false
       

        nacional3.checked=false
        provincia3.checked=false
        santafe3.checked=false
        cordoba3.checked=false
        corriente3.checked=false
        rio3.checked=false
      

        nacional4.checked=false
        provincia4.checked=false
        santafe4.checked=false
        cordoba4.checked=false
        corriente4.checked=false
        rio4.checked=false
        oro4.checked=false

        despertino.checked=false
        matutino.checked=false
        mediatarde.checked=false
        tarde.checked=false
        noche.checked=false
        deletedataall()

    }
})

/******************************************************************************************* */
/**********************fila 1 completo****************************** */
nacional.addEventListener('click',()=>{
   
if(nacional.checked){
    viewdata("AB")
    addDataticket("N10")
    checked();
} else{
    checked();
    deletedata("AB")
    deleteDataticket("N10")
    
}

})


provincia.addEventListener('click',()=>{
    if(provincia.checked){
        viewdata("QW")
        addDataticket("P10")  
         checked();
     } else{
        checked();
        deletedata("QW")
        deleteDataticket("P10")
  
     }
})

corriente.addEventListener('click',()=>{
    if(corriente.checked){
        viewdata("!")
        addDataticket("Ct10")
        
    checked();
     } else{
        checked();
        deletedata("!")
        deleteDataticket("Ct10")
     }

})
santafe.addEventListener('click',()=>{
    if(santafe.checked){
        viewdata("ER")
        addDataticket("S10")
        
    checked();
     } else{
        checked();
        deletedata("ER")
        deleteDataticket("S10")
     }

})
cordoba.addEventListener('click',()=>{
    if(cordoba.checked){
        viewdata("SD")
        addDataticket("C10")
        
    checked();
     } else{
        checked();
        deletedata("SD")
        deleteDataticket("C10")
    }


})
rio.addEventListener('click',()=>{
    if(rio.checked){
        viewdata("RT")
        addDataticket("R10")
        
        checked();
     } else{
        checked();
        deletedata("RT")
        deleteDataticket("R10")
    }


})


/**********************fila 2 completo****************************** */
nacional1.addEventListener('click',()=>{
    if(nacional1.checked){
        viewdata("Q")
        addDataticket("N12")
        checked();

    } else{
        checked();
        deletedata("Q")
        deleteDataticket("N12")
        
    }
    
    })
    provincia1.addEventListener('click',()=>{
        if(provincia1.checked){
            viewdata("W")
            addDataticket("P12")
            
        checked();
         } else{
            checked();
            deletedata("W")
            deleteDataticket("P12")
           
         }
    
    })
    corriente1.addEventListener('click',()=>{
        if(corriente1.checked){
            viewdata("M")
            addDataticket("Ct12")
            
        checked();
         } else{
            checked();
            deletedata("M")
            deleteDataticket("Ct12")
            
         }
    
    })
    santafe1.addEventListener('click',()=>{
        if(santafe1.checked){
            viewdata("R")
            addDataticket("S12")
            
        checked();
         } else{
            checked();
            deletedata("R")
            deleteDataticket("S12")
           
         }
    
    })
    cordoba1.addEventListener('click',()=>{
        if(cordoba1.checked){
            viewdata("T")
            addDataticket("C12")
            
        checked();
         } else{
            checked();
            deletedata("T")
            deleteDataticket("C12")
    
        }
    
    
    })
    rio1.addEventListener('click',()=>{
        if(rio1.checked){
            viewdata("K")
            addDataticket("R12")
            checked();
         } else{
            checked();
            deletedata("K")
            deleteDataticket("R12")
        }
    })


/***********************fila 3***************************** */
nacional2.addEventListener('click',()=>{
    if(nacional2.checked){
       viewdata("A")
       addDataticket("N15") 
        checked();

    } else{
        checked();
        deletedata("A")
        deleteDataticket("N15")
    }
    
    })
    provincia2.addEventListener('click',()=>{
        if(provincia2.checked){
            viewdata("E")
            addDataticket("P15") 
             checked();

         } else{
            checked();
            deletedata("E")
            deleteDataticket("P15")
         }
    
    })
    corriente2.addEventListener('click',()=>{
        if(corriente2.checked){
            viewdata("Ct3")
            addDataticket("Ct15") 
             checked();
         } else{
            checked();
            deletedata("Ct3")
            deleteDataticket("Ct15")
         }
    
    })
    santafe2.addEventListener('click',()=>{
        if(santafe2.checked){
            viewdata("D")
            addDataticket("S15") 
             checked();
         } else{
            checked();
            deletedata("D")
            deleteDataticket("S15")
         }
    
    })
    cordoba2.addEventListener('click',()=>{
        if(cordoba2.checked){
            viewdata("L")
            addDataticket("C15") 
             checked();
         } else{
            checked();
            deletedata("L")
            deleteDataticket("C15")
         
        }
    
    
    })
    rio2.addEventListener('click',()=>{
        if(rio2.checked){
            viewdata("J")
            addDataticket("R15") 
             checked();
         } else{
            checked();
            deletedata("J")
            deleteDataticket("R15")
        }
    })
    oro2.addEventListener('click',()=>{
       
        if(oro2.checked){
            viewdata("M")
            addDataticket("O15") 
             checked();
         } else{
            checked();
            deletedata("M")
            deleteDataticket("O15")
        }
    })


/***********************fila 4 ***************************** */
nacional3.addEventListener('click',()=>{
    if(nacional3.checked){
        viewdata("F")
        addDataticket("N18") 
         checked();

    } else{
        checked();
        deletedata("F")
        deleteDataticket("N18")
    }
    
    })
    provincia3.addEventListener('click',()=>{
        if(provincia3.checked){
            viewdata("B")
            addDataticket("P18") 
             checked();
            
        checked();
         } else{
            checked();
            deletedata("B")
            deleteDataticket("P18")
         }
    
    })
    corriente3.addEventListener('click',()=>{
        if(corriente3.checked){
            viewdata("Z")
            addDataticket("Ct18") 
             checked();
         } else{
            checked();
            deletedata("Z")
            deleteDataticket("Ct18")
         }
    
    })
    santafe3.addEventListener('click',()=>{
        if(santafe3.checked){
            viewdata("V")
            addDataticket("S18") 
             checked();
         } else{
            checked();
            deletedata("V")
            deleteDataticket("S18")
         }
    
    })
    cordoba3.addEventListener('click',()=>{
        if(cordoba3.checked){
            viewdata("H")
            addDataticket("C18") 
             checked();
         } else{
            checked();
            deletedata("H")
            deleteDataticket("C18")
        }
    
    
    })
    rio3.addEventListener('click',()=>{
        if(rio3.checked){
            viewdata("U")
            addDataticket("R18") 
             checked();
         } else{
            checked();
            deletedata("U")
            deleteDataticket("R18")
        }
    
    
    })

    
/**********************fila 5****************************** */
nacional4.addEventListener('click',()=>{
    if(nacional4.checked){
        viewdata("N")
        addDataticket("N21") 
         checked();
    } else{
        checked();
        deletedata("N")
        deleteDataticket("N21")
    }
    
    })
    provincia4.addEventListener('click',()=>{
        if(provincia4.checked){
            viewdata("P")
            addDataticket("P21") 
             checked();
         } else{
            noche.checked=false
            todos.checked=false
            checked();
            deletedata("P")
            deleteDataticket("P21")
         }
    
    })
    corriente4.addEventListener('click',()=>{
        if(corriente4.checked){
            viewdata("G")
            addDataticket("Ct21") 
             checked();
            
        checked();
         } else{
            checked();
            deletedata("G")
            deleteDataticket("Ct21")
         }
    })
    santafe4.addEventListener('click',()=>{
        if(santafe4.checked){
            viewdata("I")
            addDataticket("S21") 
             checked();
            
        checked();
         } else{
            checked();
            deletedata("I")
            deleteDataticket("S21")
         }
    
    })
    cordoba4.addEventListener('click',()=>{
        if(cordoba4.checked){
            viewdata("C")
            addDataticket("C21") 
             checked();
            
        checked();
         } else{
            checked();
            deletedata("C")
            deleteDataticket("C21")
        }
    
    
    })
    rio4.addEventListener('click',()=>{
        if(rio4.checked){
            viewdata("Y")
            addDataticket("R21") 
             checked();
  
         } else{
            checked();
            deletedata("Y")
            deleteDataticket("R21")
        }
    
    
    })
    oro4.addEventListener('click',()=>{
    
        if(oro4.checked){
            viewdata("O")
            addDataticket("O21") 
             checked();
         } else{
            checked();
            deletedata("O")
            deleteDataticket("O21")
        }
    
    })
/**************************************************** */
btn.addEventListener('click',()=>{
   
    if(arrlotview.length==0 ){
      
        activeDangerInp()
        
    }else if (arrlotview.length!=0 ){
        desactiveDangerInp()
        validAll()
    }}
    )
    function activeDangerInp(){
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "2px solid red";
        }
    }
    function desactiveDangerInp(){
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.border = "2px solid blue";
           }
         
       }
    
/************************************************************* */
resetdata.addEventListener('click',()=>{
    location.reload();
    C=0;

})
/** ******************************************/
/************************************************************* */
document.querySelector("#btn-imp").addEventListener("click", function() {

    if(arrlotview.length!=0 && C!=0){
        var div = document.querySelector("#conteiner-imp");
        imprimirElemento(div);
   
    }else{}
  
  });
/** ******************************************/

/******************************************************************************************* */
/************************************cHECK INPUT*********************************/
function checked(){

    if( nacional.checked &&  provincia.checked && santafe.checked &&  cordoba.checked&& corriente.checked&&rio.checked  ){
        matutino.checked=true 
    
    }else{
        matutino.checked=false
    } 

    if( nacional1.checked &&  provincia1.checked && santafe1.checked &&  cordoba1.checked && corriente1.checked && rio1.checked){
        despertino.checked=true
    
    }else{
        despertino.checked=false
    } 


    if(momentoActual.getDay()===6){

        if( nacional2.checked &&  provincia2.checked && santafe2.checked &&  cordoba2.checked&& corriente2.checked && rio2.checked ){
            mediatarde.checked=true
        
        }else{
            mediatarde.checked=false
        } 
          
                    
    }else{

        if( nacional2.checked &&  provincia2.checked && santafe2.checked &&  cordoba2.checked&& corriente2.checked && rio2.checked && oro2.checked){
            mediatarde.checked=true
        
        }else{
            mediatarde.checked=false
        } 
                 
    }


    if( nacional3.checked &&  provincia3.checked && santafe3.checked &&  cordoba3.checked&& corriente3.checked && rio3.checked ){
        tarde.checked=true
    
    }else{
        tarde.checked=false
    } 

    if( nacional4.checked &&  provincia4.checked && santafe4.checked &&  cordoba4.checked&& corriente4.checked && rio4.checked &&  oro4.checked){
        noche.checked=true
    }else{
        noche.checked=false
    } 


    if(matutino.checked && despertino.checked && mediatarde.checked && tarde.checked && noche.checked){
        todos.checked=true
    

    }else{
        todos.checked=false
    }
      /**generar una funcion para el number focus*/
    number.focus()
    number.style.backgroundColor="#dedede"
    
}
/******************************************************************************************* */
/*************************vIEW DATA COMPLET**************************** */
function viewdata(char){
    auxtext=char
    mostrar = loterias.innerText += auxtext;
} 


function deletedata(char){
    auxtext=char
    var srt=mostrar
        var srtshort=srt.split(auxtext).join('')
        mostrar=loterias.textContent =srtshort;
} 

/*************************************************************** */
function viewdataall(){
 
    if(mostrarall||mostrar){
        mostrarall = loterias.innerText = viewmatutino + viewdepertino+viewmediatarde+viewmtarde+viewnoche;
        mostrar=mostrarall
        
        adddataallticket()
        
    }else{
        mostrarall = loterias.innerText += viewmatutino + viewdepertino+viewmediatarde+viewmtarde+viewnoche;
        mostrar=mostrarall
        adddataallticket()
       
    }   
        
}
function deletedataall(){
    var srt=mostrarall
    var srtshort=srt.split(mostrarall).join('')
    mostrarall=loterias.textContent =srtshort;
    deletedataallticket()
}
/*************************************************************** */

function viewdatafile(char){
    
 let auxfile=char
    mostrar=auxfile 
    mostrar=loterias.innerText += auxfile; 
} 

function viewdatafileextra(char){
    let auxfile=char

    let auxmostrar=mostrar
    
    for(i=0;i<auxfile.length;i++){

        for(j=0;j<auxmostrar.length;j++){

            if( auxfile[i]==auxmostrar[j]){
                var srtshort=auxmostrar.split(auxfile[i]).join('')   
                auxmostrar=srtshort
            }
            else{
                
            }
      
        }

    }
    mostrar = loterias.innerText = auxmostrar;
    mostrar=loterias.innerText += auxfile;
    console.log(srtshort)

}


function deletedatafile(char){

    let auxfile=char

    if(auxfile==viewmatutino||auxfile==viewdepertino||auxfile==viewmediatarde||auxfile==viewmtarde||auxfile==viewnoche){
       
        if(mostrar!=auxfile ){
       
            var srt=mostrar
            var auxmostrar=srt
            for(i=0;i<mostrar.length;i++){

                for(j=0;j<char.length;j++){
                    if(mostrar[i]==char[j]){  
                  
                     var srtshort=auxmostrar.split(mostrar[i]).join('')   
                      auxmostrar=srtshort

                    }else{

                    }
                }
            }
            mostrar=loterias.textContent =auxmostrar;
           // console.log(srtshort)
          
           }else{
            var srt=auxfile
            var srtshort=srt.split(mostrar).join('')
            mostrar=loterias.textContent =srtshort;
       
        }
          
    }else{
    }
} 
/******************************************************************************************* */
/***************VIEW DATA TICKET COMPLET********************/

function addDatafileticket(char){

    let data=char

    if(arrlotview){

        if(char=="21" || char=="15"){
            
            if(momentoActual.getDay()===6 && char=="15" ){
                console.log("hoy es lues")
                let tamaño=arrlotview.length
                for(i=0;i<arrlot.length-1;i++){
                    arrlotview[tamaño+i]=arrlot[i]+data
                            }
        
            }else{
               
                let tamaño=arrlotview.length
                for(i=0;i<arrlot.length;i++){
                    arrlotview[tamaño+i]=arrlot[i]+data
                            }
            }
        }else{

            let tamaño=arrlotview.length
            for(i=0;i<arrlot.length-1;i++){
                arrlotview[tamaño+i]=arrlot[i]+data
                        }  
        }

    }else{
        for(i=0;i<arrlot.length;i++){
            arrlotview[i]=arrlot[i]+data
        }   
    }
    console.log(arrlotview)
}




function deleteDatafileticket(char){
    let auxfile=char
   let arraux=[]
   let j=0
   for(i=0;i<arrlotview.length;i++){
        
      if(arrlotview[i].includes(auxfile)){
         }
        else{
            arraux[j]=arrlotview[i]
            j++
        }  
    }
    
    arrlotview.splice(0,arrlotview.length)
    for(i=0;i<arraux.length;i++){
    arrlotview[i]=arraux[i]
    }
    console.log(arrlotview)
}

/*--------------------------------------------------------------------*/

function addDataticket(char){
let data=char
let tamaño
tamaño=arrlotview.length
if(arrlotview.length){

arrlotview.push(data)

}else{
    arrlotview[0]=data
   // console.log(tamaño+"inicial")
}
    console.log(arrlotview)
}

function deleteDataticket(char){
    let data=char
    for(i=0;i<arrlotview.length;i++){
        if(arrlotview[i]==data){
            resultado=arrlotview.filter(a=>a!=char)
        } else{}
    }

    arrlotview.splice(0,arrlotview.length)
    resultado.forEach(r => {
        arrlotview.push(r)
    
    });

    console.log(arrlotview)
}
/********************************************* */
function dataTickectExtra(char){

    let auxfile=char
    let arraux=[]
    let j=0
    for(i=0;i<arrlotview.length;i++){
         
       if(arrlotview[i].includes(auxfile)){
          }
         else{
             arraux[j]=arrlotview[i]
             j++
         }  
     }
     
     arrlotview.splice(0,arrlotview.length)
     console.log(arrlotview)
     for(i=0;i<arraux.length;i++){
     arrlotview[i]=arraux[i]
     }
    

       if(char=="21" || char=="15"){

        if(momentoActual.getDay()===6 && char=="15" ){
            let tamaño=arrlotview.length
            for(i=0;i<arrlot.length-1;i++){
                arrlotview[tamaño+i]=arrlot[i]+auxfile
            }
    
        }else{
           
            let tamaño=arrlotview.length
            for(i=0;i<arrlot.length;i++){
                arrlotview[tamaño+i]=arrlot[i]+auxfile
            }
        }
       
    }else{

        let tamaño=arrlotview.length
        for(i=0;i<arrlot.length-1;i++){
            arrlotview[tamaño+i]=arrlot[i]+auxfile
        }  
    



    }
}
/****************************************************************************************** */
function adddataallticket(){

    let tamaño=['N10', 'P10', 'Ct10', 'S10', 'C10', 'R10', 'N12', 'P12', 'Ct12', 'S12', 'C12', 'R12', 'N15', 'P15', 'Ct15', 'S15', 'C15', 'R15', 'O15', 'N18', 'P18', 'Ct18', 'S18', 'C18', 'R18', 'N21', 'P21', 'Ct21', 'S21', 'C21', 'R21', 'O21']
    arrlotview.splice(0,arrlotview.length)

    for(i=0;i<tamaño.length;i++){
        arrlotview[i]=tamaño[i]
    }
}
function deletedataallticket(){
    arrlotview.splice(0,arrlotview.length)
}
/******************************************************************************************* */
/***********************VIEW DATA CLOCK AND DATE********************** */

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    console.log()
    horaImprimible = hora + " : " + minuto + " : " + segundo
    
if(hora<10){
    horaImprimible = "0"+hora + " : " + minuto + " : " + segundo
    if(minuto<10){
        horaImprimible = "0"+hora + " : "+"0" + minuto + " : " + segundo
        if(segundo<10){
            horaImprimible = "0"+hora + " : "+"0" + minuto + " : "+"0" + segundo
        }
        else{
            horaImprimible = "0"+hora + " : "+"0" + minuto + " : " + segundo
        }
    }else{
        if(segundo<10){
            horaImprimible = "0"+hora + " : " + minuto + " : "+"0" + segundo
        }
        else{
            horaImprimible = "0"+hora + " : " + minuto + " : " + segundo
        }
    }

}else{
   
    if(minuto<10){
        horaImprimible = hora + " : "+"0" + minuto + " : " + segundo
        if(segundo<10){
            horaImprimible = hora + " : "+"0" + minuto + " : "+"0" + segundo
        }
        else{
            horaImprimible = hora + " : "+"0" + minuto + " : " + segundo
        }
    }else{
        if(segundo<10){
            horaImprimible = hora + " : " + minuto + " : "+"0" + segundo
        }
        else{
            horaImprimible = hora + " : " + minuto + " : " + segundo
        }
    }
}
    document.form_reloj.reloj.value = horaImprimible
    date=momentoActual.toLocaleDateString()
    dategeneral= document.form_date.date.value = date
    setTimeout("mueveReloj()",1000)

    if(momentoActual.getDay()===6){
        oro2.style.display="none"
    }else{

    }
  
}

/******************************************************************************************* */
function validateInput(hora,minuto){

    let iniciar=Date("08:15:00")
    let curren=new Date()

    let time=hora+":"+minuto+" AM"
    console.log(  curren.toLocaleTimeString())
 

    if( curren.toLocaleTimeString()>="7:30:00" && !start ){
        start=true
        nacional.classList.remove('disable-check-lot')  
        provincia.classList.remove('disable-check-lot') 
        corriente.classList.remove('disable-check-lot') 
        santafe.classList.remove('disable-check-lot') 
        cordoba.classList.remove('disable-check-lot') 
        rio.classList.remove('disable-check-lot') 
        matutino.classList.remove('disable-check-lot')  
        todos.classList.remove('disable-check-lot') 

         nacional.disabled = false
         provincia.disabled = false
         corriente.disabled = false
         santafe.disabled = false
         cordoba.disabled = false
         rio.disabled = false
         matutino.disabled = false
         todos.disabled = false

         nacional1.classList.remove('disable-check-lot')  
         provincia1.classList.remove('disable-check-lot') 
         corriente1.classList.remove('disable-check-lot') 
         santafe1.classList.remove('disable-check-lot') 
         cordoba1.classList.remove('disable-check-lot') 
         rio1.classList.remove('disable-check-lot') 
         despertino.classList.remove('disable-check-lot') 
 
          nacional1.disabled = false
          provincia1.disabled = false
          corriente1.disabled = false
          santafe1.disabled = false
          cordoba1.disabled = false
          rio1.disabled = false
          despertino.disabled = false
 
          nacional2.classList.remove('disable-check-lot')  
          provincia2.classList.remove('disable-check-lot') 
          corriente2.classList.remove('disable-check-lot') 
          santafe2.classList.remove('disable-check-lot') 
          cordoba2.classList.remove('disable-check-lot') 
          rio2.classList.remove('disable-check-lot') 
          mediatarde.classList.remove('disable-check-lot') 
  
           nacional2.disabled = false
           provincia2.disabled = false
           corriente2.disabled = false
           santafe2.disabled = false
           cordoba2.disabled = false
           rio2.disabled = false
           mediatarde.disabled = false
 
 
           nacional4.classList.remove('disable-check-lot')  
           provincia4.classList.remove('disable-check-lot') 
           corriente4.classList.remove('disable-check-lot') 
           santafe4.classList.remove('disable-check-lot') 
           cordoba4.classList.remove('disable-check-lot') 
           rio4.classList.remove('disable-check-lot') 
           oro4.classList.remove('disable-check-lot') 
           noche.classList.remove('disable-check-lot') 
   
            nacional4.disabled = false
            provincia4.disabled = false
            corriente4.disabled = false
            santafe4.disabled = false
            cordoba4.disabled = false
            rio4.disabled = false
            oro4.disabled = false
            noche.disabled = false
 
            nacional3.classList.remove('disable-check-lot')  
            provincia3.classList.remove('disable-check-lot') 
            corriente3.classList.remove('disable-check-lot') 
            santafe3.classList.remove('disable-check-lot') 
            cordoba3.classList.remove('disable-check-lot') 
            rio3.classList.remove('disable-check-lot') 
            tarde.classList.remove('disable-check-lot') 
    
             nacional3.disabledfalse
             provincia3.disabled = false
             corriente3.disabled = false
             santafe3.disabled = false
             cordoba3.disabled = false
             rio3.disabled = false
             tarde.disabled = false

    }

    if(curren.toLocaleTimeString() >="10:30:00"){
    //    loterias.innerHTML=""
        nacional.classList.add('disable-check-lot')  
        provincia.classList.add('disable-check-lot') 
        corriente.classList.add('disable-check-lot') 
        santafe.classList.add('disable-check-lot') 
        cordoba.classList.add('disable-check-lot') 
        rio.classList.add('disable-check-lot') 
        matutino.classList.add('disable-check-lot')  
        todos.classList.add('disable-check-lot') 

         nacional.disabled = true
         provincia.disabled = true
         corriente.disabled = true
         santafe.disabled = true
         cordoba.disabled = true
         rio.disabled = true
         matutino.disabled = true
         todos.disabled = true

        nacional.checked=false
        provincia.checked=false
        santafe.checked=false
        cordoba.checked=false
        corriente.checked=false
        rio.checked=false
        todos.checked=false
        matutino.checked=false
         

    }
    if(curren.toLocaleTimeString()>="12:00:00"){
        nacional1.classList.add('disable-check-lot')  
        provincia1.classList.add('disable-check-lot') 
        corriente1.classList.add('disable-check-lot') 
        santafe1.classList.add('disable-check-lot') 
        cordoba1.classList.add('disable-check-lot') 
        rio1.classList.add('disable-check-lot') 
        despertino.classList.add('disable-check-lot') 

         nacional1.disabled = true
         provincia1.disabled = true
         corriente1.disabled = true
         santafe1.disabled = true
         cordoba1.disabled = true
         rio1.disabled = true
         despertino.disabled = true

         nacional1.checked=false
         provincia1.checked=false
         santafe1.checked=false
         cordoba1.checked=false
         corriente1.checked=false
         rio1.checked=false
         todos.checked=false
         despertino.checked=false

 
    }
    if(curren.toLocaleTimeString()>="15:00:00"){
        nacional2.classList.add('disable-check-lot')  
        provincia2.classList.add('disable-check-lot') 
        corriente2.classList.add('disable-check-lot') 
        santafe2.classList.add('disable-check-lot') 
        cordoba2.classList.add('disable-check-lot') 
        rio2.classList.add('disable-check-lot') 
        mediatarde.classList.add('disable-check-lot') 

         nacional2.disabled = true
         provincia2.disabled = true
         corriente2.disabled = true
         santafe2.disabled = true
         cordoba2.disabled = true
         rio2.disabled = true
         mediatarde.disabled = true

         nacional2.checked=false
         provincia2.checked=false
         santafe2.checked=false
         cordoba2.checked=false
         corriente2.checked=false
         rio2.checked=false
         todos.checked=false
         mediatarde.checked=false
    }
    if(curren.toLocaleTimeString()>="18:0"){
        nacional3.classList.add('disable-check-lot')  
        provincia3.classList.add('disable-check-lot') 
        corriente3.classList.add('disable-check-lot') 
        santafe3.classList.add('disable-check-lot') 
        cordoba3.classList.add('disable-check-lot') 
        rio3.classList.add('disable-check-lot') 
        tarde.classList.add('disable-check-lot') 

         nacional3.disabled = true
         provincia3.disabled = true
         corriente3.disabled = true
         santafe3.disabled = true
         cordoba3.disabled = true
         rio3.disabled = true
         tarde.disabled = true

         nacional3.checked=false
        provincia3.checked=false
        santafe3.checked=false
        cordoba3.checked=false
        corriente3.checked=false
        rio3.checked=false
        todos.checked=false
        tarde.checked=false

    }
    if(curren.toLocaleTimeString()>="20:0"){
        nacional4.classList.add('disable-check-lot')  
        provincia4.classList.add('disable-check-lot') 
        corriente4.classList.add('disable-check-lot') 
        santafe4.classList.add('disable-check-lot') 
        cordoba4.classList.add('disable-check-lot') 
        rio4.classList.add('disable-check-lot') 
        oro4.classList.add('disable-check-lot') 
        noche.classList.add('disable-check-lot') 

         nacional4.disabled = true
         provincia4.disabled = true
         corriente4.disabled = true
         santafe4.disabled = true
         cordoba4.disabled = true
         rio4.disabled = true
         oro4.disabled = true
         noche.disabled = true
         start=false

         nacional4.checked=false
         provincia4.checked=false
         santafe4.checked=false
         cordoba4.checked=false
         corriente4.checked=false
         rio4.checked=false
         oro4.checked=false
         todos.checked=false
         noche.checked=false
    }
}
/***************************VALIDTE COMPLET*************************************** */
function validAll(){

    if(number.value){
        if(number.value<10000 && number.value>-1){
           //  validDataInput(number)
           numero=number.value
           
            }else{
            invalid(number)
        }   
        if(position.value){
                if(position.value>0 && position.value<=20 ){
                    valid(position)
                   // validDataInput(position)
                   posicion=position.value
                    
                }else{
                    invalid(position) 
                }

                if(pay.value){
                    if(pay.value>0 && pay.value<=100000 ){
                        valid(pay)
                       // validDataInput(pay)
                       importe=pay.value
                    }else{
                        invalid(pay)           
                    }
                }else{
                    invalid(pay)  
                }
                
        }else{
                 invalid(position) 
                    if(pay.value){
                        if(pay.value>0 && pay.value<=100000 ){
                            valid(pay)
                        }else{
                            invalid(pay)     
                        }
                } 
    }
   
    
}else{

    invalid(number)
         if(position.value){
            if(position.value){
                if(position.value>0 && position.value<=20 ){
                    valid(position)
                }else{
                    invalid(position) 
                }
             }
        if(pay.value){
            if(pay.value>0 && pay.value<=100000 ){
                valid(pay)
            }else{
                invalid(pay)      
            }
            }else{
                invalid(pay)  
            }
}else{
    invalid(position) 
        if(pay.value){
            if(pay.value>0 && pay.value<=100000 ){
                valid(pay)
            }else{
                invalid(pay)      
            }
        }else{
            invalid(pay)    
        }
}}


     /***********************************************/

     if(numberR.value){        
        if(numberR.value >-1 && numberR.value <100 ){

           if(numberR.value.length!=2){
               invalid(numberR)
           }else{
               valid(numberR)
              // validDataInput(numberR)
             numeroR=numberR.value
           }
       }else{
         
       }
       if(!positionR.value){
           invalid(positionR)
       }else{
           if(positionR.value ==2||positionR.value ==5||positionR.value ==10||positionR.value ==15||positionR.value ==20){
               valid(positionR)
              // validDataInput(positionR)
              posicionR=positionR.value
           }else{
               invalid(positionR)
           }
       }

}else{

    if(positionR.value){

       if(positionR.value ==2||positionR.value ==5||positionR.value ==10||positionR.value ==15||positionR.value ==20){
           valid(positionR)
           posicionR=positionR.value

       }else{
           invalid(positionR)
       }

       if(!numberR.value){
           invalid(numberR) 
       }
   }
}
validDataInput()
}

                                 /***********************************************/
                           
/******************************************************************************* */
function validDataInput(){

if(arrlotview!=0){
    

    if( numeroR && posicionR){
        if(numero && posicion && importe){
            console.log("hola") 
            auxiliarNumero=numero
            auxiliarPosicion=posicion
            auxiliarImporte=importe
            viewticketlot()
            numero=0
            posicion=0
            importe=0  
            numeroR=0
            posicionR=0
            //numberR.value=false
           // positionR.value=false
            C=0 
           
        }
        else{
            
        }

    }else if( numero && posicion && importe){
        
        if(numeroR==0 && posicionR==0 ){
            console.log("hola") 
            auxiliarNumero=numero
            auxiliarPosicion=posicion
            auxiliarImporte=importe
            viewticketlot()
            numero=0
            posicion=0
            importe=0  
            
           
        }

    }

}
}
  
/******************************************************************************************** */

function valid(dato){
    dato.classList.remove('alert-check-lot')
    dato.placeholder=""
}
/********************************************************************************************* */

function invalid(dato){

    if(!dato.value){
        if(dato==number){
            dato.placeholder="Ingrese un numero"
            dato.classList.add('alert-check-lot')  
        }else if(dato==position){
            dato.placeholder="Ingrese una posicion"
            dato.classList.add('alert-check-lot')
    
        }else if(dato==pay){
            dato.classList.add('alert-check-lot')
            dato.placeholder="Ingrese un importe"
        } else if(dato==numberR){
            dato.classList.add('alert-check-lot')
            dato.placeholder="Solo numeros de 2 cifras del 00 al 99"
        }
        else if(dato==positionR){
            dato.classList.add('alert-check-lot')
            dato.placeholder="Solo las posiciones 2,5,10,15,20"
        }
       
    
    }else{
        if(dato==number){
            dato.value=false
            dato.classList.add('alert-check-lot')
            dato.placeholder="Ingrese un numero meyor a 0 y menor a 10.000 "
        }else if(dato==position){
            dato.value=false
            dato.classList.add('alert-check-lot')
            dato.placeholder="Ingrese una posicion mayor a 0 y menor a 21"
    
        }else if(dato==pay){
            dato.value=false
            dato.classList.add('alert-check-lot')
            dato.placeholder="Ingrese un monto mayor a 0" 
        }
        else if(dato==numberR){
            dato.value=false
            dato.classList.add('alert-check-lot')
            dato.placeholder="Solo numeros de 2 cifras del 00 al 99"
        }
        else if(dato==positionR){
            dato.value=false
            dato.classList.add('alert-check-lot')
            dato.placeholder="Solo las posiciones 2,5,10,15,20"
        }
    }
   
}
/********************************************************************************************/
/********************************TICKET GENERATED************************************************/

function viewticketlot(){

let div=document.createElement('div')
let divML=document.createElement('div')
let h4ML=document.createElement('h4')
let divPL=document.createElement('div')
let h4PL=document.createElement('h4')
let h4NR=document.createElement('h4')
let h4PR=document.createElement('h4')
let h4NL=document.createElement('h4')
let h4POL=document.createElement('h4')

let viewdatalot=arrlotview.join(" ")

fechaticket.innerHTML=dategeneral
horaticket.innerHTML=horaImprimible
generateticket.style.visibility="visible"

div.style.width="100%"
div.style.display="flex"
div.style.flexDirection="column"
div.style.justifyConten="center"
div.style.alignItems="center"


if(auxviewdatalot!=viewdatalot){

    auxviewdatalot=viewdatalot 
    N=numero
    PO= posicion
    PA=importe

    divML.style.width="100%"
    divML.style.color="black"
    divML.style.display="flex"
    divML.style.flexDirection="column"
    divML.style.justifyContent="center"
    divML.style.alignItems="center"
    divML.style.borderTop="3px solid black"
   
    h4ML.style.width="90%"
    h4ML.style.color="black"
    h4ML.style.fontSize="14px"
    h4ML.style.fontWeight="bolder"
    h4ML.style.margin="1%"
    h4ML.style.display="flex"
    h4ML.style.flexDirection="column"
    h4ML.style.justifyContent="center"
    
    divPL.style.width="100%"
    divPL.style.color="black"
    divML.style.fontSize="16px"
    divPL.style.display="flex"
    divPL.style.borderTop="3px solid black"
    
    h4NL.style.width="20%"
    h4NL.style.color="black"
    h4NL.style.fontSize="16px"
    h4NL.style.margin="0%"
    h4NL.style.display="flex"
    h4NL.style.justifyContent="center"
    h4NL.style.alignItems="end"
    h4NL.style.flexDirection="column"

   

    h4POL.style.width="15%"
    h4POL.style.color="black"
    h4POL.style.fontSize="16px"
    h4POL.style.margin="0%"
    h4POL.style.display="flex"
    h4POL.style.justifyContent="center"
    h4POL.style.alignItems="end"
    h4POL.style.flexDirection="column"

    h4PL.style.width="25%"
    h4PL.style.color="black"
    h4PL.style.fontSize="16px"
    h4PL.style.margin="0%"
    h4PL.style.display="flex"
    h4PL.style.justifyContent="center"
    h4PL.style.alignItems="end"
    h4PL.style.flexDirection="column"

    h4NR.style.width="20%"
    h4NR.style.color="black"
    h4NR.style.fontSize="16px"
    h4NR.style.margin="0%"
    h4NR.style.display="flex"
    //h4NR.style.backgroundColor="pink"
    h4NR.style.justifyContent="center"
    h4NR.style.alignItems="end"
    h4NR.style.flexDirection="column"

    h4PR.style.width="20%"
    h4PR.style.color="black"
    h4PR.style.fontSize="16px"
    h4PR.style.margin="0%"
    h4PR.style.display="flex"
    //h4PR.style.backgroundColor="red"
    h4PR.style.justifyContent="center"
    h4PR.style.alignItems="end"
    h4PR.style.flexDirection="column"

    
    conteinerMNT.appendChild(div)
    div.appendChild(divML)
    divML.appendChild(h4ML)
    divML.appendChild(divPL)
    divPL.appendChild(h4NL)
    divPL.appendChild(h4POL)
    divPL.appendChild(h4PL)
    divPL.appendChild(h4NR)
    divPL.appendChild(h4PR)

    if(numero.length<4){
        let tamaño=4-numero.length
        for(i=1;i<tamaño;i++){

            h4NL.innerHTML+="*"
        }
        h4NL.innerHTML+="*"+numero
    }else{
        h4NL.innerHTML=numero
    }
    if(posicion<10){
        h4POL.innerHTML="0"+posicion
    }else{
        h4POL.innerHTML=posicion
    }
    h4ML.innerHTML=viewdatalot
    if(numeroR!=0&&posicionR!=0){
        h4NR.innerHTML=numeroR
        h4PR.innerHTML=posicionR
    }
   
    h4PL.innerHTML=parseFloat(importe).toFixed(2);
    C++
   
    console.log(total)

    total=total+(importe*(parseInt(arrlotview.length, 10)))




}else if(N!=numero||PO!=posicion){

    auxviewdatalot=viewdatalot 

    N=numero
    PO=posicion
    PA=importe
    C++
    divML.style.width="100%"
    divML.style.color="black"
    divML.style.fontSize="16px"
    divML.style.display="flex"
    divML.style.flexDirection="column"
    divML.style.justifyContent="center"
    divML.style.alignItems="center"


    conteinerMNT.appendChild(div)
    divPL.style.width="100%"
    divPL.style.color="black"
    divML.style.fontSize="16px"
    divPL.style.display="flex"

    h4NL.style.width="20%"
    h4NL.style.color="black"
    h4NL.style.fontSize="16px"
    h4NL.style.backgroundColor="white"
    h4NL.style.margin="0%"
    h4NL.style.display="flex"
    h4NL.style.flexDirection="column"
    h4NL.style.justifyContent="center"
    h4NL.style.alignItems="end"

    h4PL.style.width="25%"
    h4PL.style.color="black"
    h4PL.style.fontSize="16px"
    h4PL.style.margin="0%"
    h4PL.style.display="flex"
    h4PL.style.flexDirection="column"
    h4PL.style.justifyContent="center"
    h4PL.style.alignItems="end"


    h4POL.style.width="15%"
    h4POL.style.color="black"
    h4POL.style.fontSize="16px"
    h4POL.style.margin="0%"
    h4POL.style.display="flex"
    h4POL.style.justifyContent="center"
    h4POL.style.alignItems="end"
    h4POL.style.flexDirection="column"

    h4NR.style.width="20%"
    h4NR.style.color="black"
    h4NR.style.fontSize="16px"
    h4NR.style.margin="0%"
    h4NR.style.display="flex"
   // h4NR.style.backgroundColor="pink"
    h4NR.style.justifyContent="center"
    h4NR.style.alignItems="end"
    h4NR.style.flexDirection="column"

    h4PR.style.width="20%"
    h4PR.style.color="black"
    h4PR.style.fontSize="16px"
    h4PR.style.margin="0%"
    h4PR.style.display="flex"
    //h4PR.style.backgroundColor="red"
    h4PR.style.justifyContent="center"
    h4PR.style.alignItems="end"
    h4PR.style.flexDirection="column"


    div.appendChild(divML)
    divML.appendChild(divPL)
    divPL.appendChild(h4NL)
    divPL.appendChild(h4POL)
    divPL.appendChild(h4PL)
    divPL.appendChild(h4NR)
    divPL.appendChild(h4PR)

    if(numero.length<4){
        let tamaño=4-numero.length
        for(i=1;i<tamaño;i++){
            h4NL.innerHTML+="*"
        }
        h4NL.innerHTML+="*"+numero
    }else{
        h4NL.innerHTML=numero
    }

    if(posicion<10){
        h4POL.innerHTML="0"+posicion
    }else{
        h4POL.innerHTML=posicion
    }
    if(numeroR!=0&&posicionR!=0){
        h4NR.innerHTML=numeroR
        h4PR.innerHTML=posicionR
    }
    
    h4PL.innerHTML=parseFloat(importe).toFixed(2);
    total=total+(importe*(parseInt(arrlotview.length, 10)))
}




totalticket.innerHTML=parseFloat(total).toFixed(2);

}
/****************************************** */
function imprimirElemento(elemento) {
    var ventana = window.open('', 'PRINT', 'height=250,width=600');
    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="stylesheet" href="./style.css">'); 
    ventana.document.write('</head><body >');
    ventana.document.write(elemento.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();
    ventana.focus();
    ventana.onload = function() {
      ventana.print();
      ventana.close();
    };

    return true;
  }


  document.addEventListener("keydown", function(event) {
    let viewdatalot=arrlotview.join(" ")

    if (event.key === "+") {
        number.blur()
        if(auxviewdatalot!=viewdatalot){

        }
        else{
            
            if(auxiliarNumero.length<=4 && auxiliarNumero.length>2 ){
                
                var str = auxiliarNumero.toString();
                str = str.slice(1);
                auxiliarNumero=str
                console.log(auxiliarNumero);
                numero=auxiliarNumero
                posicion=auxiliarPosicion
                importe=auxiliarImporte
                viewticketlot()
                numero=0
                posicion=0
                importe=0  

            }else{
            
            }
        }
       
     
      
    }else if(event.key === "Enter" && inp==0){
       
        number.focus();
        number.style.backgroundColor="#dedede"

    }
    
  }
  
 );
  
number.addEventListener('keydown', inputCharacters);
number.addEventListener('click', inputCharacters);
position.addEventListener('keydown', inputCharacters);
pay.addEventListener('keydown', inputCharacters);
numberR.addEventListener('keydown', inputCharacters);
positionR.addEventListener('keydown', inputCharacters);
btn.addEventListener('keydown', inputCharacters);

function inputCharacters(event) {

  if (event.keyCode == 13 && inp==0 ) {
        inp++
        position.focus();
        position.style.backgroundColor="#dedede"
        number.style.backgroundColor="white"

  }else if(event.keyCode == 13 && inp==1){
    inp++
    pay.focus();
    pay.style.backgroundColor="#dedede"
    position.style.backgroundColor="white"
    
  }else if(event.keyCode == 13 && inp==2){
    inp++
    numberR.focus();
    numberR.style.backgroundColor="#dedede"
    pay.style.backgroundColor="white"
 

  }else if(event.keyCode == 13 && inp==3){
    inp++
    positionR.focus();
    positionR.style.backgroundColor="#dedede"
    numberR.style.backgroundColor="white"

  }else if(event.keyCode == 13 && inp==4){
    inp++
    btn.style.border="4px solid white"
    positionR.style.backgroundColor="white"

  }else if(event.keyCode == 13 && inp==4){
    inp++
    btn.style.border="4px solid white"
    positionR.style.backgroundColor="white"

  }else if(event.keyCode == 13 && inp==5){
    positionR.blur()
    number.focus()
    btn.style.border="none"
    inp=0
    if(arrlotview!=0){
        validAll()
    }else{
        activeDangerInp()
     
    }
    
  }
  if (event.keyCode == 82){
    location.reload();
    C=0;
  }
  if (event.keyCode == 73){
    if(arrlotview.length!=0 && C!=0 ){
        var div = document.querySelector("#conteiner-imp");
        imprimirElemento(div);
   
    }else{}
  }

}