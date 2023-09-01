"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Update = (() => {
  const router = useRouter();
  const params = useParams();
  const [title, setTiele] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then(res => res.json())
      .then(result => {
        setTiele(result.title);
        setBody(result.body);
      });
  },[]);

  const submitHandler = (ev: any) =>{
    // const submitHandler = (ev: React.FormEvent<HTMLFormElement>) =>{
    ev.preventDefault();
    const title = ev.target.title.value;
    const body = ev.target.body.value;
    const options = {
      method: 'PUT', // or PATCH
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body })
    };
    fetch(`http://localhost:9999/topics/${id}`, options)
      .then(res => res.json())
      .then(result => {
        const lastId = result.id;
        router.refresh();
        router.push(`/read/${lastId}`);
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <input type="text" name="title" placeholder="title" value={title} onChange={e => setTiele(e.target.value)}/>
      </p>
      <p>
        <textarea name="body" placeholder="body" value={body} onChange={e => setBody(e.target.value)}></textarea>
      </p>
      <p>
        <input type="submit" value='update'/>
      </p>
    </form>
  )
});

export default Update;