const FundsActionCard = () => {
  return (
    <div className=" bg-white overflow-y-scroll h-full w-full flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-3">
          <li className="font-medium text-white bg-primary p-2 rounded">
            Fund 1
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            Fund 2
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            Fund 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FundsActionCard;
