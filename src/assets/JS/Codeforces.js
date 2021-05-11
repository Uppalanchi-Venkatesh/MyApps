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
        .then(res => {
            return res.json()
        })
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
                .then(res => {
                    return res.json();
                })
                .then(data1 => {
                    document.getElementById("cf-ratingchange").innerHTML="";
                    var table = document.createElement("TABLE");
                    table.setAttribute("id", "myTable");
                    table.setAttribute("class", "table");
                    document.getElementById("cf-ratingchange").appendChild(table);
                    var header = table.createTHead();
                    header.setAttribute("id","cf-thead");
                    document.getElementById("cf-thead").style.fontWeight="bold";
                    document.getElementById("myTable").style.fontSize="18px";
                    var row = header.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(0);
                    var cell3 = row.insertCell(0);
                    var cell4 = row.insertCell(0);
                    var cell5 = row.insertCell(0);
                    cell5.innerHTML="ContestID";
                    cell4.innerHTML="Contest Name";
                    cell3.innerHTML="Old Rating";
                    cell2.innerHTML="New Rating";
                    cell1.innerHTML="Rank";
                    for(let i=0;i<data1.result.length;i++) {
                        var tr = document.createElement("TR");
                        tr.setAttribute("id", "myTr"+(i+1));
                        document.getElementById("myTable").appendChild(tr);
                        var td1 = document.createElement("TD");
                        var td2 = document.createElement("TD");
                        var td3 = document.createElement("TD");
                        var td4 = document.createElement("TD");
                        var td5 = document.createElement("TD");
                        document.getElementById("myTr"+(i+1)).appendChild(td1);
                        document.getElementById("myTr"+(i+1)).appendChild(td2);
                        document.getElementById("myTr"+(i+1)).appendChild(td3);
                        document.getElementById("myTr"+(i+1)).appendChild(td4);
                        document.getElementById("myTr"+(i+1)).appendChild(td5);
                        cell1 = document.createTextNode(data1.result[i].contestId);
                        cell2 = document.createTextNode(data1.result[i].contestName);
                        cell3 = document.createTextNode(data1.result[i].oldRating);
                        cell4 = document.createTextNode(data1.result[i].newRating);
                        cell5 = document.createTextNode(data1.result[i].rank);
                        td1.appendChild(cell1);
                        td2.appendChild(cell2);
                        td3.appendChild(cell3);
                        td4.appendChild(cell4);
                        td5.appendChild(cell5);
                    }
                });

                fetch(`${URL}user.status?handle=${username}`)
                    .then(res=> {
                        return res.json();
                    })
                    .then(data1 => {
                        var map1=new Map();
                        var map2=new Map();
                        for(let i=0;i<data1.result.length;i++) {
                            let key1=data1.result[i].verdict;
                            let key2=data1.result[i].programmingLanguage;
                            if(map1.has(key1))
                                map1.set(key1,map1.get(key1)+1);
                            else
                                map1.set(key1,1);
                            if(map2.has(key2))
                                map2.set(key2,map2.get(key2)+1);
                            else
                                map2.set(key2,1);
                        }
                        map1.forEach((key,value) => verdicts.push([value,key]));
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(draw1);

                        map2.forEach((key,value) => languages.push([value,key]));
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(draw2);
                    });
        })
        .catch(err => {
            alert("Some error occured");
            return;
        });
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


