window.onload = () => {

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'solvedcount');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Leetcode', 30],
        ['Codechef', 46],
        ['Codeforces', 144],
        ['Vjudge', 112],
        ['Mentorpick', 164]
    ]);
          
    var options = {'title':'Problems solved in different Coding Platforms','width':500,'height':400};

    var chart = new google.visualization.PieChart(document.getElementById("chart"));
    chart.draw(data, options);
  }
}