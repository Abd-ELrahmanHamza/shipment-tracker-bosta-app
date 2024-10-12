export default function statusColor(status: string) {
  if (status === "DELIVERED_TO_SENDER") {
    return "primary-500";
  } else if (status === "CANCELLED") {
    return "primary-500";
  } else if (status === "DELIVERED") {
    return "green-500";
  } else {
    return "blue-500";
  }
}
