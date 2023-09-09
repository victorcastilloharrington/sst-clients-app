import { Client } from "../generated/graphql-generated";

const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
  return (
    <div>
      <h3>{`${client.firstName} ${client.lastName}`}</h3>
      <p>{client.email}</p>
      <button>Go To Detail</button>
    </div>
  );
};

export default ClientCard;
