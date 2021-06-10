function codechefSubmissions() {
    const username = document.getElementById("cc-username").value;
    if(!username) {
        alert("Enter the username");
        return false;
    }
    const URL="http://localhost:3000/api/codechef/";

    fetch(`${URL}${username}`)
        .then(res => { return res.json(); })
        .then(data => {
            if(data.status==="failed") {
                alert("Incorrect username");
                return false;
            }
            let maindiv = document.getElementById('cc-response');
            maindiv.innerHTML = '';
            let heads = ['Date/Time','Problem','Verdict','Language'];
            let table = document.createElement('table');
            table.setAttribute('class','table table-bordered');
            let tr = document.createElement('tr');
            for(let val of heads) {
                let th = document.createElement('th');
                th.append(document.createTextNode(val));
                tr.append(th);
            }
            table.append(tr);
            for(let problem of data.submissions) {
                let tr = document.createElement('tr');
                for(let val of problem) {
                    let td = document.createElement('td');
                    td.append(document.createTextNode(val));
                    tr.append(td);
                }
                table.append(tr);
            }
            maindiv.append(table);
        })
        .catch(err => console.error("Error: " + err));
}
