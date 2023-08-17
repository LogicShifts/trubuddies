import { useRouter } from "next/router";

export default function Article(data: any) {
  return <h1>Read Articles id {data.id}</h1>;
}
