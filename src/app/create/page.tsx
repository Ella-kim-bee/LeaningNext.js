"use client"

// import { useRouter } from "next/router"; // ver.12 pageRouter방식
import { useRouter } from "next/navigation"; // appRouter방식

export default function Create(){

  const router = useRouter();
  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) =>{
    ev.preventDefault();
    console.log(ev.target.body.value)
    const title = ev.target.title.value;
    const body = ev.target.body.value;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, body})
    }
    fetch(`http://localhost:9999/topics`, options)
      .then(res => res.json())
      .then(result => {
        const lastId = result.id;
        router.refresh();
        router.push(`/read/${lastId}`);
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <input type="text" name="title" placeholder="title"/>
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value='create'/>
      </p>
    </form>
  )
}