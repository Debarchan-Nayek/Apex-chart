import './App.css';
import Chart from 'react-apexcharts';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Chart
          type="line"
          width={500}
          height={500}
          series={[
            {
              name: "C1",
              data: [28, 29, 33, 36, 32, 32, 33],
              color: "#0d25d6",
            },
            {
              name: "C2",
              data: [12, 11, 14, 18, 17, 13, 13],
              color: "#ff0000",
            },
          ]}
          options={{
            xaxis: {
              tickPlacement: "on",
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
            chart: {
              stacked: true,
            },
            dataLabels: {
              enabled: true,
            },
            stroke: {
              curve: "smooth",
            },
            tooltip: {
              followCursor: true,
            },

            // legend: {
            //   position: "top",
            //   horizontalAlign: "right",
            //   floating: true,
            //   offsetY: -25,
            //   offsetX: -5,
            // },
          }}
        />
      </header>
    </div>
  );
}

export default App;
