import { Client } from "../generated/graphql-generated";

const ClientDetails: React.FC<{ client: Client }> = ({ client }) => {
  return (
    <div>
      <h3>{`${client.firstName} ${client.lastName}`}</h3>
      <p>{client.email}</p>
    </div>
  );
};

export default ClientDetails;
