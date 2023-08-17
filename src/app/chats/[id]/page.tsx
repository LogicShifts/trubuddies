import { useRouter } from "next/router";

export default function Chat(data: any) {
  return <h1>Chat with {data.params.id}</h1>;
}
