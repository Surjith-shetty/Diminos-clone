function calc()
{
var x1=parseInt(document.getElementById("x1").value);
var x2=parseInt(document.getElementById("x2").value);
var x3=parseInt(document.getElementById("x3").value);

var y1=parseInt(document.getElementById("y1").value);
var y2=parseInt(document.getElementById("y2").value);
var y3=parseInt(document.getElementById("y3").value);

var z1=parseInt(document.getElementById("z1").value);
var z2=parseInt(document.getElementById("z2").value);
var z3=parseInt(document.getElementById("z3").value);

var c1=parseInt(document.getElementById("c1").value);
var c2=parseInt(document.getElementById("c2").value);
var c3=parseInt(document.getElementById("c3").value);

var x=0,y=0,z=0;
var tx=0,ty=0,tz=0,i;

for(var i=1;i<1000;i++)
{
    tx=x;
    x=(c1-(z1*z)-(y1*y))/x1;

    if(x==tx)
    {
        document.getElementById("ax").innerHTML=x;
        document.getElementById("ay").innerHTML=y;
        document.getElementById("az").innerHTML=z;
        break;
    }
    
    else
    {
        ty=y;
        y=(c2-(x2*x)-(z2*z))/y2;

        tz=z;
        z=(c3-(x3*x)-(y3*y))/z3;
    
    }
}
}
