import Error from "../components/Error";
import Spinner from "../components/Spinner";
import ClientsContainer from "../containers/Clients";
import { useQueryClientListQuery } from "../generated/graphql-generated";

const Homepage = () => {
  const { data, loading, error } = useQueryClientListQuery();

  if (loading) return <Spinner />;

  if (error) return <Error />;

  if (data?.queryClientList)
    return (
      <>
        <div>
          <h1>All Clients</h1>
          <ClientsContainer clients={data.queryClientList} />
        </div>
      </>
    );
};

export default Homepage;
