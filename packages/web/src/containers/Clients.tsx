import { Client } from "../generated/graphql-generated";
import ClientCard from "../components/ClientCard";

const ClientsContainer: React.FC<{ clients: Client[] }> = ({ clients }) => {
  return (
    <div className="items-start justify-center gap-6 rounded-lg mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {clients?.map((client) => (
        <ClientCard client={client} key={client.id} />
      ))}
    </div>
  );
};

export default ClientsContainer;
