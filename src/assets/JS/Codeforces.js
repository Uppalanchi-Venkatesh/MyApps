var verdicts=[],languages=[];

function getInfo() {
    verdicts=[];languages=[];
    const username = document.getElementById("cf-username").value;
    if(!username) {
        alert("Enter the username");
        return false;
    }
    const URL="https://codeforces.com/api/";

    fetch(`${URL}user.info?handles=${username}`)
        .then(res => { return res.json(); })
        .then(data => {
            if(data.status==="FAILED") {
                alert("Incorrect username");
                return false;
            }
            document.getElementById("rating").innerHTML=data.result[0].rating;
            document.getElementById("rank").innerHTML=data.result[0].rank;
            document.getElementById("maxrating").innerHTML=data.result[0].maxRating;
            document.getElementById("maxrank").innerHTML=data.result[0].maxRank;
            document.getElementById("cf-response").style.display="inline";

            fetch(`${URL}user.rating?handle=${username}`)
                .then(res => { return res.json(); })
                .then(data1 => {
                    let maindiv = document.getElementById("cf-ratingchange");
                    maindiv.innerHTML="";
                    let table = document.createElement("table");
                    table.setAttribute("class", "table table-bordered");
                    let tr1 = document.createElement("tr");
                    let td11 = document.createElement("th");
                    let td21 = document.createElement("th");
                    let td31 = document.createElement("th");
                    let td41 = document.createElement("th");
                    let td51 = document.createElement("th");
                    td11.appendChild(document.createTextNode("Contest ID"));
                    td21.appendChild(document.createTextNode("Contest Name"));
                    td31.appendChild(document.createTextNode("Old Rating"));
                    td41.appendChild(document.createTextNode("New Rating"));
                    td51.appendChild(document.createTextNode("Rank"));
                    tr1.append(td11,td21,td31,td41,td51);
                    table.appendChild(tr1);
                    for(let i=0;i<data1.result.length;i++) {
                        let tr = document.createElement("tr");
                        let td1 = document.createElement("td");
                        let td2 = document.createElement("td");
                        let td3 = document.createElement("td");
                        let td4 = document.createElement("td");
                        let td5 = document.createElement("td");
                        td1.appendChild(document.createTextNode(data1.result[i].contestId));
                        td2.appendChild(document.createTextNode(data1.result[i].contestName));
                        td3.appendChild(document.createTextNode(data1.result[i].oldRating));
                        td4.appendChild(document.createTextNode(data1.result[i].newRating));
                        td5.appendChild(document.createTextNode(data1.result[i].rank));
                        tr.append(td1,td2,td3,td4,td5);
                        table.appendChild(tr);
                    }
                    maindiv.appendChild(table);
                });

                fetch(`${URL}user.status?handle=${username}`)
                    .then(res=> { return res.json(); })
                    .then(data1 => {
                        var map1=new Map();
                        var map2=new Map();
                        for(let i=0;i<data1.result.length;i++) {
                            let key1=data1.result[i].verdict;
                            let key2=data1.result[i].programmingLanguage;
                            if(map1.has(key1)) map1.set(key1,map1.get(key1)+1);
                            else map1.set(key1,1);
                            if(map2.has(key2)) map2.set(key2,map2.get(key2)+1);
                            else map2.set(key2,1);
                        }
                        map1.forEach((key,value) => verdicts.push([value,key]));
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(draw1);

                        map2.forEach((key,value) => languages.push([value,key]));
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(draw2);
                    });
        })
        .catch(err => alert("Some error occured"));
}

function draw1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'solvedcount');
    data.addColumn('number', 'Slices');
    data.addRows(verdicts);
          
    var options = {'title':'Your verdicts of submitted problems','width':500,'height':400};
    var chart = new google.visualization.PieChart(document.getElementById("cf-verdictchart"));
    chart.draw(data, options);
}

function draw2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'solvedcount');
    data.addColumn('number', 'Slices');
    data.addRows(languages);
          
    var options = {'title':'Languages used','width':500,'height':400};
    var chart = new google.visualization.PieChart(document.getElementById("cf-languagechart"));
    chart.draw(data, options);
}


