import { BarChart } from "@mui/x-charts/BarChart";
const Invested = () => {
  const dataset = [
    {
      amount: 4000,
      label: "Invested",
    },
    {
      amount: 10000,
      label: "Total",
    },
  ];

  const chartSetting = {
    xAxis: [
      {
        label: "Amount",
      },
    ],
    width: 450,
    height: 300,
  };

  const valueFormatter = (value) => `${value}`;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "label" }]}
        series={[{ dataKey: "amount", label: "Amount", valueFormatter }]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
};

export default Invested;
