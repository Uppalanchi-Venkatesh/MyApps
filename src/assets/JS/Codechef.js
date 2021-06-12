function codechefSubmissions() {
    const username = document.getElementById("cc-username").value;
    if (!username) {
        alert("Enter the username");
        return false;
    }
    /*
    Using Jquery
    $.ajax({
        url: `/api/codechef/${username}`,
        method: 'GET',
        success: (data) => {
            if(data.status=='failed') {
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
        },
        error: (err) => {
            console.error(err);
        }
    });
    */

    const URL = '/api/codechef/';
    const href = 'https://www.codechef.com';
    fetch(`${URL}${username}`)
        .then(res => { return res.json(); })
        .then(data => {
            if (data.status == "failed") {
                alert("Incorrect username");
                return false;
            }
            let maindiv = document.getElementById('cc-response');
            maindiv.innerHTML = '';
            let heads = ['Date/Time', 'Problem', 'Verdict', 'Language'];
            let table = document.createElement('table');
            table.setAttribute('class', 'table table-bordered');
            let tr = document.createElement('tr');
            for (let val of heads) {
                let th = document.createElement('th');
                th.append(document.createTextNode(val));
                tr.append(th);
            }
            table.append(tr);
            for (let problem of data.submissions) {
                let tr = document.createElement('tr');
                for (let i = 0; i < problem.length; i++) {
                    let td = document.createElement('td');
                    if (i == 1) {
                        let link = document.createElement('a');
                        link.append(document.createTextNode(problem[i][0]));
                        link.setAttribute('href', `${href}${problem[i][1]}`);
                        link.setAttribute('target', '_blank');
                        td.append(link);
                    }
                    else td.append(document.createTextNode(problem[i]));
                    tr.append(td);
                }
                table.append(tr);
            }
            maindiv.append(table);
        })
        .catch(err => {
            console.error(err);
            alert("Some error occured. Please try again");
        });
}
