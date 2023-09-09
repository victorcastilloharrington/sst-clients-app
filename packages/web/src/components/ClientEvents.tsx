import { Event } from "../generated/graphql-generated";

const ClientEvents: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <table>
      <thead>
        <th>
          <td>Event</td>
          <td>Date</td>
        </th>
      </thead>
      <tbody>
        {events.map((event) => {
          return (
            <tr>
              <td>{event.title}</td>
              <td>{event.startDateTime}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClientEvents;
