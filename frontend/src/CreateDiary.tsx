import api from "./api.json";

type CreateProps = {
    id: string;
    username: string;
}

export default function CreateDiary({id, username}: CreateProps) {
    const createDiary = () => {
        if (!id || !username) {
            alert("Login to post your diary!");
            return;
        }
        const title = document.getElementById("title") as HTMLInputElement;
        const diary = document.getElementById("diary") as HTMLInputElement;
        if (!title.value || !diary.value) {
            alert("Please fill out everything!");
            return;
        }
        const newDiary = {title: title.value, diary: diary.value, owner: username, ownerId: id};
        fetch(api["dev-api"] + "Diary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDiary)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            location.reload();
        })
        .catch(e => {
            console.error(e);
        })
    }
  return (
    <>
      <div className=" border-2 border-orange-300 p-2 mb-5">
        <div className="mb-2 flex items-start">
          <label htmlFor="title" className="mr-2">Title: </label>
          <input id="title" name="title" type="text" />
        </div>
        <div className="mb-2 flex items-start">
          <label htmlFor="diary" className="mr-2">Diary: </label>
          <textarea id="diary" name="diary" cols={30} rows={3}></textarea>
        </div>
        <div className="flex justify-end">
        <button className="border-2 p-1 border-orange-300 hover:bg-orange-200 active:bg-orange-300" onClick={() => createDiary()}>Post</button>
        </div>
        
      </div>
    </>
  );
}
