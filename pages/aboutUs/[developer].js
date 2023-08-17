import { useRouter } from "next/router";
const details = [
  { "id": 1, "name": "Yash", "role": "Senior Developer" },
  { "id": 2, "name": "Vaibhav", "role": "Backend Developer" },
  { "id": 3, "name": "Suresh", "role": "Frontend Developer" },
];

function DeveloperPage() {
  const router = useRouter();
  const id = router.query.developer;
    let deve = details.find(itm => {
        return itm.id == id;
    })



  return  <h1>This is {deve.name} {deve.role}</h1>
}

export default DeveloperPage;
