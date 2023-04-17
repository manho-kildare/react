import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Title } from "../components";


export default function BasicForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [form, setForm] = useState<{name:string, email:string}>({name:"", email: ""});

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      alert(JSON.stringify(Object.fromEntries(formData), null, 2))
    }
    ,[name, email]);

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // setName(notUsed => e.target.value);
    setForm(form => ({...form, name:e.target.value}))
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    
    setForm(form => ({...form, email:e.target.value}));
  }, []);
  return (
    <section className="mt-4">
      <Title>BasicFrom</Title>
      <div className="flex justify-center-mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" value={name} onChange={onChangeName} id="name" placeholder="enter your name" className="input input-primary" />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">email</span>
            </label>
            <input type="email" id="email" value={email} onChange={onChangeEmail} placeholder="enter your email" className="input input-primary" />
          </div>
          <div className="flex justify-center mt-4">
            <input type="submit" value="Submit" className="btn btn-sm btn-primary w-1/2" />
            <input type="submit" defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  );
}
