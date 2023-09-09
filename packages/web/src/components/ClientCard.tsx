import { useNavigate } from "react-router-dom";
import { Client } from "../generated/graphql-generated";
import { Button } from "./ui/button";
import { Card, CardFooter } from "./ui/card";
import ClientDetails from "./ClientDetails";

const ClientCard: React.FC<{ client: Client; isDetail?: boolean }> = ({
  client,
  isDetail,
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/client/${client.id}`);
  return (
    <Card className={isDetail ? "w-[350px]" : undefined}>
      <ClientDetails
        firstName={client.firstName}
        lastName={client.lastName}
        email={client.email}
      />
      <CardFooter className="flex justify-between">
        <Button onClick={handleClick}>See Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ClientCard;
