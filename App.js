function sins()
{
	document.calculate.result.value=Math.sin(document.calculate.result.value);
}
function cos()
{
    document.calculate.result.value = Math.cos(document.calculate.result.value);
}
function tan()
{
    document.calculate.result.value = Math.tan(document.calculate.result.value);
}
function clr()
{
    document.calculate.result.value = "";
}
function square()
{
    document.calculate.result.value = Math.pow(document.calculate.result.value,2);
}
function cube()
{
    document.calculate.result.value = Math.pow(document.calculate.result.value,3);
}
function sqr()
{
    document.calculate.result.value = Math.sqrt(document.calculate.result.value,1/2);
}
function sqrcube()
{
    document.calculate.result.value = Math.sqrt(document.calculate.result.value,1/3);
}
function Expo()
{
    document.calculate.result.value = Math.exp(document.calculate.result.value)
}
function number(num)
{
    document.calculate.result.value += num;
}
function equal()
{
    document.calculate.result.value = eval(document.calculate.result.value)
}
function pie()
{
    document.calculate.result.value = Math.PI;
}
