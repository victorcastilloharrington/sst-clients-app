import { useParams } from "react-router-dom";
import { useFindClientByIdQuery } from "../generated/graphql-generated";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import ClientEvents from "../components/ClientEvents";
import ClientDetails from "../components/ClientDetails";

const Client = () => {
  const { id } = useParams();

  const { data, loading, error } = useFindClientByIdQuery({
    variables: { id: id || "" },
  });

  if (loading) return <Spinner />;

  if (error) return <Error />;

  if (data?.findClientById)
    return (
      <>
        <div>
          <h1>Client Details</h1>
          <ClientDetails client={data.findClientById} />
          <ClientEvents events={data.findClientById.events} />
        </div>
      </>
    );
  return (
    <>
      <div>
        <h1>Client Details</h1>
      </div>
    </>
  );
};

export default Client;
