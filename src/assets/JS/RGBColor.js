function colorGenerator() {
    const r=document.getElementById("RedSlider");
    const g=document.getElementById("GreenSlider");
    const b=document.getElementById("BlueSlider");

    const rgbcolor="rgb("+r.value+","+g.value+","+b.value+")";
    document.getElementById("color").style.backgroundColor=rgbcolor;
    document.getElementById("color").innerText=rgbcolor;
    document.getElementById("Red").style.backgroundColor="rgb("+r.value+",0,0)";
    document.getElementById("Green").style.backgroundColor="rgb(0,"+g.value+",0)";
    document.getElementById("Blue").style.backgroundColor="rgb(0,0,"+b.value+")";
}
