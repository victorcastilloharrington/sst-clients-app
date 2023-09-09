import { useNavigate } from "react-router-dom";
import { Client } from "../generated/graphql-generated";
import ClientDetails from "./ClientDetails";

const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/client/${client.id}`);
  return (
    <div>
      <ClientDetails client={client} />
      <button onClick={handleClick}>Go To Detail</button>
    </div>
  );
};

export default ClientCard;
