import './App.css';
import Chart from 'react-apexcharts';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <Chart
          type="bar"
          // width={500}
          // height={500}
          series={[
            {
              name: "C1",
              data: [100, 150, 50, 75, 67, 500],
              color: "#0d25d6",
            },
            {
              name: "C2",
              data: [90, 110, 60, 85, 79, 300],
              color: "#ff0000",
            },
            {
              name: "C3",
              data: [105, 65, 68, 76, 72, 189],
              color: "#dd0",
            },
            {
              name: "C4",
              data: [81, 181, 183, 290, 285, 40],
              color: "#ff00a0",
            },
            {
              name: "C5",
              data: [250, 82, 91, 82, 60, 185],
              color: "#C85C5C",
            },
            {
              name: "C6",
              data: [199, 118, 160, 185, 179, 198],
              color: "#34BE82",
            },
          ]}
          options={{
            theme:{
              mode:'dark'
            },
            xaxis:{
              tickPlacement:'on',
              categories:['Jan','Feb','Mar','Apr','May','Jun']
            },
            chart:{
              stacked: true
            },
            tooltip:{
              followCursor: true
            }
          }}
        />
      </header>
    </div>
  );
}

export default App;
