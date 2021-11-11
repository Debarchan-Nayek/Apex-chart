import './App.css';
import Chart from 'react-apexcharts';

function App() {
  return (
    <div>
      <Chart
        type="bar"
        width={1000}
        height={500}
        series={[
          {
            name: "3 PT",
            data: [
              100, 150, 50, 75, 67, 124, 233, 322, 343, 284, 392, 412, 23, 387,
              298, 193, 183, 293, 128, 395, 376, 423,
            ],
            color: "#3E8AE4",
          },
          {
            name: "2 PT",
            data: [
              90,
              110,
              60,
              85,
              79,
              300,
              112,
              33,
              434,
              425,
              125,
              62,
              326,
              217,
              23,
              223,
              232,
              ,
              424,
              500,
              501,
              234,
            ],
            color: "#EF950D",
          },
          {
            name: "FT",
            data: [
              105, 65, 68, 76, 72, 189, 203, 129, 328, 515, 626, 272, 123, 33,
              243, 81, 426, 111, 126, 234, 425, 111,
            ],
            color: "#FFC903",
          },
        ]}
        options={{
          xaxis: {
            tickPlacement: "on",
            categories: [
              "MIA",
              "CLE",
              "BOS",
              "NYK",
              "BRO",
              "LAL",
              "BOS",
              "CHI",
              "GEC",
              "KEN",
              "CLE",
              "HUS",
              "BOS",
              "NYK",
              "BRO",
              "LAL",
              "BOS",
              "CHI",
              "GEC",
              "KEN",
              "CLE",
              "HUS",
            ],
          },
          chart: {
            stacked: true,
          },
          tooltip: {
            followCursor: true,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              vertical: false,
              borderRadius: 5,
            },
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
        }}
      />

      <Chart
        type="line"
        width={1100}
        height={500}
        series={[
          {
            name: "3 PT",
            data: [28, 29, 33, 36, 32, 32, 33, 26,9,19,13,28,39,16,26,22,24,18,9,8,12,17,20],
            color: "#3E8AE4",
          },
          {
            name: "2 PT",
            data: [12, 11, 14, 18, 17, 13, 13,34,21,20,29,8,6,16,25,30,24,18,15,28],
            color: "#EF950D",
          },
          {
            name: "FT",
            data: [12, 11, 14, 18, 17, 13, 13, 6,27,3,20,19,30,26,17,26,20,29,26,18],
            color: "#FFC903",
          },
        ]}
        options={{
          xaxis: {
            tickPlacement: "on",
            categories: ["2002-03", "2003-04", "2004-05", "2005-06", "2006-07", "2007-08", "2008-09", "2009-10", "2010-11", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20", "2020-21", "2021-21"],
          },
          chart: {
            stacked: true,
          },
          stroke: {
            width: 1,
            curve: "smooth",
          },
          tooltip: {
            followCursor: true,
          },
          markers: {
            size: 5,
            shape: "circle",
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
