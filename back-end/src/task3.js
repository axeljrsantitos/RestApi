/**
 * Created by Axel Santos on 6/26/2015.
 */

var Calculator = function(){
    this.memory = '';

    this.addition = function (num1, num2) {

        var result = 0;
        if (num1 !== undefined && num2 !== undefined) {

            result = num1 + num2;
        }

        if ( num2 !== undefined) {

            result = this.memory + num1;
        }

        this.memory = result;
        return result;
    };



    this.minimum = function(lista,pos,n){
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
        return this.minimum(lista,pos-1,n);
    };
};
var lista = [1,2,3];
var cal = new Calculator();
console.log(cal.minimum(lista));
