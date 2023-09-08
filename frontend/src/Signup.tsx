import api from "./api.json";
type Account = {
    _id: string,
    username: string
}

export default function Signup() {
    const signup = () => {
        const username = document.getElementById("username") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        if (!username.value || !password.value) {
            alert("Please fill out everything!");
            return;
        }
        const login = {username: username.value, password: password.value};
        fetch(api["dev-api"] + "Account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data.account);
            const acc = data.account as Account
            if (acc) {
                location.href = `/login`;
            }
        })
        .catch(e => {
            console.error(e);
            alert("Username already exists!");
        })
    }
  return (
    <div className="flex justify-center mt-">
      <div className="max-w-[700px] p-2 bg-orange-200 mt-2 text-lg">
        <p>Create an account here!</p>
        <div className="mb-2">
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" type="text" />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="flex justify-end">
          <button className="border-2 p-1 border-orange-300 hover:bg-orange-300 active:bg-orange-400" onClick={() => signup()}>
            Signup
          </button>
        </div>
        <a href="/" className="hover:underline">return to home</a>
      </div>
    </div>
  );
}
