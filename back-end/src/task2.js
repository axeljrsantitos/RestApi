
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