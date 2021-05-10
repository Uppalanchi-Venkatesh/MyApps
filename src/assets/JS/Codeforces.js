function getInfo() {
    const username = document.getElementById("cf-username").value;
    if(!username) {
        alert("Enter the username");
        return;
    }
    const URL="https://codeforces.com/api/";

    fetch(`${URL}user.info?handles=${username}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            //console.log(JSON.stringify(data));
            document.getElementById("rating").innerHTML=data.result[0].rating;
            document.getElementById("rank").innerHTML=data.result[0].rank;
            document.getElementById("maxrating").innerHTML=data.result[0].maxRating;
            document.getElementById("maxrank").innerHTML=data.result[0].maxRank;
            document.getElementById("cf-response").style.display="inline";
        })
        .catch(err => {
            //alert("Incorrect username or some error occured");
            console.log('User not found');
            return;
        });

    fetch(`${URL}user.rating?handle=${username}`)
        .then(res => {
                return res.json();
        })
        .then(data => {
            //console.log(JSON.stringify(data));
            //console.log(data.result[0]);
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
            for(let i=0;i<data.result.length;i++) {
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
                cell1 = document.createTextNode(data.result[i].contestId);
                cell2 = document.createTextNode(data.result[i].contestName);
                cell3 = document.createTextNode(data.result[i].oldRating);
                cell4 = document.createTextNode(data.result[i].newRating);
                cell5 = document.createTextNode(data.result[i].rank);
                td1.appendChild(cell1);
                td2.appendChild(cell2);
                td3.appendChild(cell3);
                td4.appendChild(cell4);
                td5.appendChild(cell5);
            }
        })
        .catch(err => {
            console.log("Error Occurred");
            alert("Incorrect username or some error occured");
            return;
        })
}


