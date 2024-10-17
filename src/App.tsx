import { ChangeEvent, useState } from 'react';
import { BarChart } from './components/BarChart.tsx';
import LineChart from './components/LineChart';
import { PieChart } from './components/PieChart.tsx';

import './App.css';

enum ChartType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie',
}

function App() {
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);

  const handleChartTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setChartType(event.target.value as ChartType);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Learn AG Charts with LiveLoveApp</h1>
        <div className="actions">
          <select onChange={handleChartTypeChange}>
            <option value={ChartType.Line}>Line Chart</option>
            <option value={ChartType.Bar}>Bar Chart</option>
            <option value={ChartType.Pie}>Pie Chart</option>
          </select>
        </div>
      </div>
      <div className="content">
        <div className="chart">
          {chartType === ChartType.Line && <LineChart />}
          {chartType === ChartType.Bar && <BarChart />}
          {chartType === ChartType.Pie && <PieChart />}
        </div>
      </div>
    </div>
  );
}

export default App;
