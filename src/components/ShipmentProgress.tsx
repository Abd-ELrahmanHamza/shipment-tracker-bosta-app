import Card from "./ui/Card";

export default function ShipmentProgress() {
  return (
    <Card>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-sm text-gray-400 text-start">
              Shipment Progress
            </th>
            <th className="text-sm text-gray-400 text-start">Location</th>
            <th className="text-sm text-gray-400 text-start">Status</th>
            <th className="text-sm text-gray-400 text-start">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold text-primary-500">1</td>
            <td className="font-semibold">Origin</td>
            <td className="font-semibold">Shipment Picked Up</td>
            <td className="font-semibold">12/12/2021</td>
          </tr>
        </tbody>
      </table>
      <hr className="my-4" />
    </Card>
  );
}
