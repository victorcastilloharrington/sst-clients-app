import { Event } from "../generated/graphql-generated";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const ClientEvents: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Event</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => {
          return (
            <TableRow>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.startDateTime}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ClientEvents;
