import { useParams } from "react-router-dom";
import { useFindClientByIdQuery } from "../generated/graphql-generated";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import ClientEvents from "../components/ClientEvents";
import { Card } from "@/components/ui/card";
import ClientDetails from "@/components/ClientDetails";

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
        <h1 className="text-3xl font-bold mt-8 mb-4">Client Details</h1>
        <Card>
          <ClientDetails
            firstName={data.findClientById.firstName}
            lastName={data.findClientById.lastName}
            email={data.findClientById.email}
          />
        </Card>

        <h3 className="text-xl font-bold mt-8 mb-2">Client History</h3>
        <ClientEvents events={data.findClientById.events} />
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
