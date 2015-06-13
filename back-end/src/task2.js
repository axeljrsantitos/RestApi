
function test() {

    console.log('test');
}
/**
 * Created by Axel Santos on 6/12/2015.
 */
var calculateNumber=function(){
    console.log('SUM',sum(arguments));
    console.log('AVG',avg(arguments));
    console.log('MAX',maximum(arguments));
    console.log('MIN',minimum(arguments));
};

var sum=function(n,pos){
    if(pos==undefined)
        pos=n.length-1;
    if(pos==0)
        return n[0];
    return n[pos]+sum(n,pos-1);

};

var avg=function(n,pos){
    if(pos==undefined)
        pos=n.length-1;
    if(pos==0)
        return n[0];
    return(n[pos]+sum(n,pos-1))/(n.length);

};

var maximum = function(lista,pos,n){
    if(pos==undefined)
        pos=lista.length-1;
    if(pos==0 && n==undefined)
        return lista[0];
    if(n==undefined)
        n = lista[pos];
    if(pos<0)
        return n;
    if(lista [pos]>n)
        n=lista [pos];
    return maximum(lista,pos-1,n);
};

var minimum = function(lista,pos,n){
    if(pos==undefined)
        pos=lista.length-1;
    if(pos==0 && n==undefined)
        return lista[0];
    if(n==undefined)
        n = lista[pos];
    if(pos<0)
        return n;
    if(lista [pos]<n)
        n=lista [pos];
    return minimum(lista,pos-1,n);
};
/*
public void NumMasGrandes(int[] vector, int[] numgran, int idx){
    // comprobamos que no hemos llegado al final del vector
    if ( idx < vector.length ){
        //inicializamos numgran con los dos primeros numeros del vector.
        //se sobreentiende que numgran es un array de 2 enteros.
        if ( idx < 2 ){
            numgran[0] = vector [0];
            numgran[1] = vector [1];
            NumMasGrandes(vector, numgran, idx+2);
        }else{
            if ( ( vector[idx]> numgran[0] ) && ( vector[idx]> numgran[1] )){
                if ( numgran[0] < numgran[1] ){
                    numgran[0] = vector[idx];
                }else{
                    numgran[1] = vector[idx];
                }
            }else if ( vector[idx]> numgran[0] ){
                numgran[0] = vector[idx];
            }else if ( vector[idx]> numgran[1] ){
                numgran[1] = vector[idx];
            }else{
            }
            NumMasGrandes(vector, numgran, idx+1);
        }
    }
}*/