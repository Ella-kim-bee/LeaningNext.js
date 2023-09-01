"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const onDelete = (() =>{
    const options = {
      method: 'DELETE'
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then(res => res.json())
      .then(result => {
        router.refresh();
        router.push('/');
      });
  });
  return (
    <ul>
      <li><Link href='/create'>Create</Link></li>
      {id ?
        <>
          <li><Link href={`/update/${id}`}>Update</Link></li>
          <li><input type='button' value='delete' onClick={onDelete}/></li>
        </>
      : null}
    </ul>
  );
}
