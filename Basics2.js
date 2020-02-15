//functions like methods

function add(a,b)
{
	return a+b;
}

console.log(add(5,4));

var a=["hello","goodbye","5","world"]
//to get size 
console.log (a.length + "--"+"Size of the array")
for (var i=0;i<a.length; i++)
{
	//to print the values
	console.log(a[i]);
}

var v = new Array();
v[0]="hello";
v[1]="good";
v[2]="morning"

console.log(v.length +"Size of the array");

// print array values in reverse
for(var k=v.length-1;k>=0;k--)
{
	console.log(v[k]);
}

//strings
var mn ="ashwini";
console.log(mn.charAt(3));
console.log(mn.concat("malathesh"));
console.log(mn.indexOf("w"));
console.log(mn.slice(2,6));
console.log(mn.toUpperCase())
console.log(mn.trim())