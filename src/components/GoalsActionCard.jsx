const GoalsActionCard = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium text-primary">Goals:</span>
            <span className="text-textSecondary">Trip to Goa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoalsActionCard;
