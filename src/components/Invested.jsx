import { PieChart } from "@mui/x-charts/PieChart";
const Invested = () => {
  const dummyData = [
    {
      label: "Invested",
      value: 72.72,
    },
    {
      label: "Gains",
      value: 16.38,
    },
  ];

  const valueFormatter = (item) => `${item.value}%`;

  return (
    <div className="w-full h-full">
      <PieChart
        className="w-full h-full"
        series={[
          {
            data: dummyData,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 10, additionalRadius: -100, color: "gray" },
            valueFormatter,
          },
        ]}
        height={400}
      />
    </div>
  );
};

export default Invested;
