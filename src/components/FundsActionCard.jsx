const FundsActionCard = () => {
  return (
    <div className=" bg-white overflow-y-scroll h-full w-full flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-3">
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS India Small Cap Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS Value Discovery Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS Blue Chip Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS Nifty 50 Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS Large Cap Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS Technology Fund
          </li>
          <li className="font-medium text-white bg-primary p-2 rounded">
            DWS ESG Fund
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FundsActionCard;
