const InvestedActionCard = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium text-primary">Invested Amount:</span>
            <span className="text-textSecondary">8,50,000</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-primary">Current Value:</span>
            <span className="text-textSecondary">1,003,000</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-primary">% Gain:</span>
            <span className="text-textSecondary">18%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InvestedActionCard;
