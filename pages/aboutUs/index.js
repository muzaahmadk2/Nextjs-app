import Link from "next/link";
import { Fragment } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
function AboutPage() {
  const devdetails = details.map((item) => {
    return (
      <li key={item.id}>
        <Link href={`aboutUs/${item.id}`}>{item.name}</Link>
      </li>
    );
  });
  return (
    <Fragment>
      <h1>This is About Page</h1>
      <ul>{devdetails}</ul>
    </Fragment>
  );
}

export default AboutPage;
