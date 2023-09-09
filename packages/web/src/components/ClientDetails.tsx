import { Client } from "../generated/graphql-generated";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";

export type TClientDetails = Pick<Client, "firstName" | "lastName" | "email">;
const ClientDetails: React.FC<TClientDetails> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <CardHeader>
      <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
      <CardDescription>{email}</CardDescription>
    </CardHeader>
  );
};

export default ClientDetails;
