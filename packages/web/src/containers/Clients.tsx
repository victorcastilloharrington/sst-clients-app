import { Client } from "../generated/graphql-generated";
import ClientCard from "../components/ClientCard";

const ClientsContainer: React.FC<{ clients: Client[] }> = ({ clients }) => {
  return (
    <>
      {clients?.map((client) => (
        <ClientCard client={client} key={client.id} />
      ))}
    </>
  );
};

export default ClientsContainer;
