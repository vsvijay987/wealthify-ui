const LoyaltyActionCard = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium text-primary">Points Redeemed:</span>
            <span className="text-textSecondary">1000</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-primary">Total Points:</span>
            <span className="text-textSecondary">2000</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoyaltyActionCard;
