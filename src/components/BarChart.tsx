import { AgChartOptions } from 'ag-charts-community';
import { AgCharts } from 'ag-charts-react';
import { ReactElement, useMemo } from 'react';
import { theme } from '../constants/theme.ts';
import { useRollupData } from '../hooks/useRollupData.ts';

export function BarChart(): ReactElement {
  const data = useRollupData();

  const options: AgChartOptions = useMemo(() => {
    return {
      data,
      title: {
        text: 'Flight Time by Month',
      },
      series: [],
      axes: [],
      theme,
    };
  }, [data]);

  return <AgCharts options={options} />;
}
